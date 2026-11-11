import { useEffect, useState } from 'react'
import './App.css'
import './styles/HomePage.css'
import './styles/RecommendationPage.css'
import './styles/ResultsPage.css'
import './styles/WrappingPage.css'
import './styles/CardPage.css'
import './styles/responsive.css'
import Footer from './components/Footer.jsx'
import Header from './components/Header.jsx'
import { budgets, giftStyles, occasions, recipients } from './data/giftData.js'
import CardPage from './pages/CardPage.jsx'
import HomePage from './pages/HomePage.jsx'
import RecommendationPage from './pages/RecommendationPage.jsx'
import ResultsPage from './pages/ResultsPage.jsx'
import WrappingPage from './pages/WrappingPage.jsx'
import { appUrl } from './utils/assetUrl.js'

function readLocation() {
  const url = new URL(window.location.href)
  const basePath = import.meta.env.BASE_URL
  const appPath = url.pathname.startsWith(basePath)
    ? `/${url.pathname.slice(basePath.length)}`
    : url.pathname
  return {
    page: appPath === '/card' ? 'card' : appPath === '/wrapping' ? 'wrapping' : appPath === '/results' ? 'results' : appPath === '/recommend' ? 'recommend' : 'home',
    recipient: url.searchParams.get('recipient'),
    occasion: url.searchParams.get('occasion'),
    budget: url.searchParams.get('budget'),
    giftStyle: url.searchParams.get('style'),
  }
}

function App() {
  const initialLocation = readLocation()
  const [page, setPage] = useState(initialLocation.page)
  const [recipient, setRecipient] = useState(initialLocation.recipient)
  const [occasion, setOccasion] = useState(initialLocation.occasion)
  const [budget, setBudget] = useState(initialLocation.budget)
  const [giftStyle, setGiftStyle] = useState(initialLocation.giftStyle)

  useEffect(() => {
    const syncFromHistory = () => {
      const location = readLocation()
      setPage(location.page)
      setRecipient(location.recipient)
      setOccasion(location.occasion)
      setBudget(location.budget)
      setGiftStyle(location.giftStyle)
    }
    window.addEventListener('popstate', syncFromHistory)
    return () => window.removeEventListener('popstate', syncFromHistory)
  }, [])

  const goHome = (anchor = null) => {
    window.history.pushState({}, '', appUrl('/'))
    setPage('home')
    if (anchor) {
      window.setTimeout(() => document.getElementById(anchor)?.scrollIntoView({ behavior: 'smooth' }), 0)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  const goToRecommendation = (recipientId = null, criteria = null) => {
    const params = new URLSearchParams()
    if (recipientId) params.set('recipient', recipientId)
    if (criteria?.occasion) params.set('occasion', criteria.occasion)
    if (criteria?.budget) params.set('budget', criteria.budget)
    if (criteria?.giftStyle) params.set('style', criteria.giftStyle)
    const query = params.size ? `?${params.toString()}` : ''
    window.history.pushState({}, '', appUrl(`/recommend${query}`))
    setPage('recommend')
    setRecipient(recipientId)
    setOccasion(criteria?.occasion ?? null)
    setBudget(criteria?.budget ?? null)
    setGiftStyle(criteria?.giftStyle ?? null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToResults = () => {
    const params = new URLSearchParams({ recipient, occasion, budget, style: giftStyle })
    window.history.pushState({}, '', appUrl(`/results?${params.toString()}`))
    setPage('results')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToWrapping = () => {
    window.history.pushState({}, '', appUrl('/wrapping'))
    setPage('wrapping')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const goToCard = () => {
    window.history.pushState({}, '', appUrl('/card'))
    setPage('card')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const isRecommendation = page === 'recommend'
  const isResults = page === 'results'
  const isWrapping = page === 'wrapping'
  const isCard = page === 'card'

  return <div className={`app${isRecommendation ? ' app-recommend' : ''}${isResults ? ' app-results' : ''}${isWrapping ? ' app-wrapping' : ''}${isCard ? ' app-card' : ''}`} id="home">
    <Header onHome={goHome} onStart={() => goToRecommendation()} isRecommendation={isRecommendation} isWrapping={isWrapping}/>
    {isRecommendation
      ? <RecommendationPage recipient={recipient} setRecipient={setRecipient} occasion={occasion} setOccasion={setOccasion} budget={budget} setBudget={setBudget} giftStyle={giftStyle} setGiftStyle={setGiftStyle} onSubmit={goToResults}/>
      : isResults
        ? <ResultsPage recipient={recipient} occasion={occasion} budget={budget} giftStyle={giftStyle} onEdit={() => goToRecommendation(recipient, { occasion, budget, giftStyle })} onHome={goHome} onGuide={goToWrapping}/>
        : isWrapping
          ? <WrappingPage onHome={goHome} onCard={goToCard}/>
          : isCard
            ? <CardPage/>
            : <HomePage onStart={goToRecommendation}/>}
    {!isResults && !isWrapping && <Footer onStart={() => goToRecommendation()}/>}
  </div>
}

export default App
