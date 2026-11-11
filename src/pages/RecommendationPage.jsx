import { budgets, giftStyles, occasions, recipients } from '../data/giftData.js'

function GiftStyleDecorations() {
  return <div className="gift-style-decorations" aria-hidden="true">
    <svg className="style-sparkle style-sparkle-one" viewBox="0 0 100 100"><path d="M50 0c7 30 13 43 50 50-37 7-43 20-50 50C43 70 37 57 0 50 37 43 43 30 50 0Z"/></svg>
    <svg className="style-sparkle style-sparkle-two" viewBox="0 0 100 100"><path d="M50 0c7 30 13 43 50 50-37 7-43 20-50 50C43 70 37 57 0 50 37 43 43 30 50 0Z"/></svg>
    <svg className="style-sparkle style-sparkle-three" viewBox="0 0 100 100"><path d="M50 0c7 30 13 43 50 50-37 7-43 20-50 50C43 70 37 57 0 50 37 43 43 30 50 0Z"/></svg>
  </div>
}

function ProcessSection() {
  const steps = [
    { number: '01', title: '조건 확인', description: '선물 대상과 상황을 확인해요.' },
    { number: '02', title: '취향 분석', description: '예산과 스타일을 반영해요.' },
    { number: '03', title: '선물 추천', description: '어울리는 선물을 찾아드려요.' },
  ]

  return <section className="process-section" aria-labelledby="process-title">
    <div className="process-decoration process-decoration-left" aria-hidden="true"><svg viewBox="0 0 180 150"><path d="M45 0c8 38 17 48 55 57-38 9-47 19-55 57C37 76 28 66-10 57 28 48 37 38 45 0Z"/><path d="M123 25c4 20 9 26 29 31-20 5-25 10-29 31-5-21-10-26-31-31 21-5 26-11 31-31Z"/><circle cx="159" cy="24" r="4"/><circle cx="7" cy="131" r="3"/><circle cx="75" cy="137" r="3"/></svg></div>
    <div className="process-decoration process-decoration-right" aria-hidden="true"><svg viewBox="0 0 180 150"><path d="M135 0c-8 38-17 48-55 57 38 9 47 19 55 57 8-38 17-48 55-57-38-9-47-19-55-57Z"/><path d="M57 25c-4 20-9 26-29 31 20 5 25 10 29 31 5-21 10-26 31-31-21-5-26-11-31-31Z"/><circle cx="21" cy="24" r="4"/><circle cx="173" cy="131" r="3"/><circle cx="105" cy="137" r="3"/></svg></div>
    <div className="process-heading"><h2 id="process-title">GIFT FINDER의 추천 과정</h2><p>당신에게 어울리는 선물을 찾는 세가지</p></div>
    <div className="process-grid">{steps.map((step) => <article className="process-card" key={step.number}><span className="process-number">{step.number}</span><h3>{step.title}</h3><p>{step.description}</p></article>)}</div>
  </section>
}

function RecommendationPage({ recipient, setRecipient, occasion, setOccasion, budget, setBudget, giftStyle, setGiftStyle, onSubmit }) {
  const chosenRecipient = recipients.find((item) => item.id === recipient)
  const chosenStyle = giftStyles.find((item) => item.id === giftStyle)
  const ready = Boolean(chosenRecipient && occasion && budget && chosenStyle)

  const submit = (event) => {
    event.preventDefault()
    if (ready) onSubmit()
  }

  return <main className="recommend-page" id="recommend-page">
    <div className="recommend-intro">
      <h1>어떤 선물을 찾고 있나요?</h1>
      <p>몇 가지 질문에 답하면 딱 맞는 선물을 추천해 드릴게요.</p>
    </div>
    <form className="recommend-form" onSubmit={submit}>
      <fieldset className="question-block recipient-question">
        <legend>1. 누구에게 선물하나요?</legend>
        <div className="quiz-recipient-grid">
          {recipients.map((item) => <button className={`quiz-recipient${recipient === item.id ? ' is-selected' : ''}`} type="button" key={item.id} onClick={() => setRecipient(item.id)} aria-pressed={recipient === item.id}>
            <img src={item.image} alt=""/>
            <span className="quiz-recipient-name">{item.name}</span>
            <span className="quiz-recipient-description">{item.description}</span>
          </button>)}
        </div>
      </fieldset>
      <fieldset className="question-block choice-question">
        <legend>2. 어떤 상황인가요?</legend>
        <p>선물하는 상황을 하나 선택해 주세요.</p>
        <div className="choice-list">
          {occasions.map((item) => <button className={`choice-pill${occasion === item ? ' is-selected' : ''}`} type="button" key={item} onClick={() => setOccasion(item)} aria-pressed={occasion === item}>{item}</button>)}
        </div>
      </fieldset>
      <fieldset className="question-block choice-question budget-question">
        <legend>3. 선물 예산은 얼마인가요?</legend>
        <div className="choice-list">
          {budgets.map((item) => <button className={`choice-pill${budget === item ? ' is-selected' : ''}`} type="button" key={item} onClick={() => setBudget(item)} aria-pressed={budget === item}>{item}</button>)}
        </div>
      </fieldset>
      <fieldset className="question-block style-question">
        <legend>4. 마지막으로 선물 스타일을 선택해주세요.</legend>
        <p>받는 사람에게 어울리는 선물 분위기를 골라보세요.</p>
        <div className="gift-style-grid">
          {giftStyles.map((item) => <button className={`gift-style-card${giftStyle === item.id ? ' is-selected' : ''}`} type="button" key={item.id} onClick={() => setGiftStyle(item.id)} aria-pressed={giftStyle === item.id}>
            <img src={item.image} alt=""/>
            <span>{item.name}</span>
          </button>)}
        </div>
        <GiftStyleDecorations/>
      </fieldset>
      <div className="recommend-actions">
        <button className="recommend-submit" type="submit" disabled={!ready}>선물 추천 받기 <span aria-hidden="true">→</span></button>
      </div>
    </form>
    <ProcessSection/>
  </main>
}

export default RecommendationPage
