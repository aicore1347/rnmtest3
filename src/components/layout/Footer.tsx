import React from 'react'
import { motion } from 'framer-motion'
import { 
  MessageCircle, 
  Youtube, 
  Twitter, 
  Twitch,
  Mail,
  Shield,
  FileText,
  ExternalLink,
  Users,
  Server,
  Heart
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'
import { fadeInUp, staggerContainer } from '@/lib/animations/variants'

interface FooterProps {
  className?: string
}

const socialLinks = [
  {
    name: 'Discord',
    href: 'https://discord.gg/rnm-server',
    icon: <MessageCircle className="w-5 h-5" />,
    color: 'hover:text-indigo-400',
  },
  {
    name: 'YouTube',
    href: 'https://youtube.com/@rnm-server',
    icon: <Youtube className="w-5 h-5" />,
    color: 'hover:text-red-400',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/rnm_server',
    icon: <Twitter className="w-5 h-5" />,
    color: 'hover:text-blue-400',
  },
  {
    name: 'Twitch',
    href: 'https://twitch.tv/rnm-server',
    icon: <Twitch className="w-5 h-5" />,
    color: 'hover:text-purple-400',
  },
]

const quickLinks = [
  { name: 'Server Rules', href: '#rules', icon: <Shield className="w-4 h-4" /> },
  { name: 'How to Join', href: '#join', icon: <Users className="w-4 h-4" /> },
  { name: 'Server Info', href: '#info', icon: <Server className="w-4 h-4" /> },
  { name: 'Contact Us', href: '#contact', icon: <Mail className="w-4 h-4" /> },
]

const legalLinks = [
  { name: 'Terms of Service', href: '/terms' },
  { name: 'Privacy Policy', href: '/privacy' },
  { name: 'Community Guidelines', href: '/guidelines' },
  { name: 'DMCA Policy', href: '/dmca' },
]

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear()

  const handleNavClick = (href: string) => {
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

  return (
    <footer 
      className={cn(
        "bg-gradient-to-t from-rnm-neutral-900 to-rnm-purple-900/20 border-t border-rnm-purple-600/30",
        className
      )}
    >
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-16"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center">
                <img 
                  src="/ChatGPT_Image_Apr_3_2025_11_23_50_AM.PNG" 
                  alt="RNM Logo" 
                  className="w-8 h-8 object-contain filter brightness-0 invert"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold font-gaming text-rnm-neutral-100">
                  RNM Server
                </h3>
                <p className="text-sm text-rnm-neutral-400">
                  GTA 5 Roleplay
                </p>
              </div>
            </div>
            
            <p className="text-rnm-neutral-300 leading-relaxed mb-6">
              Experience the ultimate GTA 5 roleplay server with immersive gameplay, 
              professional staff, and an amazing community.
            </p>
            
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="online" size="sm">
                Server Online
              </Badge>
              <Badge variant="outline" size="sm">
                127/128 Players
              </Badge>
            </div>
            
            <Button 
              variant="gaming" 
              size="sm"
              href="https://discord.gg/rnm-server"
              external
              className="w-full"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Join Now
            </Button>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h4 className="text-lg font-bold font-gaming text-rnm-neutral-100 mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center space-x-2 text-rnm-neutral-400 hover:text-rnm-purple-400 transition-colors duration-200 group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      {link.icon}
                    </span>
                    <span>{link.name}</span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h4 className="text-lg font-bold font-gaming text-rnm-neutral-100 mb-6">
              Connect With Us
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "flex items-center space-x-3 text-rnm-neutral-400 transition-colors duration-200 group",
                    social.color
                  )}
                >
                  <span className="group-hover:scale-110 transition-transform">
                    {social.icon}
                  </span>
                  <span>{social.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
            
            <div className="mt-6 p-4 bg-rnm-purple-900/30 rounded-lg border border-rnm-purple-600/30">
              <div className="flex items-center space-x-2 mb-2">
                <MessageCircle className="w-4 h-4 text-rnm-purple-400" />
                <span className="text-sm font-semibold text-rnm-neutral-200">
                  Discord Community
                </span>
              </div>
              <p className="text-xs text-rnm-neutral-400 mb-2">
                5,247+ members online
              </p>
              <Badge variant="success" size="sm">
                Very Active
              </Badge>
            </div>
          </motion.div>

          {/* Server Info & Contact */}
          <motion.div variants={fadeInUp} className="lg:col-span-1">
            <h4 className="text-lg font-bold font-gaming text-rnm-neutral-100 mb-6">
              Server Information
            </h4>
            
            <div className="space-y-4 mb-6">
              <div>
                <div className="text-sm font-semibold text-rnm-neutral-200 mb-1">
                  Server Address
                </div>
                <div className="text-xs text-rnm-neutral-400 font-mono bg-rnm-neutral-800/50 p-2 rounded">
                  connect rnm-server.com
                </div>
              </div>
              
              <div>
                <div className="text-sm font-semibold text-rnm-neutral-200 mb-1">
                  Support Email
                </div>
                <a 
                  href="mailto:support@rnm-server.com"
                  className="text-xs text-rnm-purple-400 hover:text-rnm-purple-300 transition-colors"
                >
                  support@rnm-server.com
                </a>
              </div>
              
              <div>
                <div className="text-sm font-semibold text-rnm-neutral-200 mb-1">
                  Server Uptime
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-rnm-success rounded-full animate-pulse" />
                  <span className="text-xs text-rnm-success">99.8% (30 days)</span>
                </div>
              </div>
            </div>
            
            <div className="p-3 bg-rnm-success/10 border border-rnm-success/30 rounded-lg">
              <div className="flex items-center space-x-2 text-rnm-success text-sm">
                <Shield className="w-4 h-4" />
                <span className="font-semibold">Secure & Protected</span>
              </div>
              <p className="text-xs text-rnm-neutral-400 mt-1">
                Advanced anti-cheat and professional moderation
              </p>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="border-t border-rnm-purple-600/30 py-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-center md:text-left">
              <p className="text-sm text-rnm-neutral-400">
                © {currentYear} RNM Server. All rights reserved.
              </p>
              <p className="text-xs text-rnm-neutral-500 mt-1">
                Built with <Heart className="w-3 h-3 inline text-rnm-danger" /> by the RNM Team
              </p>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs">
              {legalLinks.map((link, index) => (
                <React.Fragment key={link.name}>
                  <a
                    href={link.href}
                    className="text-rnm-neutral-400 hover:text-rnm-purple-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-rnm-neutral-600">•</span>
                  )}
                </React.Fragment>
              ))}
            </div>
            
            {/* Disclaimer */}
            <div className="text-center md:text-right">
              <p className="text-xs text-rnm-neutral-500">
                Not affiliated with Rockstar Games
              </p>
              <div className="flex items-center space-x-2 mt-1">
                <FileText className="w-3 h-3 text-rnm-neutral-500" />
                <span className="text-xs text-rnm-neutral-500">
                  FiveM Community Server
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
