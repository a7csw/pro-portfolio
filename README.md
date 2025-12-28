# Portfolio Website

A modern, high-impact personal portfolio website showcasing AI automation engineering, software development, and SaaS product building expertise.

## 🚀 Features

- **Modern Design**: Dark-first design with beautiful gradients and smooth animations
- **Responsive**: Fully responsive across all devices (mobile, tablet, desktop)
- **Performance**: Built with React + Vite for lightning-fast load times
- **Animations**: Smooth, purposeful animations using Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Accessible**: WCAG compliant color contrast and keyboard navigation

## 🛠️ Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Inter (Google Fonts)

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub (this repo is already set up)
2. Visit [vercel.com](https://vercel.com)
3. Click "Add New Project"
4. Import the repository `a7csw/pro-portfolio` (or `a7csw/abdulrahman-portfolio`)
5. Vercel will automatically detect Vite and configure the build settings:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
6. Click "Deploy"

The site will be live in ~2 minutes with automatic HTTPS and a Vercel domain. You can add a custom domain later in project settings.

Alternatively, use the Vercel CLI:

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use the Netlify CLI:

```bash
npm install -g netlify-cli
netlify deploy --prod
```

## 📁 Project Structure

```
portfolio-app/
├── public/
│   └── profile.jpg          # Profile photo
├── src/
│   ├── components/
│   │   ├── Navigation.jsx   # Top navigation bar
│   │   ├── Hero.jsx         # Hero section with main headline
│   │   ├── ValueProposition.jsx  # Why work with me section
│   │   ├── Capabilities.jsx # Services/offerings section
│   │   ├── Projects.jsx     # Expertise section
│   │   ├── Process.jsx      # How we'll work together
│   │   ├── About.jsx        # About & skills section
│   │   └── Contact.jsx      # Contact section with CTA
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles & Tailwind imports
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## 🎨 Customization

### Update Personal Information

1. **Name & Branding**: Update in `Navigation.jsx` and `index.html`
2. **Profile Photo**: Replace `public/profile.jpg` with your photo
3. **Email**: Update in `Contact.jsx`
4. **Social Links**: Update URLs in `Contact.jsx`
5. **Content**: Modify text in each component file

### Update Colors

Edit `tailwind.config.js` to customize the color palette:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      }
    }
  }
}
```

### Modify Sections

Each section is a separate component in `src/components/`. Simply edit the corresponding file to update content, layout, or styling.

## 📝 Content Guidelines

This portfolio is designed to:
- Position you as a professional (not a student)
- Appeal to both technical and non-technical audiences
- Focus on business impact and results
- Demonstrate technical expertise without overwhelming visitors
- Drive conversions to the contact form

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint (if configured)

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 🤝 Support

For questions or support, contact: alfaiadiabood@gmail.com

---

Built with ❤️ using React, Tailwind CSS, and Framer Motion
