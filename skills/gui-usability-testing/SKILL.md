---
name: gui-usability-testing
description: "Thiết kế bộ GUI Checklist chuẩn theo 4 khía cạnh IA-01 đến IA-04 (General UI, Forms, Navigation, Feedback), đối chiếu 10 Heuristics Nielsen, 6 nguyên tắc Norman, 8 quy tắc Shneiderman, checklist Waghmare và WCAG 2.2; phân tích khoảng trống AI (AI Gap Analysis); xây dựng kế hoạch kiểm thử khả dụng (Usability Evaluation) 9 phần theo Rubin & Chisnell, thiết kế kịch bản mục tiêu (Goal-oriented scenario), bảng hỏi SUS (System Usability Scale) và phỏng vấn chuyên sâu (Clarity, Error Recovery, Speed, Trust); tính điểm SUS tự động; kiểm thử tương thích đa trình duyệt (Chrome, Firefox, Safari/WebKit) và đóng dấu watermark minh chứng. Dùng khi người dùng yêu cầu: 'kiểm thử GUI', 'lập GUI checklist', 'đánh giá usability', 'đánh giá độ khả dụng', 'tính điểm SUS', 'cross-browser testing', 'báo cáo kiểm thử giao diện', 'GUI usability testing'."
---

# Hướng Dẫn Kỹ Năng: Kiểm Thử Giao Diện & Độ Khả Dụng (GUI & Usability Testing)

Skill này cung cấp quy trình toàn diện để thực hiện kiểm thử giao diện người dùng (GUI Checklist), đánh giá độ khả dụng (Usability Evaluation) với người dùng thật, và kiểm thử tính tương thích đa nền tảng (Cross-Platform / Cross-Browser) theo đúng chuẩn học thuật của FIT@HCMUS.

---

## 1. Cấu Trúc Tài Nguyên & Điều Hướng

Khi cần đào sâu lý thuyết hoặc công cụ cụ thể, tham khảo các tài liệu chuyên đề:
* Đọc [heuristics-and-principles.md](references/heuristics-and-principles.md) khi cần tra cứu: 10 Heuristic Nielsen, 6 nguyên tắc Norman, 8 quy tắc Shneiderman, WCAG 2.2 và checklist từng widget (Text box, Button, Dropdown...).
* Đọc [usability-evaluation-guide.md](references/usability-evaluation-guide.md) khi cần tra cứu: Kế hoạch kiểm thử 9 phần (Rubin & Chisnell), kịch bản hướng mục tiêu, công thức tính điểm SUS, và bộ câu hỏi phỏng vấn đào sâu (Clarity, Error Recovery, Speed, Trust).
* Đọc [cross-platform-matrix.md](references/cross-platform-matrix.md) khi cần tra cứu: Ma trận kết xuất trình duyệt (Blink, Gecko, WebKit), 4 bậc kiểm thử tương thích, và quy định watermark minh chứng.

---

## 2. Quy Trình 6 Bước Thực Hiện

### Bước 1: Phân Tích Giao Diện & Thiết Kế GUI Checklist (> 40 Items)
1. **Phạm vi kiểm thử:** Xác định màn hình kiểm thử (ví dụ: cụm màn hình Mua sắm *Product Detail $\rightarrow$ Cart $\rightarrow$ Checkout*).
2. **Bao phủ 4 khía cạnh giao diện (Interface Aspects - IA):**
   - **`IA-01: General UI standards`**: Bố cục nhất quán, phân cấp tiêu đề (H1, H2), khoảng cách padding/margin, độ tương phản màu sắc đạt chuẩn WCAG (4.5:1), định dạng tiền tệ và ngày tháng bản địa hóa.
   - **`IA-02: Forms`**: Nhãn (Label) rõ ràng, dấu sao đỏ ở trường bắt buộc, autofocus vào trường đầu tiên, kiểm tra độ dài tối đa, nút submit có màu sắc đúng quy ước (*Xanh = Submit, Đỏ = Xóa/Hủy*), thứ tự di chuyển phím Tab (Tab index).
   - **`IA-03: Navigation`**: Thanh menu điều hướng (Navbar), breadcrumb theo dõi vị trí, nút quay lại (Back), liên kết không bị chết (no broken links), trạng thái active của menu.
   - **`IA-04: Feedback / state`**: Hiệu ứng hover/active của nút, loading indicator khi gọi API, empty state khi giỏ hàng rỗng, thông báo lỗi inline dưới ô nhập, hộp thoại xác nhận (Yes/No dialog) trước khi thực hiện hành động không thể hoàn tác (xóa giỏ hàng, hủy đơn).

### Bước 2: Đánh Giá Phản Biện & Phân Tích Khoảng Trống AI (AI Gap Analysis)
1. Rà soát danh sách do AI sinh ban đầu.
2. Bổ sung các tiêu chí kiểm thử mà AI thường bỏ sót:
   - Các thuộc tính Accessibility (thẻ `alt` của ảnh cho Screen Reader, độ tương phản màu).
   - Thao tác bàn phím (Tab sequence, Enter kích hoạt submit mặc định, Esc hủy).
   - Các bẫy logic tinh vi trong DOM (ví dụ: code frontend cố tình bẫy click 2 lần, hoặc cho phép gõ sửa trực tiếp tổng tiền thanh toán).
3. Ghi rõ cột `Source`: `AI-Generated` hoặc `Human-Added`. Với mỗi mục do người thêm, cung cấp lý giải nguyên nhân AI bỏ sót (do prompt thiếu ngữ cảnh DOM, do giới hạn mô hình, hay do đặc thù nghiệp vụ).

### Bước 3: Thực Thi Kiểm Thử & Ghi Nhận Lỗi (Bug Logging)
1. Chạy SUT cục bộ và kiểm tra từng tiêu chí. Đọc [quy tắc bằng chứng](references/checklist-evidence.md) trước khi thực thi hoặc tổng hợp kết quả.
2. Chỉ đánh dấu `Passed` hoặc `Failed` sau khi quan sát hành vi trên SUT. Đọc code là cơ sở điều tra, không phải bằng chứng đã thực thi. Dùng `Not Run`, `Blocked` hoặc `Not Applicable` khi phù hợp và ghi lý do; xử lý các mục này trước khi nộp để đáp ứng yêu cầu Pass/Fail của HW03. Không tự mặc định kết quả hoặc nguồn Human-Added khi thiếu dữ liệu.
3. Với mỗi mục `Failed`:
   - Ghi rõ nguyên nhân lỗi và hành vi thực tế vào cột `Notes`.
   - Chụp ảnh đúng trạng thái lỗi, lưu đường dẫn vào `evidence` của item và ghi môi trường/steps/expected/actual. Ảnh trang đăng nhập hoặc giỏ rỗng không chứng minh lỗi bảng sản phẩm hay bộ điều khiển số lượng.
   - Tạo mã lỗi (ví dụ: `BUG-01`, `BUG-02`...). Khi người dùng cho phép đăng GitHub, đăng tất cả lỗi đã xác nhận kèm ảnh, không chỉ lỗi trọng yếu. Nếu chưa đăng, ghi trạng thái và link còn thiếu.
4. Chạy script để xuất bảng tính Excel:
   ```bash
   node skills/gui-usability-testing/scripts/build_gui_checklist.js checklist_data.json --out-excel HW03_GUI_Checklist.xls --out-md checklist_summary.md
   ```

### Bước 4: Thiết Kế & Chuẩn Bị Nghiên Cứu Khả Dụng (Usability Evaluation)
1. Soạn **Kế hoạch kiểm thử 9 phần** (Rubin & Chisnell).
2. Xây dựng **Kịch bản hướng mục tiêu (Goal-oriented task scenario):**
   - Đưa cho người dùng một mục tiêu đời thực (ví dụ: *"Tìm mua 1 sản phẩm dưới 500.000 ₫ và áp mã giảm giá để hoàn tất đơn hàng tiết kiệm nhất"*).
   - **Không** cung cấp các bước bấm nút chi tiết (để người dùng tự khám phá và bộc lộ khó khăn tự nhiên).
3. Chuẩn bị bảng câu hỏi khảo sát chuẩn SUS (10 câu) và bộ 4 câu hỏi định tính (*Clarity, Error Recovery, Speed, Trust*).
4. Thực hiện 1 phiên thử nghiệm (Pilot session) trước khi bước vào 7 phiên chính thức.

### Bước 5: Thực Hiện 7 Phiên Đánh Giá & Phân Tích Điểm Số SUS
1. **Quy tắc điều phối:**
   - Áp dụng kỹ thuật **Think-aloud** (yêu cầu người tham gia liên tục nói ra suy nghĩ, kỳ vọng và khó khăn trong đầu khi thao tác).
   - Người điều phối giữ thái độ trung lập, không can thiệp hay giảng giải giao diện.
   - Ghi chép chi tiết các điểm nghẽn (Friction points, hesitation, verbal frustration).
2. **Khảo sát sau buổi kiểm thử:**
   - Người dùng điền 10 câu hỏi SUS (thang điểm 1 – 5).
   - Người điều phối hỏi 4 câu phỏng vấn đào sâu.
3. **Tính điểm tự động:**
   Lưu dữ liệu khảo sát vào file JSON và chạy script:
   ```bash
   node skills/gui-usability-testing/scripts/calculate_sus.js survey_data.json --output-md sus_report.md
   ```
   Script sẽ tự động tính điểm trung bình, độ lệch chuẩn, phân vị percentile và xếp loại học thuật (A/B/C/D/F).
4. **Phân loại lỗi theo mức độ nghiêm trọng:**
   Áp dụng công thức $\text{Criticality} = \text{Severity} \times \text{Probability}$ để phân nhóm lỗi thành: *Blocker*, *Major*, *Minor*.

### Bước 6: Kiểm Thử Đa Nền Tảng (Cross-Browser) & Đóng Dấu Watermark
1. Chạy kiểm thử trên tối thiểu 3 nền tảng:
   - Google Chrome (Blink) trên Windows.
   - Mozilla Firefox (Gecko) trên Windows.
   - Apple Safari (WebKit) trên macOS/iOS thông qua BrowserStack Live (hoặc thiết bị di động thật).
2. Chụp ảnh màn hình thể hiện rõ URL `localhost`, tên trình duyệt và hệ điều hành.
3. Chạy script đóng dấu watermark chứng thực sinh viên (chống gian lận):
   ```powershell
   powershell -ExecutionPolicy Bypass -File skills/gui-usability-testing/scripts/watermark_screenshot.ps1 -ImageFolder "screenshots" -Email "23120355@student.hcmus.edu.vn" -StudentId "23120355" -Name "Vo Huu Thang"
   ```
