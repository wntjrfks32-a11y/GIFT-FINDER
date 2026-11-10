import './App.css'

const recipients = [
  { id: 'love', name: '연인', description: '사랑하는 사람에게', scene: 'couple' },
  { id: 'friend', name: '친구', description: '소중한 친구에게', scene: 'friend' },
  { id: 'family', name: '가족', description: '고마운 가족에게', scene: 'family' },
  { id: 'work', name: '직장 동료', description: '함께 일하는 사람에게', scene: 'work' },
]

function GiftIcon() {
  return <svg aria-hidden="true" viewBox="0 0 44 44" fill="none"><rect x="4" y="16" width="36" height="23" rx="3"/><path d="M3 13a2 2 0 0 1 2-2h34a2 2 0 0 1 2 2v6H3v-6ZM22 11v28M22 11c-8 0-12-1-12-5a5 5 0 0 1 5-5c4 0 7 5 7 10Zm0 0c8 0 12-1 12-5a5 5 0 0 0-5-5c-4 0-7 5-7 10Z"/></svg>
}

function Sparkle({ className = '' }) {
  return <svg aria-hidden="true" className={className} viewBox="0 0 32 32" fill="none"><path d="m16 1 2.5 10 9-5.5-5.5 9L32 17l-10 2 5.5 9-9-5.5L16 32l-2-9.5L5 28l5.5-9L1 17l9.5-2.5L5 6l9 5.5L16 1Z" stroke="currentColor" strokeWidth="1.4"/></svg>
}

function HeroArtwork() {
  return <svg className="hero-art" viewBox="0 0 600 450" role="img" aria-label="붉은 리본을 두른 선물과 장미꽃">
    <defs>
      <linearGradient id="backdrop" x2="0" y2="1"><stop stopColor="#e9cbb5"/><stop offset="1" stopColor="#c9997c"/></linearGradient>
      <linearGradient id="box" x2="1" y2="1"><stop stopColor="#fff4e5"/><stop offset="1" stopColor="#e9c8a9"/></linearGradient>
      <linearGradient id="ribbon" x2="1" y2="1"><stop stopColor="#a72c32"/><stop offset=".5" stopColor="#671b25"/><stop offset="1" stopColor="#9a252e"/></linearGradient>
      <filter id="shadow"><feGaussianBlur stdDeviation="12"/></filter>
    </defs>
    <rect width="600" height="450" fill="url(#backdrop)"/>
    <path d="M0 0h600v450H0z" fill="#fff1df" opacity=".18"/>
    <path d="M0 0 280 0 600 280v90L0 70Z" fill="#fff5e9" opacity=".24"/>
    <ellipse cx="300" cy="383" rx="247" ry="28" fill="#754a3d" opacity=".22" filter="url(#shadow)"/>
    <g>
      <path d="M75 258h218v126H75z" fill="url(#box)"/><path d="M75 258h218v19H75z" fill="#fff7e9"/><path d="M175 258h24v126h-24z" fill="url(#ribbon)"/>
      <path d="M184 259c-8-42-76-42-74-12 2 24 46 27 74 12Zm7 0c7-42 73-42 71-12-2 24-45 27-71 12Z" fill="url(#ribbon)"/><path d="M187 260 143 322l25 9 26-69Zm0 0 49 64-27 8-25-69Z" fill="#7c2028"/><circle cx="187" cy="258" r="12" fill="#b53a3a"/>
      <path d="M230 168h284v184H230z" fill="url(#box)"/><path d="M230 168h284v25H230z" fill="#fff6e8"/><path d="M361 168h29v184h-29z" fill="url(#ribbon)"/>
      <path d="M375 169c-12-51-86-48-82-15 3 27 49 31 82 15Zm5 0c10-51 83-48 80-15-3 27-48 31-80 15Z" fill="url(#ribbon)"/><path d="m377 170-52 74 28 12 34-81Zm0 0 57 77-29 10-34-82Z" fill="#70202a"/><circle cx="378" cy="168" r="14" fill="#bc4242"/>
    </g>
    <g fill="#fff0d7" stroke="#f8e8d2" strokeWidth="2">
      <path d="M478 228q-18-33 6-57 23 18 8 46 25-29 45-12-4 28-42 35 37-6 51 16-20 22-55 0 18 30-4 47-25-12-13-46-15 29-43 15 4-29 35-39-30 10-43-12 17-18 55 7Z"/><path d="M535 189q-10-22 7-34 16 14 4 30 18-17 29-2-6 19-31 22 22-1 29 16-15 11-33-3 11 19-5 28-15-9-7-29-13 18-30 8 4-20 25-26-22 4-28-13 13-13 40 3Z"/>
    </g>
    <g fill="#9d242c"><circle cx="474" cy="276" r="17"/><circle cx="520" cy="299" r="19"/><circle cx="552" cy="251" r="15"/></g>
    <g fill="#c84948"><path d="M466 276q10-20 20 0-10 20-20 0Zm46 23q11-23 21 0-10 23-21 0Zm34-48q9-18 18 0-9 18-18 0Z"/></g>
    <g stroke="#7b8060" strokeWidth="3" fill="none"><path d="M474 294q-10 56-47 81m93-57q-6 36-32 62m65-112q-2 67-41 108"/><path d="M439 348q-22-25-32-8 12 20 32 8Zm50 3q24-21 32-4-13 19-32 4Zm37-45q-22-20-29-3 11 19 29 3Z"/></g>
  </svg>
}

function RecipientArt({ scene }) {
  const palette = {
    couple: ['#fff0d8', '#edb77c', '#6a9367', '#bd4942'],
    friend: ['#e8dfd0', '#303438', '#d69b71', '#426b44'],
    family: ['#f3dfcf', '#dfa095', '#59796b', '#bd3c3c'],
    work: ['#f6e4cf', '#d9684e', '#376c69', '#e1a43d'],
  }[scene]
  return <svg viewBox="0 0 280 250" role="img" aria-label={`${scene} 선물을 주고받는 모습`} className={`recipient-art ${scene}`}>
    <rect width="280" height="250" fill={palette[0]}/>
    <circle cx="140" cy="96" r="82" fill="#fff8ec" opacity=".46"/>
    <path d="M0 218q70-45 140 0t140 0v32H0Z" fill={palette[1]} opacity=".45"/>
    <g className="person person-left" fill={palette[1]}>
      <path d="M27 250q1-71 48-78 50 7 52 78Z"/><circle cx="76" cy="100" r="32" fill="#f2b99b"/><path d="M44 100q-8-43 33-46 38 2 34 49l-8-22q-28 2-50-13l-9 31Z"/>
      <path d="M52 130q24 18 47 0l14 16-16 16-13-10-13 11-19-15Z" fill="#fff2df"/>
    </g>
    <g className="person person-right" fill={palette[2]}>
      <path d="M159 250q0-75 47-78 51 4 55 78Z"/><circle cx="207" cy="99" r="31" fill="#eab092"/><path d="M177 99q-6-43 34-45 39 2 28 50-10-22-18-27-18 10-40 8Z"/>
      <path d="M183 130q25 19 49 0l14 18-19 14-14-10-14 10-19-16Z" fill="#fff0de"/>
    </g>
    <g className="present">
      <path d="M102 153h78v58h-78z" fill={palette[3]}/><path d="M96 144h90v16H96z" fill="#fff0d6"/><path d="M136 144h15v67h-15z" fill="#f6cf8d"/><path d="M143 144q-35-4-26-19 11-12 26 19Zm2 0q35-4 26-19-11-12-26 19Z" fill={palette[3]}/>
    </g>
    <path d="M112 171q-17-11-28-7m82 5q18-10 29-6" stroke="#eab092" strokeWidth="9" strokeLinecap="round"/>
    <g fill="#d9945b"><circle cx="27" cy="52" r="3"/><circle cx="254" cy="77" r="3"/><circle cx="42" cy="188" r="2"/></g>
  </svg>
}

function App() {
  return <div className="app" id="home">
    <header className="header">
      <a className="brand" href="#home" aria-label="Gift Finder 홈"><GiftIcon/><span>GIFT FINDER</span></a>
      <nav className="nav" aria-label="메인 메뉴"><a href="#gift-finder">선물 찾기</a><a href="#recipients">인기 선물</a><a href="#recipients">선물 가이드</a></nav>
    </header>
    <main>
      <section className="hero" id="gift-finder">
        <div className="hero-copy">
          <div className="headline-wrap"><Sparkle className="sparkle sparkle-left"/><h1>마음을 전하는<span>가장 좋은 방법</span></h1><Sparkle className="sparkle sparkle-right"/></div>
          <p>소중한 사람을 위한 특별한 선물을 찾아보세요.</p>
          <a className="primary-button" href="#recipients">나에게 맞는 선물 찾기 <span aria-hidden="true">→</span></a>
        </div>
        <div className="hero-visual"><HeroArtwork/><svg aria-hidden="true" className="heart-doodle" viewBox="0 0 180 86" fill="none"><path d="M8 70c20 2 34-14 54-20C31 34 47 4 64 8c15 4 15 22 22 35 8-16 15-31 30-29 22 3 12 31-4 42 16 8 38 17 58 8" stroke="currentColor" strokeWidth="5" strokeLinecap="round"/><path d="M72 42c-14 13-28 21-47 27 32-1 48-6 63-22" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg></div>
      </section>
      <section className="recipients" id="recipients"><h2>누구에게 선물을 하고 싶나요?</h2><div className="recipient-grid">{recipients.map((recipient) => <a className="recipient-card" href="#gift-finder" key={recipient.id}>{recipient.id === 'love' ? <img className="recipient-art" src="/images/couple.png" alt="연인에게 선물을 건네는 모습"/> : <RecipientArt scene={recipient.scene}/>}<span className="recipient-name">{recipient.name}</span><span className="recipient-description">{recipient.description}</span></a>)}</div><div className="flower-decoration" aria-hidden="true"><span className="flower-head">✿</span><span className="flower-stem"/><span className="flower-bow">∞</span></div></section>
    </main>
  </div>
}

export default App
