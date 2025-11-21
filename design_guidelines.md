# Artist's Journal & Portfolio - Design Guidelines

## Design Approach
**Reference-Based Design** inspired by Behance portfolios, Instagram's visual-first layouts, and Medium's reading experience. This creates a gentle, artistic sanctuary combining gallery presentation with personal storytelling.

## Layout Philosophy
**Lead with Artwork**: Skip traditional hero sections. Open immediately with a masonry grid of recent work and diary entries, creating an intimate, gallery-like atmosphere. Content flows organically like an artist's sketchbook.

## Typography System

**Primary Font**: 'Noto Serif TC' (Google Fonts) - elegant, readable for Chinese characters
**Accent Font**: 'Inter' (Google Fonts) - clean for UI elements

Hierarchy:
- Page titles: text-4xl md:text-5xl font-light
- Section headings: text-2xl md:text-3xl font-normal
- Diary entry titles: text-xl md:text-2xl font-medium
- Body text: text-base md:text-lg leading-relaxed
- Metadata/captions: text-sm font-light

## Spacing System
**Tailwind Units**: 4, 6, 8, 12, 16, 24
- Component padding: p-6 md:p-8
- Section spacing: py-12 md:py-24
- Card gaps: gap-6 md:gap-8
- Content margins: mb-4, mb-6, mb-8

## Component Library

**Navigation**
Minimal top bar with soft background blur, logo left, menu right (作品集, 日記, 關於我), sticky positioning

**Masonry Gallery Grid**
3-column responsive grid (1 col mobile, 2 col tablet, 3 col desktop), mixed artwork and diary preview cards, staggered heights for organic feel

**Artwork Cards**
Rounded corners (rounded-xl), subtle shadow, image fills card, overlay on hover with title and date, click to full view modal

**Diary Entry Cards**
Larger than artwork cards, featured image at top, date badge, excerpt preview (3-4 lines), "閱讀更多" link, mood indicator icon

**Today's Activity Section**
Highlighted banner area, shows latest diary entry + newest artwork side-by-side, "今日創作" heading, warm accent background

**Detailed View Modal**
Full-screen overlay with backdrop blur, large image display, creation story sidebar, close button top-right, navigation arrows for browsing

**Diary Writing Interface**
Clean editor with title field, rich text area, image upload zone, mood selector (happy/calm/inspired/melancholic icons), date picker, publish button

**Footer**
Simple contact info, social links (Instagram, email), copyright, all center-aligned

## Images

**Gallery Images**: Placeholder for artist's paintings/artworks throughout masonry grid and individual cards

**Diary Featured Images**: Lifestyle photos, work-in-progress shots, inspiration photos accompanying journal entries

**About Page**: Artist portrait photo, studio environment shots

**No Large Hero Image**: Design opens directly with content grid for immediate visual engagement

## Accessibility
- Sufficient contrast while maintaining soft aesthetics (WCAG AA minimum)
- Focus states with gentle glow effect (ring-2 ring-offset-2)
- Keyboard navigation throughout
- Alt text for all artwork
- Semantic HTML structure

## Animations
Minimal and gentle:
- Fade-in on scroll for cards (opacity transition)
- Smooth hover elevations on cards (translate-y-1)
- Modal entrance/exit fades
- No aggressive or distracting motion

## Key Design Principles
1. **Visual Comfort**: Soft edges, generous whitespace, low-contrast backgrounds
2. **Content First**: Artwork and stories take center stage immediately
3. **Personal Touch**: Handwritten aesthetic through font choices and organic layouts
4. **Seamless Integration**: Diary and portfolio feel like one cohesive journal
5. **Mobile Beauty**: Equal attention to mobile experience with touch-friendly targets