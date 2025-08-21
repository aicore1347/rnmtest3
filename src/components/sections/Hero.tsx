import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Play, Users, Clock, Zap } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { 
  fadeInUp, 
  staggerContainer, 
  floating, 
  scaleOnHover 
} from '@/lib/animations/variants'

interface HeroProps {
  className?: string
}

interface ServerStats {
  playerCount: number
  maxPlayers: number
  uptime: string
  ping: number
  isOnline: boolean
}

const HeroStats = ({ stats }: { stats: ServerStats }) => {
  const statsItems = [
    {
      icon: <Users className="w-4 h-4" />,
      label: "Players Online",
      value: `${stats.playerCount}/${stats.maxPlayers}`,
      color: "text-rnm-success"
    },
    {
      icon: <Clock className="w-4 h-4" />,
      label: "Uptime",
      value: stats.uptime,
      color: "text-rnm-info"
    },
    {
      icon: <Zap className="w-4 h-4" />,
      label: "Ping",
      value: `${stats.ping}ms`,
      color: "text-rnm-warning"
    }
  ]

  return (
    <motion.div
      variants={staggerContainer}
      className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8"
    >
      {statsItems.map((item, index) => (
        <motion.div
          key={item.label}
          variants={fadeInUp}
          custom={index}
        >
          <Card 
            variant="glass" 
            size="sm" 
            className="text-center hover:border-rnm-purple-400/50 transition-all duration-300"
          >
            <div className="flex items-center justify-center space-x-2 mb-2">
              <span className={cn("flex-shrink-0", item.color)}>
                {item.icon}
              </span>
              <span className="text-xs text-rnm-neutral-400 uppercase tracking-wide">
                {item.label}
              </span>
            </div>
            <div className={cn("text-lg font-bold font-gaming", item.color)}>
              {item.value}
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}

export function Hero({ className }: HeroProps) {
  const [serverStats, setServerStats] = useState<ServerStats>({
    playerCount: 127,
    maxPlayers: 128,
    uptime: "99.8%",
    ping: 45,
    isOnline: true,
  })

  // Mock real-time server stats (replace with actual API call)
  useEffect(() => {
    const interval = setInterval(() => {
      setServerStats(prev => ({
        ...prev,
        playerCount: Math.floor(Math.random() * 8) + 120, // Random between 120-128
        ping: Math.floor(Math.random() * 20) + 35, // Random between 35-55ms
      }))
    }, 30000) // Update every 30 seconds

    return () => clearInterval(interval)
  }, [])

  const handleJoinServer = () => {
    // Add analytics tracking here
    window.open('https://discord.gg/rnm-server', '_blank', 'noopener,noreferrer')
  }

  const handleWatchTrailer = () => {
    // Scroll to gallery section or open video modal
    const gallerySection = document.getElementById('gallery')
    if (gallerySection) {
      gallerySection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section 
      id="home"
      className={cn(
        "relative min-h-screen flex items-center justify-center overflow-hidden",
        "bg-gradient-to-br from-rnm-purple-900 via-rnm-purple-800 to-rnm-neutral-900",
        className
      )}
    >
      {/* Background Image/Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/ChatGPT_Image_Apr_3_2025_11_23_50_AM.PNG')`,
            backgroundBlendMode: 'overlay'
          }}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-rnm-purple-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -5, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5,
          }}
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-rnm-purple-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="container relative z-10 px-4 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-4xl mx-auto"
        >
          {/* RNM Logo */}
          <motion.div
            variants={floating}
            className="flex justify-center mb-8"
          >
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-2xl bg-gradient-primary p-6 shadow-glow-lg">
                <img 
                  src="/ChatGPT_Image_Apr_3_2025_11_23_50_AM.PNG" 
                  alt="RNM Server Logo" 
                  className="w-full h-full object-contain filter brightness-0 invert"
                />
              </div>
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(139, 92, 246, 0.3)',
                    '0 0 40px rgba(139, 92, 246, 0.6)',
                    '0 0 20px rgba(139, 92, 246, 0.3)'
                  ]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 rounded-2xl"
              />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl lg:text-8xl font-black font-display mb-6 leading-tight"
          >
            <span className="block text-gradient-purple">
              Enter the Ultimate
            </span>
            <span className="block text-rnm-neutral-100 font-gaming">
              GTA 5 ROLEPLAY
            </span>
            <span className="block text-gradient-purple">
              Experience
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl lg:text-3xl text-rnm-neutral-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            Join <span className="text-rnm-purple-400 font-gaming font-bold">RNM Server</span> - 
            Where every story matters, every character counts, and every moment is unforgettable.
          </motion.p>

          {/* Server Status Badge */}
          <motion.div
            variants={fadeInUp}
            className="flex justify-center mb-8"
          >
            <Badge 
              variant={serverStats.isOnline ? "online" : "offline"}
              size="lg"
              className="text-sm px-6 py-2"
            >
              <div className="flex items-center space-x-2">
                <div className={cn(
                  "w-3 h-3 rounded-full",
                  serverStats.isOnline ? "bg-rnm-success animate-pulse" : "bg-rnm-danger"
                )} />
                <span>
                  {serverStats.isOnline ? "Server Online" : "Server Offline"}
                </span>
              </div>
            </Badge>
          </motion.div>

          {/* Call to Action Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button 
              variant="gaming" 
              size="xl"
              onClick={handleJoinServer}
              glow
              className="group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Users className="w-5 h-5" />
                <span>Join Our Discord</span>
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-rnm-purple-400 to-rnm-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                whileHover={{ scale: 1.05 }}
              />
            </Button>
            
            <Button 
              variant="outline" 
              size="xl"
              onClick={handleWatchTrailer}
              className="border-rnm-neutral-100 text-rnm-neutral-100 hover:bg-rnm-neutral-100 hover:text-rnm-purple-900 group"
            >
              <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Watch Trailer
            </Button>
          </motion.div>

          {/* Real-time Server Statistics */}
          <HeroStats stats={serverStats} />

          {/* Feature Highlights */}
          <motion.div
            variants={fadeInUp}
            className="mt-12"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Custom Jobs & Economy",
                "Active Community",
                "Professional Staff",
                "Regular Events",
                "Fair Rules",
                "24/7 Support"
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  variants={scaleOnHover}
                  whileHover="hover"
                  className="cursor-default"
                >
                  <Badge 
                    variant="outline" 
                    size="md"
                    className="bg-rnm-purple-900/30 border-rnm-purple-500/50 text-rnm-neutral-200 hover:bg-rnm-purple-500 hover:text-rnm-neutral-100 transition-all duration-300"
                  >
                    {feature}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ 
          opacity: 1, 
          y: [0, 10, 0],
        }}
        transition={{ 
          opacity: { delay: 2 },
          y: { 
            duration: 2, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2 text-rnm-neutral-400">
          <span className="text-sm uppercase tracking-wider">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-rnm-purple-400 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-rnm-purple-400 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
