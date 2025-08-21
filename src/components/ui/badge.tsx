import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-rnm-neutral-700 text-rnm-neutral-100 hover:bg-rnm-neutral-600",
        primary:
          "border-transparent bg-rnm-purple-500 text-rnm-neutral-100 hover:bg-rnm-purple-400 shadow-glow",
        secondary:
          "border-transparent bg-rnm-neutral-600 text-rnm-neutral-100 hover:bg-rnm-neutral-500",
        destructive:
          "border-transparent bg-rnm-danger text-rnm-neutral-100 hover:bg-red-600",
        outline: 
          "border-rnm-purple-500 text-rnm-purple-400 hover:bg-rnm-purple-500 hover:text-rnm-neutral-100",
        success:
          "border-transparent bg-rnm-success text-rnm-neutral-100 hover:bg-green-600",
        warning:
          "border-transparent bg-rnm-warning text-rnm-neutral-100 hover:bg-yellow-600",
        info:
          "border-transparent bg-rnm-info text-rnm-neutral-100 hover:bg-blue-600",
        online:
          "border-transparent bg-rnm-success text-rnm-neutral-100 animate-pulse",
        offline:
          "border-transparent bg-rnm-danger text-rnm-neutral-100",
        gaming:
          "border-transparent bg-gradient-primary text-rnm-neutral-100 font-gaming uppercase tracking-wide shadow-glow",
      },
      size: {
        sm: "px-2 py-0.5 text-xs",
        md: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  icon?: React.ReactNode
  pulse?: boolean
}

function Badge({ className, variant, size, icon, pulse = false, children, ...props }: BadgeProps) {
  return (
    <div 
      className={cn(
        badgeVariants({ variant, size }), 
        pulse && "animate-pulse",
        className
      )} 
      {...props}
    >
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </div>
  )
}

export { Badge, badgeVariants }
