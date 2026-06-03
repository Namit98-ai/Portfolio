# Portfolio Setup & Deployment Guide

## ✅ COMPLETED
- ✓ Portfolio code pushed to GitHub (https://github.com/Namit98-ai/Portfolio)
- ✓ All files created: HTML, CSS, JS, EmailJS integration
- ✓ Profile photo included
- ✓ Vercel configuration ready

---

## 🔧 STEP 1: Setup EmailJS (Required for Contact Form)

### 1.1 Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up with your email (khatiwadanamit@gmail.com)
3. Verify your email

### 1.2 Create Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add Service**
3. Select **Gmail** (or your preferred email provider)
4. Configure with your Gmail account (khatiwadanamit@gmail.com)
5. Copy the **Service ID** (looks like: `service_xxxxx`)

### 1.3 Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. Name: `Portfolio Contact Form`
4. Template ID will be: `template_xxxxx`

### 1.3a Configure Template Fields
In the template editor, use these variables:

```
From: {{from_name}} ({{from_email}})
Subject: {{subject}}
Message: {{message}}
```

Save the template and copy the **Template ID**

### 1.4 Get Your Public Key
1. Go to **Account** settings
2. Copy your **Public Key** (looks like: `xxxxxxxxxxxxx`)

### 1.5 Update mail.js with Your Credentials
Replace these three values in `js/mail.js`:

```javascript
// Line 4: Replace _YOUR_PUBLIC_KEY_
emailjs.init("YOUR_PUBLIC_KEY_HERE");

// Line 46: Replace service_YOUR_SERVICE_ID
emailjs.send('service_YOUR_SERVICE_ID', 'template_YOUR_TEMPLATE_ID', templateParams)
```

Example:
```javascript
emailjs.init("abc123def456");
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

---

## 🚀 STEP 2: Deploy to Vercel with Custom Domain

### 2.1 Connect GitHub to Vercel
1. Go to https://vercel.com
2. Sign up with GitHub account (Namit98-ai)
3. Authorize Vercel to access your GitHub repos
4. Click **Import Project**
5. Select **Namit98-ai/Portfolio** repository
6. Click **Import**

### 2.2 Configure Vercel Project
- **Project Name**: portfolio (or your preference)
- **Framework Preset**: Other (static site)
- **Root Directory**: ./
- Leave build settings empty (static site)
- Click **Deploy**

### 2.3 Wait for Deployment
- Vercel will build and deploy automatically
- You'll get a temporary URL (something like: namit-portfolio.vercel.app)
- Wait for the ✅ "Ready" status

### 2.4 Add Custom Domain (namitkhatiwada.com.np)
1. In Vercel project dashboard, go to **Settings**
2. Click **Domains**
3. Enter domain: `namitkhatiwada.com.np`
4. Click **Add**

### 2.5 Update DNS Settings
Vercel will show you DNS records to add. You need to:

1. Go to your domain registrar (where you registered namitkhatiwada.com.np)
2. Find **DNS Settings** or **Nameservers**
3. Add these Vercel DNS records:
   - Type: CNAME or A record (Vercel will specify)
   - Name: @ (for root domain) or www
   - Value: cname.vercel-dns.com (or IP address Vercel provides)

4. Add subdomain records if needed:
   - For www.namitkhatiwada.com.np
   - Type: CNAME
   - Name: www
   - Value: cname.vercel-dns.com

### 2.6 Verify Domain
- DNS propagation takes 5-30 minutes
- Once verified, your portfolio will be live at:
  - https://namitkhatiwada.com.np
  - https://www.namitkhatiwada.com.np

---

## 📧 STEP 3: Test Contact Form

1. Go to your portfolio: https://namitkhatiwada.com.np
2. Scroll to Contact section
3. Fill in the form:
   - Name: Test Name
   - Email: your.email@example.com
   - Subject: Test Message
   - Message: This is a test
4. Click **Send Message**
5. Check your email (khatiwadanamit@gmail.com) for the message

---

## 🔍 Troubleshooting

### Contact Form Not Sending?
- **Check EmailJS credentials** in mail.js
- **Check EmailJS Dashboard**: Email Services & Templates configured?
- **Browser Console**: Open DevTools (F12) → Console tab → Look for errors
- **Test EmailJS** directly at emailjs.com dashboard

### Domain Not Working?
- **Wait for DNS propagation** (can take 5-30 minutes)
- **Check DNS records** in your domain registrar
- **Verify in Vercel dashboard** that domain shows ✓ connected

### Page Not Loading?
- **Clear browser cache** (Ctrl+Shift+Delete)
- **Check Vercel deployment**: Dashboard should show ✓ Ready
- **Check file structure**: All files in /js, /css folders?

---

## 📁 File Structure

```
Portfolio/
├── index.html          (Main portfolio page)
├── package.json        (Project metadata)
├── vercel.json         (Vercel config)
├── photo.webp          (Your profile photo)
├── .gitignore          (Git ignore rules)
├── css/
│   └── styles.css      (All styling)
└── js/
    ├── mail.js         (EmailJS integration)
    └── script.js       (Animations & interactions)
```

---

## 🛠️ Useful Commands

```bash
# Test locally (if you want to run locally)
python -m http.server 8000
# Then visit: http://localhost:8000

# Push changes to GitHub
git add -A
git commit -m "Update message"
git push origin main

# Vercel auto-deploys on push to main branch
```

---

## 📊 Portfolio Sections

- **Hero**: Your intro with photo & CTA
- **About**: Bio, focus areas, background
- **Skills**: 6 skill categories with 40+ technologies
- **Projects**: 4 featured projects (NEPSE Trade Pro, Portfolio, etc.)
- **Experience**: Timeline with Teledirect & Nepalaya College
- **Contact**: Contact form with EmailJS + direct links

---

## 🎨 Customization Tips

### Change Colors
Edit in `css/styles.css`:
```css
:root {
    --accent-gold: #d4af37;      /* Main accent color */
    --accent-bright: #64d4ff;    /* Secondary accent */
    --dark-bg: #0a0e27;          /* Background */
}
```

### Update Content
Edit `index.html`:
- Add/remove projects in **Projects Section**
- Update skills in **Skills Section**
- Modify experience dates in **Experience Section**
- Change links in **Contact Section**

### Add More Projects
In the projects grid, duplicate a project card and update:
- Project title
- Description
- Technologies used
- GitHub link

---

## ✨ Live Checklist

- [ ] EmailJS configured with credentials in mail.js
- [ ] GitHub repo updated with latest files
- [ ] Vercel project connected to GitHub
- [ ] Custom domain pointing to Vercel
- [ ] Contact form tested and working
- [ ] Portfolio live at namitkhatiwada.com.np

---

## 📞 Support

If you need help:
1. Check browser Console (F12) for error messages
2. Check EmailJS dashboard logs
3. Check Vercel deployment logs
4. Verify DNS records at domain registrar

---

**Created:** June 3, 2024
**Portfolio Version:** 2.0
**Made with ❤️ for Namit Khatiwada**
