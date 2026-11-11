import { appRouteUrl } from '../utils/assetUrl.js'

function Footer({ onStart }) {
  const handleStart = (event) => {
    event.preventDefault()
    onStart()
  }
  return <footer className="footer">
    <div className="footer-top">
      <div className="footer-heading"><a className="footer-brand" href={appRouteUrl('/')}>GIFT FINDER</a><p>마음을 전하는 가장 좋은 방법</p></div>
      <nav className="footer-links" aria-label="푸터 메뉴"><span>문의하기</span><span>이용 안내</span><a href={appRouteUrl('/recommend')} onClick={handleStart}>선물 찾기</a><span>서비스 소개</span></nav>
    </div>
    <div className="footer-bottom"><small>© {new Date().getFullYear()} GIFT FINDER. All rights reserved.</small><div className="footer-social" aria-label="이메일과 인스타그램">
      <span aria-label="이메일" title="이메일"><svg aria-hidden="true" viewBox="0 0 28 24" fill="none"><rect x="1.5" y="2" width="25" height="20" rx="4"/><path d="m3 5 11 9 11-9"/></svg></span>
      <span aria-label="인스타그램" title="인스타그램"><svg aria-hidden="true" viewBox="0 0 26 26" fill="none"><rect x="2" y="2" width="22" height="22" rx="6"/><circle cx="13" cy="13" r="5"/><circle cx="19.2" cy="6.9" r="1" fill="currentColor" stroke="none"/></svg></span>
    </div></div>
  </footer>
}

export default Footer
