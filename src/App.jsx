import { useState } from 'react'
import ErrorBoundary from "./components/ErrorBoundary";
import StickerShopLanding from './components/LandingPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ErrorBoundary>
      <StickerShopLanding />
    </ErrorBoundary>
  )
}

export default App
