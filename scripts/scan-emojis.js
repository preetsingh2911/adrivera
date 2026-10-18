const fs = require('fs');
const path = require('path');

// Comprehensive Unicode regex for all standard emoji ranges
const emojiRegex = /[\u{1F300}-\u{1F5FF}\u{1F600}-\u{1F64F}\u{1F680}-\u{1F6FF}\u{1F700}-\u{1F77F}\u{1F780}-\u{1F7FF}\u{1F800}-\u{1F8FF}\u{1F900}-\u{1F9FF}\u{1FA00}-\u{1FA6F}\u{1FA70}-\u{1FAFF}\u{2600}-\u{26FF}\u{2700}-\u{27BF}\u{2300}-\u{23FF}\u{2B50}\u{2B55}\u{200D}\u{FE0F}]/u;

let foundCount = 0;

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  const files = fs.readdirSync(dir);
  for (const f of files) {
    const full = path.join(dir, f);
    if (f === 'node_modules' || f === '.next' || f === '.git' || f === 'out') continue;
    if (fs.statSync(full).isDirectory()) {
      scanDir(full);
    } else if (/\.(tsx?|jsx?|json|css|html|md)$/.test(f)) {
      const content = fs.readFileSync(full, 'utf8');
      const lines = content.split('\n');
      lines.forEach((line, idx) => {
        if (emojiRegex.test(line)) {
          console.log('EMOJI FOUND in ' + full + ' at line ' + (idx + 1) + ': ' + line.trim());
          foundCount++;
        }
      });
    }
  }
}

console.log('Starting emoji scan across src, public, docs...');
scanDir(path.join(__dirname, '..', 'src'));
scanDir(path.join(__dirname, '..', 'public'));
scanDir(path.join(__dirname, '..', 'docs'));
console.log('Scan completed. Total emoji occurrences found: ' + foundCount);
