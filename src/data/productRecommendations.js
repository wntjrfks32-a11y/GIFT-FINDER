import { budgets, giftStyles, recipients } from './giftData.js'
import { assetUrl } from '../utils/assetUrl.js'

const pricesByBudget = [
  [18000, 25000, 29000],
  [32000, 39000, 48000],
  [58000, 69000, 89000],
  [110000, 120000, 139000],
]

const productsByStyle = {
  practical: [
    { name: '데일리 핸드케어 세트', image: '/images/result-handcream.png', description: '매일 편하게 사용해 실용성이 높아요.' },
    { name: '보온 텀블러 선물 세트', image: '/images/style-practical.png', description: '출근과 외출 때 유용하게 쓸 수 있어요.' },
    { name: '책상 위 무드 조명', image: '/images/result-lamp.png', description: '집과 사무실 어디서나 활용하기 좋아요.' },
    { name: '향기 케어 기프트 박스', image: '/images/material-box.png', description: '일상에서 부담 없이 즐길 수 있는 구성이에요.' },
  ],
  emotional: [
    { name: '마음을 담은 꽃다발', image: '/images/result-flower.png', description: '말로 다 전하기 어려운 마음을 표현해요.' },
    { name: '손글씨 메시지 카드 세트', image: '/images/message-design-1.png', description: '직접 쓴 한마디가 오래 기억에 남아요.' },
    { name: '기념일 플라워 박스', image: '/images/material-flower.png', description: '특별한 순간을 더 따뜻하게 만들어줘요.' },
    { name: '감성 홈 프래그런스', image: '/images/style-emotional.png', description: '향과 분위기로 편안한 시간을 선물해요.' },
  ],
  cute: [
    { name: '미니 캐릭터 선물 세트', image: '/images/style-cute.png', description: '귀여운 디자인으로 받는 순간 웃음을 줘요.' },
    { name: '꽃과 디저트 선물 박스', image: '/images/result-flower.png', description: '달콤한 간식과 꽃을 함께 전할 수 있어요.' },
    { name: '작은 인형 플라워 바스켓', image: '/images/material-flower.png', description: '책상이나 침대 옆에 두기 좋은 선물이에요.' },
    { name: '파스텔 문구 꾸러미', image: '/images/message-design-3.png', description: '아기자기한 소품을 좋아하는 분께 추천해요.' },
  ],
  luxury: [
    { name: '프리미엄 향수 기프트', image: '/images/style-luxury.png', description: '고급스러운 향으로 특별한 인상을 남겨요.' },
    { name: '시그니처 플라워 박스', image: '/images/result-flower.png', description: '풍성한 꽃과 정성스러운 포장이 돋보여요.' },
    { name: '디자인 무드 조명', image: '/images/result-lamp.png', description: '공간에 품격을 더하는 오래 쓰는 선물이에요.' },
    { name: '프리미엄 셀프 케어 박스', image: '/images/style-practical.png', description: '엄선한 구성으로 여유로운 휴식을 선물해요.' },
  ],
}

const recipientLabels = {
  love: '연인을 위한',
  friend: '친구에게 잘 어울리는',
  family: '가족에게 전하기 좋은',
  work: '직장 동료에게 부담 없는',
}

function formatPrice(price) {
  return `${price.toLocaleString('ko-KR')}원`
}

function getProductRecommendations({ budget, giftStyle, recipient, occasion }) {
  const budgetIndex = Math.max(0, budgets.indexOf(budget))
  const selectedStyle = giftStyles.some((item) => item.id === giftStyle) ? giftStyle : 'practical'
  const recipientIndex = Math.max(0, recipients.findIndex((item) => item.id === recipient))
  const recipientLabel = recipientLabels[recipient] ?? '마음을 전하기 좋은'
  const candidates = productsByStyle[selectedStyle]

  return Array.from({ length: 3 }, (_, index) => {
    const productIndex = (recipientIndex + index) % candidates.length
    const product = candidates[productIndex]
    const price = pricesByBudget[budgetIndex][index]
    const occasionText = occasion ? `${occasion} 선물로 추천해요.` : '특별한 선물로 잘 어울려요.'

    return {
      ...product,
      name: `${String(index + 1).padStart(2, '0')}. ${recipientLabel} ${product.name}`,
      price: formatPrice(price),
      image: assetUrl(product.image),
      alt: product.name,
      description: `${occasionText} ${product.description}`,
    }
  })
}

export default getProductRecommendations
