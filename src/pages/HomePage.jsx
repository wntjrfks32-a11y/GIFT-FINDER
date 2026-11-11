import Sparkle from '../components/Sparkle.jsx'
import { recipients } from '../data/giftData.js'
import { assetUrl } from '../utils/assetUrl.js'

function HomePage({ onStart }) {
  return <main>
    <section className="hero" id="gift-finder">
      <div className="hero-copy">
        <div className="headline-wrap"><Sparkle className="sparkle sparkle-left"/><h1>마음을 전하는<span>가장 좋은 방법</span></h1><Sparkle className="sparkle sparkle-right"/></div>
        <p>소중한 사람을 위한 특별한 선물을 찾아보세요.</p>
        <a className="primary-button" href="/recommend" onClick={(event) => { event.preventDefault(); onStart() }}>나에게 맞는 선물 찾기 <span aria-hidden="true">→</span></a>
      </div>
      <div className="hero-visual"><img className="hero-art" src={assetUrl('/images/hero-photo.png')} alt="리본 선물 상자와 장미 꽃다발"/><img aria-hidden="true" className="heart-doodle" src={assetUrl('/images/heart-ribbon.png')} alt=""/></div>
    </section>
    <section className="recipients" id="recipients">
      <h2>누구에게 선물을 하고 싶나요?</h2>
      <div className="recipient-grid">
        {recipients.map((recipient) => <a className="recipient-card" href={`/recommend?recipient=${recipient.id}`} onClick={(event) => { event.preventDefault(); onStart(recipient.id) }} key={recipient.id}>
          <img className="recipient-art" src={recipient.image} alt={recipient.alt}/>
          <span className="recipient-name">{recipient.name}</span>
          <span className="recipient-description">{recipient.description}</span>
        </a>)}
      </div>
    </section>
  </main>
}

export default HomePage
