#!/usr/bin/env node
/**
 * Script tự động tạo GitHub Issues cho repository vhthawng/software-testing-hw03
 * Yêu cầu: GITHUB_TOKEN (Personal Access Token có quyền tạo issue).
 * Cách chạy:
 *   $env:GITHUB_TOKEN="ghp_xxx"
 *   node scripts/create_github_issues.js
 */

const https = require('https');

const REPO_OWNER = 'vhthawng';
const REPO_NAME = 'software-testing-hw03';
const TOKEN = process.env.GITHUB_TOKEN;

const BUGS = [
  {
    title: '[BUG-03] [Critical] [IA-02] Regex số điện thoại tại Profile từ chối mọi SĐT Việt Nam hợp lệ bắt đầu bằng 0',
    labels: ['bug', 'critical', 'IA-02', 'Profile'],
    body: `### Mô tả lỗi
Tại màn hình Quản lý hồ sơ cá nhân (\`frontend-web/src/pages/Profile.jsx\`, dòng 43), hàm kiểm tra validation số điện thoại:
\`\`\`javascript
if (!/^[1-9][0-9]{8,9}$/.test(phone)) {
  alert("Số điện thoại không hợp lệ. Vui lòng nhập đúng 9-10 chữ số.");
  return;
}
\`\`\`

### Phân tích nguyên nhân
Biểu thức chính quy bắt buộc chữ số đầu tiên phải từ \`1-9\`. Trong khi đó, **100% số điện thoại di động tại Việt Nam đều bắt đầu bằng số 0** (ví dụ: \`0912345678\`, \`0987654321\`).

### Hậu quả
- Người dùng Việt Nam nhập số điện thoại thật của mình đều bị từ chối và báo lỗi.
- Đã kiểm chứng trong phiên Usability: 3/7 người tham gia (P1, P3, P6) bị tắc nghẽn và phải nhờ điều phối viên hỗ trợ.

### Giải pháp khuyến nghị
Thay đổi regex thành: \`/^(0[3|5|7|8|9])+([0-9]{8})$/\`.

*Minh chứng ảnh chụp đính kèm: \`chrome_BUG03_Profile_PhoneRegex.png\`*`
  },
  {
    title: '[BUG-04] [Critical] [IA-02] Ô "Tổng tiền thanh toán" cho phép người dùng tự do nhập sửa giá tiền tùy ý',
    labels: ['bug', 'critical', 'IA-02', 'Checkout'],
    body: `### Mô tả lỗi
Tại màn hình Xác nhận đơn hàng (\`frontend-web/src/pages/Checkout.jsx\`, dòng 93–102), trường "Tổng tiền thanh toán (VND)" được render bằng thẻ input số cho phép người dùng tự gõ sửa:
\`\`\`jsx
<input
  type="number"
  value={editableTotal}
  onChange={(e) => {
    setEditableTotal(Number(e.target.value));
    setCouponResult(null);
    setCouponError('');
  }}
  className="border p-2 rounded text-red-600 font-bold"
/>
\`\`\`

### Hậu quả
- Người dùng có thể tự sửa số tiền từ \`4.000.000 ₫\` thành \`1.000 ₫\` hoặc số âm rồi bấm "Xác Nhận Thanh Toán" thành công.
- 100% người dùng trong đợt thử nghiệm Usability phát hiện và tuyên bố mất hoàn toàn lòng tin vào hệ thống thanh toán.

### Giải pháp khuyến nghị
Thêm thuộc tính \`readOnly\` hoặc chuyển trường này thành thẻ \`<span>\` hiển thị văn bản tĩnh.`
  },
  {
    title: '[BUG-13] [Critical] [IA-04] Nút Sửa Admin bị đơ và đổi tên toàn bộ sản phẩm trên bảng dữ liệu',
    labels: ['bug', 'critical', 'IA-04', 'Admin'],
    body: `### Mô tả lỗi
Tại trang Admin Quản lý sản phẩm (\`frontend-admin/src/App.jsx\`, dòng 110–114):
1. Nút "Sửa" đôi khi bị đơ không mở modal cập nhật.
2. Khi cập nhật sản phẩm thành công, code chạy:
\`\`\`javascript
const fakeMassUpdatedProducts = products.map((p) => ({
  ...p,
  name: productForm.name,
}));
setProducts(fakeMassUpdatedProducts);
\`\`\`

### Hậu quả
Toàn bộ sản phẩm trong danh sách Admin bị đổi tên hàng loạt thành tên của sản phẩm vừa sửa, phá hủy tính toàn vẹn của dữ liệu hiển thị.

### Giải pháp khuyến nghị
Cập nhật đúng sản phẩm có \`id === editingProduct.id\` thay vì map toàn bộ danh sách.`
  },
  {
    title: '[BUG-16] [Major] [IA-04] Nút "Thêm vào giỏ hàng" bắt buộc phải bấm 2 lần mới nhận lệnh',
    labels: ['bug', 'major', 'IA-04', 'ProductDetail', 'Usability'],
    body: `### Mô tả lỗi
Tại màn hình Chi tiết sản phẩm (\`frontend-web/src/pages/ProductDetail.jsx\`, dòng 21–31):
\`\`\`javascript
const handleAddToCart = () => {
  if (clickCount === 0) {
    setClickCount(1);
    return; // Bỏ qua lần click đầu tiên!
  }
  addToCart(product, parseInt(quantity));
  setAdded(true);
  setClickCount(0);
};
\`\`\`

### Hậu quả
Lần bấm đầu tiên của người dùng bị triệt tiêu hoàn toàn. 100% người dùng tham gia thử nghiệm khả dụng tưởng nút bấm bị liệt hoặc chuột hết pin.

### Giải pháp khuyến nghị
Xóa bỏ biến \`clickCount\` và hàm kiểm tra \`if (clickCount === 0) return;\`.`
  },
  {
    title: '[BUG-08] [Major] [IA-02] Bảng Giỏ hàng thiếu nút tăng/giảm số lượng sản phẩm (+/-)',
    labels: ['bug', 'major', 'IA-02', 'Cart'],
    body: `### Mô tả lỗi
Tại trang Giỏ hàng (\`frontend-web/src/pages/Cart.jsx\`), cột số lượng chỉ hiển thị văn bản tĩnh \`{item.quantity}\`, hoàn toàn không có nút tăng \`+\` hoặc giảm \`-\`.

### Hậu quả
Người dùng muốn đổi số lượng phải bấm xóa và quay lại trang chi tiết sản phẩm từ đầu.`
  },
  {
    title: '[BUG-14] [Major] [IA-04] Nút "Xóa" sản phẩm khỏi giỏ hàng không có hộp thoại xác nhận',
    labels: ['bug', 'major', 'IA-04', 'Cart'],
    body: `### Mô tả lỗi
Tại trang Giỏ hàng (\`frontend-web/src/pages/Cart.jsx\`), khi người dùng bấm nút "Xóa", hàm \`removeFromCart(index)\` được gọi tức thì mà không có hộp thoại hỏi lại \`window.confirm()\`.

### Hậu quả
Vi phạm nguyên tắc phòng ngừa lỗi của Nielsen (#5) và nguyên tắc An toàn hoàn tác của Shneiderman.`
  },
  {
    title: '[BUG-06] [Major] [IA-02] Form Đăng ký trên Mobile App thiếu trường Xác nhận mật khẩu (Confirm Password)',
    labels: ['bug', 'major', 'IA-02', 'Mobile'],
    body: `### Mô tả lỗi
Màn hình Đăng ký trong \`frontend-mobile/App.js\` chỉ có 3 trường: Họ tên, Email, Mật khẩu; hoàn toàn thiếu trường "Xác nhận mật khẩu" theo đặc tả FR-01/FR-20.`
  },
  {
    title: '[BUG-01] [Minor] [IA-01] Ký hiệu tiền tệ không đồng nhất giữa các màn hình (VND vs ₫)',
    labels: ['bug', 'minor', 'IA-01', 'UI-Standards'],
    body: `### Mô tả lỗi
Trang Giỏ hàng hiển thị ký hiệu \`₫\` (\`4.000.000 ₫\`), trong khi trang Checkout lại ghi nhãn \`Tổng tiền thanh toán (VND)\`. Vi phạm tính nhất quán giao diện (Nielsen #4).`
  }
];

function createIssue(issue) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      title: issue.title,
      body: issue.body,
      labels: issue.labels
    });

    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: `/repos/${REPO_OWNER}/${REPO_NAME}/issues`,
      method: 'POST',
      headers: {
        'User-Agent': 'NodeJS-Playwright-TestAgent',
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
        'Accept': 'application/vnd.github+json'
      }
    };

    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', chunk => body += chunk);
      res.on('end', () => {
        if (res.statusCode === 201) {
          const json = JSON.parse(body);
          resolve(json);
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${body}`));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function main() {
  console.log(`====================================================`);
  console.log(`GITHUB ISSUES AUTOMATION CREATOR`);
  console.log(`Target Repo: ${REPO_OWNER}/${REPO_NAME}`);
  console.log(`====================================================`);

  if (!TOKEN) {
    console.error(`\n❌ CHƯA CÓ GITHUB TOKEN!`);
    console.log(`Để tạo issue tự động qua API, bạn cần một Personal Access Token:`);
    console.log(`1. Vào: https://github.com/settings/tokens/new`);
    console.log(`2. Đặt Note: "HW03 Issues Automation"`);
    console.log(`3. Tích chọn quyền: [x] repo`);
    console.log(`4. Bấm "Generate token" và copy token.`);
    console.log(`5. Chạy lệnh:`);
    console.log(`   $env:GITHUB_TOKEN="token_cua_ban"`);
    console.log(`   node scripts/create_github_issues.js`);
    console.log(`\nHoặc bạn có thể tự tạo các issues mẫu trên web với nội dung trong HW03_Bug_Report.md!`);
    process.exit(1);
  }

  console.log(`\nĐang tạo ${BUGS.length} issues tự động lên GitHub...`);
  for (let i = 0; i < BUGS.length; i++) {
    const bug = BUGS[i];
    try {
      const res = await createIssue(bug);
      console.log(`  ✅ [${i + 1}/${BUGS.length}] Tạo thành công Issue #${res.number}: ${res.title}`);
      console.log(`     Link: ${res.html_url}`);
    } catch (err) {
      console.error(`  ❌ [${i + 1}/${BUGS.length}] Lỗi tạo issue "${bug.title}":`, err.message);
    }
  }

  console.log(`\n🎉 HOÀN TẤT TẠO GITHUB ISSUES!`);
  console.log(`Xem danh sách tại: https://github.com/${REPO_OWNER}/${REPO_NAME}/issues`);
}

main().catch(console.error);
