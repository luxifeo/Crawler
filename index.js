const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://24h.com.vn');
  const title = await page.evaluate(() => {
    let header = document.querySelectorAll('.nwsTit');
    header = [...header];
    let article = header.map(item => item.innerText);
    return article;
  });

  console.log(title);
  await browser.close();
})();