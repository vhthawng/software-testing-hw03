#!/usr/bin/env node
/**
 * Script tính điểm thang đo chuẩn SUS (System Usability Scale) theo John Brooke (1986).
 * Công thức:
 *   - Câu lẻ (1, 3, 5, 7, 9): Điểm = Trả lời - 1
 *   - Câu chẵn (2, 4, 6, 8, 10): Điểm = 5 - Trả lời
 *   - Điểm tổng (0 - 100) = Tổng điểm thành phần * 2.5
 * 
 * Cách dùng:
 *   node calculate_sus.js [input.json] [--output-md report.md]
 */

const fs = require('fs');
const path = require('path');

// 10 câu hỏi chuẩn SUS tiếng Việt
const SUS_QUESTIONS = [
  "1. Tôi nghĩ rằng tôi sẽ thích sử dụng hệ thống này thường xuyên.",
  "2. Tôi thấy hệ thống này phức tạp một cách không cần thiết.",
  "3. Tôi nghĩ rằng hệ thống này dễ sử dụng.",
  "4. Tôi nghĩ rằng tôi sẽ cần sự hỗ trợ của một chuyên gia kỹ thuật để có thể sử dụng hệ thống này.",
  "5. Tôi nhận thấy các chức năng trong hệ thống này được tích hợp rất tốt.",
  "6. Tôi nghĩ rằng có quá nhiều sự thiếu nhất quán trong hệ thống này.",
  "7. Tôi tưởng tượng rằng hầu hết mọi người sẽ học cách sử dụng hệ thống này rất nhanh chóng.",
  "8. Tôi thấy hệ thống này rất cồng kềnh/bất tiện khi sử dụng.",
  "9. Tôi cảm thấy rất tự tin khi sử dụng hệ thống này.",
  "10. Tôi cần phải học rất nhiều điều trước khi có thể sử dụng thành thạo hệ thống này."
];

function getGradeAndAdjective(score) {
  if (score >= 84.1) return { grade: 'A+', adj: 'Best Imaginable (Xuất sắc vượt trội)', percentile: 'Top 96–100%' };
  if (score >= 80.3) return { grade: 'A',  adj: 'Excellent (Xuất sắc)', percentile: 'Top 90–95%' };
  if (score >= 74.0) return { grade: 'B',  adj: 'Good (Tốt)', percentile: 'Top 70–89%' };
  if (score >= 68.0) return { grade: 'C+', adj: 'Above Average (Trên trung bình ngành)', percentile: 'Top 50–69%' };
  if (score >= 51.0) return { grade: 'C',  adj: 'OK / Marginal (Chấp nhận được)', percentile: 'Top 15–49%' };
  return { grade: 'F',  adj: 'Poor / Unacceptable (Kém / Không đạt)', percentile: 'Dưới 15%' };
}

function calculateParticipantSUS(responses) {
  if (!Array.isArray(responses) || responses.length !== 10) {
    throw new Error("Mỗi người tham gia phải có đúng 10 câu trả lời (thang điểm 1 - 5)");
  }

  let totalScore = 0;
  const contributions = [];

  for (let i = 0; i < 10; i++) {
    const val = Number(responses[i]);
    if (isNaN(val) || val < 1 || val > 5) {
      throw new Error(`Giá trị câu hỏi ${i + 1} phải từ 1 đến 5, nhận được: ${responses[i]}`);
    }

    let contrib = 0;
    if (i % 2 === 0) {
      // Câu lẻ (0, 2, 4, 6, 8 tương ứng câu 1, 3, 5, 7, 9)
      contrib = val - 1;
    } else {
      // Câu chẵn (1, 3, 5, 7, 9 tương ứng câu 2, 4, 6, 8, 10)
      contrib = 5 - val;
    }
    contributions.push(contrib);
    totalScore += contrib;
  }

  const susScore = totalScore * 2.5;
  const { grade, adj, percentile } = getGradeAndAdjective(susScore);

  return {
    rawResponses: responses,
    contributions,
    susScore,
    grade,
    adjective: adj,
    percentile
  };
}

function analyzeGroupSUS(participants) {
  const results = participants.map((p, idx) => {
    const calc = calculateParticipantSUS(p.responses);
    return {
      id: p.id || `P${idx + 1}`,
      name: p.name || `Người tham gia ${idx + 1}`,
      contact: p.contact || "N/A",
      role: p.role || "Người dùng",
      ...calc
    };
  });

  const scores = results.map(r => r.susScore);
  const meanScore = scores.reduce((a, b) => a + b, 0) / scores.length;
  
  // Tính độ lệch chuẩn (Standard Deviation)
  const variance = scores.reduce((sum, s) => sum + Math.pow(s - meanScore, 2), 0) / scores.length;
  const stdDev = Math.sqrt(variance);

  const groupGrade = getGradeAndAdjective(meanScore);

  return {
    count: participants.length,
    meanScore: Number(meanScore.toFixed(2)),
    stdDev: Number(stdDev.toFixed(2)),
    minScore: Math.min(...scores),
    maxScore: Math.max(...scores),
    overallGrade: groupGrade.grade,
    overallAdjective: groupGrade.adj,
    overallPercentile: groupGrade.percentile,
    participants: results
  };
}

function generateMarkdownReport(analysis) {
  let md = `### BẢNG TỔNG HỢP ĐIỂM SỐ SUS (SYSTEM USABILITY SCALE)\n\n`;
  md += `* **Số lượng người tham gia:** ${analysis.count} người\n`;
  md += `* **Điểm SUS trung bình:** **${analysis.meanScore} / 100**\n`;
  md += `* **Độ lệch chuẩn (Std Dev):** ${analysis.stdDev}\n`;
  md += `* **Khoảng điểm (Min – Max):** ${analysis.minScore} – ${analysis.maxScore}\n`;
  md += `* **Xếp loại chung (Grade):** **${analysis.overallGrade}** (${analysis.overallAdjective})\n`;
  md += `* **Phân vị xếp hạng (Percentile):** ${analysis.overallPercentile}\n\n`;

  md += `| Người tham gia | Vai trò / Hồ sơ | SĐT/Zalo (che số) | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Điểm SUS | Xếp loại |\n`;
  md += `| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |\n`;

  analysis.participants.forEach(p => {
    const q = p.rawResponses.join(' | ');
    md += `| **${p.id}** (${p.name}) | ${p.role} | \`${p.contact}\` | ${q} | **${p.susScore}** | **${p.grade}** |\n`;
  });

  return md;
}

// Nếu chạy trực tiếp từ dòng lệnh
if (require.main === module) {
  const args = process.argv.slice(2);
  let inputFile = null;
  let outputFile = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--output-md' && args[i + 1]) {
      outputFile = args[i + 1];
      i++;
    } else if (!inputFile && !args[i].startsWith('--')) {
      inputFile = args[i];
    }
  }

  // Dữ liệu mẫu nếu không có file input
  let data = [
    { id: "P1", name: "Nguyễn Văn A", contact: "0912****78", role: "Nhân viên văn phòng", responses: [4, 2, 4, 2, 4, 2, 4, 2, 4, 2] },
    { id: "P2", name: "Trần Thị B", contact: "0983****12", role: "Sinh viên kinh tế", responses: [3, 3, 4, 2, 3, 3, 4, 3, 3, 2] },
    { id: "P3", name: "Lê Hoàng C", contact: "0905****45", role: "Kinh doanh tự do", responses: [4, 1, 5, 1, 4, 2, 5, 2, 4, 1] },
    { id: "P4", name: "Phạm Minh D", contact: "0934****89", role: "Kế toán viên", responses: [3, 2, 3, 3, 3, 2, 3, 3, 3, 3] },
    { id: "P5", name: "Vũ Thu E", contact: "0971****67", role: "Giáo viên", responses: [4, 2, 4, 1, 4, 2, 4, 2, 4, 2] },
    { id: "P6", name: "Đặng Quốc F", contact: "0918****34", role: "Bán hàng online", responses: [4, 3, 3, 2, 4, 3, 4, 2, 4, 2] },
    { id: "P7", name: "Bùi Mai G", contact: "0962****90", role: "Nhân sự (HR)", responses: [3, 2, 4, 2, 3, 2, 4, 2, 3, 2] }
  ];

  if (inputFile && fs.existsSync(inputFile)) {
    data = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));
  }

  const analysis = analyzeGroupSUS(data);
  const report = generateMarkdownReport(analysis);

  console.log(report);

  if (outputFile) {
    fs.writeFileSync(outputFile, report, 'utf-8');
    console.log(`\nĐã xuất báo cáo ra file: ${outputFile}`);
  }
}

module.exports = {
  SUS_QUESTIONS,
  calculateParticipantSUS,
  analyzeGroupSUS,
  generateMarkdownReport
};
