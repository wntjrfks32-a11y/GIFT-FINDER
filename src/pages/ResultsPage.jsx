import { giftStyles, recipients } from '../data/giftData.js'
import getProductRecommendations from '../data/productRecommendations.js'
import { assetUrl } from '../utils/assetUrl.js'

function ResultDecorations() {
  return <div className="result-decorations" aria-hidden="true">
    <svg className="result-star result-star-one" viewBox="0 0 100 100"><path d="M50 0c7 30 13 43 50 50-37 7-43 20-50 50C43 70 37 57 0 50 37 43 43 30 50 0Z"/></svg>
    <svg className="result-star result-star-two" viewBox="0 0 100 100"><path d="M50 0c7 30 13 43 50 50-37 7-43 20-50 50C43 70 37 57 0 50 37 43 43 30 50 0Z"/></svg>
    <svg className="result-star result-star-three" viewBox="0 0 100 100"><path d="M50 0c7 30 13 43 50 50-37 7-43 20-50 50C43 70 37 57 0 50 37 43 43 30 50 0Z"/></svg>
  </div>
}

function ResultsPage({ recipient, occasion, budget, giftStyle, onEdit, onHome, onGuide }) {
  const selectedRecipient = recipients.find((item) => item.id === recipient)
  const selectedStyle = giftStyles.find((item) => item.id === giftStyle)
  const conditions = [selectedRecipient?.name, occasion, budget, selectedStyle?.name].filter(Boolean)
  const products = getProductRecommendations({ budget, giftStyle, recipient, occasion })

  return <main className="result-page">
    <ResultDecorations/>
    <div className="result-intro">
      <h1>당신을 위한 선물을 찾았어요!</h1>
      <p>선택한 취향에 꼭 맞는 특별한 선물을 준비했어요.</p>
    </div>
    <section className="result-conditions" aria-labelledby="condition-title">
      <h2 id="condition-title">선택한 조건</h2>
      <div className="condition-tags">{conditions.map((condition) => <span className="condition-tag" key={condition}>{condition}</span>)}</div>
    </section>
    <section className="result-products" aria-labelledby="result-title">
      <div className="result-products-heading">
        <h2 id="result-title">추천 선물 <span>TOP 3</span></h2>
        <img src={assetUrl('/images/heart-ribbon.png')} alt="" aria-hidden="true"/>
      </div>
      <p>당신의 취향에 맞는 선물을 골라봤어요.</p>
      <div className="product-grid">
        {products.map((product) => <article className="product-card" key={product.name}>
          <img className="product-image" src={product.image} alt={product.alt}/>
          <h3>{product.name}</h3>
          <p className="product-price">{product.price}</p>
          <p className="product-description">{product.description}</p>
        </article>)}
      </div>
    </section>
    <div className="result-actions">
      <button className="result-guide-button" type="button" onClick={onGuide}>선물 포장 가이드 보기 <span aria-hidden="true">→</span></button>
      <div className="result-secondary-actions">
        <button type="button" className="result-back-button" onClick={onEdit}>조건 다시 선택하기</button>
        <button type="button" className="result-home-button" onClick={onHome}>처음으로</button>
      </div>
    </div>
  </main>
}

export default ResultsPage
