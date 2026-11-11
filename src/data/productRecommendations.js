import { budgets, giftStyles } from './giftData.js'
import { assetUrl } from '../utils/assetUrl.js'

const pricesByBudget = [
  [18000, 23000, 29000],
  [32000, 39000, 48000],
  [58000, 69000, 89000],
  [110000, 120000, 139000],
]

// Product names and photos are paired by what is actually visible in each image.
const catalogs = {
  practical: [
    {
      image: '/images/style-practical.png',
      alt: '노트와 펜, 텀블러가 담긴 선물 세트',
      name: '노트·텀블러 세트',
      description: '노트와 펜, 텀블러를 한 번에 챙길 수 있는 데일리 세트예요.',
    },
    {
      image: '/images/result-handcream.png',
      alt: '핸드크림이 담긴 선물 세트',
      name: '핸드크림 세트',
      description: '매일 손을 촉촉하게 관리할 수 있는 핸드크림 세트예요.',
    },
    {
      image: '/images/result-lamp.png',
      alt: '상자와 함께 놓인 테이블 조명',
      name: '테이블 무드등',
      description: '책상이나 침대 옆에 두고 사용할 수 있는 무드 조명이에요.',
    },
  ],
  emotional: [
    {
      image: '/images/style-emotional.png',
      alt: '손편지와 차, 꽃 장식',
      name: '티·손편지 세트',
      description: '차와 손편지를 함께 전할 수 있도록 구성한 감성 선물이에요.',
    },
    {
      image: '/images/result-flower.png',
      alt: '분홍빛 장미 꽃다발',
      name: '장미 꽃다발',
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
      name: '빅사이즈 토끼 인형',
      description: '분홍 리본을 단 토끼 인형이 담긴 사랑스러운 선물 상자예요.',
    },
    {
      image: '/images/style-cute.png',
      alt: '토끼 인형과 핑크 선물 상자',
      name: '핑크 리본 토끼 인형',
      description: '포근한 토끼 인형과 핑크 상자를 함께 선물해 보세요.',
    },
    {
      image: '/images/style-cute.png',
      alt: '꽃 장식이 더해진 토끼 인형 선물',
      name: '토끼 인형 선물 상자',
      description: '토끼 인형과 꽃 장식으로 귀여움을 더한 선물 구성이에요.',
    },
  ],
  luxury: [
    {
      image: '/images/style-luxury.png',
      alt: '고급 상자에 담긴 향수 선물 세트',
      name: '향수 세트',
      description: '향수와 고급스러운 패키지를 함께 담은 퍼퓸 세트예요.',
    },
    {
      image: '/images/result-handcream.png',
      alt: '고급 포장의 핸드케어 세트',
      name: '핸드케어 세트',
      description: '정성스러운 패키지에 담긴 핸드케어 제품으로 여유를 선물해요.',
    },
    {
      image: '/images/result-flower.png',
      alt: '풍성하게 포장한 프리미엄 꽃다발',
      name: '프리미엄 꽃다발',
      description: '풍성한 꽃과 세심한 포장으로 특별한 순간을 만들어 보세요.',
    },
  ],
}

function getProductRecommendations({ budget, giftStyle }) {
  const budgetIndex = Math.max(0, budgets.indexOf(budget))
  const selectedStyle = giftStyles.some((style) => style.id === giftStyle) ? giftStyle : 'practical'
  const catalog = catalogs[selectedStyle] ?? catalogs.practical
  const priceTier = pricesByBudget[budgetIndex]

  return catalog.map((product, index) => ({
    name: product.name,
    price: `${priceTier[index].toLocaleString('ko-KR')}원`,
    image: assetUrl(product.image),
    alt: product.alt,
    description: product.description,
  }))
}

export default getProductRecommendations
