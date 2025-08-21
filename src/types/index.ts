/**
 * Server status and statistics types
 */
export interface ServerStatus {
  isOnline: boolean
  playerCount: number
  maxPlayers: number
  queueCount: number
  uptime: string
  ping: number
  lastUpdated: string
}

/**
 * Discord integration types
 */
export interface DiscordStats {
  memberCount: number
  onlineCount: number
  serverName: string
  iconUrl: string
  recentMessages: DiscordMessage[]
}

export interface DiscordMessage {
  id: string
  author: string
  content: string
  timestamp: Date
  channel: string
  avatar?: string
}

/**
 * Player testimonial types
 */
export interface Testimonial {
  id: string
  playerName: string
  characterName: string
  quote: string
  rating: number
  avatar: string
  verified: boolean
  date: Date
}

/**
 * Server features types
 */
export interface ServerFeature {
  id: string
  title: string
  description: string
  icon: string
  category: 'roleplay' | 'community' | 'technical'
  benefits: string[]
}

/**
 * Gallery media types
 */
export interface GalleryItem {
  id: string
  type: 'image' | 'video'
  url: string
  thumbnail?: string
  alt: string
  caption?: string
  category: string
  date: Date
}

/**
 * Staff member types
 */
export interface StaffMember {
  id: string
  name: string
  role: string
  avatar: string
  bio?: string
  discordId?: string
  joinDate: Date
  isActive: boolean
}

/**
 * Server events types
 */
export interface ServerEvent {
  id: string
  title: string
  description: string
  dateTime: Date
  type: 'community' | 'racing' | 'roleplay' | 'special'
  participants: number
  maxParticipants?: number
  images: string[]
  isUpcoming: boolean
}

/**
 * VIP Package types for monetization
 */
export interface VIPPackage {
  id: string
  name: string
  price: number
  currency: string
  duration: number // in days
  features: string[]
  popular?: boolean
  description: string
  stripePriceId?: string
}

/**
 * User types
 */
export interface User {
  id: string
  username: string
  email: string
  avatar?: string
  discordId?: string
  steamId?: string
  joinDate: Date
  isVip: boolean
  vipExpiry?: Date
  role: 'player' | 'moderator' | 'admin' | 'owner'
}

/**
 * Navigation menu types
 */
export interface NavItem {
  label: string
  href: string
  icon?: string
  children?: NavItem[]
  external?: boolean
}

/**
 * Page metadata types for SEO
 */
export interface PageMetadata {
  title: string
  description: string
  keywords: string[]
  ogImage: string
  twitterCard: string
  canonicalUrl: string
}

/**
 * API Response types
 */
export interface ApiResponse<T = any> {
  success: boolean
  data?: T
  error?: string
  message?: string
}

export interface ApiError {
  code: string
  message: string
  details?: any
}

/**
 * Form validation types
 */
export interface FormErrors {
  [key: string]: string | string[]
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

/**
 * Analytics event types
 */
export interface AnalyticsEvent {
  event: string
  category: string
  label?: string
  value?: number
  custom_parameters?: Record<string, any>
}

/**
 * Theme and appearance types
 */
export type Theme = 'dark' | 'light' | 'system'

/**
 * Device and responsive types
 */
export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export interface DeviceInfo {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
  userAgent: string
  screenWidth: number
  screenHeight: number
}

/**
 * Component prop types
 */
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
  id?: string
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  disabled?: boolean
  loading?: boolean
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
  href?: string
  external?: boolean
}

export interface CardProps extends BaseComponentProps {
  variant?: 'default' | 'feature' | 'testimonial' | 'stats'
  hover?: boolean
  glow?: boolean
}

/**
 * Animation and motion types
 */
export interface AnimationConfig {
  duration?: number
  delay?: number
  ease?: string | number[]
  repeat?: number
  yoyo?: boolean
}

/**
 * Configuration types
 */
export interface SiteConfig {
  name: string
  description: string
  url: string
  ogImage: string
  links: {
    discord: string
    twitter: string
    youtube: string
    github?: string
  }
  creator: string
}

/**
 * Utility types
 */
export type Optional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
export type RequiredFields<T, K extends keyof T> = T & Required<Pick<T, K>>

/**
 * Common loading and error states
 */
export interface LoadingState {
  isLoading: boolean
  error?: string | null
}

export interface AsyncState<T> extends LoadingState {
  data?: T
}
