**Khoa Công nghệ Thông tin (FIT) – Trường Đại học Khoa học Tự nhiên (HCMUS)**  
**CS423 / CSC13003 – Kiểm chứng Phần mềm (AI-augmented · 2026)**  
**CHÍNH SÁCH AI · BIỂU MẪU — 2026 v1.0**  

# AI Audit Report — Phụ lục Kiểm toán & Phản biện AI (HW03)
*Phụ lục bắt buộc đính kèm cho bài tập cá nhân HW03 – GUI & Usability Testing.*

---

## 1. Thông tin Sinh viên

| Mục | Giá trị |
| :--- | :--- |
| **Họ tên sinh viên (in hoa):** | **VÕ HỮU THẮNG** |
| **MSSV:** | **23120355** |
| **Lớp / Khoá:** | CQ2023/3 (Khoa Công nghệ Thông tin) |
| **Mã bài tập:** | **HW#03 – GUI & Usability Testing** |
| **Ngày làm bài:** | 08/11/2026 |
| **Công cụ AI đã dùng:** | Antigravity AI Agent (DeepMind / Gemini), Claude, Playwright Automation Skill |
| **Khai báo sử dụng AI:** | **[ x ] Có** &nbsp;&nbsp;&nbsp;&nbsp; [ &nbsp; ] Không |

---

## 2. AI Critique — Phản biện AI (Bắt buộc: 200 – 300 từ)

> Trong quá trình thực hiện bài tập kiểm thử giao diện và độ khả dụng HW03, sự cộng tác với AI đã bộc lộ những giới hạn nhận thức rõ rệt giữa mô hình ngôn ngữ lớn (LLM) và hành vi thực tế của người dùng cuối. 
> 
> **Điểm AI sai sót, thiên kiến và thiếu sót:** Khi được yêu cầu sinh bộ GUI Checklist ban đầu, AI chỉ tập trung vào các quy ước HTML bề mặt (như độ dài ký tự cơ bản, trạng thái disabled của nút bấm) mà hoàn toàn bỏ qua các lỗi logic nghiệp vụ mang tính "bẫy" chết người trong mã nguồn SUT. Cụ thể, AI đã bỏ qua lỗi Regex số điện thoại tại `Profile.jsx` (`/^[1-9]/` loại bỏ 100% số điện thoại Việt Nam bắt đầu bằng số 0), không phát hiện được thẻ `<input type="number">` tại trang Checkout cho phép người dùng tự sửa số tiền thanh toán, và không lường trước được việc hàm sửa sản phẩm Admin (`App.jsx`) đổi tên hàng loạt toàn bộ danh sách dữ liệu.
> 
> **Nguyên nhân thất bại:** AI thiếu khả năng thấu cảm ngữ cảnh địa phương (Local domain context) và thiếu tư duy đối kháng (Adversarial mindset). AI giả định các thành phần giao diện hoạt động theo lý thuyết chuẩn của các framework hiện đại mà không kiểm tra dòng dữ liệu (Data flow) thực tế của component React.
> 
> **Nguyên tắc học được:** Làm việc với AI theo chuẩn Bloom-AI G9.4 đòi hỏi sinh viên phải đóng vai trò là "Người phản biện và giám sát chất lượng" (Human-in-the-loop). AI là công cụ tăng tốc tuyệt vời để sinh khung kịch bản, viết test automation và tính toán thống kê SUS; nhưng con người phải là người đặt câu hỏi phản biện, phát hiện các điểm mù giao diện và kiểm chứng trên trải nghiệm người dùng thực tế. *(285 từ)*

---

## 3. Bảng Audit Chi Tiết (1 hàng / Artifact)

| STT | (1) Prompt + Công cụ | (2) Output AI | (3) Verdict | (4) Lý do (Dẫn chiếu chuẩn) | (5) Bản SV sửa & Bổ sung |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **#1** | **Tool:** Antigravity AI<br>**Thời gian:** 10:15 08/11/2026<br>**Prompt:** "Sinh bộ GUI Checklist cho màn hình Profile và Checkout..." | Sinh 30 tiêu chí chung: kiểm tra độ dài input, placeholder, màu sắc nút bấm... | **INCOMPLETE** | AI bỏ qua tính địa phương hóa (Localization - ISTQB FL §4.3) và lỗ hổng toàn vẹn dữ liệu. | Bổ sung kiểm tra Regex SĐT đầu số 0 (`CHK-IA02-01`) và kiểm tra thuộc tính Read-only ô tổng tiền (`CHK-IA02-02`). |
| **#2** | **Tool:** Antigravity AI<br>**Thời gian:** 11:30 08/11/2026<br>**Prompt:** "Kiểm tra tính tiếp cận WCAG 2.2 cho bảng sản phẩm Admin..." | Sinh tiêu chí kiểm tra bảng phân trang, kích thước font chữ... | **INCOMPLETE** | Bỏ qua tiêu chuẩn W3C WCAG 2.2 Success Criterion 1.1.1 (Non-text Content) về thuộc tính `alt`. | Bổ sung tiêu chí `CHK-IA01-11`: Hình ảnh thumbnail trong Admin phải có thẻ `alt` mô tả nội dung. |
| **#3** | **Tool:** Antigravity AI<br>**Thời gian:** 13:10 08/11/2026<br>**Prompt:** "Viết script Node.js tính điểm SUS từ khảo sát 10 câu hỏi..." | Script tính trung bình cộng thông thường mà không đổi thang đo ngược cho câu chẵn. | **INVALID** | Vi phạm công thức chuẩn hóa của John Brooke (1986): Câu chẵn phải tính theo $5 - \text{Response}$. | Sửa lại hàm tính chuẩn: Câu lẻ trừ 1, câu chẵn lấy 5 trừ điểm, nhân hệ số 2.5 theo Sauro & Lewis (2016). |
| **#4** | **Tool:** Antigravity AI<br>**Thời gian:** 13:45 08/11/2026<br>**Prompt:** "Thiết kế kịch bản Usability cho luồng mua hàng EShop..." | Sinh kịch bản dạng Step-by-step: "Bấm nút A, gõ chữ B, bấm giỏ hàng, áp mã C..." | **INVALID** | Vi phạm nguyên tắc Rubin & Chisnell (Handbook of Usability Testing): Kịch bản phải Goal-oriented, không cầm tay chỉ việc. | Viết lại kịch bản hướng mục tiêu: "Bạn có ngân sách dưới 7M, hãy mua bàn phím cơ và dùng mã giảm giá để thanh toán." |
| **#5** | **Tool:** Antigravity AI<br>**Thời gian:** 15:20 08/11/2026<br>**Prompt:** "Viết kịch bản Playwright kiểm thử Profile, Cart, Checkout trên Chrome và Firefox..." | Script dùng `waitUntil: 'networkidle'` và selector `inputs[0]` cho form Profile. | **INCOMPLETE** | Vite WebSocket HMR khiến `networkidle` bị treo 30s; `inputs[0]` là ô Email bị disabled khiến script crash. | Sửa thành `waitUntil: 'domcontentloaded'`, dùng `locator('input[placeholder*="0912345678"]')`, click 2 lần nút thêm giỏ do BUG-16. |
| **#6** | **Tool:** Antigravity AI<br>**Thời gian:** 15:45 08/11/2026<br>**Prompt:** "Tạo script PowerShell chèn watermark bản quyền sinh viên lên ảnh..." | Script dùng `.FromFile()` trực tiếp gây khóa file (`file in use`) khi lưu đè ảnh gốc. | **INCOMPLETE** | Cơ chế File Lock của Windows GDI+ không cho phép ghi đè lên bitmap đang mở. | Sử dụng `MemoryStream` đọc byte buffer độc lập, giải phóng stream trước khi lưu file PNG hoàn tất. |

---

## 4. Tổng kết Độ chính xác AI

| Chỉ số | Số lượng Artifact | Tỉ lệ (%) | Đánh giá & Phân tích |
| :--- | :---: | :---: | :--- |
| **Tổng artifact AI sinh đã audit** | **6** | **100%** | Toàn bộ các thành phần chủ chốt (Checklist, Code, Kịch bản, Script). |
| **VALID (đúng, dùng nguyên bản)** | **0** | **0.0%** | Không có artifact phức tạp nào của AI hoàn hảo 100% mà không cần chỉnh sửa. |
| **INVALID (sai phương pháp, phải hủy làm lại)** | **2** | **33.3%** | Lỗi công thức tính SUS và kịch bản Usability bị "cầm tay chỉ việc". |
| **INCOMPLETE (chấp nhận sau khi SV sửa đổi/bổ sung)**| **4** | **66.7%** | AI tạo khung cơ bản, sinh viên bổ sung logic SUT, selector Playwright và fix lỗi bộ nhớ. |

---

## 5. Kết luận — Khi nào nên / không nên dùng AI?

* **Khi NÊN dùng AI:** Rất hiệu quả trong việc tạo khung tài liệu ban đầu (Scaffolding), mở rộng ý tưởng kiểm thử biên (BVA), tạo dữ liệu mẫu, viết các đoạn mã boilerplate cho Playwright hoặc PowerShell, và xử lý phân tích thống kê toán học (Mean, Variance, Percentile).
* **Khi KHÔNG NÊN dùng AI:** Tuyệt đối không phó mặc cho AI đánh giá tính đúng đắn của logic nghiệp vụ địa phương (như định dạng số điện thoại Việt Nam, văn hóa mua sắm). Không để AI tự sinh kịch bản tương tác người dùng mà không có đối chiếu thực tế. Sinh viên bắt buộc phải là người kiểm chứng cuối cùng trên hệ thống đang chạy (SUT).

---

## 6. Mandatory Disclosure (Tuyên bố bắt buộc)

> *"GUI Checklist, kịch bản kiểm thử tự động Playwright và các báo cáo phân tích trong đồ án này được sinh phiên bản khung đầu tiên với sự hỗ trợ của Antigravity AI Agent; tôi đã rà soát 100% mã nguồn SUT, trực tiếp sửa đổi và bổ sung 10 tiêu chí kiểm thử chuyên sâu (Human-Added Items), hiệu chỉnh kịch bản hướng mục tiêu chuẩn Rubin & Chisnell, và trực tiếp điều phối 7 phiên phỏng vấn người dùng thực tế. Toàn bộ danh sách 7 người tham gia và ảnh chụp màn hình đa nền tảng có watermark đều được thực hiện từ môi trường thực tế, không có bất kỳ dữ liệu giả mạo nào."*

---

## Chữ ký Xác thực

| Mục | Nội dung |
| :--- | :--- |
| **Họ tên sinh viên (in hoa):** | **VÕ HỮU THẮNG** |
| **MSSV:** | **23120355** |
| **Lớp / Khoá:** | CQ2023/3 |
| **Môn học:** | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| **Giảng viên hướng dẫn:** | TS. Lâm Quang Vũ / TS. Trần Duy Hoàng / ThS. Trần Thị Bích Hạnh |
| **Ngày xác nhận:** | 08/11/2026 |
| **Chữ ký xác nhận:** | *Võ Hữu Thắng (Đã ký điện tử)* |
