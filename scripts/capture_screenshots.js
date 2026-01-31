
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const projects = [
  { id: 'picckr', url: 'https://picckr.com', output: 'picckr.png' },
  { id: 'picckr-business', url: 'https://business.picckr.com', output: 'picckr-business.png' },
  { id: 'gradific', url: 'https://gradific.com', output: 'gradific.png' }
];

async function captureScreenshots() {
  console.log('Starting screenshot capture...');
  const browser = await puppeteer.launch({
    headless: "new",
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--window-size=1280,800']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 800 });

  const publicDir = path.join(__dirname, '..', 'public');
  if (!fs.existsSync(publicDir)) {
    console.log('Creating public directory...');
    fs.mkdirSync(publicDir, { recursive: true });
  }

  for (const project of projects) {
    console.log(`Capturing ${project.url} for ${project.id}...`);
    try {
      await page.goto(project.url, { waitUntil: 'networkidle2', timeout: 30000 });
      // Enhance visual if needed or simply take screenshot
      const outputPath = path.join(publicDir, project.output);
      await page.screenshot({ path: outputPath });
      console.log(`Saved to ${outputPath}`);
    } catch (error) {
      console.error(`Failed to capture ${project.url}: ${error.message}`);
      // If live site fails, we might want to generate a placeholder or keep existing
      // For now, just log error.
    }
  }

  await browser.close();
  console.log('Done.');
}

captureScreenshots();
