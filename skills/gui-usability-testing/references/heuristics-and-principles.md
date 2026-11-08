# CÁC BỘ HEURISTICS, NGUYÊN TẮC VÀ CHECKLIST KIỂM THỬ GUI

Tài liệu tham chiếu chuẩn cho Agent Skill `gui-usability-testing`, tổng hợp từ slide bài giảng môn học (FIT@HCMUS) và các tài liệu kinh điển: Jakob Nielsen (1994), Don Norman (2013), Ben Shneiderman (2016), Waghmare (2009), W3C WCAG 2.2.

---

## 1. 10 Heuristics Khả Dụng của Jakob Nielsen (Slide p.6)

1. **Visibility of System Status (Khả kiến trạng thái hệ thống):**
   - Hệ thống phải luôn thông báo cho người dùng biết chuyện gì đang xảy ra thông qua phản hồi thích hợp và kịp thời (loading spinner, thanh tiến trình, thông báo hoàn tất, chỉ báo số lượng trong giỏ hàng).
2. **Match Between System and The Real World (Khớp giữa hệ thống và thế giới thực):**
   - Dùng ngôn ngữ, từ ngữ, khái niệm quen thuộc với người dùng thay vì thuật ngữ kỹ thuật/mã hệ thống (ví dụ: dùng "Giỏ hàng", "Đặt hàng" thay vì "CartSession", "OrderEntity"). Đơn vị tiền tệ, ngày tháng theo chuẩn địa phương (VND / ₫, dd/mm/yyyy).
3. **User Control and Freedom (Quyền kiểm soát và tự do của người dùng):**
   - Người dùng thường chọn nhầm chức năng và cần một "lối thoát hiểm" rõ ràng: hỗ trợ nút Hủy (Cancel), Quay lại (Back), Xóa, hoặc Hoàn tác (Undo) mà không bị kẹt trong quy trình.
4. **Consistency and Standards (Nhất quán và chuẩn mực):**
   - Tuân thủ các quy ước nền tảng (nút chính nằm ở đâu, logo click về Home, màu sắc thương hiệu, font chữ đồng bộ giữa các trang). Cùng một hành động phải có cùng một biểu hiện trên toàn hệ thống.
5. **Error Prevention (Phòng ngừa lỗi):**
   - Thiết kế kỹ lưỡng để người dùng không mắc lỗi ngay từ đầu tốt hơn là thông báo lỗi sau khi họ đã phạm: vô hiệu hóa nút Submit khi form chưa điền, cảnh báo xác nhận trước khi xóa đơn hàng/sản phẩm (Yes/No dialog), trường ngày có datepicker để tránh gõ sai định dạng.
6. **Recognition Rather Than Recall (Nhận diện thay vì nhớ lại):**
   - Giảm tải bộ nhớ ngắn hạn của người dùng bằng cách làm cho các đối tượng, hành động và lựa chọn hiển thị rõ ràng. Người dùng không phải nhớ thông tin từ màn hình này sang màn hình khác (ví dụ: ở trang Checkout phải tóm tắt lại các sản phẩm đã chọn trong Cart).
7. **Flexibility and Efficiency of Use (Linh hoạt và hiệu quả sử dụng):**
   - Hỗ trợ cả người mới dùng lẫn người dùng thành thạo: phím tắt (Enter submit, Esc cancel, Tab chuyển trường), tìm kiếm nhanh, lưu thông tin đặt hàng trước đó.
8. **Aesthetic and Minimalist Design (Thiết kế thẩm mỹ và tinh giản):**
   - Giao diện không chứa thông tin dư thừa hoặc hiếm khi cần thiết. Mọi thông tin thừa đều cạnh tranh và làm giảm độ nổi bật của thông tin quan trọng.
9. **Help Users Recognize, Diagnose, and Recover from Errors (Trợ giúp nhận diện và sửa lỗi):**
   - Thông báo lỗi phải viết bằng ngôn ngữ tự nhiên rõ ràng, nêu chính xác vấn đề và gợi ý cách giải quyết (không dùng mã lỗi kỹ thuật 500/404 thô, không đổ lỗi cho người dùng). Khi lỗi, đưa focus về trường sai và đổi viền màu đỏ.
10. **Help and Documentation (Trợ giúp và tài liệu):**
    - Mặc dù hệ thống tốt là không cần hướng dẫn, nhưng khi cần thì trợ giúp phải dễ tìm, tập trung vào tác vụ cụ thể của người dùng và liệt kê các bước cụ thể.

---

## 2. 6 Nguyên Tắc Thiết Kế của Don Norman (Slide p.7)

1. **Visibility (Khả kiến):** Người dùng có thể nhìn thấy ngay trạng thái của hệ thống và các thao tác khả dĩ không? *"Tôi có thấy nó không?"*
2. **Feedback (Phản hồi):** Mọi hành động của người dùng đều nhận được phản hồi tức thì (hiệu ứng hover nút, trạng thái click, toast thông báo). *"Nó đang làm gì?"*
3. **Affordance (Gợi ý sử dụng):** Hình dáng và thuộc tính của thành phần gợi ý cách dùng (nút bấm trông giống như bấm được, ô nhập trông có thể gõ chữ được, link có gạch chân hoặc màu khác). *"Tôi dùng nó thế nào?"*
4. **Mapping (Ánh xạ):** Mối quan hệ giữa điều khiển và kết quả trong thế giới thực trực quan, tự nhiên (nút Tăng nằm bên phải/trên, nút Giảm nằm bên trái/dưới). *"Di chuyển đi đâu?"*
5. **Constraints (Ràng buộc):** Giới hạn các thao tác để ngăn ngừa hành vi sai (disable nút áp mã khi chưa nhập text, giới hạn độ dài ký tự của số điện thoại). *"Sao tôi không làm thế được?"*
6. **Consistency (Nhất quán):** Sử dụng các ký hiệu, nút bấm và quy ước tương tự nhau trên toàn bộ ứng dụng. *"Đã gặp cái này ở đâu chưa?"*

---

## 3. 8 Quy Tắc Vàng của Ben Shneiderman (Slide p.8)

1. **Hướng tới sự nhất quán (Strive for consistency):** Chuỗi hành động, thuật ngữ, layout, font chữ phải đồng nhất.
2. **Cho người dùng thường xuyên dùng phím tắt (Enable frequent users to use shortcuts):** Tab, Enter, Space.
3. **Cung cấp phản hồi giàu thông tin (Offer informative feedback):** Thao tác nhỏ có phản hồi nhẹ, thao tác lớn (đặt hàng) có xác nhận trang trọng.
4. **Thiết kế hộp thoại có điểm kết thúc rõ ràng (Design dialogues to yield closure):** Quy trình mua hàng có bước Kết thúc / Xác nhận đơn rõ ràng (*"Cảm ơn bạn đã mua hàng"*).
5. **Xử lý lỗi đơn giản (Offer simple error handling):** Phát hiện lỗi sớm, chỉ ra chỗ sai cụ thể, giữ lại dữ liệu người dùng đã nhập.
6. **Cho phép dễ dàng hoàn tác thao tác (Permit easy reversal of actions):** Giúp người dùng yên tâm khám phá mà không sợ mất dữ liệu.
7. **Hỗ trợ người dùng làm chủ thao tác (Support internal locus of control):** Hệ thống phục vụ người dùng, không tự ý thay đổi dữ liệu hoặc điều hướng bất ngờ.
8. **Giảm tải trí nhớ ngắn hạn (Reduce short-term memory load):** Tối đa 7 $\pm$ 2 mẩu thông tin trên một màn hình, không bắt người dùng ghi nhớ mã đơn, giá tiền trong đầu.

---

## 4. Checklist Chi Tiết Theo Từng Control (Waghmare 2009 - Slide p.10–16)

### 4.1. Text Box (Ô nhập văn bản - Slide p.11 & 16)
- **Trạng thái & Nội dung:**
  - Có con trỏ nhấp nháy khi focus.
  - Trường bắt buộc có dấu sao đỏ (`*`).
  - Dừng ở độ rộng tối đa theo đặc tả (kiểm thử chuỗi chữ "W" in hoa).
  - Từ chối chuỗi chỉ chứa toàn khoảng trắng (whitespace).
  - Xử lý khoảng trắng ở đầu và cuối chuỗi (trim).
- **Loại đầu vào & Hành vi:**
  - Kiểm thử số âm, số 0, vượt giới hạn, ký tự đặc biệt (`!@#$%^&*()`).
  - Căn lề nhất quán với các ô cùng nhóm.
  - Khi có lỗi: Đưa focus tự động về trường sai đầu tiên, đổi viền đỏ và hiển thị thông báo bên dưới trường.

### 4.2. Dropdown / Combo Box (Slide p.12)
- Có biểu tượng mũi tên xổ xuống rõ ràng.
- Giá trị mặc định hợp lý (hoặc placeholder "Chọn danh mục...").
- Danh sách được sắp xếp hợp lý (theo bảng chữ cái hoặc mức độ phổ biến).
- Hỗ trợ gõ chữ cái đầu tiên để nhảy nhanh đến mục tương ứng.
- Không để tên mục bị cắt ngắn (ellipsis không rõ nghĩa).

### 4.3. Nút bấm (Button - Slide p.13)
- **Hành vi & Phím:**
  - Đổi màu/hiệu ứng khi rê chuột (hover) và khi nhấn (active/pressed).
  - Thứ tự nhấn Tab (Tab index) hợp lý qua các nút.
  - Nút chính mặc định (Primary button) kích hoạt được bằng phím `Enter`.
  - Nút Hủy (Cancel) kích hoạt được bằng phím `Esc`.
  - Có cơ chế chống nhấn đúp (Debounce) để tránh gửi trùng lặp đơn hàng / thanh toán.
- **Quy ước màu sắc ý định:**
  - **Màu xanh lá / xanh dương:** Tiến hành (Submit, Đặt hàng, Lưu, Tiếp tục).
  - **Màu đỏ:** Phá hủy / Nguy hiểm (Xóa, Hủy đơn, Đăng xuất). *Nút Đăng ký / Submit không được tô màu đỏ.*
  - Thao tác không thể hoàn tác (Xóa giỏ hàng, Hủy đơn) bắt buộc phải có hộp thoại xác nhận (Yes/No).

### 4.4. Checkbox & Radio Button (Slide p.14)
- Radio button: Trong cùng 1 nhóm chỉ được chọn duy nhất 1 mục, có giá trị mặc định rõ ràng.
- Nhấp chuột vào nhãn chữ (Label) cũng phải làm đảo trạng thái của Checkbox/Radio (nhờ thuộc tính `htmlFor` / `id`).

### 4.5. Liên kết, Hình ảnh & Bảng lưới (Slide p.15)
- **Hyperlink:** Màu chuẩn phân biệt với văn bản thường, có gạch chân hoặc đổi màu khi hover, trỏ đúng URL đích, không có liên kết chết (404/broken).
- **Hình ảnh:** Tỷ lệ đúng, không bị méo, không bị vỡ ảnh (broken link), bắt buộc có thuộc tính `alt` mô tả nội dung cho thiết bị đọc màn hình (Screen Reader - Accessibility).
- **Bảng (Table / Grid):** Tiêu đề cột rõ ràng, căn phải cho số tiền/số lượng, căn trái cho văn bản, hiển thị responsive trên màn hình nhỏ không bị vỡ bố cục.

---

## 5. Tiêu Chuẩn Tiếp Cận W3C WCAG 2.2 & Khả Năng Mù Màu (Slide p.48)
- Độ tương phản màu sắc (Color Contrast Ratio): Tối thiểu 4.5:1 cho văn bản thông thường, 3:1 cho văn bản lớn và thành phần giao diện.
- Không bao giờ chỉ dùng màu sắc làm phương tiện duy nhất để truyền tải thông tin (ví dụ: thông báo lỗi phải có cả màu đỏ VÀ icon cảnh báo VÀ chữ giải thích).
- Khoảng 8% nam giới có khiếm khuyết thị giác màu (Color blindness) — đảm bảo các nút bấm và trạng thái phân biệt được ngay cả khi xem ở chế độ đen trắng.
