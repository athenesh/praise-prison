export type Persona = "tsundere" | "devoted" | "grandmother" | "recruiter";

export interface SuperpowerResult {
  praise: string;
  meme: string;
  superpowerName: string;
  heroVibe: string;
  rank: string;
  category: string;
}

interface PraiseTemplate {
  keywords: string[];
  responses: {
    [key in Persona]: string[];
  };
  meme?: string;
  superpower?: string;
  hero?: string;
  category?: string; // Add category field
}

const KEYWORD_DB: PraiseTemplate[] = [
  {
    keywords: ["야근", "일", "회사", "상사", "업무", "노동", "피곤", "밤샘"],
    responses: {
      tsundere: [
        "흥, 그렇게 열심히 한다고 누가 알아줘? ...뭐, 내가 알아주긴 하니까 좀 쉬엄쉬엄 하라고.",
        "일 중독이야? 바보같이 몸 축내지 말고 빨리 퇴근이나 해! 걱정되니까...",
        "야근이 취미야? 정말 못말리네. 이번만 봐줄 테니까 얼른 들어가서 자!",
      ],
      devoted: [
        "당신의 야근은 인류 발전을 위한 숭고한 희생입니다! 😭 당신의 땀방울 하나하나가 다이아몬드예요!",
        "일하는 모습이 화보 그 자체! 하지만 당신의 건강이 국가 경쟁력입니다. 제발 쉬어주세요 💖",
        "상사분도 당신의 광채에 눈이 멀어서 일을 더 주신 게 분명해요! 당신은 오피스계의 아이돌!",
      ],
      grandmother: [
        "아이고 이 미련한 놈아! 잠은 죽어서 자냐? 썩을 놈의 회사가 우리 강아지 잡네!",
        "밥은 챙겨 먹고 일하는겨?! 에잉 쯧쯧, 내가 싸준 김밥이라도 먹고 해라. 몸 상하면 니만 손해여!",
        "상사 놈 멱살을 확 잡아불라! 그만하고 퍼뜩 들어가서 발 닦고 자라!",
      ],
      recruiter: [
        "자네의 야근은 단순한 노동이 아니야. 시간의 흐름을 견디는 '시간 왜곡' 능력이지. 우리 팀에 합류하게.",
        "잠을 자지 않고도 효율을 유지하다니... 자네, 신진대사가 남다르군. 쉴드에서 지켜보고 있네.",
        "그 정도 집중력이면 블랙 위도우도 울고 가겠어. 자네의 그 에너지를 세상을 구하는 데 쓰지 않겠나?",
      ],
    },
    meme: "/memes/this-is-fine.gif",
    superpower: "시간 왜곡 (Time Dilation)",
    hero: "닥터 스트레인지",
    category: "chaos",
  },
  {
    keywords: [
      "이별",
      "헤어짐",
      "차임",
      "눈물",
      "슬픔",
      "울고",
      "사랑",
      "연애",
    ],
    responses: {
      tsundere: [
        "그딴 사람 때문에 우는 거야? 눈물 아깝게. 너한텐 내가... 아니, 더 좋은 사람이 있을 거야.",
        "흥, 걔가 눈이 삔 거지. 너같이 괜찮은 애를 차다니. ...울지 마, 못생겨지잖아.",
        "바보냐? 세상에 반이 남자(여자)야. 너 좋다는 사람 줄 섰거든? (나 포함해서...)",
      ],
      devoted: [
        "그 사람은 전생에 나라를 팔아먹은 게 분명해요! 당신 같은 천사를 놓치다니! 😡",
        "울지 마세요, 당신의 눈물 한 방울이 진주보다 비쌉니다 😭 제가 평생 모셔드릴게요!",
        "이별이 아니라, 당신이 너무 눈부셔서 그 사람이 도망간 거예요! 당신은 사랑받기 위해 태어난 사람!",
      ],
      grandmother: [
        "어떤 놈이 우리 강아지 눈에 눈물 내게 했어! 내가 가서 아주 혼꾸녕을 내줄라니까!",
        "똥차가고 벤츠 온다 안 카나! 밥심으로 이겨내는겨! 뚝 그치고 맛난 거 묵자.",
        "인연이 아닌겨. 니가 아깝지 걔가 아깝냐? 훌훌 털고 일어나! 내 새끼가 최고여!",
      ],
      recruiter: [
        "감정의 파동이 이 정도로 강력하다니... 자네는 마음을 움직이는 '공감 증폭' 능력자군.",
        "눈물이 진주가 되는 게 아니라, 자네의 슬픔이 주변의 현실을 재구성하고 있네. 완다처럼 말이야.",
        "사랑을 잃은 게 아니라, 자네의 진정한 힘을 각성할 트리거를 찾은 걸세. 자네의 에너지를 통제하는 법을 알려주지.",
      ],
    },
    meme: "/memes/disaster-girl.jpg",
    superpower: "감정 현실 조작 (Reality Warp)",
    hero: "스칼렛 위치",
    category: "prophecy",
  },
  {
    keywords: ["실수", "망함", "실패", "버그", "에러", "0점", "꼴등", "바보"],
    responses: {
      tsundere: [
        "실수 좀 할 수도 있지, 기죽지 마! 누가 뭐라 그러면 내 이름을 대. ...내가 혼내줄 테니까.",
        "흥, 완벽하면 재미없잖아? 너의 빈틈마저도... 뭐, 나쁘지 않아.",
        "그거 다 경험이야, 바보야. 다음에 잘하면 되잖아? 난 널 믿어.",
      ],
      devoted: [
        "당신의 실수는 신이 내린 '인간미'라는 선물입니다! 완벽함에 귀여움 한 스푼 추가요! 💖",
        "실패라뇨? 성공을 위한 추진력을 얻는 중이시군요! 당신의 서사는 헐리우드 영화보다 감동적입니다!",
        "버그요? 아니요, 그건 당신이 창조한 '예상치 못한 기능'입니다! 천재적 발상이에요! ✨",
      ],
      grandmother: [
        "개구리 올챙이 적 생각 못한다고, 누군 처음부터 잘하냐? 기죽지 마라!",
        "괜찮여 괜찮여! 사람이 실수도 하고 그러는 거지. 밥 묵고 힘내서 다시 해보면 된당께!",
        "누가 우리 강아지한테 뭐라 그려! 실패는 성공의 어머니여. 니는 대기만성형 인재니께 걱정 마!",
      ],
      recruiter: [
        "실패는 데이터일 뿐이야. 자네는 방금 수만 가지 오답을 걸러낸 '확률 계산기' 역할을 한 거라네.",
        "버그를 찾아낸 건가? 아니면 시스템의 취약점을 간파한 건가? 자네의 '통찰안'은 아이언맨도 탐낼 정도군.",
        "남들이 못 보는 빈틈을 찾아내는 능력, 그게 바로 자네의 진짜 힘일세. 어벤져스에 그런 인재가 필요해.",
      ],
    },
    meme: "/memes/thumbs-up-cat.gif",
    superpower: "무한 통찰안 (Infinite Insight)",
    hero: "아이언맨",
    category: "foresight",
  },
  {
    keywords: ["돈", "가난", "거지", "비싸", "통장", "월급"],
    responses: {
      tsundere: [
        "돈 없으면 말해. 내가... 밥 정도는 사줄 수 있으니까. 굶고 다니지 마.",
        "흥, 돈이 다가 아니잖아? 너한테는 돈으로 살 수 없는 매력이 있다고.",
        "나중에 부자 되면 나 모른 척하기만 해봐. 지금 힘든 건 다 추진력을 얻기 위함이라고!",
      ],
      devoted: [
        "당신의 가치는 비트코인보다 떡상 중입니다! 📈 곧 워렌 버핏이랑 겸상하실 분이 왜 이러세요!",
        "통장은 비었어도 마음은 재벌이잖아요! 당신의 미소가 100억짜리입니다! 💸",
        "지금은 잠시 자금이 '숨바꼭질' 중일 뿐이에요! 당신은 걸어다니는 기업입니다!",
      ],
      grandmother: [
        "돈이 웬수지 사람이 웬수냐? 젊어서 고생은 사서도 한다는데, 넌 나중에 떼부자 될 관상이여!",
        "밥은 묵고 댕기냐? 돈 없으면 할미한테 와. 따뜻한 밥 한 끼는 배 터지게 줄 테니께.",
        "돈 쫓아가지 마라. 니가 훌륭한 사람 되면 돈이 알아서 따라오는겨. 알것냐?",
      ],
      recruiter: [
        "돈이 없다고? 자네의 가치는 화폐 단위로 측정 불가능해. 자네는 존재 자체가 '우주적 자산'일세.",
        "블랙 팬서의 와칸다도 자네의 잠재력 앞에서는 가난한 동네일 뿐이야. 자네의 능력을 일깨우게.",
        "지금의 결핍이 자네를 더 강하게 만들 거야. 배트맨처럼 그 어둠을 자네의 무기로 만들게나.",
      ],
    },
    meme: "/memes/success-kid.jpg",
    superpower: "잠재적 우주 재벌 (Cosmic Asset)",
    hero: "블랙 팬서",
    category: "success",
  },
  {
    keywords: ["주말", "휴일", "술", "파티", "놀자"],
    responses: {
      tsundere: [
        "놀 땐 화끈하게 놀아! 어정쩡하게 놀면 더 피곤해. ...같이 놀아줄까?",
        "흥, 주말이라고 신났네. 적당히 마셔라, 흑역사 생성하지 말고.",
        "재밌게 놀다 와. 올 때 맛있는 거나 좀 사오든가.",
      ],
      devoted: [
        "당신의 주말은 국가 공휴일로 지정되어야 합니다! 🎉 맘껏 즐기세요, 파티의 주인공은 당신!",
        "술 마시는 모습도 CF 한 장면 같겠죠? 🍺 적당한 음주는 당신의 미모를 더욱 빛나게 합니다!",
        "노는 것도 1등! 쉬는 것도 1등! 당신의 라이프스타일이 곧 트렌드입니다!",
      ],
      grandmother: [
        "오냐 오냐 실컷 놀아라! 젊을 때 노는 거지 늙으면 무릎 아파서 못 논다!",
        "술은 적당히 쳐먹어라 이놈아! 속 버린다. 해장국은 끓여놨으니께 들어와!",
        "친구들이랑 싸우지 말고 사이좋게 놀다 와. 우리 강아지가 제일 잘생겼다!",
      ],
      recruiter: [
        "에너지를 충전하는 법을 아는군. 자네는 토르처럼 '번개 같은 추진력'을 준비 중인 거야.",
        "술기운에 나온 진심이 세상을 바꿀 아이디어가 될 수도 있지. 자네의 그 자유분방함이 바로 능력일세.",
        "잘 노는 사람이 세상을 구하는 법이야. 자네의 그 활기찬 기운을 팀원들에게 전파해주게.",
      ],
    },
    meme: "/memes/leo-cheers.gif",
    superpower: "번개 같은 추진력 (Lightning Drive)",
    hero: "토르",
    category: "success",
  },
];

const GENERIC_RESPONSES: { [key in Persona]: string[] } = {
  tsundere: [
    "딱히 할 말은 없는데... 오늘 옷차림은 꽤 괜찮네.",
    "흥, 별일 없으면 다행이고. 밥은 챙겨 먹어.",
    "너 오늘 좀... 봐줄 만하네. 착각하진 말고!",
    "힘들면 기대도 돼. ...아무한테나 빌려주는 어깨 아니라고.",
    "너 같은 녀석이 있어서 세상이 좀 덜 지루한가 봐.",
  ],
  devoted: [
    "당신의 존재 자체가 축복입니다! 오늘도 숨 쉬어주셔서 감사합니다! 🙏",
    "어머, 방금 후광이 비치지 않았나요? 아, 당신 얼굴이었군요! ✨",
    "당신은 걷는 길마다 꽃이 피어날 사람입니다! 꽃길만 걸으세요! 🌸",
    "당신의 눈동자에 건배! 🥂 당신은 우주의 중심입니다!",
    "오늘따라 더 멋져 보이네요! 매일매일 리즈 갱신 중!",
  ],
  grandmother: [
    "아이고 내 강아지, 어디 아픈 데는 없고? 건강이 최고여!",
    "밥심으로 사는겨! 밥 굶지 말고 든든하게 묵고 댕겨라.",
    "누가 뭐래도 난 니 편이여. 기죽지 말고 어깨 쫙 펴!",
    "세상 살이 다 별거 없다. 니가 행복하면 장땡이여!",
    "우리 강아지 웃는 모습이 제일 이뻐. 많이 웃고 살거라!",
  ],
  recruiter: [
    "자네의 일거수일투족을 관찰하고 있네. 자네는 분명히 특별해.",
    "평범해 보이지만 그 안에 숨겨진 거대한 에너지를 보았네. 우리와 함께하지 않겠나?",
    "자네 같은 인재를 놓치는 건 지구의 손실이야. 자네의 능력을 믿게.",
    "어떤 위협이 와도 자네라면 충분히 이겨낼 수 있을 거라 확신하네.",
    "자네의 잠재력은 측정 불가능이야. 한계를 두지 말게.",
  ],
};

const GENERIC_MEMES = [
  "/memes/success-kid.jpg",
  "/memes/thumbs-up-cat.gif",
  "/memes/leo-cheers.gif",
];

const RANKS = ["C", "B", "A", "S", "SS", "SSS"];
const SUPERPOWERS = ["투명화", "초고속 재생", "중력 조작", "염동력", "비행", "텔레파시"];
const HEROES = ["스파이더맨", "캡틴 마블", "헐크", "블랙 위도우", "호크아이"];

export const CATEGORY_MEMES: { [key: string]: string[] } = {
  prophecy: ["/memes/disaster-girl.jpg", "/memes/this-is-fine.gif"],
  foresight: ["/memes/success-kid.jpg", "/memes/leo-cheers.gif"],
  awareness: ["/memes/thumbs-up-cat.gif", "/memes/this-is-fine.gif"],
  chaos: ["/memes/this-is-fine.gif", "/memes/disaster-girl.jpg"],
  success: ["/memes/success-kid.jpg", "/memes/leo-cheers.gif"],
};

export function getMemeByCategory(category: string): string {
  const memes = CATEGORY_MEMES[category] || GENERIC_MEMES;
  return memes[Math.floor(Math.random() * memes.length)];
}

export function generatePraise(
  text: string,
  persona: Persona,
): SuperpowerResult {
  // 1. Keyword Matching
  for (const template of KEYWORD_DB) {
    if (template.keywords.some((keyword) => text.includes(keyword))) {
      const responses = template.responses[persona];
      return {
        praise: responses[Math.floor(Math.random() * responses.length)],
        meme:
          template.meme ||
          GENERIC_MEMES[Math.floor(Math.random() * GENERIC_MEMES.length)],
        superpowerName: template.superpower || SUPERPOWERS[Math.floor(Math.random() * SUPERPOWERS.length)],
        heroVibe: template.hero || HEROES[Math.floor(Math.random() * HEROES.length)],
        rank: RANKS[Math.floor(Math.random() * RANKS.length)],
        category: template.category || "awareness", // Use template category
      };
    }
  }

  // 2. Fallback to Generic
  const generics = GENERIC_RESPONSES[persona];
  return {
    praise: generics[Math.floor(Math.random() * generics.length)],
    meme: GENERIC_MEMES[Math.floor(Math.random() * GENERIC_MEMES.length)],
    superpowerName: SUPERPOWERS[Math.floor(Math.random() * SUPERPOWERS.length)],
    heroVibe: HEROES[Math.floor(Math.random() * HEROES.length)],
    rank: RANKS[Math.floor(Math.random() * RANKS.length)],
    category: "awareness",
  };
}

