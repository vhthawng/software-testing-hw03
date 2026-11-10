# AI Audit Addendum – lượt rà soát và đồng bộ

Công cụ AI: Codex. Ngày rà soát/cập nhật: 11/11/2026 (Asia/Bangkok). Không gán tên model không có dữ liệu xác nhận. Các giờ cụ thể xem log thực thi; thời điểm từng prompt không có export thì ghi chưa có, không suy từ file mtime.

| Prompt người dùng trong chat | Output/tác vụ AI thực tế | Human review / giới hạn |
| --- | --- | --- |
| “Hãy chấm điểm bài làm của tôi dựa trên yêu cầu ...” | Đọc ZIP, kiểm tra tài liệu, ảnh, dữ liệu và Issues | Đánh giá ban đầu có phần yêu cầu bằng chứng quá cứng; đã đính chính việc không cần quay mặt, không tự coi thiếu video là người giả |
| “Nếu được hãy khởi động local và chạy kiểm tra đi.” | Chạy Chrome thật với API local, log/ảnh trong task1-runs; sửa harness giữ lịch sử lần Blocked | Không sửa lỗi SUT. Backend startup tự seed; chuyển sang runtime riêng |
| “Khởi động mobile luôn và hướng dẫn tôi cách kết nối...” | Cài dependencies, đổi API LAN, chạy Expo SDK54 và kiểm tra Android bundle | Điện thoại do sinh viên thao tác, không ghi là AI tự điều khiển |
| “tôi đã để tất cả trong manual” | Đọc 7 ảnh, ghi safe area/confirm/masking/contrast và giới hạn | Không suy phiên bản Android/Expo Go; không công bố About phone chứa định danh riêng tư |
| “các phần not run đó là passed hết, tôi đã xác nhận...” | Chuyển 5 mục sang Passed theo xác nhận sinh viên, giữ provenance | Không gọi là Playwright đã xác minh |
| “7 người dùng ... là 7 người dùng thật tôi xin cam đoan...” | Ghi nhận xác nhận người thật; giữ nguyên roster/notes/SUS | Không dựng video, pilot, timestamp hoặc commit cũ |
| “Đồng bộ báo cáo với kết quả thật, bug report, điều chỉnh github issues luôn” | Đối chiếu SRS, sửa oracle, sinh tài liệu và đồng bộ Issues từ danh mục chung | PDF/ZIP giữ nguyên theo chỉ định; log Git phản ánh lịch sử thật |

Đây là phụ lục tóm tắt các tương tác có trong chat hiện tại, không thay thế transcript đầy đủ của mọi phiên AI trước đây. Prompt được trích đoạn và ghi rõ phạm vi; không tự dựng output hội thoại bị thiếu. Script, JSON, ảnh và trạng thái GitHub là bằng chứng đầu ra, không phải bằng chứng người tham gia đã phát ngôn thêm điều gì.

## Bổ sung Task 3 (11/11/2026)

Prompt: “vậy giải quyết task 3 trước đi”. Sinh viên xác nhận “Dùng script, giữ nguyên ảnh gốc” khi được hỏi cách watermark ảnh Android. Output: thực thi 40 mục web trên Chrome và Firefox headless; kiểm tra đủ năm badge, màu/contrast, layout và routes; lập ma trận 91 lượt áp dụng, 48 item thiết kế, N/A theo scope; watermark native giữ nguyên pixel vùng gốc. Lịch sử lỗi Firefox headed và việc Computer Use dừng chụp toàn cửa sổ được lưu trong harness-history.json. Không dùng nguồn tìm kiếm trên mạng để khẳng định nguyên nhân lỗi harness; chỉ báo cáo chẩn đoán thực tế. Không sửa PDF/ZIP.
