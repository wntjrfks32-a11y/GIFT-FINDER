import Sparkle from '../components/Sparkle.jsx'

function WrappingPage({ onHome, onCard }) {
  const materials = [
    { image: '/images/material-paper.png', name: '크라프트 포장지' },
    { image: '/images/material-box.png', name: '선물 상자' },
    { image: '/images/material-twine.png', name: '마끈' },
    { image: '/images/material-flower.png', name: '꽃 장식' },
  ]
  const wrappingSteps = [
    { image: '/images/wrap-step-01.png', name: '01. 포장지와 상자 준비' },
    { image: '/images/wrap-step-02.png', name: '02. 포장지 감싸기' },
    { image: '/images/wrap-step-03.png', name: '03. 테이프 고정' },
    { image: '/images/wrap-step-04.png', name: '04. 첫 번째 끝 접기' },
    { image: '/images/wrap-step-05.png', name: '05. 반대쪽 끝 접기' },
    { image: '/images/wrap-step-06.png', name: '06. 마끈과 리본 묶기' },
    { image: '/images/wrap-step-07.png', name: '07. 완성 및 장식' },
  ]
  const wrappingTips = [
    { image: '/images/wrap-tip-01.png', title: '01. 리본 활용', description: '마끈과 리본으로 포인트를 더해요.' },
    { image: '/images/wrap-tip-02.png', title: '02. 메시지 카드', description: '짧은 손글씨로 마음을 전해요.' },
    { image: '/images/wrap-tip-03.png', title: '03. 작은 장식', description: '드라이 플라워로 자연스럽게 꾸며요.' },
  ]

  return <main className="wrapping-page">
    <section className="wrapping-intro">
      <p className="wrapping-eyebrow">GIFT WRAPPING GUIDE</p>
      <h1>마음을 담아, 예쁘게 포장해요</h1>
      <p className="wrapping-subtitle">소중한 사람에게 전하는 선물, 포장까지 특별하게 완성해 보세요.</p>
    </section>
    <div className="wrapping-video-frame" aria-label="선물 포장 안내 영상 영역">
        <video controls playsInline preload="metadata" poster="/images/wrapping-poster.png" aria-label="크라프트 포장지로 선물을 포장하는 방법">
          <source src="/videos/gift-wrapping.mp4" type="video/mp4"/>
          브라우저가 동영상 재생을 지원하지 않습니다.
        </video>
      <Sparkle className="wrapping-video-sparkle"/>
    </div>
    <section className="wrapping-materials" aria-labelledby="materials-heading">
      <h2 id="materials-heading">포장 준비물</h2>
      <div className="material-grid">{materials.map((item) => <article className="material-card" key={item.name}><img src={item.image} alt={item.name}/><h3>{item.name}</h3></article>)}</div>
    </section>
      <section className="wrapping-steps-section" aria-labelledby="wrapping-steps-heading">
        <h2 id="wrapping-steps-heading">선물 포장하는 법</h2>
        <div className="wrapping-step-grid">{wrappingSteps.map((step) => <article className="wrapping-step-card" key={step.name}>
          <div className="wrapping-step-image"><img src={step.image} alt=""/><span>{step.name}</span><b aria-hidden="true">✦</b></div>
        </article>)}</div>
      </section>
      <section className="wrapping-tips-section" aria-labelledby="wrapping-tips-heading">
        <h2 id="wrapping-tips-heading">선물을 더 특별하게 만드는 작은 팁</h2>
        <div className="wrapping-tips-grid">{wrappingTips.map((tip) => <article className="wrapping-tip-card" key={tip.title}>
          <img src={tip.image} alt=""/><h3>{tip.title}</h3><p>{tip.description}</p>
        </article>)}</div>
      </section>
      <div className="wrapping-end-action"><button type="button" onClick={onHome}>처음으로</button><button type="button" onClick={onCard}>카드 만들기 <span aria-hidden="true">→</span></button></div>
  </main>
}

export default WrappingPage
