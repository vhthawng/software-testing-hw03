#!/usr/bin/env node
/**
 * Script tự động tổng hợp GUI Checklist (> 40 items), thống kê tỷ lệ Pass/Fail
 * và xuất ra bảng tính Excel (SpreadsheetML) cùng bảng Markdown.
 * 
 * Cách dùng:
 *   node build_gui_checklist.js [input.json] [--out-excel checklist.xls] [--out-md checklist.md]
 */

const fs = require('fs');
const path = require('path');

function generateExcelXML(data) {
  const items = data.items || [];
  const meta = data.meta || {};

  // Thống kê
  const total = items.length;
  const passed = items.filter(it => it.status === 'Passed').length;
  const failed = items.filter(it => it.status === 'Failed').length;
  const aiGenerated = items.filter(it => it.source === 'AI-Generated').length;
  const humanAdded = items.filter(it => it.source === 'Human-Added').length;
  const passRate = total > 0 ? ((passed / total) * 100).toFixed(1) : 0;

  // Microsoft Excel XML Spreadsheet 2003 format
  let xml = `<?xml version="1.0"?>
<?mso-application progid="Excel.Sheet"?>
<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:o="urn:schemas-microsoft-com:office:office"
 xmlns:x="urn:schemas-microsoft-com:office:excel"
 xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet"
 xmlns:html="http://www.w3.org/TR/REC-html40">
 <Styles>
  <Style ss:ID="Default" ss:Name="Normal">
   <Alignment ss:Vertical="Center"/>
   <Borders/>
   <Font ss:FontName="Calibri" ss:Size="11" ss:Color="#000000"/>
  </Style>
  <Style ss:ID="Header">
   <Alignment ss:Horizontal="Center" ss:Vertical="Center" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#000000"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#000000"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#000000"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#000000"/>
   </Borders>
   <Font ss:FontName="Calibri" ss:Size="11" ss:Color="#FFFFFF" ss:Bold="1"/>
   <Interior ss:Color="#1E3A8A" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="CellNormal">
   <Alignment ss:Vertical="Top" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
   </Borders>
  </Style>
  <Style ss:ID="CellCenter">
   <Alignment ss:Horizontal="Center" ss:Vertical="Top" ss:WrapText="1"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
   </Borders>
  </Style>
  <Style ss:ID="PassStatus">
   <Alignment ss:Horizontal="Center" ss:Vertical="Top"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
   </Borders>
   <Font ss:FontName="Calibri" ss:Size="11" ss:Color="#166534" ss:Bold="1"/>
   <Interior ss:Color="#DCFCE7" ss:Pattern="Solid"/>
  </Style>
  <Style ss:ID="FailStatus">
   <Alignment ss:Horizontal="Center" ss:Vertical="Top"/>
   <Borders>
    <Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
    <Border ss:Position="Left" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
    <Border ss:Position="Right" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
    <Border ss:Position="Top" ss:LineStyle="Continuous" ss:Weight="1" ss:Color="#E5E7EB"/>
   </Borders>
   <Font ss:FontName="Calibri" ss:Size="11" ss:Color="#991B1B" ss:Bold="1"/>
   <Interior ss:Color="#FEE2E2" ss:Pattern="Solid"/>
  </Style>
 </Styles>

 <Worksheet ss:Name="GUI Checklist">
  <Table ss:DefaultRowHeight="20">
   <Column ss:Width="90"/>
   <Column ss:Width="120"/>
   <Column ss:Width="110"/>
   <Column ss:Width="280"/>
   <Column ss:Width="90"/>
   <Column ss:Width="80"/>
   <Column ss:Width="250"/>
   <Column ss:Width="100"/>
   <Column ss:Width="180"/>

   <!-- Tiêu đề Header -->
   <Row ss:Height="28">
    <Cell ss:StyleID="Header"><Data ss:Type="String">Item ID</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Interface Aspect</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Màn hình</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Tiêu chí kiểm tra (Verification Point)</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Nguồn gốc</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Kết quả</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Ghi chú lỗi (Notes)</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Mã Bug</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Lý giải AI Gap (nếu Human thêm)</Data></Cell>
   </Row>\n`;

  items.forEach(it => {
    const isPass = it.status === 'Passed';
    const statusStyle = isPass ? 'PassStatus' : 'FailStatus';

    xml += `   <Row ss:Height="32">
    <Cell ss:StyleID="CellCenter"><Data ss:Type="String">${escapeXml(it.id)}</Data></Cell>
    <Cell ss:StyleID="CellCenter"><Data ss:Type="String">${escapeXml(it.aspect)}</Data></Cell>
    <Cell ss:StyleID="CellCenter"><Data ss:Type="String">${escapeXml(it.screen)}</Data></Cell>
    <Cell ss:StyleID="CellNormal"><Data ss:Type="String">${escapeXml(it.description)}</Data></Cell>
    <Cell ss:StyleID="CellCenter"><Data ss:Type="String">${escapeXml(it.source || 'AI-Generated')}</Data></Cell>
    <Cell ss:StyleID="${statusStyle}"><Data ss:Type="String">${escapeXml(it.status)}</Data></Cell>
    <Cell ss:StyleID="CellNormal"><Data ss:Type="String">${escapeXml(it.notes || '')}</Data></Cell>
    <Cell ss:StyleID="CellCenter"><Data ss:Type="String">${escapeXml(it.bug_id || '')}</Data></Cell>
    <Cell ss:StyleID="CellNormal"><Data ss:Type="String">${escapeXml(it.ai_gap_reason || '')}</Data></Cell>
   </Row>\n`;
  });

  xml += `  </Table>
 </Worksheet>

 <Worksheet ss:Name="Tổng kết (Summary)">
  <Table ss:DefaultRowHeight="20">
   <Column ss:Width="220"/>
   <Column ss:Width="160"/>
   <Row ss:Height="25">
    <Cell ss:StyleID="Header"><Data ss:Type="String">Chỉ số kiểm thử</Data></Cell>
    <Cell ss:StyleID="Header"><Data ss:Type="String">Giá trị</Data></Cell>
   </Row>
   <Row><Cell ss:StyleID="CellNormal"><Data ss:Type="String">Tổng số checklist items thiết kế</Data></Cell><Cell ss:StyleID="CellCenter"><Data ss:Type="Number">${total}</Data></Cell></Row>
   <Row><Cell ss:StyleID="CellNormal"><Data ss:Type="String">Số mục do AI sinh</Data></Cell><Cell ss:StyleID="CellCenter"><Data ss:Type="Number">${aiGenerated}</Data></Cell></Row>
   <Row><Cell ss:StyleID="CellNormal"><Data ss:Type="String">Số mục con người bổ sung (Human-added)</Data></Cell><Cell ss:StyleID="CellCenter"><Data ss:Type="Number">${humanAdded}</Data></Cell></Row>
   <Row><Cell ss:StyleID="CellNormal"><Data ss:Type="String">Số mục ĐẠT (Passed)</Data></Cell><Cell ss:StyleID="PassStatus"><Data ss:Type="Number">${passed}</Data></Cell></Row>
   <Row><Cell ss:StyleID="CellNormal"><Data ss:Type="String">Số mục LỖI (Failed)</Data></Cell><Cell ss:StyleID="FailStatus"><Data ss:Type="Number">${failed}</Data></Cell></Row>
   <Row><Cell ss:StyleID="CellNormal"><Data ss:Type="String">Tỷ lệ đạt (Pass Rate)</Data></Cell><Cell ss:StyleID="CellCenter"><Data ss:Type="String">${passRate}%</Data></Cell></Row>
  </Table>
 </Worksheet>
</Workbook>`;

  return xml;
}

function escapeXml(unsafe) {
  if (unsafe === null || unsafe === undefined) return '';
  return String(unsafe).replace(/[<>&'"]/g, c => {
    switch (c) {
      case '<': return '&lt;';
      case '>': return '&gt;';
      case '&': return '&amp;';
      case '\'': return '&apos;';
      case '"': return '&quot;';
    }
  });
}

function generateMarkdownTable(data) {
  const items = data.items || [];
  let md = `### BẢNG TỔNG HỢP GUI CHECKLIST (${items.length} ITEMS)\n\n`;
  md += `| Item ID | Aspect | Màn hình | Tiêu chí kiểm tra | Nguồn | Kết quả | Ghi chú lỗi (Notes) | Mã Bug |\n`;
  md += `| :--- | :---: | :---: | :--- | :---: | :---: | :--- | :---: |\n`;

  items.forEach(it => {
    const badge = it.status === 'Passed' ? '🟢 Pass' : '🔴 Fail';
    md += `| \`${it.id}\` | **${it.aspect}** | ${it.screen} | ${it.description} | ${it.source} | ${badge} | ${it.notes || '-'} | ${it.bug_id || '-'} |\n`;
  });

  return md;
}

function generateCSV(data) {
  const items = data.items || [];
  let csv = "Item ID,Interface Aspect,Màn hình,Tiêu chí kiểm tra,Nguồn,Kết quả,Ghi chú lỗi (Notes),Mã Bug,Lý giải AI Gap\n";
  items.forEach(it => {
    const row = [
      it.id || '',
      it.aspect || '',
      it.screen || '',
      `"${(it.description || '').replace(/"/g, '""')}"`,
      it.source || 'AI-Generated',
      it.status || 'Passed',
      `"${(it.notes || '').replace(/"/g, '""')}"`,
      it.bug_id || '',
      `"${(it.ai_gap_reason || '').replace(/"/g, '""')}"`
    ];
    csv += row.join(',') + "\n";
  });
  return csv;
}

// Chạy trực tiếp từ CLI
if (require.main === module) {
  const args = process.argv.slice(2);
  let inputFile = null;
  let outExcel = 'HW03_GUI_Checklist.xls';
  let outMd = null;
  let outCsv = null;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--out-excel' && args[i + 1]) {
      outExcel = args[i + 1];
      i++;
    } else if (args[i] === '--out-md' && args[i + 1]) {
      outMd = args[i + 1];
      i++;
    } else if (args[i] === '--out-csv' && args[i + 1]) {
      outCsv = args[i + 1];
      i++;
    } else if (!inputFile && !args[i].startsWith('--')) {
      inputFile = args[i];
    }
  }

  if (!inputFile || !fs.existsSync(inputFile)) {
    console.log("Usage: node build_gui_checklist.js <checklist_data.json> [--out-excel HW03_GUI_Checklist.xls] [--out-md checklist.md] [--out-csv checklist.csv]");
    process.exit(1);
  }

  const raw = JSON.parse(fs.readFileSync(inputFile, 'utf-8'));
  const xml = generateExcelXML(raw);
  fs.writeFileSync(outExcel, xml, 'utf-8');
  console.log(`Đã xuất bảng tính Excel: ${outExcel}`);

  if (outMd) {
    const md = generateMarkdownTable(raw);
    fs.writeFileSync(outMd, md, 'utf-8');
    console.log(`Đã xuất bảng Markdown: ${outMd}`);
  }

  if (outCsv) {
    const csv = generateCSV(raw);
    fs.writeFileSync(outCsv, csv, 'utf-8');
    console.log(`Đã xuất bảng CSV: ${outCsv}`);
  }
}

module.exports = {
  generateExcelXML,
  generateMarkdownTable,
  generateCSV
};
