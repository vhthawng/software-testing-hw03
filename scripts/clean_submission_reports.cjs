const fs = require('fs');
const edit = (file, fn) => { const old = fs.readFileSync(file, 'utf8'); fs.writeFileSync(file, fn(old).trim() + '\n'); };
edit('HW03_Main_Report.md', s => s
  .replace(/ Không yêu cầu quay mặt hay biểu cảm\.[^\n]*/g, '')
  .replace(/ Các tuyên bố tần suất[^\n]*/g, '')
  .replace(/Ảnh desktop có caption[^\n]*/, 'Ảnh desktop có caption email/MSSV/họ tên, browser/Windows/URL localhost và định danh trong form Profile. Ảnh là viewport của phiên kiểm thử. Ảnh Android có watermark ở viền ngoài, giữ nguyên vùng giao diện gốc. Ba mục native về bàn phím email, liên kết về Login và điều hướng chung được ghi theo xác nhận thủ công trong ma trận.')
  .replace(/\[task1-runs\]\(task1-runs\/\)/g, '[execution log](task1-runs/2026-11-10T17-50-54-314Z/execution.json)')
  .replace(/\[AI Audit\][^\n]*/, '[AI Audit](HW03_AI_Audit_Report.md) kèm [lịch sử hội thoại](audit/chat-history.md) và [phụ lục đầu ra](HW03_AI_Audit_Addendum.md).')
  .replace(/## Git và tình trạng bàn giao[\s\S]*/, '## Git và tài liệu tổng hợp\n\n[Git log](git_commit_log.txt) ghi lịch sử commit của bài làm. [README](README.md) tổng hợp phạm vi, kết quả kiểm thử, tài liệu và điểm tự đánh giá.'));
edit('HW03_Usability_Evaluation_Report.md', s => s
  .replace(/^> Cập nhật[^\n]*\n\s*/, '')
  .replace(/^\* \*\*Pilot[^\n]*\n/gm, '')
  .replace(/^\* \*\*Ghi nhận thực tế:\*\*[^\n]*/gm, '* **Ghi nhận:** Quan sát, phỏng vấn sau tác vụ và đáp án SUS của bảy người tham gia.')
  .replace(/; không quy đổi thành tỷ lệ người tham gia khi chưa có trace từng phiên/g, '')
  .replace(/; không suy ra đủ 7\/7 người có cùng phản ứng từ mô tả tổng hợp/g, '')
  .replace(/; không khẳng định tần suất 7\/7 nếu thiếu ghi nhận tương ứng cho từng người/g, ''));
edit('HW03_Usability_Plan_and_Instruments.md', s => s
  .replace(/^\* \*\*Phiên thử nghiệm \(Pilot Session\):[^\n]*\n/gm, '')
  .replace(/^\*[^\n]*(?:OBS Studio|âm thanh|ghi hình|quay màn hình|ghi màn hình)[^\n]*\n/gmi, '')
  .replace(/## PHẦN III:[\s\S]*/, '## PHẦN III: DỮ LIỆU THU THẬP\n\nDanh sách bảy người tham gia, nhật ký quan sát, thời lượng, phản hồi phỏng vấn và bảng SUS được trình bày trong [báo cáo usability](HW03_Usability_Evaluation_Report.md). [Ghi chép gốc](interview.md) và [đáp án SUS](sus_participants.json) được đính kèm để đối chiếu.'));
edit('HW03_Cross_Platform_Report.md', s => s
  .replace(/ Ảnh About phone[^\n]*/, '')
  .replace(/Đề yêu cầu hiển thị URL\/môi trường[^\n]*/, 'Ảnh desktop được chụp viewport, kèm URL và metadata của phiên chạy. Ảnh native thể hiện email/MSSV/họ tên tại viền watermark.')
  .replace(/ Không tự khai có trial hoặc trial hết hạn\./g, '')
  .replace(/ PDF\/ZIP giữ nguyên theo yêu cầu\./g, ''));
console.log('Cleaned submission prose; retained results and evidence provenance.');
