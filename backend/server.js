// AGD Solutions - Backend Server with MongoDB
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
const MONGODB_URI = process.env.MONGODB_URI;

mongoose.connect(MONGODB_URI)
.then(() => {
    console.log('✅ Connected to MongoDB Atlas');
})
.catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
});

// Contact Form Schema
const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        trim: true
    },
    practice: {
        type: String,
        trim: true
    },
    specialty: {
        type: String,
        trim: true
    },
    interest: {
        type: String,
        required: true
    },
    message: {
        type: String,
        trim: true
    },
    submittedAt: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['new', 'contacted', 'qualified', 'closed'],
        default: 'new'
    },
    ipAddress: {
        type: String
    },
    userAgent: {
        type: String
    }
}, {
    timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

// Admin Credentials (move to environment variables in production!)
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || 'AGD2024!Secure';

// Simple token storage (use JWT or sessions in production)
const activeSessions = new Set();

// Authentication middleware
const authenticate = (req, res, next) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    
    if (!token || !activeSessions.has(token)) {
        return res.status(401).json({
            success: false,
            message: 'Unauthorized access'
        });
    }
    
    next();
};

// Generate simple token
function generateToken() {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
}

// Routes

// Admin login endpoint
app.post('/api/admin/login', (req, res) => {
    const { username, password } = req.body;
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
        const token = generateToken();
        activeSessions.add(token);
        
        res.json({
            success: true,
            message: 'Login successful',
            token
        });
    } else {
        res.status(401).json({
            success: false,
            message: 'Invalid username or password'
        });
    }
});

// Admin logout endpoint
app.post('/api/admin/logout', authenticate, (req, res) => {
    const token = req.headers.authorization?.replace('Bearer ', '');
    activeSessions.delete(token);
    
    res.json({
        success: true,
        message: 'Logged out successfully'
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({
        status: 'ok',
        message: 'AGD Solutions API is running',
        mongodb: mongoose.connection.readyState === 1 ? 'connected' : 'disconnected'
    });
});

// Submit contact form
app.post('/api/contact', async (req, res) => {
    try {
        const { name, email, phone, practice, specialty, interest, message } = req.body;

        // Validation
        if (!name || !email || !interest) {
            return res.status(400).json({
                success: false,
                message: 'Please provide name, email, and area of interest'
            });
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({
                success: false,
                message: 'Please provide a valid email address'
            });
        }

        // Create new contact
        const contact = new Contact({
            name,
            email,
            phone,
            practice,
            specialty,
            interest,
            message,
            ipAddress: req.ip || req.connection.remoteAddress,
            userAgent: req.get('user-agent')
        });

        await contact.save();

        res.status(201).json({
            success: true,
            message: 'Thank you for your inquiry! We will contact you within 24 hours.',
            contactId: contact._id
        });

    } catch (error) {
        console.error('Error saving contact:', error);
        res.status(500).json({
            success: false,
            message: 'An error occurred. Please try again later.'
        });
    }
});

// Get all contacts (for admin - protected)
app.get('/api/contacts', authenticate, async (req, res) => {
    try {
        const { status, limit = 50, skip = 0 } = req.query;
        
        const query = status ? { status } : {};
        
        const contacts = await Contact.find(query)
            .sort({ submittedAt: -1 })
            .limit(parseInt(limit))
            .skip(parseInt(skip));

        const total = await Contact.countDocuments(query);

        res.json({
            success: true,
            count: contacts.length,
            total,
            contacts
        });

    } catch (error) {
        console.error('Error fetching contacts:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching contacts'
        });
    }
});

// Get single contact by ID (for admin - protected)
app.get('/api/contacts/:id', authenticate, async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        
        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.json({
            success: true,
            contact
        });

    } catch (error) {
        console.error('Error fetching contact:', error);
        res.status(500).json({
            success: false,
            message: 'Error fetching contact'
        });
    }
});

// Update contact status (for admin - protected)
app.patch('/api/contacts/:id/status', authenticate, async (req, res) => {
    try {
        const { status } = req.body;
        
        if (!['new', 'contacted', 'qualified', 'closed'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status'
            });
        }

        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status },
            { new: true }
        );

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: 'Contact not found'
            });
        }

        res.json({
            success: true,
            contact
        });

    } catch (error) {
        console.error('Error updating contact:', error);
        res.status(500).json({
            success: false,
            message: 'Error updating contact'
        });
    }
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Route not found'
    });
});

// Error handler
app.use((err, req, res, next) => {
    console.error('Server error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📡 API available at http://localhost:${PORT}/api`);
});

// Graceful shutdown
process.on('SIGINT', async () => {
    console.log('\n👋 Shutting down gracefully...');
    await mongoose.connection.close();
    process.exit(0);
});
