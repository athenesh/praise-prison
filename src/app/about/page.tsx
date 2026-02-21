export default function About() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-300 p-4 md:p-8">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-6">About Us - 긍정 교화소 소개</h1>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">우리의 미션</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            긍정 교화소는 현대인의 정신 건강과 자존감 향상을 위해 만들어진 <strong>디지털 웰빙 서비스</strong>입니다.
            우울, 자책, 번아웃 등 부정적인 감정을 겪는 사람들에게 유머와 긍정의 에너지를 전달하여,
            하루를 밝게 마무리할 수 있도록 돕는 것이 우리의 목표입니다.
          </p>
          <p className="text-base leading-relaxed">
            우리는 "칭찬"이 단순한 위로를 넘어, 실제로 사람의 마음을 치유하고 동기를 부여하는 
            강력한 도구라고 믿습니다. 심리학 연구에 따르면, 긍정적인 피드백은 자존감을 높이고 
            스트레스를 감소시키며, 전반적인 삶의 질을 향상시킵니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">왜 긍정 교화소인가?</h2>
          <p className="mb-4">
            많은 사람들이 일상에서 작은 실수나 좌절을 경험하며 스스로를 "죄인"처럼 느낍니다.
            "오늘도 아무것도 못했다", "또 실수했다", "나는 왜 이렇게 못할까" 같은 생각들이 
            마음을 무겁게 만듭니다.
          </p>
          <p className="mb-4">
            우리는 이러한 부정적 인식을 역전시켜, 당신의 상황을 <strong>"잠재력을 가진 히어로의 각성 과정"</strong>으로 
            재해석합니다. 모든 좌절은 성장의 기회이며, 모든 실수는 배움의 순간입니다.
          </p>
          <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700 my-6">
            <h3 className="text-xl font-bold text-sky-400 mb-4">긍정 교화소의 핵심 가치</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>✨ <strong>맞춤형 칭찬:</strong> AI가 개인의 상황을 분석하여 진심 어린 칭찬을 제공합니다</li>
              <li>🎭 <strong>다양한 페르소나:</strong> 취향에 맞는 교도관을 선택하여 색다른 경험을 즐기세요</li>
              <li>💪 <strong>자존감 향상:</strong> 과학적으로 입증된 긍정 심리학 기법을 활용합니다</li>
              <li>😄 <strong>유머와 공감:</strong> 무거운 마음을 가볍게 만드는 유머러스한 접근</li>
              <li>🌈 <strong>무료 접근성:</strong> 누구나 언제든지 무료로 이용할 수 있습니다</li>
              <li>🔒 <strong>프라이버시 보호:</strong> 개인정보를 수집하거나 저장하지 않습니다</li>
            </ul>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">우리 서비스</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
              <h3 className="text-xl font-bold text-sky-400 mb-3">⛓️ 긍정 교화소</h3>
              <p className="text-sm leading-relaxed mb-4">
                우울한 일상의 "죄"를 고백하면, AI 교도관이 당신만의 초능력을 발견하고
                공식 히어로 등록증을 발급해드립니다.
              </p>
              <ul className="text-sm space-y-1 text-zinc-400">
                <li>• 4가지 개성 넘치는 페르소나</li>
                <li>• AI 기반 맞춤형 칭찬 생성</li>
                <li>• 다운로드 가능한 히어로 등록증</li>
                <li>• 상황별 짤방 처방</li>
              </ul>
            </div>
            <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
              <h3 className="text-xl font-bold text-sky-400 mb-3">💸 팩트 취조실</h3>
              <p className="text-sm leading-relaxed mb-4">
                무의미하게 흘려보낸 시간의 가치를 돈, 치킨, 에너지로 환산하여
                생산성 향상에 동기를 부여합니다.
              </p>
              <ul className="text-sm space-y-1 text-zinc-400">
                <li>• 시간의 기회비용 계산</li>
                <li>• 3가지 심문관 스타일</li>
                <li>• 영수증 형태의 비주얼 리포트</li>
                <li>• 친구에게 팩트 폭격 공유하기</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">누가 사용하나요?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border border-zinc-700">
              <div className="text-4xl mb-3">🎓</div>
              <h4 className="font-bold text-zinc-200 mb-2 text-lg">학생 & 취준생</h4>
              <p className="text-sm leading-relaxed">
                시험 실패, 면접 탈락, 과제 스트레스 등 좌절감을 긍정으로 전환하고 
                다시 일어설 동기를 얻으세요. 공부와 취업 준비로 지친 당신을 응원합니다.
              </p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border border-zinc-700">
              <div className="text-4xl mb-3">💼</div>
              <h4 className="font-bold text-zinc-200 mb-2 text-lg">직장인</h4>
              <p className="text-sm leading-relaxed">
                업무 스트레스, 실수, 번아웃을 유머러스하게 해소하고 
                자존감을 회복하세요. 퇴근 후 하루를 긍정적으로 마무리하는 루틴을 만들어보세요.
              </p>
            </div>
            <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border border-zinc-700">
              <div className="text-4xl mb-3">🏠</div>
              <h4 className="font-bold text-zinc-200 mb-2 text-lg">일반인</h4>
              <p className="text-sm leading-relaxed">
                일상의 작은 좌절과 우울감을 털어내고 
                긍정적인 하루를 마무리하세요. 누구나 칭찬받을 자격이 있습니다!
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">우리의 철학</h2>
          <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
            <p className="text-base leading-relaxed mb-4">
              <strong className="text-sky-400">"모든 사람은 칭찬받을 가치가 있습니다."</strong>
            </p>
            <p className="mb-4">
              현대 사회는 성과와 효율을 강조하며, 실수나 실패에 대해 가혹합니다. 
              SNS는 다른 사람의 성공만을 보여주고, 우리는 끊임없이 자신을 비교하며 자책합니다.
            </p>
            <p className="mb-4">
              하지만 우리는 믿습니다. <strong>당신이 오늘 하루를 살아냈다는 것만으로도 충분히 대단하다는 것을.</strong>
              완벽하지 않아도 괜찮습니다. 실수해도 괜찮습니다. 때로는 아무것도 하지 않아도 괜찮습니다.
            </p>
            <p>
              긍정 교화소는 그런 당신에게 작은 위로와 큰 응원을 보냅니다. 
              당신은 이미 충분히 멋진 사람입니다. 🌟
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">팀 소개</h2>
          <p className="mb-4">
            긍정 교화소는 멘탈 헬스케어의 중요성을 깊이 공감하는 개발자, 디자이너, 
            심리학 전공자들이 모여 만든 프로젝트입니다. 우리 모두는 각자의 방식으로 
            우울과 좌절을 경험했고, 그 과정에서 "칭찬의 힘"을 발견했습니다.
          </p>
          <p className="mb-4">
            이 서비스는 2024년 해커톤에서 시작되었으며, 많은 사용자들의 긍정적인 피드백을 받아 
            지속적으로 발전하고 있습니다. 우리의 목표는 전 세계 사람들이 더 행복하고 
            자신감 넘치는 삶을 살 수 있도록 돕는 것입니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">미래 계획</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>🌍 <strong>다국어 지원:</strong> 영어, 일본어, 중국어 등 글로벌 서비스 확장</li>
            <li>🤖 <strong>AI 고도화:</strong> 더욱 정교하고 공감적인 칭찬 알고리즘 개발</li>
            <li>📱 <strong>모바일 앱:</strong> iOS 및 Android 네이티브 앱 출시</li>
            <li>🎨 <strong>커스터마이징:</strong> 사용자가 직접 페르소나를 만들 수 있는 기능</li>
            <li>👥 <strong>커뮤니티:</strong> 사용자들이 서로를 응원하는 플랫폼 구축</li>
            <li>📊 <strong>멘탈 트래커:</strong> 일일 감정 기록 및 긍정 지수 추적 기능</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">Contact & Support</h2>
          <p className="mb-4">
            문의사항, 피드백, 제안이 있으시면 언제든지 연락주세요. 
            우리는 사용자 여러분의 목소리에 귀 기울이고 있습니다.
          </p>
          <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
            <ul className="space-y-3">
              <li>
                <strong className="text-zinc-200">📧 General Inquiries:</strong>{' '}
                <a href="mailto:support@praiseprison.com" className="text-sky-400 hover:underline">
                  support@praiseprison.com
                </a>
              </li>
              <li>
                <strong className="text-zinc-200">💼 Business & Partnerships:</strong>{' '}
                <a href="mailto:business@praiseprison.com" className="text-sky-400 hover:underline">
                  business@praiseprison.com
                </a>
              </li>
              <li>
                <strong className="text-zinc-200">🐛 Bug Reports:</strong>{' '}
                <a href="mailto:bugs@praiseprison.com" className="text-sky-400 hover:underline">
                  bugs@praiseprison.com
                </a>
              </li>
              <li>
                <strong className="text-zinc-200">🌐 Website:</strong>{' '}
                <a href="/" className="text-sky-400 hover:underline">
                  praiseprison.com
                </a>
              </li>
            </ul>
            <p className="text-sm text-zinc-500 mt-4 italic">
              * 평일 기준 24-48시간 이내 답변드립니다.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">자주 묻는 질문 (FAQ)</h2>
          <div className="space-y-4">
            <div className="bg-zinc-800/50 p-4 rounded-lg">
              <h4 className="font-bold text-zinc-300 mb-2">Q: 긍정 교화소는 무료인가요?</h4>
              <p className="text-zinc-400">
                A: 네! 완전 무료로 이용하실 수 있습니다. 우리는 Google AdSense 광고 수익으로 서비스를 운영하며, 
                사용자에게 어떠한 비용도 청구하지 않습니다.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg">
              <h4 className="font-bold text-zinc-300 mb-2">Q: 제 개인정보는 안전한가요?</h4>
              <p className="text-zinc-400">
                A: 절대적으로 안전합니다! 우리는 어떠한 개인정보도 수집하거나 저장하지 않습니다. 
                입력하신 고백 내용은 칭찬 생성 후 즉시 삭제되며, 서버에 남지 않습니다. 
                자세한 내용은{' '}
                <a href="/privacy-policy" className="text-sky-400 hover:underline">
                  개인정보 처리방침
                </a>
                을 참조하세요.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg">
              <h4 className="font-bold text-zinc-300 mb-2">Q: AI가 생성한 칭찬인가요?</h4>
              <p className="text-zinc-400">
                A: 네, 첨단 자연어 처리(NLP) AI 알고리즘이 사용자의 상황을 분석하여 
                맞춤형 칭찬을 생성합니다. 단순한 랜덤 메시지가 아닌, 진심 어린 위로를 제공하기 위해 
                지속적으로 알고리즘을 개선하고 있습니다.
              </p>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg">
              <h4 className="font-bold text-zinc-300 mb-2">Q: 결과를 친구에게 공유할 수 있나요?</h4>
              <p className="text-zinc-400">
                A: 물론입니다! 히어로 등록증을 이미지로 다운로드하거나, 
                링크를 복사하여 SNS나 메신저로 친구들에게 공유할 수 있습니다. 
                긍정적인 에너지를 함께 나누세요! 🌟
              </p>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg">
              <h4 className="font-bold text-zinc-300 mb-2">Q: 모바일에서도 사용할 수 있나요?</h4>
              <p className="text-zinc-400">
                A: 네! 긍정 교화소는 반응형 디자인으로 제작되어 
                스마트폰, 태블릿, 데스크톱 모든 기기에서 최적화된 경험을 제공합니다.
              </p>
            </div>
          </div>
        </section>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
          <p className="text-zinc-400 mb-6 text-lg">
            긍정 교화소는 여러분의 정신 건강과 행복을 진심으로 응원합니다. 💙
          </p>
          <p className="text-zinc-500 mb-6">
            힘든 하루 끝에 작은 위로가 필요할 때, 언제든 다시 찾아와주세요.
          </p>
          <div className="space-y-4">
            <a 
              href="/" 
              className="inline-block bg-sky-500 text-white px-8 py-4 rounded-lg hover:bg-sky-400 transition-colors font-bold text-lg shadow-lg"
            >
              ← 지금 바로 칭찬받으러 가기
            </a>
            <p className="text-sm text-zinc-600">
              © {new Date().getFullYear()} Praise Prison. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
