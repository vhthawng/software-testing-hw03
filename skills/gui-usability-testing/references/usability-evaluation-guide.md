# HƯỚNG DẪN ĐÁNH GIÁ ĐỘ KHẢ DỤNG (USABILITY EVALUATION GUIDE)

Tài liệu tham chiếu chuẩn cho Agent Skill `gui-usability-testing`, dựa trên lý thuyết của Jeffrey Rubin & Dana Chisnell (*Handbook of Usability Testing*, Wiley) và slide bài giảng môn học (FIT@HCMUS, Slide p.29–42).

---

## 1. 6 Thành Phần Bắt Buộc Của Một Nghiên Cứu Khả Dụng (Slide p.31)

1. **Mục tiêu cụ thể (Specific Objectives):** Xác định rõ câu hỏi nghiên cứu cần giải quyết (ví dụ: người dùng có gặp nghẽn khi áp mã giảm giá không, có hoang mang khi bấm nút thêm giỏ hàng không).
2. **Người dùng đại diện (Representative Users):** Tuyển chọn người tham gia phù hợp với hồ sơ đối tượng thực tế (ưu tiên người dùng thông thường, non-IT, mua sắm online thực tế; không dùng sinh viên cùng môn học).
3. **Môi trường thực (Actual Environment):** Kiểm thử trên thiết bị thực, trình duyệt thực tế mà người dùng hay sử dụng.
4. **Quan sát có cấu trúc (Neutral Observation):** Quan sát trực tiếp thao tác của người dùng, ghi nhận từng cử chỉ ngập ngừng, nhầm lẫn, biểu cảm bối rối và lời nói thuật lại.
5. **Dữ liệu định lượng và định tính (Quantitative & Qualitative Data):**
   - Định lượng: Thời gian hoàn thành tác vụ, số lỗi mắc phải, điểm số SUS.
   - Định tính: Phát biểu suy nghĩ (think-aloud), câu trả lời phỏng vấn đào sâu, nhận xét tự do.
6. **Phân tích và Khuyến nghị (Analysis & Recommendations):** Tổng hợp các phát hiện, xếp hạng mức độ nghiêm trọng và đưa ra đề xuất cải tiến có tính hành động.

---

## 2. Kế Hoạch Kiểm Thử Khả Dụng 9 Phần (Slide p.35)

Một kế hoạch chuẩn phải bao gồm đủ 9 mục sau:
1. **Mục đích (Purpose):** Lý do thực hiện kiểm thử khả dụng cho hệ thống EShop.
2. **Phát biểu vấn đề (Problem Statement):** Các câu hỏi cụ thể cần giải đáp:
   - *Liệu người dùng có hoàn tất quy trình mua hàng mà không cần trợ giúp?*
   - *Các bước thanh toán và áp mã giảm giá có tạo cảm giác an tâm và minh bạch?*
3. **Mục tiêu & Tác vụ kiểm thử (User Tasks):** Kịch bản kiểm thử hướng mục tiêu (Goal-oriented scenario).
4. **Hồ sơ người dùng (User Profile):** Độ tuổi, nghề nghiệp, mức độ quen thuộc với mua sắm trực tuyến.
5. **Phương pháp & Thiết kế kiểm thử (Methodology):** Đánh giá có điều phối viên (Moderated), áp dụng giao thức Think-Aloud, 1 người/phiên.
6. **Môi trường & Thiết bị (Environment & Setup):** Máy tính xách tay / trình duyệt, công cụ ghi màn hình (OBS / Zoom / Google Meet).
7. **Vai trò người điều phối (Moderator Role):** Giữ thái độ trung lập tuyệt đối, chỉ can thiệp khi người dùng bị bế tắc hoàn toàn (> 3 phút), không đưa ra gợi ý hay giải thích cách hoạt động của hệ thống.
8. **Số đo đánh giá & Dữ liệu cần thu (Metrics & Data):**
   - Thời gian hoàn thành (giây/phút).
   - Tỷ lệ thành công không trợ giúp (%).
   - Số điểm nghẽn (Friction points) ghi nhận.
   - Điểm số thang đo chuẩn SUS (0 – 100).
   - Đánh giá 4 khía cạnh: Clarity, Error Recovery, Speed, Trust.
9. **Nội dung báo cáo (Report Content):** Bảng tổng hợp số đo, phân tích nguyên nhân lỗi, bảng xếp hạng mức độ nghiêm trọng và khuyến nghị thiết kế.

---

## 3. Thiết Kế Kịch Bản Hướng Mục Tiêu (Goal-Oriented Scenario - Slide p.36)

* **Nguyên tắc vàng:** Cung cấp cho người dùng một **Mục tiêu thực tế**, tuyệt đối **KHÔNG cung cấp hướng dẫn từng bước (Step-by-step instructions)**.
* **Ví dụ SAI (cầm tay chỉ việc - làm mất giá trị kiểm thử):**
  > *"Bước 1: Bấm vào ô tìm kiếm gõ 'áo'. Bước 2: Bấm vào sản phẩm đầu tiên. Bước 3: Bấm nút Thêm giỏ hàng 2 lần. Bước 4: Vào giỏ hàng bấm Thanh toán. Bước 5: Gõ mã COUPON10 vào ô..."*
* **Ví dụ ĐÚNG (Kịch bản hướng mục tiêu):**
  > *"Bạn đang cần mua một món đồ trên trang web EShop với ngân sách dưới 500.000 ₫. Bạn hãy tìm sản phẩm ưng ý, thêm vào giỏ hàng và áp dụng một mã giảm giá phù hợp để hoàn tất đặt đơn hàng với số tiền tiết kiệm nhất."*

---

## 4. Thang Đo Chuẩn SUS (System Usability Scale - Slide p.38, 40)

Thang đo SUS gồm 10 câu hỏi chuẩn mực của John Brooke (1986), sử dụng thang điểm Likert từ 1 (*Rất không đồng ý*) đến 5 (*Rất đồng ý*):

1. Tôi nghĩ rằng tôi sẽ thích sử dụng hệ thống này thường xuyên.
2. Tôi thấy hệ thống này phức tạp một cách không cần thiết.
3. Tôi nghĩ rằng hệ thống này dễ sử dụng.
4. Tôi nghĩ rằng tôi sẽ cần sự hỗ trợ của một chuyên gia kỹ thuật để có thể sử dụng hệ thống này.
5. Tôi nhận thấy các chức năng trong hệ thống này được tích hợp rất tốt.
6. Tôi nghĩ rằng có quá nhiều sự thiếu nhất quán trong hệ thống này.
7. Tôi tưởng tượng rằng hầu hết mọi người sẽ học cách sử dụng hệ thống này rất nhanh chóng.
8. Tôi thấy hệ thống này rất cồng kềnh/bất tiện khi sử dụng.
9. Tôi cảm thấy rất tự tin khi sử dụng hệ thống này.
10. Tôi cần phải học rất nhiều điều trước khi có thể sử dụng thành thạo hệ thống này.

### Công thức tính điểm SUS:
- Với các câu hỏi số lẻ (1, 3, 5, 7, 9): $\text{Score}_i = \text{Response}_i - 1$
- Với các câu hỏi số chẵn (2, 4, 6, 8, 10): $\text{Score}_i = 5 - \text{Response}_i$
- **Tổng điểm SUS (thang 0 – 100):**
  $$\text{SUS Score} = 2.5 \times \sum_{i=1}^{10} \text{Score}_i$$

### Thang đo chuẩn đối chiếu (Sauro & Lewis, 2016):
* **> 80.3 điểm:** Hạng **A** (Xuất sắc - Excellent)
* **68.0 – 80.3 điểm:** Hạng **B** (Tốt - Good, điểm trung bình tiêu chuẩn ngành là 68.0)
* **51.0 – 67.9 điểm:** Hạng **C** (Chấp nhận được nhưng cần cải thiện - Marginal)
* **< 51.0 điểm:** Hạng **F** (Kém khả dụng - Poor / Unacceptable)

---

## 5. Bộ Câu Hỏi Phỏng Vấn Định Tính 4 Khía Cạnh (Probe Questions)

Sau khi hoàn tất tác vụ và điền phiếu SUS, người điều phối phỏng vấn sâu 4 câu hỏi:
1. **Clarity (Độ rõ ràng):** *"Bạn thấy các thông tin, nhãn nút và hướng dẫn trên màn hình có rõ ràng, dễ hiểu không? Có chỗ nào làm bạn phân vân không biết phải làm gì tiếp theo?"*
2. **Error Recovery (Khả năng phát hiện & sửa lỗi):** *"Trong quá trình thực hiện, bạn có gặp lỗi nào không? Khi gặp lỗi, hệ thống thông báo ra sao và bạn tự khắc phục hay cần hỗ trợ?"*
3. **Speed (Tốc độ & Tính trôi chảy):** *"Bạn cảm thấy các thao tác thực hiện có nhanh chóng và mượt mà không? Có bước nào gây chậm trễ hoặc phiền toái không cần thiết?"*
4. **Trust (Mức độ tin cậy & An tâm):** *"Bạn cảm thấy mức độ an tâm và tin cậy thế nào khi đặt hàng và thanh toán trên trang web này? Có chi tiết nào làm bạn nghi ngờ về tính minh bạch hoặc bảo mật không?"*

---

## 6. Phân Loại Mức Độ Nghiêm Trọng (Severity Ranking - Slide p.41)

Công thức xác định độ ưu tiên khắc phục:
$$\text{Criticality} = \text{Severity (Mức độ nghiêm trọng)} \times \text{Probability (Tần suất xuất hiện)}$$

* **Blocker (Nghiêm trọng cấp 1 - Chặn tác vụ):** Khiến người dùng hoàn toàn không thể hoàn thành tác vụ (ví dụ: nút bấm bị vô hiệu hóa ngầm, lỗi sập trang, hệ thống trừ tiền sai).
* **Major (Nghiêm trọng cấp 2 - Trở ngại lớn):** Người dùng gặp khó khăn lớn, mất nhiều thời gian hoặc gây bối rối nghiêm trọng nhưng vẫn có thể xoay sở qua được (ví dụ: nút Thêm giỏ hàng phải bấm 2 lần mới ăn, thông báo lỗi bằng alert khó chịu).
* **Minor (Nhẹ cấp 3 - Thẩm mỹ & Khó chịu nhỏ):** Không cản trở tác vụ nhưng làm giảm trải nghiệm người dùng (ví dụ: màu sắc nút chưa đúng quy ước, chữ tiền tệ thiếu đồng nhất, thiếu breadcrumb).
