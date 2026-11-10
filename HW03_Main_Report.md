# Báo cáo chính HW03 – GUI & Usability

Võ Hữu Thắng — MSSV 23120355. Cập nhật 11/11/2026.

## Task 1 – Thiết kế và thực thi GUI checklist

48 items phủ IA-01/02/03/04 theo phân bổ 12/14/10/12. Nguồn dữ liệu lịch sử ghi 33 AI-generated và 15 Human-added; mỗi Human-added có lý do AI bỏ sót. Các ghi nhận này được giữ theo dữ liệu sinh viên, không tự gán phần mới của AI thành Human-added.

Kết quả hiện hành **26 Passed / 22 Failed (54,17% / 45,83%)**. 5 Passed do sinh viên xác nhận thủ công; các mục còn lại có log Playwright hoặc ảnh native. Đọc code chỉ hỗ trợ điều tra, không được ghi thay cho thao tác người dùng. Nguồn kỳ vọng được rà với [SRS SUT](https://github.com/ttbhanh/eshop-sut/blob/85af3ba875c88283615e22cb108f13e2fccaf0e9/README.md): FR-01 có Confirm Password, FR-07 có +/- và confirm xóa, FR-21 có h1 và màu xanh dương cho hành động tích cực, FR-23 có badge/active, FR-24 có phản hồi thêm giỏ. Đề HW03 dùng IA thay mã FR cho các khía cạnh; các mã FR mở rộng là mã trong SRS SUT, không tự thêm vào đề HW03.

Hai điều chỉnh oracle: mục IA01-05 kiểm tra h1 theo SRS, không ép Lịch sử phải h3; IA02-13 nút Checkout xanh lá chuyển Fail vì SRS yêu cầu xanh dương. Bản tổng hợp 27/21 trước đây là lịch sử trước điều chỉnh oracle.

[Checklist chi tiết](HW03_GUI_Checklist_Summary.md), [Excel](HW03_GUI_Checklist.xlsx), [CSV](HW03_GUI_Checklist.csv), [dữ liệu gốc hiện hành](checklist_data.json). Log chạy và lịch sử kết luận nằm trong [execution log](task1-runs/2026-11-10T17-50-54-314Z/execution.json). Bộ fixture sản phẩm đã được dọn; tài khoản/đơn test riêng phục vụ đối soát. Backend tự seed khi khởi động, nên lượt chạy sử dụng runtime/database riêng sau khi phát hiện hành vi này.

## Bug và nhận xét UX

**18 bug xác nhận**, trong đó BUG-16 là phát hiện bổ sung ngoài checklist; **5 nhận xét UX** được ghi riêng. Không biến số mục Failed thành số bug. BUG-02 thiếu alt bị bác bỏ. BUG-13 chỉ xác minh lỗi state hiển thị đổi tên các dòng khác, không chứng minh database đổi hàng loạt. SAVE10 được tái hiện hiển thị tổng 40 triệu trên giỏ 4 triệu; chưa thanh toán đơn với coupon sai.

[Bug report](HW03_Bug_Report.md) có steps, expected/actual, nguồn yêu cầu và ảnh. GitHub được đồng bộ từ cùng danh mục để tránh báo cáo một đằng, Issues một nẻo. Chưa sửa source lỗi sản phẩm.

## Task 2 – Usability

Một flow: cập nhật thông tin nhận hàng → chọn bàn phím dưới 7 triệu → dùng coupon → hoàn tất mua hàng. [Kịch bản và công cụ](HW03_Usability_Plan_and_Instruments.md) và [báo cáo đánh giá](HW03_Usability_Evaluation_Report.md) giữ dữ liệu bảy người thật do sinh viên xác nhận. Có roster, quan sát, phỏng vấn bốn khía cạnh và 70 đáp án SUS.

SUS mean **30,36**, SD mẫu **9,51**; thời gian trung bình **271,43s**, P7 nhanh nhất **195s**. Ba người P1/P3/P6 được ghi có trợ giúp; các nhãn thành công/workaround là mô tả trong nhật ký, không tự chứng nhận toàn bộ 7 người hoàn thành đúng số điện thoại hợp lệ.

## Task 3 – Kiểm thử trên ba môi trường

[Báo cáo cross-platform](HW03_Cross_Platform_Report.md) và [ma trận Excel](HW03_Cross_Platform_Matrix.xlsx) ghi 48 item, 91 lượt đánh giá áp dụng: Chrome 157.0.8103.39 hiện cửa sổ (21 Pass / 19 Fail), Firefox 153.0 headless (21 Pass / 19 Fail), Galaxy A52 native Expo Go (7 Pass / 4 Fail). Hai desktop chạy cùng 40 item web; native có 8 item Mobile gốc và 3 item header/navigation chung. N/A theo scope được giải thích từng cột và không tính là Passed.

Firefox hiện cửa sổ từng treo ở click; giữ attempt 48 Not Run và probe chẩn đoán, chỉ dùng lượt headless thành công làm kết quả cuối. Không coi lỗi harness là bug EShop. Ba mục web trước đây dựa vào xác nhận sinh viên đã có kiểm tra bổ sung trong Task 3; nguồn kết quả cũ vẫn được giữ để đối soát.

Ảnh desktop có caption email/MSSV/họ tên, browser/Windows/URL localhost và định danh trong form Profile. Ảnh là viewport của phiên kiểm thử. Ảnh Android có watermark ở viền ngoài, giữ nguyên vùng giao diện gốc. Ba mục native về bàn phím email, liên kết về Login và điều hướng chung được ghi theo xác nhận thủ công trong ma trận.

## Agent Skill và AI

[Skill](skills/gui-usability-testing/SKILL.md) đã được bổ sung quy tắc oracle/evidence và chống mặc định Passed khi thiếu status. Script kiểm tra ID trùng, nguồn, Notes cho Fail và AI gap cho Human-added. [Video demo](https://youtu.be/JxHogwfHg6E) do sinh viên cung cấp; không lấy điểm subagent làm điểm chính thức. [AI Audit](HW03_AI_Audit_Report.md) kèm [lịch sử hội thoại](audit/chat-history.md) và [phụ lục đầu ra](HW03_AI_Audit_Addendum.md).

## Git và tài liệu tổng hợp

[Git log](git_commit_log.txt) ghi lịch sử commit của bài làm. [README](README.md) tổng hợp phạm vi, kết quả kiểm thử, tài liệu và điểm tự đánh giá.
