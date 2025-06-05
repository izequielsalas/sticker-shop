import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import StickerShopLanding from './components/LandingPage'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <StickerShopLanding />
  )
}

export default App
