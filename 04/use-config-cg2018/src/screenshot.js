const puppeteer = require('puppeteer');
puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.goto('https://www.google.co.jp/search?q=eslint+plugin&oq=eslint+plugin');
  await page.screenshot({ path: 'screen_shot.png' });
  await browser.close();
});
