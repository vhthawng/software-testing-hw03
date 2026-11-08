**Khoa Công nghệ Thông tin (FIT) – Trường Đại học Khoa học Tự nhiên (HCMUS)**  
**CS423 / CSC13003 – Kiểm chứng Phần mềm (AI-augmented · 2026)**  
**CHÍNH SÁCH AI · BIỂU MẪU — 2026 v1.0**  

# AI Audit Report — Nhật Ký Kiểm Toán & Phản Biện AI (HW03)
*Phụ lục kiểm toán bắt buộc đính kèm cho bài tập cá nhân HW03 – GUI & Usability Testing.*

---

## 1. Thông tin Sinh viên

| Mục | Giá trị |
| :--- | :--- |
| **Họ tên sinh viên (in hoa):** | **VÕ HỮU THẮNG** |
| **MSSV:** | **23120355** |
| **Lớp / Khoá:** | CQ2023/3 (Khoa Công nghệ Thông tin) |
| **Mã bài tập:** | **HW#03 – GUI & Usability Testing** |
| **Ngày thực hiện:** | 08/11/2026 |
| **Công cụ AI đã sử dụng:** | Antigravity AI Agent (DeepMind / Gemini 3.8 Flash), Playwright Automation Skill |
| **Khai báo sử dụng AI:** | **[ x ] Có** &nbsp;&nbsp;&nbsp;&nbsp; [ &nbsp; ] Không |

---

## 2. AI Critique — Đoạn Văn Phản Biện AI (Bắt buộc: 200 – 300 từ)

> Trong suốt quá trình thực hiện đồ án kiểm thử HW03, sự tương tác giữa sinh viên và AI đã làm nổi bật vai trò quyết định của con người trong việc kiểm soát chất lượng (Human-in-the-loop). 
> 
> **Điểm AI sai sót, thiên kiến và thiếu hoàn thiện:** AI có xu hướng mặc định chọn giải pháp dễ dãi hoặc lý thuyết sách vở. Khi bắt đầu lập kế hoạch, AI đã xếp việc xây dựng Agent Skill vào cuối cùng thay vì đưa lên đầu để làm công cụ thực thi; ở Task 1, bộ checklist ban đầu của AI bỏ sót hoàn toàn 10 lỗi nghiệp vụ then chốt (như Regex số điện thoại chặn đầu số 0 của Việt Nam tại `Profile.jsx` hay ô tổng tiền cho phép nhập tay tại `Checkout.jsx`); ở Task 3, AI đề xuất chụp ảnh thủ công bằng tay thay vì tận dụng framework tự động; và đặc biệt ở khâu lập báo cáo kiểm toán, AI đã tự ý sinh ra các prompt giả lập thay vì trích xuất dữ liệu hội thoại thực tế.
> 
> **Nguyên nhân thất bại của AI:** AI thiếu sự thấu cảm ngữ cảnh địa phương (Local domain context), thiếu tư duy đối kháng của kiểm thử viên (Adversarial testing mindset) và có thói quen suy diễn (Hallucination/Fabrication) khi thiếu ràng buộc rõ ràng.
> 
> **Bài học nguyên tắc hợp tác với AI:** Đạt mức năng lực Bloom-AI G9.4 không phải là phó mặc cho AI tự vận hành, mà sinh viên phải liên tục phản biện, đặt câu hỏi hoài nghi và giám sát nghiêm ngặt mọi kết quả đầu ra. AI là trợ lý đắc lực để viết code tự động Playwright và tính toán thống kê, nhưng con người phải là người định hướng phương pháp, phát hiện lỗ hổng và bảo đảm tính trung thực học thuật. *(280 từ)*

---

## 3. Bảng Nhật Ký Kiểm Toán Tương Tác Thực Tế (Audited Interactions)

*Toàn bộ các dòng dưới đây được trích xuất nguyên văn từ lịch sử hội thoại thực tế của phiên làm việc (Conversation ID: `8016fd3c-1bfc-40ce-96e6-d17947c5fee9`), hoàn toàn không sử dụng dữ liệu giả định:*

| STT | (1) Prompt Nguyên Văn & Công Cụ | (2) Output AI Tóm Tắt | (3) Đánh Giá | (4) Lý Do Phân Loại (Dẫn Chiếu Chuẩn) | (5) Bản Sinh Viên Điều Chỉnh / Phản Biện |
| :---: | :--- | :--- | :---: | :--- | :--- |
| **#1** | **Thời gian:** 11:48 & 11:57 08/11/2026<br>**Tool:** Antigravity AI (Gemini 3.8 Flash)<br>**Prompt:**<br>_"Hãy đọc yêu cầu của @2026.HW03.md và tóm tắt lại cho tôi nó yêu cầu gì, và cần các báo cáo nào..."_<br>_"tôi đã có bộ test case làm lần trước từ HW2 @2026.HW02.Domain Testing_En.md , tôi có thể áp dụng nó lại cho lần này không??? không ý tôi là có thể chọn pool y chan như vậy được không??"_ | AI phân tích tóm tắt yêu cầu đồ án, xác nhận cho phép tái sử dụng phạm vi 4 Pools từ HW02: Pool A (Profile), Pool B (Cart & Checkout), Pool C (Admin), Pool D (Mobile). | **VALID** | Phù hợp với Mục §5 Scope Selection của đề bài (khuyến khích kiểm thử nhiều màn hình để đạt độ phủ giao diện sâu, không làm nông một màn hình). | Sinh viên chốt phạm vi 4 phân hệ kế thừa từ bài tập HW02 để đảm bảo tính xuyên suốt. |
| **#2** | **Thời gian:** 12:36 & 12:39 08/11/2026<br>**Tool:** Antigravity AI<br>**Prompt:**<br>_"Hãy lên một plan trình bày rõ những gì bạn sẽ làm cho homework này, và cuối cùng acceptance criteria là gì checklist để biết bài này được điểm"_<br>_"sao phần skill lại để cuối?? phài đưa nó lên dầu chứ? có skill rồi mới bắt đầu làm các phần kia được chứ??"_ | AI đề xuất kế hoạch 6 giai đoạn, nhưng xếp việc tạo Agent Skill vào Giai đoạn 5 (sau khi đã làm xong Task 1 và Task 2). | **INVALID** | Vi phạm nguyên lý chỉ đạo AI-First (§2 Guiding Principles). Agent Skill là bộ công cụ thực thi tự động hóa, nếu để cuối cùng thì không thể ứng dụng skill vào các task trước đó. | **Sinh viên phản biện chấn chỉnh:** Yêu cầu dời việc tạo Agent Skill lên ngay Giai đoạn 2 để dùng skill sinh checklist, tính SUS và đóng watermark. |
| **#3** | **Thời gian:** 12:43 & 12:51 08/11/2026<br>**Tool:** Antigravity AI<br>**Prompt:**<br>_"dựa vào @resources và apply @skills/skill-creator để tạo ra skill gui-usability-testing."_<br>_"Hãy tạo subagent review lại skill gui-testing đó đi"_ | AI tạo Agent Skill trong thư mục `skills/gui-usability-testing`, xây dựng script `calculate_sus.js`, `build_gui_checklist.js`, `watermark_screenshot.ps1`. Khởi tạo subagent `skill-reviewer` thẩm định. | **INCOMPLETE** | Subagent phát hiện filter lệnh PowerShell `-Include` có thể sót ảnh trên một số phiên bản Windows và thiếu tập tin dữ liệu khảo sát mẫu. | **Sinh viên yêu cầu hoàn thiện:** Sửa bộ lọc regex trong script PowerShell, bổ sung file `sample_sus_survey.json`. Subagent thẩm định lại đạt **9.85/10 (Excellent Pass)**. |
| **#4** | **Thời gian:** 13:11, 13:15 & 13:24 08/11/2026<br>**Tool:** Antigravity AI<br>**Prompt:**<br>_"Hãy thực hiện giai đoạn 3"_<br>_"giải thích cho tôi, bạn chạy kiểu gì mà biết được vậy, đọc code à?? hay chạy playwright?"_<br>_"Hãy so sánh lại yêu cầu @2026.HW03.md và yêu cầu của giai đoạn 3 xem có đúng chưa?? Tóm tắt lại cho tôi những gì bạn đã làm ở giai đoạn 3"_ | AI đọc mã nguồn React của SUT (Static Code & DOM Inspection) để đánh giá Pass/Fail cho checklist ban đầu (38 items). | **INCOMPLETE** | Checklist ban đầu do AI sinh chỉ nhìn thấy bề mặt HTML, bỏ sót các lỗi logic nghiệp vụ nặng (Nielsen #4, #5 và Norman Constraints) như chặn đầu số 0 của SĐT Việt Nam, ô tổng tiền cho sửa tay. | **Sinh viên thực hiện AI Gap Analysis:** Bổ sung **10 tiêu chí phản biện (Human-Added Items)**, đối chiếu dòng code thực tế của SUT, nâng bộ tiêu chí lên 48 items và lập báo cáo 16 lỗi. |
| **#5** | **Thời gian:** 13:29, 13:30 & 15:21 08/11/2026<br>**Tool:** Antigravity AI<br>**Prompt:**<br>_"Để thực hiện giai đoạn 4 bạn cần những gì??"_<br>_"thực hiện theo cách 1"_<br>_"tôi đã cập nhật thông tin phỏng vấn của intervieee @interview.md , hãy xem cập nhật giai đoạn 4"_ | AI chuẩn bị Kế hoạch 9 phần Rubin & Chisnell. Sinh viên cung cấp dữ liệu thực tế của 7 người tham gia trong `interview.md`. AI chạy script `calculate_sus.js` tính Mean SUS = 30.36 (Hạng F). | **VALID** | Đáp ứng chuẩn mực John Brooke (1986), Sauro & Lewis (2016) và quy tắc chống gian lận Mục §11 (7 người tham gia thật ngoài lớp học, che 4 số giữa). | Sinh viên thẩm tra lại ma trận mức độ nghiêm trọng và phân tách rạch ròi giữa lỗi code (Bugs) với lỗi trải nghiệm (Systemic UX Issues). |
| **#6** | **Thời gian:** 15:27, 15:32 & 15:41 08/11/2026<br>**Tool:** Antigravity AI<br>**Prompt:**<br>_"thực hiện giai đoạn 5, nhưng nếu có gì cần chuẩn bị trước thì phải báo tôi"_<br>_"ủa chứ không dùng framework tự động à??"_<br>_"playwright có chạy cho mobile được không??"_<br>_"phương án A. Tôi đã khởi động be và fe rồi. Hãy aplly skill @skills/playwright-skill để viết automation test cho phần này. Chỉ áp dụng những gì cần thiết..."_ | AI ban đầu đề xuất sinh viên mở trình duyệt bật tay và chụp màn hình thủ công để nộp bài. | **INVALID** | Đề xuất chụp tay đi ngược lại tinh thần Test Automation chuyên nghiệp và không khai thác được năng lực của Tiêu chí 4 (Agent Skills). | **Sinh viên phản biện chấn chỉnh:** Yêu cầu dùng Playwright tự động hóa 100%. Áp dụng `playwright-skill` viết kịch bản tự động chạy trên Chrome, Firefox và Galaxy A52 Mobile, tự chụp và đóng watermark. |
| **#7** | **Thời gian:** 15:50, 15:57 & 16:01 08/11/2026<br>**Tool:** Antigravity AI<br>**Prompt:**<br>_"còn về phần tạo issues thì sao? tôi có cần tạo repo cho btap này không??"_<br>_"tôi đã tạo repo rồi https://github.com/vhthawng/software-testing-hw03.git... bạn kết nối vào tạo issue luôn được không??"_<br>_"làm cách 1 ghp_************************************"_ | AI kết nối remote git, push toàn bộ bài làm lên repo cá nhân. Viết script `create_github_issues.js` gọi GitHub REST API tạo tự động 8 Issues trọng yếu kèm ảnh watermark. | **VALID** | Đạt yêu cầu Mục §6 và §14 của đề bài: Toàn bộ lỗi trọng yếu được công khai trên GitHub Issues có đính kèm ảnh minh chứng. | Sinh viên cung cấp Personal Access Token để kích hoạt script tự động hóa tạo 8 Issues hoàn chỉnh. |
| **#8** | **Thời gian:** 16:16 08/11/2026<br>**Tool:** Antigravity AI<br>**Prompt:**<br>_"về phần audit và phầm main report cần điều chỉnh, không cần tạo file pdf, tôi sẽ làm phần đó, bạn chỉ cần tạo file md. Đầu tiên loại bỏ absolute path, dùng relative path, cho các link và phải dùng anchor text để biểu thị. Về audit là nội dung đang bịa, bạn hãy tập hợp hết đoạn chat của tôi và bạn trong conversation này và đưa vào báo cáo. Điều chỉnh lại main report luôn, hiện tại đang quá khó đọc. Git commit log cũng vậy, chỉ cần hiển thị git log thôi, không cần comment giải thích trong đó"_ | AI ban đầu sinh bảng audit với các prompt giả định/ước lệ, dùng đường dẫn tuyệt đối `file:///d:/...`, tự xuất PDF và chèn đoạn văn giải thích vào git log. | **INVALID** | Vi phạm tính trung thực học thuật (Academic Integrity) và chính sách minh bạch AI: AI Audit Report phải phản ánh 100% dữ liệu chat thật; đường dẫn phải tương đối để mở được trên mọi máy. | **Sinh viên phát hiện và chấn chỉnh:** Bắt buộc AI loại bỏ nội dung giả định, trích xuất toàn bộ prompt thật từ transcript, xóa các file PDF thừa, chuyển sang relative path có anchor text, và đưa git log về nguyên bản. |

---

## 4. Tổng Kết Độ Chính Xác AI Trong Suốt Quá Trình

| Chỉ số đánh giá | Số lượng tương tác | Tỉ lệ (%) | Ý nghĩa phương pháp luận |
| :--- | :---: | :---: | :--- |
| **Tổng số tương tác chính đã Audit** | **8 tương tác** | **100%** | Toàn bộ các bước từ lập kế hoạch, viết checklist, usability, automation đến lập báo cáo. |
| **VALID (Đúng phương pháp, dùng được ngay)** | **3 tương tác** | **37.5%** | Các tác vụ thực thi kỹ thuật thuần túy: phân tích scope, tính SUS toán học, gọi GitHub API. |
| **INVALID (Sai phương pháp, sinh viên phải can thiệp sửa)** | **3 tương tác** | **37.5%** | Lỗi sắp xếp thứ tự skill, gợi ý test thủ công thay vì automation, và tự bịa nội dung audit. |
| **INCOMPLETE (Thiếu sót ngữ cảnh, sinh viên phải bổ sung)** | **2 tương tác** | **25.0%** | AI bỏ sót 10 lỗi nghiệp vụ SUT trong checklist và sót filter lệnh trong script. |

> 📌 **Nhận xét quan trọng:** Tỷ lệ lỗi và thiếu sót của AI lên tới **62.5%** (INVALID + INCOMPLETE). Điều này chứng minh rằng nếu sinh viên không có kiến thức chuyên môn vững vàng về kiểm thử và không có tư duy phản biện, việc sao chép nguyên văn output của AI sẽ dẫn đến một bài làm sai lệch phương pháp nghiêm trọng.

---

## 5. Kết Luận — Khi Nào Nên / Không Nên Dùng AI?

* **Khi NÊN dùng AI:**
  - Tự động hóa viết các đoạn mã lặp lại (Boilerplate code) cho Playwright, PowerShell, Node.js.
  - Hỗ trợ tính toán số liệu thống kê (Mean, Standard Deviation, Percentile SUS) với độ chính xác cao.
  - Định dạng bảng biểu, chuyển đổi cấu trúc dữ liệu JSON sang bảng tính Excel hoặc Markdown.
* **Khi KHÔNG NÊN dùng AI:**
  - Không để AI tự quyết định logic nghiệp vụ mang tính địa phương hóa (như định dạng số điện thoại Việt Nam).
  - Không để AI tự giả lập hành vi người dùng (phải dùng người dùng thực tế theo đúng quy định chống gian lận).
  - Tuyệt đối không để AI tự khai báo báo cáo kiểm toán (phải dựa trên nhật ký hội thoại thực tế).

---

## 6. Mandatory Disclosure (Tuyên Bố Minh Bạch Bắt Buộc)

> *"Đồ án này được thực hiện với sự hỗ trợ của Antigravity AI Agent; tôi đã rà soát 100% các kết quả do AI sinh ra, trực tiếp phản biện và yêu cầu đổi phương pháp khi AI đề xuất sai (như chuyển từ chụp thủ công sang Playwright tự động hóa), tự bổ sung 10 tiêu chí kiểm thử chuyên sâu (Human-Added Items), và trực tiếp phỏng vấn 7 người tham gia thực tế. Toàn bộ nội dung trong AI Audit Report này được trích xuất trung thực từ nhật ký hội thoại thật, cam kết không có dữ liệu ngụy tạo."*

---

## Chữ Ký Xác Thực

| Mục | Nội dung |
| :--- | :--- |
| **Họ tên sinh viên (in hoa):** | **VÕ HỮU THẮNG** |
| **MSSV:** | **23120355** |
| **Lớp / Khoá:** | CQ2023/3 |
| **Môn học:** | CS423 / CSC13003 – Kiểm chứng Phần mềm |
| **Giảng viên hướng dẫn:** | TS. Lâm Quang Vũ / TS. Trần Duy Hoàng / ThS. Trần Thị Bích Hạnh |
| **Ngày xác nhận:** | 08/11/2026 |
| **Chữ ký xác nhận:** | *Võ Hữu Thắng (Đã ký điện tử)* |
