> Cập nhật sau review: Task 3 đã có lượt Chrome/Firefox mới, ma trận theo phạm vi và watermark ảnh native. Các mục 1–2 bên dưới là nhận xét trước lượt xử lý này; xem [Task 3 hiện hành](HW03_Cross_Platform_Report.md) để biết kết quả và giới hạn.

# Rà soát bản HW03 hiện hành theo đề

Ngày rà soát: 11/11/2026. Nguồn: `2026.HW03.md`, báo cáo/checklist trong workspace và kiểm tra trực tiếp GitHub Issues. Đây là review bản hiện hành, không tái sử dụng điểm chấm cho ZIP cũ.

## Những phần đã đáp ứng

- 48 items, đủ IA-01/02/03/04 theo phân bổ 12/14/10/12.
- 26 Passed / 22 Failed nhất quán trong dữ liệu hiện hành; Fail có Notes và đường dẫn ảnh tồn tại.
- 15 Human-Added có giải thích AI gap; số nguồn thiết kế là 33 AI / 15 Human.
- 18 bug xác nhận và 5 nhận xét UX được phân loại; 18 GitHub Issues khớp nội dung, 20 ảnh phục vụ Issues truy cập được. Không giữ BUG-02 thiếu alt đã bị bác bỏ.
- Bảy người tham gia do sinh viên xác nhận là người thật; có roster che số, quan sát, đáp án SUS và phân tích. Không yêu cầu quay mặt, không coi thiếu video là bằng chứng mạo danh.
- SUS tính đúng: mean 30.3571428571; AI Critique hiện có 265 đơn vị đếm bằng khoảng trắng, viết một đoạn và có các nội dung đề yêu cầu.
- Có skill, script và link YouTube. Chưa xác minh toàn bộ nội dung video thể hiện một màn hình/flow end-to-end.

## Vấn đề còn lại theo mức ưu tiên

### 1. Task 3 chưa có hồ sơ thực thi đủ ba môi trường

Căn cứ: Task 3 yêu cầu thực hiện Task 1 trên tối thiểu ba nền tảng, bao gồm Chrome, Firefox, và Safari/Android Chrome; Expo Go trên điện thoại thật được thay một nền tảng.

Thực tế: Chrome có lượt chạy mới; Android native có ảnh/xác nhận; Firefox hiện chỉ có ảnh lịch sử một số màn hình, trong đó ảnh giỏ trống và dialog đã đóng chưa đủ chứng minh các kết luận. Chưa có ma trận kết quả theo item và môi trường.

Cần hoàn thiện: chạy/ghi kết quả các mục áp dụng trên từng môi trường, đặc biệt Firefox; giải thích mục nào không áp dụng cho native/web. Không bắt các thuộc tính native như secureTextEntry phải chạy trên Firefox. Không tính Chromium emulation là Android thật.

Vị trí: `HW03_Cross_Platform_Report.md:6` và `:12`.

### 2. Minh chứng Task 3 còn thiếu định danh và môi trường theo đề

Căn cứ: Task 3 yêu cầu overlay email sinh viên; §11 yêu cầu thông tin MSSV/họ tên trên form; ảnh phương án thiết bị thật cần chứng minh browser/OS/device và URL SUT.

Thực tế: ảnh manual chưa có watermark email/MSSV/họ tên; chưa có phiên bản Android/Expo Go. Ảnh web mới có caption thông tin, nhưng là ảnh viewport, không hiện browser chrome/thanh địa chỉ. App native không có thanh địa chỉ: cần lưu bằng chứng project/thiết bị/địa chỉ kết nối thực, không chèn URL giả để làm giống trình duyệt. Không áp localhost trên điện thoại khi backend thực ở IP LAN.

Cần giữ ảnh gốc; chuẩn bị bản minh chứng nộp đúng định danh, giữ nguyên phần UI lỗi. Ảnh About phone gốc chứa số điện thoại/serial/IMEI: không công bố nguyên bản. Việc chưa cung cấp phiên bản Android/Expo Go là thiếu metadata môi trường, không phủ nhận điện thoại thật.

### 3. README chưa có điểm tự đánh giá theo mẫu §15

Căn cứ: §14 yêu cầu self-assessment table theo mẫu, có cột Self-Assessed Grade.

Thực tế: bảng README chỉ có điểm tối đa và tình trạng; câu bên dưới ghi chưa chốt điểm. Chưa có điểm tự chấm từng Task/tổng. Đây là phần còn để mở sau lần đồng bộ trước, không phải đã hoàn tất mẫu nộp.

Cần chốt điểm sinh viên tự đánh giá, bổ sung cột/tổng, rồi dùng cùng số ba chữ số trong tên ZIP lúc đóng gói. Nên có dòng riêng về số items đã thực thi/xác nhận (48), ngoài số thiết kế và Pass/Fail hiện có, để test summary rõ đơn vị.

Vị trí: `README.md:33`–`:42`.

### 4. AI Audit chưa phải log đầy đủ của từng tương tác

Căn cứ: §2 và §9 yêu cầu complete log; từng tương tác có công cụ, ngày giờ, prompt và output.

Thực tế: bảng lịch sử gộp nhiều prompt và tóm tắt output; addendum cũng ghi rõ là tóm tắt, không có giờ từng prompt và không phải transcript đầy đủ. Bản hiện hành minh bạch hơn nhưng chưa đáp ứng toàn bộ yêu cầu về log.

Cần bổ sung export/transcript thật nếu còn giữ, che bí mật, tham chiếu vào audit. Không tự dựng giờ, prompt, output bị thiếu. Có thể giữ bảng hiện tại làm mục lục/tóm tắt. AI Critique 265 từ không còn lỗi độ dài.

Vị trí: `HW03_AI_Audit_Addendum.md:3`, `:15`; `HW03_AI_Audit_Report.md` mục 3.

### 5. Pilot của Task 2 vẫn chưa có kết quả được xác nhận

Căn cứ: Task 2 Phase 1 yêu cầu chạy một pilot trước các phiên chính thức.

Thực tế: kế hoạch có pilot, báo cáo hiện nói chưa có dữ liệu xác nhận kết quả riêng. Không kết luận rằng pilot chắc chắn chưa làm; cũng không tự ghi là đã hoàn thành.

Cần ghi đúng điều sinh viên thực sự đã làm: đã chạy pilot với ai, phát hiện gì, có sửa kịch bản không. Một mô tả ngắn trung thực có thể đủ về mặt báo cáo; không yêu cầu bộ hồ sơ quay biểu cảm hoặc dựng thêm một phiên giả. Nếu chưa làm trước đó, một lượt thử sau các phiên không được đổi tên thành pilot trước nghiên cứu.

Vị trí: `HW03_Usability_Evaluation_Report.md:41`.

### 6. Git log chưa đáp ứng cách ghi nhận theo từng bước

Căn cứ: §12 yêu cầu commit từng bước, ví dụ từng phiên usability.

Thực tế: lịch sử cũ gom công việc trước first commit; không có commits từng phiên P1–P7. File log trong workspace chỉ phản ánh lịch sử local tới 10/11, chưa bao gồm các commits mới trên nhánh GitHub báo cáo.

Cần cập nhật log thật của nhánh nộp để có các commit mới. Phần thiếu commit lịch sử từng phiên không thể sửa hồi tố bằng commit giả; giữ lời giải thích trung thực. Điều này không chứng minh bảy người tham gia là giả.

### 7. Script đóng gói hiện không phù hợp với bộ tài liệu mới

Căn cứ: §14 yêu cầu Excel, audit, report, evidence đầy đủ; mọi link trong bộ nộp phải sử dụng được.

Thực tế ở `scripts/package_submission.ps1`:

- Dòng 23 vẫn lấy `HW03_GUI_Checklist.xls`, trong khi file hiện hành là `.xlsx`; script bỏ qua file không tồn tại, có thể tạo ZIP thiếu Excel.
- Không lấy `HW03_AI_Audit_Addendum.md`.
- Không lấy `task1-runs/`, nơi chứa ảnh Chrome mới và log được báo cáo tham chiếu; các link evidence sẽ hỏng trong ZIP.
- Copy toàn bộ `screenshots/` có thể đưa ảnh manual/01.jpg chứa định danh riêng tư vào bản nộp.
- Dòng 59 vẫn cố định `_100.zip`, không theo điểm tự đánh giá chưa chốt.

Chưa chạy script này. Cần sửa manifest đóng gói trước lần nộp tiếp theo, chọn ảnh/log cần thiết thay vì gom runtime/database/node_modules. Không tạo hoặc chỉnh ZIP trong lần review này.

### 8. PDF và ZIP vẫn là bản cũ theo chỉ định sinh viên

Đây là trạng thái đã được yêu cầu giữ nguyên, không phải thao tác bị bỏ quên. Tuy nhiên §14 yêu cầu main report và audit/critique ở cả Markdown/PDF, nên trước khi nộp chính thức phải xuất lại từ bản hiện hành và tạo ZIP tương ứng. Không nộp PDF/ZIP cũ cùng README mới rồi xem là đã đồng bộ.

## Điểm nên cải thiện, chưa kết luận là vi phạm chắc chắn

- Kịch bản usability vẫn trình bày theo chuỗi bước; có thể diễn đạt thành mục tiêu tự nhiên hơn. Bộ probe Trust gợi sẵn ô tiền/đơn vị tiền, có nguy cơ dẫn dắt. Không sửa ngược lời nói hay dữ liệu phiên đã thực hiện.
- Scope không trùng thành viên nhóm là yêu cầu §5; từ hồ sơ cá nhân chưa kiểm tra được điều này. Chưa có cơ sở kết luận trùng scope.
- Link YouTube tồn tại nhưng cần xem video có thể hiện skill áp dụng trọn một màn hình/flow theo §7. Metadata/title không tự chứng minh nội dung.
- Báo cáo/ảnh mới trên nhánh `codex/hw03-reports-20261111`; nhánh mặc định vẫn có thể là bản cũ. Chưa bắt buộc merge theo đề, nhưng link nộp phải đưa TA tới đúng bản hiện hành.

## Kết luận review

Task 1 đã có dữ liệu, Notes, ảnh và Issues nhất quán. Những mục ưu tiên hoàn thiện trước khi nộp là Task 3, định danh ảnh, self-assessment, AI log đầy đủ và manifest đóng gói. Pilot/Git history giữ theo sự thật; không dựng dữ liệu để làm hồ sơ có vẻ hoàn chỉnh. Không yêu cầu sửa SUT để mọi item Passed: phát hiện và báo cáo bug là kết quả hợp lệ của bài kiểm thử.
