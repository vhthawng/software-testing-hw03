const fs = require('fs');
const path = require('path');
const root = path.resolve(__dirname, '..');
const files = new Set();
const missing = new Set();
const blocked = /(^|\/)(node_modules|\.git|\.review_submission|local-runtime)(\/|$)|screenshots\/manual\/01\.|\.(sqlite|db|zip|log)$/i;
const internalOnly = /^(?:scripts\/|skills\/playwright-skill(?:\/|$)|submission\.config\.json$)/;
const full = p => path.resolve(root, p);
function add(p) {
  p = p.replaceAll('\\', '/').replace(/^\.\//, '');
  const abs = full(p);
  if (!abs.startsWith(root + path.sep) || blocked.test(p) || internalOnly.test(p)) throw Error('Excluded submission path: ' + p);
  if (!fs.existsSync(abs)) { missing.add(p); return; }
  if (fs.lstatSync(abs).isSymbolicLink()) throw Error('Symlink not allowed: ' + p);
  if (fs.statSync(abs).isDirectory()) {
    for (const entry of fs.readdirSync(abs)) {
      const child = p + '/' + entry;
      if (!blocked.test(child)) add(child);
    }
  } else files.add(p);
}
const required = [
  'README.md', 'HW03_Main_Report.md', 'HW03_Main_Report.pdf',
  'HW03_AI_Audit_Report.md', 'HW03_AI_Audit_Report.pdf', 'HW03_AI_Audit_Addendum.md',
  'HW03_Bug_Report.md', 'HW03_Cross_Platform_Report.md',
  'HW03_Cross_Platform_Matrix.xlsx', 'HW03_Cross_Platform_Matrix.csv',
  'HW03_Usability_Evaluation_Report.md', 'HW03_Usability_Plan_and_Instruments.md',
  'HW03_GUI_Checklist.xlsx', 'HW03_GUI_Checklist.csv', 'HW03_GUI_Checklist_Summary.md',
  'HW03_SUS_Report.md', 'git_commit_log.txt', 'checklist_data.json', 'sus_participants.json',
  'interview.md', 'audit/chat-history.md', 'audit/chat-history.json',
  'skills/gui-usability-testing',
  'task3-runs/2026-11-11-local/matrix.json',
  'task3-runs/2026-11-11-local/android/watermark-manifest.json',
  'task1-runs/mobile-manual/student-confirmations.json'
];
required.forEach(add);
// Include references transitively; archive chat quotes are preserved as historical text.
const scanned = new Set();
while (true) {
  const pending = [...files].filter(p => /\.(md|json)$/i.test(p) && !scanned.has(p) && !p.startsWith('audit/'));
  if (!pending.length) break;
  for (const p of pending) {
    scanned.add(p);
    const text = fs.readFileSync(full(p), 'utf8');
    if (p.endsWith('.md')) {
      for (const m of text.matchAll(/!?\[[^\]\n]*\]\(([^)\n]+)\)/g)) {
        const target = m[1].replace(/^<|>$/g, '').split('#')[0];
        if (!target || /^(https?:|mailto:|plugin:|app:)/i.test(target)) continue;
        const relative = path.relative(root, path.resolve(path.dirname(full(p)), decodeURIComponent(target))).replaceAll('\\', '/');
        add(relative);
      }
    }
    // Evidence filenames in Notes/JSON/tables, including paths without Markdown links.
    for (const m of text.matchAll(/(?:task[13]-runs|screenshots)\/[A-Za-z0-9_./-]+\.(?:png|jpe?g|json|csv|md)\b/gi)) {
      if (!blocked.test(m[0])) add(m[0]);
    }
  }
}
const cfg = JSON.parse(fs.readFileSync(full('submission.config.json'), 'utf8'));
const maxima = { task1: 30, task2: 40, task3: 20, skills: 10 };
let grade = 0;
for (const [key, max] of Object.entries(maxima)) {
  const value = cfg.selfAssessment[key];
  if (!Number.isInteger(value) || value < 0 || value > max) throw Error('Invalid self-assessment: ' + key);
  grade += value;
}
if (!/^\d{8}$/.test(cfg.studentId)) throw Error('Invalid student ID');
const stalePdfs = [];
const mainSources = required.filter(p => /\.md$/.test(p) && !p.startsWith('scripts/') && !/AI_Audit|audit\//.test(p));
const groups = {
  'HW03_Main_Report.pdf': [...mainSources, 'checklist_data.json', 'sus_participants.json', 'HW03_Cross_Platform_Matrix.xlsx'],
  'HW03_AI_Audit_Report.pdf': ['HW03_AI_Audit_Report.md', 'HW03_AI_Audit_Addendum.md', 'audit/chat-history.md', 'audit/chat-history.json']
};
for (const [pdf, sources] of Object.entries(groups)) {
  if (fs.existsSync(full(pdf)) && sources.some(p => fs.existsSync(full(p)) && fs.statSync(full(p)).mtimeMs > fs.statSync(full(pdf)).mtimeMs)) stalePdfs.push(pdf);
}
const result = {
  root, filename: `${cfg.studentId}_HW03_AI_GUIUsability_${String(grade).padStart(3, '0')}.zip`,
  grade, files: [...files].sort(), missing: [...missing].sort(), stalePdfs,
  bytes: [...files].reduce((sum, p) => sum + fs.statSync(full(p)).size, 0)
};
process.stdout.write(JSON.stringify(result, null, 2));
if (missing.size) process.exitCode = 1;
