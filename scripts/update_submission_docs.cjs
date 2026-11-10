const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const read = p => fs.readFileSync(path.join(root, p), 'utf8');
const write = (p, text) => fs.writeFileSync(path.join(root, p), text.trim() + '\n');
const config = JSON.parse(read('submission.config.json'));
const scores = config.selfAssessment;
const total = Object.values(scores).reduce((a, b) => a + b, 0);
write('README.md', `# HW03 – GUI & Usability Testing

**Võ Hữu Thắng — ${config.studentId}** · 23120355@student.hcmus.edu.vn

## Test summary

| Chỉ số | Kết quả |
| --- | --- |
| Phạm vi | 8 màn hình/views: Home, ProductDetail, Cart, Checkout, Profile, Admin Products, Mobile Home, Mobile Register |
| Usability flow | Cập nhật hồ sơ → chọn sản phẩm → dùng coupon → hoàn tất mua hàng |
| Checklist thiết kế / thực thi | 48 / 48 item; IA-01: 12, IA-02: 14, IA-03: 10, IA-04: 12 |
| Nguồn thiết kế | 33 AI-Generated / 15 Human-Added; có lý do bổ sung từng item |
| Kết quả Task 1 | **26 Passed / 22 Failed** (54,17% / 45,83%) |
| Bug / nhận xét UX | **18 bug xác nhận / 5 nhận xét UX** |
| Người tham gia usability | **7 người**; ghi chép quan sát, phỏng vấn và 70 đáp án SUS |
| SUS | Mean **30,36/100**; SD mẫu **9,51** |
| Môi trường | Chrome 157.0.8103.39 / Windows; Firefox 153.0 / Windows; Android Galaxy A52 / Expo Go |
| Task 3 | 91 lượt đánh giá áp dụng: Chrome 21 Passed / 19 Failed; Firefox 21 / 19; Android 7 / 4 |

Task 1 tổng hợp kết quả tự động và kiểm tra thủ công. Ma trận Task 3 ghi nguồn bằng chứng và phạm vi áp dụng từng item; N/A không tính vào Passed. Ảnh desktop là viewport có caption URL/môi trường; ảnh Android có watermark định danh ở viền ảnh.

## Tài liệu

- [Báo cáo chính](HW03_Main_Report.md)
- Checklist: [Markdown](HW03_GUI_Checklist_Summary.md), [Excel](HW03_GUI_Checklist.xlsx), [CSV](HW03_GUI_Checklist.csv), [JSON](checklist_data.json)
- [Bug report](HW03_Bug_Report.md) · [GitHub Issues](https://github.com/vhthawng/software-testing-hw03/issues)
- Usability: [báo cáo](HW03_Usability_Evaluation_Report.md), [kịch bản và công cụ](HW03_Usability_Plan_and_Instruments.md), [ghi chép](interview.md), [SUS](HW03_SUS_Report.md)
- Cross-platform: [báo cáo](HW03_Cross_Platform_Report.md), [Excel](HW03_Cross_Platform_Matrix.xlsx), [CSV](HW03_Cross_Platform_Matrix.csv)
- AI: [Audit và Critique](HW03_AI_Audit_Report.md), [phụ lục hội thoại](HW03_AI_Audit_Addendum.md), [lịch sử chat](audit/chat-history.md)
- [Git log](git_commit_log.txt) · [Agent Skill](skills/gui-usability-testing/SKILL.md) · [Video demo](https://youtu.be/JxHogwfHg6E)
- [Nhánh báo cáo và bằng chứng](https://github.com/vhthawng/software-testing-hw03/tree/codex/hw03-reports-20261111)

## Tự đánh giá

| Thành phần | Điểm tối đa | Điểm tự đánh giá |
| --- | ---: | ---: |
| Task 1 – GUI checklist | 30 | ${scores.task1} |
| Task 2 – Usability | 40 | ${scores.task2} |
| Task 3 – Cross-platform | 20 | ${scores.task3} |
| Agent Skills | 10 | ${scores.skills} |
| **Tổng** | **100** | **${total}** |

Điểm tự đánh giá do sinh viên lựa chọn.

## Đóng gói bài nộp

Xuất lại **HW03_Main_Report.pdf** và **HW03_AI_Audit_Report.pdf** từ Markdown hiện hành trước khi đóng gói. Hai file PDF phải mới hơn các tài liệu Markdown/phụ lục tương ứng.

Kiểm tra thành phần bài nộp:

~~~powershell
powershell -ExecutionPolicy Bypass -File scripts/package_submission.ps1 -ValidateOnly
~~~

Tạo ZIP:

~~~powershell
powershell -ExecutionPolicy Bypass -File scripts/package_submission.ps1
~~~

Git Bash/WSL: **bash scripts/package_submission.sh --validate-only** để kiểm tra, hoặc **bash scripts/package_submission.sh** để đóng gói. Script đọc điểm từ [cấu hình nộp bài](submission.config.json), lấy Excel và bằng chứng hiện hành, kiểm tra liên kết và không ghi đè ZIP đã có. Dùng tên đầu ra khác hoặc tùy chọn **-Force** / **--force** khi muốn thay thế bản cũ.
`);
const chat = JSON.parse(read('audit/chat-history.json'));
const date = value => new Intl.DateTimeFormat('sv-SE', { timeZone: 'Asia/Bangkok', dateStyle: 'short', timeStyle: 'medium' }).format(new Date(value));
write('audit/chat-history.md', `# Lịch sử hội thoại – Chấm điểm bài làm HW03

Nguồn: chat Codex ${chat.threadId}. Múi giờ: Asia/Bangkok (UTC+7). Thời gian ghi ở mỗi mục là thời điểm bắt đầu lượt trao đổi do ứng dụng cung cấp, không phải thời điểm riêng của từng tin nhắn. Nội dung gồm tin nhắn người dùng và phản hồi của trợ lý; giữ cả nhận xét ban đầu và các đính chính sau đó. Lịch sử được lấy đến thời điểm cập nhật phụ lục này.

[Dữ liệu JSON](chat-history.json)

${chat.messages.map((m, i) => `## ${i + 1}. ${m.role === 'user' ? 'Người dùng' : 'Codex'} — ${date(m.turnStartedAt)}${m.phase === 'commentary' ? ' (cập nhật tiến độ)' : ''}\n\n${m.text.trim()}`).join('\n\n---\n\n')}`);
let audit = read('HW03_AI_Audit_Report.md');
const critique = audit.split('## 2. AI Critique (200–300 từ)')[1].split('## 3.')[0].trim();
const historical = audit.match(/^\| STT \|[^\n]*(?:\n\|[^\n]*)*/m)[0].trim()
  .replace('Prompt Nguyên Văn & Công Cụ', 'Prompt trích theo nhật ký lịch sử & Công cụ')
  .replace('với cần được đối chiếu độc lập', 'và đối chiếu độc lập');
write('HW03_AI_Audit_Report.md', `# AI Audit Report – HW03

## 1. Thông tin

| Mục | Giá trị |
| --- | --- |
| Sinh viên | VÕ HỮU THẮNG |
| MSSV | 23120355 |
| Lớp / Khóa | CQ2023/3 |
| Môn học | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| Bài tập | HW03 – GUI & Usability Testing |
| Thời gian | 08–11/11/2026 |
| Công cụ AI | Antigravity AI Agent (giai đoạn đầu, theo nhật ký sinh viên); Codex (rà soát và thực thi bổ sung) |
| Khai báo sử dụng AI | Có |

## 2. AI Critique (200–300 từ)

${critique}

## 3. Nhật ký giai đoạn đầu – Antigravity

Bảng sau giữ prompt, thời gian và kết quả được ghi trong nhật ký giai đoạn đầu của sinh viên. Output trong bảng là tóm tắt. Các số liệu trong từng dòng phản ánh thời điểm tương tác; kết quả cuối là 48 item (33 AI-Generated / 15 Human-Added), 26 Passed / 22 Failed và 18 bug xác nhận.

${historical}

Các nhãn đánh giá thể hiện phản biện tại thời điểm trao đổi. Việc tạo skill muộn hoặc chọn chụp thủ công là lựa chọn phương pháp, không tự vi phạm yêu cầu bài tập. Galaxy A52 native được kiểm tra bằng Expo Go trên điện thoại; giả lập viewport Android trong Playwright được phân biệt với môi trường này.

## 4. Nhật ký rà soát – Codex

[Lịch sử hội thoại người dùng và Codex](audit/chat-history.md) ghi nguyên văn nội dung lấy từ ứng dụng, theo thứ tự trao đổi, kèm thời gian bắt đầu từng lượt. [Bản JSON](audit/chat-history.json) giữ vai trò, nội dung và mã lượt để đối chiếu. [Phụ lục kết quả tương tác](HW03_AI_Audit_Addendum.md) liên kết các đầu ra của lượt rà soát.

## 5. Phản biện và áp dụng đầu ra AI

Sinh viên yêu cầu chuyển từ kết luận dựa trên mã nguồn sang thực thi giao diện, cung cấp ảnh Android và xác nhận các thao tác thủ công. Trong quá trình rà soát, tiêu chí h1 và màu nút được đối chiếu lại SRS; lỗi thiếu alt bị bác bỏ; bug và nhận xét UX được tách riêng. Script Playwright chạy lại các mục web trên Chrome và Firefox, còn ảnh Android được thêm watermark bằng script ở viền ảnh, giữ nguyên vùng giao diện gốc.

AI hỗ trợ tổ chức checklist, viết automation, tính SUS và đồng bộ báo cáo với GitHub Issues. Dữ liệu bảy người tham gia và phản hồi SUS do sinh viên cung cấp là nguồn của phần usability. Kết quả tự động, ảnh quan sát và xác nhận thủ công được ghi rõ trong dữ liệu thực thi.

## 6. Tuyên bố sử dụng AI

Bài làm sử dụng Antigravity AI Agent và Codex để hỗ trợ thiết kế, kiểm thử, tổng hợp số liệu và trình bày tài liệu. Sinh viên lựa chọn phạm vi, cung cấp dữ liệu usability và ảnh kiểm thử trên điện thoại, phản biện kết luận AI và chịu trách nhiệm về bài nộp. Nhật ký hội thoại và các đầu ra liên quan được đính kèm để đối chiếu.
`);
write('HW03_AI_Audit_Addendum.md', `# Phụ lục AI Audit – Codex

## Hội thoại

- Công cụ: Codex.
- Nguồn: chat “Chấm điểm bài làm HW03”, mã ${chat.threadId}.
- [Prompt và phản hồi nguyên văn](audit/chat-history.md) · [JSON](audit/chat-history.json).
- Thời gian trong lịch sử lấy từ ứng dụng, hiển thị theo Asia/Bangkok; ghi theo thời điểm bắt đầu lượt trao đổi.

## Đầu ra áp dụng

| Nhóm tương tác | Đầu ra |
| --- | --- |
| Rà soát yêu cầu, checklist và skill | [Checklist](HW03_GUI_Checklist_Summary.md), [JSON](checklist_data.json), [skill](skills/gui-usability-testing/SKILL.md) |
| Khởi động và kiểm thử local | [Runner Task 1](scripts/run_task1_local.cjs), [runner Task 3](scripts/run_task3_browser.cjs) |
| Kết nối Expo Go và kiểm tra Android | [Script khởi động](scripts/start_mobile_local.ps1), [ma trận thực thi](task3-runs/2026-11-11-local/matrix.json) |
| Đồng bộ dữ liệu usability | [Báo cáo usability](HW03_Usability_Evaluation_Report.md), [SUS](HW03_SUS_Report.md) |
| Rà lại oracle và bug | [Bug report](HW03_Bug_Report.md), [Issues](https://github.com/vhthawng/software-testing-hw03/issues) |
| Hoàn thiện Task 3 | [Cross-platform report](HW03_Cross_Platform_Report.md), [Excel](HW03_Cross_Platform_Matrix.xlsx), [watermark manifest](task3-runs/2026-11-11-local/android/watermark-manifest.json) |
| Cập nhật README, Audit và đóng gói | [README](README.md), [Audit](HW03_AI_Audit_Report.md), [script đóng gói](scripts/package_submission.ps1) |

Kết quả hiện hành: 48 item, 26 Passed / 22 Failed; 18 bug và 5 nhận xét UX. Task 3 có 91 lượt đánh giá áp dụng: Chrome 21 Passed / 19 Failed, Firefox 21 / 19, Android 7 / 4. SUS của bảy người có mean 30,36/100.
`);
console.log('Updated README, AI Audit and chat-history Markdown. Self-assessment:', total);
