import { budgets, giftStyles, recipients } from './giftData.js'
import { assetUrl } from '../utils/assetUrl.js'

const pricesByBudget = [
  [18000, 23000, 29000],
  [32000, 39000, 48000],
  [58000, 69000, 89000],
  [110000, 120000, 139000],
]

// Each style uses images that visibly match the product and its description.
const productTypesByStyle = {
  practical: [
    {
      image: '/images/style-practical.png',
      names: ['미니 노트·텀블러 세트', '노트·펜 실용 기프트', '프리미엄 플래너·텀블러 세트', '시그니처 오피스 기프트 세트'],
      description: '노트와 텀블러를 함께 챙겨 일상과 출근길에 유용하게 사용할 수 있어요.',
    },
    {
      image: '/images/result-handcream.png',
      names: ['데일리 핸드크림 세트', '핸드케어 선물 세트', '프리미엄 핸드케어 박스', '럭셔리 셀프 케어 컬렉션'],
      description: '건조한 손을 자주 보살필 수 있도록 실용적인 핸드케어 제품을 골랐어요.',
    },
    {
      image: '/images/result-lamp.png',
      names: ['미니 테이블 조명', '감성 데스크 조명', '원목 무드 조명', '디자이너 데스크 조명'],
      description: '책상이나 침대 옆에 두고 오래 사용할 수 있는 조명 선물이에요.',
    },
  ],
  emotional: [
    {
      image: '/images/style-emotional.png',
      names: ['티·손편지 기프트', '감성 티타임 세트', '프리미엄 티·레터 세트', '시그니처 티타임 기프트 박스'],
      description: '차와 손편지를 곁들여 천천히 마음을 전할 수 있는 선물이에요.',
    },
    {
      image: '/images/result-flower.png',
      names: ['계절 꽃다발', '로맨틱 꽃다발', '프리미엄 꽃다발', '시그니처 플라워 박스'],
      description: '꽃으로 축하와 고마운 마음을 따뜻하게 표현해 보세요.',
    },
    {
      image: '/images/message-design-1.png',
      names: ['메시지 카드 세트', '감성 카드 기프트', '고급 카드·봉투 세트', '프리미엄 레터링 카드 컬렉션'],
      description: '직접 쓴 문장을 오래 간직할 수 있도록 카드와 봉투를 준비했어요.',
    },
  ],
  cute: [
    {
      image: '/images/style-cute.png',
      names: ['미니 토끼 인형 세트', '핑크 리본 토끼 인형', '포근한 토끼 인형 기프트', '시그니처 토끼 인형 박스'],
      description: '핑크 리본을 단 토끼 인형으로 귀엽고 포근한 기분을 전해요.',
    },
    {
      image: '/images/style-cute.png',
      names: ['토끼 인형 미니 박스', '토끼 인형과 선물 상자', '프리미엄 토끼 인형 박스', '커스텀 토끼 인형 컬렉션'],
      description: '선물 상자에서 토끼 인형이 반겨주는 사랑스러운 구성이에요.',
    },
    {
      image: '/images/style-cute.png',
      names: ['리본 토끼 선물 상자', '토끼 인형 기프트 박스', '플라워 토끼 인형 박스', '시그니처 플러시 기프트 박스'],
      description: '부드러운 인형과 예쁜 상자를 함께 전하는 귀여운 선물이에요.',
    },
  ],
  luxury: [
    {
      image: '/images/style-luxury.png',
      names: ['미니 향수 기프트 세트', '프리미엄 향수 세트', '럭셔리 향수 컬렉션', '시그니처 퍼퓸 기프트 박스'],
      description: '향수와 고급스러운 패키지를 함께 담은 특별한 선물이에요.',
    },
    {
      image: '/images/result-handcream.png',
      names: ['핸드크림 기프트 박스', '프리미엄 핸드케어 세트', '럭셔리 핸드케어 컬렉션', '시그니처 뷰티 기프트 세트'],
      description: '정성스러운 패키지에 담긴 고급 핸드케어 제품으로 일상에 여유를 더해요.',
    },
    {
      image: '/images/result-flower.png',
      names: ['로즈 기프트 부케', '프리미엄 플라워 부케', '럭셔리 플라워 컬렉션', '시그니처 로즈 박스'],
      description: '풍성한 꽃과 세심한 포장으로 오래 기억될 순간을 선물해요.',
    },
  ],
}

const recipientLabels = {
  love: '연인에게 어울리는',
  friend: '친구에게 어울리는',
  family: '가족에게 전하기 좋은',
  work: '직장 동료에게 부담 없는',
}

function getProductRecommendations({ budget, giftStyle, recipient, occasion }) {
  const foundBudget = budgets.indexOf(budget)
  const budgetIndex = foundBudget >= 0 ? foundBudget : 0
  const selectedStyle = giftStyles.some((item) => item.id === giftStyle) ? giftStyle : 'practical'
  const recipientIndex = Math.max(0, recipients.findIndex((item) => item.id === recipient))
  const recipientLabel = recipientLabels[recipient] ?? '마음을 전하기 좋은'
  const productTypes = productTypesByStyle[selectedStyle] ?? productTypesByStyle.practical

  return productTypes.map((_, index) => {
    const productType = productTypes[(index + recipientIndex) % productTypes.length]
    const occasionText = occasion ? `${occasion} 선물로 추천해요.` : '특별한 선물로 잘 어울려요.'

    return {
      name: `${String(index + 1).padStart(2, '0')}. ${recipientLabel} ${productType.names[budgetIndex]}`,
      price: `${pricesByBudget[budgetIndex][index].toLocaleString('ko-KR')}원`,
      image: assetUrl(productType.image),
      alt: productType.names[budgetIndex],
      description: `${occasionText} ${productType.description}`,
    }
  })
}

export default getProductRecommendations
