const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, '../public/assets/prescron-icon.png');
const outputPath = path.join(__dirname, '../public/favicon.png');

sharp(inputPath)
  .trim() // Removes all transparent whitespace around the actual logo
  .resize(192, 192, {
    fit: 'contain',
    background: { r: 0, g: 0, b: 0, alpha: 0 } // ensure transparent padding if it's not a perfect square
  })
  .toFile(outputPath)
  .then(info => {
    console.log('Successfully trimmed and resized favicon:', info);
  })
  .catch(err => {
    console.error('Error generating favicon:', err);
  });
