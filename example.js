const fs = require('fs');
const { pdqhash, pdqhashBuffer, pdqhashWithQuality, hammingDistance } = require('./');

const img1 = process.argv[2] || 'one.jpg';
const img2 = process.argv[3] || 'two.jpg';

function safeRead(p) {
  try {
    return fs.readFileSync(p);
  } catch {
    return null;
  }
}

const buf1 = safeRead(img1);
if (!buf1) {
  console.error(`Missing or unreadable image: ${img1}`);
  process.exit(1);
}

console.log(`pdqhash (hex):`, pdqhash(buf1));
const hbuf1 = pdqhashBuffer(buf1);

console.log(`pdqhashBuffer:`, hbuf1);
console.log('pdqhashWithQuality:', pdqhashWithQuality(buf1));


const buf2 = safeRead(img2);
if (buf2) {
  const hbuf2 = pdqhashBuffer(buf2);
  if (hbuf1 && hbuf2) {
    console.log('hammingDistance(image1, image2):', hammingDistance(hbuf1, hbuf2));
  } 
}
