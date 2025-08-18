# RNM GTA 5 Server - Implementation Guide

## Project Details

**Tech Stack**: Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS, shadcn/ui, Framer Motion
**Project Type**: Static website for GTA 5 Server promotion with payment integration
**Key Features**: Stripe payments, BitPay cryptocurrency payments, engaging animations, responsive design

## Implementation Phases

### 1) Project Setup & Tooling

- [ ] Initialize repo and first commit
- [ ] Configure runtime/version file (e.g., .nvmrc, .tool-versions)
- [ ] Add formatter and linter configs (e.g., Prettier, ESLint or equivalents)
- [ ] Set up pre-commit hooks (Husky/lint-staged or equivalent)
- [ ] Create .env.example with required keys and brief descriptions
- [ ] Add minimal CI workflow (install, typecheck/build, lint, test)

### 2) Dependencies

- [ ] Install framework/runtime packages
- [ ] Install styling/theming packages
- [ ] Install data/state and validation packages
- [ ] Install testing packages (unit/integration/e2e as needed)
- [ ] Initialize styling/tooling configs (e.g., Tailwind/PostCSS or framework defaults)

### 3) Project Structure Scaffolding

- [ ] Create folders per project_structure.md (routes/pages, components, lib, server, styles, hooks, types, config, content, public/assets, tests, scripts, docs, .github, db)
- [ ] Add path aliases (e.g., @/) in compiler/tsconfig settings
- [ ] Add starter route with layout/metadata
- [ ] Add base styles/theme tokens

### 4) Data Layer (DB or API)

- [ ] Define schema/models (DB ORM or API contract)
- [ ] Add migration/seed scripts and commands
- [ ] Document data access utilities and error handling

### 5) Auth (if applicable)

- [ ] Configure providers/strategies
- [ ] Implement session handling and protected routes
- [ ] Add middleware/guards and typed helpers

### 6) API & Validation

- [ ] Create API endpoints or server actions
- [ ] Validate inputs with shared schemas

### 7) State & Data Fetching

- [ ] Set up client-side state management
- [ ] Implement data fetching patterns
- [ ] Add error boundaries and loading states

### 8) UI & Accessibility

- [ ] Build reusable UI components
- [ ] Implement responsive layouts
- [ ] Add accessibility features and testing

### 9) Payment Integration

- [ ] Configure Stripe payment processing
- [ ] Implement BitPay cryptocurrency payments
- [ ] Add payment validation and error handling
- [ ] Create checkout flows and success/failure pages

### 10) Animations & Engagement

- [ ] Implement Framer Motion animations
- [ ] Add scroll-triggered animations
- [ ] Create interactive hover effects
- [ ] Optimize performance for animations

### 11) Testing

- [ ] Write unit tests for components and utilities
- [ ] Add integration tests for critical flows
- [ ] Implement E2E tests for payment processes
- [ ] Set up accessibility testing

### 12) Performance & Monitoring

- [ ] Optimize bundle size and loading
- [ ] Add performance monitoring
- [ ] Implement error tracking
- [ ] Set up analytics

### 13) Getting Started

- [ ] Complete project setup checklist
- [ ] Verify all integrations work locally
- [ ] Deploy to staging environment
- [ ] Production deployment and monitoring

## Technical Decisions & Architecture

### Framework Choice
- **Next.js 14 App Router**: Chosen for server-side rendering, built-in optimizations, and excellent TypeScript support
- **Static Generation**: Most pages will be statically generated for optimal performance

### Payment Strategy
- **Stripe**: Primary payment processor for credit/debit cards with robust fraud protection
- **BitPay**: Cryptocurrency payment option for users preferring crypto payments
- **Webhook Handling**: Secure webhook endpoints for payment status updates

### Animation Framework
- **Framer Motion**: Declarative animations with excellent performance and React integration
- **CSS Animations**: For simple transitions to reduce bundle size
- **Intersection Observer**: For scroll-triggered animations

### Styling Approach
- **Tailwind CSS**: Utility-first CSS for rapid development and consistent design
- **shadcn/ui**: High-quality, customizable components with accessibility built-in
- **CSS Custom Properties**: For dynamic theming and GTA-inspired purple branding

### Type Safety
- **TypeScript**: Strict mode enabled for maximum type safety
- **Zod**: Runtime validation with TypeScript inference for API contracts
- **Type-only imports**: Optimize bundle size with type-only imports where possible

## Environment Variables

```env
# Application
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=RNM GTA Server

# Payments
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...
STRIPE_WEBHOOK_SECRET=whsec_...
BITPAY_API_TOKEN=...
BITPAY_WEBHOOK_SECRET=...

# Analytics
NEXT_PUBLIC_GA_ID=G-...
NEXT_PUBLIC_HOTJAR_ID=...

# Security
NEXTAUTH_SECRET=your-secret-here
NEXTAUTH_URL=http://localhost:3000
```

## File Structure Implementation

```
rnm/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                    # Homepage with hero and features
│   │   ├── about/page.tsx              # Server information
│   │   ├── packages/page.tsx           # VIP packages and pricing
│   │   └── contact/page.tsx            # Contact form
│   ├── checkout/
│   │   ├── page.tsx                    # Payment selection
│   │   ├── stripe/page.tsx             # Stripe checkout
│   │   ├── bitpay/page.tsx             # BitPay checkout
│   │   ├── success/page.tsx            # Payment success
│   │   └── cancel/page.tsx             # Payment cancelled
│   ├── api/
│   │   ├── webhooks/
│   │   │   ├── stripe/route.ts         # Stripe webhook handler
│   │   │   └── bitpay/route.ts         # BitPay webhook handler
│   │   ├── payments/
│   │   │   ├── stripe/route.ts         # Create Stripe session
│   │   │   └── bitpay/route.ts         # Create BitPay invoice
│   │   └── health/route.ts             # Health check endpoint
│   ├── globals.css
│   ├── layout.tsx                      # Root layout with providers
│   ├── loading.tsx                     # Global loading UI
│   ├── error.tsx                       # Global error boundary
│   └── not-found.tsx                   # 404 page
├── components/
│   ├── ui/                             # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   ├── badge.tsx
│   │   └── dialog.tsx
│   ├── layout/
│   │   ├── header.tsx                  # Main navigation
│   │   ├── footer.tsx                  # Site footer
│   │   └── mobile-nav.tsx              # Mobile navigation
│   ├── sections/
│   │   ├── hero.tsx                    # Hero section with animations
│   │   ├── features.tsx                # Server features grid
│   │   ├── packages.tsx                # VIP packages showcase
│   │   ├── testimonials.tsx            # Player testimonials
│   │   └── cta.tsx                     # Call-to-action sections
│   ├── payment/
│   │   ├── package-card.tsx            # Package selection cards
│   │   ├── payment-form.tsx            # Payment method selection
│   │   ├── stripe-checkout.tsx         # Stripe payment form
│   │   └── bitpay-checkout.tsx         # BitPay payment form
│   └── common/
│       ├── loading-spinner.tsx         # Reusable loading component
│       ├── error-message.tsx           # Error display component
│       └── animated-counter.tsx        # Number animation component
├── lib/
│   ├── payments/
│   │   ├── stripe.ts                   # Stripe configuration and utilities
│   │   ├── bitpay.ts                   # BitPay configuration and utilities
│   │   └── validation.ts               # Payment validation schemas
│   ├── animations/
│   │   ├── variants.ts                 # Framer Motion animation variants
│   │   └── utils.ts                    # Animation utility functions
│   ├── utils/
│   │   ├── cn.ts                       # Class name utility
│   │   ├── formatters.ts               # Price and date formatters
│   │   └── constants.ts                # App constants and config
│   └── hooks/
│       ├── use-payment.ts              # Payment processing hook
│       ├── use-intersection.ts         # Intersection observer hook
│       └── use-media-query.ts          # Responsive design hook
├── types/
│   ├── payment.ts                      # Payment-related types
│   ├── package.ts                      # VIP package types
│   └── api.ts                          # API response types
└── public/
    ├── images/
    │   ├── hero-bg.webp                # Hero background image
    │   ├── server-screenshots/         # Game screenshots
    │   └── icons/
    │       ├── gta-icon.svg            # GTA-themed icons
    │       └── payment-logos/          # Payment method logos
    └── videos/
        └── server-trailer.mp4          # Server promotional video
```

## Key Implementation Files

### Homepage Hero Section
```tsx
// components/sections/hero.tsx
'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { fadeInUp, staggerContainer } from '@/lib/animations/variants';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
      <div className="absolute inset-0 bg-black/40" />
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="container relative z-10 text-center text-white"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Welcome to RNM Server
        </motion.h1>
        <motion.p
          variants={fadeInUp}
          className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"
        >
          Experience the ultimate GTA 5 roleplay server with custom features, dedicated staff, and an amazing community.
        </motion.p>
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
            Join Server
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-900">
            View Packages
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
```

### Stripe Payment Integration
```tsx
// lib/payments/stripe.ts
import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2023-10-16',
});

export async function createCheckoutSession(packageId: string, userId?: string) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'RNM VIP Package',
            description: 'Premium server access and perks',
          },
          unit_amount: 2999, // $29.99
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/checkout/cancel`,
    metadata: {
      packageId,
      userId: userId || 'guest',
    },
  });

  return session;
}
```

### Animation Variants
```tsx
// lib/animations/variants.ts
export const fadeInUp = {
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
};

export const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const scaleOnHover = {
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.2,
    },
  },
  tap: {
    scale: 0.95,
  },
};
```

## Performance Optimizations

- **Image Optimization**: Next.js Image component with WebP format and lazy loading
- **Code Splitting**: Dynamic imports for heavy components and payment libraries
- **Bundle Analysis**: Regular bundle size monitoring and optimization
- **Caching Strategy**: Static generation with ISR for dynamic content
- **Animation Performance**: Use transform and opacity for smooth 60fps animations

## Security Considerations

- **Payment Security**: PCI DSS compliance through Stripe, secure webhook validation
- **Environment Variables**: Secure storage of API keys and secrets
- **Input Validation**: Server-side validation for all payment-related inputs
- **CORS Configuration**: Proper CORS setup for payment webhooks
- **Rate Limiting**: API rate limiting for payment endpoints

## Testing Strategy

- **Unit Tests**: Payment utilities, validation functions, and pure components
- **Integration Tests**: Payment flow testing with mock providers
- **E2E Tests**: Complete user journey from package selection to payment completion
- **Accessibility Tests**: Automated a11y testing for all interactive elements
- **Performance Tests**: Core Web Vitals monitoring and optimization

## Deployment Checklist

- [ ] Set up production environment variables
- [ ] Configure payment webhooks with production URLs
- [ ] Test payment flows in production environment
- [ ] Set up monitoring and error tracking
- [ ] Configure CDN for static assets
- [ ] Enable security headers and HTTPS
- [ ] Set up backup and recovery procedures