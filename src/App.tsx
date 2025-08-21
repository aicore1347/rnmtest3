import React from 'react'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'

function App() {
  return (
    <div className="min-h-screen bg-rnm-purple-900">
      <Header />
      <main>
        <Hero />
        <Features />
      </main>
    </div>
  )
}

export default App
