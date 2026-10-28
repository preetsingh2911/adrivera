const fs = require('fs');
const path = require('path');

function createIcoFromPngs(pngPaths, outputPath) {
  const images = pngPaths.map((p) => {
    const data = fs.readFileSync(p);
    // Read dimensions from PNG IHDR chunk
    const width = data.readUInt32BE(16);
    const height = data.readUInt32BE(20);
    return { data, width, height };
  });

  const headerSize = 6;
  const dirEntrySize = 16;
  const numImages = images.length;
  let offset = headerSize + dirEntrySize * numImages;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // Reserved
  header.writeUInt16LE(1, 2); // ICO type
  header.writeUInt16LE(numImages, 4);

  const dirEntries = [];
  for (const img of images) {
    const entry = Buffer.alloc(dirEntrySize);
    entry.writeUInt8(img.width >= 256 ? 0 : img.width, 0);
    entry.writeUInt8(img.height >= 256 ? 0 : img.height, 1);
    entry.writeUInt8(0, 2); // color palette count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(img.data.length, 8); // size
    entry.writeUInt32LE(offset, 12); // offset
    dirEntries.push(entry);
    offset += img.data.length;
  }

  const output = Buffer.concat([
    header,
    ...dirEntries,
    ...images.map((img) => img.data),
  ]);

  fs.writeFileSync(outputPath, output);
  console.log(`Successfully generated ${outputPath} with ${numImages} icon resolutions (16x16, 32x32, 48x48).`);
}

createIcoFromPngs(
  [
    path.join(__dirname, '../public/favicon-16x16.png'),
    path.join(__dirname, '../public/favicon-32x32.png'),
    path.join(__dirname, '../public/favicon-48x48.png'),
  ],
  path.join(__dirname, '../public/favicon.ico')
);
