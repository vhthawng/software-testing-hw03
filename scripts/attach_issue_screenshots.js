const https = require('https');

const REPO_OWNER = 'vhthawng';
const REPO_NAME = 'software-testing-hw03';
const TOKEN = process.env.GITHUB_TOKEN;

if (!TOKEN) {
  console.error('Missing GITHUB_TOKEN environment variable');
  process.exit(1);
}

const COMMENTS = [
  {
    issue: 3,
    bug: 'BUG-13',
    title: 'Nút Sửa Admin bị đơ và đổi tên toàn bộ sản phẩm trên bảng dữ liệu',
    image: 'https://raw.githubusercontent.com/vhthawng/software-testing-hw03/main/screenshots/watermarked/chrome_BUG13_Admin_MassRename.png'
  },
  {
    issue: 4,
    bug: 'BUG-16',
    title: 'Nút "Thêm vào giỏ hàng" bắt buộc phải bấm 2 lần mới nhận lệnh',
    image: 'https://raw.githubusercontent.com/vhthawng/software-testing-hw03/main/screenshots/watermarked/chrome_BUG16_ProductDetail_DoubleAdd.png'
  },
  {
    issue: 6,
    bug: 'BUG-14',
    title: 'Nút "Xóa" sản phẩm khỏi giỏ hàng không có hộp thoại xác nhận',
    image: 'https://raw.githubusercontent.com/vhthawng/software-testing-hw03/main/screenshots/watermarked/chrome_BUG14_Cart_DeleteNoConfirm.png'
  },
  {
    issue: 7,
    bug: 'BUG-06',
    title: 'Form Đăng ký trên Mobile App thiếu trường Xác nhận mật khẩu',
    image: 'https://raw.githubusercontent.com/vhthawng/software-testing-hw03/main/screenshots/watermarked/mobile_BUG06_Register_MissingConfirm.png'
  },
  {
    issue: 8,
    bug: 'BUG-01',
    title: 'Ký hiệu tiền tệ không đồng nhất giữa các màn hình (VND vs ₫)',
    image: 'https://raw.githubusercontent.com/vhthawng/software-testing-hw03/main/screenshots/watermarked/chrome_BUG01_Checkout_Currency.png'
  }
];

function postComment(issueNumber, body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({ body });
    const options = {
      hostname: 'api.github.com',
      port: 443,
      path: `/repos/${REPO_OWNER}/${REPO_NAME}/issues/${issueNumber}/comments`,
      method: 'POST',
      headers: {
        'User-Agent': 'NodeJS-IssueCommenter',
        'Authorization': `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(data),
        'Accept': 'application/vnd.github+json'
      }
    };

    const req = https.request(options, (res) => {
      let resBody = '';
      res.on('data', chunk => resBody += chunk);
      res.on('end', () => {
        if (res.statusCode === 201) {
          resolve(JSON.parse(resBody));
        } else {
          reject(new Error(`HTTP ${res.statusCode}: ${resBody}`));
        }
      });
    });

    req.on('error', reject);
    req.write(data);
    req.end();
  });
}

async function run() {
  for (const c of COMMENTS) {
    const bodyText = `### Minh chứng lỗi (Đã đóng dấu Watermark)\n\n![${c.bug}](${c.image})\n\n*Hình ảnh kiểm chứng độc lập trên hệ thống SUT (EShop) — Đã đóng dấu watermark MSSV 23120355 - Võ Hữu Thắng.*`;
    try {
      const res = await postComment(c.issue, bodyText);
      console.log(`✅ Đã thêm ảnh thành công cho Issue #${c.issue} (${c.bug})`);
    } catch (e) {
      console.error(`❌ Thất bại trên Issue #${c.issue}:`, e.message);
    }
  }
}

run();
