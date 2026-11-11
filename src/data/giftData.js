const recipients = [
  { id: 'love', name: '연인', description: '사랑하는 사람에게', image: '/images/couple.png', alt: '연인에게 선물을 건네는 모습' },
  { id: 'friend', name: '친구', description: '소중한 친구에게', image: '/images/friend.png', alt: '친구에게 화분 선물을 건네는 모습' },
  { id: 'family', name: '가족', description: '고마운 가족에게', image: '/images/family.png', alt: '가족이 함께 선물을 주고받는 모습' },
  { id: 'work', name: '직장 동료', description: '함께 일하는 사람에게', image: '/images/coworkers.png', alt: '직장 동료에게 선물을 건네는 모습' },
]

const occasions = ['생일', '기념일', '감사', '축하', '응원']
const budgets = ['3만원 이하', '3~5만원', '5~10만원', '10만원 이상']
const giftStyles = [
  { id: 'practical', name: '실용적인', image: '/images/style-practical.png' },
  { id: 'emotional', name: '감성적인', image: '/images/style-emotional.png' },
  { id: 'cute', name: '귀여운', image: '/images/style-cute.png' },
  { id: 'luxury', name: '고급스러운', image: '/images/style-luxury.png' },
]

export { recipients, occasions, budgets, giftStyles }
