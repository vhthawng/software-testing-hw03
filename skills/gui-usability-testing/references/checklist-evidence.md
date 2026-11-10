# Thiết kế và bằng chứng GUI checklist

- Lấy kỳ vọng từ yêu cầu SUT hoặc tiêu chuẩn có thể kiểm tra. Phân biệt vi phạm chức năng với đề xuất usability. Màu xanh cho submit, dấu sao đỏ, autofocus và confirm dialog là các lựa chọn thiết kế; không tự coi thiếu chúng là bug nếu không có cơ sở yêu cầu hoặc tác hại quan sát được. Có thể đánh giá cơ chế undo thay cho confirm.
- Mỗi item có một kết quả quan sát được. Nếu kiểm tra cả chuỗi rỗng và toàn khoảng trắng, phải chạy cả hai; thuộc tính `required` chỉ là dữ liệu hỗ trợ kiểm tra. Đo tương phản bằng màu thực và công cụ, không suy ra tỷ lệ từ tên class.
- Giữ nguyên nguồn AI/Human theo lịch sử thật. AI không được tự nhận phần bổ sung của mình là Human-Added. Mỗi Human-Added cần `ai_gap_reason`; nếu nguồn chưa xác minh, khai báo giới hạn đó.
- Kết quả có các trạng thái `Passed`, `Failed`, `Not Run`, `Blocked`, `Not Applicable`. Không dùng Failed thay cho chưa chạy. Không chuyển kết quả lịch sử thành kết quả đã xác minh khi chỉ sửa báo cáo.
- Mỗi execution nên ghi item ID, thời điểm, build, môi trường, dữ liệu/vai trò, bước thực hiện, expected/actual, status và tham chiếu log/bằng chứng. Ảnh bắt buộc cho Failed trong HW03; không cần ảnh Passed. Trường `evidence` là mảng đường dẫn ảnh hoặc URL, không phải chứng nhận ảnh hợp lệ tự động.
- Với lỗi thao tác (bấm hai lần, xóa, sửa dữ liệu), ghi trạng thái trước/sau và thao tác; dùng video/log bổ sung khi ảnh tĩnh không thể chứng minh hành vi. Kiểm tra ảnh thật trước khi gắn với bug.
- Chỉ yêu cầu công bố issue khi người dùng cho phép. Với HW03, đối soát mọi bug được báo cáo với GitHub Issue và ảnh. Không loại lỗi khỏi nghĩa vụ đăng chỉ vì severity thấp.
- Tổng hợp từ dữ liệu gốc; tách số item thiết kế, số execution và số bug duy nhất. Không đếm một item chạy ba browser thành ba item thiết kế. Khi chạy Task 3, ghi riêng kết quả mỗi môi trường và giải thích phạm vi không áp dụng.
- User-agent/viewport mobile là mô phỏng, không chứng minh Android hay Expo Go thực. Ảnh và tên file không tự xác thực môi trường hoặc kết quả.
