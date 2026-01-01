#!/usr/bin/env node

/**
 * Convert SVG files to PNG images
 * Usage: node scripts/svg-to-png.js <input-svg> <output-png> [width] [height]
 */

const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

async function convertSvgToPng(inputPath, outputPath, width = 1200, height = 800) {
  try {
    const svgBuffer = fs.readFileSync(inputPath);
    
    await sharp(svgBuffer)
      .resize(width, height, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(outputPath);
    
    console.log(`✓ Converted ${inputPath} to ${outputPath} (${width}x${height})`);
  } catch (error) {
    console.error(`✗ Error converting ${inputPath}:`, error.message);
    process.exit(1);
  }
}

// Main execution
const args = process.argv.slice(2);
if (args.length < 2) {
  console.error('Usage: node svg-to-png.js <input-svg> <output-png> [width] [height]');
  process.exit(1);
}

const inputPath = args[0];
const outputPath = args[1];
const width = args[2] ? parseInt(args[2]) : 1200;
const height = args[3] ? parseInt(args[3]) : 800;

convertSvgToPng(inputPath, outputPath, width, height);

