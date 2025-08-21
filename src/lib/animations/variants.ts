import { Variants } from 'framer-motion'

/**
 * Fade in from bottom animation
 */
export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    y: 60,
    transition: {
      duration: 0.4,
    },
  },
}

/**
 * Fade in from top animation
 */
export const fadeInDown: Variants = {
  initial: {
    opacity: 0,
    y: -60,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    y: -60,
    transition: {
      duration: 0.4,
    },
  },
}

/**
 * Fade in from left animation
 */
export const fadeInLeft: Variants = {
  initial: {
    opacity: 0,
    x: -60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    x: -60,
    transition: {
      duration: 0.4,
    },
  },
}

/**
 * Fade in from right animation
 */
export const fadeInRight: Variants = {
  initial: {
    opacity: 0,
    x: 60,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    x: 60,
    transition: {
      duration: 0.4,
    },
  },
}

/**
 * Simple fade in animation
 */
export const fadeIn: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.6,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
}

/**
 * Scale in animation
 */
export const scaleIn: Variants = {
  initial: {
    opacity: 0,
    scale: 0.8,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.3,
    },
  },
}

/**
 * Hover animations for interactive elements
 */
export const scaleOnHover: Variants = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  tap: {
    scale: 0.95,
    transition: {
      duration: 0.1,
    },
  },
}

/**
 * Button glow animation on hover
 */
export const glowOnHover: Variants = {
  initial: {
    boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)',
  },
  hover: {
    boxShadow: '0 0 40px rgba(139, 92, 246, 0.6)',
    transition: {
      duration: 0.3,
    },
  },
}

/**
 * Container for staggered children animations
 */
export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
}

/**
 * Fast stagger for quick animations
 */
export const staggerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.05,
    },
  },
}

/**
 * Slow stagger for dramatic effect
 */
export const staggerSlow: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
}

/**
 * Floating animation for hero elements
 */
export const floating: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

/**
 * Pulse animation for attention-grabbing elements
 */
export const pulse: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

/**
 * Slide in from bottom for mobile modals
 */
export const slideInFromBottom: Variants = {
  initial: {
    y: '100%',
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.36, 0.66, 0.04, 1],
    },
  },
  exit: {
    y: '100%',
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: [0.36, 0.66, 0.04, 1],
    },
  },
}

/**
 * Page transition variants
 */
export const pageTransition: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: {
      duration: 0.3,
      ease: 'easeIn',
    },
  },
}

/**
 * Navigation menu animations
 */
export const menuSlide: Variants = {
  initial: {
    x: '-100%',
  },
  animate: {
    x: 0,
    transition: {
      duration: 0.4,
      ease: [0.36, 0.66, 0.04, 1],
    },
  },
  exit: {
    x: '-100%',
    transition: {
      duration: 0.3,
      ease: [0.36, 0.66, 0.04, 1],
    },
  },
}

/**
 * Hero title animation with typewriter effect
 */
export const typewriter: Variants = {
  initial: {
    width: 0,
  },
  animate: {
    width: 'auto',
    transition: {
      duration: 2,
      ease: 'easeInOut',
    },
  },
}

/**
 * Counter animation for statistics
 */
export const counterAnimation = {
  initial: { value: 0 },
  animate: (targetValue: number) => ({
    value: targetValue,
    transition: {
      duration: 2,
      ease: 'easeOut',
    },
  }),
}
