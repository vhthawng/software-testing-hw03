#!/usr/bin/env node
/**
 * Automated Cross-Platform / Cross-Browser Testing Suite using Playwright.
 * Applies skills/playwright-skill concepts to test EShop SUT across 3 platforms:
 *   1. Platform 1: Google Chrome (Blink Engine, Desktop 1920x1080)
 *   2. Platform 2: Mozilla Firefox (Gecko Engine, Desktop 1920x1080)
 *   3. Platform 3: Mobile Samsung Galaxy A52 (Blink Engine, Mobile Viewport 412x915, Touch enabled)
 * 
 * Student info:
 *   Võ Hữu Thắng - MSSV: 23120355 - Email: 23120355@student.hcmus.edu.vn
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
const { chromium, firefox } = require('playwright');

const BASE_URL = process.env.BASE_URL || 'http://localhost:5173';
const STUDENT_NAME = 'Võ Hữu Thắng';
const STUDENT_ID = '23120355';
const STUDENT_EMAIL = '23120355@student.hcmus.edu.vn';

const RAW_DIR = path.resolve(__dirname, '..', 'screenshots', 'raw');
const WATERMARKED_DIR = path.resolve(__dirname, '..', 'screenshots', 'watermarked');

// Ensure directories exist
fs.mkdirSync(path.join(RAW_DIR, 'chrome'), { recursive: true });
fs.mkdirSync(path.join(RAW_DIR, 'firefox'), { recursive: true });
fs.mkdirSync(path.join(RAW_DIR, 'mobile'), { recursive: true });
fs.mkdirSync(WATERMARKED_DIR, { recursive: true });

const PLATFORMS = [
  {
    name: 'chrome',
    title: 'Google Chrome (Desktop Blink 1920x1080)',
    launch: async () => chromium.launch({ headless: true }),
    contextOptions: {
      viewport: { width: 1920, height: 1080 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
    }
  },
  {
    name: 'firefox',
    title: 'Mozilla Firefox (Desktop Gecko 1920x1080)',
    launch: async () => firefox.launch({ headless: true }),
    contextOptions: {
      viewport: { width: 1920, height: 1080 },
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:120.0) Gecko/20100101 Firefox/120.0'
    }
  },
  {
    name: 'mobile',
    title: 'Samsung Galaxy A52 (Mobile Chrome 412x915 Touch)',
    launch: async () => chromium.launch({ headless: true }),
    contextOptions: {
      viewport: { width: 412, height: 915 },
      deviceScaleFactor: 2.625,
      isMobile: true,
      hasTouch: true,
      userAgent: 'Mozilla/5.0 (Linux; Android 13; SM-A525F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
    }
  }
];

async function runTestsOnPlatform(platform) {
  console.log(`\n==========================================================`);
  console.log(`🚀 STARTING TESTS ON: ${platform.title}`);
  console.log(`==========================================================`);

  const browser = await platform.launch();
  const context = await browser.newContext(platform.contextOptions);
  const page = await context.newPage();

  // Handle any alert dialogs automatically so test doesn't freeze
  page.on('dialog', async (dialog) => {
    console.log(`  🔔 [${platform.name}] Alert Dialog: "${dialog.message()}"`);
    await dialog.accept();
  });

  const outDir = path.join(RAW_DIR, platform.name);

  try {
    // -------------------------------------------------------------------------
    // Step 1: Login
    // -------------------------------------------------------------------------
    console.log(`\n[${platform.name}] Step 1: Navigating to Login...`);
    await page.goto(`${BASE_URL}/login`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(500);

    const inputs = await page.$$('input');
    if (inputs.length >= 2) {
      await inputs[0].fill('test@eshop.com');
      await inputs[1].fill('Test1234!');
    }
    await page.click('button[type="submit"]');
    await page.waitForTimeout(1000);

    // -------------------------------------------------------------------------
    // Step 2: Add Product to Cart & Cart Screen (BUG-16 & BUG-08)
    // -------------------------------------------------------------------------
    console.log(`[${platform.name}] Step 2: Navigating to Product Detail & Adding to Cart...`);
    await page.goto(`${BASE_URL}/product/1`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(600);

    // BUG-16: Must click twice to add to cart
    const addToCartBtn = page.locator('button:has-text("Thêm vào giỏ")');
    if (await addToCartBtn.count() > 0) {
      await addToCartBtn.click(); // Click 1 (swallowed by clickCount === 0)
      await page.waitForTimeout(300);
      await addToCartBtn.click(); // Click 2 (actually adds)
      await page.waitForTimeout(600);
    }

    console.log(`[${platform.name}] Step 3: Navigating to Cart...`);
    await page.goto(`${BASE_URL}/cart`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(800);

    const shotCart = path.join(outDir, `${platform.name}_BUG08_Cart_NoQuantityControl.png`);
    await page.screenshot({ path: shotCart, fullPage: true });
    console.log(`  📸 Screenshot saved: ${path.basename(shotCart)}`);

    // -------------------------------------------------------------------------
    // Step 3: Checkout Screen & Editable Total (BUG-04 & BUG-01)
    // -------------------------------------------------------------------------
    console.log(`[${platform.name}] Step 4: Navigating to Checkout...`);
    await page.goto(`${BASE_URL}/checkout`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(800);

    // Apply coupon SAVE10 to show coupon interaction
    const couponInput = page.locator('input[placeholder*="mã giảm giá"]');
    if (await couponInput.count() > 0) {
      await couponInput.fill('SAVE10');
      const applyBtn = page.locator('button:has-text("Áp dụng")');
      if (await applyBtn.count() > 0) {
        await applyBtn.click();
        await page.waitForTimeout(600);
      }
    }

    // Focus on the editable total input
    const totalInput = page.locator('input[type="number"]');
    if (await totalInput.count() > 0) {
      await totalInput.focus();
    }

    const shotCheckout = path.join(outDir, `${platform.name}_BUG04_Checkout_EditableTotal.png`);
    await page.screenshot({ path: shotCheckout, fullPage: true });
    console.log(`  📸 Screenshot saved: ${path.basename(shotCheckout)}`);

    // -------------------------------------------------------------------------
    // Step 4: Profile Screen & Phone Validation Regex Bug (BUG-03)
    // -------------------------------------------------------------------------
    console.log(`[${platform.name}] Step 5: Navigating to Profile to test BUG-03...`);
    await page.goto(`${BASE_URL}/profile`, { waitUntil: 'domcontentloaded' });
    await page.waitForTimeout(800);

    // Fill Name with student name & MSSV
    const nameInput = page.locator('input[required]');
    if (await nameInput.count() > 0) {
      await nameInput.fill(`${STUDENT_NAME} - ${STUDENT_ID}`);
    }

    // Fill Phone with valid VN number starting with 0
    const phoneInput = page.locator('input[placeholder*="0912345678"]');
    if (await phoneInput.count() > 0) {
      await phoneInput.fill('0912345678');
    }

    // Click submit button in profile (triggers alert regex bug)
    const saveBtn = page.locator('button:has-text("Lưu Thay Đổi")');
    if (await saveBtn.count() > 0) {
      await saveBtn.click();
      await page.waitForTimeout(600);
    }

    const shotProfile = path.join(outDir, `${platform.name}_BUG03_Profile_PhoneRegex.png`);
    await page.screenshot({ path: shotProfile, fullPage: true });
    console.log(`  📸 Screenshot saved: ${path.basename(shotProfile)}`);

    console.log(`✅ [${platform.name}] Completed all scenarios successfully!`);
  } catch (err) {
    console.error(`❌ Error on ${platform.name}:`, err.message);
  } finally {
    await browser.close();
  }
}

async function main() {
  console.log(`==========================================================`);
  console.log(` AUTOMATED CROSS-PLATFORM TESTING SUITE (PLAYWRIGHT)`);
  console.log(` Student: ${STUDENT_NAME} (${STUDENT_ID}) | ${STUDENT_EMAIL}`);
  console.log(` Target SUT: ${BASE_URL}`);
  console.log(`==========================================================`);

  for (const platform of PLATFORMS) {
    await runTestsOnPlatform(platform);
  }

  // Copy raw screenshots to watermarked directory for stamping
  console.log(`\n----------------------------------------------------------`);
  console.log(`📦 Copying screenshots to watermarked directory...`);
  const rawFiles = [];
  for (const platform of PLATFORMS) {
    const dir = path.join(RAW_DIR, platform.name);
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const src = path.join(dir, f);
      const dest = path.join(WATERMARKED_DIR, f);
      fs.copyFileSync(src, dest);
      rawFiles.push(dest);
    }
  }
  console.log(`Copied ${rawFiles.length} files to ${WATERMARKED_DIR}`);

  // Run watermark PowerShell script
  const psScript = path.resolve(__dirname, '..', 'skills', 'gui-usability-testing', 'scripts', 'watermark_screenshot.ps1');
  console.log(`\n🎨 Applying Student Watermark Overlay...`);
  try {
    const cmd = `powershell -ExecutionPolicy Bypass -File "${psScript}" -ImageFolder "${WATERMARKED_DIR}" -Email "${STUDENT_EMAIL}" -StudentId "${STUDENT_ID}" -Name "Vo Huu Thang"`;
    const res = execSync(cmd, { encoding: 'utf-8' });
    console.log(res);
  } catch (psErr) {
    console.error('Watermark script error:', psErr.message);
  }

  console.log(`==========================================================`);
  console.log(`🎉 ALL CROSS-PLATFORM TESTS & WATERMARKS COMPLETED!`);
  console.log(`   Raw Evidence:         ${RAW_DIR}`);
  console.log(`   Watermarked Evidence: ${WATERMARKED_DIR}`);
  console.log(`==========================================================`);
}

main().catch(console.error);
