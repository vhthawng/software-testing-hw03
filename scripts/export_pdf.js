const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

function markdownToSimpleHtml(title, mdText) {
  // Convert basic markdown formatting to styled HTML
  let html = mdText
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    // Headers
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    // Bold / italic
    .replace(/\*\*\*(.*?)\*\*\*/gim, '<b><i>$1</i></b>')
    .replace(/\*\*(.*?)\*\*/gim, '<b>$1</b>')
    .replace(/\*(.*?)\*/gim, '<i>$1</i>')
    // Code blocks
    .replace(/```([\s\S]*?)```/gim, '<pre><code>$1</code></pre>')
    .replace(/`([^`]+)`/gim, '<code>$1</code>')
    // Horizontal rule
    .replace(/^---$/gim, '<hr/>')
    // Blockquotes
    .replace(/^\> (.*$)/gim, '<blockquote>$1</blockquote>');

  // Simple table parsing
  const lines = html.split('\n');
  let inTable = false;
  let tableHtml = '';
  const newLines = [];

  for (let line of lines) {
    line = line.trim();
    if (line.startsWith('|') && line.endsWith('|')) {
      if (!inTable) {
        inTable = true;
        tableHtml = '<table>';
      }
      const cells = line.split('|').slice(1, -1);
      if (line.includes('---')) {
        continue; // separator
      }
      tableHtml += '<tr>' + cells.map(c => `<td>${c.trim()}</td>`).join('') + '</tr>';
    } else {
      if (inTable) {
        inTable = false;
        tableHtml += '</table>';
        newLines.push(tableHtml);
      }
      if (line) newLines.push(`<p>${line}</p>`);
    }
  }
  if (inTable) {
    newLines.push('</table>');
  }

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <title>${title}</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      margin: 40px;
      color: #24292e;
      line-height: 1.6;
      font-size: 13px;
    }
    h1 { font-size: 24px; border-bottom: 2px solid #eaecef; padding-bottom: 8px; color: #1a202c; }
    h2 { font-size: 18px; border-bottom: 1px solid #eaecef; padding-bottom: 6px; margin-top: 24px; color: #2d3748; }
    h3 { font-size: 15px; margin-top: 18px; color: #4a5568; }
    table { border-collapse: collapse; width: 100%; margin: 16px 0; font-size: 12px; }
    th, td { border: 1px solid #cbd5e0; padding: 8px 10px; text-align: left; }
    tr:nth-child(even) { background-color: #f7fafc; }
    code { background-color: #edf2f7; padding: 2px 5px; border-radius: 4px; font-family: Consolas, monospace; font-size: 11px; }
    pre { background-color: #f8fafc; border: 1px solid #e2e8f0; padding: 12px; border-radius: 6px; overflow-x: auto; }
    pre code { background: none; padding: 0; }
    blockquote { border-left: 4px solid #3182ce; margin: 12px 0; padding: 8px 16px; background-color: #ebf8ff; color: #2b6cb0; }
    hr { border: 0; height: 1px; background: #e2e8f0; margin: 24px 0; }
    .header-info { background: #f0fdf4; border: 1px solid #bbf7d0; padding: 12px; border-radius: 6px; margin-bottom: 20px; }
  </style>
</head>
<body>
  ${newLines.join('\n')}
</body>
</html>`;
}

async function exportToPdf(mdPath, pdfPath, title) {
  const md = fs.readFileSync(mdPath, 'utf-8');
  const html = markdownToSimpleHtml(title, md);
  const tempHtml = mdPath + '.tmp.html';
  fs.writeFileSync(tempHtml, html, 'utf-8');

  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.goto('file://' + path.resolve(tempHtml), { waitUntil: 'load' });
  await page.pdf({
    path: pdfPath,
    format: 'A4',
    margin: { top: '20mm', bottom: '20mm', left: '15mm', right: '15mm' },
    printBackground: true
  });
  await browser.close();
  fs.unlinkSync(tempHtml);
  console.log(`[PDF EXPORT] Successfully created: ${path.basename(pdfPath)}`);
}

async function main() {
  console.log('Generating PDF reports using Playwright...');
  await exportToPdf('HW03_Main_Report.md', 'HW03_Main_Report.pdf', 'HW03 Main Report');
  await exportToPdf('HW03_AI_Audit_Report.md', 'HW03_AI_Audit_Report.pdf', 'HW03 AI Audit Report');
  await exportToPdf('HW03_Bug_Report.md', 'HW03_Bug_Report.pdf', 'HW03 Bug Report');
  console.log('All PDF reports generated successfully!');
}

main().catch(console.error);
