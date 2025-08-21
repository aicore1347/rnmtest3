import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { scaleOnHover, fadeInUp } from '@/lib/animations/variants'

const cardVariants = cva(
  "rounded-lg border bg-card text-card-foreground shadow-sm transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-rnm-neutral-800/80 border-rnm-neutral-700 text-rnm-neutral-100",
        feature: "bg-gradient-to-br from-rnm-purple-900/50 to-rnm-neutral-800/50 border-rnm-purple-600/30 text-rnm-neutral-100 hover:border-rnm-purple-500/50",
        testimonial: "bg-rnm-neutral-800/90 border-rnm-purple-700/30 text-rnm-neutral-100",
        stats: "bg-gradient-primary border-rnm-purple-400 text-rnm-neutral-100",
        glass: "bg-glass-morphism border-rnm-purple-500/20 text-rnm-neutral-100",
      },
      size: {
        sm: "p-4",
        md: "p-6",
        lg: "p-8",
        xl: "p-10",
      },
      hover: {
        none: "",
        lift: "hover:shadow-lg hover:-translate-y-1",
        glow: "hover:shadow-glow hover:border-rnm-purple-400/50",
        scale: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
      hover: "none",
    },
  }
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  asChild?: boolean
  animate?: boolean
  delay?: number
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, size, hover, animate = false, delay = 0, children, ...props }, ref) => {
    const MotionDiv = motion.div
    
    const cardProps = {
      className: cn(cardVariants({ variant, size, hover, className })),
      ref,
      ...props,
    }

    if (animate) {
      return (
        <MotionDiv
          {...cardProps}
          variants={hover === 'scale' ? { ...fadeInUp, ...scaleOnHover } : fadeInUp}
          initial="initial"
          whileInView="animate"
          whileHover={hover === 'scale' ? "hover" : undefined}
          whileTap={hover === 'scale' ? "tap" : undefined}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay }}
        >
          {children}
        </MotionDiv>
      )
    }

    if (hover === 'scale') {
      return (
        <MotionDiv
          {...cardProps}
          variants={scaleOnHover}
          whileHover="hover"
          whileTap="tap"
        >
          {children}
        </MotionDiv>
      )
    }

    return (
      <div {...cardProps}>
        {children}
      </div>
    )
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, children, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight text-rnm-neutral-100",
      className
    )}
    {...props}
  >
    {children}
  </h3>
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-rnm-neutral-400 leading-relaxed", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
