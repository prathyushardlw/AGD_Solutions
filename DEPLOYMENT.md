# AGD Solutions - Deployment Guide

## 📁 Project Structure

```
AGD_Solutions/
├── frontend/          ← Deploy to Netlify/Vercel
│   ├── index.html
│   ├── admin.html
│   ├── css/
│   ├── js/
│   └── *.png (logos)
│
└── backend/           ← Deploy to Render/Railway
    ├── server.js
    ├── package.json
    └── .env (create on platform)
```

---

## 🚀 Step 1: Deploy Backend First

### Platform: Render.com (Recommended - Free)

1. **Create Account**: https://render.com
2. **New Web Service** → Connect GitHub repo
3. **Configure:**
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Environment**: Node

4. **Add Environment Variables:**
   ```
   MONGODB_URI=mongodb+srv://agd_admin:UCU2RhdnLZVoL04C@cluster0.xqxnewg.mongodb.net/agd_admin
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=AGD2024!Secure
   PORT=5000
   NODE_ENV=production
   FRONTEND_URL=https://agdsolutions.netlify.app
   ```

5. **Deploy** → Get your backend URL:
   ```
   Example: https://agd-backend.onrender.com
   ```

---

## 🎨 Step 2: Update API URLs

**IMPORTANT**: Before deploying frontend, update these files with your backend URL:

### File 1: `frontend/js/script.js` (Line ~107-112)

Replace:
```javascript
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000/api'
    : 'http://localhost:5000/api';
```

With:
```javascript
const API_URL = 'https://agd-backend.onrender.com/api';
```

### File 2: `frontend/admin.html` (Line ~536)

Replace:
```javascript
const API_URL = 'http://localhost:5000/api';
```

With:
```javascript
const API_URL = 'https://agd-backend.onrender.com/api';
```

**Commit and push these changes to GitHub!**

---

## 🌐 Step 3: Deploy Frontend

### Option A: Netlify (Easiest)

1. **Create Account**: https://netlify.com
2. **New Site** → Import from Git
3. **Configure:**
   - **Base Directory**: `frontend`
   - **Build Command**: (leave empty - static site)
   - **Publish Directory**: `frontend`

4. **Deploy** → Get your frontend URL:
   ```
   Example: https://agdsolutions.netlify.app
   ```

### Option B: Vercel

1. **Create Account**: https://vercel.com
2. **New Project** → Import GitHub repo
3. **Configure:**
   - **Root Directory**: `frontend`
   - **Framework Preset**: Other
   - **Build Command**: (leave empty)
   - **Output Directory**: `.`

4. **Deploy** → Get your frontend URL

---

## ✅ Step 4: Update CORS

Go back to Render backend settings:

- Update `FRONTEND_URL` environment variable with your actual frontend URL
- Example: `https://agdsolutions.netlify.app`

---

## 🧪 Step 5: Test Everything

1. **Test Public Website:**
   - Visit: `https://agdsolutions.netlify.app`
   - Fill contact form
   - Verify success message

2. **Test Admin Portal:**
   - Visit: `https://agdsolutions.netlify.app/admin.html`
   - Login: `admin` / `AGD2024!Secure`
   - Verify contact appears in dashboard

3. **Test API:**
   - Visit: `https://agd-backend.onrender.com/api/health`
   - Should return: `{"status":"OK","timestamp":"..."}`

---

## 📝 Quick Checklist

```
□ Deploy backend to Render
□ Note backend URL
□ Update frontend/js/script.js with backend URL
□ Update frontend/admin.html with backend URL
□ Commit and push changes
□ Deploy frontend to Netlify
□ Update FRONTEND_URL in backend env
□ Test contact form
□ Test admin login
□ Done! ✅
```

---

## 🔗 Final URLs

After deployment, you'll have:

- **Public Website**: `https://agdsolutions.netlify.app`
- **Admin Portal**: `https://agdsolutions.netlify.app/admin.html`
- **Backend API**: `https://agd-backend.onrender.com/api`

---

## 💡 Notes

- **MongoDB**: Already hosted on Atlas, no changes needed
- **Free Tiers**: Both Render and Netlify have free tiers
- **Custom Domain**: Can be added later in platform settings
- **HTTPS**: Automatic on both platforms

---

## 🆘 Troubleshooting

**Contact form not working?**
- Check if backend URL is updated in frontend files
- Verify CORS settings in backend
- Check browser console for errors

**Admin login failing?**
- Verify backend is running
- Check credentials in backend .env
- Clear browser cache

**Backend sleeping?**
- Render free tier sleeps after 15min inactivity
- First request may take 30-60 seconds
- Upgrade to paid plan for always-on
