import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Users, Wifi } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { fadeInDown, menuSlide } from '@/lib/animations/variants'

interface HeaderProps {
  className?: string
}

interface ServerStats {
  isOnline: boolean
  playerCount: number
  maxPlayers: number
}

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Features', href: '#features' },
  { name: 'Community', href: '#community' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Rules', href: '#rules' },
  { name: 'Contact', href: '#contact' },
]

export function Header({ className }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [serverStats, setServerStats] = useState<ServerStats>({
    isOnline: true,
    playerCount: 127,
    maxPlayers: 128,
  })

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Mock server stats update (replace with real API call)
  useEffect(() => {
    const interval = setInterval(() => {
      setServerStats(prev => ({
        ...prev,
        playerCount: Math.floor(Math.random() * 5) + 124, // Random between 124-128
      }))
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        })
      }
    }
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
      <motion.header
        variants={fadeInDown}
        initial="initial"
        animate="animate"
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled 
            ? 'bg-rnm-purple-900/95 backdrop-blur-md border-b border-rnm-purple-600/30 shadow-lg'
            : 'bg-transparent',
          className
        )}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <img 
                  src="/ChatGPT_Image_Apr_3_2025_11_23_50_AM.PNG" 
                  alt="RNM Logo" 
                  className="w-8 h-8 lg:w-10 lg:h-10 object-contain filter brightness-0 invert"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl lg:text-2xl font-bold font-gaming text-rnm-neutral-100">
                  RNM
                </h1>
                <p className="text-xs text-rnm-neutral-400 -mt-1">
                  GTA 5 Server
                </p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {navigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className="text-rnm-neutral-100 hover:text-rnm-purple-400 transition-colors duration-200 font-medium"
                >
                  {item.name}
                </button>
              ))}
            </nav>

            {/* Server Status & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Badge 
                  variant={serverStats.isOnline ? "online" : "offline"}
                  icon={<Wifi className="w-3 h-3" />}
                >
                  {serverStats.isOnline ? "Online" : "Offline"}
                </Badge>
                <Badge variant="outline" icon={<Users className="w-3 h-3" />}>
                  {serverStats.playerCount}/{serverStats.maxPlayers}
                </Badge>
              </div>
              
              <Button 
                variant="gaming" 
                size="md"
                href="https://discord.gg/rnm-server"
                external
                glow
              >
                Join Discord
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 rounded-md text-rnm-neutral-100 hover:bg-rnm-purple-900/50 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <motion.div
              variants={menuSlide}
              initial="initial"
              animate="animate"
              exit="exit"
              className="fixed top-0 left-0 bottom-0 w-80 max-w-[90vw] bg-rnm-purple-900/95 backdrop-blur-md border-r border-rnm-purple-600/30 z-50 lg:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-4 border-b border-rnm-purple-600/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                      <img 
                        src="/ChatGPT_Image_Apr_3_2025_11_23_50_AM.PNG" 
                        alt="RNM Logo" 
                        className="w-8 h-8 object-contain filter brightness-0 invert"
                      />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold font-gaming text-rnm-neutral-100">
                        RNM
                      </h2>
                      <p className="text-xs text-rnm-neutral-400 -mt-1">
                        GTA 5 Server
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 rounded-md text-rnm-neutral-100 hover:bg-rnm-purple-800/50 transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Mobile Navigation */}
                <nav className="flex-1 py-6">
                  <div className="space-y-1 px-4">
                    {navigation.map((item, index) => (
                      <motion.button
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        onClick={() => handleNavClick(item.href)}
                        className="block w-full text-left px-4 py-3 text-rnm-neutral-100 hover:text-rnm-purple-400 hover:bg-rnm-purple-800/30 rounded-lg transition-colors duration-200 font-medium"
                      >
                        {item.name}
                      </motion.button>
                    ))}
                  </div>
                </nav>

                {/* Mobile Footer */}
                <div className="p-4 border-t border-rnm-purple-600/30">
                  <div className="flex items-center justify-between mb-4">
                    <Badge 
                      variant={serverStats.isOnline ? "online" : "offline"}
                      icon={<Wifi className="w-3 h-3" />}
                    >
                      {serverStats.isOnline ? "Online" : "Offline"}
                    </Badge>
                    <Badge variant="outline" icon={<Users className="w-3 h-3" />}>
                      {serverStats.playerCount}/{serverStats.maxPlayers}
                    </Badge>
                  </div>
                  
                  <Button 
                    variant="gaming" 
                    size="lg"
                    href="https://discord.gg/rnm-server"
                    external
                    glow
                    className="w-full"
                  >
                    Join Discord
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Header
