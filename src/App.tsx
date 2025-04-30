import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'
import { LanguageProvider } from './context/LanguageContext'
import { I18nextProvider } from 'react-i18next'
import i18n from './i18n'
import './App.css'

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <LanguageProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>
      </LanguageProvider>
    </I18nextProvider>
  )
}

export default App
