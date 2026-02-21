export default function Contact() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-300 p-4 md:p-8">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-6">Contact Us</h1>

        <section className="mb-8">
          <p className="text-base md:text-lg leading-relaxed">
            긍정 교화소에 관심 가져주셔서 감사합니다! 
            문의사항, 피드백, 제안사항, 버그 리포트 등 어떤 내용이든 환영합니다. 
            아래 연락처를 통해 언제든지 편하게 연락주세요.
          </p>
        </section>

        <section className="mb-8 bg-zinc-800 p-6 md:p-8 rounded-xl border border-zinc-700">
          <h2 className="text-2xl font-bold text-zinc-200 mb-6">연락처</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-sky-400 mb-2 flex items-center gap-2">
                <span className="text-2xl">📧</span> General Inquiries
              </h3>
              <p className="mb-2">
                <a 
                  href="mailto:usallgloballlc@gmail.com" 
                  className="text-sky-400 hover:underline text-lg md:text-xl font-semibold"
                >
                  usallgloballlc@gmail.com
                </a>
              </p>
              <p className="text-sm text-zinc-400">
                일반 문의, 사용 방법, 피드백, 기능 제안 등
              </p>
            </div>

            <div className="border-t border-zinc-700 pt-6">
              <h3 className="text-lg font-bold text-sky-400 mb-2 flex items-center gap-2">
                <span className="text-2xl">💼</span> Business Inquiries
              </h3>
              <p className="mb-2">
                <a 
                  href="mailto:usallgloballlc@gmail.com" 
                  className="text-sky-400 hover:underline text-lg md:text-xl font-semibold"
                >
                  usallgloballlc@gmail.com
                </a>
              </p>
              <p className="text-sm text-zinc-400">
                파트너십, 광고 협업, 라이선싱, B2B 제안 등
              </p>
            </div>

            <div className="border-t border-zinc-700 pt-6">
              <h3 className="text-lg font-bold text-sky-400 mb-2 flex items-center gap-2">
                <span className="text-2xl">🐛</span> Bug Reports & Technical Issues
              </h3>
              <p className="mb-2">
                <a 
                  href="mailto:usallgloballlc@gmail.com" 
                  className="text-sky-400 hover:underline text-lg md:text-xl font-semibold"
                >
                  usallgloballlc@gmail.com
                </a>
              </p>
              <p className="text-sm text-zinc-400">
                버그 발견, 오류 보고, 기술적 문제 해결 요청
              </p>
              <div className="mt-3 bg-zinc-900/50 p-3 rounded text-xs text-zinc-500">
                <p className="font-semibold mb-1">💡 버그 리포트 작성 팁:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>사용하신 브라우저 및 기기 정보 (예: Chrome 119, iPhone 14)</li>
                  <li>발생한 문제를 재현할 수 있는 단계</li>
                  <li>스크린샷 또는 화면 녹화 (가능하다면)</li>
                  <li>오류 메시지 전문 (있다면)</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-zinc-700 pt-6">
              <h3 className="text-lg font-bold text-sky-400 mb-2 flex items-center gap-2">
                <span className="text-2xl">⏰</span> Response Time
              </h3>
              <p className="text-zinc-300">
                평일 기준 <strong className="text-white">24-48시간 이내</strong> 답변드립니다.
              </p>
              <p className="text-sm text-zinc-500 mt-2">
                * 주말 및 공휴일에는 답변이 지연될 수 있습니다.
              </p>
            </div>

            <div className="border-t border-zinc-700 pt-6">
              <h3 className="text-lg font-bold text-sky-400 mb-2 flex items-center gap-2">
                <span className="text-2xl">🌐</span> Website
              </h3>
              <p>
                <a href="https://praise-prison.vercel.app" className="text-sky-400 hover:underline text-lg font-semibold">
                  praise-prison.vercel.app
                </a>
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">자주 묻는 질문 (FAQ)</h2>
          <p className="mb-4 text-zinc-400">
            문의하시기 전에 아래 FAQ를 먼저 확인해주세요. 많은 분들이 궁금해하시는 내용을 정리했습니다.
          </p>
          <div className="space-y-4">
            <div className="bg-zinc-800/50 p-5 rounded-lg border border-zinc-700/50">
              <h3 className="text-lg font-bold text-zinc-300 mb-2">Q: 개인정보는 안전한가요?</h3>
              <p className="text-zinc-400 leading-relaxed">
                A: 네! 우리는 어떠한 개인정보도 수집하거나 저장하지 않습니다. 
                입력하신 고백 내용은 칭찬 생성을 위해 일시적으로 사용된 후 즉시 삭제됩니다.
                서버에 데이터가 남지 않으므로 안심하고 이용하실 수 있습니다. 
                자세한 내용은{' '}
                <a href="/privacy-policy" className="text-sky-400 hover:underline">
                  개인정보 처리방침
                </a>
                을 참조하세요.
              </p>
            </div>
            
            <div className="bg-zinc-800/50 p-5 rounded-lg border border-zinc-700/50">
              <h3 className="text-lg font-bold text-zinc-300 mb-2">Q: 서비스는 무료인가요?</h3>
              <p className="text-zinc-400 leading-relaxed">
                A: 네! 긍정 교화소는 <strong className="text-white">완전 무료</strong> 서비스입니다. 
                우리는 Google AdSense 광고 수익으로 운영되며, 사용자에게 어떠한 비용도 청구하지 않습니다.
                앞으로도 무료로 제공할 예정입니다.
              </p>
            </div>
            
            <div className="bg-zinc-800/50 p-5 rounded-lg border border-zinc-700/50">
              <h3 className="text-lg font-bold text-zinc-300 mb-2">Q: 버그를 발견했어요!</h3>
              <p className="text-zinc-400 leading-relaxed">
                A: 빠른 대응을 위해{' '}
                <a href="mailto:usallgloballlc@gmail.com" className="text-sky-400 hover:underline">
                  usallgloballlc@gmail.com
                </a>
                으로 상세한 내용과 함께 스크린샷을 보내주시면 감사하겠습니다. 
                사용하신 브라우저 및 기기 정보도 함께 알려주시면 문제 해결에 큰 도움이 됩니다.
              </p>
            </div>
            
            <div className="bg-zinc-800/50 p-5 rounded-lg border border-zinc-700/50">
              <h3 className="text-lg font-bold text-zinc-300 mb-2">Q: 새로운 기능을 제안하고 싶어요!</h3>
              <p className="text-zinc-400 leading-relaxed">
                A: 훌륭합니다! 사용자 피드백은 서비스 개선에 가장 중요한 요소입니다.{' '}
                <a href="mailto:usallgloballlc@gmail.com" className="text-sky-400 hover:underline">
                  usallgloballlc@gmail.com
                </a>
                으로 자유롭게 의견을 보내주세요. 
                모든 제안은 검토 후 우선순위에 따라 개발 계획에 반영됩니다.
              </p>
            </div>
            
            <div className="bg-zinc-800/50 p-5 rounded-lg border border-zinc-700/50">
              <h3 className="text-lg font-bold text-zinc-300 mb-2">Q: 광고 협업을 제안하고 싶어요.</h3>
              <p className="text-zinc-400 leading-relaxed">
                A: 감사합니다! 광고, 파트너십, 콜라보레이션 등 비즈니스 관련 문의는{' '}
                <a href="mailto:usallgloballlc@gmail.com" className="text-sky-400 hover:underline">
                  usallgloballlc@gmail.com
                </a>
                으로 연락주시기 바랍니다. 
                제안서와 함께 구체적인 내용을 보내주시면 검토 후 답변드리겠습니다.
              </p>
            </div>
            
            <div className="bg-zinc-800/50 p-5 rounded-lg border border-zinc-700/50">
              <h3 className="text-lg font-bold text-zinc-300 mb-2">Q: 다른 언어도 지원하나요?</h3>
              <p className="text-zinc-400 leading-relaxed">
                A: 현재는 한국어만 지원하지만, 영어, 일본어, 중국어 등 
                다국어 지원을 준비 중입니다. 관심 있으신 언어가 있다면 알려주세요!
              </p>
            </div>
            
            <div className="bg-zinc-800/50 p-5 rounded-lg border border-zinc-700/50">
              <h3 className="text-lg font-bold text-zinc-300 mb-2">Q: 모바일 앱은 없나요?</h3>
              <p className="text-zinc-400 leading-relaxed">
                A: 현재는 웹 버전만 제공하고 있지만, 반응형 디자인으로 제작되어 
                모바일 브라우저에서도 완벽하게 작동합니다. 
                네이티브 앱 출시는 향후 계획에 포함되어 있습니다. 출시 소식을 받고 싶으시다면 
                이메일로 알려주세요!
              </p>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">피드백 & 리뷰</h2>
          <div className="bg-gradient-to-br from-zinc-800 to-zinc-900 p-6 rounded-lg border border-zinc-700">
            <p className="mb-4 leading-relaxed">
              긍정 교화소를 사용해보셨나요? 여러분의 솔직한 경험과 의견을 듣고 싶습니다! 
              좋았던 점, 개선이 필요한 점, 아쉬운 부분 등 어떤 피드백이든 환영합니다.
            </p>
            <p className="mb-4 text-zinc-400 text-sm">
              특히 다음과 같은 내용이 도움이 됩니다:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-sm text-zinc-400 mb-4">
              <li>서비스를 사용하게 된 계기</li>
              <li>어떤 상황에서 가장 유용했는지</li>
              <li>가장 마음에 들었던 기능</li>
              <li>추가되었으면 하는 기능</li>
              <li>개선이 필요한 부분</li>
            </ul>
            <div className="text-center mt-6">
              <a 
                href="mailto:usallgloballlc@gmail.com?subject=긍정%20교화소%20피드백"
                className="inline-block bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-400 transition-colors font-semibold"
              >
                📝 피드백 보내기
              </a>
            </div>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">소셜 미디어 (Coming Soon)</h2>
          <p className="text-zinc-400 mb-4">
            긍정 교화소의 최신 소식, 업데이트, 재미있는 콘텐츠를 소셜 미디어에서 만나보세요!
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-zinc-800/50 p-4 rounded-lg text-center border border-zinc-700/50">
              <div className="text-3xl mb-2">📷</div>
              <p className="text-sm text-zinc-400">Instagram</p>
              <p className="text-xs text-zinc-600 mt-1">Coming Soon</p>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg text-center border border-zinc-700/50">
              <div className="text-3xl mb-2">🐦</div>
              <p className="text-sm text-zinc-400">Twitter</p>
              <p className="text-xs text-zinc-600 mt-1">Coming Soon</p>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg text-center border border-zinc-700/50">
              <div className="text-3xl mb-2">📘</div>
              <p className="text-sm text-zinc-400">Facebook</p>
              <p className="text-xs text-zinc-600 mt-1">Coming Soon</p>
            </div>
            <div className="bg-zinc-800/50 p-4 rounded-lg text-center border border-zinc-700/50">
              <div className="text-3xl mb-2">💬</div>
              <p className="text-sm text-zinc-400">Discord</p>
              <p className="text-xs text-zinc-600 mt-1">Coming Soon</p>
            </div>
          </div>
        </section>

        <section className="mb-8 bg-sky-900/20 border border-sky-700/30 p-6 rounded-lg">
          <h2 className="text-2xl font-bold text-sky-300 mb-3">💙 Thank You!</h2>
          <p className="leading-relaxed">
            긍정 교화소를 이용해주시고, 이 페이지를 찾아와주셔서 진심으로 감사합니다. 
            여러분의 관심과 피드백 덕분에 우리는 더 나은 서비스를 만들어갈 수 있습니다. 
            언제나 여러분의 정신 건강과 행복을 응원합니다! 🌟
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center">
          <a 
            href="/" 
            className="inline-block bg-sky-500 text-white px-8 py-4 rounded-lg hover:bg-sky-400 transition-colors font-bold text-lg shadow-lg mb-6"
          >
            ← 홈으로 돌아가기
          </a>
          <p className="text-sm text-zinc-600">
            © {new Date().getFullYear()} 긍정 교화소 (Praise Prison). All rights reserved.
          </p>
        </div>
      </div>
    </main>
  );
}
