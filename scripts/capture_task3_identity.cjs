const {chromium,firefox}=require('../skills/playwright-skill/node_modules/playwright');
const fs=require('fs'),path=require('path'),os=require('os');
const root=path.resolve(__dirname,'..');
(async()=>{for(const engine of ['chrome','firefox']){
 const folder=path.join(root,fs.readFileSync(path.join(root,'task3-runs/LATEST-'+engine+'.txt'),'utf8').trim());
 const result=JSON.parse(fs.readFileSync(path.join(folder,'execution.json'),'utf8'));
 const browser=engine==='chrome'?await chromium.launch({channel:'chrome',headless:false}):await firefox.launch({headless:true});
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000},locale:'vi-VN'});page.setDefaultTimeout(12000);
  await page.goto('http://localhost:5173/login');await page.locator('form input').nth(0).fill(result.environment.userEmail);await page.locator('form input').nth(1).fill('Task1Local123!');await page.getByRole('button',{name:'Sign In'}).click();await page.getByRole('link',{name:/Chào,/}).waitFor();
  await page.getByRole('link',{name:/Chào,/}).click();await page.getByText('Hồ sơ của bạn',{exact:true}).waitFor();await page.locator('form input[required]').fill('Võ Hữu Thắng - 23120355');
  await page.evaluate(({browser,version,osVersion})=>{const e=document.createElement('div');e.textContent=`23120355 - Võ Hữu Thắng | 23120355@student.hcmus.edu.vn | ${browser} ${version} | Windows ${osVersion} | ${location.href}`;Object.assign(e.style,{position:'fixed',bottom:'0',left:'0',right:'0',zIndex:2147483647,background:'#101827',color:'#ffd700',font:'13px Arial',padding:'12px'});document.body.appendChild(e);},{browser:engine==='chrome'?'Google Chrome':'Firefox (Playwright build)',version:browser.version(),osVersion:os.release()});
  await page.screenshot({path:path.join(folder,'identity-profile-viewport.png'),fullPage:true});
  result.environment.identityEvidence=path.relative(root,path.join(folder,'identity-profile-viewport.png')).replaceAll('\\','/');
  result.environment.screenshotType='Actual browser viewport with context-derived caption; not full OS window';
  fs.writeFileSync(path.join(folder,'execution.json'),JSON.stringify(result,null,2));console.log('Saved identity viewport',engine);
 }finally{await browser.close();}
}})().catch(e=>{console.error(e.message);process.exitCode=1;});
