import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './pages/HomeScreen'
import PortfolioScreen from './pages/PortfolioScreen'
import AppContainer from './components/containers/AppContainer'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import { AnimationProvider } from './context/animationContext'
import About from './pages/About'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <AnimationProvider>
      <LanguageProvider>
        <AppContainer>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/about' element={<About />} />
              <Route path='/portfolio' element={<PortfolioScreen />} />
            </Routes>
          </BrowserRouter>
          <Footer displayOnPc />
        </AppContainer>
      </LanguageProvider>
    </AnimationProvider>
  )
}

export default App
