const fs = require('fs'), path = require('path'), { spawnSync } = require('child_process');
const root = path.resolve(__dirname, '..');
const repo = 'vhthawng/software-testing-hw03', branch = 'codex/hw03-reports-20261111';
const files = [
  'README.md', 'HW03_Main_Report.md', 'HW03_AI_Audit_Report.md', 'HW03_AI_Audit_Addendum.md',
  'HW03_Usability_Evaluation_Report.md', 'HW03_Usability_Plan_and_Instruments.md',
  'HW03_Cross_Platform_Report.md', 'audit/chat-history.md', 'audit/chat-history.json',
  'submission.config.json', 'scripts/package_submission.ps1', 'scripts/package_submission.sh',
  'scripts/submission_manifest.cjs', 'scripts/update_submission_docs.cjs',
  'scripts/check_relative_paths.cjs',
  'scripts/clean_submission_reports.cjs', 'scripts/publish_submission_docs.cjs'
];
const token = process.env.GITHUB_TOKEN || process.env.GH_TOKEN || (() => {
  const r = spawnSync('git', ['credential', 'fill'], {
    input: 'protocol=https\nhost=github.com\n\n', encoding: 'utf8', windowsHide: true,
    env: { ...process.env, GIT_TERMINAL_PROMPT: '0', GCM_INTERACTIVE: 'Never' }, timeout: 15000
  });
  return (r.stdout || '').split('\n').find(l => l.startsWith('password='))?.slice(9).trim();
})();
if (!token) throw Error('Stored GitHub credential unavailable');
async function api(endpoint, method = 'GET', body) {
  const res = await fetch(`https://api.github.com/repos/${repo}/${endpoint}`, {
    method, headers: { Authorization: `Bearer ${token}`, Accept: 'application/vnd.github+json',
      'Content-Type': 'application/json', 'User-Agent': 'HW03-docs-sync' },
    ...(body ? { body: JSON.stringify(body) } : {})
  });
  if (!res.ok) throw Error(`${method} ${endpoint}: HTTP ${res.status}`);
  return res.json();
}
(async () => {
  const head = await api('git/ref/heads/' + branch);
  const parent = await api('git/commits/' + head.object.sha);
  const entries = [];
  for (const file of files) {
    const bytes = fs.readFileSync(path.join(root, file));
    const blob = await api('git/blobs', 'POST', { encoding: 'base64', content: bytes.toString('base64') });
    entries.push({ path: file, mode: '100644', type: 'blob', sha: blob.sha });
  }
  const tree = await api('git/trees', 'POST', { base_tree: parent.tree.sha, tree: entries });
  const commit = await api('git/commits', 'POST', { message: 'docs: update self-assessment, actual AI chat audit and packaging', tree: tree.sha, parents: [head.object.sha] });
  await api('git/refs/heads/' + branch, 'PATCH', { sha: commit.sha, force: false });
  // Compare repository blob IDs against the uploaded bytes using the commit tree.
  const published = await api('git/trees/' + commit.tree.sha + '?recursive=1');
  for (const entry of entries) {
    if (!published.tree.some(e => e.path === entry.path && e.sha === entry.sha)) throw Error('Verification failed: ' + entry.path);
  }
  console.log(JSON.stringify({ branch, commit: commit.sha, verifiedFiles: entries.length }));
})().catch(e => { console.error(e.message); process.exitCode = 1; });
