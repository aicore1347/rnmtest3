import React from 'react'
import { motion } from 'framer-motion'
import { Loader2, Server, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

interface LoadingSpinnerProps {
  className?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  variant?: 'default' | 'gaming' | 'server'
  text?: string
  fullScreen?: boolean
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-12 h-12',
}

const textSizeClasses = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
}

export function LoadingSpinner({ 
  className, 
  size = 'md', 
  variant = 'default',
  text,
  fullScreen = false 
}: LoadingSpinnerProps) {
  const spinnerContent = (
    <div className={cn(
      "flex flex-col items-center justify-center space-y-3",
      className
    )}>
      {variant === 'gaming' ? (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className={cn(
            "rounded-full border-4 border-rnm-purple-900 border-t-rnm-purple-400",
            sizeClasses[size]
          )}
        />
      ) : variant === 'server' ? (
        <div className="relative">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.7, 1, 0.7] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className={cn(
              "text-rnm-purple-400",
              sizeClasses[size]
            )}
          >
            <Server />
          </motion.div>
          <motion.div
            animate={{ 
              scale: [1, 0.8, 1],
              opacity: [1, 0.3, 1] 
            }}
            transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
            className="absolute -top-1 -right-1 w-3 h-3 text-rnm-success"
          >
            <Users className="w-full h-full" />
          </motion.div>
        </div>
      ) : (
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className={cn(
            "text-rnm-purple-400",
            sizeClasses[size]
          )}
        >
          <Loader2 />
        </motion.div>
      )}
      
      {text && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-rnm-neutral-300 font-medium text-center",
            textSizeClasses[size]
          )}
        >
          {text}
        </motion.p>
      )}
    </div>
  )

  if (fullScreen) {
    return (
      <div className="fixed inset-0 bg-rnm-purple-900 flex items-center justify-center z-50">
        <div className="text-center">
          {spinnerContent}
          
          {/* Gaming-themed loading indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 space-y-2"
          >
            <div className="flex justify-center space-x-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                  className="w-2 h-2 bg-rnm-purple-400 rounded-full"
                />
              ))}
            </div>
            
            <div className="text-xs text-rnm-neutral-500 font-mono">
              Connecting to RNM Server...
            </div>
          </motion.div>
        </div>
      </div>
    )
  }

  return spinnerContent
}

// Skeleton loading component for content placeholders
export function SkeletonLoader({ 
  className,
  lines = 3,
  avatar = false,
}: {
  className?: string
  lines?: number
  avatar?: boolean
}) {
  return (
    <div className={cn("animate-pulse", className)}>
      {avatar && (
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-rnm-neutral-700 rounded-full" />
          <div className="space-y-2 flex-1">
            <div className="h-4 bg-rnm-neutral-700 rounded w-1/4" />
            <div className="h-3 bg-rnm-neutral-800 rounded w-1/6" />
          </div>
        </div>
      )}
      
      <div className="space-y-3">
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "h-4 bg-rnm-neutral-700 rounded",
              i === lines - 1 ? "w-2/3" : "w-full"
            )}
          />
        ))}
      </div>
    </div>
  )
}

// Progress bar component for loading operations
export function LoadingProgress({ 
  progress, 
  text,
  className 
}: { 
  progress: number
  text?: string
  className?: string 
}) {
  return (
    <div className={cn("w-full", className)}>
      {text && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-rnm-neutral-300">{text}</span>
          <span className="text-sm text-rnm-neutral-400 font-mono">
            {Math.round(progress)}%
          </span>
        </div>
      )}
      
      <div className="w-full bg-rnm-neutral-800 rounded-full h-2 overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-rnm-purple-500 to-rnm-purple-400 rounded-full relative"
        >
          <motion.div
            animate={{ x: ["0%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
          />
        </motion.div>
      </div>
    </div>
  )
}

export default LoadingSpinner
