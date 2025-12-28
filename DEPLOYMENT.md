# 🚀 Deployment Guide

This guide will help you deploy your portfolio website to production.

## Quick Deploy to Vercel (Recommended - 5 minutes)

Vercel is the recommended platform for deploying this React + Vite application. It's free, fast, and optimized for modern web frameworks.

### Method 1: Deploy via Vercel Dashboard (Easiest)

1. **Push to GitHub**
   ```bash
   cd portfolio-app
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel auto-detects Vite settings
   - Click "Deploy"
   - Done! Your site will be live in ~2 minutes

### Method 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Navigate to project directory
cd portfolio-app

# Deploy (follow prompts)
vercel

# Deploy to production
vercel --prod
```

## Alternative: Deploy to Netlify

### Via Netlify Dashboard

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Visit [app.netlify.com](https://app.netlify.com)
   - Drag and drop the `dist` folder
   - Your site is live!

### Via Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod --dir=dist
```

## Custom Domain Setup

### Vercel

1. Go to your project settings on Vercel
2. Click "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions
5. SSL is automatically configured

### Netlify

1. Go to "Domain settings" in Netlify
2. Click "Add custom domain"
3. Follow DNS configuration instructions
4. Enable HTTPS (automatic)

## Environment Variables (If Needed)

If you add any API keys or environment variables in the future:

### Vercel
1. Project Settings → Environment Variables
2. Add variables for Production, Preview, and Development
3. Redeploy

### Netlify
1. Site Settings → Environment Variables
2. Add your variables
3. Trigger a new deploy

## Performance Optimization Checklist

Before deploying to production, ensure:

- ✅ Images are optimized (compressed)
- ✅ No console errors in browser
- ✅ All links work correctly
- ✅ Contact email is updated to your real email
- ✅ Social media links point to your profiles
- ✅ Profile photo is added to `/public`
- ✅ Meta tags are updated in `index.html`
- ✅ Analytics are set up (optional but recommended)

## Post-Deployment

After deployment:

1. **Test on multiple devices**
   - Desktop browsers (Chrome, Firefox, Safari, Edge)
   - Mobile devices (iOS, Android)
   - Tablet devices

2. **Check performance**
   - Run [PageSpeed Insights](https://pagespeed.web.dev/)
   - Target: 90+ score on mobile and desktop

3. **Set up analytics** (optional)
   - Google Analytics
   - Plausible Analytics
   - Vercel Analytics

4. **Share your portfolio**
   - Update LinkedIn
   - Add to resume
   - Share on social media

## Updating Your Live Site

After making changes:

```bash
# Make your changes locally
npm run dev  # Test locally

# Build to verify no errors
npm run build

# Commit and push to GitHub
git add .
git commit -m "Update content"
git push

# Vercel/Netlify will automatically redeploy
```

## Troubleshooting

### Build Fails

```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading

- Ensure images are in the `public` folder
- Use paths starting with `/` (e.g., `/profile.jpg`)
- Check image file names match exactly (case-sensitive)

### Styles Not Applying

- Check Tailwind CSS is properly configured
- Ensure `index.css` is imported in `main.jsx`
- Clear build cache: `rm -rf dist && npm run build`

## Support

If you encounter any deployment issues:
1. Check Vercel/Netlify deployment logs
2. Review browser console for errors
3. Verify all dependencies are installed

---

**Your portfolio is ready to impress! 🎉**

Once deployed, share your link and start landing opportunities.

