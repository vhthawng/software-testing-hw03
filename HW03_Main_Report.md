# BÁO CÁO TỔNG HỢP KIỂM THỬ GIAO DIỆN & ĐỘ KHẢ DỤNG (HW03)
## SUT EShop — AI-First GUI & Usability Testing Report

**Trường Đại học Khoa học Tự nhiên – ĐHQG TP.HCM (HCMUS)**  
**Khoa Công nghệ Thông tin – Bộ môn Công nghệ Phần mềm**  
**Môn học:** CS423 / CSC13003 – Kiểm chứng Phần mềm  
**Học kỳ / Năm học:** Học kỳ 1 / 2026  

---

### THÔNG TIN ĐỒ ÁN & SINH VIÊN

| Mục thông tin | Chi tiết xác nhận |
| :--- | :--- |
| **Sinh viên thực hiện:** | **VÕ HỮU THẮNG** |
| **Mã số sinh viên (MSSV):** | **23120355** |
| **Lớp / Khóa:** | CQ2023/3 (Chính quy) |
| **Nhóm thực hành:** | Group 4 – Performance Testing |
| **Email sinh viên:** | `23120355@student.hcmus.edu.vn` \| `vohuuthangwork@gmail.com` |
| **Giảng viên phụ trách:** | TS. Lâm Quang Vũ, TS. Trần Duy Hoàng, ThS. Trần Thị Bích Hạnh, ThS. Trương Phước Lộc, ThS. Hồ Tuấn Thanh |
| **Mã nguồn SUT:** | [Repository EShop SUT](https://github.com/ttbhanh/eshop-sut) |
| **GitHub Đồ án của SV:** | [GitHub Repo vhthawng/software-testing-hw03](https://github.com/vhthawng/software-testing-hw03) |
| **GitHub Issues Đồ án:** | [Trang GitHub Issues của SV](https://github.com/vhthawng/software-testing-hw03/issues) |

---

## TÓM TẮT ĐIỀU HÀNH (EXECUTIVE SUMMARY)

Đồ án HW03 tập trung đánh giá toàn diện Giao diện người dùng (GUI), Độ khả dụng (Usability) và Tính tương thích đa nền tảng (Cross-Platform) trên hệ thống thương mại điện tử **EShop**, tuân thủ phương pháp luận **AI-First kết hợp Giám sát phản biện của con người (Human-in-the-loop, Bloom-AI G9.4)**.

```
                    [ KIẾN TRÚC ĐỒ ÁN HW03 ]
                               │
       ┌───────────────────────┼───────────────────────┐
       ▼                       ▼                       ▼
  [ TASK 1: GUI ]      [ TASK 2: USABILITY ]    [ TASK 3: PLATFORMS ]
  48 Tiêu chí (IA 1-4)  Kế hoạch Rubin 9 phần    Playwright Automation
  34 Pass / 14 Fail     7 Người tham gia thật    Chrome, Firefox, Mobile
  10 Mục Human-Added    SUS Mean: 30.36 (Hạng F) 9 Ảnh Watermark Email
```

* **Task 1 — GUI Checklist:** Thiết kế **48 tiêu chí** phủ 4 nhóm khía cạnh giao diện (`IA-01` đến `IA-04`). Phản biện AI phát hiện **10 tiêu chí con người bổ sung (Human-Added)** mà AI bỏ sót. Thực thi ghi nhận **34 Đạt (70.8%)** và **14 Không đạt (29.2%)**.
* **Task 2 — Usability Evaluation:** Triển khai kịch bản hướng mục tiêu (Goal-oriented) với **07 người tham gia thực tế** ngoài lớp học (che số điện thoại theo §11). Điểm khả dụng trung bình đạt **30.36 / 100 (Hạng F — Không thể chấp nhận)**, bộc lộ rào cản tâm lý nghiêm trọng về tính bảo mật và sự thiếu nhất quán.
* **Task 3 — Cross-Platform Testing:** Ứng dụng [Playwright Automation Skill](skills/playwright-skill/) tự động hóa kiểm thử trên **3 nền tảng** (Desktop Chrome Blink, Desktop Firefox Gecko, và Mobile Samsung Galaxy A52 Viewport Touch). Toàn bộ 9 ảnh minh chứng lỗi được đóng dấu Watermark email sinh viên tự động.
* **Quản lý Khiếm khuyết:** Phát hiện tổng cộng **16 lỗi giao diện & trải nghiệm**. Đã tự động tạo **8 Issues trọng yếu** công khai trên [GitHub Issues](https://github.com/vhthawng/software-testing-hw03/issues) kèm bình luận ảnh minh chứng.

---

## PHẦN 1: PHẠM VI KIỂM THỬ (SCOPE SELECTION)

Để đảm bảo tính liên kết chặt chẽ và đối soát với kết quả kiểm thử phân vùng tương đương từ HW02, phạm vi kiểm thử giao diện HW03 kế thừa trọn vẹn **4 Phân hệ (Pools)**:

| Phân hệ (Pool) | Chức năng nghiệp vụ | Màn hình & Tệp mã nguồn SUT | Mục tiêu kiểm thử giao diện chính |
| :---: | :--- | :--- | :--- |
| **Pool A** | `FR-04` Quản lý hồ sơ cá nhân | Trang Profile (`Profile.jsx`) | Form validation SĐT, nhãn label, typography, bảng lịch sử đơn hàng. |
| **Pool B** | `FR-07` Giỏ hàng & `FR-08` Thanh toán | Trang Cart (`Cart.jsx`) & Checkout (`Checkout.jsx`) | Trình bày giỏ hàng, ô tổng tiền, áp dụng coupon, luồng xác nhận đơn hàng. |
| **Pool C** | `FR-15` Quản trị sản phẩm Web Admin | Trang Admin (`frontend-admin/src/App.jsx`) | Bảng lưới dữ liệu Waghmare, modal thêm/sửa, ràng buộc giá và tên sản phẩm. |
| **Pool D** | `FR-01` Đăng ký tài khoản trên Mobile | Giao diện Mobile (`frontend-mobile/App.js`) | Bố cục màn hình dọc, Safe Area, bàn phím ảo, trường mật khẩu. |

---

## PHẦN 2: TASK 1 — BÁO CÁO GUI CHECKLIST

### 2.1. Phân bổ 48 Tiêu chí theo 4 Khía cạnh Giao diện (Interface Aspects)

Bộ checklist được thiết kế vượt mức tối thiểu (> 40 items) dựa trên các lý thuyết nền tảng từ Slide bài giảng môn học: Nielsen 10 Heuristics, Norman 6 Design Principles, Shneiderman 8 Golden Rules, và tiêu chuẩn tiếp cận W3C WCAG 2.2 AA.

* **`IA-01` General UI Standards (12 items):** Nhất quán ký hiệu tiền tệ, typography phân cấp, độ tương phản WCAG 2.2 AA, thuộc tính `alt` hình ảnh.
* **`IA-02` Forms & Inputs (14 items):** Regex SĐT Việt Nam, ô tổng tiền chỉ đọc (Read-only), trường bắt buộc `required`, kiểu bàn phím email, thuộc tính `htmlFor`.
* **`IA-03` Navigation & Routing (10 items):** Huy hiệu đếm giỏ hàng (Cart Badge), chỉ báo mục đang xem (Active state highlight), liên kết quay về Home.
* **`IA-04` Feedback & System State (12 items):** Hộp thoại xác nhận cho thao tác hủy/xóa, phản hồi coupon, trạng thái tải loading, thông báo lỗi inline thay vì lạm dụng `alert()`.

### 2.2. Phân tích khoảng trống AI (AI Gap Analysis — Human Review)

AI thông thường chỉ kiểm tra cấu trúc HTML bề mặt mà bỏ qua các bẫy nghiệp vụ logic. Sinh viên đã trực tiếp phản biện và bổ sung **10 tiêu chí then chốt (Human-Added)**:

```
[ AI-Generated: 38 items ] ───► AI nhìn bề mặt: Kiểm tra CSS, input length, placeholder...
[ Human-Added:  10 items ] ───► Con người đào sâu: Phát hiện SĐT chặn số 0, ô tiền cho sửa tay,
                                  Admin bulk-rename, nút giỏ hàng bấm 2 lần, thiếu thẻ alt.
```

1. **`CHK-IA02-01` (SĐT Profile):** Regex dòng 43 `Profile.jsx` chặn đầu số 0 của Việt Nam (`/^[1-9]/`).
2. **`CHK-IA02-02` (Tổng tiền Checkout):** Thẻ `input` dòng 93 `Checkout.jsx` cho phép gõ sửa số tiền tự do.
3. **`CHK-IA04-02` (Admin bulk rename):** Hàm sửa sản phẩm tại dòng 110 `App.jsx` đổi tên toàn bộ bảng.
4. **`CHK-IA02-05` (Mobile Confirm Password):** Form đăng ký Mobile thiếu hoàn toàn trường xác nhận mật khẩu.
5. **`CHK-IA01-11` (Tiếp cận WCAG):** Bảng Admin thiếu thuộc tính `alt` cho ảnh thumbnail sản phẩm.
6. **`CHK-IA02-07` (Liên kết Label):** Thẻ label trong Profile thiếu `htmlFor` liên kết ô nhập.
7. **`CHK-IA02-10` (Bộ điều khiển Giỏ hàng):** Giỏ hàng thiếu nút tăng giảm số lượng (+/-) trực tiếp.
8. **`CHK-IA03-01` (Huy hiệu Giỏ hàng):** Header thiếu Cart Badge đếm số lượng món hàng.
9. **`CHK-IA04-01` & `CHK-IA04-03` (Hộp thoại xác nhận):** Thao tác Xóa giỏ hàng và Hủy đơn thiếu confirm dialog.

### 2.3. Kết quả Thực thi Kiểm thử

* **Đạt (Passed):** **34 items (70.8%)** — Các tính năng cơ bản như đăng nhập, phân cấp chữ, layout cơ bản.
* **Không đạt (Failed):** **14 items (29.2%)** — Các lỗi vi phạm nguyên tắc Nielsen, Norman và WCAG.
* **Tài liệu kiểm thử chi tiết:**
  - 📊 [Bảng tính GUI Checklist Excel có định dạng (48 items)](HW03_GUI_Checklist.xls)
  - 📄 [Dữ liệu bảng tính thô CSV](HW03_GUI_Checklist.csv)
  - 📝 [Báo cáo Tổng hợp GUI Checklist & AI Gap Analysis](HW03_GUI_Checklist_Summary.md)

---

## PHẦN 3: TASK 2 — BÁO CÁO ĐÁNH GIÁ KHẢ NĂNG SỬ DỤNG (USABILITY)

### 3.1. Kế hoạch Kiểm thử Khả dụng 9 phần (Rubin & Chisnell Plan)
Xem chi tiết tài liệu chuẩn tại [Kế hoạch & Bộ công cụ Khảo sát Khả dụng](HW03_Usability_Plan_and_Instruments.md). Kế hoạch thiết lập kịch bản hướng mục tiêu (Goal-oriented):
> *"Bạn vừa chuyển địa chỉ nhận hàng và muốn mua một chiếc bàn phím cơ phục vụ công việc với ngân sách dưới 7.000.000 ₫ trên EShop. Hãy đăng nhập, cập nhật SĐT mới trong Hồ sơ, chọn bàn phím đưa vào giỏ hàng, áp dụng mã `SAVE10` và hoàn tất thanh toán."*

### 3.2. Danh sách 7 Người tham gia Thực tế (Quy định Anti-Cheat §11)
Toàn bộ 7 người tham gia đều là người thật ngoài lớp học, được che 4 số giữa số điện thoại nhưng sẵn sàng cho việc xác minh ngẫu nhiên của TA:

| Mã | Họ và tên | SĐT / Zalo (Masked) | Nghề nghiệp / Hồ sơ đối tượng | Thời gian | Trạng thái hoàn thành |
| :---: | :--- | :---: | :--- | :---: | :--- |
| **P1** | Nguyễn Anh Vũ | `0339****12` | Sinh viên năm 4 Marketing ĐH FPT (Non-IT) | 265s | Cần hỗ trợ nhẹ lỗi SĐT |
| **P2** | Đặng Dương Thanh Quang | `0905****26` | Sinh viên năm 4 IT ĐH KHTN HCMUS | 310s | Tự xử lý; soi kỹ lỗi ô tiền |
| **P3** | Đặng Thị Hiếu | `0977****68` | Mẹ của sinh viên (Lướt web hàng ngày, ít mua online) | 345s | Cần hỗ trợ; xóa nhầm giỏ hàng |
| **P4** | Nguyễn Trần Ngọc Thịnh | `0973****55` | Sinh viên năm 4 CNSH ĐH KHTN | 215s | Hoàn thành nhanh nhất |
| **P5** | Võ Hữu Toàn | `0393****21` | Digital Marketing (Anh của sinh viên) | 240s | Phát hiện lỗi coupon bị hủy |
| **P6** | Nguyễn Thảo Linh | `0914****05` | Sinh viên năm 4 ngành Luật ĐH Quy Nhơn | 330s | Cần hỗ trợ; nghi ngờ an toàn |
| **P7** | Phạm Anh Nhật | `0935****68` | Kỹ sư ô tô (Ít dùng MXH, dùng YouTube giải trí) | 195s | Thao tác cẩn trọng |

### 3.3. Kết quả Phân tích Định lượng Thang đo SUS (John Brooke 1986)
Áp dụng script tự động [calculate_sus.js](skills/gui-usability-testing/scripts/calculate_sus.js) từ Agent Skill, xử lý tập dữ liệu [sus_participants.json](sus_participants.json):

* **Điểm SUS trung bình (Mean SUS):** **30.36 / 100**
* **Độ lệch chuẩn (Standard Deviation):** **8.81** (Population) / **9.51** (Sample)
* **Khoảng điểm (Min – Max):** **17.5** (P2) $\rightarrow$ **42.5** (P4)
* **Xếp loại chung (Grade):** **Hạng F** *(Poor / Unacceptable)*
* **Phân vị xếp hạng (Sauro & Lewis, 2016):** **Dưới 15%** (Rơi sâu vào vùng báo động đỏ so với mức chuẩn trung bình ngành là **68.0 điểm**).

```
[ THANG ĐIỂM SUS ĐỐI CHUẨN CÔNG NGHIỆP ]
0 ──────── 51 (Hạng F) ───── 68 (Chuẩn Ngành) ───── 80.3 (Hạng A) ────── 100
             ▲
             └── EShop Thực tế: 30.36 / 100 (Kém khả dụng)
```

### 3.4. Tổng hợp Phỏng vấn Sâu 4 Khía cạnh & Ma trận Nghiêm trọng
Xem chi tiết biên bản đầy đủ tại [Báo cáo Đánh giá Khả dụng Toàn diện](HW03_Usability_Evaluation_Report.md):
* **Clarity:** Ký hiệu tiền tệ không đồng nhất (`VND` vs `₫`); thiếu số lượng trên icon giỏ hàng Header.
* **Error Recovery:** Chặn số điện thoại đầu số 0 làm người dùng bế tắc; xóa món hàng khỏi giỏ không thể hoàn tác; chạm vào ô tiền tự động hủy mã giảm giá.
* **Speed:** Nút "Thêm vào giỏ hàng" bị trễ nhịp do bẫy bắt buộc bấm 2 lần (`clickCount === 0`); giỏ hàng thiếu nút tăng giảm số lượng (+/-).
* **Trust (Gãy đổ lòng tin):** 100% người dùng phát hiện ô tổng tiền cho phép nhập tay tùy ý, gây tâm lý lo ngại gian lận hoặc trang web chưa hoàn thiện, không dám thanh toán thật.
* **Ma trận nghiêm trọng ($\text{Criticality} = \text{Severity} \times \text{Probability}$):**
  - **Blockers (Điểm 9/9):** Ô tổng tiền cho sửa tay (`BUG-04`), Regex từ chối đầu số 0 (`BUG-03`).
  - **Majors (Điểm 4–6/9):** Nút thêm giỏ hàng bấm 2 lần (`BUG-16`), Bảng giỏ hàng thiếu nút +/- (`BUG-08`), Xóa giỏ hàng thiếu confirm (`BUG-14`).

---

## PHẦN 4: TASK 3 — BÁO CÁO KIỂM THỬ ĐA NỀN TẢNG (CROSS-PLATFORM)

### 4.1. Tự động hóa Đa nền tảng bằng Playwright
Áp dụng kịch bản [automated_cross_platform.js](scripts/automated_cross_platform.js), tự động hóa kiểm thử song song trên 3 nền tảng chuẩn yêu cầu:
1. **Google Chrome Desktop:** Engine Blink, độ phân giải $1920 \times 1080$.
2. **Mozilla Firefox Desktop:** Engine Gecko, độ phân giải $1920 \times 1080$.
3. **Samsung Galaxy A52 Mobile:** Engine Blink Mobile, độ phân giải $412 \times 915$, kích hoạt cảm ứng chạm Touch screen và Mobile User-Agent.

### 4.2. Khác biệt Kỹ thuật Dựng hình (Engine Differences)
Xem phân tích chuyên sâu tại [Báo cáo Kiểm thử Đa Nền tảng](HW03_Cross_Platform_Report.md):
* **Thẻ `<input type="number">`:** Chrome chỉ hiện stepper spinner khi hover; Firefox hiển thị stepper mũi tên cố định; Mobile bật bàn phím số che khuất 45% diện tích màn hình.
* **Hộp thoại `alert()`:** Chrome hiện modal nổi có checkbox chặn popup; Firefox hiện tab-modal sheet gắn liền mép tab; Mobile hiện Native Android Dialog.
* **Responsive:** Bảng giỏ hàng trên Mobile bị tràn ngang (Horizontal overflow), nút bấm chuyển thành full-width.

### 4.3. Minh chứng Ảnh chụp Đóng dấu Watermark Bản quyền
Script [watermark_screenshot.ps1](skills/gui-usability-testing/scripts/watermark_screenshot.ps1) đã tự động đóng dấu banner vàng:  
`23120355 - Vo Huu Thang | 23120355@student.hcmus.edu.vn | HW03 Testing Evidence | 2026-11-08`  
lên toàn bộ 9 ảnh minh chứng lưu trữ tại [Thư mục ảnh Watermark](screenshots/watermarked/):
* `chrome_BUG03_Profile_PhoneRegex.png`, `chrome_BUG04_Checkout_EditableTotal.png`, `chrome_BUG08_Cart_NoQuantityControl.png`
* `firefox_BUG03_Profile_PhoneRegex.png`, `firefox_BUG04_Checkout_EditableTotal.png`, `firefox_BUG08_Cart_NoQuantityControl.png`
* `mobile_BUG03_Profile_PhoneRegex.png`, `mobile_BUG04_Checkout_EditableTotal.png`, `mobile_BUG08_Cart_NoQuantityControl.png`

---

## PHẦN 5: TRUY XUẤT KHIẾM KHUYẾT & GITHUB ISSUES

Hệ thống đã tự động kết nối và đăng tải các lỗi trọng yếu lên repository cá nhân của sinh viên kèm minh chứng ảnh:

| Mã Bug | Tiêu đề lỗi trên GitHub Issues | Phân loại | Màn hình | Liên kết GitHub Issue |
| :---: | :--- | :---: | :---: | :--- |
| **BUG-03** | `[BUG-03] Regex SĐT Profile từ chối mọi SĐT Việt Nam hợp lệ bắt đầu bằng 0` | **Critical** | Profile | [🔗 Issue #1](https://github.com/vhthawng/software-testing-hw03/issues/1) |
| **BUG-04** | `[BUG-04] Ô "Tổng tiền thanh toán" cho phép người dùng tự do nhập sửa giá tiền` | **Critical** | Checkout | [🔗 Issue #2](https://github.com/vhthawng/software-testing-hw03/issues/2) |
| **BUG-13** | `[BUG-13] Nút Sửa Admin bị đơ và đổi tên toàn bộ sản phẩm trên bảng dữ liệu` | **Critical** | Admin | [🔗 Issue #3](https://github.com/vhthawng/software-testing-hw03/issues/3) |
| **BUG-16** | `[BUG-16] Nút "Thêm vào giỏ hàng" bắt buộc phải bấm 2 lần mới nhận lệnh` | **Major** | ProductDetail | [🔗 Issue #4](https://github.com/vhthawng/software-testing-hw03/issues/4) |
| **BUG-08** | `[BUG-08] Bảng Giỏ hàng thiếu nút tăng/giảm số lượng sản phẩm (+/-)` | **Major** | Cart | [🔗 Issue #5](https://github.com/vhthawng/software-testing-hw03/issues/5) |
| **BUG-14** | `[BUG-14] Nút "Xóa" sản phẩm khỏi giỏ hàng không có hộp thoại xác nhận` | **Major** | Cart | [🔗 Issue #6](https://github.com/vhthawng/software-testing-hw03/issues/6) |
| **BUG-06** | `[BUG-06] Form Đăng ký Mobile thiếu trường Xác nhận mật khẩu` | **Major** | Mobile | [🔗 Issue #7](https://github.com/vhthawng/software-testing-hw03/issues/7) |
| **BUG-01** | `[BUG-01] Ký hiệu tiền tệ không đồng nhất giữa các màn hình (VND vs ₫)` | **Minor** | UI Standards | [🔗 Issue #8](https://github.com/vhthawng/software-testing-hw03/issues/8) |

*Xem chi tiết toàn bộ 16 khiếm khuyết tại [Báo cáo Lỗi Giao diện & Trải nghiệm](HW03_Bug_Report.md).*

---

## PHẦN 6: TỰ ĐÁNH GIÁ & DANH MỤC BÀN GIAO

### 6.1. Bảng Tự Đánh Giá Điểm Số (Theo Mục §15 Đề bài)

| STT | Tiêu chí đánh giá | Điểm tối đa | Tự đánh giá | Minh chứng bàn giao |
| :---: | :--- | :---: | :---: | :--- |
| **1** | **Task 1 — GUI Checklist**<br>(Design + Execution + Bug Report) | 30 | **30 / 30** | Thiết kế 48 items (>40), 10 mục Human-Added; Pass 34/Fail 14; [File Excel .xls](HW03_GUI_Checklist.xls); [Báo cáo Bug Report](HW03_Bug_Report.md). |
| **2** | **Task 2 — Usability Evaluation**<br>(Scenario + 7 Sessions + Analysis) | 40 | **40 / 40** | [Kế hoạch 9 phần Rubin](HW03_Usability_Plan_and_Instruments.md); 7 người tham gia thật; SUS 30.36 Grade F; [Báo cáo Usability](HW03_Usability_Evaluation_Report.md). |
| **3** | **Task 3 — Cross-Browser / Cross-Platform**<br>($\ge 3$ Platforms) | 20 | **20 / 20** | Playwright tự động hóa Chrome, Firefox, Galaxy A52; 9 ảnh [screenshots/watermarked/](screenshots/watermarked/); [Báo cáo Đa Nền tảng](HW03_Cross_Platform_Report.md). |
| **4** | **Tiêu chí 4 — Agent Skills** | 10 | **10 / 10** | [Agent Skill gui-usability-testing](skills/gui-usability-testing/) (Subagent chấm 9.85/10), [Playwright Skill](skills/playwright-skill/), Script tạo issue. |
| **Tổng** | **Toàn bộ đồ án HW03** | **100** | **100 / 100** | **Tự đánh giá: 100 / 100 điểm** |

### 6.2. Danh mục Tập tin Bàn giao

* 📖 **Tài liệu tổng hợp:** [README.md](README.md) \| [Báo cáo chính Main Report](HW03_Main_Report.md) \| [Phụ lục AI Audit Report](HW03_AI_Audit_Report.md) \| [Nhật ký Git Commit Log](git_commit_log.txt)
* 📊 **Dữ liệu kiểm thử:** [Checklist Excel](HW03_GUI_Checklist.xls) \| [Checklist CSV](HW03_GUI_Checklist.csv) \| [Checklist JSON](checklist_data.json) \| [SUS Survey JSON](sus_participants.json) \| [Biên bản Phỏng vấn](interview.md)
* 💻 **Kịch bản tự động hóa:** [Playwright Test](scripts/automated_cross_platform.js) \| [Tạo GitHub Issues](scripts/create_github_issues.js) \| [Agent Skill](skills/gui-usability-testing/)

---

*Báo cáo được hoàn thiện vào ngày 08/11/2026 bởi sinh viên **Võ Hữu Thắng (MSSV: 23120355)**.*
