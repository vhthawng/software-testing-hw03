let playwright;
try {
  playwright = require('playwright');
} catch (e) {
  playwright = require('../skills/playwright-skill/node_modules/playwright');
}
const { chromium } = playwright;
const path = require('path');
const fs = require('fs');

async function capture() {
  const browser = await chromium.launch({ headless: true });
  
  const rawDir = path.resolve(__dirname, '..', 'screenshots', 'raw');
  const chromeDir = path.join(rawDir, 'chrome');
  const mobileDir = path.join(rawDir, 'mobile');
  fs.mkdirSync(chromeDir, { recursive: true });
  fs.mkdirSync(mobileDir, { recursive: true });

  // 1. Desktop context
  const desktopContext = await browser.newContext({
    viewport: { width: 1440, height: 900 }
  });
  const page = await desktopContext.newPage();

  // BUG-13: Admin Product Management
  try {
    console.log('Capturing BUG-13 Admin...');
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle', timeout: 8000 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(chromeDir, 'chrome_BUG13_Admin_MassRename.png'), fullPage: false });
    console.log('Saved BUG-13');
  } catch (e) {
    console.error('Error BUG-13:', e.message);
  }

  // BUG-16: Product Detail double click
  try {
    console.log('Capturing BUG-16 Product Detail...');
    await page.goto('http://localhost:5173/product/1', { waitUntil: 'networkidle', timeout: 8000 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(chromeDir, 'chrome_BUG16_ProductDetail_DoubleAdd.png'), fullPage: false });
    console.log('Saved BUG-16');
  } catch (e) {
    console.error('Error BUG-16:', e.message);
  }

  // BUG-14: Cart delete without confirmation
  try {
    console.log('Capturing BUG-14 Cart...');
    // Seed cart in localStorage
    await page.evaluate(() => {
      localStorage.setItem('cart', JSON.stringify([
        { id: 1, name: 'Bàn phím cơ DareU EK87 Multi LED', price: 650000, quantity: 2, image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500' }
      ]));
    });
    await page.goto('http://localhost:5173/cart', { waitUntil: 'networkidle', timeout: 8000 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(chromeDir, 'chrome_BUG14_Cart_DeleteNoConfirm.png'), fullPage: false });
    console.log('Saved BUG-14');
  } catch (e) {
    console.error('Error BUG-14:', e.message);
  }

  // BUG-01: Currency Inconsistency (Checkout)
  try {
    console.log('Capturing BUG-01 Checkout Currency...');
    await page.goto('http://localhost:5173/checkout', { waitUntil: 'networkidle', timeout: 8000 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(chromeDir, 'chrome_BUG01_Checkout_Currency.png'), fullPage: false });
    console.log('Saved BUG-01');
  } catch (e) {
    console.error('Error BUG-01:', e.message);
  }

  await desktopContext.close();

  // 2. Mobile context (Samsung Galaxy A52)
  const mobileContext = await browser.newContext({
    viewport: { width: 412, height: 915 },
    userAgent: 'Mozilla/5.0 (Linux; Android 12; SM-A525F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36',
    isMobile: true,
    hasTouch: true
  });
  const mobilePage = await mobileContext.newPage();

  // BUG-06: Register form missing confirm password
  try {
    console.log('Capturing BUG-06 Mobile Register...');
    await mobilePage.goto('http://localhost:5173/register', { waitUntil: 'networkidle', timeout: 8000 });
    await mobilePage.waitForTimeout(1000);
    await mobilePage.screenshot({ path: path.join(mobileDir, 'mobile_BUG06_Register_MissingConfirm.png'), fullPage: false });
    console.log('Saved BUG-06');
  } catch (e) {
    console.error('Error BUG-06:', e.message);
  }

  await mobileContext.close();
  await browser.close();
  console.log('Finished capturing all missing screenshots!');
}

capture().catch(console.error);
