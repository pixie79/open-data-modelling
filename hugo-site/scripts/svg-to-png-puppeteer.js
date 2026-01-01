#!/usr/bin/env node

/**
 * Convert SVG files to PNG images using Puppeteer (headless browser)
 * Usage: node scripts/svg-to-png-puppeteer.js <input-svg> <output-png> [width] [height]
 */

const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

async function convertSvgToPng(inputPath, outputPath, width = 1200, height = 800) {
  try {
    const svgContent = fs.readFileSync(inputPath, 'utf8');
    const svgBase64 = Buffer.from(svgContent).toString('base64');
    
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Set viewport size
    await page.setViewport({ width, height });
    
    // Create HTML with embedded SVG
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              margin: 0;
              padding: 0;
              background: white;
            }
            svg {
              display: block;
            }
          </style>
        </head>
        <body>
          ${svgContent}
        </body>
      </html>
    `;
    
    await page.setContent(html, { waitUntil: 'networkidle0' });
    
    // Take screenshot
    await page.screenshot({
      path: outputPath,
      width: width,
      height: height,
      clip: {
        x: 0,
        y: 0,
        width: width,
        height: height
      }
    });
    
    await browser.close();
    
    console.log(`✓ Converted ${inputPath} to ${outputPath} (${width}x${height})`);
  } catch (error) {
    console.error(`✗ Error converting ${inputPath}:`, error.message);
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node svg-to-png-puppeteer.js <input-svg> <output-png> [width] [height]');
  process.exit(1);
}

const inputPath = args[0];
const outputPath = args[1];
const width = args[2] ? parseInt(args[2]) : 1200;
const height = args[3] ? parseInt(args[3]) : 800;

convertSvgToPng(inputPath, outputPath, width, height);

