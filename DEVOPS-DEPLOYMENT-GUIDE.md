# AGD Solutions - DevOps Deployment Guide

## 🔗 Repository
**GitHub:** https://github.com/prathyushardlw/AGD_Solutions.git

---

## 📦 What's Included

### Frontend
- `index.html` - Main website
- `admin.html` - Admin dashboard for managing contact submissions
- `css/style.css` - Styling
- `js/script.js` - Interactive functionality
- Logo files and assets

### Backend (`/backend` folder)
- `server.js` - Node.js/Express API server
- `package.json` - Dependencies (Express, Mongoose, CORS, dotenv)
- `.env.example` - Environment variable template
- `.env` - **NOT COMMITTED** (contains secrets)

### Tests (`/tests` folder)
- Playwright automated tests for form validation
- Test results and screenshots

---

## 🚀 Deployment Steps

### 1️⃣ Deploy Backend (Required First)

**Recommended Platforms:**
- Render.com (Free tier available)
- Railway.app (Free tier)
- Heroku
- AWS Elastic Beanstalk
- Azure App Service

**Backend Requirements:**
- Node.js 18+
- Port: 5000 (configurable via PORT env var)
- MongoDB Atlas connection already configured

**Environment Variables to Set:**
```bash
MONGODB_URI=mongodb+srv://agd_admin:UCU2RhdnLZVoL04C@cluster0.xqxnewg.mongodb.net/agd_admin?retryWrites=true&w=majority&appName=Cluster0
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-frontend-url.com
ADMIN_USERNAME=admin
ADMIN_PASSWORD=AGD2024!Secure
```

**⚠️ IMPORTANT:** Change `ADMIN_PASSWORD` before production deployment!

**Installation Commands:**
```bash
cd backend
npm install
npm start
```

**Health Check Endpoint:**
```
GET /api/health
```
Should return: `{"status":"ok","message":"AGD Solutions API is running","mongodb":"connected"}`

---

### 2️⃣ Update Frontend Configuration

After backend is deployed, update the API URL in **TWO files**:

**File 1: `js/script.js` (line ~112)**
```javascript
: 'https://your-backend-url.com/api';  // Replace with actual backend URL
```

**File 2: `admin.html` (line ~536)**
```javascript
const API_URL = 'https://your-backend-url.com/api';  // Replace with actual backend URL
```

---

### 3️⃣ Deploy Frontend

**Recommended Platforms:**
- Netlify (Easiest - drag & drop)
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Azure Static Web Apps

**Files to Deploy:**
- All root files: `index.html`, `admin.html`
- `css/` folder
- `js/` folder
- Logo image files
- **DO NOT deploy**: `backend/`, `tests/`, `node_modules/`, `.env`

**For Netlify/Vercel:**
1. Connect to GitHub repo
2. Set build settings:
   - Build command: (leave empty - static site)
   - Publish directory: `/` (root)
3. Deploy

---

## 🔐 Admin Dashboard Access

**URL:** `https://your-domain.com/admin.html`

**Default Credentials:**
- Username: `admin`
- Password: `AGD2024!Secure`

**⚠️ Change password in backend `.env` before production!**

**Features:**
- View all contact form submissions
- Filter by status (New, Contacted, Qualified, Closed)
- Update contact status
- Real-time statistics

---

## 📊 API Endpoints

### Public Endpoints
- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check

### Protected Endpoints (Require Authentication)
- `POST /api/admin/login` - Admin login
- `GET /api/contacts` - Get all contacts
- `GET /api/contacts/:id` - Get single contact
- `PATCH /api/contacts/:id/status` - Update contact status

---

## 🗄️ Database

**Provider:** MongoDB Atlas
**Database Name:** `agd_admin`
**Collection:** `contacts`

**Connection:** Already configured in `.env`
**Access:** Log into MongoDB Atlas to view data directly
- URL: https://cloud.mongodb.com/

---

## ✅ Post-Deployment Testing

1. **Test Contact Form:**
   - Go to main website
   - Fill out and submit contact form
   - Should see success message

2. **Test Admin Dashboard:**
   - Go to `/admin.html`
   - Login with credentials
   - Verify contact submission appears
   - Test updating contact status

3. **Verify Database:**
   - Login to MongoDB Atlas
   - Check `agd_admin` database
   - Verify records in `contacts` collection

---

## 🔒 Security Checklist

- [ ] Changed default admin password
- [ ] Backend environment variables set correctly
- [ ] CORS configured for production frontend URL
- [ ] `.env` file NOT committed to Git (verified ✅)
- [ ] HTTPS enabled on both frontend and backend
- [ ] MongoDB user has appropriate permissions (read/write on agd_admin)

---

## 📝 Configuration Summary

**MongoDB Database:** `agd_admin` (NOT `agd_solutions`)
**MongoDB User:** `agd_admin`
**Backend Port:** 5000
**Admin Username:** `admin`

---

## 🛠️ Local Development

**Frontend:** Open `index.html` in browser
**Backend:** 
```bash
cd backend
npm install
npm start
```
**Admin:** Open `admin.html` in browser

---

## 📞 Support

**Technical Contact:** Prathyusha (prathyusha.r@testgo.com)
**Repository:** https://github.com/prathyushardlw/AGD_Solutions

---

## 🎯 Quick Deploy Commands

**For Backend (Example: Render)**
```bash
# Connect to this GitHub repo
# Set environment variables in Render dashboard
# Deploy from main branch
# Root directory: /backend
# Build command: npm install
# Start command: npm start
```

**For Frontend (Example: Netlify)**
```bash
# Connect to this GitHub repo
# Deploy from main branch
# Root directory: / (root)
# Build command: (leave empty)
# Publish directory: / (root)
```

---

## ✨ Features Implemented

✅ Responsive website with smooth navigation
✅ Contact form with client & server validation
✅ Backend API with MongoDB integration
✅ Admin dashboard with authentication
✅ Contact management with status tracking
✅ Custom notification system
✅ Mobile responsive design
✅ SEO optimized
✅ Playwright automated tests

---

**Last Updated:** September 3, 2026
**Version:** 1.0.0
**Status:** Ready for Production Deployment
