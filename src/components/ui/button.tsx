import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { scaleOnHover } from '@/lib/animations/variants'

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-primary min-h-[44px]",
  {
    variants: {
      variant: {
        primary:
          "bg-rnm-purple-500 text-rnm-neutral-100 hover:bg-rnm-purple-400 shadow-glow hover:shadow-glow-lg border-2 border-rnm-purple-500 hover:border-rnm-purple-400 transition-all duration-300",
        secondary:
          "bg-rnm-neutral-800 text-rnm-neutral-100 hover:bg-rnm-neutral-700 border-2 border-rnm-neutral-700 hover:border-rnm-neutral-600",
        outline:
          "border-2 border-rnm-purple-500 bg-transparent text-rnm-purple-500 hover:bg-rnm-purple-500 hover:text-rnm-neutral-100 transition-all duration-300",
        ghost:
          "text-rnm-neutral-100 hover:bg-rnm-purple-900/20 hover:text-rnm-purple-400",
        danger:
          "bg-rnm-danger text-rnm-neutral-100 hover:bg-red-600 border-2 border-rnm-danger hover:border-red-600",
        gaming:
          "bg-gradient-primary text-rnm-neutral-100 hover:shadow-glow-lg border-2 border-rnm-purple-400 font-gaming uppercase tracking-wider",
      },
      size: {
        sm: "h-9 px-3 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  href?: string
  external?: boolean
  glow?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant, 
    size, 
    asChild = false, 
    loading = false,
    icon,
    iconPosition = 'left',
    href,
    external = false,
    glow = false,
    children,
    disabled,
    ...props 
  }, ref) => {
    const Comp = motion.button
    
    const buttonContent = (
      <>
        {loading && (
          <svg
            className="animate-spin h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!loading && icon && iconPosition === 'left' && icon}
        {children}
        {!loading && icon && iconPosition === 'right' && icon}
      </>
    )

    if (href) {
      return (
        <motion.a
          href={href}
          target={external ? '_blank' : undefined}
          rel={external ? 'noopener noreferrer' : undefined}
          className={cn(
            buttonVariants({ variant, size, className }),
            glow && 'animate-glow-pulse',
            'cursor-pointer'
          )}
          variants={scaleOnHover}
          whileHover="hover"
          whileTap="tap"
          {...(props as any)}
        >
          {buttonContent}
        </motion.a>
      )
    }

    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size, className }),
          glow && 'animate-glow-pulse'
        )}
        ref={ref}
        disabled={disabled || loading}
        variants={scaleOnHover}
        whileHover={!disabled && !loading ? "hover" : undefined}
        whileTap={!disabled && !loading ? "tap" : undefined}
        {...props}
      >
        {buttonContent}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
