import { budgets, giftStyles } from './giftData.js'
import { assetUrl } from '../utils/assetUrl.js'

const pricesByBudget = [
  [18000, 23000, 29000],
  [32000, 39000, 48000],
  [58000, 69000, 89000],
  [110000, 120000, 139000],
]

// Each product name, description, and image is selected together for the budget.
const catalogs = {
  practical: [
    {
      images: ['/images/style-practical.png'],
      alt: '노트와 펜, 텀블러가 담긴 선물 세트',
      names: ['노트·텀블러 세트', '플래너·텀블러 세트', '프리미엄 오피스 세트', '시그니처 데스크 기프트 박스'],
      descriptions: ['노트와 텀블러를 담은 데일리 구성입니다.', '플래너와 텀블러를 함께 담았습니다.', '필기구와 다이어리를 더한 오피스 구성입니다.', '고급 문구와 텀블러를 담은 데스크 세트입니다.'],
    },
    {
      images: ['/images/result-handcream.png'],
      alt: '핸드크림과 보습 제품 세트',
      names: ['핸드크림 미니 세트', '핸드크림 듀오 세트', '프리미엄 핸드케어 세트', '럭셔리 핸드케어 컬렉션'],
      descriptions: ['휴대하기 좋은 핸드크림 구성입니다.', '향이 다른 핸드크림을 함께 담았습니다.', '핸드크림과 보습 제품을 함께 구성했습니다.', '다양한 핸드케어 제품을 담은 컬렉션입니다.'],
    },
    {
      images: ['/images/result-lamp.png'],
      alt: '상자 옆에 놓인 테이블 조명',
      names: ['미니 무드등', '테이블 무드등', '원목 테이블 조명', '디자이너 테이블 조명'],
      descriptions: ['책상에 두기 좋은 작은 조명입니다.', '은은한 빛을 내는 테이블 조명입니다.', '원목 소재를 더한 테이블 조명입니다.', '디자인과 소재를 살린 프리미엄 조명입니다.'],
    },
  ],
  emotional: [
    {
      images: [null],
      alt: '찻주전자와 찻잔, 차통으로 구성한 티 세트',
      names: ['티 세트', '프리미엄 티 세트', '티웨어 기프트 세트', '시그니처 티웨어 컬렉션'],
      descriptions: ['찻잔과 차를 함께 담은 기본 구성입니다.', '엄선한 차를 더한 프리미엄 구성입니다.', '차와 티웨어를 함께 구성했습니다.', '고급 티웨어와 차를 담은 컬렉션입니다.'],
    },
    {
      images: ['/images/result-flower.png', '/images/result-flower.png', '/images/result-flower.png', null],
      alt: '꽃다발 또는 꽃과 차를 담은 선물 구성',
      names: ['미니 꽃다발', '장미 꽃다발', '프리미엄 꽃다발', '플라워·티 기프트 세트'],
      descriptions: ['계절 꽃으로 구성한 작은 꽃다발입니다.', '장미를 중심으로 구성한 꽃다발입니다.', '꽃의 양과 포장을 더한 꽃다발입니다.', '꽃과 차를 함께 담은 선물 구성입니다.'],
    },
    {
      images: [null],
      alt: '차통과 찻잔이 담긴 티 컬렉션',
      names: ['티타임 세트', '티·머그 세트', '프리미엄 티 컬렉션', '프리미엄 티웨어 세트'],
      descriptions: ['차와 찻잔을 함께 담았습니다.', '차와 머그를 함께 담은 구성입니다.', '여러 종류의 차를 담은 컬렉션입니다.', '고급 찻잔과 차를 함께 구성했습니다.'],
    },
  ],
  cute: [
    {
      images: ['/images/style-cute.png'],
      alt: '분홍 리본을 단 토끼 인형',
      names: ['미니 토끼 인형', '리본 토끼 인형', '빅사이즈 토끼 인형', '특대형 토끼 인형'],
      descriptions: ['작은 크기의 토끼 인형입니다.', '분홍 리본을 더한 토끼 인형입니다.', '크기를 키운 토끼 인형입니다.', '특대형 토끼 인형을 선물 상자에 담았습니다.'],
    },
    {
      images: [null],
      alt: '곰, 토끼, 고양이 캐릭터 피규어 세트',
      names: ['캐릭터 미니 피규어', '캐릭터 피규어 세트', '캐릭터 피규어 3종 세트', '한정판 피규어 컬렉터 세트'],
      descriptions: ['캐릭터 피규어 하나로 구성한 상품입니다.', '귀여운 캐릭터 피규어를 모은 세트입니다.', '곰·토끼·고양이 피규어 3종 구성입니다.', '세 가지 피규어와 수집용 패키지를 담았습니다.'],
    },
    {
      images: [null],
      alt: '파스텔 색상의 캐릭터 문구 세트 또는 피규어',
      names: ['캐릭터 문구 세트', '다이어리·펜 세트', '캐릭터 피규어 세트', '한정판 캐릭터 피규어 컬렉션'],
      descriptions: ['캐릭터 노트와 펜으로 구성했습니다.', '다이어리와 문구를 함께 담았습니다.', '캐릭터 피규어를 모은 구성입니다.', '캐릭터 피규어 3종을 수집용 상자에 담았습니다.'],
    },
  ],
  luxury: [
    {
      images: ['/images/style-luxury.png'],
      alt: '고급 케이스에 담긴 향수 세트',
      names: ['미니 향수', '향수 기프트 세트', '프리미엄 향수 세트', '럭셔리 퍼퓸 컬렉션'],
      descriptions: ['휴대하기 좋은 작은 향수입니다.', '향수와 케이스를 함께 구성했습니다.', '고급 향수와 패키지를 담았습니다.', '여러 향 제품을 담은 퍼퓸 컬렉션입니다.'],
    },
    {
      images: ['/images/result-handcream.png'],
      alt: '핸드크림과 보습 제품 세트',
      names: ['핸드크림 세트', '핸드케어 듀오 세트', '프리미엄 핸드케어 박스', '럭셔리 뷰티 케어 컬렉션'],
      descriptions: ['핸드크림을 담은 기본 세트입니다.', '핸드크림과 보습 제품을 함께 담았습니다.', '고급 패키지에 핸드케어 제품을 담았습니다.', '여러 케어 제품으로 구성한 컬렉션입니다.'],
    },
    {
      images: ['/images/style-luxury.png'],
      alt: '향수와 고급 케이스',
      names: ['퍼퓸 미니 세트', '향수 선물 상자', '시그니처 향수 세트', '프리미엄 퍼퓸 컬렉션'],
      descriptions: ['작은 향수 제품을 함께 담았습니다.', '향수와 케이스를 함께 구성했습니다.', '향수와 고급 상자를 담았습니다.', '여러 향 제품으로 구성한 프리미엄 세트입니다.'],
    },
  ],
}

function getProductRecommendations({ budget, giftStyle }) {
  const foundBudget = budgets.indexOf(budget)
  const budgetIndex = foundBudget >= 0 ? foundBudget : 0
  const selectedStyle = giftStyles.some((style) => style.id === giftStyle) ? giftStyle : 'practical'
  const catalog = catalogs[selectedStyle] ?? catalogs.practical

  return catalog.map((product, index) => {
    const imagePath = product.images[budgetIndex] !== undefined
      ? product.images[budgetIndex]
      : product.images[0]

    return {
      name: product.names[budgetIndex],
      price: `${pricesByBudget[budgetIndex][index].toLocaleString('ko-KR')}원`,
      image: imagePath ? assetUrl(imagePath) : null,
      alt: product.alt,
      description: product.descriptions[budgetIndex],
    }
  })
}

export default getProductRecommendations
