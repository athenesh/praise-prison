export type CalculatorPersona = 'shark' | 'investor' | 'chicken';

export interface CalculationResult {
  persona: CalculatorPersona;
  cost: string; // Display string (e.g., "300,000원", "치킨 3마리")
  message: string;
  receiptItems: { name: string; value: string }[];
  totalLabel: string;
  explanation?: string; // Logic explanation
  timestamp: string;
}

export const CALCULATOR_CONFIG = {
  SHARK: {
    HOURLY_WAGE: 100000,
    INTEREST_RATE: 0.07, // S&P 500 conservative
    YEARS: 10,
  },
  CHICKEN: {
    MIN_WAGE: 9860, // 2024 KRW minimum wage
    CHICKEN_PRICE: 23000,
    COFFEE_PRICE: 4500,
    NETFLIX_PRICE: 17000, // Premium
    STOCK_PRICE: 10000, // Fractional stock unit
  },
  INVESTOR: {
    BASE_EFFICIENCY: 1.5,
  }
};

export const CALCULATOR_PERSONAS: { id: CalculatorPersona; name: string; icon: string; desc: string }[] = [
  { 
    id: 'shark', 
    name: '시간 사채업자', 
    icon: '💸', 
    desc: '30분 낭비? 미래의 1억을 버린 셈이다!' 
  },
  { 
    id: 'investor', 
    name: '행복 투자자', 
    icon: '📈', 
    desc: '멍때린 시간은 뇌세포 회복을 위한 투자입니다.' 
  },
  { 
    id: 'chicken', 
    name: '치킨 계산기', 
    icon: '🐔', 
    desc: '그 시간에 알바했으면 황금올리브가 몇 마리냐...' 
  },
];

function getRecoveryFactor(activity: string): number {
  const act = activity.toLowerCase();
  if (act.includes('잠') || act.includes('sleep') || act.includes('nap')) return 2.0;
  if (act.includes('운동') || act.includes('gym') || act.includes('run')) return 1.8;
  if (act.includes('멍') || act.includes('meditation')) return 1.2;
  return 1.5; // Default
}

export function calculateOpportunityCost(
  minutes: number, 
  activity: string, 
  persona: CalculatorPersona
): CalculationResult {
  const hours = minutes / 60;

  if (persona === 'shark') {
    const { HOURLY_WAGE, INTEREST_RATE, YEARS } = CALCULATOR_CONFIG.SHARK;
    const principal = Math.round(hours * HOURLY_WAGE);
    
    // Compound Interest Formula: A = P(1 + r)^t
    const futureValue = Math.round(principal * Math.pow((1 + INTEREST_RATE), YEARS));
    const interestEarned = futureValue - principal;

    return {
      persona: 'shark',
      cost: `-${principal.toLocaleString()}원`,
      message: `네가 '${activity}' 하며 날린 시간, S&P 500에 넣어뒀으면 10년 뒤 ${futureValue.toLocaleString()}원이다. 복리의 마법을 무시하지 마라!`,
      totalLabel: '삭제된 미래 자산',
      explanation: `시급 ${HOURLY_WAGE.toLocaleString()}원 기준, 연수익률 ${(INTEREST_RATE * 100)}%로 ${YEARS}년 복리 투자 시 가치`,
      timestamp: new Date().toLocaleString(),
      receiptItems: [
        { name: '기본 손실금', value: `-${principal.toLocaleString()}원` },
        { name: `복리 이자(${YEARS}년)`, value: `-${interestEarned.toLocaleString()}원` },
        { name: '기회비용 총액', value: `-${futureValue.toLocaleString()}원` },
      ]
    };
  } else if (persona === 'investor') {
    const factor = getRecoveryFactor(activity);
    const energyGained = Math.round(minutes * factor);
    
    return {
      persona: 'investor',
      cost: `+${energyGained} 에너지`,
      message: `'${activity}'... 훌륭한 선택이야! 회복 계수 ${factor}배가 적용되어 뇌 효율이 급상승했네.`,
      totalLabel: '획득한 잠재력',
      explanation: `활동 유형에 따른 회복 계수(${factor}x) 적용 결과`,
      timestamp: new Date().toLocaleString(),
      receiptItems: [
        { name: '기본 회복량', value: `+${minutes} pt` },
        { name: '효율 부스트', value: `x ${factor}` },
        { name: '창의력 충전', value: `+${energyGained} pt` },
      ]
    };
  } else { // chicken
    const { MIN_WAGE, CHICKEN_PRICE, COFFEE_PRICE, NETFLIX_PRICE } = CALCULATOR_CONFIG.CHICKEN;
    const earnedMoney = Math.round(hours * MIN_WAGE);
    
    const chickens = (earnedMoney / CHICKEN_PRICE).toFixed(1);
    const coffees = (earnedMoney / COFFEE_PRICE).toFixed(0);
    const netflix = (earnedMoney / NETFLIX_PRICE).toFixed(1);

    return {
      persona: 'chicken',
      cost: `황금올리브 ${chickens}마리`,
      message: `'${activity}' 할 시간에 알바했으면 치킨 ${chickens}마리, 넷플릭스 ${netflix}달 구독 가능했다...`,
      totalLabel: '날려먹은 기회',
      explanation: `2024년 최저시급(${MIN_WAGE.toLocaleString()}원) 및 실시간 물가 기준`,
      timestamp: new Date().toLocaleString(),
      receiptItems: [
        { name: '예상 알바비', value: `${earnedMoney.toLocaleString()}원` },
        { name: '치킨 환산', value: `${chickens}마리` },
        { name: '넷플릭스 환산', value: `${netflix}개월` },
      ]
    };
  }
}
