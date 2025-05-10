import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import Hero from './components/Hero'
import { Content } from './components/Content'
import { GameSection } from './components/GameSection'
import { Form } from './components/Form'
import Footer from './components/Footer'
import LearnMore from './components/LearnMore'

const Home = () => {
  return (
    <>
      <Hero />
      <Content />
      <GameSection />
      <Form />
      <Footer />
    </>
  )
}

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn-more" element={<LearnMore />} />
      </Routes>
    </BrowserRouter>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
