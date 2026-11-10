# Cross-browser / Cross-platform – phạm vi đã xác minh

| Môi trường | Bằng chứng | Phạm vi có thể kết luận |
| --- | --- | --- |
| Google Chrome 157.0.8103.39 / Windows 10.0.26200 | Playwright channel chrome, API thật, log [execution](task1-runs/2026-11-10T17-50-54-314Z/execution.json) | 37 mục web có kết luận trong lượt chạy; ba mục web bổ sung theo xác nhận sinh viên |
| Firefox desktop (lịch sử) | Ảnh raw/watermarked và script cũ | Có ảnh một số màn hình; giỏ trống và dialog đã đóng không đủ xác nhận lỗi tương ứng; chưa có full matrix |
| Chromium mobile emulation (lịch sử) | Viewport/user-agent trong automated_cross_platform.js | Chỉ là mô phỏng; không tính là Galaxy A52/Android thực |
| Samsung Galaxy A52 SM-A525F/DS / native Expo Go | Ảnh do sinh viên chụp [02](screenshots/manual/02.jpg), [03](screenshots/manual/03.jpg), [04](screenshots/manual/04.jpg), [05](screenshots/manual/05.jpg), [06](screenshots/manual/06.jpg) và xác nhận thủ công | Có kết quả 8 mục native; Android/Expo Go version chưa cung cấp; SDK project 54 không phải phiên bản Expo Go |

Kết nối native lúc chuẩn bị: exp://192.168.100.219:8081; backend LAN http://192.168.100.219:3000/api. Không dùng localhost trên điện thoại. [Thông tin kiểm tra server](task1-runs/mobile-manual/connection.json) xác nhận bundle Android và backend, không tự chứng minh thao tác người dùng.

Android native có thể là một nền tảng hợp lệ theo HW03. Tuy nhiên chưa có bằng chứng toàn bộ checklist chạy trên ba môi trường; không tự khai đã hoàn thành Task 3 100%. Ảnh Playwright là ảnh viewport có caption môi trường; chưa phải ảnh toàn bộ browser chrome/thanh địa chỉ. Ảnh manual chưa watermark email/MSSV. Ảnh About phone chứa thông tin riêng tư được giữ cục bộ, không công bố nguyên bản.

Không còn dùng các kết luận bàn phím Android che 45% màn hình, native dialog, hoặc Safari thật nếu chúng chỉ được suy diễn từ Chromium emulation.
