import { assetUrl } from '../utils/assetUrl.js'

const originalRecommendations = [
  {
    name: '01. 꽃다발',
    price: '35,000원',
    image: '/images/result-flower.png',
    alt: '테이블 위의 꽃다발',
    description: '특별한 날의 분위기를 더해주고, 말로 전하기 어려운 축하와 마음을 꽃으로 표현할 수 있어요.',
  },
  {
    name: '02. 핸드크림 세트',
    price: '28,000원',
    image: '/images/result-handcream.png',
    alt: '선물 상자에 담긴 핸드크림 세트',
    description: '매일 부담 없이 사용할 수 있고, 향기와 보습을 함께 선물할 수 있어 실용적이면서도 감성적이에요.',
  },
  {
    name: '03. 감성 무드 조명',
    price: '39,000원',
    image: '/images/result-lamp.png',
    alt: '선물 상자 옆에 놓인 무드 조명',
    description: '은은한 조명으로 방 안을 아늑하게 꾸밀 수 있어 일상에서 선물한 사람을 떠올릴 수 있어요.',
  },
]

function getProductRecommendations() {
  return originalRecommendations.map((product) => ({
    ...product,
    image: assetUrl(product.image),
  }))
}

export default getProductRecommendations
