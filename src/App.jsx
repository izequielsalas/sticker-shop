import { useState } from 'react';
import ErrorBoundary from "./components/ErrorBoundary";
import StickerShopLanding from './components/LandingPage';
import { Analytics } from '@vercel/analytics/react';
import { CartProvider } from '../src/components/CartProvider';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <><ErrorBoundary>
      <CartProvider> 
        <StickerShopLanding />
      </CartProvider>
    </ErrorBoundary><Analytics></Analytics></>
    
  )
}

export default App
