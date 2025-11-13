# 繧ｻ繝・ヨ繧｢繝・・繧ｬ繧､繝・
## 蛻晏屓繧ｻ繝・ヨ繧｢繝・・

### 1. 萓晏ｭ倬未菫ゅ・繧､繝ｳ繧ｹ繝医・繝ｫ

`ash
npm install
`

### 2. 逕ｻ蜒上ヵ繧｡繧､繝ｫ縺ｮ繧ｳ繝斐・

繝・Φ繝励Ξ繝ｼ繝医・逕ｻ蜒上ｒ public/images/ 繝・ぅ繝ｬ繧ｯ繝医Μ縺ｫ繧ｳ繝斐・縺励※縺上□縺輔＞縲・
- PowerShell 繧ｹ繧ｯ繝ｪ繝励ヨ繧貞茜逕ｨ縺吶ｋ蝣ｴ蜷・
`powershell
.\setup-images.ps1
`

- 謇句虚縺ｧ繧ｳ繝斐・縺吶ｋ蝣ｴ蜷・  - images/ 繝・ぅ繝ｬ繧ｯ繝医Μ蜀・・縺吶∋縺ｦ縺ｮ繝輔ぃ繧､繝ｫ繧・  - public/images/ 繝・ぅ繝ｬ繧ｯ繝医Μ縺ｫ繧ｳ繝斐・

### 3. 髢狗匱繧ｵ繝ｼ繝舌・縺ｮ襍ｷ蜍・
`ash
npm run dev
`

繝悶Λ繧ｦ繧ｶ縺ｧ http://localhost:3000 繧帝幕縺・※縺上□縺輔＞縲・
## 繧ｫ繧ｹ繧ｿ繝槭う繧ｺ譁ｹ豕・
### 莨夂､ｾ蜷阪・繝｡繝九Η繝ｼ
src/app/layout.tsx 縺ｮ companyName 縺ｨ menuItems 繧堤ｷｨ髮・＠縺ｾ縺吶・
`	sx
const menuItems = [
  { label: 'HOME', path: '/' },
  {
    label: 'SERVICE',
    path: '',
    children: [
      { label: '繧ｵ繝ｼ繝薙せ1', path: '/service' },
      { label: '繧ｵ繝ｼ繝薙せ2', path: '/service' },
    ],
  },
  { label: 'COMPANY', path: '/company' },
  { label: 'CONTACT', path: '/contact' },
];
`

### 繧ｹ繝ｩ繧､繝峨す繝ｧ繝ｼ繝ｻ諠・ｱ繝ｻ縺顔衍繧峨○
src/app/page.tsx 縺ｮ slides / infoItems / 
ewsItems 驟榊・繧堤ｷｨ髮・＠縺ｾ縺吶・
### 繧ｵ繝ｼ繝薙せ邏ｹ莉・src/app/service/page.tsx 縺ｮ serviceItems 繧堤ｷｨ髮・＠縺ｾ縺吶・
### 莨夂､ｾ讎りｦ√・縺雁撫縺・粋繧上○
- src/app/company/page.tsx
- src/app/contact/page.tsx

### 繧ｫ繝ｩ繝ｼ繝・・繝・src/app/globals.css 縺ｮCSS螟画焚繧堤ｷｨ髮・＠縺ｦ縺上□縺輔＞縲・
`css
:root {
  --text-color: #eee;
  --primary-color: #02354e;
  --primary-inverse-color: #eee;
  --global-space: 5vw;
}
`

## 繝薙Ν繝峨→繝・・繝ｭ繧､

`ash
npm run build
npm run start
`


pm run build 縺ｧ .next/ 縺ｫ繝薙Ν繝画・譫懃黄縺檎函謌舌＆繧後∪縺吶・
## 繝医Λ繝悶Ν繧ｷ繝･繝ｼ繝・ぅ繝ｳ繧ｰ

### 逕ｻ蜒上′陦ｨ遉ｺ縺輔ｌ縺ｪ縺・1. public/images/ 縺ｫ繝輔ぃ繧､繝ｫ縺後≠繧九°遒ｺ隱・2. 繝代せ縺・/images/... 縺ｫ縺ｪ縺｣縺ｦ縺・ｋ縺狗｢ｺ隱搾ｼ・public 縺ｯ蜷ｫ繧√↑縺・ｼ・
### 繧ｹ繧ｿ繧､繝ｫ縺碁←逕ｨ縺輔ｌ縺ｪ縺・1. 繝悶Λ繧ｦ繧ｶ縺ｮ繧ｭ繝｣繝・す繝･繧偵け繝ｪ繧｢
2. 髢狗匱繧ｵ繝ｼ繝舌・繧貞・襍ｷ蜍・
### 繝翫ン繧ｲ繝ｼ繧ｷ繝ｧ繝ｳ縺悟虚菴懊＠縺ｪ縺・1. 繝悶Λ繧ｦ繧ｶ縺ｮ髢狗匱閠・ヤ繝ｼ繝ｫ縺ｧ繧ｨ繝ｩ繝ｼ繧堤｢ｺ隱・2. 
pm run dev 縺ｮ繝ｭ繧ｰ縺ｫ繧ｨ繝ｩ繝ｼ縺悟・縺ｦ縺・↑縺・°遒ｺ隱・
## 谺｡縺ｮ繧ｹ繝・ャ繝・
- [README.md](./README.md) 縺ｧ蜈ｨ菴灘ワ繧堤｢ｺ隱・- 蜷・さ繝ｳ繝昴・繝阪Φ繝医ｒ邱ｨ髮・＠縺ｦ繝悶Λ繝ｳ繝峨↓蜷医ｏ縺帙※隱ｿ謨ｴ
