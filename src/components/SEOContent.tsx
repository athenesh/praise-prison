interface SEOContentProps {
  mood: "prison" | "heaven" | "calculator";
}

export default function SEOContent({ mood }: SEOContentProps) {
  const textColor = mood === "heaven" ? "text-sky-900/60" : "text-zinc-500";
  const headingColor = mood === "heaven" ? "text-sky-800" : "text-zinc-300";
  const subHeadingColor = mood === "heaven" ? "text-sky-700" : "text-zinc-400";
  const borderColor = mood === "heaven" ? "border-sky-200/50" : "border-zinc-800/50";

  return (
    <section className={`w-full max-w-4xl mx-auto px-6 py-12 md:py-20 mt-12 border-t ${borderColor}`}>
      <article className={`prose max-w-none ${textColor}`}>
        <h2 className={`text-2xl md:text-3xl font-bold mb-6 ${headingColor}`}>
          우울한 죄를 칭찬으로 갚는 곳, 긍정 교화소
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${subHeadingColor}`}>긍정 교화소란?</h3>
            <p>
              긍정 교화소(Positive Rehab)는 일상의 부정적인 감정과 자책감을 긍정적인 에너지로 전환해주는 
              <strong>디지털 멘탈 케어 서비스</strong>입니다. "죄를 지었다"는 부정적인 인식을 
              "칭찬받을 만한 잠재력"으로 재해석하여, 사용자의 자존감을 높이고 하루를 긍정적으로 마무리할 수 있도록 돕습니다.
            </p>
            <p>
              단순한 위로를 넘어, 당신의 상황을 유머러스하고 따뜻한 시각으로 바라보는 
              4명의 특별한 AI 교도관들이 맞춤형 칭찬 처방을 내립니다.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className={`text-xl font-semibold ${subHeadingColor}`}>팩트 취조실이란?</h3>
            <p>
              무의미하게 흘려보낸 시간이 아깝다면, <strong>팩트 취조실</strong>에서 그 가치를 확인해보세요.
              시간 사채업자, 행복 투자자 등 다양한 페르소나가 당신의 시간을 돈, 치킨, 혹은 에너지로 환산하여
              정신이 번쩍 들게 하는 팩트 폭격을 날려드립니다.
            </p>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <h3 className={`text-xl font-semibold ${subHeadingColor}`}>어떻게 사용하나요?</h3>
          <ol className="list-decimal pl-5 space-y-4">
            <li>
              <strong>죄 고백하기:</strong> 오늘 있었던 우울한 일, 실수, 혹은 짜증나는 상황을 솔직하게 적어주세요.
              <br />
              <span className="text-sm opacity-70">예: "오늘 하루 종일 누워만 있었어...", "다이어트 중인데 치킨 먹었어..."</span>
            </li>
            <li>
              <strong>교도관 선택:</strong> 취향에 맞는 교도관(페르소나)을 선택하세요.
              <br />
              <span className="text-sm opacity-70">히어로 영입관, 츤데레, 주접킹, 욕쟁이 할매 등 다양한 캐릭터가 대기 중입니다.</span>
            </li>
            <li>
              <strong>칭찬 처방받기:</strong> AI가 당신의 고백을 분석하여 숨겨진 잠재력을 찾아내고, 맞춤형 칭찬과 '히어로 등록증'을 발급합니다.
            </li>
            <li>
              <strong>공유하기:</strong> 발급된 출소 증명서와 짤방을 친구들에게 공유하여 긍정적인 에너지를 전파하세요.
            </li>
          </ol>
        </div>

        <div className="mt-12 space-y-6">
          <h3 className={`text-xl font-semibold ${subHeadingColor}`}>누가 긍정 교화소를 사용하나요?</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className={`bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border ${borderColor}`}>
              <div className="text-3xl mb-3">🎓</div>
              <h4 className={`font-bold mb-2 ${headingColor}`}>학생 & 취준생</h4>
              <p className="text-sm">
                시험 실패, 면접 탈락 등 좌절감을 긍정으로 전환하고 
                다시 일어설 동기를 얻으세요.
              </p>
            </div>
            <div className={`bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border ${borderColor}`}>
              <div className="text-3xl mb-3">💼</div>
              <h4 className={`font-bold mb-2 ${headingColor}`}>직장인</h4>
              <p className="text-sm">
                업무 스트레스, 실수, 번아웃을 유머러스하게 해소하고 
                자존감을 회복하세요.
              </p>
            </div>
            <div className={`bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border ${borderColor}`}>
              <div className="text-3xl mb-3">🏠</div>
              <h4 className={`font-bold mb-2 ${headingColor}`}>일반인</h4>
              <p className="text-sm">
                일상의 작은 좌절과 우울감을 털어내고 
                긍정적인 하루를 마무리하세요.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 space-y-6">
          <h3 className={`text-xl font-semibold ${subHeadingColor}`}>긍정 교화소의 특별한 기능들</h3>
          <ul className="space-y-4">
            <li>
              <strong className={headingColor}>🎭 4가지 페르소나:</strong> 히어로 영입관, 츤데레 교도관, 
              주접킹 교도관, 욕쟁이 할매 중 선택하여 맞춤형 칭찬을 받으세요.
            </li>
            <li>
              <strong className={headingColor}>🏆 히어로 등록증 발급:</strong> 당신만의 초능력과 히어로 이름이 
              담긴 공식 등록증을 SNS에 공유할 수 있습니다.
            </li>
            <li>
              <strong className={headingColor}>🤪 짤방 처방:</strong> 상황에 맞는 유머러스한 이미지와 함께 
              웃음 치료를 받아보세요.
            </li>
            <li>
              <strong className={headingColor}>💸 시간 가치 계산:</strong> 팩트 취조실에서 낭비한 시간을 
              돈, 치킨, 에너지로 환산하여 생산성 동기를 부여합니다.
            </li>
            <li>
              <strong className={headingColor}>📱 모바일 최적화:</strong> 언제 어디서나 스마트폰으로 
              간편하게 이용할 수 있습니다.
            </li>
          </ul>
        </div>

        <div className="mt-12 space-y-6">
          <h3 className={`text-xl font-semibold ${subHeadingColor}`}>자주 묻는 질문 (FAQ)</h3>
          <div className="space-y-4">
            <div>
              <h4 className={`font-bold mb-2 ${headingColor}`}>Q: 긍정 교화소는 무료인가요?</h4>
              <p>A: 네! 완전 무료로 이용하실 수 있습니다. 광고 수익으로 서비스를 운영합니다.</p>
            </div>
            <div>
              <h4 className={`font-bold mb-2 ${headingColor}`}>Q: 제 개인정보는 안전한가요?</h4>
              <p>
                A: 우리는 어떠한 개인정보도 수집하거나 저장하지 않습니다. 
                입력하신 내용은 칭찬 생성 후 즉시 삭제됩니다.
              </p>
            </div>
            <div>
              <h4 className={`font-bold mb-2 ${headingColor}`}>Q: AI가 생성한 칭찬인가요?</h4>
              <p>
                A: 네, 첨단 AI 알고리즘이 사용자의 상황을 분석하여 맞춤형 칭찬을 생성합니다.
              </p>
            </div>
            <div>
              <h4 className={`font-bold mb-2 ${headingColor}`}>Q: 결과를 친구에게 공유할 수 있나요?</h4>
              <p>
                A: 물론입니다! 히어로 등록증을 이미지로 다운로드하거나 링크로 공유할 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className={`mt-12 pt-8 border-t ${borderColor} text-sm text-center opacity-60`}>
          <p>
            긍정 교화소는 여러분의 정신 건강과 행복을 응원합니다. 
            힘든 하루 끝에 작은 위로가 필요할 때, 언제든 다시 찾아와주세요.
          </p>
          <p className="mt-4">
            <a href="/about" className="text-sky-400 hover:underline mx-2">About</a>
            <a href="/privacy-policy" className="text-sky-400 hover:underline mx-2">Privacy Policy</a>
            <a href="/contact" className="text-sky-400 hover:underline mx-2">Contact</a>
          </p>
          <p className="mt-2">
            &copy; {new Date().getFullYear()} Praise Prison. All rights reserved.
          </p>
        </div>
      </article>
    </section>
  );
}
