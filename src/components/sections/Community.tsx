import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Star, Quote, Users, MessageCircle, Calendar, ExternalLink } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer, scaleOnHover } from '@/lib/animations/variants'

interface CommunityProps {
  className?: string
}

interface Testimonial {
  id: string
  playerName: string
  characterName: string
  quote: string
  rating: number
  avatar: string
  verified: boolean
  date: Date
}

interface DiscordStats {
  memberCount: number
  onlineCount: number
  recentMessages: Array<{
    author: string
    content: string
    timestamp: Date
  }>
}

const testimonials: Testimonial[] = [
  {
    id: '1',
    playerName: 'Alex_Rodriguez',
    characterName: 'Detective Martinez',
    quote: "RNM Server has the most immersive roleplay I've ever experienced. The custom jobs and realistic economy make every interaction meaningful.",
    rating: 5,
    avatar: '👮‍♂️',
    verified: true,
    date: new Date('2024-12-15'),
  },
  {
    id: '2',
    playerName: 'Sarah_Johnson',
    characterName: 'Dr. Emily Chen',
    quote: "The medical roleplay here is incredibly detailed. The staff support is amazing and the community is so welcoming to new players.",
    rating: 5,
    avatar: '👩‍⚕️',
    verified: true,
    date: new Date('2024-12-10'),
  },
  {
    id: '3',
    playerName: 'Mike_Wilson',
    characterName: 'Tony "The Wrench" Moretti',
    quote: "Best mechanic job system I've seen in any GTA RP server. The custom vehicles and realistic repair mechanics are top-notch!",
    rating: 5,
    avatar: '🔧',
    verified: true,
    date: new Date('2024-12-08'),
  },
  {
    id: '4',
    playerName: 'Jessica_Park',
    characterName: 'Luna Nightshade',
    quote: "The events and community activities keep the server fresh and exciting. There's always something happening!",
    rating: 5,
    avatar: '🎭',
    verified: true,
    date: new Date('2024-12-05'),
  },
]

const upcomingEvents = [
  {
    id: '1',
    title: 'Grand Prix Racing Championship',
    date: new Date('2024-12-30'),
    type: 'racing',
    participants: 47,
    maxParticipants: 64,
  },
  {
    id: '2',
    title: 'New Year\'s Eve Fireworks & Party',
    date: new Date('2024-12-31'),
    type: 'community',
    participants: 156,
    maxParticipants: 200,
  },
  {
    id: '3',
    title: 'Police vs Criminals Heist Event',
    date: new Date('2025-01-05'),
    type: 'roleplay',
    participants: 89,
    maxParticipants: 128,
  },
]

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card variant="testimonial" hover="lift" className="h-full">
        <CardHeader className="pb-4">
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center text-2xl">
                {testimonial.avatar}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <h4 className="font-semibold text-rnm-neutral-100">
                    {testimonial.playerName}
                  </h4>
                  {testimonial.verified && (
                    <Badge variant="success" size="sm">
                      Verified
                    </Badge>
                  )}
                </div>
                <p className="text-sm text-rnm-purple-400 font-gaming">
                  {testimonial.characterName}
                </p>
              </div>
            </div>
            <div className="flex">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-rnm-warning text-rnm-warning" />
              ))}
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <div className="relative">
            <Quote className="absolute -top-2 -left-2 w-8 h-8 text-rnm-purple-500/30" />
            <p className="text-rnm-neutral-300 leading-relaxed pl-6">
              {testimonial.quote}
            </p>
          </div>
          <div className="mt-4 text-xs text-rnm-neutral-500">
            {testimonial.date.toLocaleDateString()}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

function DiscordWidget({ stats }: { stats: DiscordStats }) {
  return (
    <Card variant="glass" className="overflow-hidden">
      <CardHeader className="border-b border-rnm-purple-600/30">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h3 className="font-bold text-rnm-neutral-100">Discord Community</h3>
              <p className="text-sm text-rnm-neutral-400">Join the conversation</p>
            </div>
          </div>
          <Badge variant="online">Live</Badge>
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold font-gaming text-rnm-purple-400 mb-1">
              {stats.memberCount.toLocaleString()}
            </div>
            <div className="text-xs text-rnm-neutral-400 uppercase tracking-wide">
              Members
            </div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold font-gaming text-rnm-success mb-1">
              {stats.onlineCount.toLocaleString()}
            </div>
            <div className="text-xs text-rnm-neutral-400 uppercase tracking-wide">
              Online
            </div>
          </div>
        </div>
        
        <div className="space-y-3 mb-6">
          <div className="text-sm font-semibold text-rnm-neutral-200 mb-2">
            Recent Activity
          </div>
          {stats.recentMessages.slice(0, 3).map((message, index) => (
            <div key={index} className="text-xs bg-rnm-neutral-800/50 rounded p-2">
              <div className="font-semibold text-rnm-purple-400 mb-1">
                {message.author}
              </div>
              <div className="text-rnm-neutral-300">
                {message.content}
              </div>
            </div>
          ))}
        </div>
        
        <Button 
          variant="gaming" 
          className="w-full"
          href="https://discord.gg/rnm-server"
          external
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Join Discord
        </Button>
      </CardContent>
    </Card>
  )
}

export function Community({ className }: CommunityProps) {
  const [discordStats, setDiscordStats] = useState<DiscordStats>({
    memberCount: 5247,
    onlineCount: 892,
    recentMessages: [
      {
        author: 'PlayerOne',
        content: 'Anyone want to start a racing crew? Looking for experienced drivers!',
        timestamp: new Date(),
      },
      {
        author: 'StaffMember',
        content: 'New update just went live! Check out the new medical system.',
        timestamp: new Date(),
      },
      {
        author: 'CommunityManager',
        content: 'Don\'t forget about tonight\'s community event at 8PM EST!',
        timestamp: new Date(),
      },
    ],
  })

  // Mock real-time Discord stats (replace with actual API)
  useEffect(() => {
    const interval = setInterval(() => {
      setDiscordStats(prev => ({
        ...prev,
        onlineCount: prev.onlineCount + Math.floor(Math.random() * 10) - 5,
        memberCount: prev.memberCount + Math.floor(Math.random() * 3),
      }))
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section 
      id="community"
      className={cn(
        "py-20 lg:py-32 bg-gradient-to-b from-rnm-purple-900/20 to-rnm-neutral-900",
        className
      )}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16 lg:mb-24"
        >
          <motion.div variants={fadeInUp} className="mb-6">
            <Badge variant="outline" size="lg" className="mb-4">
              Our Community
            </Badge>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-display mb-6"
          >
            <span className="text-gradient-purple">Join Thousands</span>
            <br />
            <span className="text-rnm-neutral-100 font-gaming">OF PLAYERS</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-rnm-neutral-300 max-w-3xl mx-auto leading-relaxed"
          >
            Be part of a thriving community where friendships are formed, stories are shared, 
            and epic adventures unfold every day.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {/* Community Stats & Discord */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <DiscordWidget stats={discordStats} />
            
            {/* Community Stats */}
            <Card variant="stats">
              <CardContent className="p-6 text-center">
                <h3 className="font-gaming font-bold text-lg mb-4 text-rnm-neutral-100">
                  Community Stats
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-2xl font-bold text-rnm-neutral-100 mb-1">
                      24/7
                    </div>
                    <div className="text-xs text-rnm-neutral-300 uppercase tracking-wide">
                      Active Support
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-rnm-neutral-100 mb-1">
                      99.8%
                    </div>
                    <div className="text-xs text-rnm-neutral-300 uppercase tracking-wide">
                      Server Uptime
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-rnm-neutral-100 mb-1">
                      50+
                    </div>
                    <div className="text-xs text-rnm-neutral-300 uppercase tracking-wide">
                      Unique Jobs
                    </div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-rnm-neutral-100 mb-1">
                      500+
                    </div>
                    <div className="text-xs text-rnm-neutral-300 uppercase tracking-wide">
                      Daily Players
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Testimonials */}
          <div className="lg:col-span-2">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                />
              ))}
            </motion.div>
          </div>
        </div>

        {/* Upcoming Events */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold font-gaming text-rnm-neutral-100 mb-4">
              Upcoming Events
            </h3>
            <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                variants={fadeInUp}
                custom={index}
              >
                <Card variant="feature" hover="scale" className="h-full">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-2 mb-3">
                      <Calendar className="w-5 h-5 text-rnm-purple-400" />
                      <Badge 
                        variant="outline" 
                        size="sm"
                        className="text-rnm-purple-400 border-rnm-purple-500/50"
                      >
                        {event.type}
                      </Badge>
                    </div>
                    
                    <h4 className="font-bold text-rnm-neutral-100 mb-2">
                      {event.title}
                    </h4>
                    
                    <p className="text-sm text-rnm-neutral-400 mb-4">
                      {event.date.toLocaleDateString('en-US', { 
                        weekday: 'long', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-1 text-xs text-rnm-neutral-400">
                        <Users className="w-3 h-3" />
                        <span>
                          {event.participants}/{event.maxParticipants}
                        </span>
                      </div>
                      <Badge variant="success" size="sm">
                        {Math.round((event.participants / event.maxParticipants) * 100)}% Full
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-rnm-purple-900/50 to-rnm-purple-800/50 p-8 lg:p-12 rounded-2xl border border-rnm-purple-600/30">
            <h3 className="text-2xl md:text-3xl font-bold font-gaming text-rnm-neutral-100 mb-4">
              Ready to Make Friends?
            </h3>
            <p className="text-lg text-rnm-neutral-300 mb-6 max-w-2xl mx-auto">
              Join our Discord community and connect with players from around the world. 
              Share stories, find crews, and stay updated on the latest server news.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="gaming" 
                size="lg"
                href="https://discord.gg/rnm-server"
                external
                glow
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Join Discord
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => {
                  const element = document.getElementById('features')
                  element?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Learn More
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Community
