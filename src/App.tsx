import React, { Suspense } from 'react'
import ErrorBoundary from './components/common/ErrorBoundary'
import LoadingSpinner from './components/common/LoadingSpinner'
import Header from './components/layout/Header'
import Hero from './components/sections/Hero'
import Features from './components/sections/Features'
import Community from './components/sections/Community'
import Footer from './components/layout/Footer'

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-rnm-purple-900">
        <Header />
        <main>
          <Suspense fallback={<LoadingSpinner fullScreen text="Loading RNM Server..." />}>
            <Hero />
            <Features />
            <Community />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
