const { chromium, firefox, webkit, devices } = require('playwright');

(async () => {
  console.log('Testing Playwright Browsers & Mobile Devices...');

  try {
    const b1 = await chromium.launch({ channel: 'chrome', headless: true });
    console.log('1. Google Chrome (Desktop): OK');
    await b1.close();
  } catch (err) {
    console.log('1. Google Chrome (Desktop): FAILED -', err.message);
  }

  try {
    const b2 = await firefox.launch({ headless: true });
    console.log('2. Mozilla Firefox (Desktop): OK');
    await b2.close();
  } catch (err) {
    console.log('2. Mozilla Firefox (Desktop): FAILED -', err.message);
  }

  try {
    const b3 = await webkit.launch({ headless: true });
    console.log('3. Safari / WebKit (Desktop/Mobile): OK');
    await b3.close();
  } catch (err) {
    console.log('3. Safari / WebKit (Desktop/Mobile): FAILED -', err.message);
  }

  try {
    const b4 = await chromium.launch({ headless: true });
    const context = await b4.newContext({
      ...devices['Galaxy S9+'],
      locale: 'vi-VN'
    });
    console.log('4. Mobile Samsung Galaxy Emulation: OK');
    await b4.close();
  } catch (err) {
    console.log('4. Mobile Samsung Galaxy Emulation: FAILED -', err.message);
  }
})();


