# Phụ lục AI Audit – Codex

## Hội thoại

- Công cụ: Codex.
- Nguồn: chat “Chấm điểm bài làm HW03”, mã 01a1c672-b31d-7e01-89ca-0f5fa5afefec.
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
