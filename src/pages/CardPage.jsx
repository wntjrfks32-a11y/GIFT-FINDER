import { useState } from 'react'
import { assetUrl } from '../utils/assetUrl.js'

function CardPage() {
  const designs = [
    { id: 'classic', image: assetUrl('/images/message-design-1.png'), alt: '크래프트 봉투와 카드 디자인' },
    { id: 'ribbon', image: assetUrl('/images/message-design-2.png'), alt: '버건디 리본 카드 디자인' },
    { id: 'minimal', image: assetUrl('/images/message-design-3.png'), alt: '심플한 세로형 카드 디자인' },
  ]
  const [design, setDesign] = useState('classic')
  const [recipientName, setRecipientName] = useState('사랑하는 OO에게')
  const [title, setTitle] = useState('너의 특별한 날을 축하해')
  const [message, setMessage] = useState('항상 고맙고 소중해!')
  const [complete, setComplete] = useState(false)

  return <main className="message-card-page">
    <section className="message-card-intro">
      <p>MESSAGE CARD</p>
      <h1>소중한 마음을 카드에 담아보세요.</h1>
      <span>선물과 함께 전하고 싶은 마음을 직접 작성해 보세요.</span>
    </section>
    <section className="design-section" aria-labelledby="design-heading">
      <h2 id="design-heading">어떤 카드 디자인을 원하시나요?</h2>
      <div className="card-design-grid">{designs.map((item, index) => <button type="button" className={`card-design-option${design === item.id ? ' is-selected' : ''}`} onClick={() => { setDesign(item.id); setComplete(false) }} aria-pressed={design === item.id} aria-label={`카드 디자인 ${index + 1} 선택`} key={item.id}><img src={item.image} alt={item.alt}/></button>)}</div>
    </section>
    <div className="message-card-workspace">
      <form className="message-form" onSubmit={(event) => event.preventDefault()}>
        <h2>마음을 전하는 메시지를 작성해 보세요.</h2>
        <label>받는 사람<input value={recipientName} onChange={(event) => { setRecipientName(event.target.value); setComplete(false) }} placeholder="사랑하는 OO에게" maxLength={24}/></label>
        <label>메시지 제목<input value={title} onChange={(event) => { setTitle(event.target.value); setComplete(false) }} placeholder="너의 특별한 날을 축하해" maxLength={30}/></label>
        <label>전하고 싶은 메시지<textarea value={message} onChange={(event) => { setMessage(event.target.value); setComplete(false) }} placeholder="전하고 싶은 마음을 자유롭게 작성해 보세요." rows="3" maxLength={120}/></label>
      </form>
      <section className="message-preview-section" aria-labelledby="preview-heading">
        <h2 id="preview-heading">카드 미리보기</h2>
        <article className={`message-preview message-preview-${design}`}>
          <p className="preview-kicker">WITH LOVE</p>
          <h3>{recipientName || '받는 사람에게'}</h3>
          <p className="preview-title">{title || '메시지 제목'}</p>
          <p className="preview-message">{message || '전하고 싶은 메시지'}</p>
          <p className="preview-sender">FROM. YOUR FRIEND</p>
        </article>
        <div className="message-card-action">
          <button type="button" onClick={() => setComplete(true)}>카드 완성하기 <span aria-hidden="true">→</span></button>
          {complete && <p role="status">카드가 완성됐어요. 미리보기를 확인해 주세요.</p>}
        </div>
      </section>
    </div>

  </main>
}

export default CardPage
