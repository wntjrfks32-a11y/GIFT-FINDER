import { budgets, giftStyles, recipients } from './giftData.js'
import { assetUrl } from '../utils/assetUrl.js'

const pricesByBudget = [
  [18000, 23000, 29000],
  [32000, 39000, 48000],
  [58000, 69000, 89000],
  [110000, 120000, 139000],
]

const catalog = [
  {
    practical: [
      { name: '데일리 핸드케어 세트', image: '/images/result-handcream.png', description: '매일 편하게 사용하는 실용적인 선물이에요.' },
      { name: '미니 보온 텀블러', image: '/images/style-practical.png', description: '가방에 넣어 다니기 좋은 가벼운 텀블러예요.' },
      { name: '정리용 데스크 소품 세트', image: '/images/material-box.png', description: '책상 위를 깔끔하게 정리할 수 있어요.' },
    ],
    emotional: [
      { name: '작은 계절 꽃다발', image: '/images/result-flower.png', description: '작은 꽃다발로 따뜻한 마음을 전해요.' },
      { name: '손글씨 메시지 카드', image: '/images/message-design-1.png', description: '직접 쓴 한마디를 함께 건넬 수 있어요.' },
      { name: '드라이 플라워 미니 장식', image: '/images/material-flower.png', description: '오래 두고 볼 수 있는 작은 꽃 장식이에요.' },
    ],
    cute: [
      { name: '캐릭터 키링 세트', image: '/images/style-cute.png', description: '가방에 달기 좋은 귀여운 소품이에요.' },
      { name: '미니 디저트 박스', image: '/images/wrap-tip-03.png', description: '달콤한 간식으로 기분 좋은 하루를 선물해요.' },
      { name: '파스텔 문구 꾸러미', image: '/images/message-design-3.png', description: '아기자기한 문구를 좋아하는 분께 잘 어울려요.' },
    ],
    luxury: [
      { name: '프리미엄 티 샘플 세트', image: '/images/style-luxury.png', description: '다양한 차를 가볍게 즐겨볼 수 있는 구성이에요.' },
      { name: '미니 향수 세트', image: '/images/result-handcream.png', description: '외출할 때 간편하게 쓰기 좋은 향기 선물이에요.' },
      { name: '고급 패키지 캔들', image: '/images/material-box.png', description: '포장까지 섬세한 작은 홈 프래그런스예요.' },
    ],
  },
  {
    practical: [
      { name: '보온 텀블러 기프트 세트', image: '/images/style-practical.png', description: '출근과 외출 때 두루 쓰기 좋은 선물이에요.' },
      { name: '핸드케어 선물 세트', image: '/images/result-handcream.png', description: '향과 보습을 함께 챙길 수 있어 실용적이에요.' },
      { name: '감성 테이블 조명', image: '/images/result-lamp.png', description: '집이나 사무실에서 매일 활용할 수 있어요.' },
    ],
    emotional: [
      { name: '로맨틱 꽃다발', image: '/images/result-flower.png', description: '축하와 고마운 마음을 꽃으로 전해요.' },
      { name: '메시지 카드와 편지 세트', image: '/images/message-design-2.png', description: '진심을 담은 글을 선물과 함께 건네보세요.' },
      { name: '플라워 기프트 박스', image: '/images/material-flower.png', description: '정성스러운 포장으로 특별함을 더했어요.' },
    ],
    cute: [
      { name: '미니 인형 선물 세트', image: '/images/style-cute.png', description: '귀여운 인형과 작은 소품을 함께 담았어요.' },
      { name: '꽃과 디저트 박스', image: '/images/result-flower.png', description: '꽃과 달콤한 간식을 함께 즐길 수 있어요.' },
      { name: '캐릭터 문구 세트', image: '/images/message-design-3.png', description: '매일 쓰는 문구에 귀여운 포인트를 더해요.' },
    ],
    luxury: [
      { name: '시그니처 향수 듀오', image: '/images/style-luxury.png', description: '두 가지 향을 취향에 따라 즐길 수 있어요.' },
      { name: '프리미엄 핸드케어 박스', image: '/images/result-handcream.png', description: '고급스러운 향과 패키지가 돋보이는 세트예요.' },
      { name: '디자인 무드 조명', image: '/images/result-lamp.png', description: '공간의 분위기를 바꿔주는 인테리어 선물이에요.' },
    ],
  },
  {
    practical: [
      { name: '프리미엄 텀블러 세트', image: '/images/style-practical.png', description: '튼튼한 소재와 넉넉한 용량으로 오래 쓸 수 있어요.' },
      { name: '홈 케어 기프트 박스', image: '/images/result-handcream.png', description: '손과 바디를 함께 관리할 수 있는 구성입니다.' },
      { name: '원목 데스크 조명', image: '/images/result-lamp.png', description: '실용성과 인테리어를 함께 챙기는 선물이에요.' },
    ],
    emotional: [
      { name: '풍성한 프리미엄 꽃다발', image: '/images/result-flower.png', description: '풍성한 꽃으로 기억에 남는 순간을 만들어요.' },
      { name: '가죽 커버 편지 세트', image: '/images/message-design-2.png', description: '오래 간직할 손편지와 카드로 마음을 전해요.' },
      { name: '시즌 플라워 바스켓', image: '/images/material-flower.png', description: '계절 꽃을 풍성하게 담아 선물하기 좋아요.' },
    ],
    cute: [
      { name: '포근한 인형 바스켓', image: '/images/style-cute.png', description: '인형과 소품을 함께 담은 포근한 선물이에요.' },
      { name: '디저트 파티 박스', image: '/images/wrap-tip-03.png', description: '여러 가지 달콤한 간식을 함께 즐겨요.' },
      { name: '캐릭터 데스크 꾸러미', image: '/images/message-design-3.png', description: '책상 위를 귀엽게 꾸밀 수 있는 세트예요.' },
    ],
    luxury: [
      { name: '프리미엄 향수 컬렉션', image: '/images/style-luxury.png', description: '취향에 맞는 향을 골라 사용할 수 있는 컬렉션이에요.' },
      { name: '시그니처 플라워 박스', image: '/images/result-flower.png', description: '꽃과 고급 포장이 어우러진 특별한 선물이에요.' },
      { name: '호텔 무드 테이블 램프', image: '/images/result-lamp.png', description: '공간을 한층 차분하게 만드는 디자인 조명이에요.' },
    ],
  },
  {
    practical: [
      { name: '프리미엄 스마트 기프트 세트', image: '/images/style-practical.png', description: '매일 사용하는 물건을 좋은 품질로 준비했어요.' },
      { name: '럭셔리 셀프 케어 컬렉션', image: '/images/result-handcream.png', description: '집에서 여유롭게 관리할 수 있는 고급 구성입니다.' },
      { name: '디자이너 데스크 조명', image: '/images/result-lamp.png', description: '오래 사용할 수 있는 디자인과 기능을 담았어요.' },
    ],
    emotional: [
      { name: '시그니처 플라워 박스', image: '/images/result-flower.png', description: '풍성한 꽃으로 소중한 날을 특별하게 기념해요.' },
      { name: '프리미엄 레터링 카드 세트', image: '/images/message-design-2.png', description: '개인적인 메시지를 더해 오래 간직할 수 있어요.' },
      { name: '맞춤형 플라워 바스켓', image: '/images/material-flower.png', description: '정성스러운 꽃 구성으로 깊은 마음을 전해요.' },
    ],
    cute: [
      { name: '빅사이즈 포근 인형', image: '/images/style-cute.png', description: '안아주고 싶은 커다란 인형으로 기쁨을 전해요.' },
      { name: '프리미엄 디저트 햄퍼', image: '/images/wrap-tip-03.png', description: '다양한 디저트를 풍성하게 담은 선물 바구니예요.' },
      { name: '커스텀 캐릭터 굿즈 세트', image: '/images/message-design-3.png', description: '취향에 맞춘 귀여운 소품을 한 번에 선물해요.' },
    ],
    luxury: [
      { name: '니치 퍼퓸 기프트 컬렉션', image: '/images/style-luxury.png', description: '개성 있는 향과 고급 패키지를 함께 즐겨요.' },
      { name: '럭셔리 플라워 컬렉션', image: '/images/result-flower.png', description: '꽃과 패키지 모두 특별하게 준비한 선물이에요.' },
      { name: '프리미엄 디자인 조명', image: '/images/result-lamp.png', description: '공간의 중심이 되는 오래 기억될 선물이에요.' },
    ],
  },
]

const recipientLabels = {
  love: '연인을 위한',
  friend: '친구에게 잘 어울리는',
  family: '가족에게 전하기 좋은',
  work: '직장 동료에게 부담 없는',
}

function getProductRecommendations({ budget, giftStyle, recipient, occasion }) {
  const foundBudget = budgets.indexOf(budget)
  const budgetIndex = foundBudget >= 0 ? foundBudget : 0
  const selectedStyle = giftStyles.some((item) => item.id === giftStyle) ? giftStyle : 'practical'
  const recipientIndex = Math.max(0, recipients.findIndex((item) => item.id === recipient))
  const recipientLabel = recipientLabels[recipient] ?? '마음을 전하기 좋은'
  const candidateProducts = catalog[budgetIndex]?.[selectedStyle] ?? catalog[0].practical

  return candidateProducts.map((product, index) => {
    const recipientProduct = candidateProducts[(index + recipientIndex) % candidateProducts.length]
    const price = pricesByBudget[budgetIndex][index]
    const occasionText = occasion ? `${occasion} 선물로 추천해요.` : '특별한 선물로 잘 어울려요.'

    return {
      ...recipientProduct,
      name: `${String(index + 1).padStart(2, '0')}. ${recipientLabel} ${recipientProduct.name}`,
      price: `${price.toLocaleString('ko-KR')}원`,
      image: assetUrl(recipientProduct.image),
      alt: recipientProduct.name,
      description: `${occasionText} ${recipientProduct.description}`,
    }
  })
}

export default getProductRecommendations
