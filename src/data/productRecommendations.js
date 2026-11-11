import { budgets, giftStyles } from './giftData.js'
import { assetUrl } from '../utils/assetUrl.js'

const productsByBudget = {
  '3만원 이하': [
    { amount: 18000, label: '실속형' },
    { amount: 23000, label: '기본형' },
    { amount: 29000, label: '구성형' },
  ],
  '3~5만원': [
    { amount: 32000, label: '실속형' },
    { amount: 39000, label: '기본형' },
    { amount: 48000, label: '구성형' },
  ],
  '5~10만원': [
    { amount: 58000, label: '실속형' },
    { amount: 69000, label: '기본형' },
    { amount: 89000, label: '구성형' },
  ],
  '10만원 이상': [
    { amount: 110000, label: '실속형' },
    { amount: 120000, label: '기본형' },
    { amount: 139000, label: '프리미엄' },
  ],
}

// Product names and photos are paired by what is actually visible in each image.
const catalogs = {
  practical: [
    {
      image: '/images/style-practical.png',
      alt: '노트와 펜, 텀블러가 담긴 선물 세트',
      name: '노트·텀블러 기프트 세트',
      description: '노트와 펜, 텀블러를 한 번에 챙길 수 있는 데일리 세트예요.',
    },
    {
      image: '/images/result-handcream.png',
      alt: '핸드크림이 담긴 선물 세트',
      name: '핸드크림 케어 세트',
      description: '매일 손을 촉촉하게 관리할 수 있는 핸드크림 세트예요.',
    },
    {
      image: '/images/result-lamp.png',
      alt: '상자와 함께 놓인 테이블 조명',
      name: '테이블 무드 조명',
      description: '책상이나 침대 옆에 두고 사용할 수 있는 무드 조명이에요.',
    },
  ],
  emotional: [
    {
      image: '/images/style-emotional.png',
      alt: '손편지와 차, 꽃 장식',
      name: '티타임 손편지 세트',
      description: '차와 손편지를 함께 전할 수 있도록 구성한 감성 선물이에요.',
    },
    {
      image: '/images/result-flower.png',
      alt: '분홍빛 장미 꽃다발',
      name: '시즌 플라워 부케',
      description: '풍성한 꽃다발로 축하와 고마운 마음을 전해 보세요.',
    },
    {
      image: '/images/message-design-1.png',
      alt: '메시지를 적을 수 있는 카드와 봉투',
      name: '메시지 카드 세트',
      description: '직접 쓴 문장을 오래 간직할 수 있는 카드와 봉투예요.',
    },
  ],
  cute: [
    {
      image: '/images/style-cute.png',
      alt: '분홍 리본과 토끼 인형이 담긴 선물 상자',
      name: '리본 토끼 인형 박스',
      description: '분홍 리본을 단 토끼 인형이 담긴 사랑스러운 선물 상자예요.',
    },
    {
      image: '/images/style-cute.png',
      alt: '토끼 인형과 핑크 선물 상자',
      name: '핑크 토끼 인형 기프트',
      description: '포근한 토끼 인형과 핑크 상자를 함께 선물해 보세요.',
    },
    {
      image: '/images/style-cute.png',
      alt: '꽃 장식이 더해진 토끼 인형 선물',
      name: '플라워 토끼 인형 세트',
      description: '토끼 인형과 꽃 장식으로 귀여움을 더한 선물 구성이에요.',
    },
  ],
  luxury: [
    {
      image: '/images/style-luxury.png',
      alt: '고급 상자에 담긴 향수 선물 세트',
      name: '시그니처 향수 세트',
      description: '향수와 고급스러운 패키지를 함께 담은 퍼퓸 세트예요.',
    },
    {
      image: '/images/result-handcream.png',
      alt: '고급 포장의 핸드케어 세트',
      name: '프리미엄 핸드케어 박스',
      description: '정성스러운 패키지에 담긴 핸드케어 제품으로 여유를 선물해요.',
    },
    {
      image: '/images/result-flower.png',
      alt: '풍성하게 포장한 프리미엄 꽃다발',
      name: '프리미엄 플라워 부케',
      description: '풍성한 꽃과 세심한 포장으로 특별한 순간을 만들어 보세요.',
    },
  ],
}

function getProductRecommendations({ budget, giftStyle, occasion }) {
  const budgetIndex = Math.max(0, budgets.indexOf(budget))
  const selectedStyle = giftStyles.some((style) => style.id === giftStyle) ? giftStyle : 'practical'
  const catalog = catalogs[selectedStyle] ?? catalogs.practical
  const priceTier = productsByBudget[budget] ?? productsByBudget[budgets[0]]

  return catalog.map((product, index) => ({
    name: product.name,
    price: `${priceTier[index].amount.toLocaleString('ko-KR')}원`,
    image: assetUrl(product.image),
    alt: product.alt,
    description: occasion
      ? `${occasion} 선물로 잘 어울려요. ${product.description}`
      : product.description,
    tier: priceTier[index].label,
    budgetIndex,
  }))
}

export default getProductRecommendations
