# TÀI LIỆU KẾ HOẠCH & BỘ CÔNG CỤ ĐÁNH GIÁ KHẢ NĂNG SỬ DỤNG (TASK 2)
## EShop Usability Evaluation Plan & Measurement Instruments
**Học phần:** Kiểm thử phần mềm (Software Testing) – CQ2023/3  
**Sinh viên thực hiện:** Võ Hữu Thắng (MSSV: 23120355)  
**Tiêu chuẩn áp dụng:** Jeffrey Rubin & Dana Chisnell (*Handbook of Usability Testing*), John Brooke (*System Usability Scale - SUS*), Slide bài giảng S13 FIT@HCMUS  

---

## PHẦN I: KẾ HOẠCH KIỂM THỬ KHẢ DỤNG 9 PHẦN (RUBIN & CHISNELL TEST PLAN)

### 1. Mục đích kiểm thử (Purpose)
Đánh giá độ khả dụng, tính dễ học (Learnability), độ hiệu quả (Efficiency) và mức độ hài lòng (Satisfaction) của người dùng cuối trên hệ thống thương mại điện tử **EShop**, tập trung vào quy trình xuyên suốt (End-to-End Flow): **Quản lý hồ sơ cá nhân (FR-04) $\rightarrow$ Xem sản phẩm & Thêm giỏ hàng (FR-06, FR-07) $\rightarrow$ Áp dụng mã giảm giá & Thanh toán (FR-08, FR-09)**.

### 2. Phát biểu vấn đề & Câu hỏi nghiên cứu (Problem Statement)
Kỳ đánh giá này tập trung giải đáp 4 câu hỏi cốt lõi:
1. *Người dùng có thể tự cập nhật thông tin giao hàng và số điện thoại liên hệ một cách thuận lợi hay gặp phải các rào cản validation vô lý?*
2. *Khi thêm sản phẩm vào giỏ hàng và kiểm tra đơn giá, hệ thống phản hồi có tức thời và minh bạch không? Có chi tiết nào gây hoang mang, hiểu lầm?*
3. *Người dùng có dễ dàng tìm, nhập và nhận biết trạng thái mã giảm giá (áp dụng thành công hoặc hết hạn) mà không cần trợ giúp?*
4. *Giao diện thanh toán cuối cùng có tạo dựng được lòng tin (Trust) và sự an tâm về mặt bảo mật số tiền thanh toán hay không?*

### 3. Tác vụ kiểm thử & Kịch bản hướng mục tiêu (Goal-Oriented Task Scenario)
* **Nguyên tắc điều phối:** Cung cấp cho người tham gia một mục tiêu thực tế (Goal-oriented), tuyệt đối **không** hướng dẫn từng bước click chuột (Step-by-step).
* **Kịch bản giao cho người tham gia:**
  > *"Bạn vừa chuyển chỗ ở mới và muốn mua sắm một chiếc bàn phím cơ phục vụ công việc với ngân sách dưới 7.000.000 ₫ trên trang web EShop.*  
  > *Bạn hãy thực hiện các việc sau:*  
  > *1. Đăng nhập tài khoản của bạn, cập nhật lại số điện thoại nhận hàng mới trong Hồ sơ cá nhân.*  
  > *2. Tìm một sản phẩm bàn phím ưng ý trong tầm giá, đưa vào giỏ hàng.*  
  > *3. Tiến hành đặt hàng, sử dụng mã giảm giá phù hợp (`SAVE10` hoặc mã bạn tìm được) để tiết kiệm chi phí và hoàn tất quy trình thanh toán."*

### 4. Hồ sơ người tham gia (User Profile & Recruitment)
* **Số lượng:** 07 người tham gia.
* **Đặc điểm đối tượng:** Người dùng phổ thông, có thói quen mua sắm online trên Shopee, Lazada hoặc Tiki; ưu tiên người ngoài ngành CNTT (Non-IT) để đảm bảo góc nhìn khách quan và chân thực nhất.

### 5. Phương pháp & Thiết kế kiểm thử (Methodology)
* **Hình thức:** Đánh giá có điều phối viên (Moderated Usability Testing).
* **Giao thức:** Áp dụng phương pháp suy nghĩ thành tiếng (**Think-Aloud Protocol**). Người tham gia được khuyến khích liên tục nói ra những gì họ đang nhìn thấy, đang tìm kiếm, cảm xúc phân vân hoặc bực bội trong suốt quá trình thao tác.

### 6. Môi trường & Thiết bị (Environment & Setup)
* **Thiết bị:** Máy tính cá nhân (Laptop), chuột quang, màn hình độ phân giải Full HD (1920x1080).
* **Trình duyệt:** Google Chrome / Mozilla Firefox truy cập vào SUT EShop (`http://localhost:5173`).

### 7. Vai trò & Quy tắc của người điều phối (Moderator Guidelines)
* **Tạo sự thoải mái:** Nhắc nhở người tham gia trước khi bắt đầu: *"Chúng tôi đang kiểm thử hệ thống phần mềm, hoàn toàn không kiểm tra năng lực của bạn. Bạn không bao giờ làm sai, nếu có vấn đề gì xảy ra thì đó là lỗi của hệ thống."*
* **Thái độ trung lập tuyệt đối:** Không gật đầu, không lắc đầu, không khen chê; không chỉ tay vào màn hình hay gợi ý *"Bấm vào nút này đi"*.

### 8. Thước đo đánh giá & Dữ liệu cần thu thập (Metrics)
* **Dữ liệu định lượng:**
  1. *Thời gian hoàn thành tác vụ (Time on Task - giây).*
  2. *Tỷ lệ hoàn thành tác vụ không trợ giúp (Unassisted Completion Rate - %).*
  3. *Số lỗi mắc phải (Defect/Error count).*
  4. *Điểm số thang đo độ khả dụng hệ thống SUS (System Usability Scale, thang 0–100).*
* **Dữ liệu định tính:**
  1. Ghi chép nhật ký các điểm nghẽn (Friction points), cử chỉ ngập ngừng, lời than phiền.
  2. Phỏng vấn sâu 4 khía cạnh: **Clarity (Rõ ràng), Error Recovery (Khắc phục lỗi), Speed (Tốc độ), Trust (Tin cậy)**.

### 9. Nội dung & Báo cáo kết quả (Deliverables)
* Bảng tổng hợp điểm số SUS của 7 người tham gia (kèm Mean, Standard Deviation, Percentile, Grade).
* Bảng phân loại mức độ nghiêm trọng của các vấn đề khả dụng ($\text{Criticality} = \text{Severity} \times \text{Probability}$).
* Danh sách lỗi hệ thống (Bug) cần mở GitHub Issue và danh sách các vấn đề cải tiến thiết kế giao diện (Systemic Design Issues).

---

## PHẦN II: BỘ CÔNG CỤ KHẢO SÁT & ĐO LƯỜNG (INSTRUMENTS)

### 1. Thang đo chuẩn SUS (System Usability Scale - 10 câu hỏi John Brooke 1986)
Người tham gia đánh giá theo thang điểm Likert từ **1 (Hoàn toàn không đồng ý)** đến **5 (Hoàn toàn đồng ý)** ngay sau khi kết thúc phiên kiểm thử:

| STT | Câu hỏi khảo sát SUS | Thang điểm (1 - 5) | Ghi chú tính điểm |
| :---: | :--- | :---: | :--- |
| **Q1** | Tôi nghĩ rằng tôi sẽ thích sử dụng hệ thống này thường xuyên. | `[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]` | Điểm = Response - 1 |
| **Q2** | Tôi thấy hệ thống này phức tạp một cách không cần thiết. | `[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]` | Điểm = 5 - Response |
| **Q3** | Tôi nghĩ rằng hệ thống này dễ sử dụng. | `[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]` | Điểm = Response - 1 |
| **Q4** | Tôi nghĩ rằng tôi sẽ cần sự hỗ trợ của chuyên gia kỹ thuật để dùng được hệ thống. | `[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]` | Điểm = 5 - Response |
| **Q5** | Tôi nhận thấy các chức năng trong hệ thống này được tích hợp rất tốt. | `[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]` | Điểm = Response - 1 |
| **Q6** | Tôi nghĩ rằng có quá nhiều sự thiếu nhất quán trong hệ thống này. | `[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]` | Điểm = 5 - Response |
| **Q7** | Tôi nghĩ rằng hầu hết mọi người sẽ học cách sử dụng hệ thống này rất nhanh chóng. | `[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]` | Điểm = Response - 1 |
| **Q8** | Tôi thấy hệ thống này rất cồng kềnh / bất tiện khi thao tác. | `[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]` | Điểm = 5 - Response |
| **Q9** | Tôi cảm thấy rất tự tin khi thực hiện các thao tác trên hệ thống này. | `[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]` | Điểm = Response - 1 |
| **Q10**| Tôi cảm thấy cần phải học thêm nhiều điều trước khi có thể sử dụng thành thạo. | `[ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]` | Điểm = 5 - Response |

* **Công thức chuẩn hóa điểm số:**
  $$\text{SUS Score} = 2.5 \times \sum_{i=1}^{10} \text{Score}_i \quad (\text{Thang điểm từ } 0 \text{ đến } 100)$$

---

### 2. Bộ câu hỏi phỏng vấn đào sâu 4 khía cạnh (Probe Questions)
Sau khi điền phiếu SUS, người điều phối phỏng vấn trực tiếp người tham gia bằng 4 câu hỏi định tính:

1. **Clarity (Độ rõ ràng):**
   > *"Anh/Chị thấy bố cục trang web, các dòng chữ và nhãn nút bấm có dễ hiểu không? Có bước nào trong lúc mua hàng làm Anh/Chị phân vân không biết màn hình đang yêu cầu điều gì không?"*
2. **Error Recovery (Khả năng phát hiện và khắc phục lỗi):**
   > *"Trong quá trình cập nhật thông tin cá nhân hoặc áp dụng mã giảm giá, Anh/Chị có gặp trục trặc hoặc nhận được thông báo lỗi nào không? Thông báo đó có giúp Anh/Chị biết cách sửa lại cho đúng không?"*
3. **Speed (Tốc độ & Tính trôi chảy):**
   > *"Anh/Chị cảm thấy tốc độ hoàn thành việc mua hàng nhanh hay chậm? Có thao tác nào phải thực hiện lặp đi lặp lại hoặc gây mất thời gian không đáng có không?"*
4. **Trust (Mức độ tin cậy & An tâm giao dịch):**
   > *"Anh/Chị có cảm giác an tâm khi thanh toán trên trang web này không? Có yếu tố giao diện nào (ví dụ như ô tiền thanh toán, hiển thị đơn vị tiền tệ) làm Anh/Chị cảm thấy nghi ngờ hoặc thiếu tin tưởng không?"*

---

## PHẦN III: DỮ LIỆU THU THẬP

Danh sách bảy người tham gia, nhật ký quan sát, thời lượng, phản hồi phỏng vấn và bảng SUS được trình bày trong [báo cáo usability](HW03_Usability_Evaluation_Report.md). [Ghi chép gốc](interview.md) và [đáp án SUS](sus_participants.json) được đính kèm để đối chiếu.
