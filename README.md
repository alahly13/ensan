# إنسان ENSAN — استشارة أوضح، وخطوة أهدى

منصة عربية لاكتشاف المستشارين وقراءة ملفاتهم والتواصل عبر القنوات التي ينشرونها. النسخة الحالية واجهة عرض واكتشاف ببيانات تجريبية خيالية.

## المتطلبات

- Node.js 20+ (تم التطوير على Node 24)
- npm

## التثبيت

```bash
npm install
```

## التشغيل محليًا

```bash
npm run dev
```

ثم افتح `http://localhost:3000`.

## الفحص والبناء

```bash
npm run lint
npm run typecheck
npm run build
npm run start
```

## التقنية

- Next.js `16.4.2` (مثبتة بدقة)
- React 19 + TypeScript strict + App Router
- Tailwind CSS 4 عبر `@tailwindcss/postcss`
- Lucide React للأيقونات
- خط IBM Plex Sans Arabic عبر `next/font/google`

## هيكل المشروع

```text
src/
  app/               # المسارات (الرئيسية، المستشارون، الملف، عن، انضم، خصوصية، شروط)
  components/
    layout/          # Header, Footer, Logo
    ui/              # حاويات وأزرار وعناوين مشتركة
    sections/        # أقسام الهبوط
    consultants/     # بطاقة المستشار وقنوات التواصل والدليل
  features/consultants/  # الأنواع + البيانات التجريبية + أدوات البحث
  lib/               # دوال مساعدة
```

## النشر على GitHub و Vercel

1. أنشئ مستودعًا جديدًا على GitHub (لا تدفع أي أسرار).
2. من داخل مجلد المشروع:
   ```bash
   git init
   git add .
   git commit -m "ENSAN v0.1 — Arabic-first landing + directory foundation"
   git branch -M main
   git remote add origin <YOUR_REPO_URL>
   git push -u origin main
   ```
3. في Vercel: **Add New → Project → Import** المستودع، واترك الإعدادات الافتراضية (Next.js). لا توجد متغيرات بيئة مطلوبة.
4. بعد النشر ستحصل على رابط معاينة عام (Preview) ورابط إنتاج.

## حدود معلنة

- كل الملفات بيانات تجريبية خيالية (`src/features/consultants/data.ts`).
- لا أرقام هواتف حقيقية؛ روابط التواصل أمثلة `example.com` للعرض.
- لا حسابات / حجوزات / مدفوعات / تحقق — تُبنى لاحقًا بآلية حقيقية.
- نموذج «انضم كمستشار» تجريبي ولا يُرسل بيانات لأي مكان.
