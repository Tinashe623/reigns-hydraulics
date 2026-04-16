# Reigns Hydraulics Website Specification

## Project Overview
- **Project Name**: Reigns Hydraulics
- **Type**: Corporate website (Single Page Application)
- **Core Functionality**: Showcase heavy equipment repair services, build trust, and convert visitors to customers
- **Target Users**: Construction companies, fleet owners, heavy machinery operators

## Tech Stack
- React 18 + TypeScript
- Vite 5
- Chakra UI v2
- Framer Motion (for animations)

## UI/UX Specification

### Color Palette
- **Primary Background**: #0A0F1A (deep navy/black)
- **Secondary Background**: #141C2B (dark charcoal)
- **Card Background**: #1A2332 (elevated charcoal)
- **Primary Accent**: #3B82F6 (electric blue)
- **Secondary Accent**: #F97316 (safety orange)
- **Warning/Highlight**: #FBBF24 (hydraulic yellow)
- **Text Primary**: #FFFFFF
- **Text Secondary**: #94A3B8 (slate gray)
- **Success**: #22C55E

### Typography
- **Headings**: "Bebas Neue" (bold, industrial feel)
- **Body**: "DM Sans" (clean, professional)
- **Sizes**:
  - Hero: 72px (desktop), 40px (mobile)
  - H1: 48px
  - H2: 36px
  - H3: 24px
  - Body: 16px
  - Small: 14px

### Layout
- Max container width: 1400px
- Section padding: 100px vertical (60px mobile)
- Card gap: 24px
- Grid: 12-column system

### Visual Effects
- Glassmorphism: rgba(255,255,255,0.05) with backdrop-blur
- Box shadows: 0 4px 30px rgba(0,0,0,0.3)
- Border radius: 12px (cards), 8px (buttons), 50% (avatars)
- Gradient overlays on images

## Sections Specification

### 1. Navigation Bar
- Sticky, glassmorphism effect
- Logo (text-based: "REIGNS")
- Links: Home, Services, About, Portfolio, Contact
- CTA Button: "Get Quote"
- Mobile: Hamburger menu with slide-in drawer

### 2. Hero Section
- Full viewport height
- Background: Industrial/machinery image with dark overlay gradient
- Badge: "24/7 Emergency Service" (pulsing orange)
- Headline: "Heavy Duty Hydraulic Solutions You Can Trust"
- Subheadline: "Expert truck repairs, yellow machine maintenance & hydraulic parts delivery"
- CTAs: "Request Service" (primary), "Call Now" (secondary)
- Scroll indicator animation

### 3. Services Section
- Section title with accent line
- 4 cards in responsive grid (2x2 on tablet, 1x4 on mobile)
- Cards: Icon, title, description, "Learn More" link
- Services:
  - Truck Repairs (truck icon)
  - Yellow Machine Maintenance (excavator icon)
  - Hydraulic Parts Delivery (gears icon)
  - Emergency Field Service (siren icon)
- Hover: Scale up, glow effect, icon animation

### 4. About Section
- Two-column layout
- Left: Text content + stats
- Right: Image placeholder with frame
- Stats: Years in business, Projects completed, Happy clients
- Bullet points: Expert technicians, Fast turnaround, Quality parts

### 5. Portfolio Section
- Grid: 6 placeholder images (before/after, equipment)
- Hover: Zoom effect, overlay with "View" text
- Lightbox modal for full view

### 6. Testimonials Section
- Horizontal carousel
- Card: Quote, star rating, client name, company
- Auto-scroll with pause on hover

### 7. CTA Banner
- Full-width gradient background
- Bold text: "Need Emergency Repair?"
- Subtext: "We're available 24/7 for urgent repairs"
- Buttons: "Call Now", "WhatsApp Us"

### 8. Contact Section
- Two columns: Form + Contact info
- Form fields: Name, Email, Phone, Service Type, Message
- Submit button with loading state
- Contact info: Phone, Email, Location placeholder
- Map placeholder with "Get Directions" button
- WhatsApp floating button (fixed bottom-right)

### 9. Footer
- 4 columns: Logo, Services, Contact, Social
- Social icons: Facebook, Instagram, LinkedIn
- Copyright: "© 2024 Reigns Hydraulics. All rights reserved."

## Animations

### Scroll Reveal
- Fade up on scroll (staggered delay: 0.1s per item)
- Threshold: 0.2

### Micro-interactions
- Button hover: scale(1.02), brightness increase
- Card hover: translateY(-8px), glow
- Link hover: underline animation
- Nav link: dot indicator on active

### Loading
- Initial: Skeleton loader with pulse
- Page load: Fade in with slide up

### Others
- Hero badge: Pulse animation
- Scroll indicator: Bounce animation
- Floating WhatsApp: Subtle float animation

## Responsive Breakpoints
- Mobile: 0-767px
- Tablet: 768-1023px
- Desktop: 1024px+

## Acceptance Criteria
1. ✅ All sections render correctly
2. ✅ Navigation is sticky and functional
3. ✅ Mobile menu works smoothly
4. ✅ Scroll animations trigger correctly
5. ✅ Form validates inputs (basic)
6. ✅ All buttons have hover states
7. ✅ Color contrast meets WCAG AA
8. ✅ No console errors
9. ✅ Lighthouse performance > 80