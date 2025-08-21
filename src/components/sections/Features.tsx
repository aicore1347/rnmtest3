import React from 'react'
import { motion } from 'framer-motion'
import { 
  Users, 
  Briefcase, 
  DollarSign, 
  Home, 
  Calendar,
  Shield,
  Zap,
  Settings,
  Trophy
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer, scaleOnHover } from '@/lib/animations/variants'

interface FeatureProps {
  className?: string
}

interface Feature {
  id: string
  title: string
  description: string
  icon: React.ReactNode
  category: 'roleplay' | 'community' | 'technical'
  benefits: string[]
  highlight?: boolean
}

const features: Feature[] = [
  {
    id: 'custom-jobs',
    title: 'Custom Jobs & Careers',
    description: 'Dive into realistic roleplay with our extensive job system featuring unique mechanics and progression.',
    icon: <Briefcase className="w-6 h-6" />,
    category: 'roleplay',
    benefits: ['50+ Unique Jobs', 'Skill Progression', 'Realistic Mechanics', 'Custom Missions'],
    highlight: true,
  },
  {
    id: 'dynamic-economy',
    title: 'Dynamic Economy',
    description: 'Experience a living economy with player-driven markets, businesses, and financial systems.',
    icon: <DollarSign className="w-6 h-6" />,
    category: 'roleplay',
    benefits: ['Player Businesses', 'Stock Market', 'Banking System', 'Investments'],
  },
  {
    id: 'property-system',
    title: 'Property Ownership',
    description: 'Own and customize your dream home, business, or warehouse with our advanced property system.',
    icon: <Home className="w-6 h-6" />,
    category: 'roleplay',
    benefits: ['Custom Interiors', 'Security Systems', 'Rental Income', 'Property Trading'],
  },
  {
    id: 'community-events',
    title: 'Regular Events',
    description: 'Join exciting server-wide events, competitions, and community gatherings every week.',
    icon: <Calendar className="w-6 h-6" />,
    category: 'community',
    benefits: ['Weekly Races', 'RP Events', 'Competitions', 'Community Meetings'],
    highlight: true,
  },
  {
    id: 'professional-staff',
    title: 'Professional Staff',
    description: 'Our experienced and fair staff team ensures a quality roleplay environment for everyone.',
    icon: <Shield className="w-6 h-6" />,
    category: 'community',
    benefits: ['24/7 Support', 'Fair Moderation', 'Quick Response', 'Experienced Team'],
  },
  {
    id: 'active-community',
    title: 'Active Community',
    description: 'Join thousands of active players in our welcoming and diverse gaming community.',
    icon: <Users className="w-6 h-6" />,
    category: 'community',
    benefits: ['5000+ Members', 'Global Players', 'Friendly Environment', 'Discord Community'],
  },
  {
    id: 'server-performance',
    title: 'Optimized Performance',
    description: 'Enjoy lag-free gameplay with our high-performance servers and optimized scripts.',
    icon: <Zap className="w-6 h-6" />,
    category: 'technical',
    benefits: ['99.9% Uptime', 'Low Latency', 'Optimized Scripts', 'Regular Updates'],
    highlight: true,
  },
  {
    id: 'custom-features',
    title: 'Custom Modifications',
    description: 'Experience unique gameplay with our custom scripts, vehicles, and game mechanics.',
    icon: <Settings className="w-6 h-6" />,
    category: 'technical',
    benefits: ['Custom Vehicles', 'Unique Scripts', 'Enhanced Graphics', 'Quality Mods'],
  },
  {
    id: 'anti-cheat',
    title: 'Anti-Cheat Protection',
    description: 'Play fair with our advanced anti-cheat system protecting the integrity of roleplay.',
    icon: <Trophy className="w-6 h-6" />,
    category: 'technical',
    benefits: ['Advanced Detection', 'Fair Play', 'Instant Bans', 'Regular Monitoring'],
  },
]

const categoryColors = {
  roleplay: 'text-rnm-purple-400 bg-rnm-purple-900/30 border-rnm-purple-500/50',
  community: 'text-rnm-success bg-green-900/30 border-green-500/50',
  technical: 'text-rnm-info bg-blue-900/30 border-blue-500/50',
}

const categoryLabels = {
  roleplay: 'Roleplay Systems',
  community: 'Community Features',
  technical: 'Technical Excellence',
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.div
      variants={fadeInUp}
      custom={index}
      whileInView="animate"
      viewport={{ once: true, margin: "-50px" }}
    >
      <Card
        variant="feature"
        hover="scale"
        className={cn(
          "h-full relative overflow-hidden group",
          feature.highlight && "ring-2 ring-rnm-purple-500/50"
        )}
      >
        {feature.highlight && (
          <div className="absolute top-4 right-4">
            <Badge variant="primary" size="sm">
              Popular
            </Badge>
          </div>
        )}
        
        <CardHeader className="pb-4">
          <div className="flex items-center space-x-3 mb-3">
            <div className={cn(
              "p-3 rounded-lg transition-all duration-300 group-hover:scale-110",
              categoryColors[feature.category]
            )}>
              {feature.icon}
            </div>
            <Badge 
              variant="outline" 
              size="sm"
              className={categoryColors[feature.category]}
            >
              {categoryLabels[feature.category]}
            </Badge>
          </div>
          
          <CardTitle className="text-xl mb-2 group-hover:text-rnm-purple-400 transition-colors">
            {feature.title}
          </CardTitle>
          <CardDescription className="text-rnm-neutral-300 leading-relaxed">
            {feature.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          <div className="space-y-2">
            {feature.benefits.map((benefit, benefitIndex) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + benefitIndex * 0.05 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2 text-sm text-rnm-neutral-400"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-rnm-purple-400 flex-shrink-0" />
                <span>{benefit}</span>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Features({ className }: FeatureProps) {
  const categorizedFeatures = {
    roleplay: features.filter(f => f.category === 'roleplay'),
    community: features.filter(f => f.category === 'community'),
    technical: features.filter(f => f.category === 'technical'),
  }

  return (
    <section 
      id="features"
      className={cn(
        "py-20 lg:py-32 bg-gradient-to-b from-rnm-neutral-900 to-rnm-purple-900/20",
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
              Server Features
            </Badge>
          </motion.div>
          
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black font-display mb-6"
          >
            <span className="text-gradient-purple">Why Choose</span>
            <br />
            <span className="text-rnm-neutral-100 font-gaming">RNM SERVER?</span>
          </motion.h2>
          
          <motion.p
            variants={fadeInUp}
            className="text-xl text-rnm-neutral-300 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the most advanced and immersive GTA 5 roleplay server with 
            cutting-edge features, an active community, and professional management.
          </motion.p>
        </motion.div>

        {/* Features Grid by Category */}
        <div className="space-y-16 lg:space-y-24">
          {Object.entries(categorizedFeatures).map(([category, categoryFeatures]) => (
            <motion.div
              key={category}
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Category Header */}
              <motion.div variants={fadeInUp} className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold font-gaming text-rnm-neutral-100 mb-4">
                  {categoryLabels[category as keyof typeof categoryLabels]}
                </h3>
                <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full" />
              </motion.div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {categoryFeatures.map((feature, index) => (
                  <FeatureCard
                    key={feature.id}
                    feature={feature}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center mt-16 lg:mt-24"
        >
          <div className="bg-gradient-primary p-8 lg:p-12 rounded-2xl">
            <h3 className="text-2xl md:text-3xl font-bold font-gaming text-rnm-neutral-100 mb-4">
              Ready to Start Your Story?
            </h3>
            <p className="text-lg text-rnm-neutral-200 mb-6 max-w-2xl mx-auto">
              Join thousands of players in the most immersive GTA 5 roleplay experience. 
              Your adventure awaits!
            </p>
            <motion.a
              href="https://discord.gg/rnm-server"
              target="_blank"
              rel="noopener noreferrer"
              variants={scaleOnHover}
              whileHover="hover"
              whileTap="tap"
              className="inline-flex items-center space-x-2 bg-rnm-neutral-100 text-rnm-purple-900 px-8 py-4 rounded-lg font-bold text-lg hover:bg-rnm-neutral-200 transition-colors shadow-glow"
            >
              <Users className="w-5 h-5" />
              <span>Join Our Community</span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
