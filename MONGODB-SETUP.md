# MongoDB Integration - Complete Setup Guide

## ✅ What's Been Done

Your AGD Solutions website now has a **complete backend with MongoDB**!

### Created Files:
- ✅ `backend/server.js` - Express API server
- ✅ `backend/package.json` - Dependencies
- ✅ `backend/.env` - MongoDB credentials (configured)
- ✅ `backend/.gitignore` - Security
- ✅ `backend/README.md` - Backend documentation
- ✅ Updated `js/script.js` - Frontend now connects to backend

---

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Backend Dependencies

Open terminal in the project root and run:

```bash
cd backend
npm install
```

This installs:
- Express (web server)
- Mongoose (MongoDB driver)
- CORS (cross-origin requests)
- dotenv (environment variables)

### Step 2: Start the Backend Server

```bash
npm run dev
```

You should see:
```
✅ Connected to MongoDB Atlas
🚀 Server running on port 5000
📡 API available at http://localhost:5000/api
```

### Step 3: Test the Backend

Open browser and go to: **http://localhost:5000/api/health**

You should see:
```json
{
  "status": "ok",
  "message": "AGD Solutions API is running",
  "mongodb": "connected"
}
```

### Step 4: Test the Frontend

1. Open `index.html` in your browser (or use Live Server)
2. Fill out the contact form
3. Submit it
4. You should see: "Thank you for your inquiry!"

### Step 5: Verify Data in MongoDB

**Option A: MongoDB Atlas Dashboard**
1. Go to https://cloud.mongodb.com
2. Click "Browse Collections"
3. Select `agd_solutions` database
4. Click `contacts` collection
5. See your form submission! 🎉

**Option B: Using API**
```bash
# View all contacts
curl http://localhost:5000/api/contacts
```

---

## 📊 What Gets Stored

Every form submission saves:

```javascript
{
  name: "John Doe",
  email: "john@example.com", 
  phone: "123-456-7890",
  practice: "Smith Medical",
  specialty: "Primary Care",
  interest: "Practice Startup",
  message: "Need help with...",
  submittedAt: "2026-09-03T10:30:00Z",
  status: "new",  // Track lead status
  ipAddress: "192.168.1.1",
  userAgent: "Mozilla/5.0...",
  createdAt: "2026-09-03T10:30:00Z",
  updatedAt: "2026-09-03T10:30:00Z"
}
```

---

## 🌐 Deploying to Production

### Recommended: Deploy to Render (FREE)

**Backend Deployment:**

1. **Sign up at https://render.com**

2. **Create New Web Service**
   - Connect your GitHub repo
   - Service Name: `agd-solutions-api`
   - Root Directory: `backend`
   - Build Command: `npm install`
   - Start Command: `npm start`

3. **Add Environment Variable**
   - Key: `MONGODB_URI`
   - Value: `mongodb+srv://fhp_user:X61z49CvzDzVzTJi@cluster0.xqxnewg.mongodb.net/agd_solutions?retryWrites=true&w=majority&appName=Cluster0`

4. **Deploy!**
   - Wait 2-3 minutes
   - You'll get a URL like: `https://agd-solutions-api.onrender.com`

**Frontend Update:**

After backend is deployed, update `js/script.js` (line ~83):

```javascript
// Change from:
: 'https://your-backend-url.com/api';

// To your actual Render URL:
: 'https://agd-solutions-api.onrender.com/api';
```

**Frontend Deployment:**

Deploy frontend to **Netlify** or **Vercel** (free):
- Drag & drop entire project folder
- Done!

---

## 🔒 MongoDB Atlas Configuration

### Important: Whitelist IP Addresses

1. Go to MongoDB Atlas Dashboard
2. Network Access → Add IP Address
3. For development: Add your current IP
4. For production: Add `0.0.0.0/0` (allow all)
   - Or add your hosting provider's IP ranges

### Database Structure

- **Database Name:** `agd_solutions`
- **Collection:** `contacts`
- **Connection String:** Already configured in `.env`

---

## 📱 Testing the Complete Flow

### 1. Start Backend
```bash
cd backend
npm run dev
```

### 2. Open Frontend
- Double-click `index.html` OR
- Use Live Server in VS Code

### 3. Submit Form
- Fill out contact form
- Click "Submit Request"
- Check for success message

### 4. Verify in Database
- MongoDB Atlas → Browse Collections
- See your new entry!

---

## 🛠️ Development Workflow

### Running Both Frontend & Backend

**Terminal 1 (Backend):**
```bash
cd backend
npm run dev
```

**Terminal 2 (Frontend):**
```bash
# Use Live Server extension in VS Code
# Or just open index.html in browser
```

### Stopping the Server
- Press `Ctrl+C` in the terminal

---

## 📋 API Endpoints Reference

### Public Endpoints

**Submit Contact Form**
```bash
POST http://localhost:5000/api/contact
Content-Type: application/json

{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "interest": "turnaround"
}
```

**Health Check**
```bash
GET http://localhost:5000/api/health
```

### Admin Endpoints (add authentication in production!)

**Get All Contacts**
```bash
GET http://localhost:5000/api/contacts
GET http://localhost:5000/api/contacts?status=new
GET http://localhost:5000/api/contacts?limit=10&skip=0
```

**Get Single Contact**
```bash
GET http://localhost:5000/api/contacts/:id
```

**Update Contact Status**
```bash
PATCH http://localhost:5000/api/contacts/:id/status
Content-Type: application/json

{
  "status": "contacted"
}
```

Status options: `new`, `contacted`, `qualified`, `closed`

---

## 🔐 Security Considerations

### ⚠️ Current Setup (Development)
- ✅ Basic validation
- ✅ CORS enabled
- ✅ Environment variables
- ❌ No authentication on admin endpoints
- ❌ No rate limiting

### 🔒 For Production (Recommended)

1. **Add Authentication**
   ```bash
   npm install jsonwebtoken bcrypt
   ```
   Protect admin endpoints with JWT tokens

2. **Rate Limiting**
   ```bash
   npm install express-rate-limit
   ```
   Prevent spam submissions

3. **Security Headers**
   ```bash
   npm install helmet
   ```
   Add security headers

4. **Input Sanitization**
   ```bash
   npm install express-validator
   ```
   Enhanced validation

---

## 🐛 Troubleshooting

### "Cannot connect to MongoDB"
**Fix:**
- Check MongoDB Atlas cluster is running
- Verify IP whitelist (Network Access in Atlas)
- Check `.env` file has correct connection string

### "Port 5000 already in use"
**Fix:**
```bash
# Windows
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Mac/Linux
lsof -ti:5000 | xargs kill -9
```

### "CORS Error"
**Fix:**
- Make sure backend is running on port 5000
- Check frontend is using correct API URL
- Verify CORS is enabled in `server.js`

### Form submission doesn't work
**Fix:**
- Open browser console (F12) for errors
- Check backend terminal for errors
- Verify MongoDB connection
- Test API directly: http://localhost:5000/api/health

---

## 📊 Monitoring & Analytics

### View Form Submissions

**MongoDB Atlas Dashboard:**
1. https://cloud.mongodb.com
2. Browse Collections → agd_solutions → contacts
3. See all submissions with full details

**Using API:**
```bash
# Get recent submissions
curl http://localhost:5000/api/contacts?limit=10

# Filter by status
curl http://localhost:5000/api/contacts?status=new
```

### Export Data
- MongoDB Atlas: Export to JSON/CSV
- Or build admin dashboard (future enhancement)

---

## 🎯 Next Steps

### Immediate
1. ✅ Test backend locally
2. ✅ Test form submission
3. ✅ Verify data in MongoDB

### Short-term (This Week)
1. Deploy backend to Render
2. Deploy frontend to Netlify
3. Update API URL in frontend
4. Test production deployment

### Long-term (Optional)
1. Add email notifications (Nodemailer)
2. Build admin dashboard
3. Add authentication
4. Set up automated backups
5. Add analytics tracking

---

## 💡 Tips

- Keep backend running while testing frontend
- Check MongoDB Atlas for all submissions
- Use browser console (F12) to debug issues
- Backend logs show all API requests
- Test API endpoints with curl or Postman

---

## 📞 Need Help?

**Backend Issues:**
- Check `backend/README.md` for detailed docs
- View server logs in terminal
- Test health endpoint first

**Frontend Issues:**
- Check browser console (F12)
- Verify API URL is correct
- Test with backend running

**MongoDB Issues:**
- Check Atlas dashboard
- Verify IP whitelist
- Test connection string

---

**Your MongoDB integration is complete and ready to use!** 🎉

Run `cd backend && npm install && npm run dev` to get started!
