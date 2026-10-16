import type { Category } from "./types";

export const categories: Category[] = [
  {
    id: "career",
    title: "التطوير المهني والمسار الوظيفي",
    description: "وضوح في الخطوة المهنية القادمة: سيرة ذاتية، مقابلات، وتغيير مسار.",
    icon: "briefcase",
  },
  {
    id: "education",
    title: "التعليم والتوجيه الأكاديمي",
    description: "اختيار التخصص والجامعة وخطة مذاكرة تناسب ظروفك.",
    icon: "graduation",
  },
  {
    id: "business",
    title: "الأعمال وريادة المشاريع",
    description: "من الفكرة إلى التشغيل: نموذج عمل وتسعير وأول عملاء.",
    icon: "rocket",
  },
  {
    id: "tech",
    title: "التقنية والتحول الرقمي",
    description: "فهم عملي للأدوات الرقمية وبناء المنتجات والعمل التقني.",
    icon: "cpu",
  },
  {
    id: "legal",
    title: "الاستشارات القانونية",
    description: "فهم عام للإجراءات والحقوق — دون ادعاء ترخيص أو اعتماد.",
    icon: "scale",
  },
  {
    id: "finance",
    title: "التخطيط المالي",
    description: "تنظيم الميزانية والادخار وقرارات مالية أهدأ.",
    icon: "wallet",
  },
  {
    id: "life",
    title: "المهارات الحياتية",
    description: "إدارة الوقت والتواصل واتخاذ القرار بثقة.",
    icon: "compass",
  },
  {
    id: "wellbeing",
    title: "الدعم النفسي والرفاه الشخصي",
    description: "مساحة حوار داعمة — ليست بديلًا عن العلاج المتخصص.",
    icon: "heart",
  },
];

export const categoryById = new Map(categories.map((c) => [c.id, c]));

export function categoryTitle(id: string): string {
  return categoryById.get(id)?.title ?? id;
}
