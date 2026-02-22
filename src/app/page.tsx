"use client";

import { useState, useRef, useEffect } from "react";
import { toPng } from 'html-to-image';
import confetti from 'canvas-confetti';
import { generatePraise, Persona, getMemeByCategory } from '@/lib/praise-engine';
import { 
  CalculatorPersona, 
  CALCULATOR_PERSONAS, 
  calculateOpportunityCost, 
  CalculationResult 
} from '@/lib/calculator-engine';
import AdBanner from "@/components/AdBanner";
import SEOContent from "@/components/SEOContent";

const PERSONAS: { id: Persona; name: string; icon: string; desc: string }[] = [
  { id: 'recruiter', name: '히어로 영입관', icon: '🛡️', desc: '자네의 잠재력은 범상치 않군. 합류하게.' },
  { id: 'tsundere', name: '츤데레 교도관', icon: '😒', desc: '딱히 널 위해 칭찬하는 건 아니야.' },
  { id: 'devoted', name: '주접킹 교도관', icon: '😍', desc: '당신은 숨쉬기만 해도 예술입니다!' },
  { id: 'grandmother', name: '욕쟁이 할매', icon: '👵', desc: '아이고 이 화상아 밥은 먹었냐!' },
];

export default function Home() {
  const [mood, setMood] = useState<"prison" | "heaven" | "calculator">("prison");
  const [isSharedView, setIsSharedView] = useState(false);
  
  // Praise Mode State
  const [inputText, setInputText] = useState("");
  const [selectedPersona, setSelectedPersona] = useState<Persona>('devoted');
  const [praiseText, setPraiseText] = useState("");
  const [category, setCategory] = useState("awareness");
  const [memeUrl, setMemeUrl] = useState("");
  const [superpower, setSuperpower] = useState({
    name: "",
    hero: "",
    rank: "",
    heroId: "" // Added heroId
  });
  
  // Calculator Mode State
  const [calcInput, setCalcInput] = useState<{ minutes: string; activity: string; persona: CalculatorPersona }>({
    minutes: '',
    activity: '',
    persona: 'shark'
  });
  const [calcResult, setCalcResult] = useState<CalculationResult | null>(null);
  const receiptRef = useRef<HTMLDivElement>(null);

  const [showMeme, setShowMeme] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMsg, setLoadingMsg] = useState("판결 내리는 중...");
  const [currentAd, setCurrentAd] = useState<{ text: string; brand: string } | null>(null);
  const certificateRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // Restore state from URL on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const params = new URLSearchParams(window.location.search);
    const sharedMode = params.get('mode');

    if (sharedMode === 'heaven') {
      setIsSharedView(true);
      setMood('heaven');
      setInputText(params.get('text') || '');
      setSelectedPersona((params.get('persona') as Persona) || 'devoted');
      setPraiseText(params.get('praise') || '');
      setCategory(params.get('category') || 'awareness');
      setMemeUrl(params.get('meme') || '');
      setSuperpower({
        name: params.get('sp_name') || '',
        hero: params.get('sp_hero') || '',
        rank: params.get('sp_rank') || '',
        heroId: params.get('sp_id') || Math.floor(Math.random() * 10000).toString().padStart(4, '0')
      });
    } else if (sharedMode === 'calculator') {
      const minutes = parseInt(params.get('minutes') || '0', 10);
      const activity = params.get('activity') || '';
      const persona = (params.get('persona') as CalculatorPersona) || 'shark';

      if (minutes && activity) {
        setIsSharedView(true);
        setMood('calculator');
        setCalcInput({
          minutes: minutes.toString(),
          activity,
          persona
        });
        const result = calculateOpportunityCost(minutes, activity, persona);
        // If timestamp is not in URL (which it isn't yet), the engine generates "now". 
        // Ideally we should persist it, but for now this is fine.
        setCalcResult(result);
      }
    } else if (sharedMode === 'meme') {
      // Handle shared meme view
      setIsSharedView(true);
      setMood('prison'); // Start at prison so they can use it
      setMemeUrl(params.get('meme') || '');
      setPraiseText(params.get('text') || '');
      setCategory(params.get('category') || 'awareness');
      setShowMeme(true); // Show meme modal immediately
    }
  }, []);

  const handleShare = async () => {
    let params = new URLSearchParams();

    if (mood === 'heaven') {
      params = new URLSearchParams({
        mode: 'heaven',
        text: inputText,
        persona: selectedPersona,
        praise: praiseText,
        category: category,
        meme: memeUrl,
        sp_name: superpower.name,
        sp_hero: superpower.hero,
        sp_rank: superpower.rank,
        sp_id: superpower.heroId
      });
    } else if (mood === 'calculator' && calcResult) {
      params = new URLSearchParams({
        mode: 'calculator',
        minutes: calcInput.minutes,
        activity: calcInput.activity,
        persona: calcInput.persona
      });
    } else {
      return; // Nothing to share
    }

    const shareUrl = `${window.location.origin}?${params.toString()}`;

    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("링크가 복사되었습니다! 친구들에게 공유해보세요. 🔗");
    } catch (err) {
      console.error("공유 실패:", err);
      alert("링크 복사에 실패했습니다. URL을 직접 복사해주세요.");
    }
  };

  const startMyOwn = () => {
    // Clear URL params and reset state
    window.history.pushState({}, '', '/');
    setIsSharedView(false);
    reset();
  };

  const handleMemeShare = async () => {
    const params = new URLSearchParams({
      mode: 'meme',
      meme: memeUrl,
      text: praiseText.split('!')[0] + '!',
      category: category
    });
    
    const shareUrl = `${window.location.origin}?${params.toString()}`;

    try {
      await navigator.clipboard.writeText(shareUrl);
      alert("짤방 링크가 복사되었습니다! 친구들에게 공유해보세요. 😂");
    } catch (err) {
      console.error("공유 실패:", err);
      alert("링크 복사에 실패했습니다. URL을 직접 복사해주세요.");
    }
  };

  const LOADING_ADS = [
    { text: "지친 당신을 위한 '마법의 차' 🍵", brand: "HealTea" },
    { text: "오늘 밤, 꿀잠을 선물하세요 💤", brand: "SleepWell" },
    { text: "당신의 멘탈을 관리하는 가장 쉬운 방법 📱", brand: "MindCare" },
  ];

  const handlePersonaSelect = (id: Persona) => {
    setSelectedPersona(id);
    textareaRef.current?.focus();
  };

  const CONTEXTUAL_ADS: Record<string, { text: string; brand: string; icon: string }> = {
    prophecy: { text: "미래를 대비하는 완벽한 가계부 앱", brand: "MoneyWise", icon: "📈" },
    foresight: { text: "당신의 통찰력을 높여줄 베스트셀러", brand: "Bookly", icon: "📚" },
    awareness: { text: "지금 이 순간, 스트레스 해소 명상", brand: "Calmly", icon: "🧘" },
    chaos: { text: "복잡한 머릿속을 정리해줄 다이어리", brand: "PlanIt", icon: "📒" },
    success: { text: "성공하는 사람들의 아침 루틴 커피", brand: "HeroCoffee", icon: "☕" },
  };

  const handleConfess = async () => {
    if (!inputText.trim()) return;
    setIsLoading(true);
    setShowMeme(false);
    setCurrentAd(LOADING_ADS[Math.floor(Math.random() * LOADING_ADS.length)]);

    // Fake Loading Sequence for Dramatic Effect
    const messages = [
      "DNA 분석 및 잠재력 측정 중...",
      "뮤턴트 게놈 지도 스캔 중...",
      "히어로 적합성 시뮬레이션 중...",
      "S.H.I.E.L.D. 기밀 파일 생성 중..."
    ];
    
    let step = 0;
    setLoadingMsg(messages[0]);

    const interval = setInterval(() => {
      step++;
      if (step < messages.length) {
        setLoadingMsg(messages[step]);
      }
    }, 600);

    try {
      const response = await fetch('/api/praise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          text: inputText, 
          persona: selectedPersona 
        }),
      });

      const data = await response.json();
      
      if (data.error) {
        throw new Error(data.details || data.error);
      }

      if (!data.praise || data.praise.trim() === "") {
        throw new Error("Received empty praise text");
      }

      // Sync with the dramatic loading
      setTimeout(() => {
        clearInterval(interval);
        setPraiseText(data.praise);
        setSuperpower({
          name: data.superpowerName || "잠재적 능력",
          hero: data.heroVibe || "미지의 히어로",
          rank: data.rank || "B",
          heroId: Math.floor(Math.random() * 10000).toString().padStart(4, '0')
        });
        setCategory(data.category || "awareness");
        setMemeUrl(getMemeByCategory(data.category));
        setMood("heaven");
        setIsLoading(false);
        
        // Fire Confetti
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
        const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

        const confettiInterval = window.setInterval(function() {
          const timeLeft = animationEnd - Date.now();
          if (timeLeft <= 0) return clearInterval(confettiInterval);
          const particleCount = 50 * (timeLeft / duration);
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
          confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
      }, 2000);

    } catch (error) {
      clearInterval(interval);
      console.error("Praise API failed, falling back to local engine", error);
      
      // Fallback to local engine if API fails
      const result = generatePraise(inputText, selectedPersona);
      setPraiseText(result.praise);
      setCategory(result.category || "awareness");
      setSuperpower({
        name: result.superpowerName,
        hero: result.heroVibe,
        rank: result.rank,
        heroId: Math.floor(Math.random() * 10000).toString().padStart(4, '0')
      });
      setMemeUrl(result.meme);
      setMood("heaven");
      setIsLoading(false);
    }
  };


  const downloadCertificate = async () => {
    if (certificateRef.current === null) {
      return;
    }

    try {
      const dataUrl = await toPng(certificateRef.current, { cacheBust: true, });
      const link = document.createElement('a');
      link.download = 'praise-prison-certificate.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error(err);
      alert("출소 증명서 발급 실패! 다시 시도해주세요.");
    }
  };

  const downloadReceipt = async () => {
    if (receiptRef.current === null) return;
    try {
      const dataUrl = await toPng(receiptRef.current, { cacheBust: true, });
      const link = document.createElement('a');
      link.download = 'time-prison-receipt.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error(err);
      alert("영수증 발급 실패! 다시 시도해주세요.");
    }
  };

  const handleCalculate = () => {
    if (!calcInput.minutes || !calcInput.activity) return;
    const minutes = parseInt(calcInput.minutes, 10);
    if (isNaN(minutes)) return;

    const result = calculateOpportunityCost(minutes, calcInput.activity, calcInput.persona);
    setCalcResult(result);
  };

  const reset = () => {
    setMood("prison");
    setInputText("");
    setPraiseText("");
    setCalcResult(null);
    setCalcInput({ minutes: '', activity: '', persona: 'shark' });
    
    // Clear URL params if coming from shared view
    if (isSharedView) {
      setIsSharedView(false);
      window.history.pushState({}, '', '/');
    }
  };

  return (
    <main
      className={`min-h-screen flex flex-col items-center p-4 md:p-8 transition-colors duration-1000 ease-in-out ${
        mood === "prison" || mood === "calculator"
          ? "bg-zinc-900 text-zinc-400"
          : "bg-sky-50 text-sky-900" 
      }`}
    >
      {/* Header */}
      <header className={`text-center space-y-2 md:space-y-4 transition-all duration-500 pt-4 md:pt-0 ${
        mood === "heaven" ? "mb-2 md:mb-8 scale-90 md:scale-100" : "mb-8"
      }`}>
        <h1
          className={`text-3xl md:text-6xl font-bold tracking-tighter transition-all duration-700 ${
            mood === "heaven" ? "text-sky-500 drop-shadow-lg" : "text-zinc-100"
          }`}
        >
          {mood === "prison" && "⛓️ 긍정 교화소 ⛓️"}
          {mood === "heaven" && "✨ 칭찬 천국 ✨"}
          {mood === "calculator" && "💸 팩트 취조실 💸"}
        </h1>
        <p className="text-sm md:text-xl opacity-80">
          {mood === "prison" && "당신의 우울한 죄를 고백하세요. 칭찬으로 교화해드립니다."}
          {mood === "heaven" && "당신은 충분히 멋진 사람입니다. 이 빛을 즐기세요!"}
          {mood === "calculator" && "당신이 흘려보낸 시간, 뼈 때리는 팩트로 심문합니다."}
        </p>

        {/* Tab Navigation */}
        {mood !== "heaven" && (
          <div className="flex justify-center mt-6">
            <div className="bg-zinc-800 p-1 rounded-full inline-flex relative">
              <div 
                className={`absolute top-1 bottom-1 w-[50%] bg-zinc-600 rounded-full transition-all duration-300 ease-in-out ${
                  mood === "calculator" ? "left-[50%]" : "left-0"
                }`} 
              />
              <button
                onClick={() => {
                  setMood("prison");
                  setCalcResult(null); // Reset calculator result when switching tabs
                }}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors ${
                  mood === "prison" ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                ⛓️ 긍정 교화소
              </button>
              <button
                onClick={() => {
                  setMood("calculator");
                  setCalcResult(null); // Reset calculator result when switching tabs
                }}
                className={`relative z-10 px-6 py-2 rounded-full text-sm font-bold transition-colors ${
                  mood === "calculator" ? "text-white" : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                💸 팩트 취조실
              </button>
            </div>
          </div>
        )}
      </header>

      {/* Content */}
      <div className="w-full max-w-2xl flex flex-col justify-center my-4 md:my-0">
        {mood === "prison" && (
          <div className="space-y-6 animate-fade-in">
            {/* Persona Selection */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {PERSONAS.map((persona) => (
                <button
                  key={persona.id}
                  onClick={() => handlePersonaSelect(persona.id)}
                  className={`p-4 rounded-xl border-2 transition-all text-left ${
                    selectedPersona === persona.id
                      ? "bg-zinc-800 border-zinc-100 text-zinc-100 shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                      : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-600"
                  }`}
                >
                  <div className="text-2xl mb-2">{persona.icon}</div>
                  <div className="font-bold mb-1">{persona.name}</div>
                  <div className="text-xs opacity-70">{persona.desc}</div>
                </button>
              ))}
            </div>

            <div className="relative">
              <textarea
                ref={textareaRef}
                className="w-full h-48 p-6 rounded-xl bg-zinc-800 border-2 border-zinc-700 focus:border-zinc-500 focus:ring-0 text-zinc-100 text-lg placeholder-zinc-600 resize-none transition-all shadow-inner"
                placeholder="오늘 무슨 안 좋은 일이 있었나요? 솔직하게 털어놓으세요..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.nativeEvent.isComposing) return;
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleConfess();
                  }
                }}
              />
              <div className="absolute bottom-3 right-4 text-[10px] text-zinc-600 pointer-events-none hidden md:block">
                Enter로 고백하기, Shift+Enter로 줄바꿈
              </div>
            </div>

            {isLoading && currentAd && (
              <div className="space-y-4">
                <div className="bg-zinc-800/50 border border-zinc-700 rounded-xl p-4 animate-pulse">
                  <div className="text-[10px] text-zinc-500 uppercase tracking-widest mb-1">Sponsored Ad</div>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-zinc-300 font-medium">{currentAd.text}</div>
                    <div className="text-[10px] bg-zinc-700 px-2 py-0.5 rounded text-zinc-400">{currentAd.brand}</div>
                  </div>
                </div>
                {/* AdSense Banner - Temporarily disabled until approval */}
                {/* <AdBanner slot="1234567890" format="rectangle" /> */}
              </div>
            )}

            <button
              onClick={handleConfess}
              disabled={isLoading || !inputText.trim()}
              className={`w-full py-4 rounded-xl text-xl font-bold transition-all transform active:scale-95 ${
                isLoading
                  ? "bg-zinc-700 cursor-not-allowed"
                  : "bg-zinc-100 text-black hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="animate-spin">⏳</span> {loadingMsg}
                </span>
              ) : (
                "자수하고 칭찬받기"
              )}
            </button>
            
            <p className="text-center text-xs text-zinc-600 mt-4">
              * AI가 아닌 최첨단 칭찬 알고리즘이 당신을 위로합니다.
            </p>
          </div>
        )}
        
        {mood === "calculator" && (
          <div className="space-y-6 animate-fade-in">
             {!calcResult ? (
              <>
                <div className="bg-zinc-800/50 p-6 rounded-xl border border-zinc-700 space-y-4">
                  {/* Shared View Header */}
                  {isSharedView && (
                    <div className="mb-4 animate-bounce-in text-center">
                      <div className="inline-block bg-zinc-700 text-zinc-200 px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                        📨 누군가 팩트 폭격을 보냈습니다!
                      </div>
                    </div>
                  )}
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">낭비한 시간 (분)</label>
                    <input 
                      type="number" 
                      placeholder="예: 30"
                      value={calcInput.minutes}
                      onChange={(e) => setCalcInput({...calcInput, minutes: e.target.value})}
                      className="w-full p-4 rounded-lg bg-zinc-900 border border-zinc-600 text-white focus:border-zinc-400 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-zinc-400 mb-2">무엇을 하느라 보냈나요?</label>
                    <input 
                      type="text" 
                      placeholder="예: 인스타 릴스 보기, 침대에서 뒹굴기"
                      value={calcInput.activity}
                      onChange={(e) => setCalcInput({...calcInput, activity: e.target.value})}
                      className="w-full p-4 rounded-lg bg-zinc-900 border border-zinc-600 text-white focus:border-zinc-400 outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2 text-center">계산해줄 교도관 선택</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {CALCULATOR_PERSONAS.map((p) => (
                      <button
                        key={p.id}
                        onClick={() => setCalcInput({...calcInput, persona: p.id})}
                        className={`p-4 rounded-xl border transition-all text-left ${
                          calcInput.persona === p.id
                            ? "bg-zinc-800 border-zinc-100 text-zinc-100"
                            : "bg-zinc-900 border-zinc-800 text-zinc-500 hover:border-zinc-600"
                        }`}
                      >
                        <div className="text-2xl mb-1">{p.icon}</div>
                        <div className="font-bold text-sm">{p.name}</div>
                        <div className="text-[10px] opacity-70">{p.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleCalculate}
                  disabled={!calcInput.minutes || !calcInput.activity}
                  className="w-full py-4 rounded-xl text-xl font-bold bg-zinc-100 text-black hover:bg-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  기회비용 계산하기
                </button>
              </>
             ) : (
               <div className="flex flex-col items-center animate-fade-in-up">
                 {/* Receipt Card */}
                 <div ref={receiptRef} className="bg-white text-black p-6 w-full max-w-sm shadow-2xl rotate-1 relative mb-6">
                    {/* Jagged Top */}
                    <div className="absolute -top-2 left-0 w-full h-4 bg-white [mask-image:linear-gradient(45deg,transparent_50%,black_50%),linear-gradient(-45deg,transparent_50%,black_50%)] [mask-size:20px_20px] [mask-repeat:repeat-x]" />
                    
                    <div className="text-center border-b-2 border-dashed border-gray-300 pb-4 mb-4">
                      <div className="text-2xl font-black tracking-tighter uppercase mb-1">Time Prison</div>
                      <div className="text-xs text-gray-500">OFFICIAL RECEIPT</div>
                      <div className="text-xs text-gray-400">{calcResult.timestamp}</div>
                    </div>

                    <div className="space-y-2 mb-4 text-sm font-mono">
                      <div className="flex justify-between">
                        <span className="text-gray-600">ITEM</span>
                        <span className="font-bold">{calcInput.activity}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">QTY</span>
                        <span className="font-bold">{calcInput.minutes} min</span>
                      </div>
                    </div>

                    <div className="border-t-2 border-dashed border-gray-300 py-4 space-y-2 font-mono text-sm">
                      {calcResult.receiptItems.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center">
                          <span className="text-gray-600 truncate mr-2">{item.name}</span>
                          <span className="font-bold">{item.value}</span>
                        </div>
                      ))}
                    </div>

                    <div className="border-t-4 border-black pt-4 mb-6">
                      <div className="flex justify-between items-end">
                        <span className="font-black text-lg">{calcResult.totalLabel}</span>
                        <span className="font-black text-xl">{calcResult.cost}</span>
                      </div>
                    </div>

                    <div className="bg-gray-100 p-3 text-center text-sm font-medium leading-relaxed break-keep">
                      "{calcResult.message}"
                    </div>

                    {calcResult.explanation && (
                      <div className="mt-2 text-[10px] text-gray-500 text-center font-mono tracking-tight">
                        * {calcResult.explanation}
                      </div>
                    )}

                    <div className="mt-6 text-center">
                      <div className="inline-block border-2 border-black px-2 py-1 font-black text-xs transform -rotate-12 opacity-50">
                        {CALCULATOR_PERSONAS.find(p => p.id === calcResult.persona)?.name} APPROVED
                      </div>
                    </div>
                    
                    {/* Jagged Bottom */}
                    <div className="absolute -bottom-2 left-0 w-full h-4 bg-white [mask-image:linear-gradient(45deg,transparent_50%,black_50%),linear-gradient(-45deg,transparent_50%,black_50%)] [mask-size:20px_20px] [mask-repeat:repeat-x] rotate-180" />
                 </div>

                 <div className="flex gap-2 w-full max-w-sm flex-col md:flex-row">
                   {!isSharedView ? (
                     <>
                        <button
                         onClick={reset}
                         className="flex-1 py-3 bg-zinc-800 text-white rounded-lg hover:bg-zinc-700 transition-colors"
                       >
                         다시하기
                       </button>
                       <button
                         onClick={downloadReceipt}
                         className="flex-1 py-3 bg-sky-500 text-white rounded-lg hover:bg-sky-400 transition-colors shadow-lg shadow-sky-500/30"
                       >
                         영수증 저장
                       </button>
                       <button
                         onClick={handleShare}
                         className="flex-1 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-400 transition-colors shadow-lg shadow-indigo-500/30 flex items-center justify-center gap-2"
                       >
                         <span>🔗</span> 공유
                       </button>
                     </>
                   ) : (
                     <>
                        <button
                         onClick={startMyOwn}
                         className="flex-1 py-3 bg-zinc-100 text-black font-bold rounded-lg hover:bg-white transition-colors shadow-lg animate-pulse"
                       >
                         나도 계산하러 가기
                       </button>
                       <button
                         onClick={() => {
                           setMood('prison');
                           setIsSharedView(false);
                           window.history.pushState({}, '', '/');
                         }}
                         className="flex-1 py-3 bg-zinc-800 text-zinc-300 font-bold rounded-lg hover:bg-zinc-700 transition-colors"
                       >
                         칭찬 감옥 가기
                       </button>
                     </>
                   )}
                 </div>
               </div>
             )}
          </div>
        )}

        {mood === "heaven" && (
          <div className="animate-fade-in text-center flex flex-col items-center justify-center h-full w-full">
            
            {/* Shared View Header */}
            {isSharedView && (
              <div className="mb-8 animate-bounce-in">
                <div className="inline-block bg-sky-100 text-sky-800 px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                  👋 친구가 보낸 히어로 등록증이 도착했습니다!
                </div>
              </div>
            )}

            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 w-full max-w-6xl">
              {/* Certificate Card to Capture */}
              <div className="flex justify-center transform scale-100 transition-transform flex-shrink-0">
                <div 
                  ref={certificateRef}
                  className="bg-white p-6 md:p-8 rounded-2xl shadow-xl border-4 border-double border-sky-200 w-full max-w-[340px] md:max-w-[400px] relative overflow-hidden text-center"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-sky-300 via-blue-400 to-sky-300" />
                  <div className="space-y-4 md:space-y-6">
                    <div className="text-xs md:text-sm font-serif text-sky-900 uppercase tracking-widest border-b border-sky-100 pb-2 flex justify-between items-center">
                      <span>Hero Registration</span>
                      <span className="font-bold text-sky-500">#{superpower.heroId || "0000"}</span>
                    </div>
                    
                    <div className="relative">
                      <h2 className="text-2xl md:text-3xl font-black text-sky-600">히어로 등록증</h2>
                      <div className="absolute -top-1 -right-2 bg-red-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full transform rotate-12">
                        CONFIDENTIAL
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2 text-left">
                      <div className="bg-sky-50 p-2 rounded-lg border border-sky-100">
                        <div className="text-[10px] text-sky-400 uppercase font-bold">각성 초능력</div>
                        <div className="text-sm font-black text-sky-800 truncate">{superpower.name}</div>
                      </div>
                      <div className="bg-sky-50 p-2 rounded-lg border border-sky-100">
                        <div className="text-[10px] text-sky-400 uppercase font-bold">히어로 타입</div>
                        <div className="text-sm font-black text-sky-800 truncate">{superpower.hero}</div>
                      </div>
                    </div>

                    <div className="py-1 md:py-2 space-y-1 md:space-y-2">
                      <div className="text-gray-400 text-[10px] md:text-xs tracking-wider">각성 계기 (구 죄목)</div>
                      <div className="font-bold text-gray-800 text-sm md:text-base leading-tight break-keep italic">"{inputText}"</div>
                    </div>

                    <div className="bg-zinc-900 p-4 md:p-6 rounded-xl relative my-2 md:my-4 border-2 border-sky-400 shadow-[0_0_15px_rgba(56,189,248,0.2)]">
                      <div className="absolute -top-3 -left-2 text-3xl md:text-4xl text-sky-400/30 font-serif">❝</div>
                      <p className="text-sm md:text-base leading-relaxed font-medium text-sky-100 whitespace-pre-line relative z-10 break-keep">
                        {praiseText}
                      </p>
                      <div className="absolute -bottom-5 -right-2 text-3xl md:text-4xl text-sky-400/30 font-serif">❞</div>
                    </div>

                    <div className="pt-4 md:pt-6 border-t border-sky-100 flex justify-between items-end">
                      <div className="text-left">
                        <div className="text-[10px] text-gray-400 uppercase tracking-wider mb-1">Scout / Warden</div>
                        <div className="font-bold text-sky-700 flex items-center gap-1.5 text-sm">
                          <span className="text-base md:text-lg">{PERSONAS.find(p => p.id === selectedPersona)?.icon}</span>
                          <span className="text-xs md:text-sm">{PERSONAS.find(p => p.id === selectedPersona)?.name}</span>
                        </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-1">
                        <div className="text-[10px] text-gray-400 uppercase font-bold">잠재력 랭크</div>
                        <div className={`text-2xl font-black italic ${
                          ['S', 'SS', 'SSS'].includes(superpower.rank) ? 'text-orange-500 animate-pulse' : 'text-sky-600'
                        }`}>
                          {superpower.rank}
                        </div>
                      </div>
                    </div>
                    
                    {/* Stamp Effect */}
                    <div className="absolute bottom-12 right-12 w-20 h-20 md:w-24 md:h-24 border-4 border-sky-500 rounded-full flex items-center justify-center opacity-10 rotate-[-20deg] pointer-events-none mix-blend-multiply">
                      <span className="text-sky-500 font-black text-lg md:text-xl">APPROVED</span>
                    </div>
                  </div>
                </div>
              </div>


              {/* Buttons Area */}
              <div className="flex flex-row md:flex-col gap-2 md:gap-4 flex-wrap justify-center md:justify-center w-full md:w-auto px-4 md:px-0">
                {!isSharedView ? (
                  <>
                    <button
                      onClick={reset}
                      className="flex-1 md:flex-none w-full md:w-52 px-4 md:px-6 py-3 rounded-full bg-gray-100 text-gray-600 text-sm md:text-base font-semibold hover:bg-gray-200 transition-all whitespace-nowrap"
                    >
                      다른 죄 고백하기
                    </button>
                    <button
                      onClick={() => {
                        console.log('Meme URL:', memeUrl);
                        console.log('Praise Text:', praiseText);
                        setShowMeme(true);
                      }}
                      className="flex-1 md:flex-none w-full md:w-52 px-4 md:px-6 py-3 rounded-full bg-yellow-400 text-yellow-900 text-sm md:text-base font-semibold hover:bg-yellow-300 shadow-lg transition-all whitespace-nowrap"
                    >
                      🤪 짤방 처방받기
                    </button>
                    <button
                      onClick={downloadCertificate}
                      className="flex-1 md:flex-none w-full md:w-52 px-6 md:px-8 py-3 rounded-full bg-sky-500 text-white text-sm md:text-base font-semibold hover:bg-sky-400 shadow-lg hover:shadow-sky-300/50 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <span>📸</span> 출소증명서 저장
                    </button>
                    <button
                      onClick={handleShare}
                      className="flex-1 md:flex-none w-full md:w-52 px-6 md:px-8 py-3 rounded-full bg-indigo-500 text-white text-sm md:text-base font-semibold hover:bg-indigo-400 shadow-lg hover:shadow-indigo-300/50 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <span>🔗</span> 결과 공유하기
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={startMyOwn}
                      className="flex-1 md:flex-none w-full md:w-52 px-6 md:px-8 py-4 rounded-full bg-sky-600 text-white text-base md:text-lg font-bold hover:bg-sky-500 shadow-xl hover:shadow-sky-400/50 transition-all flex items-center justify-center gap-2 whitespace-nowrap animate-pulse"
                    >
                      나도 죄 고백하러 가기 →
                    </button>
                    <button
                      onClick={() => {
                        setMood('calculator');
                        setIsSharedView(false);
                        window.history.pushState({}, '', '/');
                      }}
                      className="flex-1 md:flex-none w-full md:w-52 px-4 md:px-6 py-3 rounded-full bg-zinc-800 text-zinc-300 text-sm md:text-base font-semibold hover:bg-zinc-700 transition-all whitespace-nowrap"
                    >
                      ⏱️ 낭비한 시간 계산하기
                    </button>
                  </>
                )}
              </div>
            </div>

            {/* Contextual Ad Section */}
            <div className="mt-8 w-full max-w-lg animate-fade-in-up space-y-6">
              <div className="bg-white/50 backdrop-blur-sm border border-sky-100 rounded-2xl p-4 flex items-center gap-4 hover:bg-white/80 transition-all cursor-pointer group shadow-sm">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                  {CONTEXTUAL_ADS[category as keyof typeof CONTEXTUAL_ADS]?.icon || "🎁"}
                </div>
                <div className="flex-1">
                  <div className="text-[10px] text-sky-400 font-bold uppercase tracking-wider mb-0.5">Recommended for you</div>
                  <div className="text-sm text-sky-900 font-semibold">{CONTEXTUAL_ADS[category as keyof typeof CONTEXTUAL_ADS]?.text}</div>
                  <div className="text-[10px] text-sky-500 opacity-60">Sponsored by {CONTEXTUAL_ADS[category as keyof typeof CONTEXTUAL_ADS]?.brand}</div>
                </div>
                <div className="text-sky-300 group-hover:translate-x-1 transition-transform">
                  →
                </div>
              </div>

              {/* AdSense Banner - Temporarily disabled until approval */}
              {/* <AdBanner slot="0987654321" /> */}
            </div>
          </div>
        )}
      </div>

      {/* Meme Modal - Global (outside mood conditions) */}
      {showMeme && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 animate-fade-in p-4" onClick={() => setShowMeme(false)}>
          <div className="bg-white p-4 md:p-6 rounded-xl max-w-lg w-full relative" onClick={e => e.stopPropagation()}>
            <button 
              onClick={() => setShowMeme(false)}
              className="absolute top-2 right-2 text-2xl opacity-50 hover:opacity-100 z-10"
            >
              ×
            </button>
            
            {/* Header for shared view */}
            {isSharedView && (
              <div className="mb-4 text-center animate-bounce-in">
                <div className="inline-block bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-bold shadow-sm">
                  😂 친구가 보낸 짤방이 도착했습니다!
                </div>
              </div>
            )}
            
            <h3 className="text-xl font-bold mb-4 text-center text-zinc-800">💊 오늘의 짤방 처방</h3>
            <div className="aspect-video w-full bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
              {memeUrl ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={memeUrl} alt="Meme Prescription" className="max-w-full max-h-[300px] object-contain" onError={(e) => console.error('Image load failed:', memeUrl)} />
              ) : (
                <div className="text-gray-400 text-sm">짤방 로딩 중...</div>
              )}
            </div>
            <p className="text-center mt-4 text-sm text-gray-500 font-medium break-keep px-2">
              "{praiseText.split('!')[0]}!"
            </p>
            
            {/* Button group with share functionality */}
            <div className="flex gap-2 mt-6">
              {!isSharedView ? (
                <>
                  <button
                    onClick={() => setShowMeme(false)}
                    className="flex-1 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-sm"
                  >
                    닫기
                  </button>
                  <button
                    onClick={handleMemeShare}
                    className="flex-1 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-400 transition-colors font-semibold flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/30 text-sm"
                  >
                    <span>🔗</span> 짤방 공유
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setShowMeme(false);
                      setIsSharedView(false);
                      window.history.pushState({}, '', '/');
                    }}
                    className="flex-1 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-500 transition-colors font-bold shadow-lg shadow-sky-500/30 animate-pulse text-sm"
                  >
                    나도 해보기 🚀
                  </button>
                  <button
                    onClick={() => setShowMeme(false)}
                    className="px-4 py-3 bg-gray-100 text-gray-600 rounded-lg hover:bg-gray-200 transition-colors font-semibold text-sm"
                  >
                    ×
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* SEO Content Section */}
      <SEOContent mood={mood} />

      {/* Footer */}
      <footer className="w-full mt-auto py-8 border-t border-zinc-800/50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs text-zinc-500">
              © {new Date().getFullYear()} 긍정 교화소 (Praise Prison). All rights reserved.
            </div>
            <nav className="flex gap-6 text-xs">
              <a href="/about" className="hover:text-sky-400 transition-colors">About</a>
              <a href="/privacy-policy" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
              <a href="/contact" className="hover:text-sky-400 transition-colors">Contact</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
