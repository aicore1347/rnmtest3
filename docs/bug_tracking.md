# RNM GTA 5 Server Website - Bug Tracking Documentation

## Bug Tracking Overview

This document tracks all identified bugs, issues, and debugging tasks for the RNM GTA 5 server website. All team members should follow the standardized format below for consistency and efficient resolution.

---

## Bug Classification System

### Priority Levels
- **Critical**: Site is down, major security issues, complete feature failure
- **High**: Significant functionality broken, affects user conversion
- **Medium**: Minor feature issues, visual problems, performance degradation
- **Low**: Cosmetic issues, minor enhancements, edge cases

### Bug Categories
- **UI/UX**: Visual design, layout, and user experience issues
- **Functionality**: Feature behavior and business logic problems
- **Performance**: Loading times, optimization issues
- **Accessibility**: WCAG compliance and usability problems
- **Mobile**: Mobile-specific issues and responsive design problems
- **Integration**: Discord API, server stats, and third-party service issues

---

## Active Bug Reports

### BUG-001: Hero Section Animation Causes Performance Issues on Mobile
**Priority**: High  
**Category**: Performance/Mobile  
**Status**: In Progress  
**Assigned To**: Frontend Team  
**Reporter**: QA Team    

**Description**:
The hero section background animation significantly impacts performance on mobile devices, causing frame drops and delayed user interactions.

**Steps to Reproduce**:
1. Open website on mobile device (iOS Safari or Android Chrome)
2. Navigate to homepage
3. Observe hero section loading and animation
4. Attempt to interact with CTA buttons during animation

**Expected Behavior**:
- Smooth 60fps animation on all devices
- Immediate button responsiveness
- Animation completes within 2 seconds

**Actual Behavior**:
- Animation stutters and drops to ~20fps on mobile
- CTA buttons become unresponsive for 3-4 seconds
- Page scroll is blocked during animation load

**Environment**:
- **Mobile Devices**: iPhone 18, Samsung Galaxy S25, Pixel 10
- **Browsers**: Safari 17.2, Chrome Mobile 120.x
- **Network**: 5G and WiFi tested

**Additional Context**:
- Desktop performance is acceptable (60fps maintained)
- Issue appears related to large background video/image processing
- CPU usage spikes to 80%+ during animation

**Suggested Solutions**:
1. **Immediate**: Implement `prefers-reduced-motion` media query to disable animation on mobile
2. **Short-term**: Replace video background with optimized static image on mobile
3. **Long-term**: Redesign animation using CSS transforms instead of background changes

**Related Issues**: None

---

### BUG-002: Discord Integration Returns 404 Error Intermittently
**Priority**: High  
**Category**: Integration  
**Status**: Open  
**Assigned To**: Backend Team  
**Reporter**: Community Manager  

**Description**:
Discord API integration fails intermittently, showing 404 errors and preventing users from seeing live member count and recent activity.

**Steps to Reproduce**:
1. Navigate to homepage
2. Scroll to community section
3. Observe Discord widget area
4. Refresh page multiple times (error occurs ~30% of requests)

**Expected Behavior**:
- Live Discord member count displays correctly
- Recent activity feed shows latest 5 messages
- Join Discord button functions properly

**Actual Behavior**:
- Error message: "Unable to load Discord information"
- Member count shows as "Unavailable"
- Join button still works but lacks social proof

**Environment**:
- **All browsers and devices affected**
- **Network**: Issue occurs on all connection types
- **Time**: More frequent during peak hours (7-11 PM EST)

**Additional Context**:
- Discord API rate limiting may be involved
- Server logs show 429 responses from Discord API
- No changes made to Discord bot permissions recently

**Error Logs**:
```
[ERROR] Discord API Request Failed: 429 Too Many Requests
[ERROR] Rate limit exceeded: Retry after 60 seconds
[INFO] Falling back to cached data (outdated 15 minutes)
```

**Suggested Solutions**:
1. **Immediate**: Implement proper error handling with fallback to cached data
2. **Short-term**: Add rate limiting and request queuing for Discord API calls
3. **Long-term**: Cache Discord data with 5-minute refresh interval

**Related Issues**: BUG-008 (Server stats timeout)

---

### BUG-003: Mobile Navigation Menu Z-Index Issue
**Priority**: Medium  
**Category**: UI/UX/Mobile  
**Status**: Open  
**Assigned To**: Frontend Team  
**Reporter**: Design Team   

**Description**:
Mobile hamburger menu appears behind other page elements, making navigation impossible on certain sections.

**Steps to Reproduce**:
1. Open website on mobile device
2. Navigate to Features or Gallery section
3. Tap hamburger menu icon
4. Observe menu overlay

**Expected Behavior**:
- Navigation menu appears above all other content
- Semi-transparent backdrop covers entire viewport
- All menu items are clickable and visible

**Actual Behavior**:
- Menu appears partially behind hero video and feature cards
- Some menu items are not clickable
- Backdrop doesn't cover floating elements

**Environment**:
- **Affected**: iOS Safari, Android Chrome, Mobile Firefox
- **Screen Sizes**: All mobile breakpoints (320px - 767px)
- **Not Affected**: Desktop browsers, tablet landscape mode

**Screenshots**: 
- [Attachment: mobile-menu-z-index-issue.png]
- [Attachment: menu-behind-elements.png]

**Suggested Solutions**:
1. Increase mobile menu z-index to 9999
2. Add `position: fixed` to menu overlay
3. Disable page scroll when menu is open
4. Review and standardize z-index scale across components

**CSS Fix**:
```css
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 9999;
  background: rgba(30, 18, 40, 0.95);
}

body.menu-open {
  overflow: hidden;
}
```

**Related Issues**: BUG-007 (Modal z-index conflicts)

---

### BUG-004: Server Stats Widget Shows Outdated Information
**Priority**: Medium  
**Category**: Functionality/Integration  
**Status**: Investigation  
**Assigned To**: Backend Team  
**Reporter**: Server Admin  

**Description**:
Real-time server statistics display incorrect player counts and server status, showing cached data from several hours ago.

**Steps to Reproduce**:
1. Navigate to homepage
2. Check server stats widget (player count, status)
3. Compare with actual server console data
4. Wait 10 minutes and refresh page

**Expected Behavior**:
- Player count updates every 5 minutes maximum
- Server status reflects actual online/offline state
- Ping/latency shows current server response time

**Actual Behavior**:
- Player count stuck at previous day's peak (127 players)
- Server shows "Online" when actually offline for maintenance
- Ping displays last recorded value (45ms) instead of current

**Environment**:
- **API Endpoint**: `/api/server-stats`
- **Cache**: Redis cache configured for 5-minute TTL
- **Server**: GTA 5 FiveM server on Linux VPS

**API Response Example**:
```json
{
  "status": "online",
  "players": 127,
  "maxPlayers": 128,
  "ping": 45,
  "lastUpdated": "2024-12-XX 14:32:15",
  "cached": true
}
```

**Investigation Notes**:
- Cache invalidation may not be working properly
- Server polling script might have stopped
- Database connection issues possible

**Suggested Solutions**:
1. **Debug**: Check server polling cron job status
2. **Fix**: Implement cache invalidation on server status change
3. **Improve**: Add manual refresh button for immediate updates
4. **Monitor**: Set up alerts for stale data detection

**Related Issues**: BUG-002 (Discord API issues)

---

### BUG-005: Accessibility Issues with Keyboard Navigation
**Priority**: High  
**Category**: Accessibility  
**Status**: Open  
**Assigned To**: Frontend Team  
**Reporter**: Accessibility Audit   

**Description**:
Multiple WCAG 2.1 AA compliance failures related to keyboard navigation and screen reader compatibility.

**Identified Issues**:
1. **Focus indicators missing** on custom dropdown menus
2. **Tab order incorrect** - skips important CTA buttons
3. **ARIA labels missing** on icon-only buttons
4. **Color contrast insufficient** on secondary text (2.8:1 ratio)

**Steps to Reproduce**:
1. Navigate website using only keyboard (Tab, Enter, Arrow keys)
2. Test with screen reader (NVDA or JAWS)
3. Check color contrast using accessibility tools
4. Verify focus indicators on all interactive elements

**Expected Behavior**:
- All interactive elements have visible focus indicators
- Logical tab order through page content
- Screen readers announce all elements correctly
- Minimum 4.5:1 contrast ratio for all text

**Actual Behavior**:
- Custom dropdowns not keyboard accessible
- Tab jumps over primary CTA buttons
- Icon buttons announced as "button" without context
- Secondary text fails contrast requirements

**Affected Elements**:
- Server selection dropdown
- Gallery navigation arrows
- Social media icon links
- Muted text in testimonials section

**WCAG Violations**:
- **2.1.1 Keyboard**: Custom controls not keyboard accessible
- **2.4.3 Focus Order**: Illogical tab sequence
- **1.4.3 Contrast**: Insufficient color contrast
- **4.1.2 Name, Role, Value**: Missing accessible names

**Suggested Solutions**:
1. **Focus Indicators**:
   ```css
   :focus-visible {
     outline: 2px solid #3B82F6;
     outline-offset: 2px;
   }
   ```

2. **ARIA Labels**:
   ```html
   <button aria-label="Previous gallery image">
     <ChevronLeft />
   </button>
   ```

3. **Tab Order**:
   ```html
   <div tabindex="0" role="button">Custom Dropdown</div>
   ```

4. **Color Contrast**:
   ```css
   .secondary-text {
     color: #9CA3AF; /* Change to #6B7280 for 4.5:1 ratio */
   }
   ```

**Testing Checklist**:
- [ ] Keyboard navigation flows logically
- [ ] All controls have focus indicators
- [ ] Screen reader announces all content correctly
- [ ] Color contrast meets WCAG standards
- [ ] ARIA labels provide sufficient context

**Related Issues**: None

---

### BUG-006: Gallery Images Not Optimized for Different Screen Densities
**Priority**: Medium  
**Category**: Performance/Mobile  
**Status**: Open  
**Assigned To**: Frontend Team  
**Reporter**: Performance Audit    

**Description**:
Gallery images load at full resolution regardless of device screen density, causing unnecessary bandwidth usage and slower loading times.

**Steps to Reproduce**:
1. Open website on various devices (standard and high-DPI screens)
2. Navigate to gallery section
3. Monitor network usage during image loading
4. Compare loading times across different screen densities

**Expected Behavior**:
- Images optimized for specific screen densities (1x, 2x, 3x)
- WebP format served with JPEG fallback
- Lazy loading implemented for below-fold images
- Responsive images based on viewport size

**Actual Behavior**:
- All devices receive same high-resolution images (2560x1440)
- Only JPEG format available
- All gallery images load immediately
- Mobile devices download desktop-sized images

**Performance Impact**:
- **Mobile 4G**: 15MB total gallery download
- **Loading Time**: 8-12 seconds on slow connections
- **Data Usage**: Excessive for mobile users
- **LCP**: Gallery section causes Largest Contentful Paint delays

**Environment**:
- **High Impact**: Mobile devices, slow connections
- **Moderate Impact**: Standard density screens
- **Low Impact**: Desktop with fast internet

**Suggested Solutions**:
1. **Implement Responsive Images**:
   ```html
   <img 
     srcset="image-480w.webp 480w, 
             image-768w.webp 768w, 
             image-1200w.webp 1200w"
     sizes="(max-width: 480px) 100vw, 
            (max-width: 768px) 50vw, 
            33vw"
     src="image-768w.jpg"
     alt="RNM Server Screenshot"
     loading="lazy"
   />
   ```

2. **Add WebP Support**:
   ```html
   <picture>
     <source srcset="image.webp" type="image/webp">
     <img src="image.jpg" alt="Gallery image">
   </picture>
   ```

3. **Implement Progressive Loading**:
   - Use placeholder blur effect
   - Load low-quality images first
   - Progressive enhancement to full quality

**File Size Comparison**:
```
Original: 2560x1440 JPEG (2.1MB)
Optimized: 
- 480w WebP (85KB)
- 768w WebP (185KB)  
- 1200w WebP (420KB)
- 2560w WebP (850KB)
```

**Related Issues**: BUG-001 (Performance on mobile)

---

### BUG-007: Modal Dialogs Don't Trap Focus Properly
**Priority**: Medium  
**Category**: Accessibility/UI  
**Status**: Open  
**Assigned To**: Frontend Team  
**Reporter**: Accessibility Team  
**Date Created**: 2024-12-XX  

**Description**:
Modal dialogs (server rules, image gallery lightbox) don't properly trap focus, allowing keyboard users to navigate to background elements.

**Steps to Reproduce**:
1. Open any modal dialog (rules popup, gallery lightbox)
2. Use Tab key to navigate within modal
3. Continue tabbing beyond last focusable element
4. Observe focus behavior

**Expected Behavior**:
- Focus remains trapped within modal
- Tab from last element cycles to first element
- Shift+Tab from first element cycles to last element
- Escape key closes modal and returns focus

**Actual Behavior**:
- Focus moves to background page elements
- Background page remains interactive
- Modal can't be closed with keyboard alone
- Focus lost when modal closes

**Accessibility Impact**:
- Keyboard users can't efficiently navigate modals
- Screen reader users lose context
- WCAG 2.1 guideline 2.4.3 violation (Focus Order)

**Affected Modals**:
- Server rules and guidelines popup
- Gallery image lightbox
- Contact form modal
- Privacy policy overlay

**Suggested Implementation**:
```javascript
// Focus trap utility
function trapFocus(element) {
  const focusableElements = element.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    }
    
    if (e.key === 'Escape') {
      closeModal();
    }
  });
}
```

**Additional Requirements**:
- Add `role="dialog"` and `aria-modal="true"`
- Implement `aria-labelledby` for modal titles
- Disable background scroll when modal open
- Return focus to trigger element on close

**Related Issues**: BUG-005 (Other accessibility issues)

---

## Resolved Bugs

### BUG-R001: ✅ Logo Image Not Loading on HTTPS
**Priority**: High  
**Category**: Functionality  
**Status**: Resolved  
**Resolved By**: DevOps Team  

**Description**:
RNM skull logo fails to load on HTTPS version of site due to mixed content policy.

**Resolution**:
Updated all image references to use relative URLs and configured CDN with proper SSL certificates.

**Files Changed**:
- `components/layout/Header.tsx`
- `public/images/` directory restructured
- CDN configuration updated

---

### BUG-R002: ✅ Mobile Layout Breaking on Landscape Orientation
**Priority**: Medium  
**Category**: Mobile/UI  
**Status**: Resolved  
**Resolved By**: Frontend Team    

**Description**:
Mobile landscape orientation caused header overflow and button misalignment.

**Resolution**:
Added landscape-specific media queries and flexible header sizing.

**CSS Changes**:
```css
@media screen and (max-height: 500px) and (orientation: landscape) {
  .header { height: 60px; }
  .hero-content { padding-top: 80px; }
}
```

---

## Bug Prevention Measures

### Code Review Checklist
- [ ] **Accessibility**: Focus management, ARIA labels, color contrast
- [ ] **Mobile**: Touch targets, responsive design, performance
- [ ] **Performance**: Image optimization, lazy loading, code splitting
- [ ] **Cross-browser**: Testing in Chrome, Firefox, Safari, Edge
- [ ] **Error Handling**: Network failures, API timeouts, user feedback

### Automated Testing
- **Unit Tests**: Component functionality and edge cases
- **Integration Tests**: API responses and data flow
- **E2E Tests**: Critical user journeys (join server flow)
- **Accessibility Tests**: axe-core integration in CI/CD
- **Performance Tests**: Lighthouse CI for performance budgets

### Monitoring & Alerts
- **Error Tracking**: Sentry for runtime errors
- **Performance Monitoring**: Core Web Vitals tracking
- **Uptime Monitoring**: Server stats API availability
- **User Feedback**: In-app feedback widget for bug reports

---

## Bug Reporting Template

When reporting new bugs, use this template:

```markdown
### BUG-XXX: [Clear, Specific Title]
**Priority**: Critical/High/Medium/Low  
**Category**: UI/UX/Performance/Accessibility/Mobile/Integration  
**Status**: Open/In Progress/Testing/Resolved  
**Assigned To**: Team/Person  
**Reporter**: Your Name  
**Date Created**: YYYY-MM-DD  

**Description**:
[Clear description of the issue]

**Steps to Reproduce**:
1. [Step one]
2. [Step two]
3. [Step three]

**Expected Behavior**:
[What should happen]

**Actual Behavior**:
[What actually happens]

**Environment**:
- **Browser**: [Browser and version]
- **OS**: [Operating system]
- **Device**: [Desktop/Mobile device]
- **Screen Size**: [Viewport dimensions]

**Additional Context**:
- Screenshots: [Attach if relevant]
- Error logs: [Include relevant logs]
- Related issues: [Reference other bugs]

**Suggested Solutions**:
[Any potential fixes or workarounds]

**Related Issues**: [Link to related bugs]
```

---

## Contact & Escalation

### Bug Triage Team
- **Lead**: Senior Developer
- **Frontend**: Frontend Team Lead  
- **Backend**: Backend Developer
- **Design**: UI/UX Designer
- **QA**: Quality Assurance Lead

### Escalation Process
1. **Critical Bugs**: Immediate Slack notification + email
2. **High Priority**: Daily standup discussion
3. **Medium Priority**: Weekly bug review meeting
4. **Low Priority**: Sprint planning consideration

### Communication Channels
- **Slack**: #bugs-and-issues channel
- **Email**: bugs@rnm-server.com
- **Project Management**: GitHub Issues integration
- **Emergency**: Direct contact for critical production issues
