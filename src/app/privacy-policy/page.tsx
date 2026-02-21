export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-zinc-900 text-zinc-300 p-4 md:p-8">
      <div className="max-w-4xl mx-auto prose prose-invert">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-6">개인정보 처리방침</h1>
        
        <p className="text-zinc-400 mb-8">
          최종 업데이트: {new Date().toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">1. 수집하는 정보</h2>
          <p className="mb-4">
            긍정 교화소("본 서비스", "우리")는 사용자의 개인정보를 최소한으로 수집합니다. 
            본 서비스는 회원가입이 필요 없는 무료 웹 서비스로, 사용자가 입력한 텍스트는 
            칭찬 생성 목적으로만 일시적으로 사용되며 서버에 저장되지 않습니다.
          </p>
          <h3 className="text-xl font-semibold text-zinc-300 mb-3">자동으로 수집되는 정보:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>브라우저 유형 및 버전</li>
            <li>IP 주소 (익명화 처리)</li>
            <li>방문 시간 및 날짜</li>
            <li>페이지 조회 수 및 클릭 패턴</li>
            <li>디바이스 정보 (모바일, 데스크톱 등)</li>
            <li>쿠키 및 유사 추적 기술을 통한 사용 패턴</li>
          </ul>
          <p className="text-sm text-zinc-500 italic">
            * 사용자가 서비스 내에서 입력한 고백 내용이나 텍스트는 어떠한 형태로도 저장되지 않으며, 
            칭찬 생성 후 즉시 삭제됩니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">2. Google AdSense 및 쿠키 사용</h2>
          <p className="mb-4">
            본 웹사이트는 <strong>Google AdSense</strong>를 사용하여 맞춤형 광고를 게재합니다. 
            Google은 쿠키(Cookie)를 사용하여 사용자가 이전에 방문한 웹사이트 및 관심사를 기반으로 
            관련성 높은 광고를 표시합니다.
          </p>
          <h3 className="text-xl font-semibold text-zinc-300 mb-3">Google의 광고 쿠키:</h3>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Google은 DoubleClick 쿠키를 사용하여 사용자의 온라인 활동을 추적할 수 있습니다.</li>
            <li>사용자는 Google 광고 설정 페이지에서 맞춤 광고를 비활성화할 수 있습니다.</li>
            <li>제3자 공급업체(광고 네트워크)도 쿠키를 사용할 수 있습니다.</li>
          </ul>
          <p className="mb-4">
            Google의 광고 쿠키 사용 및 개인정보 보호에 대해 자세히 알아보려면 다음 링크를 참조하세요:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>
              <a 
                href="https://policies.google.com/technologies/ads" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
                Google 광고 정책
              </a>
            </li>
            <li>
              <a 
                href="https://policies.google.com/privacy" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
                Google 개인정보 보호정책
              </a>
            </li>
            <li>
              <a 
                href="https://adssettings.google.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
                Google 광고 설정 (맞춤 광고 해제)
              </a>
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">3. 정보 사용 목적</h2>
          <p className="mb-4">수집된 정보는 다음 목적으로만 사용됩니다:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>서비스 제공 및 개선:</strong> 사용자 경험을 최적화하고 서비스 품질을 향상시킵니다.</li>
            <li><strong>광고 게재:</strong> Google AdSense를 통해 관련성 높은 광고를 표시합니다.</li>
            <li><strong>성과 분석:</strong> 트래픽 및 사용 패턴을 분석하여 서비스를 개선합니다.</li>
            <li><strong>법적 의무 준수:</strong> 법률 및 규정을 준수하기 위해 필요한 경우에만 사용됩니다.</li>
            <li><strong>보안 유지:</strong> 사기, 남용 및 기술적 문제를 방지합니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">4. 정보 보호 및 보안</h2>
          <p className="mb-4">
            본 서비스는 사용자의 정보를 보호하기 위해 다음과 같은 보안 조치를 취하고 있습니다:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>HTTPS 암호화를 통한 안전한 데이터 전송</li>
            <li>최소한의 데이터 수집 원칙 준수</li>
            <li>정기적인 보안 업데이트 및 모니터링</li>
            <li>제3자 접근 제한 및 관리</li>
          </ul>
          <p className="text-sm text-zinc-500 italic">
            * 그러나 인터넷을 통한 데이터 전송이나 저장 방법은 100% 안전할 수 없음을 유의해 주시기 바랍니다. 
            우리는 상업적으로 합리적인 수단을 사용하여 개인정보를 보호하지만, 절대적인 보안을 보장할 수는 없습니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">5. 제3자 서비스 및 링크</h2>
          <p className="mb-4">
            본 웹사이트는 다음과 같은 제3자 서비스를 사용합니다:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li><strong>Google AdSense:</strong> 광고 게재</li>
            <li><strong>Vercel:</strong> 웹 호스팅</li>
            <li><strong>외부 링크:</strong> 본 사이트는 외부 웹사이트로 연결되는 링크를 포함할 수 있습니다. 
            우리는 외부 사이트의 개인정보 보호 관행에 대해 책임지지 않습니다.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">6. 아동의 개인정보 보호</h2>
          <p className="mb-4">
            본 서비스는 만 13세 미만 아동을 대상으로 하지 않으며, 고의로 아동의 개인정보를 수집하지 않습니다. 
            만약 부모님이나 보호자께서 자녀가 동의 없이 개인정보를 제공했다고 판단되시면 즉시 연락 주시기 바랍니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">7. 쿠키 관리 및 선택권</h2>
          <p className="mb-4">
            사용자는 브라우저 설정을 통해 쿠키를 관리하고 제어할 수 있습니다:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>대부분의 웹 브라우저는 쿠키를 자동으로 수락하지만, 설정을 변경하여 쿠키를 거부하거나 삭제할 수 있습니다.</li>
            <li>쿠키를 비활성화하면 일부 서비스 기능이 제한될 수 있습니다.</li>
            <li>Google 맞춤 광고 해제: <a href="https://adssettings.google.com/" target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Google 광고 설정</a></li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">8. 개인정보 처리방침 변경</h2>
          <p className="mb-4">
            본 개인정보 처리방침은 관련 법령 및 서비스 변경에 따라 수정될 수 있습니다. 
            중요한 변경사항이 있을 경우, 본 페이지 상단의 "최종 업데이트" 날짜를 갱신하여 공지합니다. 
            정기적으로 본 페이지를 확인하시어 최신 정보를 확인해 주시기 바랍니다.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">9. 연락처</h2>
          <p className="mb-4">
            개인정보 처리방침에 대한 질문, 우려사항, 또는 요청사항이 있으시면 다음으로 연락 주시기 바랍니다:
          </p>
          <div className="bg-zinc-800 p-6 rounded-lg border border-zinc-700">
            <p className="mb-2">
              <strong className="text-zinc-200">서비스 명:</strong> 긍정 교화소 (Praise Prison)
            </p>
            <p className="mb-2">
              <strong className="text-zinc-200">이메일:</strong>{' '}
              <a href="mailto:usallgloballlc@gmail.com" className="text-sky-400 hover:underline">
                usallgloballlc@gmail.com
              </a>
            </p>
            <p className="mb-2">
              <strong className="text-zinc-200">웹사이트:</strong>{' '}
              <a href="https://praise-prison.vercel.app" className="text-sky-400 hover:underline">
                praise-prison.vercel.app
              </a>
            </p>
            <p className="text-sm text-zinc-500 mt-4">
              * 이메일 문의 시 평일 기준 24-48시간 이내 답변드립니다.
            </p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold text-zinc-200 mb-4">10. 사용자의 권리</h2>
          <p className="mb-4">
            관련 법령에 따라 사용자는 다음과 같은 권리를 가집니다:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>접근권:</strong> 본 서비스가 보유한 개인정보에 대한 접근을 요청할 수 있습니다.</li>
            <li><strong>수정권:</strong> 부정확하거나 불완전한 정보의 수정을 요청할 수 있습니다.</li>
            <li><strong>삭제권:</strong> 특정 상황에서 개인정보 삭제를 요청할 수 있습니다.</li>
            <li><strong>처리 제한권:</strong> 개인정보 처리의 제한을 요청할 수 있습니다.</li>
            <li><strong>반대권:</strong> 특정 처리 활동에 반대할 수 있습니다.</li>
          </ul>
          <p className="mt-4 text-sm text-zinc-500">
            * 단, 본 서비스는 사용자가 입력한 텍스트를 저장하지 않으므로, 
            실제로 수집되는 개인정보는 Google AdSense 및 호스팅 서비스에서 자동으로 수집하는 
            최소한의 기술적 데이터에 한정됩니다.
          </p>
        </section>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-center text-zinc-500 mb-4">
            본 개인정보 처리방침은 대한민국 법률 및 EU GDPR을 준수합니다.
          </p>
          <div className="text-center">
            <a href="/" className="inline-block bg-sky-500 text-white px-6 py-3 rounded-lg hover:bg-sky-400 transition-colors font-semibold">
              ← 홈으로 돌아가기
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
