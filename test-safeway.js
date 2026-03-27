// test-safeway.js
// Automated test for loading safeway.com using Node.js and Puppeteer

import puppeteer from 'puppeteer';

async function testSafewayLoad() {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://www.safeway.com');
    const title = await page.title();
    const loaded = title && title.toLowerCase().includes('safeway');
    console.log(loaded ? 'PASS: Safeway page loaded.' : 'FAIL: Safeway page not loaded.');
    await browser.close();
    return loaded;
}

// Run the test
if (require.main === module) {
    testSafewayLoad().catch(err => {
        console.error('FAIL: Error loading Safeway page.', err);
        process.exit(1);
    });
}

export default testSafewayLoad;
