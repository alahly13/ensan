import type { Consultant } from "./types";

/**
 * بيانات تجريبية خيالية — ليست مستشارين حقيقيين.
 * لا تحتوي على أرقام هواتف أو بيانات تواصل حقيقية.
 * قنوات التواصل هنا روابط مثال (example.com) للعرض فقط.
 */
export const consultants: Consultant[] = [
  {
    slug: "layla-career",
    name: "ليلى حسان",
    title: "مستشارة تطوير مهني",
    specialty: "المسار الوظيفي والمقابلات",
    bio: "تساعد حديثي التخرج والمهنيين على ترتيب أولوياتهم المهنية، وصياغة سيرة ذاتية واضحة، والاستعداد للمقابلات بخطوات عملية.",
    categoryIds: ["career", "life"],
    languages: ["العربية", "الإنجليزية"],
    location: "القاهرة · عن بُعد",
    remote: true,
    tags: ["سيرة ذاتية", "مقابلات عمل", "تغيير مسار", "حديثو التخرج"],
    initials: "لح",
    accent: "#1C6B62",
    featured: true,
    contact: {
      email: "layla.demo@example.com",
      website: "https://example.com/layla-hassan",
      bookingUrl: "https://example.com/layla-hassan/booking",
    },
  },
  {
    slug: "omar-business",
    name: "عمر فاروق",
    title: "مستشار أعمال ومشاريع ناشئة",
    specialty: "نماذج العمل والتسعير",
    bio: "يرافق أصحاب الأفكار في تحويل الفكرة إلى عرض واضح: من هم العملاء، وكيف نُسعّر، وما أول خطوة تشغيلية ممكنة.",
    categoryIds: ["business", "finance"],
    languages: ["العربية"],
    location: "الإسكندرية · عن بُعد",
    remote: true,
    tags: ["ريادة أعمال", "نموذج عمل", "تسعير", "مشاريع صغيرة"],
    initials: "عف",
    accent: "#D88B63",
    featured: true,
    contact: {
      website: "https://example.com/omar-farouk",
      linkedin: "https://www.linkedin.com/company/example",
      bookingUrl: "https://example.com/omar-farouk/booking",
    },
  },
  {
    slug: "salma-tech",
    name: "سلمى رشوان",
    title: "مستشارة تقنية ومنتجات رقمية",
    specialty: "التحول الرقمي وأدوات العمل",
    bio: "تشرح التقنية بلغة بسيطة: اختيار الأدوات المناسبة، وتنظيم العمل الرقمي، وفهم أساسيات بناء المنتجات دون تعقيد.",
    categoryIds: ["tech", "business"],
    languages: ["العربية", "الإنجليزية"],
    location: "عن بُعد",
    remote: true,
    tags: ["تحول رقمي", "إدارة منتجات", "أدوات رقمية", "عمل حر"],
    initials: "سر",
    accent: "#2F7E79",
    featured: true,
    contact: {
      email: "salma.demo@example.com",
      website: "https://example.com/salma-rashwan",
      linkedin: "https://www.linkedin.com/company/example",
    },
  },
  {
    slug: "karim-finance",
    name: "كريم منصور",
    title: "مستشار تخطيط مالي شخصي",
    specialty: "الميزانية والادخار",
    bio: "يساعد الأفراد والأسر على بناء ميزانية واقعية، وفهم أولويات الإنفاق، ووضع خطة ادخار هادئة قابلة للاستمرار.",
    categoryIds: ["finance", "life"],
    languages: ["العربية"],
    location: "الجيزة · عن بُعد",
    remote: true,
    tags: ["ميزانية", "ادخار", "ديون", "تخطيط مالي"],
    initials: "كم",
    accent: "#41555A",
    contact: {
      email: "karim.demo@example.com",
      bookingUrl: "https://example.com/karim-mansour/booking",
    },
  },
  {
    slug: "nour-education",
    name: "نور الهدى سامي",
    title: "مرشدة أكاديمية",
    specialty: "اختيار التخصص وخطة المذاكرة",
    bio: "ترافق طلاب الثانوية والجامعة في اختيار التخصص المناسب، وبناء عادات مذاكرة واقعية، والتعامل مع ضغط الامتحانات.",
    categoryIds: ["education", "life"],
    languages: ["العربية"],
    location: "القاهرة · حضوري وعن بُعد",
    remote: true,
    tags: ["ثانوية عامة", "جامعة", "منح", "مذاكرة"],
    initials: "نس",
    accent: "#7A5C4E",
    contact: {
      website: "https://example.com/nour-sami",
      email: "nour.demo@example.com",
    },
  },
  {
    slug: "hassan-legal",
    name: "حسن العطار",
    title: "مهتم بالثقافة القانونية العامة",
    specialty: "تبسيط الإجراءات والمصطلحات",
    bio: "يقدّم شرحًا عامًا ومبسّطًا للمصطلحات والإجراءات الشائعة لمساعدتك على فهم الصورة قبل استشارة مختص — دون ادعاء ترخيص أو اعتماد.",
    categoryIds: ["legal", "business"],
    languages: ["العربية"],
    location: "عن بُعد",
    remote: true,
    tags: ["ثقافة قانونية", "عقود", "إجراءات", "شركات"],
    initials: "حع",
    accent: "#172F35",
    contact: {
      website: "https://example.com/hassan-attar",
    },
  },
];

export const featuredConsultants = consultants.filter((c) => c.featured);

export function getConsultant(slug: string): Consultant | undefined {
  return consultants.find((c) => c.slug === slug);
}
