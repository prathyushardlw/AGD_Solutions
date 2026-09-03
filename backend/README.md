# AGD Solutions Backend API

Node.js/Express backend with MongoDB for AGD Solutions website.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB Atlas account (already set up)
- npm or yarn

### Installation

1. **Navigate to backend folder**
   ```bash
   cd backend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment setup**
   - The `.env` file is already configured with MongoDB credentials
   - Never commit `.env` to Git!

4. **Start the server**
   
   **Development mode (with auto-restart):**
   ```bash
   npm run dev
   ```
   
   **Production mode:**
   ```bash
   npm start
   ```

5. **Test the API**
   - Open browser: http://localhost:5000/api/health
   - You should see: `{"status":"ok","message":"AGD Solutions API is running","mongodb":"connected"}`

## 📡 API Endpoints

### Health Check
```
GET /api/health
```
Returns server and database status.

### Submit Contact Form
```
POST /api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "123-456-7890",
  "practice": "Smith Medical",
  "specialty": "Primary Care",
  "interest": "Practice Startup",
  "message": "I need help with..."
}
```

**Required fields:** name, email, interest

### Get All Contacts (Admin)
```
GET /api/contacts?status=new&limit=50&skip=0
```

Query parameters:
- `status` (optional): Filter by status (new, contacted, qualified, closed)
- `limit` (optional): Number of results (default: 50)
- `skip` (optional): Number to skip for pagination (default: 0)

### Get Single Contact (Admin)
```
GET /api/contacts/:id
```

### Update Contact Status (Admin)
```
PATCH /api/contacts/:id/status
Content-Type: application/json

{
  "status": "contacted"
}
```

Status options: `new`, `contacted`, `qualified`, `closed`

## 🗄️ MongoDB Schema

### Contact Model
```javascript
{
  name: String (required),
  email: String (required),
  phone: String,
  practice: String,
  specialty: String,
  interest: String (required),
  message: String,
  submittedAt: Date (auto),
  status: String (new|contacted|qualified|closed),
  ipAddress: String,
  userAgent: String,
  createdAt: Date (auto),
  updatedAt: Date (auto)
}
```

## 🔒 Security Notes

### Current Implementation
- Basic validation included
- CORS enabled
- Input sanitization via Mongoose

### Production Recommendations
1. **Add authentication** for admin endpoints
   - Use JWT tokens
   - Implement middleware for protected routes

2. **Rate limiting**
   ```bash
   npm install express-rate-limit
   ```

3. **Helmet for security headers**
   ```bash
   npm install helmet
   ```

4. **Environment variables**
   - Never expose `.env` file
   - Use hosting provider's environment variable settings

## 🌐 Deployment Options

### Option 1: Render (Recommended - Free)

1. Sign up at https://render.com
2. Create new "Web Service"
3. Connect GitHub repository
4. Configure:
   - **Build Command:** `cd backend && npm install`
   - **Start Command:** `cd backend && npm start`
   - **Environment Variables:** Add MONGODB_URI from `.env`
5. Deploy!

### Option 2: Railway

1. Sign up at https://railway.app
2. Create new project from GitHub
3. Add MongoDB URI as environment variable
4. Deploy automatically

### Option 3: Heroku

1. Install Heroku CLI
2. `heroku create agd-solutions-api`
3. `heroku config:set MONGODB_URI="your-connection-string"`
4. `git push heroku main`

### Option 4: DigitalOcean App Platform

1. Sign up at https://www.digitalocean.com
2. Create new app from GitHub
3. Configure environment variables
4. Deploy

## 🔗 Connecting Frontend to Backend

After deploying the backend, update the frontend:

1. Open `js/script.js`
2. Find this line:
   ```javascript
   : 'https://your-backend-url.com/api';
   ```
3. Replace with your actual backend URL:
   ```javascript
   : 'https://agd-solutions-api.onrender.com/api';
   ```

## 📊 Monitoring Your Database

### View Submissions

**Using MongoDB Atlas Dashboard:**
1. Go to https://cloud.mongodb.com
2. Browse Collections
3. Select `agd_solutions` database
4. View `contacts` collection

**Using API:**
```bash
# Get all contacts
curl http://localhost:5000/api/contacts

# Get new contacts only
curl http://localhost:5000/api/contacts?status=new
```

## 🐛 Troubleshooting

### Can't connect to MongoDB
- Check MongoDB URI in `.env`
- Verify MongoDB Atlas IP whitelist (allow 0.0.0.0/0 for any IP)
- Check cluster is running

### CORS errors
- Update `FRONTEND_URL` in `.env`
- Check frontend is using correct API URL

### Port already in use
- Change PORT in `.env`
- Or kill existing process: `npx kill-port 5000`

## 📝 Development Tips

### Testing API with curl

**Submit form:**
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "interest": "general"
  }'
```

**Get contacts:**
```bash
curl http://localhost:5000/api/contacts
```

### Using Postman

Import this collection to test all endpoints easily:
1. Download Postman: https://postman.com
2. Create new request
3. Use endpoints listed above

## 🔄 Next Steps

### Recommended Enhancements

1. **Email Notifications**
   - Install `nodemailer`
   - Send email when form submitted
   - Send confirmation to user

2. **Admin Dashboard**
   - Create admin UI to view/manage contacts
   - Add authentication

3. **Analytics**
   - Track form conversion rates
   - Monitor submission sources

4. **Backup**
   - Set up automated MongoDB backups
   - Use MongoDB Atlas automated backups

## 📞 Support

For questions or issues:
- Check server logs: `npm run dev`
- Test health endpoint: http://localhost:5000/api/health
- Verify MongoDB connection in Atlas dashboard

---

**Backend is ready to use!** 🚀
