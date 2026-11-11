import GiftIcon from './GiftIcon.jsx'
import { appRouteUrl } from '../utils/assetUrl.js'

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
    <a className="brand" href={appRouteUrl('/')} onClick={handleHome} aria-label="Gift Finder 홈"><GiftIcon/><span>GIFT FINDER</span></a>
    <nav className="nav" aria-label="메인 메뉴">
      {isWrapping
        ? <><a href={appRouteUrl('/recommend')} onClick={handleStart}>선물 찾기</a><a href={appRouteUrl('/wrapping')} aria-current="page">포장 가이드</a></>
        : <><a href={appRouteUrl('/recommend')} onClick={handleStart} aria-current={isRecommendation ? 'page' : undefined}>선물 찾기</a><a href={appRouteUrl('/#recipients')} onClick={handleRecipients}>인기 선물</a><a href={appRouteUrl('/#recipients')} onClick={handleRecipients}>선물 가이드</a></>}
    </nav>
  </header>
}

export default Header
