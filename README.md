# Namit Khatiwada - Portfolio Website 🚀

A modern, responsive portfolio website showcasing my journey as an **AI Engineer, Full-Stack Developer, and Logistics Executive**.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![License](https://img.shields.io/badge/License-MIT-blue)
![Version](https://img.shields.io/badge/Version-2.0-orange)

## 🌐 Live Demo

**Website:** https://namitkhatiwada.com.np

## ✨ Features

- 🎨 **Modern Dark Theme** - Sleek dark UI with gold and cyan accents
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- ⚡ **Fast & Lightweight** - Pure HTML/CSS/JavaScript, no frameworks
- 🎯 **Smooth Animations** - Elegant scroll animations and transitions
- 📧 **Contact Form** - EmailJS integration for direct messaging
- 🔧 **Easy to Deploy** - Ready for Vercel, Netlify, or any static host
- ♿ **Accessible** - Semantic HTML, keyboard navigation
- 🔍 **SEO Optimized** - Meta tags, structured content

## 📋 Sections

### Hero
- Professional introduction with profile photo
- Call-to-action buttons
- Key statistics (4+ Projects, 2+ Years Experience, Nepal Based)

### About
- Personal bio and background
- Current focus areas (AI, FinTech, Supply Chain)
- Key information (timezone, location, open to opportunities)

### Skills
- **AI & Machine Learning** - Python, TensorFlow, LLMs, RAG, Gemini, Claude
- **Data Science** - Pandas, NumPy, Analytics, Backtesting, Statistical Modeling
- **Backend & APIs** - FastAPI, Flask, REST APIs, PostgreSQL, Docker
- **Frontend & Web** - React, JavaScript, HTML/CSS, Streamlit, Tailwind
- **Tools & Platforms** - Git, Vercel, Streamlit Cloud, Google Cloud, Groq
- **Domain Knowledge** - Supply Chain, Logistics, NEPSE Trading, FinTech

### Projects
1. **NEPSE Trade Pro** - AI-powered stock trading dashboard with backtesting
2. **Portfolio Website** - This site! Built with vanilla HTML/CSS/JS
3. **Supply Chain Analytics** - Distribution and inventory tracking system
4. **Academic Projects** - BSc CSIT coursework (DSA, Graphics, Architecture)

### Experience
- **Logistics Executive** at Teledirect Pvt. Ltd. (2022-Present)
- **BSc CSIT** at Nepalaya College / Tribhuvan University (2021-2025)
- **AI Engineering** Self-Study Path (2023-Present)

### Contact
- Professional contact form with EmailJS integration
- Direct links to GitHub, LinkedIn, and Email
- Timezone and availability information

## 🛠️ Tech Stack

- **Frontend** - HTML5, CSS3, Vanilla JavaScript
- **Styling** - Custom CSS with CSS Variables
- **Animations** - CSS transitions and keyframes
- **Email** - EmailJS for contact form
- **Deployment** - Vercel
- **Domain** - namitkhatiwada.com.np
- **Version Control** - Git/GitHub

## 📦 File Structure

```
Portfolio/
├── index.html              # Main portfolio page
├── package.json            # Project metadata
├── vercel.json            # Vercel configuration
├── SETUP_GUIDE.md         # Detailed setup instructions
├── photo.webp             # Profile photo
├── .gitignore             # Git ignore rules
├── css/
│   └── styles.css         # All styling (responsive)
└── js/
    ├── mail.js            # EmailJS integration
    └── script.js          # Animations & interactivity
```

## 🚀 Quick Start

### Local Development
```bash
# Clone the repository
git clone https://github.com/Namit98-ai/Portfolio.git
cd Portfolio

# Open in browser
open index.html
# or
python -m http.server 8000
# Visit http://localhost:8000
```

### Deploy to Vercel
1. Push this repo to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import this repository
4. Add custom domain in Vercel settings
5. Update DNS records at domain registrar
6. Done! 🎉

See [SETUP_GUIDE.md](./SETUP_GUIDE.md) for detailed deployment instructions.

## 🔧 Configuration

### EmailJS Setup
To enable the contact form:
1. Create account at [emailjs.com](https://www.emailjs.com)
2. Set up email service and template
3. Add your credentials to `js/mail.js`:
   ```javascript
   emailjs.init("YOUR_PUBLIC_KEY");
   emailjs.send('service_YOUR_SERVICE_ID', 'template_YOUR_TEMPLATE_ID', ...)
   ```

### Customize Content
Edit `index.html` to:
- Update project descriptions and links
- Add/remove skills
- Change experience details
- Modify contact information

Edit `css/styles.css` to:
- Change color scheme (see `:root` variables)
- Adjust typography and spacing
- Customize animations

## 📱 Responsive Design

- **Desktop** (1200px+) - Full layout with grid
- **Tablet** (768px - 1199px) - Adjusted columns and spacing
- **Mobile** (< 768px) - Single column, touch-friendly navigation

## 🎨 Color Palette

```css
--dark-bg: #0a0e27;           /* Main background */
--dark-secondary: #1a1f3a;    /* Secondary background */
--dark-tertiary: #252d4a;     /* Card background */
--accent-gold: #d4af37;       /* Primary accent */
--accent-bright: #64d4ff;     /* Secondary accent (cyan) */
--text-primary: #ffffff;      /* Main text */
--text-secondary: #b8bcc8;    /* Secondary text */
--text-muted: #8b92a0;        /* Muted text */
--border-color: #2a3150;      /* Border color */
```

## 📊 Performance

- **Page Load** - < 1 second
- **Lighthouse Score** - 95+ (Performance, Accessibility, Best Practices, SEO)
- **Bundle Size** - < 500KB (including images)
- **Mobile Friendly** - 100% responsive

## 🔐 Security

- No external dependencies (except EmailJS and Google Fonts)
- No database or backend exposure
- HTTPS enabled by default on Vercel
- No sensitive credentials in frontend code

## 🐛 Troubleshooting

### Contact Form Not Working?
1. Check EmailJS service/template configured
2. Verify public key and credentials in `js/mail.js`
3. Check browser console (F12) for errors
4. Check [EmailJS logs](https://dashboard.emailjs.com)

### Domain Issues?
1. Check DNS records at domain registrar
2. Wait 5-30 minutes for DNS propagation
3. Verify domain in Vercel dashboard
4. Clear browser cache

### Styling Issues?
1. Hard refresh browser (Ctrl+Shift+R)
2. Check CSS file is loading (Network tab in DevTools)
3. Clear Vercel cache and redeploy

## 📈 Future Enhancements

- [ ] Blog section with latest projects
- [ ] Dark mode toggle
- [ ] Multi-language support
- [ ] Analytics integration
- [ ] Resume PDF download
- [ ] GitHub stats visualization
- [ ] Medium blog integration
- [ ] Speaking engagements timeline

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**Namit Khatiwada**
- 📍 Kathmandu, Nepal
- 💼 Logistics Executive @ Teledirect Pvt. Ltd.
- 🎓 BSc CSIT @ Tribhuvan University
- 🤖 AI Engineer in Progress
- 🌐 https://namitkhatiwada.com.np
- 🐙 https://github.com/Namit98-ai
- 💼 https://linkedin.com/in/namit-khatiwada
- 📧 khatiwadanamit@gmail.com

## 🙏 Acknowledgments

- Inspired by modern portfolio designs
- Built with passion and dedication
- Thanks to the open source community

---

**Made with ❤️ by Namit Khatiwada**

Last Updated: June 3, 2024
