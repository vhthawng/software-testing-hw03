# HƯỚNG DẪN KIỂM THỬ ĐA NỀN TẢNG (CROSS-BROWSER / CROSS-PLATFORM)

Tài liệu tham chiếu chuẩn cho Agent Skill `gui-usability-testing`, dựa trên slide môn học (FIT@HCMUS, Slide p.54–63).

---

## 1. 3 Rendering Engine Cốt Lõi (Slide p.55)

Trang web hiển thị khác nhau là do cách các công cụ kết xuất (Rendering Engines) xử lý mã HTML, CSS và JavaScript:
1. **Blink Engine:** Được sử dụng bởi Google Chrome, Microsoft Edge, Brave, Opera. Phổ biến nhất trên desktop và thiết bị Android.
2. **Gecko Engine:** Được phát triển bởi Mozilla, sử dụng độc quyền trên Mozilla Firefox.
3. **WebKit Engine:** Công cụ kết xuất của Apple Safari. Đặc biệt, trên iOS/iPadOS, Apple bắt buộc mọi trình duyệt (kể cả Chrome hay Firefox trên iPhone) đều phải dùng engine WebKit. Do đó, các lỗi liên quan đến WebKit **chỉ có thể tái hiện và phát hiện trên Safari thật hoặc thiết bị Apple thật**.

---

## 2. Mô Hình Kiểm Thử Tương Thích 4 Bậc (Slide p.57–61)

| Bậc | Tên phương pháp | Công cụ tiêu biểu | Ưu điểm | Hạn chế |
| :---: | :--- | :--- | :--- | :--- |
| **Bậc 1** | Hồi quy hình ảnh offline | Playwright `toHaveScreenshot`, BackstopJS, Lost Pixel | Miễn phí, chạy nhanh trong CI/CD, bắt hồi quy CSS | Chỉ dùng engine cục bộ, dễ nhiễu pixel (khử răng cưa) |
| **Bậc 2** | Giả lập cục bộ | Chrome DevTools Device Mode, Responsively App, Firefox RDM | Kiểm tra nhanh responsive trên nhiều độ phân giải cùng lúc | Bản chất vẫn là engine Blink của máy tính, không có cảm ứng và font native |
| **Bậc 3** | Sinh ảnh trực tuyến | BrowserStack Screenshots, Percy, SmartUI | Chỉ cần 1 URL là chụp đồng loạt 20–30 cấu hình | Không tương tác được, chỉ xem tĩnh |
| **Bậc 4** | Thiết bị thực đám mây | **BrowserStack Live**, LambdaTest (TestMu AI), Thiết bị thật (Expo Go) | **Độ trung thực 100% (Chuẩn vàng)**, điều khiển máy Mac/iPhone thật từ xa | Cần tài khoản trial hoặc thiết bị thật |

---

## 3. Ma Trận Kiểm Thử Cho HW03 (Tối Thiểu 3 Nền Tảng)

Để đáp ứng đầy đủ yêu cầu của đề bài, ma trận kiểm thử được xây dựng như sau:

| Nền tảng | Môi trường | Engine kết xuất | Thiết bị / Nơi chạy |
| :---: | :--- | :---: | :--- |
| **Nền tảng 1** | Google Chrome (bản mới nhất) | **Blink** | Laptop cá nhân (Windows 11) |
| **Nền tảng 2** | Mozilla Firefox (bản mới nhất) | **Gecko** | Laptop cá nhân (Windows 11) |
| **Nền tảng 3** | Apple Safari (bản mới nhất) | **WebKit** | Máy Mac / iPhone trên **BrowserStack Live** *(hoặc điện thoại thật qua Expo Go / Android Chrome)* |

---

## 4. Quy Định Bằng Chứng & Watermark Chống Gian Lận (Slide p.23 & Đề bài)

Tất cả các ảnh chụp màn hình nộp cho Task 3 bắt buộc phải thỏa mãn:
1. **Thông tin môi trường:** Thấy rõ thanh địa chỉ hiển thị URL `localhost` của SUT, tên trình duyệt và hệ điều hành (hiển thị rõ trên header của BrowserStack hoặc thanh taskbar máy thật).
2. **Watermark Overlay:** Đóng dấu trực tiếp lên ảnh chụp:
   - Email sinh viên: `23120355@student.hcmus.edu.vn`
   - MSSV: `23120355`
   - Họ và tên: `Võ Hữu Thắng`
   - Thời gian chụp kiểm thử.
