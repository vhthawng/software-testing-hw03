# BÁO CÁO TỔNG HỢP KIỂM THỬ GIAO DIỆN & ĐỘ KHẢ DỤNG (HW03 MAIN REPORT)
## GUI & Usability Testing on SUT EShop — AI-First Approach

* **Trường:** Đại học Khoa học Tự nhiên – ĐHQG TP.HCM (HCMUS)
* **Khoa:** Công nghệ Thông tin (FIT) – Bộ môn Công nghệ Phần mềm
* **Môn học:** CS423 / CSC13003 – Kiểm chứng Phần mềm (Software Testing)
* **Lớp:** CQ2023/3 | **Học kỳ:** 1 / 2026
* **Giảng viên lý thuyết & Thực hành:**
  - TS. Lâm Quang Vũ (`lqvu@fit.hcmus.edu.vn`)
  - TS. Trần Duy Hoàng (`tdhoang@fit.hcmus.edu.vn`)
  - ThS. Trần Thị Bích Hạnh (`ttbhanh@fit.hcmus.edu.vn`)
  - ThS. Trương Phước Lộc (`tploc@fit.hcmus.edu.vn`)
  - ThS. Hồ Tuấn Thanh (`hthanh@fit.hcmus.edu.vn`)
* **Sinh viên thực hiện:** **VÕ HỮU THẮNG**
* **Mã số sinh viên:** **23120355**
* **Email:** `23120355@student.hcmus.edu.vn` | `vohuuthangwork@gmail.com`
* **Nhóm thực hành:** Group 4 – Performance Testing
* **GitHub Repository:** [https://github.com/vhthawng/software-testing-hw03](https://github.com/vhthawng/software-testing-hw03)
* **GitHub Issues:** [https://github.com/vhthawng/software-testing-hw03/issues](https://github.com/vhthawng/software-testing-hw03/issues)

---

## MỤC LỤC BÁO CÁO

1. **Phần I: Tổng quan Hệ thống & Phạm vi Kiểm thử (SUT Scope)**
2. **Phần II: Báo cáo Kiểm thử Danh mục Giao diện (Task 1 — GUI Checklist Report)**
3. **Phần III: Báo cáo Đánh giá Khả năng Sử dụng (Task 2 — Usability Evaluation Report)**
4. **Phần IV: Báo cáo Kiểm thử Đa Trình duyệt & Đa Nền tảng (Task 3 — Cross-Platform Report)**
5. **Phần V: Báo cáo Khiếm khuyết & Truy xuất GitHub Issues (Defect Traceability)**
6. **Phần VI: Đánh giá Năng lực Agent Skill & Tự Đánh giá (Self-Assessment)**

---

# PHẦN I: TỔNG QUAN HỆ THỐNG & PHẠM VI KIỂM THỬ

### 1.1. Hệ thống kiểm thử (System Under Test - SUT)
* **Tên ứng dụng:** **EShop** — Nền tảng thương mại điện tử demo phục vụ thực hành kiểm chứng phần mềm.
* **Mã nguồn gốc:** [https://github.com/ttbhanh/eshop-sut](https://github.com/ttbhanh/eshop-sut)
* **Kiến trúc hệ thống:**
  - Backend: Node.js / Express API (`port 3000`), cơ sở dữ liệu SQLite (`database.sqlite`).
  - Web Frontend: React 19 / Vite / Tailwind CSS (`port 5173`).
  - Web Admin: React / Vite (`port 5174`).
  - Mobile App: React Native / Expo Go (`frontend-mobile`).

### 1.2. Phạm vi lựa chọn (Scope Selection — Kế thừa 4 Pool từ HW02)
Nhằm duy trì tính xuyên suốt và đối soát chuyên sâu với kết quả kiểm thử phân vùng tương đương từ HW02, phạm vi kiểm thử giao diện HW03 được xác lập bao phủ đầy đủ 4 phân hệ:
1. **Pool A:** Quản lý hồ sơ cá nhân (`FR-04: Personal profile management` — file `Profile.jsx`).
2. **Pool B:** Giỏ hàng & Thanh toán (`FR-07: Cart` & `FR-08: Checkout` — file `Cart.jsx`, `Checkout.jsx`).
3. **Pool C:** Quản trị Sản phẩm Web Admin (`FR-15: Product management CRUD` — file `frontend-admin/src/App.jsx`).
4. **Pool D:** Ứng dụng Di động Mobile Register (`FR-01: Account registration` — file `frontend-mobile/App.js` trên điện thoại Samsung Galaxy A52).

---

# PHẦN II: TASK 1 — BÁO CÁO GUI CHECKLIST (KIỂM THỬ GIAO DIỆN)

### 2.1. Thiết kế bộ tiêu chí & Độ phủ 4 khía cạnh giao diện (Interface Aspects)
Đã thiết kế **48 tiêu chí kiểm thử** (vượt xa mức tối thiểu 40 items theo đề bài), bao phủ trọn vẹn 4 khía cạnh giao diện:
* **`IA-01` General UI Standards (12 items):** Bố cục typography, lề padding, độ tương phản màu sắc đạt chuẩn WCAG 2.2 AA, hiển thị tiền tệ đồng nhất.
* **`IA-02` Forms & Inputs (14 items):** Ràng buộc validation dữ liệu, thuộc tính HTML5 (`maxlength`, `required`, `htmlFor`), kiểu bàn phím ảo, affordance của nút bấm.
* **`IA-03` Navigation & Routing (10 items):** Huy hiệu đếm giỏ hàng, liên kết quay lại, highlight trạng thái trang hiện tại (Active State), không có liên kết 404.
* **`IA-04` Feedback & System State (12 items):** Thông báo lỗi inline/toast thay vì alert, hộp thoại xác nhận khi thực hiện thao tác phá hủy (Xóa/Hủy đơn), trạng thái rỗng (Empty State), phản hồi áp dụng mã coupon.

### 2.2. Phân tích khoảng trống AI (AI Gap Analysis — Human Review)
Thực hiện phản biện nghiêm ngặt theo chuẩn Bloom-AI G9.4, phát hiện và bổ sung **10 tiêu chí do con người phát hiện (Human-Added Items)** mà AI bỏ sót:
* *AI bỏ sót ngữ cảnh Việt Nam:* AI không nhận ra mã Regex `!/^[1-9][0-9]{8,9}$/.test(phone)` tại `Profile.jsx` chặn toàn bộ số điện thoại di động Việt Nam bắt đầu bằng số `0`.
* *AI bỏ sót lỗ hổng logic nghiệp vụ:* AI không phát hiện ô "Tổng tiền thanh toán" tại `Checkout.jsx` là một thẻ `<input type="number">` cho phép người dùng tự nhập sửa số tiền thanh toán thành 1.000 ₫ hoặc số âm.
* *AI bỏ sót lỗi phá hoại dữ liệu:* AI không nhận biết đoạn code `products.map(p => ({ ...p, name: productForm.name }))` tại Admin làm đổi tên toàn bộ bảng sản phẩm.
* *AI bỏ qua tiêu chuẩn tiếp cận nâng cao:* Bỏ qua thẻ hình ảnh thiếu thuộc tính `alt` trong bảng Admin và thiếu `htmlFor` trong form.

### 2.3. Kết quả thực thi kiểm thử trên SUT (Execution Results)
* **Tổng số tiêu chí thực thi:** **48 items**
* **Số tiêu chí ĐẠT (Passed):** **34 items (70.8%)**
* **Số tiêu chí KHÔNG ĐẠT (Failed):** **14 items (29.2%)**
* Toàn bộ 14 mục Failed đều được ghi chú rõ ràng nguyên nhân, vi phạm nguyên tắc nào (Nielsen, Norman, Shneiderman, WCAG) và chỉ rõ vị trí dòng code trong SUT.
* **Bản phẩm bàn giao:** File bảng tính Excel [HW03_GUI_Checklist.xls](file:///d:/university/software-testing/HW03/HW03_GUI_Checklist.xls), file [HW03_GUI_Checklist.csv](file:///d:/university/software-testing/HW03/HW03_GUI_Checklist.csv) và báo cáo tóm tắt [HW03_GUI_Checklist_Summary.md](file:///d:/university/software-testing/HW03/HW03_GUI_Checklist_Summary.md).

---

# PHẦN III: TASK 2 — BÁO CÁO ĐÁNH GIÁ KHẢ NĂNG SỬ DỤNG (USABILITY EVALUATION)

### 3.1. Kế hoạch kiểm thử 9 phần (Rubin & Chisnell Plan)
Xây dựng kế hoạch chuẩn mực gồm 9 mục: Mục đích, Phát biểu vấn đề, Kịch bản hướng mục tiêu, Hồ sơ người tham gia, Giao thức suy nghĩ thành tiếng (Think-Aloud Protocol), Môi trường máy tính, Quy tắc điều phối trung lập, Thước đo định lượng/định tính, và Nội dung báo cáo.

### 3.2. Kịch bản hướng mục tiêu (Goal-Oriented Task Scenario)
> *"Bạn vừa chuyển địa chỉ nhận hàng và muốn mua một chiếc bàn phím cơ phục vụ công việc với ngân sách dưới 7.000.000 ₫ trên trang web EShop.*  
> *1. Đăng nhập tài khoản, cập nhật số điện thoại nhận hàng mới trong Hồ sơ cá nhân.*  
> *2. Tìm một sản phẩm bàn phím ưng ý trong tầm giá, đưa vào giỏ hàng.*  
> *3. Tiến hành đặt hàng, áp dụng mã giảm giá phù hợp (`SAVE10` hoặc mã bạn tìm được) để tiết kiệm chi phí và hoàn tất quy trình thanh toán."*

### 3.3. Danh sách 7 người tham gia thực tế (Bảo mật theo quy định §11)
Toàn bộ người tham gia là người dùng thực tế, được che 4 số giữa số điện thoại để đảm bảo quyền riêng tư nhưng sẵn sàng cho TA bốc ngẫu nhiên 2 người xác minh:
1. **P1:** Nguyễn Anh Vũ – `0339****12` – Sinh viên năm 4 Marketing ĐH FPT (Thời gian: 265s)
2. **P2:** Đặng Dương Thanh Quang – `0905****26` – Sinh viên năm 4 IT ĐH KHTN HCMUS (Thời gian: 310s)
3. **P3:** Đặng Thị Hiếu – `0977****68` – Mẹ của sinh viên (Lướt web hàng ngày, ít mua online) (Thời gian: 345s)
4. **P4:** Nguyễn Trần Ngọc Thịnh – `0973****55` – Sinh viên năm 4 CNSH ĐH KHTN (Thời gian: 215s)
5. **P5:** Võ Hữu Toàn – `0393****21` – Digital Marketing (Anh của sinh viên) (Thời gian: 240s)
6. **P6:** Nguyễn Thảo Linh – `0914****05` – Sinh viên năm 4 ngành Luật ĐH Quy Nhơn (Thời gian: 330s)
7. **P7:** Phạm Anh Nhật – `0935****68` – Kỹ sư ô tô (Ít dùng MXH, dùng YouTube giải trí) (Thời gian: 195s)

### 3.4. Kết quả định lượng — Thang đo chuẩn SUS (System Usability Scale)
Chạy script tự động [calculate_sus.js](file:///d:/university/software-testing/HW03/skills/gui-usability-testing/scripts/calculate_sus.js) theo công thức chuẩn hóa của John Brooke (1986):
* **Điểm SUS trung bình (Mean SUS):** **30.36 / 100**
* **Độ lệch chuẩn (Standard Deviation):** **8.81** (Population) / **9.51** (Sample)
* **Khoảng điểm (Min – Max):** **17.5** (P2) $\rightarrow$ **42.5** (P4)
* **Xếp loại chung (Grade):** **Hạng F** *(Poor / Unacceptable)*
* **Phân vị xếp hạng (Sauro & Lewis, 2016):** **Dưới 15%** (Rơi vào vùng báo động đỏ nghiêm trọng so với chuẩn trung bình ngành là **68.0 điểm**).

### 3.5. Kết quả phân tích định tính qua 4 khía cạnh phỏng vấn sâu
* **Clarity (Rõ ràng):** Lạm dụng `alert()` trình duyệt làm gián đoạn luồng tư duy; ký hiệu tiền tệ xung đột `VND` vs `₫`; thiếu badge giỏ hàng trên Header.
* **Error Recovery (Sửa lỗi):** Tỷ lệ tự sửa lỗi rất kém do hệ thống báo lỗi mù mờ (chặn đầu số 0 của SĐT); xóa giỏ hàng không cho hoàn tác; ô tổng tiền tự hủy mã giảm giá khi chạm vào.
* **Speed (Tốc độ):** Nút "Thêm vào giỏ hàng" bị trễ nhịp do phải click 2 lần (`clickCount === 0`); giỏ hàng không cho tăng giảm số lượng trực tiếp.
* **Trust (Tin cậy — Rào cản lớn nhất):** **100% người dùng** phát hiện ô tổng tiền cho phép tự gõ sửa giá và tuyên bố đây là rủi ro dữ liệu nghiêm trọng, tuyệt đối không dám thanh toán thật.

### 3.6. Ma trận xếp hạng mức độ nghiêm trọng (Severity Ranking Matrix)
Áp dụng công thức Rubin & Chisnell: $\text{Criticality} = \text{Severity} \times \text{Probability}$:
* **Blocker (Điểm 9/9):** Ô tổng tiền cho phép tự gõ sửa giá (`BUG-04`), Regex chặn số điện thoại bắt đầu bằng 0 (`BUG-03`).
* **Major (Điểm 4–6/9):** Nút thêm giỏ hàng bắt buộc bấm 2 lần (`BUG-16`), Bảng giỏ hàng thiếu nút tăng/giảm (+/-) (`BUG-08`), Xóa giỏ hàng thiếu xác nhận (`BUG-14`).
* **Minor (Điểm 2–3/9):** Thiếu số đếm giỏ hàng (`BUG-10`), Ký hiệu tiền tệ không nhất quán (`BUG-01`).

---

# PHẦN IV: TASK 3 — KIỂM THỬ ĐA TRÌNH DUYỆT & ĐA NỀN TẢNG (CROSS-PLATFORM)

### 4.1. Tự động hóa kiểm thử đa nền tảng bằng Playwright
Áp dụng Agent Skill [playwright-skill](file:///d:/university/software-testing/HW03/skills/playwright-skill/) để viết kịch bản tự động hóa [automated_cross_platform.js](file:///d:/university/software-testing/HW03/scripts/automated_cross_platform.js) thực thi tự động qua 3 nền tảng:
1. **Google Chrome Desktop:** Engine Blink, độ phân giải $1920 \times 1080$.
2. **Mozilla Firefox Desktop:** Engine Gecko, độ phân giải $1920 \times 1080$.
3. **Samsung Galaxy A52 Mobile:** Engine Blink Mobile, độ phân giải $412 \times 915$, kích hoạt cảm ứng chạm Touch Events và Mobile User-Agent.

### 4.2. Phân tích khác biệt cơ chế dựng hình (Rendering Differences)
* **Ô nhập số `<input type="number">`:** Chrome chỉ hiện nút tăng giảm khi hover; Firefox hiển thị stepper mũi tên cố định; Mobile bật bàn phím số che khuất 45% diện tích màn hình.
* **Hộp thoại `alert()`:** Chrome hiển thị modal nổi giữa màn hình; Firefox hiển thị tab-modal sheet gắn liền mép tab; Mobile hiển thị Native Android Dialog.
* **Responsive Layout:** Desktop chia 2 cột cân đối; Mobile co dọc 1 cột khiến bảng giỏ hàng bị tràn ngang, nút bấm kéo rộng full-width.

### 4.3. Đóng dấu Watermark bản quyền sinh viên tự động
Toàn bộ 9 ảnh chụp màn hình minh chứng lỗi đã được script [watermark_screenshot.ps1](file:///d:/university/software-testing/HW03/skills/gui-usability-testing/scripts/watermark_screenshot.ps1) đóng dấu dải banner mờ bản quyền:  
`23120355 - Vo Huu Thang | 23120355@student.hcmus.edu.vn | HW03 Testing Evidence | 2026-11-08`  
Lưu trữ đầy đủ tại thư mục [screenshots/watermarked/](file:///d:/university/software-testing/HW03/screenshots/watermarked/).

---

# PHẦN V: BÁO CÁO KHIẾM KHUYẾT & TRUY XUẤT GITHUB ISSUES

Tất cả các lỗi nghiêm trọng đã được tự động đăng tải lên GitHub Issues thông qua script [create_github_issues.js](file:///d:/university/software-testing/HW03/scripts/create_github_issues.js) kèm hình ảnh minh chứng có Watermark:

| Issue ID | Tiêu đề lỗi trên GitHub | Mức độ | Màn hình | Link GitHub Issue |
| :---: | :--- | :---: | :---: | :--- |
| **#1** | `[BUG-03] Regex SĐT tại Profile từ chối mọi SĐT Việt Nam hợp lệ bắt đầu bằng 0` | **Critical** | Profile | [Issue #1](https://github.com/vhthawng/software-testing-hw03/issues/1) |
| **#2** | `[BUG-04] Ô "Tổng tiền thanh toán" cho phép người dùng tự do nhập sửa giá tiền` | **Critical** | Checkout | [Issue #2](https://github.com/vhthawng/software-testing-hw03/issues/2) |
| **#3** | `[BUG-13] Nút Sửa Admin bị đơ và đổi tên toàn bộ sản phẩm trên bảng dữ liệu` | **Critical** | Admin | [Issue #3](https://github.com/vhthawng/software-testing-hw03/issues/3) |
| **#4** | `[BUG-16] Nút "Thêm vào giỏ hàng" bắt buộc phải bấm 2 lần mới nhận lệnh` | **Major** | ProductDetail | [Issue #4](https://github.com/vhthawng/software-testing-hw03/issues/4) |
| **#5** | `[BUG-08] Bảng Giỏ hàng thiếu nút tăng/giảm số lượng sản phẩm (+/-)` | **Major** | Cart | [Issue #5](https://github.com/vhthawng/software-testing-hw03/issues/5) |
| **#6** | `[BUG-14] Nút "Xóa" sản phẩm khỏi giỏ hàng không có hộp thoại xác nhận` | **Major** | Cart | [Issue #6](https://github.com/vhthawng/software-testing-hw03/issues/6) |
| **#7** | `[BUG-06] Form Đăng ký Mobile thiếu trường Xác nhận mật khẩu (Confirm Password)` | **Major** | Mobile | [Issue #7](https://github.com/vhthawng/software-testing-hw03/issues/7) |
| **#8** | `[BUG-01] Ký hiệu tiền tệ không đồng nhất giữa các màn hình (VND vs ₫)` | **Minor** | UI Standards | [Issue #8](https://github.com/vhthawng/software-testing-hw03/issues/8) |

---

# PHẦN VI: TỰ ĐÁNH GIÁ & TỔNG KẾT (SELF-ASSESSMENT)

### Bảng Tự Đánh Giá Điểm Số (Theo Mục §15 Đề bài)

| STT | Tiêu chí đánh giá (Criteria) | Thang điểm | Điểm tự đánh giá | Minh chứng bàn giao |
| :---: | :--- | :---: | :---: | :--- |
| **1** | **Task 1 — GUI Checklist**<br>(Checklist design + execution + bug report) | 30 | **30 / 30** | 48 items (>40), 10 Human-Added, Pass 34/Fail 14, File Excel `.xls` styled, File CSV, Báo cáo lỗi 16 bugs chi tiết. |
| **2** | **Task 2 — Usability Evaluation**<br>(Task scenario + 7 sessions + analysis) | 40 | **40 / 40** | Kế hoạch 9 phần Rubin & Chisnell, 7 người tham gia thực tế, Mean SUS 30.36 Grade F, 4 câu hỏi đào sâu, Ma trận nghiêm trọng. |
| **3** | **Task 3 — Cross-Browser / Cross-Platform**<br>($\ge 3$ platforms) | 20 | **20 / 20** | Playwright tự động hóa trên Chrome, Firefox và Samsung Galaxy A52; 9 ảnh chụp màn hình có watermark email sinh viên. |
| **4** | **Tiêu chí 4 — Agent Skills** | 10 | **10 / 10** | Xây dựng Agent Skill hoàn chỉnh `skills/gui-usability-testing/` (subagent review 9.85/10) và ứng dụng `playwright-skill`. |
| **Tổng** | **Toàn bộ đồ án cá nhân HW03** | **100** | **100 / 100** | **ĐẠT ĐIỂM TỐI ĐA (100/100)** |

---

*Báo cáo được hoàn thành vào ngày 08/11/2026 bởi sinh viên **Võ Hữu Thắng (MSSV: 23120355)**.*
