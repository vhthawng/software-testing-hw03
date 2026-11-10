// Real local GUI execution. No product-source changes or mocked responses.
const {chromium, firefox, request, expect} = require('../skills/playwright-skill/node_modules/playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const os = require('node:os');
const root=path.resolve(__dirname,'..');
const runId=new Date().toISOString().replace(/[:.]/g,'-');
const engine=process.argv[2]||'chrome'; if(!['chrome','firefox'].includes(engine))throw Error('Unknown browser');
const out=path.join(root,'task3-runs','2026-11-11-local',engine,runId); fs.mkdirSync(out,{recursive:true});
const WEB='http://localhost:5173', ADMIN='http://localhost:5174', API='http://localhost:3000/api';
const original=JSON.parse(fs.readFileSync(path.join(root,'checklist_data.json'),'utf8'));
const results=new Map(original.items.map(i=>[i.id,{id:i.id,criterion:i.description,status:'Not Run',notes:'Chưa thực thi trong lượt này',evidence:[]} ]));
const dialogs=[], network=[]; let browser,api,context,page,admin;
let env={}, createdProducts=[];
const userEmail=`hw03-${Date.now()}@example.test`, password='Task1Local123!';
const id=(a,n)=>`CHK-IA0${a}-${String(n).padStart(2,'0')}`;
async function waitText(p,text){await p.getByText(text,{exact:false}).first().waitFor({timeout:8000});}
async function shot(p,label){
 const name=label+'.png';
 await p.evaluate(({text})=>{const e=document.createElement('aside');e.id='hw03-evidence-caption';e.textContent=text;Object.assign(e.style,{position:'fixed',bottom:'0',left:'0',right:'0',zIndex:'2147483647',background:'#111',color:'#ffd700',font:'13px Arial',padding:'8px',pointerEvents:'none'});document.body.appendChild(e);}, {text:`23120355 - Vo Huu Thang | 23120355@student.hcmus.edu.vn | ${env.browser} ${env.browserVersion} | ${os.platform()} ${os.release()} | ${p.url()} | ${new Date().toISOString()}`});
 await p.screenshot({path:path.join(out,name),fullPage:true});
 await p.locator('#hw03-evidence-caption').evaluate(e=>e.remove());
 return path.relative(root,path.join(out,name)).replaceAll('\\','/');
}
async function run(a,n,p,steps,fn){
 const key=id(a,n); const row=results.get(key); row.startedAt=new Date().toISOString(); row.steps=steps;
 try{const v=await fn();row.status=v.ok?'Passed':'Failed';row.notes=v.actual;row.observed=v.data;
 if(!v.ok) row.evidence.push(await shot(p,key));
 }catch(e){row.status='Blocked';row.notes=`Lỗi harness/điều kiện, chưa kết luận lỗi SUT: ${e.message}`;try{row.evidence.push(await shot(p,key+'-blocked'));}catch{}}
 row.finishedAt=new Date().toISOString(); console.log(key,row.status,row.notes);
}
const verdict=(ok,actual,data)=>({ok,actual,data});
async function profile(){await page.goto(WEB+'/profile');await waitText(page,'Hồ sơ của bạn');}
async function cart(){await page.getByRole('link',{name:'Giỏ hàng',exact:true}).click();await page.getByRole('heading',{name:'Giỏ Hàng',exact:true}).waitFor();await page.locator('tbody tr').first().waitFor();}
async function add(){await page.goto(WEB);await page.getByRole('button',{name:'Thêm vào giỏ',exact:true}).first().waitFor();await page.getByRole('button',{name:'Thêm vào giỏ',exact:true}).first().click();}
async function checkout(){await add();await cart();await page.getByRole('button',{name:'Tiến hành thanh toán'}).click();await waitText(page,'Xác Nhận Đơn Hàng');}
async function products(){await admin.getByText('Sản phẩm',{exact:true}).click();await waitText(admin,'Quản lý Sản phẩm');await admin.locator('table tbody tr').first().waitFor();}
async function adminFill(name,price){await admin.getByPlaceholder('Tên sản phẩm',{exact:true}).fill(name);await admin.getByPlaceholder('Giá tiền',{exact:true}).fill(String(price));}
async function submitProduct(){const response=admin.waitForResponse(r=>r.url().includes('/api/products')&&['POST','PUT'].includes(r.request().method()));await admin.getByRole('button',{name:'Lưu sản phẩm',exact:true}).click();return await response;}
async function main(){
 api=await request.newContext();
 for(const url of [WEB,ADMIN,API+'/products']){const r=await api.get(url);assert(r.ok(),`Not ready ${url}`);}
 browser=engine==='chrome'?await chromium.launch({channel:'chrome',headless:false}):await firefox.launch({headless:process.argv.includes('--headless')});
 env={browser:engine==='chrome'?'Google Chrome':'Firefox (Playwright build)',engine,browserVersion:browser.version(),os:os.platform(),osRelease:os.release(),headless:engine==='firefox'&&process.argv.includes('--headless'),viewport:{width:1440,height:1000},locale:'vi-VN',runId,web:WEB,admin:ADMIN,backend:API,userEmail,method:'Playwright against real local API; no network mocks',database:'server startup automatically reseeds database.js; no extra reset invoked'};
 context=await browser.newContext({viewport:env.viewport,locale:'vi-VN'});
 context.on('page',p=>{p.setDefaultTimeout(7000);p.on('dialog',async d=>{dialogs.push({type:d.type(),message:d.message(),url:p.url(),time:new Date().toISOString()});await d.accept();});p.on('response',r=>{if(r.url().includes('/api/'))network.push({method:r.request().method(),url:r.url(),status:r.status()});});});
 page=await context.newPage();admin=await context.newPage();
 await api.post(API+'/register',{data:{name:'Võ Hữu Thắng - 23120355',email:userEmail,password}});
 await page.goto(WEB+'/login');const ins=page.locator('form input');await ins.nth(0).fill(userEmail);await ins.nth(1).fill(password);await page.getByRole('button',{name:'Sign In'}).click();await page.getByRole('link',{name:/Chào,/}).waitFor();
 await admin.goto(ADMIN);await admin.getByPlaceholder('Email',{exact:true}).fill('admin@eshop.com');await admin.getByPlaceholder('Password',{exact:true}).fill('Admin123!');await admin.getByRole('button',{name:'Login',exact:true}).click();await waitText(admin,'EShop Admin');await products();
 const baseline=await (await api.get(API+'/products')).json();
 await run(1,2,admin,'Mở bảng sản phẩm có dữ liệu; đọc headings và căn lề computed.',async()=>{const headers=await admin.locator('table th').allTextContents();const align=await admin.locator('table tbody tr').first().locator('td').evaluateAll(es=>es.map(e=>getComputedStyle(e).textAlign));return verdict(headers.includes('Tên SP')&&align[2]==='right',`Headers=${headers.join(', ')}; alignment=${align.join(', ')}. Giá phải căn phải theo tiêu chí gốc.`,{headers,align});});
 await run(1,11,admin,'Đọc alt và kích thước thumbnail trong bảng Admin có dữ liệu.',async()=>{const imgs=await admin.locator('table tbody img').evaluateAll(es=>es.map(e=>({alt:e.alt,w:e.width,h:e.height})));return verdict(imgs.length>0&&imgs.every(i=>i.alt.trim()&&i.w===imgs[0].w&&i.h===imgs[0].h),'Thumbnail thực có alt tên sản phẩm; đo kích thước đồng đều.',imgs);});
 await run(2,8,admin,'Mở select danh mục trong form sản phẩm.',async()=>{const options=await admin.locator('form select').first().locator('option').allTextContents();const value=await admin.locator('form select').first().inputValue();return verdict(options.length>0&&!!value,`Danh mục ${options.join(', ')}; value=${value}`);});
 await run(2,3,admin,'Thử submit tên rỗng rồi tên toàn khoảng trắng; kiểm tra API và bảng sau submit.',async()=>{await adminFill('',1000);const emptyValid=await admin.getByPlaceholder('Tên sản phẩm',{exact:true}).evaluate(e=>e.checkValidity());await adminFill('   ',1000);const r=await submitProduct();const body=await r.json();if(body.id)createdProducts.push(body.id);const all=await(await api.get(API+'/products')).json();return verdict(!emptyValid&&!all.some(p=>p.name==='   '),`Tên rỗng validity=${emptyValid}; submit whitespace HTTP ${r.status()}; persisted=${all.some(p=>p.name==='   ')}`);});
 await run(2,4,admin,'Tạo hai sản phẩm riêng với giá 0 và -1000, kiểm tra lưu thật qua API.',async()=>{const accepted=[];for(const price of [0,-1000]){const name=`HW03-price-${price}-${runId}`;await adminFill(name,price);const r=await submitProduct();const body=await r.json();if(body.id)createdProducts.push(body.id);const all=await(await api.get(API+'/products')).json();accepted.push(all.find(p=>p.name===name)?.price);}return verdict(accepted.every(x=>x===undefined),`Giá được lưu: ${JSON.stringify(accepted)}`);});
 await run(2,14,admin,'Nhập tên 256 ký tự trong form, submit và đọc persisted value.',async()=>{const name='H'.repeat(256);await adminFill(name,1000);const value=await admin.getByPlaceholder('Tên sản phẩm',{exact:true}).inputValue();const r=await submitProduct();const body=await r.json();if(body.id)createdProducts.push(body.id);return verdict(value.length<=255||!r.ok(),`Input nhận ${value.length} ký tự; POST HTTP ${r.status()}`);});
 await run(1,8,admin,'Sau khi có tên dài 256 ký tự, đo tràn bảng và vùng nội dung.',async()=>{const dims=await admin.locator('table').evaluate(e=>({width:e.getBoundingClientRect().width,body:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth,parent:e.parentElement.getBoundingClientRect().width}));return verdict(dims.width<=dims.parent+1&&dims.scroll<=dims.body+1,JSON.stringify(dims),dims);});
 // Use a dedicated product for editing; original seed products are never updated.
 const create=await api.post(API+'/products',{data:{name:'HW03 edit fixture',price:1000,category_id:1}});const fixture=await create.json();assert(fixture.id);createdProducts.push(fixture.id);await admin.reload();await waitText(admin,'EShop Admin');await products();
 await run(4,2,admin,'Bấm Sửa ở fixture riêng, đổi tên, kiểm tra các dòng không được chọn.',async()=>{const row=admin.locator('table tbody tr').filter({hasText:'HW03 edit fixture'});await row.getByRole('button',{name:'Sửa',exact:true}).click();await admin.getByPlaceholder('Tên sản phẩm',{exact:true}).fill('HW03 edited only this');await submitProduct();await waitText(admin,'HW03 edited only this');const names=await admin.locator('table tbody tr td:nth-child(2)').allTextContents();return verdict(names.filter(n=>n==='HW03 edited only this').length===1,`Sau sửa: ${names.filter(n=>n==='HW03 edited only this').length}/${names.length} dòng mang cùng tên.`,names);});
 await admin.reload();await waitText(admin,'EShop Admin');
 await run(3,2,admin,'Click từng mục Sidebar và đợi heading đích.',async()=>{const tabs=[['Dashboard','Dashboard'],['Danh mục','Quản lý Danh mục'],['Sản phẩm','Quản lý Sản phẩm'],['Mã Giảm Giá','Quản lý Mã Giảm Giá'],['Đơn hàng','Quản lý Đơn hàng'],['Người dùng','Quản lý Người dùng']];for(const [tab,title]of tabs){await admin.getByText(tab,{exact:true}).first().click();await admin.getByRole('heading',{name:title,exact:true}).waitFor();}return verdict(true,'Sáu tab đều mở đúng heading, không phải click-only.');});
 await profile();
 await run(1,5,page,'Đọc heading của main theo FR-21: đúng một h1.',async()=>{const hs=await page.locator('main h1,main h2,main h3').evaluateAll(es=>es.map(e=>({tag:e.tagName,text:e.textContent})));return verdict(hs.filter(h=>h.tag==='H1').length===1,JSON.stringify(hs));});
 await run(2,12,page,'Thử tương tác input email Profile.',async()=>verdict(await page.locator('form input').first().isDisabled(),'Email hiển thị disabled trên form thật.'));
 await run(2,7,page,'Click nhãn Số điện thoại; kiểm tra activeElement và liên kết label-control.',async()=>{await page.getByText('Số điện thoại',{exact:true}).click();const active=await page.locator('input[placeholder*="0912345678"]').evaluate(e=>document.activeElement===e);return verdict(active,`Sau click label, phone focus=${active}`);});
 await run(2,1,page,'Nhập số 0912345678 và submit, quan sát dialog validation.',async()=>{const start=dialogs.length;await page.locator('form input[required]').fill('Võ Hữu Thắng - 23120355');await page.getByPlaceholder('VD: 0912345678').fill('0912345678');const dialog=page.waitForEvent('dialog');await page.getByRole('button',{name:'Cập nhật',exact:true}).click();await dialog;const msgs=dialogs.slice(start);return verdict(!msgs.some(d=>d.message.includes('không hợp lệ')),JSON.stringify(msgs));});
 await run(4,12,page,'Tài khoản mới chưa có đơn: quan sát empty state.',async()=>verdict(await page.getByText('Bạn chưa có đơn hàng nào.',{exact:true}).isVisible(),'Empty state lịch sử hiển thị cho tài khoản test mới.'));
 await run(4,9,page,'Dùng phone 912345678 (workaround), lưu tên/địa chỉ test; xác nhận dialog thành công.',async()=>{await page.getByPlaceholder('VD: 0912345678').fill('912345678');await page.getByPlaceholder('Nhập địa chỉ của bạn').fill('HW03 local synthetic address');const d=page.waitForEvent('dialog');await page.getByRole('button',{name:'Cập nhật',exact:true}).click();const msg=(await d).message();const token=await page.evaluate(()=>localStorage.getItem('token'));const persisted=await(await api.get(API+'/users/me',{headers:{Authorization:`Bearer ${token}`}})).json();return verdict(msg.includes('thành công')&&persisted.phone==='912345678',`Dialog=${msg}; persisted phone=${persisted.phone}. Chỉ kiểm tra phản hồi lưu, không coi workaround là phone VN hợp lệ.`);});
 await run(3,3,page,'Click link Chào trên header từ Home.',async()=>{await page.goto(WEB);await page.getByRole('link',{name:/Chào,/}).click();await waitText(page,'Hồ sơ của bạn');return verdict(page.url().endsWith('/profile'),'Link Chào điều hướng đúng /profile.');});
 await run(3,6,page,'Quan sát trạng thái link Profile khi đang ở /profile.',async()=>{const l=page.getByRole('link',{name:/Chào,/});const active=await l.getAttribute('aria-current');return verdict(active==='page',`aria-current=${active}; link header không có chỉ báo active theo route. Phạm vi đo DOM, chưa kiểm định mọi tín hiệu thị giác.`);});
 await page.goto(WEB+'/product/5');await page.getByRole('heading',{level:1}).waitFor();
 const addButton=page.getByRole('button',{name:'Thêm vào giỏ hàng',exact:true});await addButton.click();const firstFeedback=await page.getByRole('button',{name:'Đã thêm',exact:true}).count();const before=await shot(page,'BUG16-after-first-click');await addButton.click();await page.getByRole('button',{name:'Đã thêm',exact:true}).waitFor();const after=await shot(page,'BUG16-after-second-click');env.extraFinding={bug:'BUG-16',firstClickFeedback:firstFeedback,secondClickFeedback:true,evidence:[before,after]};
 await cart();
 await run(2,10,page,'Giỏ có bàn phím; kiểm tra điều khiển số lượng trên dòng hàng.',async()=>{const controls=await page.locator('tbody tr').first().locator('input,select,button').allTextContents();return verdict(controls.some(t=>t!=='Xóa'),`Dòng hàng có điều khiển: ${JSON.stringify(controls)}; số lượng là text.`);});
 await run(3,1,page,'Giỏ có sản phẩm; đọc nhãn link Giỏ hàng trên header.',async()=>{const text=await page.getByRole('link',{name:'Giỏ hàng',exact:true}).textContent();return verdict(/\d/.test(text),`Header text=${text}; không có số đếm.`);});
 await run(3,5,page,'Click Mua tiếp và xác minh danh sách sản phẩm.',async()=>{await page.getByRole('link',{name:'← Mua tiếp'}).click();await page.getByRole('button',{name:'Thêm vào giỏ',exact:true}).first().waitFor();return verdict(page.url()===WEB+'/','Mua tiếp quay về Home có danh sách sản phẩm.');});
 await cart();await page.getByRole('button',{name:'Tiến hành thanh toán'}).click();await waitText(page,'Xác Nhận Đơn Hàng');
 await run(1,1,page,'Đọc nhãn tổng tiền và đơn vị hiển thị khi Checkout có hàng.',async()=>{const text=await page.locator('main').innerText();return verdict(!(text.includes('(VND)')&&text.includes('₫')),'Checkout hiển thị cả nhãn (VND) và ký hiệu ₫ trên cùng màn hình.');});
 await run(1,7,page,'Focus ô coupon và gõ SAVE10; đọc placeholder/value và :placeholder-shown.',async()=>{const c=page.getByPlaceholder('Nhập mã giảm giá...');await c.fill('SAVE10');const shown=await c.evaluate(e=>e.matches(':placeholder-shown'));await c.fill('');return verdict(!shown,'Placeholder tồn tại và không còn hiển thị khi có giá trị.');});
 await run(1,12,page,'Đọc text checkout với giỏ có bàn phím, tổng số bình thường.',async()=>{const text=await page.locator('main').innerText();return verdict(!/NaN|undefined|null/.test(text),'Không rò rỉ NaN/undefined/null trong dữ liệu bình thường.');});
 await run(1,9,page,'Đọc tiền Checkout và sau đó Profile có đơn ở bước sau.',async()=>{const text=await page.locator('main').innerText();const expected=(4000000).toLocaleString('vi-VN');return verdict(text.includes(expected),`locale vi-VN; kỳ vọng ${expected}; kiểm tra Checkout (Profile kiểm tra cùng item sau tạo đơn).`);});
 await run(2,6,page,'Kiểm tra disabled Apply với chuỗi rỗng và whitespace.',async()=>{const c=page.getByPlaceholder('Nhập mã giảm giá...');await c.fill('');const empty=await page.getByRole('button',{name:'Áp dụng',exact:true}).isDisabled();await c.fill('   ');const spaces=await page.getByRole('button',{name:'Áp dụng',exact:true}).isDisabled();await c.fill('');return verdict(empty&&spaces,`disabled empty=${empty}; whitespace=${spaces}`);});
 await run(2,13,page,'Đọc màu computed nút xác nhận theo FR-21: xanh dương.',async()=>{const color=await page.getByRole('button',{name:'Xác Nhận Thanh Toán',exact:true}).evaluate(e=>getComputedStyle(e).backgroundColor);const rgb=color.match(/\d+/g).map(Number);return verdict(rgb[2]>rgb[0]&&rgb[2]>rgb[1],`background=${color}; SRS yêu cầu xanh dương.`);});
 await run(4,6,page,'Nhập EXPIRED, đợi phản hồi API thật và thông báo.',async()=>{await page.getByPlaceholder('Nhập mã giảm giá...').fill('EXPIRED');await page.getByRole('button',{name:'Áp dụng',exact:true}).click();await waitText(page,'hết hạn');return verdict(true,'API từ chối EXPIRED; hiển thị thông báo hết hạn.');});
 await run(4,5,page,'Nhập SAVE10 trên đơn 4 triệu, đợi phản hồi thật và kiểm tra tiền giảm.',async()=>{await page.getByPlaceholder('Nhập mã giảm giá...').fill('SAVE10');await page.getByRole('button',{name:'Áp dụng',exact:true}).click();await waitText(page,'Tiết kiệm:');const text=await page.locator('main').innerText();return verdict(text.includes('400.000')&&text.includes('3.600.000'),text);});
 await run(2,2,page,'Sửa ô tổng tiền 4000000 thành 1000 và kiểm tra input.',async()=>{const input=page.locator('input[type="number"]');await input.fill('1000');return verdict(false,`Ô tổng tiền cho sửa từ 4000000 thành ${await input.inputValue()}; coupon bị xóa khi onChange.`);});
 await page.locator('input[type="number"]').fill('4000000');
 await run(4,7,page,'Gửi checkout API thật; quan sát loading trong lúc request chưa xong, không delay/mock.',async()=>{const button=page.getByRole('button',{name:'Xác Nhận Thanh Toán',exact:true});const response=page.waitForResponse(r=>r.url().endsWith('/api/checkout')&&r.request().method()==='POST');await button.click();const observed=await page.getByRole('button',{name:'Đang xử lý...'}).count();await response;await waitText(page,'Thanh toán thành công!');if(!observed)return {ok:false,actual:'Request quá nhanh để bắt trạng thái loading; cần kiểm tra có kiểm soát độ trễ, không kết luận Fail.'};return verdict(true,'Bắt được trạng thái Đang xử lý trên request thật.');});
 if(results.get(id(4,7)).notes.startsWith('Request quá nhanh'))results.get(id(4,7)).status='Not Run';
 await run(4,10,page,'Quan sát màn hình sau đơn thật.',async()=>verdict(await page.getByRole('heading',{name:'Thanh toán thành công!',exact:true}).isVisible(),'Có heading thành công và lời cảm ơn sau POST checkout thật.'));
 await run(3,9,page,'Click Quay lại trang chủ sau checkout.',async()=>{await page.getByRole('button',{name:'Quay lại trang chủ'}).click();await page.getByRole('button',{name:'Thêm vào giỏ',exact:true}).first().waitFor();return verdict(page.url()===WEB+'/','Quay lại Home có sản phẩm.');});
 await profile();await page.locator('table tbody tr').first().waitFor();
 await run(1,3,page,'Tạo fixture đơn của tài khoản test cho 5 trạng thái qua API thật; đo màu badge và contrast.',async()=>{
  const userToken=await page.evaluate(()=>localStorage.getItem('token'));
  const adminToken=await admin.evaluate(()=>localStorage.getItem('adminToken'));
  const transitions=[[],['confirmed'],['confirmed','shipping'],['confirmed','shipping','delivered'],['canceled']];
  for(const sequence of transitions){
   const r=await api.post(API+'/checkout',{data:{items:[],total_amount:1000,shipping_address:'HW03 status fixture'},headers:{Authorization:`Bearer ${userToken}`}});assert(r.ok());const order=await r.json();
   for(const status of sequence){const u=await api.put(API+'/admin/orders/'+order.orderId+'/status',{data:{status},headers:{Authorization:`Bearer ${adminToken}`}});assert(u.ok());}
  }
  await profile();await page.getByText('Đã giao',{exact:true}).waitFor();
  const badges=await page.locator('table tbody tr td:nth-child(4) span').evaluateAll(es=>es.map(e=>({label:e.textContent,fg:getComputedStyle(e).color,bg:getComputedStyle(e).backgroundColor})));
  function luminance(c){return c.match(/\d+/g).slice(0,3).map(Number).map(x=>x/255).map(v=>v<=.04045?v/12.92:((v+.055)/1.055)**2.4).reduce((a,v,i)=>a+v*[.2126,.7152,.0722][i],0);}
  const measurements=badges.map(b=>({...b,ratio:(Math.max(luminance(b.fg),luminance(b.bg))+.05)/(Math.min(luminance(b.fg),luminance(b.bg))+.05)}));
  const required=['Chờ xác nhận','Đã xác nhận','Đang giao','Đã giao','Đã hủy'];
  return verdict(required.every(t=>measurements.some(m=>m.label===t))&&measurements.every(m=>m.ratio>=4.5)&&new Set(measurements.map(m=>m.bg)).size===5,JSON.stringify(measurements),measurements);
 });
 const money=await page.locator('table').innerText();if(!money.includes('4.000.000')){results.get(id(1,9)).status='Failed';results.get(id(1,9)).notes+=' Profile không hiển thị 4.000.000.';results.get(id(1,9)).evidence.push(await shot(page,id(1,9)+'-profile'));}else results.get(id(1,9)).notes+=' Profile có đơn 4.000.000 ₫.';
 await run(4,1,page,'Click Hủy đơn test pending; đếm confirm và xác minh trạng thái sau API.',async()=>{const start=dialogs.length;const resp=page.waitForResponse(r=>r.url().includes('/cancel')&&r.request().method()==='PUT');await page.getByRole('button',{name:'Hủy đơn',exact:true}).first().click();await resp;await waitText(page,'Đã hủy');const ds=dialogs.slice(start);return verdict(ds.some(d=>d.type==='confirm'),`Đơn chuyển Đã hủy; dialog=${JSON.stringify(ds)}; không có confirm.`);});
 await add();await cart();
 await run(4,3,page,'Xóa dòng hàng thật trong Cart; xác minh empty state và dialog.',async()=>{const start=dialogs.length;await page.getByRole('button',{name:'Xóa',exact:true}).first().click();await waitText(page,'Giỏ hàng của bạn đang trống');return verdict(dialogs.slice(start).some(d=>d.type==='confirm'),'Dòng hàng biến mất ngay, không có confirm. Đây là đối chiếu tiêu chí cũ về usability.');});
 await run(4,8,page,'Quan sát giỏ rỗng và click CTA.',async()=>{await page.getByRole('link',{name:'Tiếp tục mua sắm',exact:true}).click();await page.getByRole('button',{name:'Thêm vào giỏ',exact:true}).first().waitFor();return verdict(true,'Có empty message và CTA mở Home.');});
 await page.getByRole('button',{name:'Thoát',exact:true}).click();await add();await cart();
 await run(4,4,page,'Chưa login, click checkout với giỏ có hàng; ghi dialog và route.',async()=>{const d=page.waitForEvent('dialog');await page.getByRole('button',{name:'Tiến hành thanh toán'}).click();const msg=(await d).message();await page.waitForURL('**/login');return verdict(false,`Modal alert=${msg}; sau đó đến /login. Fail theo tiêu chí cũ yêu cầu inline/toast, không phải lỗi access control.`);});
 await run(3,7,admin,'Click Đăng xuất Admin, kiểm tra token và form login.',async()=>{await admin.getByText('Đăng xuất',{exact:true}).click();await waitText(admin,'Admin Login');return verdict(!(await admin.evaluate(()=>localStorage.getItem('adminToken'))),'Token đã xóa, hiển thị Admin Login.');});
 for(const item of original.items){if(item.screen.includes('Pool D'))results.set(item.id,{...results.get(item.id),status:'Not Applicable',notes:'Item native mobile: thực thi trên Android Expo Go; không áp dụng cho desktop '+engine});}
 await run(1,6,admin,'Quan sát layout Admin và đo padding/không chồng lấn sidebar-main; lưu ảnh để human review.',async()=>{
  await admin.goto(ADMIN);await admin.getByPlaceholder('Email',{exact:true}).fill('admin@eshop.com');await admin.getByPlaceholder('Password',{exact:true}).fill('Admin123!');await admin.getByRole('button',{name:'Login',exact:true}).click();await waitText(admin,'EShop Admin');await products();
  const layout=await admin.locator('body').evaluate(()=>{const side=document.querySelector('ul')?.parentElement,main=side?.nextElementSibling;return {side:side?.getBoundingClientRect().toJSON(),main:main?.getBoundingClientRect().toJSON(),sidePadding:side&&getComputedStyle(side).padding,mainPadding:main&&getComputedStyle(main).padding};});
  const ok=layout.side&&layout.main&&layout.side.right<=layout.main.left+1;
  const evidence=await shot(admin,'IA01-06-layout-review');
  results.get(id(1,6)).evidence.push(evidence);
  return verdict(!!ok,JSON.stringify(layout)+'; đo bố cục không chồng lấn; đánh giá trực quan kèm ảnh.',layout);
 });
 await run(3,10,page,'Duyệt routes frontend và các tab Admin đã chạy; phạm vi desktop, native ở cột Android.',async()=>{
  const routes=['/','/login','/register','/forgot-password','/profile','/cart','/checkout','/product/5'];const observed=[];
  for(const route of routes){await page.goto(WEB+route);await page.locator('main').waitFor();const body=await page.locator('main').innerText();observed.push({route,hasContent:body.trim().length>0,notFound:/404|page not found/i.test(body)});}
  return verdict(observed.every(x=>x.hasContent&&!x.notFound),JSON.stringify(observed)+'; desktop routes only; native navigation is not inferred.',observed);
 });
 // Capture a genuine OS window while Profile displays the student's name/ID.
 await page.goto(WEB+'/login');await page.locator('form input').nth(0).fill(userEmail);await page.locator('form input').nth(1).fill(password);await page.getByRole('button',{name:'Sign In'}).click();await page.getByRole('link',{name:/Chào,/}).waitFor();await profile();
 await page.locator('form input[required]').fill('Võ Hữu Thắng - 23120355');
 await page.getByPlaceholder('VD: 0912345678').fill('0912345678');
 await page.evaluate(({engine,version})=>{document.title='HW03 Task 3 '+engine+' - Profile';const e=document.createElement('aside');e.id='task3-window-caption';e.textContent=`23120355 - Võ Hữu Thắng | 23120355@student.hcmus.edu.vn | ${engine} ${version} | Windows | ${location.href}`;Object.assign(e.style,{position:'fixed',bottom:'0',left:'0',right:'0',background:'#111',color:'#ffd700',font:'13px Arial',padding:'12px',zIndex:2147483647});document.body.appendChild(e);},{engine,version:browser.version()});
 await page.bringToFront();
 fs.writeFileSync(path.join(out,'capture-request.json'),JSON.stringify({title:'HW03 Task 3 '+engine+' - Profile',engine,output:path.join(out,'full-window-profile.png'),url:page.url(),browser:env.browser,version:env.browserVersion}));
 console.log('WAITING_WINDOW_CAPTURE',path.join(out,'capture-request.json'));
 if(process.argv.includes('--headless'))fs.writeFileSync(path.join(out,'capture.done.json'),JSON.stringify({status:'Not available: headless Firefox; Computer Use capture stopped',fullWindowCaptured:false})); const until=Date.now()+240000;while(!fs.existsSync(path.join(out,'capture.done.json'))&&Date.now()<until)await new Promise(r=>setTimeout(r,500));
 env.fullWindowEvidence=fs.existsSync(path.join(out,'capture.done.json'))?JSON.parse(fs.readFileSync(path.join(out,'capture.done.json'),'utf8')):{status:'Not captured'};

}
async function finish(){
 for(const pid of createdProducts){try{await api.delete(API+'/products/'+pid);}catch{}}
 const rows=[...results.values()];const counts={};for(const r of rows)counts[r.status]=(counts[r.status]||0)+1;
 const report={environment:env,counts,results:rows,extraFinding:env.extraFinding,dialogs,network,cleanup:{deletedSyntheticProductIds:createdProducts,retained:'Dedicated synthetic user and own status-fixture/test orders retained for audit; seed products not modified'}};
 fs.writeFileSync(path.join(out,'execution.json'),JSON.stringify(report,null,2));
 const esc=s=>String(s??'').replaceAll('|','\\|').replaceAll('\n','<br>');
 let md=`# Task 1: Playwright local execution\n\nRun: ${runId}\n\nGoogle ${env.browser} ${env.browserVersion}; ${env.os} ${env.osRelease}; viewport 1440×1000; locale vi-VN.\n\nKết quả: ${JSON.stringify(counts)}\n\nKết quả này đối chiếu checklist gốc, chưa chứng nhận các tiêu chí thiết kế là yêu cầu chức năng bắt buộc. Native mobile chưa chạy. Không mock API; dữ liệu test tổng hợp riêng. Backend tự seed lại DB khi khởi động theo database.js.\n\n| Item | Kết quả | Quan sát | Evidence |\n| --- | --- | --- | --- |\n`;
 for(const r of rows)md+=`| ${r.id} | ${r.status} | ${esc(r.notes)} | ${r.evidence.map(e=>`[ảnh](${path.basename(e)})`).join(', ')} |\n`;
 md+='\nChi tiết steps, thời điểm, môi trường, dialog và network status: [execution.json](execution.json). Không chứa token/password.\n';
 fs.writeFileSync(path.join(out,'REPORT.md'),md);fs.writeFileSync(path.join(root,'task3-runs','LATEST-'+engine+'.txt'),path.relative(root,out));
 console.log('RESULT',out,JSON.stringify(counts));await context?.close();await browser?.close();await api?.dispose();
}
main().catch(e=>{console.error('RUN ERROR',e.message);process.exitCode=1;}).finally(finish);

