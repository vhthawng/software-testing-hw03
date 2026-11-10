const fs = require('fs');
const cp = require('child_process');
const manifest = JSON.parse(cp.execFileSync(process.execPath, [require('path').join(__dirname, 'submission_manifest.cjs')], { encoding: 'utf8' }));
const pattern = /(?<![\p{L}\p{N}_])(?:[A-Za-z]:[\\/]|file:\/\/\/|\/mnt\/[a-z]\/|\/Users\/|\/home\/)/gu;
let count = 0;
for (const file of manifest.files.filter(f => /\.(md|json|csv|cjs|ps1|sh|js)$/.test(f))) {
  const text = fs.readFileSync(require('path').join(manifest.root, file), 'utf8');
  const lines = text.split('\n');
  const found = lines.flatMap((line, i) => { pattern.lastIndex = 0; return pattern.test(line) ? [i + 1] : []; });
  if (found.length) { console.log(JSON.stringify({ file, lines: found })); count += found.length; }
}
console.log('Absolute-path lines: ' + count);
if (count) process.exitCode = 1;
