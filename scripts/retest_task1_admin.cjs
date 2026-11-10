const {chromium,request}=require('../skills/playwright-skill/node_modules/playwright');
const fs=require('node:fs'),path=require('node:path'),os=require('node:os');
const root=path.resolve(__dirname,'..'),out=path.join(root,fs.readFileSync(path.join(root,'task1-runs/LATEST.txt'),'utf8').trim());
(async()=>{
 const report=JSON.parse(fs.readFileSync(path.join(out,'execution.json'),'utf8'));
 const api=await request.newContext();const browser=await chromium.launch({channel:'chrome',headless:false});let fixture;
 try{
  const created=await api.post('http://localhost:3000/api/products',{data:{name:'HW03 isolated edit retest',price:1000,category_id:1}});fixture=await created.json();if(!fixture.id)throw Error('fixture create failed');
  const page=await browser.newPage({viewport:{width:1440,height:1000},locale:'vi-VN'});page.setDefaultTimeout(8000);page.on('dialog',d=>d.accept());
  await page.goto('http://127.0.0.1:5174');await page.getByPlaceholder('Email',{exact:true}).fill('admin@eshop.com');await page.getByPlaceholder('Password',{exact:true}).fill('Admin123!');await page.getByRole('button',{name:'Login',exact:true}).click();await page.getByText('EShop Admin',{exact:true}).waitFor();await page.getByText('Sản phẩm',{exact:true}).click();
  const row=page.locator('table tbody tr').filter({hasText:'HW03 isolated edit retest'});await row.getByRole('button',{name:'Sửa',exact:true}).click();await page.getByPlaceholder('Tên sản phẩm',{exact:true}).fill('HW03 retest changed only selected');
  const response=page.waitForResponse(r=>r.url().endsWith('/products/'+fixture.id)&&r.request().method()==='PUT');await page.getByRole('button',{name:'Lưu sản phẩm',exact:true}).click();await response;
  await page.getByText('HW03 retest changed only selected',{exact:true}).first().waitFor();
  const names=await page.locator('table tbody tr td:nth-child(2)').allTextContents();const total=names.length,repeated=names.filter(n=>n==='HW03 retest changed only selected').length;
  const apiNames=await(await api.get('http://localhost:3000/api/products')).json();
  await page.evaluate(text=>{const e=document.createElement('div');e.textContent=text;Object.assign(e.style,{position:'fixed',bottom:'0',background:'#111',color:'#ffd700',padding:'12px',zIndex:99999});document.body.appendChild(e);},`23120355 - Vo Huu Thang | 23120355@student.hcmus.edu.vn | Chrome ${browser.version()} | ${os.platform()} | http://127.0.0.1:5174 | ${new Date().toISOString()}`);
  const filename='CHK-IA04-02-retest.png';await page.screenshot({path:path.join(out,filename),fullPage:true});
  const r=report.results.find(r=>r.id==='CHK-IA04-02');r.previousAttempts=[{...r}];r.status=repeated===1?'Passed':'Failed';r.notes=`Retest harness: chọn đúng nút Lưu sản phẩm thay vì Hủy sửa. Sau sửa fixture riêng, ${repeated}/${total} dòng UI đổi cùng tên. API chỉ ${apiNames.filter(p=>p.name==='HW03 retest changed only selected').length} sản phẩm đổi tên; phân biệt lỗi state UI và persistence.`;r.evidence=[path.relative(root,path.join(out,filename)).replaceAll('\\','/')];r.finishedAt=new Date().toISOString();r.observed={names};
  report.counts={};for(const x of report.results)report.counts[x.status]=(report.counts[x.status]||0)+1;report.cleanup.deletedSyntheticProductIds.push(fixture.id);
  fs.writeFileSync(path.join(out,'execution.json'),JSON.stringify(report,null,2));console.log(r.status,r.notes,JSON.stringify(report.counts));
 }finally{if(fixture?.id)await api.delete('http://localhost:3000/api/products/'+fixture.id);await browser.close();await api.dispose();}
})().catch(e=>{console.error(e.message);process.exitCode=1;});
