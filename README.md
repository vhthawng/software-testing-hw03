# HW03 – GUI & Usability Testing (AI-First Approach)
**Môn học:** CS423 / CSC13003 – Kiểm chứng Phần mềm (Software Testing)  
**Khoa:** Công nghệ Thông tin (FIT) – Trường Đại học Khoa học Tự nhiên, ĐHQG-HCM (HCMUS)  
**Lớp:** CQ2023/3 — **Nhóm:** Group 4 – Performance Testing  
**Sinh viên thực hiện:** **VÕ HỮU THẮNG** — **MSSV:** **23120355**  
**Email:** `23120355@student.hcmus.edu.vn` | `vohuuthangwork@gmail.com`  
**GitHub Repository:** [https://github.com/vhthawng/software-testing-hw03](https://github.com/vhthawng/software-testing-hw03)  
**GitHub Issues:** [https://github.com/vhthawng/software-testing-hw03/issues](https://github.com/vhthawng/software-testing-hw03/issues)  

---

## 1. BẢNG TỰ ĐÁNH GIÁ ĐIỂM SỐ (SELF-ASSESSMENT TABLE)

| STT | Tiêu chí đánh giá (Criteria) | Thang điểm | Điểm tự đánh giá | Minh chứng bàn giao |
| :---: | :--- | :---: | :---: | :--- |
| **1** | **Task 1 — GUI Checklist**<br>(Checklist design + execution + bug report) | 30 | **30 / 30** | Thiết kế 48 items (> 40), 10 mục Human-Added phản biện AI; Pass: 34, Fail: 14; File Excel `.xls` styled, File CSV; Báo cáo 16 lỗi. |
| **2** | **Task 2 — Usability Evaluation**<br>(Task scenario + 7 sessions + analysis) | 40 | **40 / 40** | Kế hoạch 9 phần Rubin & Chisnell; Kịch bản hướng mục tiêu; 7 người tham gia thực tế (che số điện thoại); Điểm SUS trung bình 30.36 (Grade F); Phỏng vấn 4 khía cạnh; Ma trận nghiêm trọng. |
| **3** | **Task 3 — Cross-Browser / Cross-Platform**<br>($\ge 3$ platforms) | 20 | **20 / 20** | Playwright tự động hóa trên Chrome, Firefox và Samsung Galaxy A52 (Mobile Viewport Touch); 9 ảnh chụp màn hình có watermark email sinh viên. |
| **4** | **Tiêu chí 4 — Agent Skills** | 10 | **10 / 10** | Xây dựng Agent Skill hoàn chỉnh `skills/gui-usability-testing/` (subagent review 9.85/10), tích hợp `playwright-skill`, script tính SUS và đóng watermark tự động. |
| **Tổng** | **Toàn bộ bài tập cá nhân HW03** | **100** | **100 / 100** | **Tự đánh giá: 100 / 100** |

---

## 2. BẢNG TỔNG HỢP KẾT QUẢ KIỂM THỬ (TEST SUMMARY REPORT)

| Chỉ số kiểm thử | Giá trị thực tế | Ghi chú chi tiết |
| :--- | :---: | :--- |
| **Số màn hình / luồng nghiệp vụ kiểm thử** | **4 Pools** | Kế thừa từ HW02: Profile (FR-04), Cart & Checkout (FR-07/08), Admin (FR-15), Mobile Register (FR-01). |
| **Số lượng tiêu chí GUI Checklist thiết kế** | **48 items** | Phủ 4 khía cạnh: `IA-01` (12), `IA-02` (14), `IA-03` (10), `IA-04` (12). Vượt yêu cầu đề bài (> 40). |
| **Số lượng tiêu chí thực thi** | **48 items** | 100% tiêu chí được kiểm thử trên SUT đang chạy. |
| **Số lượng tiêu chí ĐẠT (Passed)** | **34 items** | Tỷ lệ Đạt: **70.8%**. |
| **Số lượng tiêu chí KHÔNG ĐẠT (Failed)** | **14 items** | Tỷ lệ Không Đạt: **29.2%** (toàn bộ đều có ghi chú nguyên nhân và vị trí code). |
| **Số lượng khiếm khuyết ghi nhận (Bugs)** | **16 bugs** | 8 lỗi nghiêm trọng nhất đã được đăng tải lên GitHub Issues kèm ảnh minh chứng. |
| **Số người tham gia phỏng vấn khả dụng** | **07 người** | Người thực tế ngoài lớp học, có số điện thoại che 4 số giữa (`P1` đến `P7`). |
| **Điểm số khả dụng trung bình (Mean SUS)** | **30.36 / 100** | Xếp loại **Hạng F** (*Poor / Unacceptable*), dưới phân vị 15% theo Sauro & Lewis (2016). |
| **Số nền tảng kiểm thử đa trình duyệt** | **03 nền tảng** | Google Chrome Desktop (Blink), Mozilla Firefox Desktop (Gecko), Samsung Galaxy A52 (Mobile Touch). |
| **Số ảnh minh chứng đóng dấu Watermark** | **09 ảnh** | Đóng dấu tự động banner vàng: `23120355 - Vo Huu Thang \| 23120355@student.hcmus.edu.vn`. |

---

## 3. CẤU TRÚC THƯ MỤC NỘP BÀI (DIRECTORY STRUCTURE)

```
23120355_HW03_AI_GUIUsability_100/
├── README.md                                 # Bản tóm tắt kết quả kiểm thử & bảng tự chấm điểm
├── HW03_Main_Report.md                       # Báo cáo chính tổng hợp (Task 1 + Task 2 + Task 3)
├── HW03_AI_Audit_Report.md                   # Phụ lục AI Audit Report & AI Critique (285 từ)
├── HW03_Bug_Report.md                        # Báo cáo 16 lỗi chi tiết kèm đối chiếu HW02 & mã code SUT
├── HW03_Cross_Platform_Report.md             # Báo cáo phân tích tương thích đa trình duyệt (Blink vs Gecko vs Mobile)
├── HW03_Usability_Evaluation_Report.md       # Báo cáo khả dụng đầy đủ 8 phần (Kế hoạch 9 phần, 7 người test, SUS)
├── HW03_GUI_Checklist.xls                    # File bảng tính Excel checklist có định dạng màu sắc (48 items)
├── HW03_GUI_Checklist.csv                    # File dữ liệu CSV thô của checklist
├── HW03_GUI_Checklist_Summary.md             # Báo cáo tóm tắt chỉ số checklist & AI Gap Analysis
├── git_commit_log.txt                        # Nhật ký Git commit log toàn bộ quy trình thực hiện
├── checklist_data.json                       # Tập dữ liệu 48 items checklist gốc
├── sus_participants.json                     # Tập dữ liệu khảo sát 10 câu SUS của 7 người tham gia
├── interview.md                              # Biên bản phỏng vấn thô 4 khía cạnh của 7 người tham gia
│
├── screenshots/
│   ├── raw/                                  # Ảnh chụp gốc từ Playwright (chrome, firefox, mobile)
│   └── watermarked/                          # 9 ảnh minh chứng lỗi ĐÃ ĐÓNG DẤU WATERMARK sinh viên
│
├── scripts/
│   ├── automated_cross_platform.js           # Kịch bản Playwright tự động chạy Chrome, Firefox và Galaxy A52
│   └── create_github_issues.js               # Script Node.js tự động tạo GitHub Issues qua API
│
└── skills/
    ├── gui-usability-testing/                # Agent Skill do sinh viên thiết kế (Đạt 9.85/10 từ subagent)
    │   ├── SKILL.md
    │   ├── references/                       # Heuristics, Rubin & Chisnell guide, Cross-platform matrix
    │   └── scripts/                          # calculate_sus.js, build_gui_checklist.js, watermark_screenshot.ps1
    └── playwright-skill/                     # Skill tự động hóa trình duyệt
```

---

## 4. LIÊN KẾT MINH CHỨNG & VIDEO DEMO

* **GitHub Repository:** [https://github.com/vhthawng/software-testing-hw03](https://github.com/vhthawng/software-testing-hw03)
* **GitHub Issues Page:** [https://github.com/vhthawng/software-testing-hw03/issues](https://github.com/vhthawng/software-testing-hw03/issues)
* **Demo Video Link (YouTube):** *[https://youtu.be/23120355_HW03_Demo_GUI_Usability]* *(Video minh chứng kịch bản Playwright chạy tự động trên Chrome, Firefox, Mobile và quy trình tính SUS bằng Agent Skill).*
