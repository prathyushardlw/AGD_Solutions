// AGD Solutions - Contact Form End-to-End Test
const { test, expect } = require('@playwright/test');

// Test configuration
const FRONTEND_URL = 'file:///D:/D_Drive/AGD Solutions Website Development/index.html';
const API_URL = 'http://localhost:5000/api';

test.describe('AGD Solutions Contact Form', () => {
    
    test.beforeEach(async ({ page }) => {
        // Navigate to the website
        await page.goto(FRONTEND_URL);
        
        // Wait for page to load
        await page.waitForLoadState('networkidle');
    });

    test('should load the contact form correctly', async ({ page }) => {
        // Scroll to contact section
        await page.locator('#contact').scrollIntoViewIfNeeded();
        
        // Verify all form fields exist
        await expect(page.locator('#name')).toBeVisible();
        await expect(page.locator('#email')).toBeVisible();
        await expect(page.locator('#phone')).toBeVisible();
        await expect(page.locator('#practice')).toBeVisible();
        await expect(page.locator('#specialty')).toBeVisible();
        await expect(page.locator('#interest')).toBeVisible();
        await expect(page.locator('#message')).toBeVisible();
        
        // Verify submit button exists
        await expect(page.locator('button[type="submit"]')).toBeVisible();
        await expect(page.locator('button[type="submit"]')).toHaveText('Submit Request');
    });

    test('should validate required fields', async ({ page }) => {
        // Scroll to contact form
        await page.locator('#contact').scrollIntoViewIfNeeded();
        
        // Try to submit empty form
        await page.locator('button[type="submit"]').click();
        
        // Wait for error message
        await page.waitForSelector('.form-message.error', { timeout: 2000 });
        
        // Verify error message appears
        const errorMessage = page.locator('.form-message.error');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText('required');
    });

    test('should validate email format', async ({ page }) => {
        // Scroll to contact form
        await page.locator('#contact').scrollIntoViewIfNeeded();
        
        // Fill in fields with invalid email
        await page.fill('#name', 'Test User');
        await page.fill('#email', 'invalid-email');
        await page.selectOption('#interest', 'general');
        
        // Submit form
        await page.locator('button[type="submit"]').click();
        
        // Wait for error message
        await page.waitForSelector('.form-message.error', { timeout: 2000 });
        
        // Verify email validation error
        const errorMessage = page.locator('.form-message.error');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText('valid email');
    });

    test('should successfully submit form with all fields filled', async ({ page }) => {
        // Scroll to contact form
        await page.locator('#contact').scrollIntoViewIfNeeded();
        await page.waitForTimeout(500);
        
        // Fill in all form fields
        await page.fill('#name', 'John Doe');
        await page.fill('#email', 'john.doe@example.com');
        await page.fill('#phone', '555-123-4567');
        await page.fill('#practice', 'Doe Medical Center');
        await page.selectOption('#specialty', 'primary-care');
        await page.selectOption('#interest', 'turnaround');
        await page.fill('#message', 'I need help optimizing my practice operations and revenue cycle.');
        
        // Take screenshot before submission
        await page.screenshot({ path: 'tests/screenshots/form-filled.png', fullPage: true });
        
        // Submit form
        await page.locator('button[type="submit"]').click();
        
        // Wait for success message (increase timeout for API call)
        await page.waitForSelector('.form-message.success', { timeout: 10000 });
        
        // Verify success message
        const successMessage = page.locator('.form-message.success');
        await expect(successMessage).toBeVisible();
        await expect(successMessage).toContainText('Thank you');
        await expect(successMessage).toContainText('24 hours');
        
        // Take screenshot after submission
        await page.screenshot({ path: 'tests/screenshots/form-submitted.png', fullPage: true });
        
        // Verify form was reset
        await expect(page.locator('#name')).toHaveValue('');
        await expect(page.locator('#email')).toHaveValue('');
        await expect(page.locator('#phone')).toHaveValue('');
        await expect(page.locator('#practice')).toHaveValue('');
        await expect(page.locator('#message')).toHaveValue('');
    });

    test('should submit form with only required fields', async ({ page }) => {
        // Scroll to contact form
        await page.locator('#contact').scrollIntoViewIfNeeded();
        
        // Fill in only required fields
        await page.fill('#name', 'Jane Smith');
        await page.fill('#email', 'jane.smith@example.com');
        await page.selectOption('#interest', 'startup');
        
        // Submit form
        await page.locator('button[type="submit"]').click();
        
        // Wait for success message
        await page.waitForSelector('.form-message.success', { timeout: 10000 });
        
        // Verify success
        const successMessage = page.locator('.form-message.success');
        await expect(successMessage).toBeVisible();
    });

    test('should disable submit button during submission', async ({ page }) => {
        // Scroll to contact form
        await page.locator('#contact').scrollIntoViewIfNeeded();
        
        // Fill in required fields
        await page.fill('#name', 'Test User');
        await page.fill('#email', 'test@example.com');
        await page.selectOption('#interest', 'general');
        
        // Get submit button
        const submitButton = page.locator('button[type="submit"]');
        
        // Verify button is enabled
        await expect(submitButton).toBeEnabled();
        await expect(submitButton).toHaveText('Submit Request');
        
        // Click submit
        await submitButton.click();
        
        // Immediately check if button is disabled
        // Note: This might be too fast to catch, but worth testing
        await page.waitForTimeout(100);
        
        // Wait for completion
        await page.waitForSelector('.form-message', { timeout: 10000 });
        
        // Button should be enabled again
        await expect(submitButton).toBeEnabled();
        await expect(submitButton).toHaveText('Submit Request');
    });

    test('should test all specialty options', async ({ page }) => {
        // Scroll to contact form
        await page.locator('#contact').scrollIntoViewIfNeeded();
        
        // Verify all specialty options exist
        const specialtySelect = page.locator('#specialty');
        const options = await specialtySelect.locator('option').allTextContents();
        
        expect(options).toContain('Primary Care');
        expect(options).toContain('Internal Medicine');
        expect(options).toContain('Cardiology');
        expect(options).toContain('Orthopedics');
        expect(options).toContain('Geriatrics');
        expect(options).toContain('Behavioral Health');
        expect(options).toContain('Other Specialty');
    });

    test('should test all interest area options', async ({ page }) => {
        // Scroll to contact form
        await page.locator('#contact').scrollIntoViewIfNeeded();
        
        // Verify all interest options exist
        const interestSelect = page.locator('#interest');
        const options = await interestSelect.locator('option').allTextContents();
        
        expect(options).toContain('Practice Startup');
        expect(options).toContain('Turnaround & Optimization');
        expect(options).toContain('Ancillary Services');
        expect(options).toContain('Marketing & Growth');
        expect(options).toContain('Practice Sale/Exit');
        expect(options).toContain('Fraud Risk Assessment');
        expect(options).toContain('General Consultation');
    });

    test('should navigate to contact form via menu', async ({ page }) => {
        // Click on "Get Started" in navigation
        await page.locator('a[href="#contact"].nav-link').click();
        
        // Wait for scroll animation
        await page.waitForTimeout(1000);
        
        // Verify contact form is in view
        const contactSection = page.locator('#contact');
        await expect(contactSection).toBeInViewport();
        
        // Verify form is visible
        await expect(page.locator('#contactForm')).toBeVisible();
    });

    test('should handle network errors gracefully', async ({ page }) => {
        // Scroll to contact form
        await page.locator('#contact').scrollIntoViewIfNeeded();
        
        // Block API requests to simulate network error
        await page.route('**/api/contact', route => route.abort());
        
        // Fill and submit form
        await page.fill('#name', 'Test User');
        await page.fill('#email', 'test@example.com');
        await page.selectOption('#interest', 'general');
        await page.locator('button[type="submit"]').click();
        
        // Wait for error message
        await page.waitForSelector('.form-message.error', { timeout: 10000 });
        
        // Verify error message
        const errorMessage = page.locator('.form-message.error');
        await expect(errorMessage).toBeVisible();
        await expect(errorMessage).toContainText('Unable to submit');
    });

});

test.describe('AGD Solutions Backend API', () => {
    
    test('should verify API health endpoint', async ({ request }) => {
        const response = await request.get(`${API_URL}/health`);
        
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        
        const data = await response.json();
        expect(data.status).toBe('ok');
        expect(data.mongodb).toBe('connected');
    });

    test('should submit contact via API directly', async ({ request }) => {
        const contactData = {
            name: 'API Test User',
            email: 'apitest@example.com',
            phone: '555-999-8888',
            practice: 'Test Practice',
            specialty: 'primary-care',
            interest: 'startup',
            message: 'This is a test submission via API'
        };
        
        const response = await request.post(`${API_URL}/contact`, {
            data: contactData
        });
        
        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(201);
        
        const data = await response.json();
        expect(data.success).toBeTruthy();
        expect(data.message).toContain('Thank you');
        expect(data.contactId).toBeDefined();
    });

    test('should reject submission with missing required fields', async ({ request }) => {
        const incompleteData = {
            name: 'Test User'
            // Missing email and interest
        };
        
        const response = await request.post(`${API_URL}/contact`, {
            data: incompleteData
        });
        
        expect(response.status()).toBe(400);
        
        const data = await response.json();
        expect(data.success).toBeFalsy();
        expect(data.message).toContain('required');
    });

    test('should reject invalid email format', async ({ request }) => {
        const invalidEmailData = {
            name: 'Test User',
            email: 'invalid-email',
            interest: 'general'
        };
        
        const response = await request.post(`${API_URL}/contact`, {
            data: invalidEmailData
        });
        
        expect(response.status()).toBe(400);
        
        const data = await response.json();
        expect(data.success).toBeFalsy();
        expect(data.message).toContain('valid email');
    });

    test('should retrieve all contacts', async ({ request }) => {
        const response = await request.get(`${API_URL}/contacts`);
        
        expect(response.ok()).toBeTruthy();
        
        const data = await response.json();
        expect(data.success).toBeTruthy();
        expect(data.contacts).toBeDefined();
        expect(Array.isArray(data.contacts)).toBeTruthy();
    });

});

test.describe('AGD Solutions Full Website', () => {
    
    test('should load all main sections', async ({ page }) => {
        await page.goto(FRONTEND_URL);
        
        // Verify all main sections exist
        await expect(page.locator('#home')).toBeVisible();
        await expect(page.locator('#about')).toBeVisible();
        await expect(page.locator('#services')).toBeVisible();
        await expect(page.locator('#process')).toBeVisible();
        await expect(page.locator('#contact')).toBeVisible();
    });

    test('should have working navigation links', async ({ page }) => {
        await page.goto(FRONTEND_URL);
        
        // Test each navigation link
        const navLinks = ['#home', '#about', '#services', '#process', '#contact'];
        
        for (const link of navLinks) {
            await page.locator(`a[href="${link}"].nav-link`).click();
            await page.waitForTimeout(500);
            
            const section = page.locator(link);
            await expect(section).toBeInViewport();
        }
    });

    test('should display all 6 service cards', async ({ page }) => {
        await page.goto(FRONTEND_URL);
        
        // Scroll to services
        await page.locator('#services').scrollIntoViewIfNeeded();
        
        // Count service cards
        const serviceCards = page.locator('.service-card');
        await expect(serviceCards).toHaveCount(6);
        
        // Verify service names
        await expect(page.getByText('Practice Startup Support')).toBeVisible();
        await expect(page.getByText('Turnaround & Practice Optimization')).toBeVisible();
        await expect(page.getByText('Ancillary Services & Revenue Expansion')).toBeVisible();
        await expect(page.getByText('Marketing & Growth Strategy')).toBeVisible();
        await expect(page.getByText('Practice Sale & Exit Strategy')).toBeVisible();
        await expect(page.getByText('Fraud & Embezzlement Risk Assessment')).toBeVisible();
    });

    test('should display all 4 process steps', async ({ page }) => {
        await page.goto(FRONTEND_URL);
        
        // Scroll to process section
        await page.locator('#process').scrollIntoViewIfNeeded();
        
        // Count process steps
        const steps = page.locator('.step');
        await expect(steps).toHaveCount(4);
        
        // Verify step numbers
        for (let i = 1; i <= 4; i++) {
            await expect(page.locator('.step-number').nth(i-1)).toContainText(i.toString());
        }
    });

    test('should have responsive mobile menu', async ({ page }) => {
        // Set mobile viewport
        await page.setViewportSize({ width: 375, height: 667 });
        await page.goto(FRONTEND_URL);
        
        // Mobile menu toggle should be visible
        const menuToggle = page.locator('.mobile-menu-toggle');
        await expect(menuToggle).toBeVisible();
        
        // Menu should be hidden initially
        const navMenu = page.locator('.nav-menu');
        await expect(navMenu).not.toHaveClass(/active/);
        
        // Click menu toggle
        await menuToggle.click();
        
        // Menu should be visible now
        await expect(navMenu).toHaveClass(/active/);
    });

    test('should take full page screenshot', async ({ page }) => {
        await page.goto(FRONTEND_URL);
        
        // Take full page screenshot
        await page.screenshot({ 
            path: 'tests/screenshots/full-website.png', 
            fullPage: true 
        });
    });

});
