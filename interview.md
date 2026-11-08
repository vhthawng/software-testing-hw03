### intervieees

Nguyễn Anh Vũ - 0339****12 - Sinh viên năm 4 Marketing ĐH FPT

Đặng Dương Thanh Quang - 0905****26 - Sinh viên năm 4 IT ĐH KHTN HCMUS

Đặng Thị Hiếu - 0977****68 - Mẹ của sinh viên, dung điện thoại lướt web mỗi ngày, it mua sắm online 

Nguyễn Trần Ngọc Thịnh - 0973****55 - Sinh viên năm 4 Công nghệ sinh học ĐH KHTN

Võ Hữu Toàn - 0393****21 - Digitial Marketing, anh của sinh viên

Nguyễn Thảo Linh - 0914****05 - Sinh viên năm 4 ngành luật ĐH Quy Nhơn

Phạm Anh Nhật - 0935****68 - Kỹ sư ô tô, tt dung mạng xã hội, chỉ dung youtube để xme phim Nghe nhạc

### Bảng ghi chép quan sát thực tế (Observation Log)

Nhật ký quan sát ghi nhận thời gian, trạng thái tác vụ, các điểm nghẽn và phản hồi thực tế của 7 người tham gia:

| Người tham gia | Thời gian hoàn thành | Trạng thái | Điểm nghẽn ghi nhận (Friction points & Think-Aloud) | Thao tác và phản hồi của người dùng |
| :--- | :---: | :---: | :--- | :--- |
| **P1**  | 265 giây | Cần hỗ trợ nhẹ | - Nhập số điện thoại `0912...` vào hồ sơ bị chặn bởi popup: "Số điện thoại không hợp lệ".<br>- Bấm nút "Thêm vào giỏ hàng" lần đầu không phản hồi, bấm lần hai mới hiện thông báo.<br>- Thấy ô tổng tiền thanh toán cho phép nhấp chuột vào sửa số tiền. | Thắc mắc vì sao số điện thoại đang dùng bị báo không hợp lệ. Thử xóa số 0 ở đầu thì lưu được. Nhận xét về ô tổng tiền: "Ô này gõ số được luôn, lỡ khách nhập 100 ngàn rồi bấm mua thì web có giao hàng không?" |
| **P2**  | 310 giây | Thành công (tự xử lý) | - Thấy ký hiệu tiền tệ không đồng nhất: danh sách ghi `VND`, giỏ hàng và thanh toán ghi `₫`.<br>- Bị kẹt lỗi số điện thoại, tự đoán hệ thống yêu cầu bỏ số 0 đầu tiên.<br>- Thấy ô tổng tiền cho phép nhập tay, thử gõ số khác thì mã giảm giá bị hủy. | Dừng lại ở trang thanh toán khi thấy ô tổng tiền cho phép sửa. Nhận xét: "Ai lại để ô tiền thanh toán cho khách tự gõ thế này. Làm kế toán nhìn vào là thấy hỏng khâu kiểm soát dữ liệu rồi, tôi không dám chuyển khoản." |
| **P3**  | 345 giây | Cần hỗ trợ | - Nhập số điện thoại bị báo lỗi, không rõ nguyên nhân nên dừng lại ở bước 1.<br>- Bấm "Thêm vào giỏ hàng" một lần không thấy phản hồi, tưởng chuột hết pin.<br>- Muốn đổi số lượng bàn phím từ 1 lên 2 trong giỏ hàng nhưng không có nút. Bấm nút "Xóa" thì sản phẩm biến mất ngay mà không có bước xác nhận. | Nhờ người điều phối hỗ trợ sau nhiều lần nhập số điện thoại không thành công. Nhận xét khi bấm nhầm nút xóa: "Nút xóa không hỏi xác nhận, giờ tôi phải tìm và chọn lại từ đầu." |
| **P4**  | 215 giây | Thành công | - Thêm hàng vào giỏ xong nhưng nhìn lên thanh menu không thấy số lượng trên icon giỏ hàng.<br>- Phải bấm vào giỏ hàng mới biết sản phẩm đã được thêm.<br>- Chuyển trang không có hiệu ứng đánh dấu trang hiện tại (Active State). | Kiểm tra thanh điều hướng sau khi thêm sản phẩm. Nhận xét: "Giao diện không có số lượng hiển thị trên icon giỏ hàng. Toàn bộ thông báo dùng popup alert mặc định của trình duyệt." |
| **P5**  | 240 giây | Thành công | - Nhập mã `SAVE10` báo áp dụng thành công nhưng ô tổng tiền không cập nhật theo.<br>- Nhấp chuột vào ô tổng tiền thì mã giảm giá bị hủy.<br>- Lỗi số điện thoại bắt buộc bỏ số 0 gây cản trở khi lưu địa chỉ nhận hàng. | Nhận xét về việc không nhận số điện thoại bắt đầu bằng 0 và giá tiền bị đặt lại khi chạm vào ô tổng tiền: "Số điện thoại không cho nhập số 0 thì người giao hàng không gọi được. Chạm vào ô tiền thì mất mã giảm giá vừa áp dụng." |
| **P6**  | 330 giây | Cần hỗ trợ | - Không thể lưu hồ sơ vì lỗi số điện thoại, cần người điều phối gợi ý cách xử lý.<br>- Ngập ngừng ở nút thêm giỏ hàng vì bấm lần đầu không thấy đổi trạng thái.<br>- Nghi ngờ tính hợp lệ của trang thanh toán khi thấy giá tiền có thể sửa tự do. | Nhận xét lỗi kiểm tra số điện thoại và mức độ an toàn của trang thanh toán: "Số điện thoại trong nước luôn bắt đầu bằng số 0, chặn lại là sai logic. Trang web cho khách tự sửa số tiền thanh toán thì không đủ an toàn." |
| **P7**  | 195 giây | Thành công (tự xử lý) | - Bấm liên tiếp 3 lần nút "Thêm vào giỏ hàng" vì không thấy phản hồi tức thì.<br>- Vào giỏ thấy không có nút tăng giảm số lượng, quyết định bấm thanh toán luôn.<br>- Bỏ qua lỗi số điện thoại bằng cách gõ dãy 9 số không có số 0. | Thao tác bấm nút thêm sản phẩm nhiều lần. Nhận xét: "Nút bấm phải bấm hai lần mới nhận. Giỏ hàng không có nút tăng giảm số lượng nên phải quay ra trang chi tiết để chọn lại." |

---

### Bảng chấm điểm chi tiết thang đo SUS (10 câu hỏi John Brooke)

Thang điểm Likert từ 1 (Hoàn toàn không đồng ý) đến 5 (Hoàn toàn đồng ý).  
Quy tắc tính:
* Câu lẻ (Q1, Q3, Q5, Q7, Q9): Điểm thành phần = Điểm đánh giá - 1
* Câu chẵn (Q2, Q4, Q6, Q8, Q10): Điểm thành phần = 5 - Điểm đánh giá
* Điểm SUS cá nhân = Tổng 10 điểm thành phần x 2.5

| STT | Câu hỏi khảo sát SUS | P1 | P2 | P3 | P4 | P5 | P6 | P7 |
| :---: | :--- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| **Q1** | Tôi nghĩ rằng tôi sẽ thích dùng hệ thống này thường xuyên. | 2 | 1 | 2 | 2 | 2 | 1 | 2 |
| **Q2** | Tôi thấy hệ thống này phức tạp không cần thiết. | 4 | 4 | 4 | 3 | 4 | 4 | 4 |
| **Q3** | Tôi nghĩ rằng hệ thống này dễ sử dụng. | 2 | 2 | 2 | 3 | 2 | 2 | 2 |
| **Q4** | Tôi nghĩ rằng tôi sẽ cần hỗ trợ từ người rành kỹ thuật. | 3 | 4 | 4 | 2 | 3 | 4 | 2 |
| **Q5** | Tôi nhận thấy các chức năng được tích hợp tốt. | 2 | 2 | 2 | 2 | 2 | 2 | 2 |
| **Q6** | Tôi thấy có quá nhiều điểm thiếu nhất quán. | 4 | 5 | 4 | 4 | 4 | 4 | 4 |
| **Q7** | Tôi nghĩ hầu hết mọi người sẽ học dùng rất nhanh. | 3 | 2 | 2 | 3 | 3 | 2 | 3 |
| **Q8** | Tôi thấy hệ thống rất cồng kềnh, bất tiện khi thao tác. | 4 | 5 | 4 | 4 | 4 | 4 | 4 |
| **Q9** | Tôi thấy tự tin khi thực hiện các thao tác. | 2 | 1 | 2 | 2 | 2 | 1 | 2 |
| **Q10**| Tôi cần phải học nhiều thứ trước khi dùng thạo. | 2 | 3 | 4 | 2 | 2 | 4 | 2 |
| | **Tổng điểm thô (Sum of converted scores / 40)** | **14** | **7** | **10** | **17** | **14** | **8** | **15** |
| | **Điểm SUS chuẩn hóa (Thang 100)** | **35.0** | **17.5** | **25.0** | **42.5** | **35.0** | **20.0** | **37.5** |

#### Các chỉ số thống kê tổng hợp:
* **Điểm SUS trung bình (Mean SUS):** 30.36 / 100
* **Độ lệch chuẩn (Standard Deviation):** 9.51
* **Điểm cao nhất (Max):** 42.5 (P4)
* **Điểm thấp nhất (Min):** 17.5 (P2)
* **Xếp hạng chữ (Grade):** Hạng F
* **Mức độ chấp nhận (Acceptability Range):** Not Acceptable (thấp hơn nhiều so với chuẩn trung bình ngành 68.0 điểm).

---

### Biên bản phỏng vấn 4 khía cạnh (Probe Questions)

Ghi nhận câu trả lời trực tiếp của từng người tham gia sau khi hoàn thành phiên kiểm thử.

#### 1. Độ rõ ràng (Clarity)
* **P1:** Chữ và giá tiền nhìn chung đọc được, nhưng hệ thống hay bật các hộp thoại alert mặc định của trình duyệt khiến thao tác bị ngắt quãng.
* **P2:** Bố cục các ô nhập đơn giản nhưng ký hiệu tiền tệ không đồng nhất. Danh mục ghi VND, sang giỏ hàng và thanh toán lại ghi ký hiệu đ.
* **P3:** Giao diện ít chữ nên thoáng, nhưng thiếu thông tin hướng dẫn. Ô số điện thoại chỉ báo không hợp lệ mà không nêu rõ quy định định dạng cần nhập.
* **P4:** Thiếu các chỉ báo trạng thái. Nút bấm không đổi màu rõ rệt khi di chuột qua, trên đầu trang chỗ icon giỏ hàng không có số lượng hiển thị.
* **P5:** Bảng giỏ hàng thể hiện rõ giá từng món, nhưng ô mã giảm giá và ô tổng tiền đặt gần nhau mà cách tính không ăn khớp.
* **P6:** Thứ tự sắp xếp các mục từ trên xuống dưới đúng quy trình mua hàng, nhưng phản hồi của hệ thống sau mỗi lần bấm nút chưa rõ ràng.
* **P7:** Giao diện cơ bản, các trường thông tin chính như tên sản phẩm và giá tiền hiển thị đầy đủ.

#### 2. Khả năng phát hiện và sửa lỗi (Error Recovery)
* **P1:** Hệ thống không cho nhập số điện thoại bắt đầu bằng số 0. Tôi phải tự xóa số 0 đầu tiên đi thì form mới cho lưu.
* **P2:** Thông báo lỗi bằng lệnh alert của trình duyệt không chỉ rõ vị trí ký tự sai, gây khó khăn cho việc chỉnh sửa lại dữ liệu.
* **P3:** Tôi không tự tìm ra lỗi khi nhập số điện thoại, phải nhờ người điều phối gợi ý bỏ số 0 mới tiếp tục được.
* **P4:** Giỏ hàng không có cơ chế phòng ngừa lỗi. Khi bấm nút Xóa, dòng sản phẩm biến mất ngay, không có bước xác nhận lại hay nút hoàn tác.
* **P5:** Khi chạm vào ô tổng tiền, mã giảm giá vừa áp dụng bị hủy bỏ và không tự khôi phục lại.
* **P6:** Hệ thống chỉ thông báo lỗi chung chung chứ không có văn bản hướng dẫn sửa lỗi đặt dưới chân ô nhập liệu.
* **P7:** Khi bấm nhầm nút xóa trong giỏ hàng, sản phẩm mất hoàn toàn và phải quay về trang danh sách để tìm lại.

#### 3. Tốc độ và sự mượt mà (Speed)
* **P1:** Tải trang bình thường, nhưng bị nghẽn ở nút thêm vào giỏ hàng vì phải bấm hai lần hệ thống mới nhận lệnh.
* **P2:** Số bước từ chọn hàng đến thanh toán ngắn, nhưng mất nhiều thời gian ở khâu kiểm tra lại số tiền do nghi ngờ hiển thị sai.
* **P3:** Thao tác chậm do phải dừng lại xử lý lỗi số điện thoại và kiểm tra xem nút bấm đã nhận hay chưa.
* **P4:** Phản hồi của nút thêm hàng bị trễ nhịp. Giỏ hàng không cho chỉnh số lượng nên tốn thêm thao tác chuyển trang.
* **P5:** Thao tác chọn mua một sản phẩm diễn ra bình thường, nhưng nếu muốn thay đổi số lượng thì tốn nhiều thời gian vì phải chọn lại từ trang chi tiết.
* **P6:** Tốc độ tải dữ liệu ổn định, việc phải bấm nút hai lần ở trang sản phẩm làm kéo dài thời gian hoàn thành tác vụ.
* **P7:** Quy trình chuyển trang nhanh, gián đoạn chủ yếu xảy ra ở các bước gặp thông báo lỗi.

#### 4. Mức độ tin cậy và an tâm giao dịch (Trust)
* **P1:** Ô tổng tiền thanh toán cho phép người dùng tự gõ sửa giá tiền, tạo cảm giác hệ thống chưa hoàn chỉnh và thiếu tin cậy.
* **P2:** Việc để trường tổng tiền ở dạng có thể chỉnh sửa tự do là lỗi kiểm soát dữ liệu. Tôi không thực hiện thanh toán thật trên hệ thống này.
* **P3:** Các thông báo lỗi xuất hiện nhiều lần khiến tôi không yên tâm khi thực hiện các bước tiếp theo.
* **P4:** Trang xác nhận sau thanh toán chỉ có một dòng thông báo ngắn, không có mã đơn hàng hay thời gian giao dự kiến để theo dõi.
* **P5:** Tính toán tiền bạc không cố định và ô giá tiền cho sửa tay làm giảm độ tin cậy của trang web.
* **P6:** Hệ thống cho phép người mua tự sửa số tiền cần thanh toán khiến giao dịch mất tính an toàn. Tôi sẽ dừng lại ở bước này.
* **P7:** Các tính năng cơ bản còn gặp lỗi nên chưa tạo được sự yên tâm nếu phải thanh toán đơn hàng có giá trị lớn.

