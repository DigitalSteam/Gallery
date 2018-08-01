

const puppeteer = require('puppeteer');
const pageUrl = 'http://localhost:8080/';


let page;
let browser;
const width = 1280;
const height = 720;

beforeAll(async () => {
  browser = await puppeteer.launch({
    headless: true,
    slowMo: 80,
    args: [`--window-size=${width},${height}`]
  });
  page = await browser.newPage();
  await page.setViewport({ width, height });
});
afterAll(() => {
  browser.close();
});


describe('initial test', () => {
	test('initial title is correct', () => {

	});
});



