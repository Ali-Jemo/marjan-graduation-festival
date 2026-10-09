/**
 * مهرجان التخرج الطلابي الأول 2026 — قسم هندسة تقنيات الحاسوب | كلية الطف الجامعة
 * Main Application Logic & View Engine
 */

const app = document.querySelector("#app");

// ─── SVG Icons Helper ───
const ICONS = {
  cap: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
  capLg: `<svg class="icon-svg-lg" viewBox="0 0 24 24"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
  logo: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><polygon points="12,2.8 20,7.4 20,16.6 12,21.2 4,16.6 4,7.4"/><path d="M12 7.2 16.6 9.6 12 12 7.4 9.6Z" fill="currentColor" stroke="none"/><path d="M8.6 12.2v2c0 1.7 6.8 1.7 6.8 0v-2"/><line x1="16.6" y1="9.6" x2="16.6" y2="13.4"/><circle cx="16.6" cy="14.7" r="1" fill="currentColor" stroke="none"/></svg>`,
  star: `<svg class="icon-svg-lg" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`,
  rocket: `<svg class="icon-svg-lg" viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>`,
  users: `<svg class="icon-svg-lg" viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
  clock: `<svg class="icon-svg-lg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>`,
  calendar: `<svg class="icon-svg" viewBox="0 0 24 24"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>`,
  mapPin: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>`,
  arrowLeft: `<svg class="icon-svg" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
  arrowLeftSm: `<svg class="icon-svg-sm" viewBox="0 0 24 24"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>`,
  arrowRightSm: `<svg class="icon-svg-sm" viewBox="0 0 24 24"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>`,
  check: `<svg class="icon-svg" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  checkSm: `<svg class="icon-svg-sm" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
  copy: `<svg class="icon-svg" viewBox="0 0 24 24"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>`,
  printer: `<svg class="icon-svg" viewBox="0 0 24 24"><polyline points="6 9 6 2 18 2 18 9"></polyline><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><rect width="12" height="8" x="6" y="14"></rect></svg>`,
  upload: `<svg class="icon-svg" viewBox="0 0 24 24"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="17 8 12 3 7 8"></polyline><line x1="12" y1="3" x2="12" y2="15"></line></svg>`,
  file: `<svg class="icon-svg-sm" viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>`,
  home: `<svg class="icon-svg-sm" viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>`,
  chevronDown: `<svg class="icon-svg faq-chevron" viewBox="0 0 24 24"><polyline points="6 9 12 15 18 9"></polyline></svg>`,
  sun: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"></path></svg>`,
  moon: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"></path></svg>`,
  external: `<svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
  chat: `<svg class="icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>`,
  close: `<svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>`,
  menu: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="4" y1="7" x2="20" y2="7"></line><line x1="4" y1="12" x2="20" y2="12"></line><line x1="4" y1="17" x2="20" y2="17"></line></svg>`,
  chev: `<svg class="icon-svg-sm nav-chev" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`,
  expand: `<svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 3 21 3 21 9"></polyline><polyline points="9 21 3 21 3 15"></polyline><line x1="21" y1="3" x2="14" y2="10"></line><line x1="3" y1="21" x2="10" y2="14"></line></svg>`,
  messageQuestion: `<svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>`,
  creditCard: `<svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg>`,
  coins: `<svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18"></path><path d="M7 6h1v4"></path></svg>`,
  edit: `<svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>`,
  clipboard: `<svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>`,
  lock: `<svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
  ticket: `<svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"></path><line x1="13" y1="5" x2="13" y2="19" stroke-dasharray="2"></line></svg>`,
  bot: `<svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="10" rx="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4M8 16h.01M16 16h.01"></path></svg>`,
};

// ─── Track Configurations ───
const TRACKS = {
  attendee: {
    id: "attendee",
    number: "01",
    label: "01. مسار الحضور والتكريم",
    title: "الحضور والتكريم",
    tag: "أساسي",
    image: "./public/images/track-ceremony.jpg",
    width: 800,
    height: 533,
    subtitle: "المسيرة الرسمية، الروب، ودرع التكريم",
    desc: "حضور اليوم الاحتفالي والمشاركة في مراسم التكريم الرسمية والتقاط الصور التذكارية على المنصة.",
    tip: "المسار العام الأكثر طلباً؛ يشمل حضور مراسم التكريم واستلام درع الدفعة ومشاركة الأهل والزملاء فرحة التخرج.",
    defaultField: "حضور وتكريم الدفعة",
  },
  project: {
    id: "project",
    number: "02",
    label: "02. مسار عرض المشاريع",
    title: "عرض المشاريع",
    tag: "ابتكار",
    image: "./public/images/track-projects.jpg",
    width: 800,
    height: 533,
    subtitle: "جناح مجهز لعرض فكرة ومشروع التخرج",
    desc: "مساحة مخصصة لعرض مشاريع التخرج والأفكار الواعدة أمام المجتمع الأكاديمي والضيوف والرعاة.",
    tip: "مخصص للطلبة وفرق المشاريع لعرض ابتكاراتهم في المعرض التقني. يُفضَّل إرفاق ملف ملخص أو عرض توضيحي في الأسفل.",
    defaultField: "الذكاء الاصطناعي وإنترنت الأشياء",
  },
  bazaar: {
    id: "bazaar",
    number: "03",
    label: "03. مسار البازار الطلابي",
    title: "البازار الطلابي",
    tag: "ريادة",
    image: "./public/images/track-bazar.jpg",
    width: 800,
    height: 533,
    subtitle: "جناح للأعمال الناشئة والمشغولات والضيافة",
    desc: "أجنحة منظمة للمشغولات اليدوية والمشاريع الطلابية الناشئة والهدايا التذكارية والضيافة.",
    tip: "مساحة لدعم المشاريع الصغيرة والأعمال اليدوية والإنتاج الطلابي المصاحب لليوم الاحتفالي.",
    defaultField: "مشغولات يدوية وهدايا تذكارية",
  },
  volunteer: {
    id: "volunteer",
    number: "04",
    label: "04. مسار التنظيم وإدارة الحشود",
    title: "المشاركة والتنظيم",
    tag: "تنظيم",
    image: "./public/images/track-volunteering.jpg",
    width: 800,
    height: 533,
    subtitle: "إدارة الاستقبال والضيافة والمراسم",
    desc: "فرص للتطوع والمساهمة في الاستقبال والضيافة وإدارة الحشود وصناعة تجربة تليق بالدفعة.",
    tip: "فرصة للمشاركة في تنظيم مراسم الاحتفال والاستقبال والبروتوكول مع شهادة تقديرية للجهود التنظيمية.",
    defaultField: "الاستقبال والبروتوكول والتنظيم",
  },
  media: {
    id: "media",
    number: "05",
    label: "05. مسار الإعلام والتغطية",
    title: "الإعلام والتوثيق",
    tag: "إعلام",
    image: "./public/images/track-media.jpg",
    width: 800,
    height: 1000,
    subtitle: "التصوير الفوتوغرافي والفيديو والمونتاج",
    desc: "تغطية إبداعية بالصورة والفيديو وصناعة المحتوى للتوثيق المباشر لجميع فقرات اليوم.",
    tip: "فريق التغطية الإبداعية للمهرجان (تصوير فوتوغرافي، مونتاج فيديو، توثيق رقمي وصناعة المحتوى).",
    defaultField: "تصوير فوتوغرافي وصناعة محتوى",
  },
};

// ─── Photo Gallery Data ───
const GALLERY_PHOTOS = [
  {
    id: "photo-1",
    src: "./public/images/hero-graduation-main.jpg",
    title: "مسيرة التخرج الرسمية وتتويج الدفعة",
    tag: "مراسم التكريم",
    desc: "أجواء التكريم الرسمي وتسليم الدروع التذكارية في مجمع الكليات الهندسية.",
    colSpan: 2,
    width: 1400,
    height: 933,
  },
  {
    id: "photo-2",
    src: "./public/images/gallery-moment-1.jpg",
    title: "فرحة الإنجاز مع العائلات والأساتذة",
    tag: "الأجواء العائلية",
    desc: "توثيق اللحظات الأكثر فخراً والتقاط الصور التذكارية الخالدة.",
    colSpan: 1,
    width: 800,
    height: 1200,
  },
  {
    id: "photo-3",
    src: "./public/images/gallery-moment-2.jpg",
    title: "احتفاء الزملاء والتقاط الصورة الجماعية",
    tag: "دفعة 2026",
    desc: "تلاحم الطلبة والاحتفاء بجهد سنوات الدراسة الأكاديمية المشتركة.",
    colSpan: 1,
    width: 800,
    height: 533,
  },
  {
    id: "photo-4",
    src: "./public/images/gallery-moment-3.jpg",
    title: "معرض الابتكار والنماذج الهندسية",
    tag: "المشاريع التقنية",
    desc: "عرض المشاريع التطبيقية ونماذج الذكاء الاصطناعي وإنترنت الأشياء أمام الحضور.",
    colSpan: 2,
    width: 800,
    height: 533,
  },
];

// ─── FAQ List ───
const FAQS = [
  {
    q: "من يمكنه التقديم والمشاركة في المهرجان؟",
    a: "المهرجان مخصص لطلبة وخريجي قسم هندسة تقنيات الحاسوب — كلية الطف الجامعة (دفعة 2026)، مع إمكانية مشاركة طلبة الأقسام والجامعات الأخرى في مسارات البازار، التطوع التنظيمي، والتغطية الإعلامية.",
  },
  {
    q: "ما هي آلية المساهمة المالية وما الذي تغطيه؟",
    a: "تبدأ المساهمة الأساسية من 10,000 دينار عراقي وتغطي تكاليف التنظيم، روب التخرج، ودرع التكريم التذكاري، مع إمكانية رفع المساهمة بمضاعفات 1,000 د.ع لدعم تجهيزات الفعالية.",
  },
  {
    q: "متى وكيف أستلم بطاقة الدخول والتكريم؟",
    a: "بمجرد تقديم طلبك والحصول على رقم الطلب المرجعي، سيتواصل معك منسق اللجنة المباشر عبر معرّف تيليجرام لتأكيد بياناتك وتسليمك بطاقة الدخول وتحديد مقعدك.",
  },
  {
    q: "هل يمكن دعوة الأهل والأصدقاء للحفل؟",
    a: "نعم بالتأكيد! القاعات ومسرح التكريم في مجمع الكليات الهندسية مجهزة بالكامل لاستقبال عائلات الطلبة ومشاركتهم بهجة التخرج والتقاط الصور التذكارية.",
  },
  {
    q: "هل يلزم رفع ملف داعم مع استمارة الطلب؟",
    a: "الملف اختياري تماماً. يُفضَّل إرفاقه لمسار عرض المشاريع (ملخص PDF أو عرض تقديمي) أو مسار التوثيق الإعلامي (نماذج أعمال سابقة). يقبل صيغ PDF أو Word حتى 5 ميغابايت.",
  },
  {
    q: "كيف أقوم بتسديد قيمة المساهمة المالية؟",
    a: "تسجيل القيمة في الاستمارة هو لتثبيت رغبتك؛ ثم يوضح منسق اللجنة المنظمة عبر تيليجرام نقاط الاستلام المعتمدة داخل الكلية أو عبر المحافظ الإلكترونية المعتمدة.",
  },
  {
    q: "هل يمكنني تعديل بياناتي بعد إرسال الطلب؟",
    a: "نعم، يمكنك التواصل مع منسق اللجنة التنظيمية عبر تيليجرام وتزويده برقم الطلب المرجعي الخاص بك لإجراء أي تعديل على بياناتك بسهولة.",
  },
];

// ─── Sponsors & Partners List (real data) ───
const SPONSORS = [
  {
    name: "قسم هندسة تقنيات الحاسوب",
    role: "الجهة الأكاديمية والمنظمة • كلية الطف الجامعة — كربلاء",
    badge: "الجهة المنظمة",
    tint: "#8ea3bf",
    accentBadge: true,
    url: "https://www.altuff.edu.iq/departments/6",
    blurb: "تخصص هندسي يجمع الحاسوب والإلكترونيات والاتصالات. نظام بولونيا منذ 2023، قسم توأم مع التقنية الكهربائية في بغداد، وعشر دفعات متخرجة.",
    stats: [
      { n: "10", l: "دفعات متخرجة" },
      { n: "359", l: "طالب بالقسم" },
      { n: "9", l: "أقسام بالكلية" },
    ],
    logo: `<svg class="sponsor-logo-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg>`,
  },
  {
    name: "LXD Co.",
    role: "الشريك البرمجي والذكاء الاصطناعي",
    badge: "AI & Software",
    tint: "#5b8fd6",
    accentBadge: true,
    url: "https://lxds.org",
    blurb: "شركة عراقية متخصصة في حلول البرمجيات وبنية الذكاء الاصطناعي والحوسبة السحابية المتقدمة.",
    chips: ["API Service", "AI Solutions", "Cloud"],
    cover: "./public/images/sponsors/lxd-api.png",
    logo: `<svg class="sponsor-logo-svg" viewBox="0 0 100 100" fill="none"><path d="M20 30L80 20L80 40L20 50Z" fill="currentColor"/><path d="M20 55L80 45L80 65L20 75Z" fill="currentColor" opacity="0.65"/><path d="M20 80L80 70L80 85L20 95Z" fill="currentColor" opacity="0.35"/></svg>`,
  },
  {
    name: "LXD Host",
    role: "شريك الاستضافة والخدمات السحابية",
    badge: "استضافة وسحابة",
    tint: "#2f7f6d",
    accentBadge: false,
    url: "https://host.lxds.org",
    blurb: "استضافة سريعة للمواقع وبوتات تيليجرام ونماذج الذكاء وحاويات Docker — مع SSL مجاني وبنية موزعة عالمياً.",
    chips: ["مواقع", "بوتات تيليجرام", "Docker"],
    cover: "./public/images/sponsors/lxd-host.png",
    logo: `<svg class="sponsor-logo-svg" viewBox="350 270 320 230" fill="currentColor"><path d="M590.756653,338.301758 C612.027344,379.291870 633.100952,419.964508 654.226624,460.610138 C658.856323,469.517578 658.628418,477.416138 653.342896,482.821625 C649.989746,486.250885 645.948669,487.430298 641.149597,487.420410 C597.658142,487.330780 554.166382,487.397583 510.674713,487.398438 C468.849426,487.399261 427.017517,486.954010 385.202606,487.605743 C371.614777,487.817535 363.564301,474.881195 369.853607,462.883148 C394.601013,415.673004 419.101471,368.333405 443.704071,321.047302 C446.492554,315.687805 451.049194,312.930023 456.993408,312.751587 C463.391418,312.559448 468.287598,315.415131 471.269318,321.091034 C479.325317,336.426361 487.273315,351.818451 495.264191,367.187988 C508.556610,392.754486 521.854126,418.318390 535.132385,443.892242 C536.230591,446.007355 537.226074,448.046417 540.151428,448.014862 C550.795532,447.899933 561.475281,448.378693 572.075806,447.661957 C583.906006,446.862183 593.952759,436.062836 594.687256,424.612244 C595.556030,411.068237 587.352905,399.465546 574.934937,396.439087 C570.434570,395.342285 566.020325,395.359528 561.652405,396.739044 C559.038025,397.564667 557.707336,396.953125 556.897705,394.207550 C549.110107,367.799713 534.373169,357.030396 506.780975,357.432800 C506.144989,357.442108 505.507507,357.347229 504.901031,357.303131 C504.067200,355.043304 505.574036,353.625702 506.362122,352.096802 C516.588989,332.255981 526.898865,312.457947 537.135132,292.621918 C540.362671,286.367554 544.873108,282.512939 552.409180,282.595184 C559.792053,282.675751 563.948181,286.716156 567.061157,292.756409 C574.844238,307.858002 582.732361,322.905426 590.756653,338.301758z"></path></svg>`,
  },
  {
    name: "axiq team",
    role: "التطوير الهندسي والحلول التقنية",
    badge: "شريك تقني",
    tint: "#6c7bff",
    accentBadge: false,
    url: "https://github.com/Ali-Jemo/axiq-os",
    blurb: "فريق هندسي يبني نظام تشغيل Axiq من الصفر بلغة Rust — نواة سريعة الإقلاع ومعمارية عصرية محسّنة للعتاد.",
    chips: ["Rust", "Axiq OS"],
    cover: "./public/images/sponsors/lxd-mesh.jpg",
    logo: `<svg class="sponsor-logo-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
  },
  {
    name: "jemo labs",
    role: "البحث المعرفي والابتكار الرقمي",
    badge: "شريك معرفي",
    tint: "#9ebd43",
    accentBadge: false,
    url: "https://github.com/Ali-Jemo",
    blurb: "مختبر البحث والتطوير: نماذج أولية سريعة، أدوات ذكاء داخلية، وتحويل الأفكار إلى منتجات قابلة للاختبار.",
    chips: ["بحث", "نماذج أولية"],
    cover: "./public/images/sponsors/jemo-cover.jpg",
    logo: `<img src="./public/images/sponsors/jemolabs-logo.png" alt="jemo labs" class="sponsor-logo-img" />`,
  },
];


// ─── App State ───
let currentView = "home"; // "home" | "apply" | "success"
let currentTrack = "attendee";
let currentContribution = 10000;
let uploadedFile = null;
let countdownTimer = null;
let lastSubmittedResult = null;
let isFaqChatOpen = false;

function getContributionTier(amount) {
  const num = Number(amount) || 10000;
  if (num >= 50000) return { label: "مساهمة راعية وشرفية", desc: "تقدير خاص وتكريم شرفي ضمن الرعاة والداعمين" };
  if (num >= 25000) return { label: "مساهمة متميزة", desc: "دعم فعال يسهم في تحسين وتطوير تجهيزات الفعالية" };
  if (num >= 15000) return { label: "مساهمة داعمة", desc: "مساهمة إضافية تسهم في تقديم تجربة احتفالية أرقى" };
  return { label: "مساهمة الحضور الأساسية", desc: "تغطي تكاليف التسجيل ومستلزمات الحضور والتكريم" };
}

function formatIQD(num) {
  return Number(num || 0).toLocaleString("en-US");
}

// ─── Floating FAQ Chat Widget Template ───
function faqChatWidgetTemplate() {
  return `
    <div id="faq-chat-widget" class="faq-chat-widget ${isFaqChatOpen ? "open" : ""}">

      <!-- Dedicated Mobile Bottom Action Bar (Dock) -->
      <nav class="mobile-bottom-bar" id="mobile-bottom-bar" aria-label="شريط الوصول السريع">
        <button type="button" class="mobile-bar-btn mobile-bar-faq" id="mobile-bar-faq-btn" aria-haspopup="dialog" aria-expanded="${isFaqChatOpen ? "true" : "false"}" aria-label="كل ما قد تسأل عنه - الأسئلة الشائعة">
          <span class="mobile-bar-icon-wrap">
            ${ICONS.chat}
            <span class="mobile-bar-badge" aria-label="7 إجابات">7</span>
          </span>
          <span class="mobile-bar-text">كل ما قد تسأل عنه</span>
        </button>

        <a href="https://t.me/jemo_coBot" target="_blank" rel="noopener noreferrer" class="mobile-bar-btn mobile-bar-cta" aria-label="سجل الآن عبر بوت تيليجرام">
          <span>سجل الآن</span>
          ${ICONS.arrowLeftSm}
        </a>
      </nav>

      <!-- Mobile Backdrop Overlay for Bottom Sheet -->
      <div class="faq-chat-backdrop" id="faq-chat-backdrop" ${isFaqChatOpen ? "" : "hidden"}></div>

      <!-- Floating Bubble Button (FAB - Desktop) -->
      <button type="button" class="faq-chat-fab" id="faq-chat-fab" aria-haspopup="dialog" aria-expanded="${isFaqChatOpen ? "true" : "false"}" aria-controls="faq-chat-window" aria-label="كل ما قد تسأل عنه - الأسئلة الشائعة" title="كل ما قد تسأل عنه">
        <span class="faq-chat-fab-pulse" aria-hidden="true"></span>
        <span class="faq-chat-fab-icon-chat" aria-hidden="true">${ICONS.chat}</span>
        <span class="faq-chat-fab-icon-close" aria-hidden="true">${ICONS.close}</span>
        <span class="faq-chat-fab-label" id="faq-chat-fab-label">${isFaqChatOpen ? "إغلاق الأسئلة" : "كل ما قد تسأل عنه"}</span>
        <span class="faq-chat-fab-badge" id="faq-chat-fab-badge" title="7 إجابات متاحة">7</span>
      </button>

      <!-- Chat Pop-up / Mobile Bottom Sheet Window -->
      <div class="faq-chat-window" id="faq-chat-window" role="dialog" aria-modal="true" aria-labelledby="faq-chat-title" ${isFaqChatOpen ? "" : "hidden"}>
        <!-- Drag Handle for Mobile Sheet -->
        <div class="sheet-drag-handle" aria-hidden="true"></div>
        <div class="faq-chat-header">
          <div class="faq-chat-header-info">
            <div class="faq-chat-avatar">
              <span class="faq-avatar-icon">${ICONS.chat}</span>
              <span class="faq-avatar-status" title="متصل للإجابة الفورية"></span>
            </div>
            <div>
              <h3 class="faq-chat-title" id="faq-chat-title">كل ما قد تسأل عنه</h3>
              <p class="faq-chat-subtitle">مساعد الاستفسارات • إجابات فورية</p>
            </div>
          </div>
          <button type="button" class="faq-chat-close-btn" id="faq-chat-close-btn" aria-label="إغلاق نافذة المحادثة">
            ${ICONS.close}
          </button>
        </div>

        <!-- Search Bar -->
        <div class="faq-chat-search-wrap">
          <input type="search" id="faq-chat-search" class="faq-chat-search-input" placeholder="ابحث في الأسئلة... (مثلاً: الرسوم، الحضور)" aria-label="ابحث في الأسئلة" autocomplete="off" />
          <span class="faq-chat-search-count" id="faq-chat-search-count">${FAQS.length} إجابة</span>
        </div>

        <!-- Chat Conversation Area -->
        <div class="faq-chat-body" id="faq-chat-body">
          <!-- Bot Welcome Message -->
          <div class="faq-msg-group faq-msg-bot">
            <div class="faq-msg-avatar">${ICONS.cap}</div>
            <div class="faq-msg-bubble">
              <p>مرحباً بك! 👋 يسعدنا إرشادك وتوضيح كافة تفاصيل المهرجان والتسجيل.</p>
              <p class="faq-msg-hint">اضغط على أي سؤال لعرض إجابته، أو اكتب في شريط البحث أعلاه:</p>
            </div>
          </div>

          <!-- Interactive Questions Accordion -->
          <div class="faq-chat-questions" id="faq-chat-questions">
            ${FAQS.map((faq, index) => `
              <div class="faq-chat-item" data-faq-index="${index}">
                <button type="button" class="faq-chat-q-btn" aria-expanded="false">
                  <span class="faq-chat-q-icon">${ICONS.messageQuestion}</span>
                  <span class="faq-chat-q-text">${faq.q}</span>
                  <span class="faq-chat-q-chevron">${ICONS.chevronDown}</span>
                </button>
                <div class="faq-chat-a-box" hidden>
                  <div class="faq-chat-a-bubble">
                    <div class="faq-chat-a-text">${faq.a}</div>
                    <button type="button" class="faq-chat-copy-btn" data-copy-answer="${index}" title="نسخ الإجابة">
                      ${ICONS.copy}
                      <span>نسخ الإجابة</span>
                    </button>
                  </div>
                </div>
              </div>
            `).join("")}
          </div>

          <!-- Empty Search State -->
          <div class="faq-chat-empty" id="faq-chat-empty" hidden>
            <p>لم نجد سؤالاً يطابق بحثك.</p>
            <a href="https://t.me/jemo_coBot" target="_blank" rel="noopener noreferrer" class="faq-chat-telegram-btn" style="margin-top: 8px;">
              <span>تحدث مع البوت مباشرة</span>
              ${ICONS.external}
            </a>
          </div>

          <!-- Telegram Direct Link -->
          <div class="faq-chat-extra">
            <p class="faq-extra-text">لديك استفسار خاص لم تجده هنا؟</p>
            <a href="https://t.me/jemo_coBot" target="_blank" rel="noopener noreferrer" class="faq-chat-telegram-btn">
              <span>تواصل مباشرة عبر بوت تيليجرام (@jemo_coBot)</span>
              ${ICONS.external}
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}

function galleryLightboxTemplate() {
  return `
    <div class="glb" id="gallery-lightbox" role="dialog" aria-modal="true" aria-label="عارض الصور" hidden>
      <div class="glb-backdrop" data-glb-close></div>
      <div class="glb-frame">
        <button type="button" class="glb-btn glb-close" id="glb-close" data-glb-close aria-label="إغلاق العارض">${ICONS.close}</button>
        <button type="button" class="glb-btn glb-prev" id="glb-prev" aria-label="الصورة السابقة">${ICONS.arrowRightSm}</button>
        <figure class="glb-figure">
          <img class="glb-img" id="glb-img" src="" alt="" />
          <figcaption class="glb-caption">
            <span class="glb-tag badge badge-accent" id="glb-tag"></span>
            <h3 class="glb-title" id="glb-title"></h3>
            <p class="glb-desc" id="glb-desc"></p>
            <span class="glb-counter" id="glb-counter" aria-live="polite"></span>
          </figcaption>
        </figure>
        <button type="button" class="glb-btn glb-next" id="glb-next" aria-label="الصورة التالية">${ICONS.arrowLeftSm}</button>
      </div>
    </div>
  `;
}

// ─── View Rendering ───
function renderApp() {
  app.innerHTML = `
    <!-- ─── Reading Progress & Confetti Overlays ─── -->
    <div class="progress-bar-container" aria-hidden="true">
      <div class="progress-bar-fill" id="progressBar"></div>
    </div>
    <canvas id="confettiCanvas" aria-hidden="true"></canvas>

    <!-- ─── Site Navigation (NVIDIA-style) ─── -->
    <header class="site-nav" id="site-nav">
      <div class="container">
        <div class="site-nav-inner">
          <div class="nav-brand" id="nav-brand-btn" role="button" tabindex="0" aria-label="العودة إلى الرئيسية">
            <span class="nav-brand-tile">${ICONS.logo}</span>
            <span class="nav-brand-text"><strong>مهرجان التخرج 2026</strong><small>كلية الطف الجامعة</small></span>
          </div>

          <nav class="nav-links" aria-label="التنقل الرئيسي">
            <button type="button" class="nav-link ${currentView === "home" ? "active" : ""}" data-nav="home" data-scroll="home">الرئيسية</button>
            <button type="button" class="nav-link ${currentView === "home" ? "active" : ""}" data-scroll="about">الفكرة والرؤية</button>
            <div class="nav-drop" id="nav-tracks-drop">
              <button type="button" class="nav-link nav-drop-btn ${currentView === "home" ? "active" : ""}" aria-haspopup="true" aria-expanded="false">المسارات الخمسة${ICONS.chev}</button>
              <div class="nav-drop-panel" role="menu" aria-label="مسارات المشاركة">
                ${Object.values(TRACKS).map((t, i) => `
                  <button type="button" class="nav-drop-item" data-track-jump="${i}" role="menuitem">
                    <span class="nav-drop-num">${t.number}</span>
                    <span class="nav-drop-text"><strong>${t.title}</strong><small>${t.subtitle}</small></span>
                    <span class="badge ${i === 0 ? "badge-accent" : ""}">${t.tag}</span>
                  </button>
                `).join("")}
              </div>
            </div>
            <button type="button" class="nav-link ${currentView === "home" ? "active" : ""}" data-scroll="gallery">معرض الصور</button>
            <button type="button" class="nav-link ${currentView === "home" ? "active" : ""}" data-scroll="schedule">البرنامج</button>
            <button type="button" class="nav-link ${currentView === "home" ? "active" : ""}" data-scroll="sponsors">الرعاة</button>
            <button type="button" class="nav-link ${currentView === "home" ? "active" : ""}" data-scroll="faq">الأسئلة</button>
          </nav>

          <div class="nav-actions">
            <button type="button" class="theme-toggle-btn" id="theme-toggle-btn" aria-label="تبديل المظهر" title="تبديل ليلي / نهاري"></button>
            <div class="view-switcher-pill">
              <button type="button" class="view-tab-btn ${currentView === "home" ? "active" : ""}" id="tab-btn-home">
                ${ICONS.home}
                <span>الاستعراض</span>
              </button>
              <button type="button" class="view-tab-btn ${currentView !== "home" ? "active" : ""}" id="tab-btn-apply">
                ${ICONS.file}
                <span>صفحة التقديم</span>
              </button>
            </div>
            <button type="button" class="nav-menu-btn" id="nav-menu-btn" aria-label="فتح القائمة" aria-expanded="false">${ICONS.menu}</button>
          </div>
        </div>
      </div>
      <div class="mobile-nav" id="mobile-nav">
        <button type="button" class="mobile-nav-link" data-nav="home" data-scroll="home">الرئيسية</button>
        <button type="button" class="mobile-nav-link" data-scroll="about">الفكرة والرؤية</button>
        <button type="button" class="mobile-nav-link" data-scroll="tracks">المسارات الخمسة</button>
        <button type="button" class="mobile-nav-link" data-scroll="gallery">معرض الصور</button>
        <button type="button" class="mobile-nav-link" data-scroll="schedule">البرنامج</button>
        <button type="button" class="mobile-nav-link" data-scroll="sponsors">الرعاة</button>
        <button type="button" class="mobile-nav-link" data-scroll="faq">الأسئلة</button>
        <button type="button" class="btn btn-primary mobile-nav-cta" data-nav="apply"><span>قدّم الآن — صفحة التقديم</span></button>
      </div>
    </header>

    <!-- ─── Main Content Views ─── -->
    ${currentView === "apply" ? applyViewTemplate() : currentView === "success" ? successViewTemplate() : homeViewTemplate()}
    <!-- ─── Global Footer (Editorial Redesign) ─── -->
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">

          <!-- Column 1: Brand & Intro -->
          <div class="footer-col footer-col-brand">
            <div class="footer-brand-title">
              <span class="footer-brand-logo">${ICONS.logo}</span>
              <h2>مهرجان التخرج<br><span style="color: var(--accent);">الطلابي الأول</span> <span style="font-weight: 300; opacity: 0.5;">— 2026</span></h2>
            </div>
            <p class="footer-brand-desc">
              مبادرة متميزة من قسم هندسة تقنيات الحاسوب في كلية الطف الجامعة، لجمع الطلاب وتكريم جهودهم في ختام مسيرتهم الأكاديمية.
            </p>
          </div>

          <!-- Column 2: Navigation -->
          <div class="footer-col footer-col-links">
            <h4 class="footer-heading">تصفح الموقع</h4>
            <ul class="footer-link-list">
              <li><a href="#home" data-nav="home">الرئيسية</a></li>
              <li><a href="#about" data-scroll="about">الفكرة والرؤية</a></li>
              <li><a href="#tracks" data-scroll="tracks">المسارات الخمسة</a></li>
              <li><a href="#gallery" data-scroll="gallery">معرض الصور</a></li>
              <li><a href="#schedule" data-scroll="schedule">البرنامج</a></li>
              <li><a href="#sponsors" data-scroll="sponsors">الرعاة</a></li>
              <li><a href="#faq" data-scroll="faq">الأسئلة الشائعة</a></li>
            </ul>
          </div>
          <!-- Column 3: Action & Contact -->
          <div class="footer-col footer-col-action">
            <h4 class="footer-heading">بادر بالمشاركة</h4>
            <p class="footer-action-desc">كن جزءاً من هذا الحدث الاستثنائي وسجل حضورك الآن قبل انتهاء فترة التسجيل.</p>
            <a href="https://t.me/jemo_coBot" target="_blank" class="btn btn-primary" style="width: 100%; text-decoration: none;"><span>التسجيل عبر تيليجرام (@jemo_coBot)</span>${ICONS.arrowLeftSm}</a>
          </div>
        </div>

        <div class="footer-bottom">
          <div class="footer-copyright">
            &copy; 2026 جميع الحقوق محفوظة لمهرجان التخرج الطلابي — كلية الطف الجامعة.
          </div>
          <div class="footer-credits">
            تصميم وتطوير <strong>فريق آكسيك للبرمجة (Axiq Team)</strong>
          </div>
        </div>
      </div>
    </footer>

    <!-- ─── Floating FAQ Chat Bubble Widget ─── -->
    ${faqChatWidgetTemplate()}

    <!-- ─── Gallery Lightbox ─── -->
    ${galleryLightboxTemplate()}
  `;
  attachGlobalEvents();
  initGlobalMotion();
  if (currentView === "home") {
    initCountdown();
    initInteractiveTracks();
    initSchedule();
    initSponsorsMotion();
    initHomeMotion();
  } else if (currentView === "apply") {
    setupApplyForm();
    initTiltCards();
  } else if (currentView === "success") {
    setupSuccessInteractions();
    fireConfetti();
  }
}

// ─── Screen 1: Home View Template ───
function homeViewTemplate() {
  return `
    <main id="view-home" class="screen-view active">
      <!-- ─── Hero Section ─── -->
      <section class="hero-wrapper" style="background-image: url('./public/images/hero-art.jpg'); background-size: cover; background-position: center; position: relative;">
        <!-- Subtle overlay to ensure text readability -->
        <div class="hero-veil" aria-hidden="true"></div>
        <canvas class="canvas-stars" id="starCanvas" aria-hidden="true" style="z-index: 2; mix-blend-mode: multiply;"></canvas>
        <div class="container" style="position: relative; z-index: 3;">
          <div class="hero-grid reveal-on-scroll">
            <div>
              <div class="eyebrow">
                <span class="badge-dot"></span>
                نسخة 2026 • قسم هندسة تقنيات الحاسوب
              </div>
              <h1 class="hero-title">
                تخرّجك له مكانه.<br>
                <span class="highlight">يوم جامعي استثنائي</span> يحتفي بالدفعة.
              </h1>
              <p class="lead">
                يقرّب العائلة من الإنجاز، ويعطي مشروعك أو حضورك أو مبادرتك مساحة مضيئة تليق بمسيرتك الأكاديمية في رحاب كلية الطف الجامعة بكربلاء المقدسة.
              </p>

              <div class="hero-event-details">
                <div class="event-detail-item">
                  <span class="event-detail-icon">${ICONS.calendar}</span>
                  <div class="event-detail-text">
                    <span class="event-detail-label">موعد الفعالية</span>
                    <span class="event-detail-val">15 نوفمبر 2026</span>
                  </div>
                </div>

                <span class="event-detail-separator" aria-hidden="true"></span>

                <div class="event-detail-item">
                  <span class="event-detail-icon">${ICONS.mapPin}</span>
                  <div class="event-detail-text">
                    <span class="event-detail-label">موقع الاحتفال</span>
                    <span class="event-detail-val">مجمع الكليات الهندسية — كربلاء</span>
                  </div>
                </div>
              </div>

              <div class="hero-actions">
                <a href="https://t.me/jemo_coBot" target="_blank" class="btn btn-primary" style="text-decoration: none;"><span>سجل الآن عبر تيليجرام</span>${ICONS.arrowLeftSm}</a>
                <button type="button" class="btn btn-secondary" data-scroll="about">
                  <span>اكتشف الفكرة والرؤية</span>
                </button>
              </div>
            </div>

            <!-- Countdown Box -->
            <div>
              <div class="countdown-box countdown-flat" role="timer" aria-label="العد التنازلي ليوم الفعالية">
                <div class="countdown-top">
                  <span class="cd-status">
                    <span class="cd-dot" aria-hidden="true"></span>
                    العد التنازلي بدأ
                  </span>
                  <span class="cd-date">
                    ${ICONS.calendar}
                    15 نوفمبر 2026
                  </span>
                </div>

                <h4 class="countdown-subtitle">بداية يوم الفعالية بتوقيت العراق</h4>

                <div class="countdown-timer-grid">
                  <div class="timer-tile">
                    <span class="timer-value" id="cd-days">00</span>
                    <span class="timer-label">يوم</span>
                  </div>
                  <div class="timer-tile">
                    <span class="timer-value" id="cd-hours">00</span>
                    <span class="timer-label">ساعة</span>
                  </div>
                  <div class="timer-tile">
                    <span class="timer-value" id="cd-mins">00</span>
                    <span class="timer-label">دقيقة</span>
                  </div>
                  <div class="timer-tile timer-tile-sec">
                    <span class="timer-value" id="cd-secs">00</span>
                    <span class="timer-label">ثانية</span>
                  </div>
                </div>

                <div class="countdown-footer">
                  <span class="countdown-footer-price">مساهمة تبدأ من 10,000 د.ع</span>
                  <span class="countdown-footer-note">تنسيق وتواصل معتمد عبر تيليجرام</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Key Metrics Strip -->
          <div class="stats-strip reveal-on-scroll">
            <div class="stat-cell">
              <span class="stat-number">+500</span>
              <span class="stat-desc">طالب وخريج ومشارك</span>
            </div>
            <div class="stat-cell">
              <span class="stat-number">05</span>
              <span class="stat-desc">مسارات مشاركة منظمة</span>
            </div>
            <div class="stat-cell">
              <span class="stat-number">100%</span>
              <span class="stat-desc">تنسيق فوري عبر تيليجرام</span>
            </div>
            <div class="stat-cell">
              <span class="stat-number">01</span>
              <span class="stat-desc">منصة تكريم رسمية موثقة</span>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── Sponsors strip: early social proof ─── -->
      <div class="sponsors-strip" aria-label="شركاؤنا">
        <div class="container sponsors-strip-inner">
          <span class="sponsors-strip-label">بشراكة ودعم من</span>
          <div class="sponsors-marquee-container">
            <div class="sponsors-marquee-track">
              <div class="sponsors-marquee-group">
                ${SPONSORS.map(s => `
                  <button type="button" class="min-logo" data-scroll="sponsors" style="--tint:${s.tint}" aria-label="${s.name}">
                    <span class="min-logo-icon">${s.logo}</span>
                    <span class="min-logo-name">${s.name}</span>
                  </button>
                `).join('<span class="logo-dot" aria-hidden="true"></span>')}
              </div>
              <div class="sponsors-marquee-group" aria-hidden="true">
                ${SPONSORS.map(s => `
                  <button type="button" class="min-logo" data-scroll="sponsors" tabindex="-1" style="--tint:${s.tint}" aria-label="${s.name}">
                    <span class="min-logo-icon">${s.logo}</span>
                    <span class="min-logo-name">${s.name}</span>
                  </button>
                `).join('<span class="logo-dot" aria-hidden="true"></span>')}
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ─── Bento Grid: Vision & Core Values ─── -->
      <section id="about" class="section-py overflow-hidden relative reveal-on-scroll has-bg-art" style="background-image: url('./public/images/vision-art.jpg'); background-size: cover; background-position: center;">
        <!-- Subtle overlay to ensure text readability -->
        <div class="section-veil" aria-hidden="true"></div>
        <div class="container" style="position: relative; z-index: 10;">
          <!-- Centered Text Header -->
          <div class="section-header text-center" style="margin-bottom: var(--space-12); max-width: 760px; margin-inline: auto;">
            <div class="eyebrow" style="justify-content: center; margin-bottom: var(--space-3);">الفكرة والرؤية</div>
            <h2 class="section-title" style="margin-bottom: var(--space-4);">نجعل لحظة التخرج أكثر قرباً وخلوداً</h2>
            <p class="lead" style="margin-inline: auto;">
              نحوّل يوم التخرج من مجرد احتفال عابر إلى تجربة جامعية متكاملة تليق بجهد سنوات الدراسة، مع منصة رقمية موثقة تربط الابتكار الطلابي بسوق العمل وتسعد العائلات بأجواء راقية.
            </p>
          </div>
          <!-- The 2x2 Grid -->
          <div style="display: flex; justify-content: center;">
             <div style="display: grid; grid-template-columns: repeat(2, 1fr); width: 100%; max-width: 800px; gap: 0;">

                  <!-- Top Right: Websites (Globe) -->
                  <div class="group animated-grid-item card-tr" style="border-right-width: 1px; border-bottom-width: 1px; border-left: none; border-top: none;">
                     <div style="display: flex; align-items: flex-start; justify-content: space-between; width: 100%;">
                        <h4 class="box-title" style="font-size: var(--text-base); margin: 0;">منصة تكريم رسمية</h4>
                        <div style="color: var(--fg); opacity: 0.8;">
                          <svg viewBox="0 0 24 24" class="h-6 w-6 overflow-visible" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;">
                            <!-- Sparks -->
                            <path d="M12 0 L12 -3 M19 3 L22 1 M5 3 L2 1" class="medal-sparkles" stroke="var(--warn)"></path>
                            <!-- Ribbon -->
                            <path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12" class="medal-ribbon"></path>
                            <!-- Shield and Star -->
                            <g class="medal-shield" fill="var(--bg)">
                              <circle cx="12" cy="8" r="7"></circle>
                              <path d="M12 4 L13.5 7 L16.5 7.5 L14 9.5 L14.5 12.5 L12 11 L9.5 12.5 L10 9.5 L7.5 7.5 L10.5 7 Z" class="medal-star"></path>
                            </g>
                          </svg>
                        </div>
                     </div>
                     <p class="box-text" style="font-size: var(--text-xs); line-height: 1.6;">احتفاء أكاديمي موثق يليق بجهد سنوات الدراسة أمام الأساتذة والأهل، مع توثيق عالي الجودة.</p>
                  </div>

                  <!-- Top Left: Bots (Paper Plane) -->
                  <div class="group animated-grid-item card-tl" style="border-bottom-width: 1px; border-top: none; border-left: none; border-right: none;">
                     <div style="display: flex; align-items: flex-start; justify-content: space-between; width: 100%;">
                        <h4 class="box-title" style="font-size: var(--text-base); margin: 0;">بنية تنظيمية سريعة</h4>
                        <div style="color: var(--fg); opacity: 0.8;">
                          <svg viewBox="0 0 48 48" class="h-6 w-6 overflow-visible" fill="none" style="width: 24px; height: 24px;">
                            <g class="plane-speed-lines" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                              <line x1="12" y1="36" x2="-2" y2="50"></line>
                              <line x1="24" y1="40" x2="6" y2="58"></line>
                              <line x1="6" y1="24" x2="-10" y2="40"></line>
                            </g>
                            <path class="animate-fly-out-in" d="M41.4193 7.30899C41.4193 7.30899 45.3046 5.79399 44.9808 9.47328C44.8729 10.9883 43.9016 16.2908 43.1461 22.0262L40.5559 39.0159C40.5559 39.0159 40.3401 41.5048 38.3974 41.9377C36.4547 42.3705 33.5408 40.4227 33.0011 39.9898C32.5694 39.6652 24.9068 34.7955 22.2086 32.4148C21.4531 31.7655 20.5897 30.4669 22.3165 28.9519L33.6487 18.1305C34.9438 16.8319 36.2389 13.8019 30.8426 17.4812L15.7331 27.7616C15.7331 27.7616 14.0063 28.8437 10.7686 27.8698L3.75342 25.7055C3.75342 25.7055 1.16321 24.0823 5.58815 22.459C16.3807 17.3729 29.6555 12.1786 41.4193 7.30899Z" fill="currentColor"/>
                          </svg>
                        </div>
                     </div>
                     <p class="box-text" style="font-size: var(--text-xs); line-height: 1.6;">آلية تقديم واضحة وتواصل لحظي عبر معرّف تيليجرام بدون تعقيدات إدارية.</p>
                  </div>

                  <!-- Bottom Right: AI Models (Shell) -->
                  <div class="group animated-grid-item card-br" style="border-right-width: 1px; border-bottom: none; border-top: none; border-left: none; position: relative; z-index: 2;">
                     <div style="display: flex; align-items: flex-start; justify-content: space-between; width: 100%; position: relative; z-index: 2;">
                        <h4 class="box-title" style="font-size: var(--text-base); margin: 0;">ربط الابتكار</h4>
                        <div style="color: var(--fg); opacity: 0.8;">
                          <svg viewBox="0 0 24 24" class="h-6 w-6 overflow-visible" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;">
                            <path d="M15.41 6.51l-6.82 3.98" class="innovate-line-2"></path>
                            <path d="M8.59 13.51l6.83 3.98" class="innovate-line-1"></path>
                            <circle cx="6" cy="12" r="1.5" class="data-packet-1" fill="var(--accent)" stroke="none"></circle>
                            <circle cx="6" cy="12" r="1.5" class="data-packet-2" fill="var(--accent)" stroke="none"></circle>
                            <circle cx="18" cy="5" r="3" class="innovate-node-1" fill="var(--bg)"></circle>
                            <circle cx="6" cy="12" r="3" class="innovate-node-2" fill="var(--bg)"></circle>
                            <circle cx="18" cy="19" r="3" class="innovate-node-3" fill="var(--bg)"></circle>
                          </svg>
                        </div>
                     </div>
                     <p class="box-text" style="font-size: var(--text-xs); line-height: 1.6; position: relative; z-index: 2;">مساحة عرض لمشاريع التخرج تجذب الرعاة والشركات المهتمة بتبني حلول الطلبة.</p>
                  </div>

                  <!-- Bottom Left: Docker (Whale/Boxes) -->
                  <div class="group animated-grid-item card-bl" style="border: none; position: relative; z-index: 2;">
                     <div style="display: flex; align-items: flex-start; justify-content: space-between; width: 100%; position: relative; z-index: 2;">
                        <h4 class="box-title" style="font-size: var(--text-base); margin: 0;">أجواء عائلية</h4>
                        <div style="color: var(--fg); opacity: 0.8;">
                          <svg viewBox="0 0 24 24" class="h-6 w-6 overflow-visible" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="width: 24px; height: 24px;">
                            <path d="M4 12 L2 9 M20 12 L22 9 M7 7 L5 4 M17 7 L19 4" class="fam-confetti" stroke="var(--accent)"></path>
                            <g class="fam-person-2" style="opacity: 0.7;">
                              <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                              <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </g>
                            <g class="fam-person-1">
                              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                              <circle cx="9" cy="7" r="4"></circle>
                            </g>
                            <g class="animate-fam-heart" fill="var(--danger)" stroke="none">
                              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" style="transform: scale(0.3) translate(28px, 16px);"></path>
                            </g>
                          </svg>
                        </div>
                     </div>
                     <p class="box-text" style="font-size: var(--text-xs); line-height: 1.6; position: relative; z-index: 2;">تنظيم وقاعات مهيأة بأرقى المعايير لضمان راحة ومشاركة العائلات فرحتهم.</p>
                  </div>

               </div>
            </div>

        </div>
      </section>

      <!-- ─── Section: 5 Participation Tracks ─── -->
      <section id="tracks" class="section-py">
        <div class="container">
          <div class="section-header flex-between reveal-on-scroll" style="flex-wrap: wrap; gap: 16px;">
            <div>
              <div class="eyebrow">المسارات الخمسة</div>
              <h2 class="section-title">اختر دورك في صنع المشهد</h2>
              <p class="lead">صُممت مسارات المشاركة لتغطي كافة اهتمامات وإبداعات طلبة الدفعة.</p>
            </div>
            <a href="https://t.me/jemo_coBot" target="_blank" class="btn btn-primary" style="text-decoration: none;"><span>سجل الآن عبر تيليجرام (@jemo_coBot)</span>${ICONS.arrowLeftSm}</a>
          </div>

          <div class="tracks-interactive-container reveal-on-scroll">

            <!-- Mobile Horizontal Track Selector Bar -->
            <div class="track-mobile-tabs-bar" id="track-mobile-tabs" aria-label="اختيار المسار"></div>

            <!-- Content (Right side on desktop, main card on mobile) -->
            <div style="grid-column: 1; width: 100%;">
              <div id="track-content-container" class="fade-in">
                <div class="track-card-header-mobile">
                  <span id="track-interactive-num" class="track-num">01 / المسار الأول</span>
                  <span id="track-interactive-tag" class="badge badge-accent">أساسي</span>
                </div>

                <div class="track-card-top-row">
                  <img id="track-interactive-img" src="./public/images/track-ceremony.jpg" width="800" height="533" alt="صورة توضيحية لمسار المشاركة" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 992px) 80vw, 800px" style="max-width:100%; height:auto;" />
                  <div class="track-card-text">
                    <div class="track-card-text-head">
                      <h3 id="track-interactive-title" class="box-title"></h3>
                      <span id="track-interactive-subtitle" class="track-interactive-subtitle"></span>
                    </div>

                    <p id="track-interactive-desc" class="box-text"></p>

                    <div class="track-interactive-tip-box" id="track-interactive-tip-box">
                      <strong>إرشادات المسار: </strong><span id="track-interactive-tip"></span>
                    </div>

                    <button type="button" class="btn btn-primary track-apply-btn" id="track-interactive-btn" data-track="">
                      <span id="track-interactive-btn-text">قدّم في هذا المسار</span>
                      ${ICONS.arrowLeftSm}
                    </button>
                  </div>
                </div>

                <!-- Mobile Carousel Controls -->
                <div class="track-carousel-nav-row">
                  <button type="button" class="track-carousel-arrow-btn" id="track-prev-btn" aria-label="المسار السابق">
                    ${ICONS.arrowRightSm}
                  </button>
                  <div class="track-carousel-dots" id="track-carousel-dots"></div>
                  <button type="button" class="track-carousel-arrow-btn" id="track-next-btn" aria-label="المسار التالي">
                    ${ICONS.arrowLeftSm}
                  </button>
                </div>
              </div>
            </div>

            <!-- Menu (Left side on desktop in RTL) -->
            <div id="track-menu" style="grid-column: 2; position: relative; display: flex; flex-direction: column; align-items: flex-start; gap: var(--space-1); width: 100%;">
              <span id="track-menu-indicator" class="track-menu-indicator"></span>
            </div>
          </div>

          <!-- Independent Portal CTA -->
          <div class="track-card portal-cta portal-cta-banner">
            <div class="portal-cta-inner">
              <div class="portal-cta-text">
                <div class="portal-cta-badge">
                  ${ICONS.bot}
                  <span>بوابة التقديم المعتمدة</span>
                </div>
                <h3 class="portal-cta-heading">صفحة التسجيل وتثبيت المشاركة</h3>
                <p class="portal-cta-desc">
                  احسب مساهمتك، وثّق حسابك على تيليجرام، واحصل على بطاقة التأكيد فوراً عبر صفحتنا المخصصة.
                </p>
              </div>
              <div class="portal-cta-action">
                <a href="https://t.me/jemo_coBot" target="_blank" class="btn btn-primary portal-cta-main-btn" rel="noopener">
                  <span>سجل الآن عبر تيليجرام: <span class="cta-handle" dir="ltr">@jemo_coBot</span></span>
                  ${ICONS.arrowLeftSm}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- ─── Editorial Photo Showcase Gallery ─── -->
      <section id="gallery" class="section-py section-surface">
        <div class="container">
          <div class="section-header text-center reveal-on-scroll">
            <div class="eyebrow">المعرض الفوتوغرافي</div>
            <h2 class="section-title">مشاهد وذكريات تليق بالحدث</h2>
            <p class="lead">لقطات تعكس بهجة التخرج، تميز مشاريع الدفعة، وأجواء الفخر الجامعي في كلية الطف الجامعة.</p>
          </div>

          <div class="gallery-grid">
            ${GALLERY_PHOTOS.map((p, i) => `
              <div class="gallery-cell gal-reveal" style="--d:${i * 80}ms">
                <button type="button" class="gallery-card ${p.colSpan === 2 ? "gallery-col-2" : ""}" data-gallery-index="${i}" aria-label="تكبير الصورة: ${p.title}">
                  <span class="gallery-img-wrapper">
                    <img src="${p.src}" width="${p.width}" height="${p.height}" alt="${p.title}" class="gallery-img" loading="lazy" decoding="async" sizes="(max-width: 768px) 100vw, (max-width: 992px) 50vw, calc(100% - 32px)" style="max-width:100%; height:auto;" />
                    <span class="gallery-overlay">
                      <span class="badge badge-accent gallery-tag">${p.tag}</span>
                      <span class="gallery-card-title">${p.title}</span>
                      <span class="gallery-card-desc">${p.desc}</span>
                      <span class="gallery-zoom-hint" aria-hidden="true">${ICONS.expand}</span>
                    </span>
                  </span>
                </button>
              </div>
            `).join("")}
          </div>
        </div>
      </section>

      <!-- ─── Interactive Schedule Timeline ─── -->
      <section id="schedule" class="section-py section-surface">
        <div class="container">
          <div class="section-header text-center reveal-on-scroll">
            <div class="eyebrow">الجدول الزمني</div>
            <h2 class="section-title">برنامج اليوم الاحتفالي</h2>
            <p class="lead">فقرات مدروسة تضمن انسيابية الحركة وتكريم جميع الطلبة بأعلى المعايير التنظيمية.</p>
          </div>

          <div class="schedule-filter-bar reveal-on-scroll">
            <button type="button" class="filter-btn active" data-period="all">كافة الفقرات</button>
            <button type="button" class="filter-btn" data-period="morning">الفترة الصباحية</button>
            <button type="button" class="filter-btn" data-period="afternoon">الفترة المسائية</button>
          </div>

          <div class="timeline-list reveal-on-scroll" id="schedule-timeline-container">
            <div class="timeline-item" data-period="morning">
              <div class="timeline-time-badge">
                ${ICONS.clock}
                <span>09:00 ص</span>
              </div>
              <div>
                <div class="timeline-content-title">الاستقبال والتسجيل وتوزيع الأرواب</div>
                <div class="timeline-content-desc">استقبال الطلبة والضيوف الكرام وتسليم أرواب التخرج وبطاقات الدخول والهدايا الترحيبية.</div>
              </div>
            </div>

            <div class="timeline-item" data-period="morning">
              <div class="timeline-time-badge">
                ${ICONS.clock}
                <span>10:30 ص</span>
              </div>
              <div>
                <div class="timeline-content-title">المسيرة ومراسم التكريم الرسمية</div>
                <div class="timeline-content-desc">مسيرة التخرج الرسمية، الكلمات الافتتاحية لعمادة الكلية ورئاسة القسم، وتسليم الدروع التذكارية على المنصة.</div>
              </div>
            </div>

            <div class="timeline-item" data-period="afternoon">
              <div class="timeline-time-badge">
                ${ICONS.clock}
                <span>12:30 م</span>
              </div>
              <div>
                <div class="timeline-content-title">معرض المشاريع والبازار الطلابي والضيافة</div>
                <div class="timeline-content-desc">افتتاح أجنحة مشاريع التخرج الابتكارية، عروض الشركات التقنية الراعية، وركن الضيافة والبازار.</div>
              </div>
            </div>

            <div class="timeline-item" data-period="afternoon">
              <div class="timeline-time-badge">
                ${ICONS.clock}
                <span>02:00 م</span>
              </div>
              <div>
                <div class="timeline-content-title">جلسات التصوير والاحتفاء والتقاط الصورة الجماعية</div>
                <div class="timeline-content-desc">جلسات التصوير التذكارية مع الأساتذة والعائلات والتقاط الصورة التذكارية الكبرى لدفعة 2026.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- ─── Sponsors & Partners (Redesigned) ─── -->
      <section id="sponsors" class="section-py sponsors-section reveal-on-scroll">
        <div class="container">
          <div class="section-header text-center">
            <div class="eyebrow">الرعاة والشركاء</div>
            <h2 class="section-title">شركاء النجاح</h2>
            <p class="lead">نخبة داعمة جمعت الجانب الأكاديمي والبنية البرمجية لإنجاح المهرجان.</p>
          </div>

          <!-- Organizer feature card (Mistral customer-story style) -->
          <div class="sponsor-organizer sponsor-feature sp-reveal" style="--d:0ms">
            <div class="sponsor-org-text">
              <span class="badge badge-accent">الجهة المنظمة</span>
              <h3>${SPONSORS[0].name}</h3>
              <p class="sponsor-org-role">${SPONSORS[0].role}</p>
              <p class="sponsor-org-blurb">${SPONSORS[0].blurb}</p>
              <ul class="sponsor-checks">
                <li>${ICONS.checkSm}<span>نظام بولونيا منذ العام 2023-2024</span></li>
                <li>${ICONS.checkSm}<span>قسم توأم مع التقنية الكهربائية في بغداد</span></li>
                <li>${ICONS.checkSm}<span>كربلاء — الجاير، قرب مدينة ألعاب السندباد</span></li>
              </ul>
              <div class="sponsor-org-stats">
                ${SPONSORS[0].stats.map(st => `
                  <div class="sponsor-stat"><strong data-count="${st.n}">0</strong><span>${st.l}</span></div>
                `).join("")}
              </div>
              <a class="btn btn-secondary sponsor-org-link" href="${SPONSORS[0].url}" target="_blank" rel="noopener">
                <span>صفحة القسم في موقع الكلية</span>${ICONS.external}
              </a>
            </div>
            <div class="sponsor-feature-visual sponsor-feature-photo" aria-hidden="true">
              <img class="sponsor-feature-img" src="./public/images/sponsors/altuff-dept.png" alt="" loading="lazy" decoding="async" />
              <img class="sponsor-feature-emblem" src="./public/images/sponsors/altuff-logo.svg" alt="" loading="lazy" decoding="async" />
              <div class="sponsor-feature-caption">
                <strong>كلية الطف الجامعة</strong>
                <span>معترف بها من وزارة التعليم العالي • تأسست 2014</span>
              </div>
            </div>
          </div>

          <!-- Partners grid (Mistral product-card style) -->
          <div class="sponsors-grid">
            ${SPONSORS.slice(1).map((s, i) => `
              <div class="sponsor-card sp-reveal" style="--d:${(i + 1) * 90}ms">
                ${s.cover ? `<div class="sponsor-visual"><img src="${s.cover}" alt="" loading="lazy" decoding="async" /></div>` : ""}
                <div class="sponsor-card-body">
                  <div class="sponsor-card-top">
                    <div class="sponsor-logo-tile" style="--tint:${s.tint}">${s.logo}</div>
                    <span class="badge ${s.accentBadge ? "badge-accent" : ""}">${s.badge}</span>
                  </div>
                  <h4><span class="sponsor-index">0${i + 1}</span>${s.name}</h4>
                  <p class="sponsor-card-role">${s.role}</p>
                  <p class="sponsor-card-blurb">${s.blurb}</p>
                  ${s.chips ? `<div class="sponsor-chips">${s.chips.map(c => `<span class="sponsor-chip">${c}</span>`).join("")}</div>` : ""}
                  ${s.url ? `<a class="sponsor-card-link" href="${s.url}" target="_blank" rel="noopener"><span>زيارة الموقع</span>${ICONS.external}</a>` : ""}
                </div>
                <div class="sponsor-spot" aria-hidden="true"></div>
              </div>
            `).join("")}
          </div>

        </div>
      </section>
    </main>
  `;
}

// ─── Screen 2: Dedicated Telegram Apply Portal Template ───
const BOT_FAQS = [
  {
    id: "payment",
    q: "شلون ادفع المساهمة؟",
    category: "الدفع والمساهمة",
    icon: ICONS.creditCard,
    a: "يتم دفع المساهمة عبر زين كاش (ZainCash) أو نقداً عبر المنسق المعتمد لقسم هندسة تقنيات الحاسوب في الكلية بعد تثبيت طلبك في البوت.",
    actionText: "دفع المساهمة عبر البوت",
    actionParam: "pay"
  },
  {
    id: "price",
    q: "شكد سعر الاشتراك؟",
    category: "التكلفة والباقات",
    icon: ICONS.coins,
    a: "المساهمة الأساسية لمسار الحضور والتكريم تبدأ من 10,000 د.ع وتغطي روب التخرج، الدرع التذكاري المخصص، وبطاقة الدخول الرسمية.",
    actionText: "تفاصيل الباقات في البوت",
    actionParam: "pricing"
  },
  {
    id: "date",
    q: "شوكت موعد الحفلة؟",
    category: "الموعد والجدول",
    icon: ICONS.calendar,
    a: "يقام مهرجان التخرج الطلابي الأول يوم 15 نوفمبر 2026، من الساعة 9:00 صباحاً حتى 4:00 مساءً.",
    actionText: "جدول المواعيد في البوت",
    actionParam: "schedule"
  },
  {
    id: "location",
    q: "وين مكان الحفل؟",
    category: "الموقع والقاعات",
    icon: ICONS.mapPin,
    a: "تقام فعاليات المهرجان في القاعة المركزية والساحة الطلابية في كلية الطف الجامعة — كربلاء المقدسة.",
    actionText: "خريطة الموقع عبر البوت",
    actionParam: "location"
  },
  {
    id: "family",
    q: "هل مسموح حضور الأهل؟",
    category: "الضيوف والعوائل",
    icon: ICONS.users,
    a: "نعم، حضور عوائل الخريجين مرحب به ومشمول ببطاقات دعوة خاصة مرافقة لكل خريج بالتنسيق مع اللجنة المنظمة.",
    actionText: "حجز مقاعد الأهل في البوت",
    actionParam: "guests"
  },
  {
    id: "attire",
    q: "تفاصيل روب التخرج والدرع",
    category: "التجهيزات والروب",
    icon: ICONS.cap,
    a: "يشمل درعاً تذكارياً مطرزاً باسم الطالب، وشاح القسم الرسمي، وروب التخرج المعتمد للدفعة لتخليد مسيرة التخرج.",
    actionText: "معاينة الروب والدرع في البوت",
    actionParam: "shield"
  },
  {
    id: "edit",
    q: "اريد اعدل معلوماتي",
    category: "البيانات والتعديل",
    icon: ICONS.edit,
    a: "يمكنك تعديل أي معلومة بالضغط على أمر /edit أو مراسلة منسق اللجنة مباشرة عبر البوت @jemo_coBot قبل موعد طباعة البطاقات.",
    actionText: "تعديل البيانات في البوت",
    actionParam: "edit"
  },
];

function applyViewTemplate() {
  return `
    <div id="view-apply" class="screen-view active apply-portal-redesign">
      <!-- Portal Hero Header -->
      <div class="apply-hero">
        <div class="container">
          <div class="apply-hero-inner">
            <div class="apply-hero-top">
              <button type="button" class="portal-back-btn" data-nav="home" aria-label="العودة للرئيسية">
                ${ICONS.arrowRightSm}
                <span>العودة للرئيسية</span>
              </button>
              <div class="portal-chip">
                <span class="portal-chip-dot"></span>
                <span>المنظومة الرقمية المعتمدة للتسجيل • 2026</span>
              </div>
            </div>

            <h1 class="apply-hero-title">
              بوابة التقديم وتثبيت المشاركة
            </h1>
            <p class="apply-hero-desc">
              أهلاً بك في المنظومة الرقمية لمهرجان التخرج الطلابي الأول 2026 — كلية الطف الجامعة (قسم هندسة تقنيات الحاسوب). يتم التسجيل وإصدار بطاقات التكريم الرسمية حصرياً عبر بوت تيليجرام المعتمد.
            </p>

            <div class="apply-meta-strip">
              <div class="apply-meta-item">
                ${ICONS.calendar}
                <span>موعد الحفل: <strong>15 نوفمبر 2026</strong></span>
              </div>
              <div class="apply-meta-item">
                ${ICONS.mapPin}
                <span>المكان: <strong>كلية الطف الجامعة — كربلاء</strong></span>
              </div>
              <div class="apply-meta-item">
                ${ICONS.bot}
                <span>البوت المعتمد: <strong dir="ltr">@jemo_coBot</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="container" style="padding-bottom: var(--space-12);">

        <!-- SECTION 1: Track Selection -->
        <section class="apply-section">
          <div class="apply-section-header">
            <div class="apply-step-tag">الخطوة 01</div>
            <h2 class="apply-section-title">اختر مسار مشاركتك في المهرجان</h2>
            <p class="apply-section-desc">حدد المسار المناسب لك قبل الانتقال إلى بوت تيليجرام لتجهيز بياناتك وبطاقتك.</p>
          </div>

          <div class="apply-tracks-grid" id="apply-tracks-container">
            ${Object.values(TRACKS).map(t => `
              <div class="apply-track-card ${t.id === currentTrack ? "selected" : ""}" data-track-option="${t.id}" aria-required="true">
                <div class="apply-track-head">
                  <span class="apply-track-num">${t.number}</span>
                  <span class="badge ${t.id === currentTrack ? "badge-accent" : ""}">${t.tag}</span>
                </div>
                <h3 class="apply-track-title">${t.label}</h3>
                <p class="apply-track-sub">${t.subtitle}</p>
                <div class="apply-track-indicator">
                  <span class="indicator-circle"></span>
                  <span>${t.id === currentTrack ? "المسار المختار" : "اختيار هذا المسار"}</span>
                </div>
              </div>
            `).join("")}
          </div>
        </section>

        <!-- SECTION 2: Regulatory Terms -->
        <section class="apply-section">
          <div class="apply-section-header">
            <div class="apply-step-tag">الخطوة 02</div>
            <h2 class="apply-section-title">شروط الاستخدام وضوابط المشاركة للمتابعة</h2>
            <p class="apply-section-desc">يرجى مراجعة شروط الاستخدام وضوابط المشاركة للمتابعة:</p>
          </div>

          <div class="apply-terms-grid">
            <div class="apply-term-box">
              <div class="apply-term-top">
                <div class="apply-term-icon">${ICONS.clipboard}</div>
                <h3 class="apply-term-name">إخلاء المسؤولية والضوابط التنظيمية</h3>
              </div>
              <p class="apply-term-desc">
                تم توفير هذا النظام لتنظيم عمليات التسجيل وإصدار بطاقات الدخول الرسمية. يلتزم المشارك بدقة البيانات المدخلة ومطابقتها للسجلات الرسمية.
              </p>
            </div>

            <div class="apply-term-box">
              <div class="apply-term-top">
                <div class="apply-term-icon">${ICONS.lock}</div>
                <h3 class="apply-term-name">الخصوصية وسرية البيانات</h3>
              </div>
              <p class="apply-term-desc">
                تتم معالجة وتدقيق المعلومات المسجلة بأعلى معايير الأمان والسرية لحفظ بيانات المشتركين وتنظيم قوائم التكريم.
              </p>
            </div>

            <div class="apply-term-box">
              <div class="apply-term-top">
                <div class="apply-term-icon">${ICONS.ticket}</div>
                <h3 class="apply-term-name">شروط المشاركة وبطاقة الدخول</h3>
              </div>
              <p class="apply-term-desc">
                يعد قبول الطلب نهائياً بعد استيفاء المتطلبات وسداد المساهمة المقررة، وتعتبر بطاقة الدخول شخصية وغير قابلة للتحويل.
              </p>
            </div>
          </div>
        </section>

        <!-- SECTION 3: Master Launch CTA Bar -->
        <section class="apply-cta-card">
          <div class="apply-cta-content">
            <div class="apply-cta-bot-info">
              <div class="apply-cta-bot-badge">
                ${ICONS.bot}
                <span>البوت المعتمد في تيليجرام: <strong dir="ltr">@jemo_coBot</strong></span>
              </div>
              <h2 class="apply-cta-title">جاهز للبدء؟ اضغط على "أوافق والمتابعة" بالأسفل</h2>
              <p class="apply-cta-subtitle">
                اضغط على "أوافق والمتابعة" بالأسفل للبدء بالتسجيل في المنظومة الرقمية الرسمية لمهرجان التخرج.
              </p>
            </div>

            <div class="apply-cta-actions">
              <a href="https://t.me/jemo_coBot?start=track_${currentTrack}" target="_blank" class="btn btn-primary apply-master-btn" id="btn-agree-telegram">
                <span>أوافق والمتابعة — فتح بوت التسجيل (@jemo_coBot)</span>
                ${ICONS.arrowLeftSm}
              </a>
              <div class="apply-cta-footnote">
                ${ICONS.checkSm}
                <span>سيتم نقلك مباشرة إلى المحادثة الرسمية المعتمدة في تطبيق تيليجرام.</span>
              </div>
            </div>
          </div>
        </section>

        <!-- SECTION 4: Interactive Telegram Bot Console (Redesigned) -->
        <section class="apply-section apply-bot-console-section" style="margin-top: var(--space-12);">
          <div class="apply-section-header flex-between" style="flex-wrap: wrap; gap: 16px;">
            <div>
              <div class="apply-step-tag">الاستفسارات والمساعدة الذكية</div>
              <h2 class="apply-section-title">المساعد الفوري للبوت الرسمي</h2>
              <p class="apply-section-desc">
                مرحباً بك في المنصة الرسمية لمهرجان التخرج 2026. اختر أي استفسار لمعاينة الرد الفوري من البوت، أو تواصل معه مباشرة:
              </p>
            </div>
            <div class="bot-status-pill">
              <span class="bot-status-dot"></span>
              <span>البوت متصل الآن • <strong dir="ltr">@jemo_coBot</strong></span>
            </div>
          </div>

          <div class="bot-console-wrapper">
            <!-- Column 1: Prompt Selectors (Right) -->
            <div class="bot-console-prompts">
              <div class="bot-prompts-title">
                <svg class="icon-svg-sm" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                <span>الأسئلة الشائعة الأكثر طلباً:</span>
              </div>

              <div class="bot-prompts-list" id="bot-prompts-list">
                ${BOT_FAQS.map((item, idx) => `
                  <button type="button" class="bot-prompt-btn ${idx === 0 ? "active" : ""}" data-faq-index="${idx}">
                    <div class="bot-prompt-icon">${item.icon}</div>
                    <div class="bot-prompt-content">
                      <span class="bot-prompt-q">${item.q}</span>
                      <span class="bot-prompt-cat">${item.category}</span>
                    </div>
                    <span class="bot-prompt-arrow">${ICONS.arrowLeftSm}</span>
                  </button>
                `).join("")}
              </div>
            </div>

            <!-- Column 2: Simulated Live Telegram Bot Terminal (Left) -->
            <div class="bot-console-screen">
              <!-- Telegram App Window Header -->
              <div class="bot-screen-header">
                <div class="bot-screen-identity">
                  <div class="bot-screen-avatar">
                    ${ICONS.bot}
                    <span class="bot-online-badge"></span>
                  </div>
                  <div>
                    <div class="bot-screen-name">بوت مهرجان التخرج 2026 <span class="bot-verified-check">✓</span></div>
                    <div class="bot-screen-sub">bot • <span dir="ltr">@jemo_coBot</span> • متصل الآن (رد فوري)</div>
                  </div>
                </div>
                <a href="https://t.me/jemo_coBot" target="_blank" class="bot-screen-open-btn" title="فتح المحادثة في تطبيق تيليجرام">
                  <span>فتح في تيليجرام</span>
                  ${ICONS.external}
                </a>
              </div>

              <!-- Live Chat Feed -->
              <div class="bot-screen-feed" id="bot-screen-feed">
                <div class="bot-chat-date"><span>اليوم</span></div>

                <!-- Outgoing Student Bubble -->
                <div class="bot-msg-row user-row">
                  <div class="bot-bubble user-bubble">
                    <p id="bot-live-user-q">${BOT_FAQS[0].q}</p>
                    <span class="bubble-time">الآن <span class="bubble-checks">✓✓</span></span>
                  </div>
                </div>

                <!-- Incoming Bot Reply Bubble -->
                <div class="bot-msg-row bot-row">
                  <div class="bot-avatar-small">${ICONS.bot}</div>
                  <div class="bot-bubble bot-bubble-reply">
                    <div class="bot-reply-author">بوت التخرج 2026</div>
                    <p id="bot-live-reply-text" class="bot-reply-text">
                      ${BOT_FAQS[0].a}
                    </p>
                    <div class="bot-bubble-actions">
                      <a href="https://t.me/jemo_coBot?start=${BOT_FAQS[0].actionParam}" target="_blank" class="bot-bubble-cta-btn" id="bot-live-action-btn">
                        <span id="bot-live-action-text">${BOT_FAQS[0].actionText}</span>
                        ${ICONS.arrowLeftSm}
                      </a>
                    </div>
                    <span class="bubble-time" style="color: var(--meta);">الآن</span>
                  </div>
                </div>
              </div>

              <!-- Bottom Interactive Input / Switcher Bar -->
              <div class="bot-screen-footer">
                <div class="bot-typing-hint">
                  <span class="typing-indicator"><span></span><span></span><span></span></span>
                  <span>البوت جاهز للإجابة عن استفساراتك 24/7</span>
                </div>
                <a href="https://t.me/jemo_coBot" target="_blank" class="btn btn-primary btn-sm bot-direct-chat-btn">
                  <span>بدء محادثة مباشرة مع @jemo_coBot</span>
                  ${ICONS.arrowLeftSm}
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  `;
}

// ─── Screen 3: Confirmation & Receipt Template ───
function successViewTemplate() {
  const result = lastSubmittedResult || {};
  const appCode = result.applicationCode || "MT-2026-XXXXXXXX";
  const trackObj = TRACKS[result.participationType] || TRACKS.attendee;

  return `
    <div id="view-success" class="screen-view active">
      <div class="container portal-container" style="max-width: 720px;">

        <div class="receipt-card" aria-live="polite" role="status">
          <div class="receipt-icon-badge">
            ${ICONS.check}
          </div>

          <div class="badge badge-accent" style="margin-bottom: 8px;">تم استلام طلب المشاركة بنجاح</div>
          <h1 style="font-size: var(--text-3xl); margin-bottom: 8px;">وصل طلبك بنجاح!</h1>
          <p class="body-muted" style="max-width: 520px; margin-inline: auto; margin-bottom: var(--space-6);">
            شكراً لمبادرتك ومشاركتك في مهرجان التخرج الطلابي الأول 2026. تم حفظ وتوثيق طلبك في سجلات الكلية بنجاح.
          </p>

          <!-- Reference Code Box -->
          <div class="receipt-code-box">
            <div style="text-align: right;">
              <span class="body-muted" style="font-size: 11px; display: block;">رقم الطلب المرجعي الخاص بك:</span>
              <span class="receipt-code-val" id="receipt-code-text">${appCode}</span>
            </div>
            <button type="button" class="btn btn-secondary" id="btn-copy-code" style="padding: 8px 16px;">
              ${ICONS.copy}
              <span id="copy-btn-label">نسخ الرقم</span>
            </button>
          </div>

          <!-- Submission Recap Table -->
          <table class="summary-table" style="text-align: right; margin-bottom: var(--space-6);">
            <tbody>
              <tr>
                <td class="label-col">المشارك:</td>
                <td class="val-col">${result.fullName || "طالب مشارك"}</td>
              </tr>
              <tr>
                <td class="label-col">معرّف تيليجرام:</td>
                <td class="val-col" dir="ltr">${result.telegramHandle || "@username"}</td>
              </tr>
              <tr>
                <td class="label-col">رقم الهاتف:</td>
                <td class="val-col" dir="ltr">${result.phone || "—"}</td>
              </tr>
              <tr>
                <td class="label-col">الكلية والقسم:</td>
                <td class="val-col">${result.college || "كلية الطف الجامعة"} — ${result.department || "هندسة تقنيات الحاسوب"}</td>
              </tr>
              <tr>
                <td class="label-col">مسار المشاركة:</td>
                <td class="val-col">${trackObj.title}</td>
              </tr>
              <tr class="summary-total-row">
                <td class="label-col">قيمة المساهمة:</td>
                <td class="val-col">${formatIQD(result.contributionAmount)} د.ع</td>
              </tr>
            </tbody>
          </table>

          <!-- Next Steps Guide -->
          <div class="receipt-steps">
            <h4>الخطوات القادمة:</h4>
            <ol>
              <li>سيتواصل معك منسق اللجنة عبر معرّف تيليجرام لتأكيد بياناتك.</li>
              <li>سيتم تثبيت مقعدك وتنسيق استلام بطاقة الدخول والتكريم الرسمية.</li>
              <li>يمكنك حفظ أو طباعة هذا الإشعار للرجوع إليه عند مراجعة اللجنة المنظمة.</li>
            </ol>
          </div>

          <!-- Action Buttons -->
          <div class="receipt-actions">
            <a href="https://t.me/jemo_coBot" target="_blank" class="btn btn-primary" style="text-decoration: none;">
              <span>تأكيد ومتابعة الطلب عبر تيليجرام</span>
              ${ICONS.arrowLeftSm}
            </a>
            <button type="button" class="btn btn-dark" id="btn-print-receipt">
              ${ICONS.printer}
              <span>حفظ أو طباعة الإشعار</span>
            </button>
            <button type="button" class="btn btn-secondary" id="btn-new-apply">
              <span>تقديم طلب جديد</span>
            </button>
            <button type="button" class="btn btn-ghost" data-nav="home">
              <span>العودة إلى الصفحة الرئيسية</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  `;
}

// ─── View Routing & Navigation Handling ───
function switchView(viewName) {
  currentView = viewName;
  renderApp();
  window.scrollTo({ top: 0, behavior: "smooth" });
  if (viewName === "apply") {
    history.pushState({}, "", "#apply");
  } else if (viewName === "home") {
    history.pushState({}, "", "#home");
  }
}

function scrollToSection(sectionId) {
  if (currentView !== "home") {
    currentView = "home";
    renderApp();
  }
  setTimeout(() => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  }, 60);
}

// ─── Global Event Listeners ───
function getPreferredTheme() {
  try {
    const saved = localStorage.getItem("mgf-theme");
    if (saved === "dark" || saved === "light") return saved;
  } catch {}
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function applyTheme(theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem("mgf-theme", theme); } catch {}
  const btn = document.getElementById("theme-toggle-btn");
  if (btn) btn.innerHTML = theme === "dark" ? ICONS.sun : ICONS.moon;
}
function initThemeToggle() {
  applyTheme(getPreferredTheme());
  document.getElementById("theme-toggle-btn")?.addEventListener("click", () => {
    const next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    applyTheme(next);
  });
}
// ─── NVIDIA-style header: scroll shadow, mega dropdown, hamburger drawer ───
function initNvHeader() {
  const header = document.getElementById("site-nav");
  if (header) header.classList.toggle("scrolled", window.scrollY > 8);
  if (!window.__nvScrollBound) {
    window.__nvScrollBound = true;
    window.addEventListener("scroll", () => {
      document.getElementById("site-nav")?.classList.toggle("scrolled", window.scrollY > 8);
    }, { passive: true });
  }

  // Hamburger drawer (mobile)
  const menuBtn = document.getElementById("nav-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  const setMenu = (open) => {
    mobileNav?.classList.toggle("open", open);
    menuBtn?.classList.toggle("open", open);
    menuBtn?.setAttribute("aria-expanded", String(open));
    menuBtn?.setAttribute("aria-label", open ? "إغلاق القائمة" : "فتح القائمة");
    if (menuBtn) menuBtn.innerHTML = open ? ICONS.close : ICONS.menu;
  };
  menuBtn?.addEventListener("click", () => setMenu(!mobileNav?.classList.contains("open")));
  mobileNav?.querySelectorAll("button").forEach(b => b.addEventListener("click", () => setMenu(false)));

  // Tracks mega dropdown: hover reveals on desktop (CSS), click toggles on touch
  const drop = document.getElementById("nav-tracks-drop");
  const dropBtn = drop?.querySelector(".nav-drop-btn");
  dropBtn?.addEventListener("click", (e) => {
    e.preventDefault();
    const touch = window.matchMedia("(hover: none)").matches || window.innerWidth < 1025;
    const wasOpen = drop.classList.contains("open");
    drop.classList.remove("open");
    dropBtn.setAttribute("aria-expanded", "false");
    if (touch && !wasOpen) {
      drop.classList.add("open");
      dropBtn.setAttribute("aria-expanded", "true");
    } else {
      closeMobileNav();
      scrollToSection("tracks");
    }
  });
  document.querySelectorAll("[data-track-jump]").forEach(b => {
    b.addEventListener("click", () => {
      drop?.classList.remove("open");
      closeMobileNav();
      selectTrackAndScroll(Number(b.dataset.trackJump));
    });
  });
}
function closeMobileNav() {
  const mobileNav = document.getElementById("mobile-nav");
  const menuBtn = document.getElementById("nav-menu-btn");
  if (mobileNav?.classList.contains("open")) {
    mobileNav.classList.remove("open");
    menuBtn?.classList.remove("open");
    menuBtn?.setAttribute("aria-expanded", "false");
    if (menuBtn) menuBtn.innerHTML = ICONS.menu;
  }
}
// Jump to tracks section and pre-select a track (mega-menu behavior)
function selectTrackAndScroll(i) {
  if (currentView !== "home") {
    currentView = "home";
    renderApp();
  }
  setTimeout(() => {
    const target = document.getElementById("tracks");
    if (target) target.scrollIntoView({ behavior: "smooth" });
    setTimeout(() => {
      const btns = [...document.querySelectorAll(".track-interactive-item")];
      const pills = [...document.querySelectorAll(".track-tab-pill")];
      (btns[i] || pills[i])?.click();
    }, 450);
  }, 80);
}
function attachGlobalEvents() {
  initThemeToggle();
  initNvHeader();
  // Brand Click
  document.getElementById("nav-brand-btn")?.addEventListener("click", () => switchView("home"));

  // View switch tabs
  document.getElementById("tab-btn-home")?.addEventListener("click", () => switchView("home"));
  document.getElementById("tab-btn-apply")?.addEventListener("click", () => switchView("apply"));

  // Navigation button handlers
  document.querySelectorAll("[data-nav]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = btn.dataset.nav;
      switchView(target);
    });
  });

  // Scroll button handlers
  document.querySelectorAll("[data-scroll]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const target = btn.dataset.scroll;
      if (target === "faq") {
        toggleFaqChat(true);
        return;
      }
      scrollToSection(target);
    });
  });

  // ── Scroll-section active state for nav links (home view only) ───
  function updateNavActiveState() {
    if (currentView !== "home") return;
    const sections = ["home", "about", "tracks", "gallery", "schedule", "sponsors"];
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const percent = maxScroll > 0 ? scrollPos / maxScroll : 0;

    let activeSection = "home";
    if (percent > 0.8) activeSection = "sponsors";
    else if (percent > 0.5) activeSection = "schedule";
    else if (percent > 0.25) activeSection = "gallery";

    document.querySelectorAll(".nav-link").forEach(el => {
      el.classList.toggle("active", el.dataset.scroll === activeSection);
    });
  }

  window.addEventListener("scroll", updateNavActiveState, { passive: true });
  // Also update on hash change and initial load
  window.addEventListener("hashchange", updateNavActiveState);
  // Initial update deferred so DOM is ready
  setTimeout(updateNavActiveState, 100);

  // Theme toggle & brand click already attached above

  // Track Apply Buttons on Home Page
  document.querySelectorAll(".track-apply-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const trackId = btn.dataset.track;
      if (TRACKS[trackId]) {
        currentTrack = trackId;
      }
      switchView("apply");
    });
  });

  // Schedule Filter Tabs
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const period = btn.dataset.period;
      const items = document.querySelectorAll(".timeline-item");
      items.forEach(item => {
        if (period === "all" || item.dataset.period === period) {
          item.style.display = "grid";
        } else {
          item.style.display = "none";
        }
      });
    });
  });

  // Setup FAQ Chat Widget Events
  setupFaqChatEvents();
}

// ─── FAQ Chat Widget Controller ───
function toggleFaqChat(openState, targetIndex = null) {
  const widget = document.getElementById("faq-chat-widget");
  const windowEl = document.getElementById("faq-chat-window");
  const fab = document.getElementById("faq-chat-fab");
  const label = document.getElementById("faq-chat-fab-label");
  const backdrop = document.getElementById("faq-chat-backdrop");
  const mobileBtn = document.getElementById("mobile-bar-faq-btn");
  if (!widget || !windowEl || !fab) return;

  isFaqChatOpen = typeof openState === "boolean" ? openState : !isFaqChatOpen;

  if (isFaqChatOpen) {
    windowEl.hidden = false;
    if (backdrop) backdrop.hidden = false;
    fab.setAttribute("aria-expanded", "true");
    if (mobileBtn) mobileBtn.setAttribute("aria-expanded", "true");
    widget.classList.add("open");
    if (label) label.textContent = "إغلاق الأسئلة";
    if (targetIndex !== null && targetIndex !== undefined) {
      openFaqQuestion(targetIndex);
    }
  } else {
    windowEl.hidden = true;
    if (backdrop) backdrop.hidden = true;
    fab.setAttribute("aria-expanded", "false");
    if (mobileBtn) mobileBtn.setAttribute("aria-expanded", "false");
    widget.classList.remove("open");
    if (label) label.textContent = "كل ما قد تسأل عنه";
  }
}

function openFaqQuestion(index) {
  const items = document.querySelectorAll(".faq-chat-item");
  items.forEach((item, i) => {
    const qBtn = item.querySelector(".faq-chat-q-btn");
    const aBox = item.querySelector(".faq-chat-a-box");
    const shouldOpen = i === Number(index);
    if (shouldOpen) {
      item.classList.add("open");
      if (qBtn) qBtn.setAttribute("aria-expanded", "true");
      if (aBox) aBox.hidden = false;
      setTimeout(() => {
        item.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }, 60);
    } else {
      item.classList.remove("open");
      if (qBtn) qBtn.setAttribute("aria-expanded", "false");
      if (aBox) aBox.hidden = true;
    }
  });
}

function setupFaqChatEvents() {
  const fab = document.getElementById("faq-chat-fab");
  const closeBtn = document.getElementById("faq-chat-close-btn");
  const searchInput = document.getElementById("faq-chat-search");
  const countEl = document.getElementById("faq-chat-search-count");
  const emptyEl = document.getElementById("faq-chat-empty");

  fab?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFaqChat();
  });
  closeBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFaqChat(false);
  });

  // Mobile bar trigger and backdrop dismissal
  const mobileBtn = document.getElementById("mobile-bar-faq-btn");
  const backdrop = document.getElementById("faq-chat-backdrop");
  mobileBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFaqChat();
  });
  backdrop?.addEventListener("click", () => {
    toggleFaqChat(false);
  });

  // Mobile Bottom Bar Auto-hide on Scroll Down, Reveal on Scroll Up
  if (!window._mobileBarScrollBound) {
    window._mobileBarScrollBound = true;
    let lastScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
    window.addEventListener("scroll", () => {
      if (isFaqChatOpen) return;
      const currentScrollY = window.pageYOffset || document.documentElement.scrollTop || 0;
      const diff = currentScrollY - lastScrollY;
      const bar = document.getElementById("mobile-bottom-bar");
      if (bar) {
        if (diff > 5 && currentScrollY > 60) {
          bar.classList.add("hidden-bar");
        } else if (diff < -5 || currentScrollY <= 30) {
          bar.classList.remove("hidden-bar");
        }
      }
      lastScrollY = currentScrollY;
    }, { passive: true });
  }
  // Live search in questions and answers
  searchInput?.addEventListener("input", (e) => {
    const q = e.target.value.trim().toLowerCase();
    let visibleCount = 0;
    const items = document.querySelectorAll(".faq-chat-item");
    items.forEach((item, idx) => {
      const faq = FAQS[idx];
      const match = !q || (faq && (faq.q.toLowerCase().includes(q) || faq.a.toLowerCase().includes(q)));
      item.style.display = match ? "block" : "none";
      if (match) {
        visibleCount++;
        if (q.length >= 3 && visibleCount === 1) {
          openFaqQuestion(idx);
        }
      }
    });
    if (countEl) countEl.textContent = `${visibleCount} إجابة`;
    if (emptyEl) emptyEl.hidden = visibleCount > 0;
  });

  // Accordion inside chat window
  document.querySelectorAll(".faq-chat-q-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const item = btn.closest(".faq-chat-item");
      const idx = item?.getAttribute("data-faq-index");
      const isOpen = item?.classList.contains("open");
      if (isOpen) {
        item.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        const aBox = item.querySelector(".faq-chat-a-box");
        if (aBox) aBox.hidden = true;
      } else {
        openFaqQuestion(idx);
      }
    });
  });

  // Copy Answer buttons
  document.querySelectorAll("[data-copy-answer]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const idx = btn.getAttribute("data-copy-answer");
      const answer = FAQS[idx]?.a || "";
      navigator.clipboard?.writeText(answer).then(() => {
        const span = btn.querySelector("span");
        if (span) {
          const original = span.textContent;
          span.textContent = "تم النسخ ✓";
          setTimeout(() => { span.textContent = original; }, 1800);
        }
      });
    });
  });

  // Global document click to close when clicking outside
  document.addEventListener("click", (e) => {
    if (!isFaqChatOpen) return;
    const widget = document.getElementById("faq-chat-widget");
    const isNavBtn = e.target.closest('[data-scroll="faq"]');
    if (widget && !widget.contains(e.target) && !isNavBtn) {
      toggleFaqChat(false);
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isFaqChatOpen) {
      toggleFaqChat(false);
    }
  });
}

// ─── Countdown Timer ───
function initCountdown() {
  clearInterval(countdownTimer);
  const targetDate = new Date("2026-11-15T09:00:00+03:00").getTime();

  function update() {
    const now = Date.now();
    const diff = targetDate - now;

    if (diff > 0) {
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const secs = Math.floor((diff % (1000 * 60)) / 1000);

      const dEl = document.getElementById("cd-days");
      const hEl = document.getElementById("cd-hours");
      const mEl = document.getElementById("cd-mins");
      const sEl = document.getElementById("cd-secs");
      const sTile = sEl ? sEl.closest(".timer-tile") : null;

      const setVal = (el, val, soft) => {
        if (!el) return;
        const txt = String(val).padStart(2, "0");
        if (el.textContent !== txt) {
          el.textContent = txt;
          const cls = soft ? "tick-soft" : "tick";
          el.classList.remove(cls);
          void el.offsetWidth; // ponytail: restart animation
          el.classList.add(cls);
        }
      };

      setVal(dEl, days, true);
      setVal(hEl, hours, true);
      setVal(mEl, mins, true);
      setVal(sEl, secs, false);

      if (sTile) {
        sTile.classList.remove("pulse");
        void sTile.offsetWidth;
        sTile.classList.add("pulse");
      }
    }
  }

  update();
  countdownTimer = setInterval(update, 1000);
}

// ─── Telegram Apply Portal Interactions ───
function setupApplyForm() {
  const agreeBtn = document.getElementById("btn-agree-telegram");

  // 1. Track Selection & dynamic Telegram link
  document.querySelectorAll(".apply-track-card").forEach(card => {
    card.addEventListener("click", () => {
      const trackId = card.dataset.trackOption;
      currentTrack = trackId;

      document.querySelectorAll(".apply-track-card").forEach(c => {
        const isSelected = c.dataset.trackOption === trackId;
        c.classList.toggle("selected", isSelected);
        const badge = c.querySelector(".badge");
        if (badge) badge.classList.toggle("badge-accent", isSelected);
        const indicatorSpan = c.querySelector(".apply-track-indicator span:last-child");
        if (indicatorSpan) indicatorSpan.textContent = isSelected ? "المسار المختار" : "اختيار هذا المسار";
      });

      if (agreeBtn) {
        agreeBtn.href = `https://t.me/jemo_coBot?start=track_${currentTrack}`;
      }
    });
  });

  // 2. Interactive Telegram Bot Console Controller
  const userQEl = document.getElementById("bot-live-user-q");
  const replyTextEl = document.getElementById("bot-live-reply-text");
  const actionBtnEl = document.getElementById("bot-live-action-btn");
  const actionTextEl = document.getElementById("bot-live-action-text");

  document.querySelectorAll(".bot-prompt-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.faqIndex);
      const item = BOT_FAQS[idx];
      if (!item) return;

      document.querySelectorAll(".bot-prompt-btn").forEach((b, i) => {
        b.classList.toggle("active", i === idx);
      });

      if (userQEl) userQEl.textContent = item.q;
      if (replyTextEl) replyTextEl.textContent = item.a;
      if (actionTextEl) actionTextEl.textContent = item.actionText;
      if (actionBtnEl) actionBtnEl.href = `https://t.me/jemo_coBot?start=${item.actionParam}`;

      const botRow = document.querySelector(".bot-msg-row.bot-row");
      const userRow = document.querySelector(".bot-msg-row.user-row");
      if (botRow && userRow) {
        userRow.classList.remove("msg-anim");
        botRow.classList.remove("msg-anim");
        void userRow.offsetWidth; // ponytail: trigger reflow
        userRow.classList.add("msg-anim");
        botRow.classList.add("msg-anim");
      }
    });
  });
}

// ─── Success Receipt Interactions ───
function setupSuccessInteractions() {
  // Copy Code Button
  const copyBtn = document.getElementById("btn-copy-code");
  const codeText = document.getElementById("receipt-code-text");
  const copyLabel = document.getElementById("copy-btn-label");

  copyBtn?.addEventListener("click", async () => {
    const code = codeText?.textContent.trim() || "";
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      // fallback
    }
    if (copyLabel) copyLabel.textContent = "تم النسخ بنجاح!";
    copyBtn.classList.add("btn-primary");
    setTimeout(() => {
      if (copyLabel) copyLabel.textContent = "نسخ الرقم";
      copyBtn.classList.remove("btn-primary");
    }, 2000);
  });

  // Print Receipt Button
  document.getElementById("btn-print-receipt")?.addEventListener("click", () => {
    window.print();
  });

  // New Application Button
  document.getElementById("btn-new-apply")?.addEventListener("click", () => {
    uploadedFile = null;
    currentContribution = 10000;
    currentTrack = "attendee";
    switchView("apply");
  });
}

// ─── Initialization ───
window.addEventListener("hashchange", () => {
  if (location.hash === "#apply") {
    currentView = "apply";
  } else if (location.hash === "#home" || !location.hash) {
    currentView = "home";
  }
  renderApp();
});

// Initial load check
if (location.hash === "#apply") {
  currentView = "apply";
} else {
  currentView = "home";
}

// ─── Interactive Tracks Logic (Ponytail minimum) ───
function initInteractiveTracks() {
  const menu = document.getElementById("track-menu");
  const mobileTabs = document.getElementById("track-mobile-tabs");
  const dotsContainer = document.getElementById("track-carousel-dots");
  const prevBtn = document.getElementById("track-prev-btn");
  const nextBtn = document.getElementById("track-next-btn");
  const container = document.getElementById("track-content-container");
  const img = document.getElementById("track-interactive-img");
  const title = document.getElementById("track-interactive-title");
  const subtitle = document.getElementById("track-interactive-subtitle");
  const numEl = document.getElementById("track-interactive-num");
  const tagEl = document.getElementById("track-interactive-tag");
  const desc = document.getElementById("track-interactive-desc");
  const tipEl = document.getElementById("track-interactive-tip");
  const btn = document.getElementById("track-interactive-btn");
  const indicator = document.getElementById("track-menu-indicator");
  if (!container) return;

  const tracksData = Object.values(TRACKS);
  const desktopBtns = [];
  const mobilePills = [];
  const dotElements = [];
  let currentIndex = -1;

  // Build Desktop Menu, Mobile Tabs, and Pagination Dots
  tracksData.forEach((t, i) => {
    // Desktop menu button
    if (menu) {
      const b = document.createElement("button");
      b.type = "button";
      b.className = "track-interactive-item";
      b.textContent = t.title;
      b.addEventListener("mouseenter", () => changeBot(i));
      b.addEventListener("click", () => changeBot(i));
      desktopBtns.push(b);
      menu.appendChild(b);
    }

    // Mobile tab pill
    if (mobileTabs) {
      const pill = document.createElement("button");
      pill.type = "button";
      pill.className = "track-tab-pill";
      pill.innerHTML = `<span class="pill-num">${t.number}</span><span>${t.title}</span>`;
      pill.addEventListener("click", () => changeBot(i));
      mobilePills.push(pill);
      mobileTabs.appendChild(pill);
    }

    // Mobile pagination dot
    if (dotsContainer) {
      const dot = document.createElement("span");
      dot.className = "track-dot";
      dot.addEventListener("click", () => changeBot(i));
      dotElements.push(dot);
      dotsContainer.appendChild(dot);
    }
  });

  function moveIndicator(b) {
    if (!b || !indicator || window.innerWidth < 992) return;
    indicator.style.width = b.offsetWidth + "px";
    indicator.style.height = b.offsetHeight + "px";
    indicator.style.transform = `translate(${b.offsetLeft}px, ${b.offsetTop}px)`;
    indicator.style.opacity = "1";
  }


  function changeBot(idx) {
    if (idx === currentIndex) return;
    currentIndex = idx;
    const data = tracksData[idx];

    desktopBtns.forEach((b, i) => b.classList.toggle("active", i === idx));
    mobilePills.forEach((p, i) => {
      p.classList.toggle("active", i === idx);
      if (i === idx && mobileTabs) {
        const offset = p.offsetLeft - (mobileTabs.clientWidth - p.clientWidth) / 2;
        mobileTabs.scrollTo({ left: offset, behavior: "smooth" });
      }
    });
    dotElements.forEach((d, i) => d.classList.toggle("active", i === idx));

    if (desktopBtns[idx]) moveIndicator(desktopBtns[idx]);

    container.classList.remove("fade-in");
    container.classList.add("fade-out");
    setTimeout(() => {
      if (img) { img.src = data.image; img.alt = `صورة توضيحية لـ${data.title}`; if (data.width) img.width = data.width; if (data.height) img.height = data.height; }
      if (title) title.textContent = data.title;
      if (subtitle) subtitle.textContent = data.subtitle;
      if (numEl) numEl.textContent = `${data.number} / المسار ${data.number === "01" ? "الأول" : data.number === "02" ? "الثاني" : data.number === "03" ? "الثالث" : data.number === "04" ? "الرابع" : "الخامس"}`;
      if (tagEl) tagEl.textContent = data.tag;
      if (desc) desc.textContent = data.desc;
      if (tipEl) tipEl.textContent = data.tip;
      if (btn) btn.dataset.track = data.id;

      container.classList.remove("fade-out");
      container.classList.add("fade-in");
    }, 120);
  }

  // Wire Prev / Next Mobile Buttons
  prevBtn?.addEventListener("click", () => {
    changeBot((currentIndex - 1 + tracksData.length) % tracksData.length);
  });
  nextBtn?.addEventListener("click", () => {
    changeBot((currentIndex + 1) % tracksData.length);
  });

  // Touch Swipe on Card
  let touchStartX = 0;
  let touchEndX = 0;
  container.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  container.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    const diff = touchEndX - touchStartX;
    if (Math.abs(diff) > 45) {
      if (diff < 0) {
        // Swiped left (in RTL -> next)
        changeBot((currentIndex + 1) % tracksData.length);
      } else {
        // Swiped right (in RTL -> prev)
        changeBot((currentIndex - 1 + tracksData.length) % tracksData.length);
      }
    }
  }, { passive: true });

  window.addEventListener("resize", () => {
    if (currentIndex > -1 && desktopBtns[currentIndex]) {
      moveIndicator(desktopBtns[currentIndex]);
    }
  });

  // Set initial track once without auto-cycling
  changeBot(0);
}


// ─── Motion & Animation Systems (v11 port) ───
let progressBarBound = false;
let confettiCanvasEl = null;
let confettiCtx = null;
let confettiParticles = [];
let confettiAnimationId = null;
let revealObserver = null;
let starRafId = null;

function initGlobalMotion() {
  initProgressBar();
  initConfettiEngine();
}

function initProgressBar() {
  if (progressBarBound) return;
  progressBarBound = true;
  window.addEventListener("scroll", () => {
    const winScroll = document.documentElement.scrollTop || document.body.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = height > 0 ? (winScroll / height) * 100 : 0;
    const bar = document.getElementById("progressBar");
    if (bar) bar.style.width = scrolled + "%";
  }, { passive: true });
}

function initConfettiEngine() {
  if (confettiCanvasEl) return;
  confettiCanvasEl = document.getElementById("confettiCanvas");
  if (!confettiCanvasEl) return;
  confettiCtx = confettiCanvasEl.getContext("2d");
  const resize = () => {
    confettiCanvasEl.width = window.innerWidth;
    confettiCanvasEl.height = window.innerHeight;
  };
  resize();
  window.addEventListener("resize", resize);
}

function fireConfetti() {
  if (!confettiCtx || !confettiCanvasEl) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  const colors = ["#5b8fd6", "#7aa6e2", "#9fb3cc", "#16305c", "#ffffff", "#c2ccdb", "#3aa88a"];
  confettiParticles = [];

  for (let i = 0; i < 140; i++) {
    confettiParticles.push({
      x: window.innerWidth / 2,
      y: window.innerHeight * 0.6,
      vx: (Math.random() - 0.5) * 18,
      vy: (Math.random() - 0.8) * 22,
      size: Math.random() * 8 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 10,
      gravity: 0.45,
      opacity: 1,
    });
  }

  if (!confettiAnimationId) animateConfetti();
}

function animateConfetti() {
  if (!confettiCtx || !confettiCanvasEl) return;
  confettiCtx.clearRect(0, 0, confettiCanvasEl.width, confettiCanvasEl.height);

  for (let i = 0; i < confettiParticles.length; i++) {
    const p = confettiParticles[i];
    p.x += p.vx;
    p.y += p.vy;
    p.vy += p.gravity;
    p.rotation += p.rotSpeed;
    p.opacity -= 0.008;

    confettiCtx.save();
    confettiCtx.globalAlpha = Math.max(p.opacity, 0);
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate((p.rotation * Math.PI) / 180);
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
    confettiCtx.restore();
  }

  confettiParticles = confettiParticles.filter((p) => p.opacity > 0 && p.y < window.innerHeight);

  if (confettiParticles.length > 0) {
    confettiAnimationId = requestAnimationFrame(animateConfetti);
  } else {
    confettiCtx.clearRect(0, 0, confettiCanvasEl.width, confettiCanvasEl.height);
    confettiAnimationId = null;
  }
}

function initHomeMotion() {
  initGalleryLightbox();
  initGalleryStagger();
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".reveal-on-scroll").forEach((el) => el.classList.add("visible"));
    return;
  }
  initStarCanvas();
  initScrollReveal();
  initTiltCards();
}

// ─── Gallery: per-card reveal stagger ───
let galRevealObserver = null;
function initGalleryStagger() {
  const cells = document.querySelectorAll(".gal-reveal");
  if (!cells.length) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    cells.forEach((el) => el.classList.add("gal-in"));
    return;
  }
  if (galRevealObserver) galRevealObserver.disconnect();
  galRevealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("gal-in");
      galRevealObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
  cells.forEach((el) => galRevealObserver.observe(el));
}

// ─── Gallery lightbox: open, arrows, Esc, focus trap ───
let glbIndex = 0;
let glbLastFocus = null;
let glbBound = false;

function renderGalleryLightbox() {
  const p = GALLERY_PHOTOS[glbIndex];
  if (!p) return;
  const img = document.getElementById("glb-img");
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  if (img) {
    img.src = p.src;
    img.alt = p.title;
    img.setAttribute("width", p.width);
    img.setAttribute("height", p.height);
  }
  set("glb-tag", p.tag);
  set("glb-title", p.title);
  set("glb-desc", p.desc);
  set("glb-counter", `${glbIndex + 1} / ${GALLERY_PHOTOS.length}`);
  const multi = GALLERY_PHOTOS.length > 1;
  ["glb-prev", "glb-next"].forEach((id) => {
    const b = document.getElementById(id);
    if (b) b.hidden = !multi;
  });
}

function openGalleryLightbox(index) {
  const box = document.getElementById("gallery-lightbox");
  if (!box) return;
  glbIndex = (index + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
  glbLastFocus = document.activeElement;
  renderGalleryLightbox();
  box.hidden = false;
  // next frame so the open transition actually runs
  requestAnimationFrame(() => box.classList.add("open"));
  document.body.style.overflow = "hidden";
  document.getElementById("glb-close")?.focus();
}

function closeGalleryLightbox() {
  const box = document.getElementById("gallery-lightbox");
  if (!box || box.hidden) return;
  box.classList.remove("open");
  document.body.style.overflow = "";
  const done = () => { if (!box.classList.contains("open")) box.hidden = true; };
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) box.hidden = true;
  else setTimeout(done, 220);
  if (glbLastFocus && glbLastFocus.isConnected) glbLastFocus.focus();
}

function stepGalleryLightbox(dir) {
  glbIndex = (glbIndex + dir + GALLERY_PHOTOS.length) % GALLERY_PHOTOS.length;
  renderGalleryLightbox();
}

function initGalleryLightbox() {
  const box = document.getElementById("gallery-lightbox");
  if (!box) return;

  document.querySelectorAll("[data-gallery-index]").forEach((btn) => {
    btn.addEventListener("click", () => openGalleryLightbox(Number(btn.dataset.galleryIndex)));
  });

  if (glbBound) return;
  glbBound = true;

  box.addEventListener("click", (e) => {
    if (e.target.closest("[data-glb-close]")) closeGalleryLightbox();
    else if (e.target.closest("#glb-prev")) stepGalleryLightbox(-1);
    else if (e.target.closest("#glb-next")) stepGalleryLightbox(1);
  });

  document.addEventListener("keydown", (e) => {
    if (box.hidden) return;
    // RTL: ArrowRight moves to the previous photo, ArrowLeft to the next
    if (e.key === "Escape") closeGalleryLightbox();
    else if (e.key === "ArrowRight") { e.preventDefault(); stepGalleryLightbox(-1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); stepGalleryLightbox(1); }
    else if (e.key === "Tab") {
      const focusable = box.querySelectorAll("button:not([hidden])");
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
}

function initStarCanvas() {
  const starCanvas = document.getElementById("starCanvas");
  if (!starCanvas) return;

  if (starRafId) {
    cancelAnimationFrame(starRafId);
    starRafId = null;
  }

  const ctx = starCanvas.getContext("2d");
  let stars = [];

  function resizeStarCanvas() {
    const parent = starCanvas.parentElement;
    starCanvas.width = parent ? parent.offsetWidth : window.innerWidth;
    starCanvas.height = parent ? parent.offsetHeight : 600;
    initStars();
  }

  function initStars() {
    stars = [];
    const count = Math.floor(starCanvas.width / 36);
    for (let i = 0; i < count; i++) {
      stars.push({
        x: Math.random() * starCanvas.width,
        y: Math.random() * starCanvas.height,
        size: Math.random() * 1.6 + 0.4,
        alpha: Math.random() * 0.7 + 0.3,
        speed: Math.random() * 0.3 + 0.1,
      });
    }
  }

  function drawStars() {
    ctx.clearRect(0, 0, starCanvas.width, starCanvas.height);
    const dark = document.documentElement.dataset.theme === "dark";
    ctx.fillStyle = dark ? "#9fb3cc" : "#c17a34";
    stars.forEach((s) => {
      ctx.globalAlpha = s.alpha;
      ctx.beginPath();
      ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
      ctx.fill();
      s.y -= s.speed;
      if (s.y < 0) s.y = starCanvas.height;
    });
    starRafId = requestAnimationFrame(drawStars);
  }

  window.addEventListener("resize", resizeStarCanvas);
  resizeStarCanvas();
  drawStars();
}

function initScrollReveal() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.08 });
  document.querySelectorAll(".reveal-on-scroll").forEach((el) => revealObserver.observe(el));
}

function initTiltCards() {
  document.querySelectorAll(".tilt-card").forEach((card) => {
    function handleTilt(e) {
      const rect = card.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const clientY = e.touches ? e.touches[0].clientY : e.clientY;
      const x = clientX - rect.left;
      const y = clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -10;
      const rotateY = ((x - centerX) / centerX) * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }
    function resetTilt() {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    }
    card.addEventListener("mousemove", handleTilt);
    card.addEventListener("mouseleave", resetTilt);
    card.addEventListener("touchmove", handleTilt, { passive: true });
    card.addEventListener("touchend", resetTilt);
  });
}

// ─── Schedule Timeline Reveal ───
function initSchedule() {
  const list = document.getElementById("schedule-timeline-container");
  if (!list) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  list.classList.add("reveal-ready");
  const items = Array.from(list.querySelectorAll(".timeline-item"));

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const i = items.indexOf(entry.target);
        // ponytail: stagger via transition-delay; cheap for a tiny list
        entry.target.style.transitionDelay = `${i * 90}ms`;
        entry.target.classList.add("is-visible");
        setTimeout(() => { entry.target.style.transitionDelay = ""; }, i * 90 + 500);
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });

  items.forEach(it => io.observe(it));


  // Re-pop visible items when a filter tab changes
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      let i = 0;
      list.querySelectorAll(".timeline-item").forEach(it => {
        if (it.style.display !== "none") {
          it.classList.remove("refilter");
          void it.offsetWidth; // ponytail: restart animation
          it.style.animationDelay = `${i * 70}ms`;
          it.classList.add("refilter");
          i++;
        }
      });
    });
  });

  // Clean up refilter so later hovers aren't blocked by the animation
  list.addEventListener("animationend", (e) => {
    if (e.target.classList?.contains("refilter")) e.target.classList.remove("refilter");
  });
}

// ─── Sponsors Motion: Mistral-style stagger + spotlight + count-up ───
let sponsorsObserver = null;
function initSponsorsMotion() {
  const section = document.getElementById("sponsors");
  if (!section) return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    section.querySelectorAll(".sp-reveal").forEach((el) => el.classList.add("sp-in"));
    section.querySelectorAll("[data-count]").forEach((el) => { el.textContent = el.dataset.count; });
    return;
  }

  // Stagger reveal
  if (sponsorsObserver) sponsorsObserver.disconnect();
  sponsorsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("sp-in");
        if (entry.target.classList.contains("sponsor-feature")) runSponsorCountUp(section);
        sponsorsObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  section.querySelectorAll(".sp-reveal").forEach((el) => sponsorsObserver.observe(el));

  // Cursor spotlight on cards (Mistral product-card hover glow)
  section.querySelectorAll(".sponsor-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mx", `${e.clientX - rect.left}px`);
      card.style.setProperty("--my", `${e.clientY - rect.top}px`);
    });
  });
}

function runSponsorCountUp(scope) {
  scope.querySelectorAll("[data-count]").forEach((el) => {
    if (el.dataset.done) return;
    el.dataset.done = "1";
    const target = Number(el.dataset.count) || 0;
    const dur = 1200;
    const t0 = performance.now();
    function frame(t) {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  });
}

renderApp();

// Optional Analytics Injection
if (typeof undefined !== "undefined" && undefined.env?.VITE_ANALYTICS_ENDPOINT && undefined.env?.VITE_ANALYTICS_WEBSITE_ID) {
  const script = document.createElement("script");
  script.defer = true;
  script.src = `${undefined.env.VITE_ANALYTICS_ENDPOINT}/umami`;
  script.setAttribute("data-website-id", undefined.env.VITE_ANALYTICS_WEBSITE_ID);
  document.head.appendChild(script);
}
