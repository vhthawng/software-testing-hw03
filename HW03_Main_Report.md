# Báo cáo chính HW03 – GUI & Usability

Võ Hữu Thắng — MSSV 23120355. Cập nhật 11/11/2026.

## Task 1 – Thiết kế và thực thi GUI checklist

48 items phủ IA-01/02/03/04 theo phân bổ 12/14/10/12. Nguồn dữ liệu lịch sử ghi 33 AI-generated và 15 Human-added; mỗi Human-added có lý do AI bỏ sót. Các ghi nhận này được giữ theo dữ liệu sinh viên, không tự gán phần mới của AI thành Human-added.

Kết quả hiện hành **26 Passed / 22 Failed (54,17% / 45,83%)**. 5 Passed do sinh viên xác nhận thủ công; các mục còn lại có log Playwright hoặc ảnh native. Đọc code chỉ hỗ trợ điều tra, không được ghi thay cho thao tác người dùng. Nguồn kỳ vọng được rà với [SRS SUT](https://github.com/ttbhanh/eshop-sut/blob/85af3ba875c88283615e22cb108f13e2fccaf0e9/README.md): FR-01 có Confirm Password, FR-07 có +/- và confirm xóa, FR-21 có h1 và màu xanh dương cho hành động tích cực, FR-23 có badge/active, FR-24 có phản hồi thêm giỏ. Đề HW03 dùng IA thay mã FR cho các khía cạnh; các mã FR mở rộng là mã trong SRS SUT, không tự thêm vào đề HW03.

Hai điều chỉnh oracle: mục IA01-05 kiểm tra h1 theo SRS, không ép Lịch sử phải h3; IA02-13 nút Checkout xanh lá chuyển Fail vì SRS yêu cầu xanh dương. Bản tổng hợp 27/21 trước đây là lịch sử trước điều chỉnh oracle.

[Checklist chi tiết](HW03_GUI_Checklist_Summary.md), [Excel](HW03_GUI_Checklist.xlsx), [CSV](HW03_GUI_Checklist.csv), [dữ liệu gốc hiện hành](checklist_data.json). Log chạy và lịch sử kết luận nằm trong [task1-runs](task1-runs/). Bộ fixture sản phẩm đã được dọn; tài khoản/đơn test riêng phục vụ đối soát. Backend tự seed khi khởi động, nên lượt chạy sử dụng runtime/database riêng sau khi phát hiện hành vi này.

## Bug và nhận xét UX

**18 bug xác nhận**, trong đó BUG-16 là phát hiện bổ sung ngoài checklist; **5 nhận xét UX** được ghi riêng. Không biến số mục Failed thành số bug. BUG-02 thiếu alt bị bác bỏ. BUG-13 chỉ xác minh lỗi state hiển thị đổi tên các dòng khác, không chứng minh database đổi hàng loạt. SAVE10 được tái hiện hiển thị tổng 40 triệu trên giỏ 4 triệu; chưa thanh toán đơn với coupon sai.

[Bug report](HW03_Bug_Report.md) có steps, expected/actual, nguồn yêu cầu và ảnh. GitHub được đồng bộ từ cùng danh mục để tránh báo cáo một đằng, Issues một nẻo. Chưa sửa source lỗi sản phẩm.

## Task 2 – Usability

Một flow: cập nhật thông tin nhận hàng → chọn bàn phím dưới 7 triệu → dùng coupon → hoàn tất mua hàng. [Kịch bản và công cụ](HW03_Usability_Plan_and_Instruments.md) và [báo cáo đánh giá](HW03_Usability_Evaluation_Report.md) giữ dữ liệu bảy người thật do sinh viên xác nhận. Có roster, quan sát, phỏng vấn bốn khía cạnh và 70 đáp án SUS. Không yêu cầu quay mặt hay biểu cảm. Không có bản ghi màn hình/âm thanh đính kèm; không tạo thêm video, timestamp hoặc lời nói của người tham gia.

SUS mean **30,36**, SD mẫu **9,51**; thời gian trung bình **271,43s**, P7 nhanh nhất **195s**. Ba người P1/P3/P6 được ghi có trợ giúp; các nhãn thành công/workaround là mô tả trong nhật ký, không tự chứng nhận toàn bộ 7 người hoàn thành đúng số điện thoại hợp lệ. Các tuyên bố tần suất không đủ trace được chuyển thành nhận định định tính. Pilot được ghi trong kế hoạch; chưa có dữ liệu để tự bổ sung kết quả pilot.

## Task 3 – Kiểm thử trên ba môi trường

[Báo cáo cross-platform](HW03_Cross_Platform_Report.md) và [ma trận Excel](HW03_Cross_Platform_Matrix.xlsx) ghi 48 item, 91 lượt đánh giá áp dụng: Chrome 157.0.8103.39 hiện cửa sổ (21 Pass / 19 Fail), Firefox 153.0 headless (21 Pass / 19 Fail), Galaxy A52 native Expo Go (7 Pass / 4 Fail). Hai desktop chạy cùng 40 item web; native có 8 item Mobile gốc và 3 item header/navigation chung. N/A theo scope được giải thích từng cột và không tính là Passed.

Firefox hiện cửa sổ từng treo ở click; giữ attempt 48 Not Run và probe chẩn đoán, chỉ dùng lượt headless thành công làm kết quả cuối. Không coi lỗi harness là bug EShop. Ba mục web trước đây dựa vào xác nhận sinh viên đã có kiểm tra bổ sung trong Task 3; nguồn kết quả cũ vẫn được giữ để đối soát.

Ảnh desktop có caption email/MSSV/họ tên, browser/Windows/URL localhost lấy từ context thật; ảnh Profile có họ tên/MSSV trong input. Ảnh Android được thêm viền watermark bằng script theo xác nhận sinh viên, giữ nguyên pixel vùng ảnh gốc; không tạo lại bằng AI. Native có 3 kết luận theo xác nhận thủ công (email keyboard, link về Login, navigation chung). Chưa có Android/Expo Go version; không ghi SDK project thay cho app version. Ảnh toàn cửa sổ OS chưa chụp được vì Computer Use chặn do không xác định được URL đủ chắc chắn; không vẽ browser frame giả hoặc vượt chặn. Đề không nêu đích danh bắt buộc thanh địa chỉ OS của mọi ảnh; báo cáo ghi rõ ảnh viewport + caption. Nếu cần định danh ngay trong input native theo cách hiểu chặt §11, sinh viên cần cung cấp thêm ảnh gốc thay vì sửa giả input trên ảnh.

## Agent Skill và AI

[Skill](skills/gui-usability-testing/SKILL.md) đã được bổ sung quy tắc oracle/evidence và chống mặc định Passed khi thiếu status. Script kiểm tra ID trùng, nguồn, Notes cho Fail và AI gap cho Human-added. [Video demo](https://youtu.be/JxHogwfHg6E) do sinh viên cung cấp; không lấy điểm subagent làm điểm chính thức. [AI Audit](HW03_AI_Audit_Report.md) và [addendum](HW03_AI_Audit_Addendum.md) phân biệt bảng tóm tắt lịch sử với lượt rà soát hiện tại; không tự bịa transcript đầy đủ.

## Git và tình trạng bàn giao

[Git log](git_commit_log.txt) là lịch sử thật. Công việc ban đầu được đưa vào Git sau khi thực hiện; không có commit riêng cho từng phiên P1–P7. Đây là giới hạn ghi nhận lịch sử, không là bằng chứng người tham gia không có thật. Không tạo commit lùi ngày. [README](README.md) là test summary và bảng đối chiếu tiêu chí. PDF/ZIP giữ nguyên theo yêu cầu, không dùng làm nguồn số liệu mới.
