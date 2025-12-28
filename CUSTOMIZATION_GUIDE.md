# 🎨 Customization Guide

This guide will help you personalize your portfolio website.

## 🚦 Quick Start Checklist

Before deploying, update these essential items:

### 1. Personal Information

**File: `src/components/Navigation.jsx`**
- Line 19: Update the name in the navigation

**File: `src/components/Hero.jsx`**
- Lines 32-48: Update the main headline and description
- Ensure your photo is in `/public/profile.jpg`

**File: `src/components/About.jsx`**
- Line 34: Update the name
- Lines 37-53: Update the about text with your story
- Lines 58-69: Update the skill badges if needed
- Lines 76-97: Update your technical skills

**File: `src/components/Contact.jsx`**
- Line 44: Update email address (currently `hello@abdulrahman.dev`)
- Line 50: Update email in the displayed text
- Lines 60-86: Update social media links (GitHub, LinkedIn, Twitter/X)

**File: `index.html`**
- Line 6: Update page title
- Line 7: Update meta description
- Lines 8-10: Update SEO meta tags

### 2. Profile Photo

1. Replace `/public/profile.jpg` with your professional photo
2. Recommended dimensions: 800x800px or larger
3. Format: JPG or PNG
4. Ensure good lighting and professional appearance

### 3. Projects Section

**File: `src/components/Projects.jsx`**

Update the `projects` array (lines 8-48) with your actual projects:

```javascript
{
  title: "Your Project Title",
  category: "Project Category",
  description: "Clear description of what you built",
  impact: ["Result 1", "Result 2", "Result 3"],
  tech: ["Tech1", "Tech2", "Tech3"],
  color: "blue" // Options: blue, purple, green, pink
}
```

### 4. Services/Capabilities

**File: `src/components/Capabilities.jsx`**

Customize the `capabilities` array (lines 8-39) to match your services:

```javascript
{
  title: "Your Service Name",
  description: "What you offer",
  outcomes: ["Benefit 1", "Benefit 2", "Benefit 3"],
  gradient: "from-blue-500 to-cyan-500"
}
```

### 5. Value Proposition

**File: `src/components/ValueProposition.jsx`**

Update the `values` array (lines 8-26) with your unique value props.

### 6. Process/Workflow

**File: `src/components/Process.jsx`**

Customize the `steps` array (lines 8-38) to reflect your actual workflow.

## 🎨 Design Customization

### Change Colors

**File: `tailwind.config.js`**

Update the color palette:

```javascript
colors: {
  primary: {
    500: '#0ea5e9',  // Change primary color
    600: '#0284c7',
  },
}
```

### Change Fonts

**File: `src/index.css`**

Line 1: Update the Google Fonts import
```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@400;600;700&display=swap');
```

**File: `tailwind.config.js`**

Update fontFamily:
```javascript
fontFamily: {
  sans: ['YourFont', 'sans-serif'],
}
```

### Adjust Animations

**File: Component files**

Each component uses Framer Motion. Adjust animation settings:

```javascript
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

- `y: 20` - Distance to move (in pixels)
- `duration: 0.6` - Animation speed (in seconds)
- `delay: 0.2` - Start delay (in seconds)

## 📱 Responsive Design

The site is already fully responsive. To customize breakpoints:

**Tailwind Breakpoints:**
- `sm:` - 640px and up (mobile landscape)
- `md:` - 768px and up (tablet)
- `lg:` - 1024px and up (desktop)
- `xl:` - 1280px and up (large desktop)

Example:
```jsx
className="text-2xl md:text-4xl lg:text-6xl"
```

## 🔧 Advanced Customization

### Add New Section

1. Create new component in `/src/components/NewSection.jsx`
2. Import and add to `App.jsx`:
```javascript
import NewSection from './components/NewSection'

// Add in the return statement
<NewSection />
```

### Add Navigation Link

**File: `src/components/Navigation.jsx`**

Add new button in the navigation (lines 28-46):
```jsx
<button
  onClick={() => scrollToSection('new-section')}
  className="text-gray-300 hover:text-white transition-colors"
>
  New Section
</button>
```

Make sure your new section has an `id` attribute:
```jsx
<section id="new-section">
```

### Modify Gradient Styles

Gradients are defined using Tailwind classes:
- `bg-gradient-to-r` - Left to right
- `bg-gradient-to-b` - Top to bottom
- `from-blue-500` - Start color
- `via-purple-500` - Middle color (optional)
- `to-pink-500` - End color

Apply to text:
```jsx
className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
```

## 📊 Analytics Setup (Optional)

### Google Analytics

1. Get your GA4 tracking ID from Google Analytics
2. Add to `index.html` before `</head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

### Vercel Analytics

Already built into Vercel! Just enable in project settings.

## 🎯 SEO Optimization

**File: `index.html`**

Update meta tags for better SEO:

```html
<meta name="description" content="Your description">
<meta name="keywords" content="keyword1, keyword2, keyword3">
<meta property="og:title" content="Your Name - Professional Title">
<meta property="og:description" content="Your description">
<meta property="og:image" content="https://yoursite.com/og-image.jpg">
<meta property="og:url" content="https://yoursite.com">
<meta name="twitter:card" content="summary_large_image">
```

## 🧪 Testing Your Changes

After making changes:

```bash
# Start dev server
npm run dev

# Test in browser
# Open http://localhost:5173

# Test production build
npm run build
npm run preview
```

## 📝 Content Writing Tips

### Headlines
- Keep them clear and benefit-focused
- Use active voice
- Highlight results, not just features

### Descriptions
- Short paragraphs (2-3 lines max)
- Focus on "what's in it for them"
- Use concrete numbers when possible

### Project Descriptions
- Start with the problem
- Explain your solution
- Highlight measurable results
- Use specific metrics (percentages, time saved, revenue)

## 🚀 Performance Tips

- Optimize images before adding (use TinyPNG or Squoosh)
- Keep bundle size under 500KB
- Test on mobile devices regularly
- Use Chrome DevTools Lighthouse for performance audits

## 🆘 Common Issues

### Gradient not showing
- Ensure you're using the `text-gradient` utility class
- Check that both `bg-clip-text` and `text-transparent` are applied

### Animation not working
- Verify Framer Motion is installed: `npm install framer-motion`
- Check component import: `import { motion } from 'framer-motion'`
- Ensure element is wrapped in `<motion.div>` not just `<div>`

### Styles not applying
- Run `npm run dev` to restart the dev server
- Clear browser cache
- Check for typos in className

---

**Need more help?** Check the main README.md or DEPLOYMENT.md files.

Happy customizing! 🎨✨

