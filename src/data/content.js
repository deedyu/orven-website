/**
 * 사이트 문구와 이미지 경로.
 * 사진을 바꿀 때는 public/images 에 파일을 넣고, 없는 이미지는 placeholder 를 false 로 바꾼다.
 * 병 이미지 경로: /images/veil.png, suede.png, salt-air.png, grove.png, ember.png
 * 원본 파일(01_VEIL@3x.png 등)은 그대로 두었다.
 */

export const brand = {
  name: "ORVEN",
  korean: "오르벤",
  tagline: "Scent, in every form.",
  heroSupport: [
    "향을 피부와 공간에 머무는 감각으로 해석하는 센트 라이프스타일 브랜드입니다.",
    "향수뿐만 아니라 핸드크림, 보디워시, 립밤, 캔들 등 향을 경험하는 다양한 제품을 통해 일상의 감각을 확장합니다.",
  ],
  introTitle: ["Scent, in", "every form."],
  collectionEyebrow: "Collection 01",
  collectionTitle: ["Five forms", "of scent"],
  introBody:
    "ORVEN은 향을 피부와 공간에 머무는 감각으로 해석하는 센트 라이프스타일 브랜드입니다. 향수에서 시작해 보디케어와 홈 프래그런스까지, 하나의 향을 다양한 형태로 확장하여 일상 속에서 향을 경험하는 새로운 방식을 제안합니다.",
  core: "향수에 머물지 않고 피부와 공간으로 이어지는 향의 브랜드.",
  beyondLine: "One scent, continued through different forms.",
  beyondNote: "No. 01 VEIL을 향수, 핸드크림, 보디워시, 캔들로 같은 향의 결을 이어 확장합니다.",
  lipNote:
    "립밤은 향수와 같은 향을 그대로 넣지 않습니다. 컬렉션의 분위기만 나눈 은은한 아로마로 둡니다.",
  campaignTitle: ["Scent, in", "every form."],
  campaignSupport: "For skin, body and space.",
  legal: "© 2026 ORVEN. Concept brand project.",
};

export const philosophy = [
  "향은 향수병 안에만 존재하지 않습니다. 피부에 바르는 크림, 하루를 시작하는 워시, 가까이 두는 밤, 공간에 머무는 촛불의 공기까지, 하나의 향이 서로 다른 형태로 일상에 스며듭니다.",
  "성별과 계절에 따라 향을 나누지 않습니다. 취향과 생활방식에 따라 고르고 이어서 쓰도록, 절제된 디자인과 같은 향의 체계로 제품을 구성합니다.",
];

export const values = [
  {
    name: "Form",
    text: "향은 액체뿐 아니라 크림, 워시, 밤, 연기와 빛으로 존재한다.",
  },
  {
    name: "Continuity",
    text: "피부에서 시작된 향의 경험이 생활과 공간까지 이어진다.",
  },
  {
    name: "Individuality",
    text: "향을 성별로 구분하지 않고, 개인의 취향과 감각을 기준으로 제안한다.",
  },
  {
    name: "Restraint",
    text: "불필요한 장식과 설명을 줄이고, 향과 제품 자체에 집중한다.",
  },
];

export const lines = [
  { name: "Personal Scent", items: "오 드 퍼퓸, 퍼퓸 오일, 솔리드 퍼퓸" },
  { name: "Body", items: "핸드크림, 립밤, 보디워시, 보디로션" },
  { name: "Home", items: "캔들, 인센스, 디퓨저, 룸 스프레이" },
  { name: "Objects", items: "시향 카드, 캔들 홀더, 트레이, 파우치" },
];

export const ui = {
  skip: "본문으로 건너뛰기",
  list: "목록",
  search: "검색",
  searchSubmit: "검색하기",
  login: "로그인",
  logout: "로그아웃",
  cart: "장바구니",
  help: "도움말",
  scroll: "Scroll",
  close: "닫기",
};

export const shopNav = [
  { id: "all", label: "전체상품" },
  { id: "best", label: "베스트" },
  { id: "new", label: "신상품" },
  { id: "perfume", label: "향수" },
  { id: "space", label: "공간" },
  { id: "body", label: "바디" },
];

export const hero = {
  src: "/images/orven-banner.png?v=1",
  alt: "바람 부는 초원에 선 사람",
  placeholder: false,
};

export const newCollection = {
  src: "/images/new-collection.png?v=1",
  alt: "ORVEN 뉴 컬렉션. EMBER, GROVE, SALT AIR, SUEDE, VEIL",
};

export const fragrances = [
  {
    id: "veil",
    index: "01",
    name: "VEIL",
    product: "오드 퍼퓸",
    volume: "100ml",
    price: "₩ 59,000",
    family: "얇은 빛, 깨끗한 피부",
    description: [
      "갓 씻고 흰 셔츠를 입은 아침처럼, 깨끗하면서도 피부의 온기가 느껴지는 향입니다.",
      "VEIL은 베르가못의 맑고 산뜻한 기운으로 시작합니다. 이어지는 화이트 티와 아이리스는 얇은 흰 천을 통과한 아침빛처럼 부드럽고 투명한 인상을 만들며, 마지막에는 클린 머스크가 피부 가까이에 포근하게 남습니다.",
      "차갑고 무균적인 비누 향이 아니라, 깨끗한 피부와 잘 정돈된 흰 셔츠에서 느껴지는 은은한 온기를 표현했습니다. 선명하게 향을 드러내기보다 얇은 베일처럼 몸을 감싸며 자연스럽게 머무는 향입니다.",
    ],
    notes: "Bergamot · White Tea · Iris · Clean Musk",
    pyramid: { top: "베르가못", heart: "화이트 티 · 아이리스", base: "클린 머스크" },
    keywords: ["투명함", "아침", "얇은 천"],
    colors: ["#F5F3EB", "#E8E2D4", "#CCD1D0"],
    colorNames: ["Pearl White", "Ivory", "Mist Grey"],
    tags: ["perfume", "best"],
    src: "/images/veil-studio.png?v=4",
    alt: "ORVEN VEIL perfume bottle, pale citrus musk",
    gallery: [
      {
        src: "/images/veil-main.png?v=2",
        alt: "ORVEN VEIL perfume bottle",
      },
      {
        src: "/images/veil-detail-01.png?v=2",
        alt: "VEIL, skin under a sheer white veil",
      },
      {
        src: "/images/veil-detail-03.png?v=2",
        alt: "VEIL, an iris petal under glass",
      },
      {
        src: "/images/veil-detail-02.png?v=2",
        alt: "VEIL, bergamot in clear glass",
      },
      {
        src: "/images/veil-detail-04.png?v=1",
        alt: "VEIL, an iris petal resting under glass",
      },
    ],
    placeholder: false,
  },
  {
    id: "grove",
    index: "02",
    name: "GROVE",
    product: "오드 퍼퓸",
    volume: "100ml",
    price: "₩ 59,000",
    family: "열매가 익기 전의 초록",
    description: [
      "GROVE는 잘 익은 열매의 달콤함보다 잎과 줄기에서 시작되는 초록에 집중한 그린 우디 향입니다.",
      "처음에는 햇빛을 받은 무화과 잎의 풋풋한 향과 갓 잘린 줄기에서 배어 나오는 수액의 싱그러운 기운이 선명하게 느껴집니다. 이어서 사이프러스의 서늘하고 곧은 향이 더해지며, 나뭇잎 사이로 빛이 스며드는 그늘진 정원을 떠올리게 합니다.",
      "마지막에는 건조한 시더우드가 초록의 날카로운 인상을 차분하게 정리합니다. 달콤하거나 열대적인 무화과 향이 아니라, 열매가 맺히기 전 식물이 자라나는 순간의 잎맥과 줄기, 그늘을 담은 향입니다.",
    ],
    notes: "Fig Leaf · Green Sap · Cypress · Cedarwood",
    pyramid: { top: "무화과 잎 · 그린 수액", heart: "사이프러스", base: "시더우드" },
    keywords: ["잎맥", "그늘", "줄기"],
    colors: ["#798653", "#B8C1A0", "#293A2C"],
    colorNames: ["Leaf Green", "Sage", "Deep Forest"],
    tags: ["perfume", "best"],
    src: "/images/grove-studio.png?v=4",
    alt: "ORVEN GROVE perfume bottle, green woody liquid",
    gallery: [
      { src: "/images/grove-studio.png?v=4", alt: "ORVEN GROVE perfume bottle" },
      { src: "/images/grove-detail-01.png?v=1", alt: "GROVE, cedar wood in shade" },
      { src: "/images/grove-detail-02.png?v=1", alt: "GROVE, a garden path through fig leaves and cypress" },
      { src: "/images/grove-detail-03.png?v=1", alt: "GROVE, unripe figs and a sunlit fig leaf" },
      { src: "/images/grove-detail-04.png?v=1", alt: "GROVE, green sap on a fig leaf vein" },
    ],
    placeholder: false,
  },
  {
    id: "salt",
    index: "03",
    name: "SALT AIR",
    product: "오드 퍼퓸",
    volume: "100ml",
    price: "₩ 59,000",
    family: "바닷바람이 마르고 남은 흔적",
    description: [
      "차가운 바닷바람과 함께 말린 만다린 껍질의 씁쓸하고 산뜻한 향이 스쳐 지나갑니다. 이어서 바다 소금의 미네랄감과 클라리 세이지의 은회색 허브 향이 맨살 위에 얇게 내려앉습니다.",
      "물기가 걷힌 자리에는 햇빛과 바람에 바랜 드리프트우드의 건조한 나뭇결이 남습니다. 선명하고 푸른 바다보다, 흐린 해변에서 바람이 지나간 뒤의 서늘하고 담백한 공기를 표현한 향입니다.",
    ],
    notes: "Mandarin Peel · Sea Salt · Clary Sage · Driftwood",
    pyramid: { top: "만다린 껍질", heart: "바다 소금 · 클라리 세이지", base: "드리프트우드" },
    keywords: ["해풍", "소금 자국", "건조함"],
    colors: ["#B5C9D2", "#ECEEE8", "#969D99"],
    colorNames: ["Mineral Blue", "Salt White", "Drift Grey"],
    tags: ["perfume"],
    src: "/images/salt-air-studio.png?v=4",
    alt: "ORVEN SALT AIR perfume bottle, pale mineral blue liquid",
    gallery: [
      { src: "/images/salt-air-studio.png?v=4", alt: "ORVEN SALT AIR perfume bottle" },
      { src: "/images/salt-detail-01.png?v=1", alt: "SALT AIR, a salt-lit shore after the sea wind" },
      { src: "/images/salt-detail-02.png?v=1", alt: "SALT AIR, silver driftwood bleached by the wind" },
      { src: "/images/salt-detail-03.png?v=1", alt: "SALT AIR, salt left after the water evaporates" },
      { src: "/images/salt-detail-04.png?v=1", alt: "SALT AIR, sage and dried citrus peel on salt" },
    ],
    placeholder: false,
  },
  {
    id: "suede",
    index: "04",
    name: "SUEDE",
    product: "오드 퍼퓸",
    volume: "100ml",
    price: "₩ 59,000",
    family: "손끝에 남는 체온",
    description: [
      "스웨이드의 표면을 천천히 쓸었을 때 결의 방향이 달라지듯, SUEDE는 피부 위에서 섬세하게 표정을 바꾸는 소프트 우디 머스크 향입니다.",
      "처음에는 핑크 페퍼의 가볍고 은은한 자극이 피부를 깨웁니다. 곧 파우더리한 바이올렛과 부드러운 스웨이드 어코드가 겹쳐지며 매끈하고 포근한 촉감을 만들어냅니다. 마지막에는 샌들우드와 머스크가 피부 가까이에 조용히 남아, 손끝으로 전해지는 체온처럼 따뜻한 잔향을 완성합니다.",
      "달거나 무겁게 감싸는 향이 아니라, 살결 위에 얇게 밀착되는 부드러운 온기를 표현한 향입니다.",
    ],
    notes: "Pink Pepper · Violet · Suede Accord · Sandalwood · Musk",
    pyramid: { top: "핑크 페퍼", heart: "바이올렛 · 스웨이드 어코드", base: "샌들우드 · 머스크" },
    keywords: ["체온", "살결", "포근함"],
    colors: ["#D6B99F", "#A78D7B", "#AEA3B0"],
    colorNames: ["Nude Beige", "Soft Taupe", "Violet Grey"],
    tags: ["perfume", "best"],
    src: "/images/suede-studio.png?v=4",
    alt: "ORVEN SUEDE perfume bottle, warm amber liquid",
    gallery: [
      { src: "/images/suede-studio.png?v=4", alt: "ORVEN SUEDE perfume bottle" },
      { src: "/images/suede-detail-01.png?v=1", alt: "SUEDE, pink pepper resting in suede" },
      { src: "/images/suede-detail-02.png?v=1", alt: "SUEDE, sandalwood grain in warm light" },
      { src: "/images/suede-detail-03.png?v=1", alt: "SUEDE, a hand on suede seen through glass" },
      { src: "/images/suede-detail-04.png?v=1", alt: "SUEDE, violet petals against suede" },
    ],
    placeholder: false,
  },
  {
    id: "ember",
    index: "05",
    name: "EMBER",
    product: "오드 퍼퓸",
    volume: "100ml",
    price: "₩ 59,000",
    family: "불꽃 이후에 남은 열",
    description: [
      "처음에는 마른 검은 찻잎의 짙고 씁쓸한 향이 차분하게 퍼집니다. 뒤이어 가느다란 인센스 연기가 어두운 공기를 천천히 가로지르며 깊이를 더합니다.",
      "불이 사라진 자리에는 부드러운 앰버의 온기와 흙내음이 감도는 베티버, 검게 그을린 나무의 건조한 향이 남습니다. 강하게 타오르는 불꽃보다 모든 것이 고요해진 뒤에도 쉽게 식지 않는 잔열을 표현한 향입니다.",
    ],
    notes: "Black Tea · Incense · Amber · Vetiver · Charred Wood",
    pyramid: { top: "블랙 티", heart: "인센스", base: "앰버 · 베티버 · 그을린 나무" },
    keywords: ["잔열", "연기", "고요함"],
    colors: ["#A55E2C", "#252321", "#827B72"],
    colorNames: ["Smoky Amber", "Charcoal", "Ash Grey"],
    tags: ["perfume", "best"],
    src: "/images/ember-studio.png?v=4",
    alt: "ORVEN EMBER perfume bottle, smoky amber liquid",
    gallery: [
      { src: "/images/ember-studio.png?v=4", alt: "ORVEN EMBER perfume bottle" },
      { src: "/images/ember-detail-01.png?v=1", alt: "EMBER, a thread of smoke from the last ember" },
      { src: "/images/ember-detail-02.png?v=1", alt: "EMBER, smoke caught in dark fabric" },
      { src: "/images/ember-detail-03.png?v=1", alt: "EMBER, amber light left on a dark wall" },
      { src: "/images/ember-detail-04.png?v=1", alt: "EMBER, heat held inside dark resin" },
    ],
    placeholder: false,
  },
];

export const featured = {
  index: "01",
  name: "VEIL",
  headline: "A quiet layer on the skin.",
  description:
    "갓 씻고 흰 셔츠를 입은 아침. 차갑게 무균적인 느낌보다, 피부의 온기가 남아 있는 깨끗함. 베르가못으로 시작해 화이트 티와 아이리스를 지나 클린 머스크가 얇게 남습니다.",
  keywords: ["투명함", "아침", "얇은 천"],
  main: {
    src: "/images/veil.png",
    alt: "ORVEN VEIL perfume bottle, a quiet layer of scent",
    placeholder: false,
  },
  details: [
    {
      src: "/images/veil-01.jpg",
      alt: "Close view of VEIL, soft light on white fabric",
      placeholder: true,
    },
    {
      src: "/images/veil-02.jpg",
      alt: "VEIL detail, morning air close to the skin",
      placeholder: true,
    },
  ],
};

export const forms = [
  {
    id: "edp",
    name: "Eau de Parfum",
    code: "No. 01",
    src: "/images/veil.png",
    alt: "VEIL eau de parfum bottle",
    placeholder: false,
    fit: "contain",
  },
  {
    id: "hand",
    name: "Hand Cream",
    code: "No. 01",
    src: "/images/hand-cream.jpg",
    alt: "VEIL hand cream",
    placeholder: true,
    fit: "cover",
  },
  {
    id: "wash",
    name: "Body Wash",
    code: "No. 01",
    src: "/images/body-wash.jpg",
    alt: "VEIL body wash",
    placeholder: true,
    fit: "cover",
  },
  {
    id: "candle",
    name: "Scented Candle",
    code: "No. 01",
    src: "/images/scented-candle.jpg",
    alt: "VEIL scented candle",
    placeholder: true,
    fit: "cover",
  },
];

export const campaign = {
  name: "VEIL",
  src: "/images/campaign.jpg",
  alt: "ORVEN campaign photograph, scent for skin, body and space",
  placeholder: true,
};

export const contact = {
  instagram: { label: "Instagram", href: "https://www.instagram.com/" },
  email: { label: "Email", href: "mailto:contact@orven.com" },
  location: "Seoul, Korea",
};

export const extensions = [
  {
    id: "veil-hand",
    name: "VEIL",
    product: "핸드 크림",
    volume: "60g",
    price: "₩ 19,000",
    tags: ["body"],
    src: "/images/veil-hand.png?v=1",
    alt: "ORVEN VEIL hand cream",
    placeholder: false,
  },
  {
    id: "grove-hand",
    name: "GROVE",
    product: "핸드 크림",
    volume: "60g",
    price: "₩ 19,000",
    tags: ["body"],
    src: "/images/grove-hand.png?v=1",
    alt: "ORVEN GROVE hand cream",
    placeholder: false,
  },
  {
    id: "salt-hand",
    name: "SALT AIR",
    product: "핸드 크림",
    volume: "60g",
    price: "₩ 19,000",
    tags: ["body"],
    src: "/images/salt-hand.png?v=2",
    alt: "ORVEN SALT AIR hand cream",
    placeholder: false,
  },
  {
    id: "suede-hand",
    name: "SUEDE",
    product: "핸드 크림",
    volume: "60g",
    price: "₩ 19,000",
    tags: ["body"],
    src: "/images/suede-hand.png?v=1",
    alt: "ORVEN SUEDE hand cream",
    placeholder: false,
  },
  {
    id: "ember-hand",
    name: "EMBER",
    product: "핸드 크림",
    volume: "60g",
    price: "₩ 19,000",
    tags: ["body"],
    src: "/images/ember-hand.png?v=1",
    alt: "ORVEN EMBER hand cream",
    placeholder: false,
  },
  {
    id: "lip-stick",
    name: "ORVEN",
    product: "립밤 스틱",
    typeLabel: "스틱",
    group: "lip-balm",
    volume: "4.5g",
    price: "₩ 12,000",
    tags: ["body"],
    src: "/images/lip-stick.png?v=1",
    alt: "ORVEN lip balm stick",
    placeholder: false,
  },
  {
    id: "lip-pot",
    name: "ORVEN",
    product: "립밤 팟",
    typeLabel: "팟",
    group: "lip-balm",
    volume: "10g",
    price: "₩ 15,000",
    tags: ["body"],
    src: "/images/lip-pot.png?v=1",
    alt: "ORVEN lip balm pot",
    placeholder: false,
  },
  {
    id: "lip-tube",
    name: "ORVEN",
    product: "립밤 튜브",
    typeLabel: "튜브",
    group: "lip-balm",
    volume: "10g",
    price: "₩ 14,000",
    tags: ["body"],
    src: "/images/lip-tube.png?v=1",
    alt: "ORVEN lip balm tube",
    placeholder: false,
  },
  {
    id: "petal-wash",
    name: "PETAL",
    product: "퍼퓸 바디 워시",
    volume: "1000ml",
    price: "₩ 25,500",
    tags: ["body"],
    src: "/images/petal-wash.png?v=1",
    alt: "ORVEN PETAL perfume body wash",
    placeholder: false,
  },
  {
    id: "zest-wash",
    name: "ZEST",
    product: "퍼퓸 바디 워시",
    volume: "1000ml",
    price: "₩ 25,500",
    tags: ["body"],
    src: "/images/zest-wash.png?v=1",
    alt: "ORVEN ZEST perfume body wash",
    placeholder: false,
  },
  {
    id: "linen-wash",
    name: "LINEN",
    product: "퍼퓸 바디 워시",
    volume: "1000ml",
    price: "₩ 25,500",
    tags: ["body"],
    src: "/images/linen-wash.png?v=1",
    alt: "ORVEN LINEN perfume body wash",
    placeholder: false,
  },
  {
    id: "candle",
    name: "SCENTED CANDLE",
    family: "홈 프래그런스",
    notes: "GROVE · Space",
    tags: ["space", "best"],
    src: "/images/scented-candle.jpg",
    alt: "ORVEN GROVE scented candle",
    placeholder: true,
  },
];

export const catalog = [...fragrances, ...extensions];

const registeredOn = {
  veil: "2026-09-23",
  grove: "2026-09-23",
  salt: "2026-09-23",
  suede: "2026-09-23",
  ember: "2026-09-23",
  "veil-hand": "2026-10-07",
  "grove-hand": "2026-10-07",
  "salt-hand": "2026-10-07",
  "suede-hand": "2026-10-07",
  "ember-hand": "2026-10-07",
  "lip-stick": "2026-10-08",
  "lip-pot": "2026-10-08",
  "lip-tube": "2026-10-08",
  "petal-wash": "2026-10-08",
  "zest-wash": "2026-10-08",
  "linen-wash": "2026-10-08",
};

export function isNewArrival(item, now = new Date()) {
  if (!item || item.placeholder) return false;
  const raw = registeredOn[item.id];
  if (!raw) return false;
  const registered = new Date(`${raw}T00:00:00`);
  const cutoff = new Date(now);
  cutoff.setMonth(cutoff.getMonth() - 1);
  cutoff.setHours(0, 0, 0, 0);
  return registered >= cutoff;
}

export const pages = {
  loginTitle: "로그인",
  loginLead: "ORVEN 계정으로 향의 기록을 이어갑니다.",
  email: "이메일",
  password: "비밀번호",
  loginSubmit: "로그인",
  loginHint: "콘셉트 사이트입니다. 이메일과 비밀번호를 입력하면 로그인됩니다.",
  loginError: "이메일과 비밀번호를 모두 입력해 주세요.",
  cartTitle: "장바구니",
  cartEmpty: "아직 담긴 향이 없습니다.",
  cartBack: "컬렉션 보기",
  helpTitle: "도움말",
  helpBody:
    "주문, 배송, 향 상담은 아래 메일로 문의할 수 있습니다. 평일 10:00–18:00 사이에 답변합니다.",
  shopEmpty: "이 분류에 해당하는 제품이 없습니다.",
  searchEmpty: "검색 결과가 없습니다.",
};
