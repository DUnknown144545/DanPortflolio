const Jimp = require('jimp');
const fs = require('fs');
const path = require('path');

const arg = process.argv[2];
const candidates = [arg, 'avatar.jpg', 'avatar-upload.jpg', 'profile-upload.jpg'].filter(Boolean);
let input;
for (const c of candidates) {
  if (!c) continue;
  if (fs.existsSync(c)) { input = c; break; }
}

if (!input) {
  console.error('\nNo input image found. Save your photo in the project root as `avatar.jpg` or `avatar-upload.jpg`, or run:\n\n  npm run resize-avatar -- path/to/your-file.jpg\n');
  process.exit(1);
}

const outDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });
const out = path.join(outDir, 'profile.jpg');

Jimp.read(input)
  .then(image => {
    const size = Math.min(image.getWidth(), image.getHeight());
    const x = Math.floor((image.getWidth() - size) / 2);
    const y = Math.floor((image.getHeight() - size) / 2);
    return image
      .crop(x, y, size, size)
      .resize(400, 400)
      .quality(85)
      .writeAsync(out);
  })
  .then(() => console.log(`Saved resized avatar to ${out}`))
  .catch(err => {
    console.error('Failed to resize image:', err);
    process.exit(1);
  });
