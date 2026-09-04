# AGD Solutions LLC Website

A professional, responsive website for AGD Solutions LLC - Healthcare Practice Consulting.

## 🚀 Quick Start

### Local Development:
1. Open `frontend/index.html` in your web browser
2. For backend: `cd backend` → `npm install` → `npm start`

### Deployment:
See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment instructions.

## 📁 Project Structure

```
AGD_Solutions/
├── frontend/                       # Deploy to Netlify/Vercel
│   ├── index.html                 # Main website
│   ├── admin.html                 # Admin dashboard
│   ├── css/
│   │   └── style.css              # All styling
│   ├── js/
│   │   └── script.js              # Interactive functionality
│   └── *.png                      # Logo files
│
├── backend/                        # Deploy to Render/Railway
│   ├── server.js                  # Express API server
│   ├── package.json               # Dependencies
│   └── .env                       # Environment variables (not in git)
│
├── tests/                          # Playwright tests
├── DEPLOYMENT.md                   # Deployment guide
└── README.md                       # This file
```

## ✨ Features

- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Modern UI/UX** - Professional design with smooth animations
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Fast Loading** - Optimized code and assets
- **Contact Form** - Lead generation with validation
- **Smooth Navigation** - Single-page application with smooth scrolling
- **Accessibility** - WCAG compliant design

## 📋 Website Sections

1. **Hero Section** - Compelling introduction with call-to-action
2. **Value Proposition** - Key benefits for clients
3. **About Us** - Company overview, mission, vision, values, and leadership
4. **Services** - Six comprehensive service offerings
5. **How We Work** - 4-step process visualization
6. **Contact** - Lead generation form and contact information
7. **Footer** - Quick links and additional information

## 🎨 Customization

### Colors
The website uses CSS custom properties for easy color customization. Edit in `css/style.css`:

```css
:root {
    --primary-color: #b8860b;      /* Gold/Bronze */
    --secondary-color: #2c3e50;    /* Dark Blue-Gray */
    --accent-color: #c9a961;       /* Light Gold */
}
```

### Content
All content can be edited directly in `index.html`. Each section is clearly labeled with HTML comments.

### Fonts
Currently using:
- **Headings**: Playfair Display (elegant serif)
- **Body**: Inter (modern sans-serif)

## 📧 Contact Form Setup

The contact form currently displays a success message on submission. To connect it to your email/CRM:

### Option 1: FormSpree (Easiest)
1. Sign up at [formspree.io](https://formspree.io)
2. Add this to your form tag: `action="https://formspree.io/f/YOUR_FORM_ID" method="POST"`

### Option 2: Custom Backend
Modify the form submission handler in `js/script.js` (line ~100) to send data to your server.

### Option 3: Email Service (EmailJS, etc.)
Integrate with services like EmailJS for direct email sending.

## 🌐 Deployment Options

### Option 1: GitHub Pages (Free)
1. Create a GitHub repository
2. Upload all files
3. Enable GitHub Pages in repository settings
4. Your site will be live at `username.github.io/repo-name`

### Option 2: Netlify (Free)
1. Sign up at [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Get instant deployment with SSL

### Option 3: Traditional Web Hosting
Upload all files to your web hosting service via FTP/cPanel.

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🔧 Technical Details

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **Vanilla JavaScript** - No framework dependencies
- **Font Awesome** - Icon library (CDN)
- **Google Fonts** - Typography (CDN)

## 📊 Performance

- Lightweight design (~50KB total)
- Minimal external dependencies
- Optimized images recommended
- Fast page load times

## 🎯 Next Steps

1. ✅ Review all content for accuracy
2. ✅ Replace placeholder contact information
3. ✅ Set up contact form backend
4. ✅ Add Google Analytics (optional)
5. ✅ Test on multiple devices
6. ✅ Deploy to production

## 📝 Content Updates

To update content, open `index.html` and locate the section you want to modify:
- Hero section: Search for `<section id="home">`
- About: Search for `<section id="about">`
- Services: Search for `<section id="services">`
- Contact: Search for `<section id="contact">`

## 🤝 Support

For questions or assistance with the website, contact the development team.

## 📄 License

© 2026 AGD Solutions LLC. All rights reserved.
