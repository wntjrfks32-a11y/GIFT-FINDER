import { budgets, giftStyles } from './giftData.js'
import { assetUrl } from '../utils/assetUrl.js'

const pricesByBudget = [
  [18000, 23000, 29000],
  [32000, 39000, 48000],
  [58000, 69000, 89000],
  [110000, 120000, 139000],
]

// Names scale with the selected budget. High-price flower cards become gift
// combinations, so a single bouquet is never shown with a six-figure price.
const catalogs = {
  practical: [
    {
      images: ['/images/style-practical.png'],
      alt: '노트와 펜, 텀블러가 담긴 선물 세트',
      names: ['미니 노트·텀블러 세트', '플래너·텀블러 세트', '프리미엄 오피스 세트', '시그니처 데스크 기프트 박스'],
      descriptions: [
        '노트와 텀블러를 한 번에 챙기는 데일리 구성입니다.',
        '플래너와 텀블러를 함께 담은 실용적인 구성입니다.',
        '필기구와 다이어리를 더한 프리미엄 오피스 구성입니다.',
        '고급 문구와 텀블러를 함께 담은 데스크 기프트 박스입니다.',
      ],
    },
    {
      images: ['/images/result-handcream.png'],
      alt: '핸드크림이 담긴 케어 세트',
      names: ['핸드크림 미니 세트', '핸드크림 듀오 세트', '프리미엄 핸드케어 세트', '럭셔리 핸드케어 컬렉션'],
      descriptions: [
        '가볍게 휴대하기 좋은 핸드크림 구성입니다.',
        '향이 다른 핸드크림을 함께 담은 듀오 구성입니다.',
        '핸드크림과 보습 제품을 함께 구성했습니다.',
        '여러 핸드케어 제품을 담은 프리미엄 컬렉션입니다.',
      ],
    },
    {
      images: ['/images/result-lamp.png'],
      alt: '상자와 함께 놓인 테이블 조명',
      names: ['미니 무드등', '테이블 무드등', '원목 테이블 조명', '디자이너 테이블 조명'],
      descriptions: [
        '침대 옆이나 책상에 두기 좋은 작은 조명입니다.',
        '은은한 빛으로 책상을 밝혀주는 테이블 조명입니다.',
        '원목 소재를 더한 고급 테이블 조명입니다.',
        '디자인과 소재를 살린 프리미엄 테이블 조명입니다.',
      ],
    },
  ],
  emotional: [
    {
      images: ['/images/style-emotional.png'],
      alt: '차와 손편지, 꽃 장식',
      names: ['티·손편지 세트', '프리미엄 티·레터 세트', '티웨어 기프트 세트', '프리미엄 티웨어 컬렉션'],
      descriptions: [
        '차와 손편지를 함께 전하는 작은 선물 구성입니다.',
        '프리미엄 차와 메시지 카드를 담았습니다.',
        '차와 티웨어를 함께 구성한 선물 세트입니다.',
        '고급 티웨어와 차를 담은 프리미엄 컬렉션입니다.',
      ],
    },
    {
      images: ['/images/result-flower.png', '/images/result-flower.png', '/images/result-flower.png', '/images/hero-photo.png'],
      alts: ['꽃다발', '장미 꽃다발', '프리미엄 꽃다발', '장미와 향수가 담긴 기프트 박스'],
      alt: '꽃다발과 정성스러운 선물 상자',
      names: ['미니 꽃다발', '장미 꽃다발', '프리미엄 꽃다발', '플라워·퍼퓸 기프트 박스'],
      descriptions: [
        '계절 꽃으로 구성한 작은 꽃다발입니다.',
        '장미를 중심으로 구성한 꽃다발입니다.',
        '꽃의 양과 포장을 더한 프리미엄 꽃다발입니다.',
        '꽃과 향수를 함께 담은 프리미엄 기프트 박스입니다.',
      ],
    },
    {
      images: ['/images/style-emotional.png', '/images/style-emotional.png', '/images/style-emotional.png', '/images/hero-photo.png'],
      alts: ['\uCC28\uC640 \uC190\uD3B8\uC9C0 \uC138\uD2B8', '\uCC28\uC640 \uBA38\uADF8, \uC190\uD3B8\uC9C0 \uC138\uD2B8', '\uD2F0\uC6E8\uC5B4\uC640 \uAF43 \uC138\uD2B8', '\uC7A5\uBBF8\uC640 \uD5A5\uC218\uAC00 \uB2F4\uAE34 \uAE30\uD504\uD2B8 \uBC15\uC2A4'],
      alt: '\uCC28\uC640 \uAF43, \uC190\uD3B8\uC9C0\uB97C \uB2F4\uC740 \uC120\uBB3C \uAD6C\uC131',
      names: ['\uD2F0\u00B7\uC190\uD3B8\uC9C0 \uC120\uBB3C \uC138\uD2B8', '\uD2F0\u00B7\uBA38\uADF8\u00B7\uC190\uD3B8\uC9C0 \uC138\uD2B8', '\uD2F0\uC6E8\uC5B4\u00B7\uAF43 \uC120\uBB3C \uC138\uD2B8', '\uC2DC\uADF8\uB2C8\uCC98 \uB85C\uC988 \uD37C\uD4F8 \uBC15\uC2A4'],
      descriptions: [
        '\uCC28\uC640 \uC190\uD3B8\uC9C0\uB97C \uD568\uAED8 \uB2F4\uC740 \uC120\uBB3C \uAD6C\uC131\uC785\uB2C8\uB2E4.',
        '\uCC28\uC640 \uBA38\uADF8, \uC190\uD3B8\uC9C0\uB97C \uD568\uAED8 \uB2F4\uC740 \uD2F0\uD0C0\uC784 \uC138\uD2B8\uC785\uB2C8\uB2E4.',
        '\uD2F0\uC6E8\uC5B4\uC640 \uAF43\uC744 \uD568\uAED8 \uAD6C\uC131\uD55C \uC120\uBB3C \uC138\uD2B8\uC785\uB2C8\uB2E4.',
        '\uC7A5\uBBF8\uC640 \uD5A5\uC218\uB97C \uD568\uAED8 \uB2F4\uC740 \uD504\uB9AC\uBBF8\uC5C4 \uC120\uBB3C \uBC15\uC2A4\uC785\uB2C8\uB2E4.',
      ],
    },
  ],
  cute: [
    {
      images: ['/images/style-cute.png'],
      alt: '분홍 리본을 단 토끼 인형',
      names: ['미니 토끼 인형', '리본 토끼 인형', '빅사이즈 토끼 인형', '특대형 토끼 인형'],
      descriptions: [
        '책상이나 가방에 두기 좋은 작은 토끼 인형입니다.',
        '분홍 리본을 더한 포근한 토끼 인형입니다.',
        '크기를 키운 빅사이즈 토끼 인형입니다.',
        '풍성한 크기의 토끼 인형을 선물 상자에 담았습니다.',
      ],
    },
    {
      images: ['/images/style-cute.png'],
      alt: '토끼 인형과 핑크 선물 상자',
      names: ['미니 토끼 인형', '핑크 토끼 인형', '빅사이즈 토끼 인형 세트', '프리미엄 토끼 인형 박스'],
      descriptions: [
        '토끼 캐릭터를 담은 작은 인형 선물입니다.',
        '토끼 인형을 핑크 패키지에 담았습니다.',
        '인형과 선물 패키지를 함께 구성했습니다.',
        '큰 토끼 인형을 고급 선물 상자에 담았습니다.',
      ],
    },
    {
      images: ['/images/style-cute.png'],
      alt: '리본과 상자를 더한 토끼 인형 선물',
      names: ['리본 토끼 인형', '토끼 인형 선물 상자', '빅사이즈 토끼 인형 세트', '토끼 인형 프리미엄 컬렉션'],
      descriptions: [
        '리본 장식이 돋보이는 토끼 인형입니다.',
        '토끼 인형을 선물 상자에 담은 구성입니다.',
        '빅사이즈 인형과 장식 패키지를 함께 담았습니다.',
        '특대형 토끼 인형과 선물 패키지 구성입니다.',
      ],
    },
  ],
  luxury: [
    {
      images: ['/images/style-luxury.png'],
      alt: '고급 상자에 담긴 향수 세트',
      names: ['미니 향수', '향수 기프트 세트', '프리미엄 향수 세트', '럭셔리 퍼퓸 컬렉션'],
      descriptions: [
        '부담 없이 사용하기 좋은 작은 향수입니다.',
        '향수와 패키지를 함께 구성했습니다.',
        '고급 향수와 선물 상자를 담았습니다.',
        '다양한 향 제품을 담은 프리미엄 컬렉션입니다.',
      ],
    },
    {
      images: ['/images/result-handcream.png'],
      alt: '핸드크림과 보습 제품 선물 세트',
      names: ['핸드크림 세트', '핸드케어 듀오 세트', '프리미엄 핸드케어 박스', '럭셔리 뷰티 케어 컬렉션'],
      descriptions: [
        '매일 쓰기 좋은 핸드크림 구성입니다.',
        '핸드크림과 보습 제품을 함께 담았습니다.',
        '고급 패키지에 핸드케어 제품을 담았습니다.',
        '다양한 프리미엄 케어 제품을 담은 컬렉션입니다.',
      ],
    },
    {
      images: ['/images/style-luxury.png', '/images/style-luxury.png', '/images/hero-photo.png', '/images/hero-photo.png'],
      alt: '향수와 고급 선물 상자',
      names: ['퍼퓸 미니 세트', '향수 선물 상자', '퍼퓸·플라워 세트', '럭셔리 퍼퓸 기프트 박스'],
      descriptions: [
        '작은 향수 제품을 패키지에 담았습니다.',
        '향수와 고급 상자를 함께 구성했습니다.',
        '향수와 꽃 장식을 더한 선물 구성입니다.',
        '향수와 꽃을 함께 담은 프리미엄 선물 박스입니다.',
      ],
    },
  ],
}

function getProductRecommendations({ budget, giftStyle }) {
  const budgetIndex = Math.max(0, budgets.indexOf(budget))
  const selectedStyle = giftStyles.some((style) => style.id === giftStyle) ? giftStyle : 'practical'
  const catalog = catalogs[selectedStyle] ?? catalogs.practical

  return catalog.map((product, index) => ({
    name: product.names[budgetIndex],
    price: `${pricesByBudget[budgetIndex][index].toLocaleString('ko-KR')}원`,
    image: assetUrl(product.images[budgetIndex] ?? product.images[0]),
    alt: product.alts?.[budgetIndex] ?? product.alt,
    description: product.descriptions[budgetIndex],
  }))
}

export default getProductRecommendations
