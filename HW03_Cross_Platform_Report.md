# Task 3 – Cross-browser / Cross-platform

Võ Hữu Thắng — 23120355 — 23120355@student.hcmus.edu.vn. Cập nhật 11/11/2026.

## Ma trận thực thi hiện hành

| Môi trường | Phiên bản / chế độ | Mục áp dụng | Passed | Failed | N/A |
| --- | --- | ---: | ---: | ---: | ---: |
| Google Chrome | 157.0.8103.39 / hiện cửa sổ | 40 | 21 | 19 | 8 |
| Firefox (Playwright build) | 153.0 / headless | 40 | 21 | 19 | 8 |
| Samsung Galaxy A52 / Expo Go | Android/Expo Go version chưa cung cấp; project SDK 54 | 11 | 7 | 4 | 37 |

**48 item thiết kế, 91 lượt đánh giá áp dụng trên ba môi trường**; không đếm N/A thành Pass hoặc tự nhận 144 ca đã chạy. Android có 8 item native ban đầu và 3 item header/navigation chung; 3 kết luận native dựa trên xác nhận thủ công của sinh viên (IA02-11, IA03-08, IA03-10). Các mục còn lại của Android được đối chiếu ảnh, không tự động hóa bằng Playwright.

40 item desktop trên mỗi trình duyệt dùng backend thật và tài khoản/fixture riêng; không mock dữ liệu phản hồi. Riêng ba mục web IA01-03, IA01-06, IA03-10 được kiểm tra bổ sung: badge đủ 5 trạng thái + đo contrast; layout sidebar/main + ảnh; routes desktop và các tab Admin. Native navigation vẫn ghi riêng nguồn xác nhận.

[Ma trận CSV](HW03_Cross_Platform_Matrix.csv) · [Ma trận Excel](HW03_Cross_Platform_Matrix.xlsx) · [JSON đầy đủ Notes và provenance](task3-runs/2026-11-11-local/matrix.json)

## Môi trường / bằng chứng

| Nền tảng | Log và ảnh định danh |
| --- | --- |
| Google Chrome 157.0.8103.39 / Windows 10.0.26200 | [Execution JSON](task3-runs/2026-11-11-local/chrome/2026-11-10T18-57-10-557Z/execution.json), [Profile có họ tên/MSSV trong form](task3-runs/2026-11-11-local/chrome/2026-11-10T18-57-10-557Z/identity-profile-viewport.png) |
| Firefox (Playwright build) 153.0 / Windows 10.0.26200 | [Execution JSON](task3-runs/2026-11-11-local/firefox/2026-11-10T19-03-04-154Z/execution.json), [Profile có họ tên/MSSV trong form](task3-runs/2026-11-11-local/firefox/2026-11-10T19-03-04-154Z/identity-profile-viewport.png) |
| Native Android / Galaxy A52 SM-A525F/DS | [Home](task3-runs/2026-11-11-local/android/android_02_watermarked.png), [Register](task3-runs/2026-11-11-local/android/android_03_watermarked.png), [mask password](task3-runs/2026-11-11-local/android/android_04_watermarked.png), [keyboard](task3-runs/2026-11-11-local/android/android_05_watermarked.png), [validation](task3-runs/2026-11-11-local/android/android_06_watermarked.png) |

Ảnh desktop có email/MSSV/họ tên, tên browser, version, Windows và URL localhost lấy từ context chạy thật. Ảnh Android được thêm viền chú thích bằng script theo xác nhận của sinh viên, không tạo lại bằng AI, không sửa pixel bên trong ảnh. [Manifest/hash và kiểm tra giữ nguyên vùng gốc](task3-runs/2026-11-11-local/android/watermark-manifest.json).

Ảnh desktop được chụp viewport, kèm URL và metadata của phiên chạy. Ảnh native thể hiện email/MSSV/họ tên tại viền watermark.

## Phạm vi N/A

- Tám mục đặc thù app native không áp dụng cho Chrome/Firefox desktop: không giả lập secureTextEntry hay bàn phím Android bằng DOM.
- Android trong bộ này tập trung Home/Register và header/navigation chung đã có ảnh/xác nhận; không ghi kết quả cho các component React web/Admin không thuộc phạm vi native đã chọn.
- N/A là loại trừ theo scope, không phải ca đã chạy và không thay thế những tính năng native khác nếu mở rộng scope sau này.

## So sánh kết quả

- Chrome và Firefox cho cùng 21 Pass / 19 Fail trên 40 item web; các lỗi như phone, editable total, SAVE10, sản phẩm Admin và thiếu confirm giỏ đều tái hiện.
- Badge đơn hàng có đủ nhãn trạng thái và 5 nền màu; tỷ lệ tương phản đo được khoảng 6,38–8,06:1 trên cả hai browser.
- Header desktop không có số đếm, native Home có Giỏ (0); native Home/Register chưa có chỉ báo trang hiện tại trong phạm vi ảnh.
- Native có lỗi safe area và thiếu Confirm Password; không suy luận bàn phím/Android dialog từ ảnh Chromium emulation cũ.

## Lịch sử harness và giới hạn

- Lượt Firefox hiện cửa sổ đầu tiên bị timeout ở click trước khi chạy checklist; ghi 48 Not Run trong attempt đó, không tính là 48 lỗi sản phẩm. Probe đăng nhập bằng bàn phím được, click chuột bị treo. Probe headless và lượt chạy sau hoạt động; giữ nguyên thư mục attempt cũ.
- Không sử dụng BrowserStack/LambdaTest; sử dụng môi trường Windows local và Android thật theo phương án thiết bị.
- Phiên bản Android/Expo Go chưa được cung cấp; SDK project 54 được ghi riêng, không dùng thay version của Expo Go.
- Dữ liệu test sản phẩm được dọn sau mỗi lượt; tài khoản và đơn tổng hợp riêng được giữ để đối soát. Không sửa logic SUT.

## Chi tiết từng item

| Item | Chrome | Firefox | Android Expo |
| --- | --- | --- | --- |
| CHK-IA01-01 | Failed | Failed | Not Applicable |
| CHK-IA01-02 | Failed | Failed | Not Applicable |
| CHK-IA01-03 | Passed | Passed | Not Applicable |
| CHK-IA01-04 | Not Applicable | Not Applicable | Failed |
| CHK-IA01-05 | Failed | Failed | Not Applicable |
| CHK-IA01-06 | Passed | Passed | Not Applicable |
| CHK-IA01-07 | Passed | Passed | Not Applicable |
| CHK-IA01-08 | Failed | Failed | Not Applicable |
| CHK-IA01-09 | Passed | Passed | Not Applicable |
| CHK-IA01-10 | Not Applicable | Not Applicable | Passed |
| CHK-IA01-11 | Passed | Passed | Not Applicable |
| CHK-IA01-12 | Passed | Passed | Not Applicable |
| CHK-IA02-01 | Failed | Failed | Not Applicable |
| CHK-IA02-02 | Failed | Failed | Not Applicable |
| CHK-IA02-03 | Failed | Failed | Not Applicable |
| CHK-IA02-04 | Failed | Failed | Not Applicable |
| CHK-IA02-05 | Not Applicable | Not Applicable | Failed |
| CHK-IA02-06 | Passed | Passed | Not Applicable |
| CHK-IA02-07 | Failed | Failed | Not Applicable |
| CHK-IA02-08 | Passed | Passed | Not Applicable |
| CHK-IA02-09 | Not Applicable | Not Applicable | Passed |
| CHK-IA02-10 | Failed | Failed | Not Applicable |
| CHK-IA02-11 | Not Applicable | Not Applicable | Passed |
| CHK-IA02-12 | Passed | Passed | Not Applicable |
| CHK-IA02-13 | Failed | Failed | Not Applicable |
| CHK-IA02-14 | Failed | Failed | Not Applicable |
| CHK-IA03-01 | Failed | Failed | Passed |
| CHK-IA03-02 | Passed | Passed | Not Applicable |
| CHK-IA03-03 | Passed | Passed | Not Applicable |
| CHK-IA03-04 | Not Applicable | Not Applicable | Failed |
| CHK-IA03-05 | Passed | Passed | Not Applicable |
| CHK-IA03-06 | Failed | Failed | Failed |
| CHK-IA03-07 | Passed | Passed | Not Applicable |
| CHK-IA03-08 | Not Applicable | Not Applicable | Passed |
| CHK-IA03-09 | Passed | Passed | Not Applicable |
| CHK-IA03-10 | Passed | Passed | Passed |
| CHK-IA04-01 | Failed | Failed | Not Applicable |
| CHK-IA04-02 | Failed | Failed | Not Applicable |
| CHK-IA04-03 | Failed | Failed | Not Applicable |
| CHK-IA04-04 | Failed | Failed | Not Applicable |
| CHK-IA04-05 | Failed | Failed | Not Applicable |
| CHK-IA04-06 | Passed | Passed | Not Applicable |
| CHK-IA04-07 | Passed | Passed | Not Applicable |
| CHK-IA04-08 | Passed | Passed | Not Applicable |
| CHK-IA04-09 | Passed | Passed | Not Applicable |
| CHK-IA04-10 | Passed | Passed | Not Applicable |
| CHK-IA04-11 | Not Applicable | Not Applicable | Passed |
| CHK-IA04-12 | Passed | Passed | Not Applicable |
