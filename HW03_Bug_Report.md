# BÁO CÁO LỖI GIAO DIỆN & TRẢI NGHIỆM (GUI & UX BUG REPORT)
**Môn học:** CS423 / CSC13003 – Kiểm chứng Phần mềm (FIT@HCMUS)  
**Bài tập:** HW03 – GUI & Usability Testing  
**Sinh viên thực hiện:** Võ Hữu Thắng — **MSSV:** 23120355 — **Lớp:** CQ2023/3 — **Nhóm:** Group 4 – Performance Testing  
**Hệ thống kiểm thử (SUT):** EShop (https://github.com/ttbhanh/eshop-sut)  
**Phạm vi lựa chọn (Kế thừa từ 4 Pool HW02):**
- **Pool A:** FR-04 Profile Management (`Profile.jsx`)
- **Pool B:** FR-08 Checkout (`Checkout.jsx` & `Cart.jsx`)
- **Pool C:** FR-15 Admin Product Management (`frontend-admin/src/App.jsx`)
- **Pool D:** Mobile Register (`frontend-mobile/App.js` trên Samsung Galaxy A52)

---

## 1. Bảng Tổng Hợp Danh Sách Lỗi Phát Hiện (16 Bugs)

| Mã Bug | Tên lỗi | Pool & Màn hình | Khía cạnh | Mức độ | Liên hệ HW02 | Nguyên lý vi phạm |
| :---: | :--- | :---: | :---: | :---: | :---: | :--- |
| **BUG-01** | Ký hiệu tiền tệ không đồng nhất (`VND` vs `₫`) | Pool B: Checkout | `IA-01` | Minor | Mới HW03 | Nielsen #4 (Consistency) |
| **BUG-02** | Ảnh sản phẩm Admin thiếu thuộc tính `alt` | Pool C: Admin | `IA-01` | Major | Mới HW03 | W3C WCAG 2.2 (Accessibility) |
| **BUG-03** | Regex Phone từ chối mọi SĐT Việt Nam bắt đầu bằng 0 | Pool A: Profile | `IA-02` | **Critical** | BUG-A04-001 | Norman Constraints, Nielsen #5 |
| **BUG-04** | Ô tổng tiền thanh toán cho phép người dùng tự sửa giá | Pool B: Checkout | `IA-02` | **Critical** | BUG-B08-001 | Norman Constraints & Integrity |
| **BUG-05** | Ô giá sản phẩm Admin nhận giá âm và số 0 | Pool C: Admin | `IA-02` | Major | BUG-C15-002 | Norman Constraints, BVA |
| **BUG-06** | Form Đăng ký Mobile thiếu trường Confirm Password | Pool D: Mobile | `IA-02` | Major | BUG-D-004 | Nielsen #5 (Error Prevention) |
| **BUG-07** | Nhãn Label form Profile thiếu thuộc tính `htmlFor` | Pool A: Profile | `IA-02` | Minor | Mới HW03 | W3C Form Usability |
| **BUG-08** | Không thể chỉnh sửa số lượng trong bảng Giỏ hàng | Pool B: Cart | `IA-02` | Major | BUG-B08-005 | Nielsen #7, Shneiderman Shortcuts |
| **BUG-09** | Tên sản phẩm Admin không giới hạn 255 ký tự trên UI | Pool C: Admin | `IA-02` | Minor | BUG-C15-001 | FR-15 BVA Constraint |
| **BUG-10** | Mục Giỏ hàng trên thanh Header thiếu Cart Badge | Pool B: Header | `IA-03` | Minor | Mới HW03 | Norman Visibility, Nielsen #1 |
| **BUG-11** | Thanh Header thiếu chỉ báo trang hiện tại (Active State) | Header (All) | `IA-03` | Minor | Mới HW03 | Nielsen #1 (Visibility of Status) |
| **BUG-12** | Nút Hủy đơn trong Lịch sử đơn hàng thiếu hộp thoại confirm | Pool A: Profile | `IA-04` | Major | Mới HW03 | Nielsen #5 (Error Prevention) |
| **BUG-13** | Nút Sửa Admin bị đơ và đổi tên toàn bộ bảng sản phẩm | Pool C: Admin | `IA-04` | **Critical** | BUG-C15-004 | Norman Feedback & System State |
| **BUG-14** | Xóa sản phẩm khỏi giỏ hàng không có hộp thoại confirm | Pool B: Cart | `IA-04` | Major | Mới HW03 | Shneiderman Easy Reversal |
| **BUG-15** | Bấm thanh toán khi chưa đăng nhập bị chặn bởi `window.alert()` | Pool B: Cart | `IA-04` | Minor | Mới HW03 | Shneiderman Dialogue Closure |
| **BUG-16** | Nút 'Thêm vào giỏ hàng' bắt buộc bấm 2 lần mới nhận lệnh | Pool B: ProductDetail | `IA-04` | Major | Mới Usability | Nielsen #1 (Visibility), Norman Feedback |

---

## 2. Chi Tiết Các Lỗi Phát Hiện & Đối Chiếu Với HW02

### BUG-03: Regex Số điện thoại tại Profile từ chối mọi SĐT Việt Nam hợp lệ (Kế thừa BUG-A04-001)
* **Mức độ:** **CRITICAL** (Lỗi Form Validation nghiêm trọng).
* **Màn hình:** Profile (`frontend-web/src/pages/Profile.jsx`, dòng 43).
* **Mô tả:** Code kiểm tra validation số điện thoại:
  ```javascript
  if (!/^[1-9][0-9]{8,9}$/.test(phone)) {
    alert("Số điện thoại không hợp lệ. Vui lòng nhập đúng 9-10 chữ số.");
    return;
  }
  ```
* **Phân tích:** Biểu thức `^[1-9]` bắt buộc ký tự đầu tiên phải từ 1 đến 9. Trong khi đó, 100% số điện thoại di động tại Việt Nam đều bắt đầu bằng số `0` (ví dụ: `0987654321`, `0912345678`). Do đó, người dùng nhập số điện thoại Việt Nam hợp lệ đều bị hệ thống chặn lại và báo lỗi!
* **Liên hệ HW02:** Trùng khớp với phát hiện tại HW02: *"UI từ chối phone hợp lệ dài 10/11 bắt đầu bằng 0, nhưng nhận phone 10 chữ số không bắt đầu 0"*.

---

### BUG-04: Ô "Tổng tiền thanh toán" cho phép người dùng tự gõ sửa số tiền (Kế thừa BUG-B08-001)
* **Mức độ:** **CRITICAL** (Gian lận thương mại & Lỗi giao diện).
* **Màn hình:** Checkout (`frontend-web/src/pages/Checkout.jsx`, dòng 93–102).
* **Mô tả:** Trường "Tổng tiền thanh toán (VND)" được render bằng thẻ `<input type="number">` có kèm `onChange={(e) => setEditableTotal(Number(e.target.value))}`. Người dùng có thể xóa số tiền thật và nhập `1000 ₫` hoặc số âm rồi bấm "Xác Nhận Thanh Toán" thành công!
* **Liên hệ HW02:** Trùng khớp với phát hiện tại HW02: *"UI cho sửa tổng; API lưu 199999 hoặc 200001 theo total bị sửa"*.

---

### BUG-05: Ô Giá sản phẩm trong Admin nhận giá âm và số 0 (Kế thừa BUG-C15-002)
* **Mức độ:** Major (Ràng buộc BVA giao diện).
* **Màn hình:** Quản trị Sản phẩm (`frontend-admin/src/App.jsx`).
* **Mô tả:** Ô Giá sản phẩm trong modal thêm/sửa sản phẩm không có thuộc tính `min="1"`, cho phép Admin nhập giá 0 ₫ hoặc số âm (-100.000 ₫) và lưu thành công vào cơ sở dữ liệu.
* **Liên hệ HW02:** Trùng khớp với phát hiện tại HW02: *"Web tạo được tên 256, giá trống/0/âm"*.

---

### BUG-06: Form Đăng ký trên Mobile App thiếu trường Xác nhận mật khẩu (Kế thừa BUG-D-004)
* **Mức độ:** Major (Phòng ngừa lỗi đăng ký).
* **Màn hình:** Mobile Register (`frontend-mobile/App.js` trên Samsung Galaxy A52).
* **Mô tả:** Form Đăng ký trên Mobile App chỉ có 3 ô nhập (Họ tên, Email, Mật khẩu), hoàn toàn thiếu trường "Xác nhận mật khẩu" (Confirm Password) theo quy định của đặc tả FR-01/FR-20.
* **Liên hệ HW02:** Trùng khớp với phát hiện tại HW02: *"Thực tế form thiếu Confirm: TC016/017 Blocked và TC024 Fail do thiếu Confirm"*.

---

### BUG-13: Nút Sửa Admin bị đơ và đổi tên toàn bộ sản phẩm trên bảng (Kế thừa BUG-C15-004)
* **Mức độ:** **CRITICAL** (Lỗi phản hồi và toàn vẹn dữ liệu).
* **Màn hình:** Quản trị Sản phẩm (`frontend-admin/src/App.jsx`, dòng 110–114).
* **Mô tả:** 
  1. Nút Sửa trên giao diện đôi khi bị đơ không mở modal cập nhật (khiến các TC013–015 bị Blocked ở HW02).
  2. Khi cập nhật thành công, code chạy:
     ```javascript
     const fakeMassUpdatedProducts = products.map((p) => ({
       ...p,
       name: productForm.name,
     }));
     setProducts(fakeMassUpdatedProducts);
     ```
     Đoạn code này làm toàn bộ sản phẩm trong bảng Admin bị đổi tên thành tên sản phẩm vừa sửa!

---

### BUG-16: Nút 'Thêm vào giỏ hàng' bắt buộc bấm 2 lần mới nhận lệnh (Phát hiện từ Usability Testing)
* **Mức độ:** Major (Lỗi phản hồi tương tác & Trễ nhịp người dùng).
* **Màn hình:** Chi tiết sản phẩm (`frontend-web/src/pages/ProductDetail.jsx`, dòng 21–31).
* **Mô tả:** Code cài đặt hàm xử lý thêm vào giỏ hàng:
  ```javascript
  const handleAddToCart = () => {
    if (clickCount === 0) {
      setClickCount(1);
      return; // Không làm gì cả ở lần đầu tiên
    }

    addToCart(product, parseInt(quantity));
    setAdded(true);
    setClickCount(0); // Reset lại
    setTimeout(() => setAdded(false), 2000);
  };
  ```
* **Phân tích:** Lần click đầu tiên người dùng bấm vào nút hoàn toàn bị triệt tiêu (`return;`), không có bất kỳ phản hồi trực quan nào. 100% người dùng trong đợt thử nghiệm Usability (P1–P7) đều tưởng nút bấm bị hỏng, chuột hết pin hoặc hệ thống bị đơ nên phải bấm liên tiếp nhiều lần. Vi phạm nguyên tắc phản hồi tức thời của Nielsen (#1) và Norman.

