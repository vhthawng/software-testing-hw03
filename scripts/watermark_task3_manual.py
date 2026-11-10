from pathlib import Path
from PIL import Image,ImageDraw,ImageFont,ImageChops
import hashlib,json
R=Path(__file__).resolve().parents[1]
src=R/'screenshots/manual';out=R/'task3-runs/2026-11-11-local/android';out.mkdir(parents=True,exist_ok=True)
font=ImageFont.truetype('C:/Windows/Fonts/arial.ttf',24)
manifest=[]
for name in ['02.jpg','03.jpg','04.jpg','05.jpg','06.jpg','07.jpg']:
 p=src/name;original=Image.open(p).convert('RGB');border=150
 result=Image.new('RGB',(original.width,original.height+border),'#101827');result.paste(original,(0,border));draw=ImageDraw.Draw(result)
 for y,text in zip([12,48,84,117],['23120355 - Võ Hữu Thắng | 23120355@student.hcmus.edu.vn','Samsung Galaxy A52 SM-A525F/DS | Android / Expo Go','Ảnh gốc do sinh viên cung cấp; chỉ thêm viền chú thích.','Android/Expo Go version chưa cung cấp; SDK project: 54.']):draw.text((18,y),text,font=font,fill='#FFD700')
 target=out/('android_'+p.stem+'_watermarked.png');result.save(target)
 saved=Image.open(target).convert('RGB');assert ImageChops.difference(original,saved.crop((0,border,original.width,border+original.height))).getbbox() is None
 manifest.append({'source':str(p.relative_to(R)).replace('\\','/'),'sourceSHA256':hashlib.sha256(p.read_bytes()).hexdigest(),'output':str(target.relative_to(R)).replace('\\','/'),'unchangedOriginalRectangle':[0,border,original.width,border+original.height],'pixelPreservationVerified':True})
(out/'watermark-manifest.json').write_text(json.dumps(manifest,ensure_ascii=False,indent=2),encoding='utf-8')
print('Watermarked 6 images; original pixel area preserved exactly; About phone excluded.')
