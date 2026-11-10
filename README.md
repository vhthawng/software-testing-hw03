# HW03 – GUI & Usability Testing

Sinh viên: **Võ Hữu Thắng — 23120355**. Email: `23120355@student.hcmus.edu.vn`.

## Kết quả hiện hành

| Chỉ số | Kết quả |
| --- | --- |
| Checklist | 48 items; IA-01: 12, IA-02: 14, IA-03: 10, IA-04: 12 |
| Nguồn thiết kế lịch sử | 33 AI-Generated / 15 Human-Added; lý do AI gap ở mỗi item |
| Kết quả cuối | **26 Passed / 22 Failed**; 54,17% / 45,83%; không còn Not Run/Blocked theo xác nhận sinh viên |
| Nguồn thực thi | 37 mục có kết luận từ Playwright Chrome local ban đầu; 8 mục mobile được đối chiếu ảnh/xác nhận; 3 mục web bổ sung do sinh viên xác nhận. Có 5 mục Passed dựa trên xác nhận thủ công của sinh viên. |
| Phạm vi | 8 màn hình/views: Home, ProductDetail, Cart, Checkout, Profile, Admin Products, Mobile Home, Mobile Register; một flow usability mua hàng có cập nhật hồ sơ/coupon |
| Bug và UX | **18 bug xác nhận + 5 nhận xét UX**; 17 bug ánh xạ vào các mục Failed, BUG-16 bổ sung ngoài checklist |
| Người tham gia | 7 người thật theo xác nhận sinh viên; roster che số, notes và SUS được giữ nguyên |
| SUS | Mean 30,36/100; SD population 8,81, sample 9,51; P7 nhanh nhất 195s |
| Môi trường | Chrome thật 157.0.8103.39 / Windows; Firefox có evidence lịch sử giới hạn; Galaxy A52 native có ảnh thủ công mới |

Không đồng nhất 48 item với 48×3 executions. 5 Passed do sinh viên xác nhận là IA01-03, IA01-06, IA02-11, IA03-08, IA03-10. Oracle đã sửa: FR-21 yêu cầu h1 và nút tích cực xanh dương; nút Checkout xanh lá chuyển từ Pass sang Fail. Các kết quả run cũ giữ nguyên để đối soát.

## Tài liệu

- [Báo cáo chính](HW03_Main_Report.md)
- [Checklist Markdown](HW03_GUI_Checklist_Summary.md), [CSV](HW03_GUI_Checklist.csv), [Excel](HW03_GUI_Checklist.xlsx), [JSON](checklist_data.json)
- [Bug report và ảnh](HW03_Bug_Report.md)
- [Usability Report](HW03_Usability_Evaluation_Report.md), [kế hoạch](HW03_Usability_Plan_and_Instruments.md), [ghi chép gốc](interview.md), [SUS JSON](sus_participants.json)
- [Cross-platform](HW03_Cross_Platform_Report.md)
- [AI Audit/Critique](HW03_AI_Audit_Report.md), [bổ sung lượt rà soát](HW03_AI_Audit_Addendum.md)
- [Git log thật](git_commit_log.txt)
- [GitHub Issues](https://github.com/vhthawng/software-testing-hw03/issues)
- [Video demo skill](https://youtu.be/JxHogwfHg6E)

## Tự đánh giá và giới hạn

| Tiêu chí | Điểm tối đa | Tình trạng |
| --- | ---: | --- |
| Task 1 | 30 | Đã thực thi/tổng hợp 48 kết quả và phân loại bug/UX; còn 5 kết luận dựa trên xác nhận thủ công |
| Task 2 | 40 | Có 7 người, notes, SUS; không có video; pilot chưa có mô tả kết quả xác nhận riêng |
| Task 3 | 20 | Có Android native thật bổ sung; chưa có hồ sơ thực thi toàn checklist trên ba môi trường |
| Agent Skills | 10 | Có skill/script/demo; điểm review nội bộ 9.85 không thay điểm TA |

Tạm rút mức tự chấm 100/100; chưa chốt điểm tự đánh giá cuối. Thang điểm tối đa vẫn 100. PDF và ZIP cũ được giữ nguyên theo yêu cầu sinh viên, chưa phản ánh bản Markdown/checklist hiện hành. File .xls cũ được lưu dưới dạng bản lịch sử trong thư mục review; bản Excel hiện hành là .xlsx.

Ảnh mobile gốc không có watermark sinh viên; chưa biết phiên bản Android/Expo Go. Ảnh About phone có định danh riêng tư, chỉ giữ cục bộ và không đưa lên nhánh bằng chứng GitHub. Tên ảnh/EXIF không thay thế thông tin môi trường chưa được cung cấp.
