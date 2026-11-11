import GiftIcon from './GiftIcon.jsx'
import { appUrl } from '../utils/assetUrl.js'

function Header({ onHome, onStart, isRecommendation, isWrapping }) {
  const handleStart = (event) => {
    event.preventDefault()
    onStart()
  }
  const handleHome = (event) => {
    event.preventDefault()
    onHome()
  }
  const handleRecipients = (event) => {
    event.preventDefault()
    onHome('recipients')
  }

  return <header className="header">
    <a className="brand" href={appUrl('/')} onClick={handleHome} aria-label="Gift Finder 홈"><GiftIcon/><span>GIFT FINDER</span></a>
    <nav className="nav" aria-label="메인 메뉴">
      {isWrapping
        ? <><a href={appUrl('/recommend')} onClick={handleStart}>선물 찾기</a><a href={appUrl('/wrapping')} aria-current="page">포장 가이드</a></>
        : <><a href={appUrl('/recommend')} onClick={handleStart} aria-current={isRecommendation ? 'page' : undefined}>선물 찾기</a><a href={appUrl('/#recipients')} onClick={handleRecipients}>인기 선물</a><a href={appUrl('/#recipients')} onClick={handleRecipients}>선물 가이드</a></>}
    </nav>
  </header>
}

export default Header
