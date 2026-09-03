# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact-form.test.js >> AGD Solutions Contact Form >> should successfully submit form with all fields filled
- Location: tests\contact-form.test.js:73:5

# Error details

```
TimeoutError: page.waitForSelector: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('.form-message.success') to be visible

```

# Test source

```ts
  1   | // AGD Solutions - Contact Form End-to-End Test
  2   | const { test, expect } = require('@playwright/test');
  3   | 
  4   | // Test configuration
  5   | const FRONTEND_URL = 'file:///D:/D_Drive/AGD Solutions Website Development/index.html';
  6   | const API_URL = 'http://localhost:5000/api';
  7   | 
  8   | test.describe('AGD Solutions Contact Form', () => {
  9   |     
  10  |     test.beforeEach(async ({ page }) => {
  11  |         // Navigate to the website
  12  |         await page.goto(FRONTEND_URL);
  13  |         
  14  |         // Wait for page to load
  15  |         await page.waitForLoadState('networkidle');
  16  |     });
  17  | 
  18  |     test('should load the contact form correctly', async ({ page }) => {
  19  |         // Scroll to contact section
  20  |         await page.locator('#contact').scrollIntoViewIfNeeded();
  21  |         
  22  |         // Verify all form fields exist
  23  |         await expect(page.locator('#name')).toBeVisible();
  24  |         await expect(page.locator('#email')).toBeVisible();
  25  |         await expect(page.locator('#phone')).toBeVisible();
  26  |         await expect(page.locator('#practice')).toBeVisible();
  27  |         await expect(page.locator('#specialty')).toBeVisible();
  28  |         await expect(page.locator('#interest')).toBeVisible();
  29  |         await expect(page.locator('#message')).toBeVisible();
  30  |         
  31  |         // Verify submit button exists
  32  |         await expect(page.locator('button[type="submit"]')).toBeVisible();
  33  |         await expect(page.locator('button[type="submit"]')).toHaveText('Submit Request');
  34  |     });
  35  | 
  36  |     test('should validate required fields', async ({ page }) => {
  37  |         // Scroll to contact form
  38  |         await page.locator('#contact').scrollIntoViewIfNeeded();
  39  |         
  40  |         // Try to submit empty form
  41  |         await page.locator('button[type="submit"]').click();
  42  |         
  43  |         // Wait for error message
  44  |         await page.waitForSelector('.form-message.error', { timeout: 2000 });
  45  |         
  46  |         // Verify error message appears
  47  |         const errorMessage = page.locator('.form-message.error');
  48  |         await expect(errorMessage).toBeVisible();
  49  |         await expect(errorMessage).toContainText('required');
  50  |     });
  51  | 
  52  |     test('should validate email format', async ({ page }) => {
  53  |         // Scroll to contact form
  54  |         await page.locator('#contact').scrollIntoViewIfNeeded();
  55  |         
  56  |         // Fill in fields with invalid email
  57  |         await page.fill('#name', 'Test User');
  58  |         await page.fill('#email', 'invalid-email');
  59  |         await page.selectOption('#interest', 'general');
  60  |         
  61  |         // Submit form
  62  |         await page.locator('button[type="submit"]').click();
  63  |         
  64  |         // Wait for error message
  65  |         await page.waitForSelector('.form-message.error', { timeout: 2000 });
  66  |         
  67  |         // Verify email validation error
  68  |         const errorMessage = page.locator('.form-message.error');
  69  |         await expect(errorMessage).toBeVisible();
  70  |         await expect(errorMessage).toContainText('valid email');
  71  |     });
  72  | 
  73  |     test('should successfully submit form with all fields filled', async ({ page }) => {
  74  |         // Scroll to contact form
  75  |         await page.locator('#contact').scrollIntoViewIfNeeded();
  76  |         await page.waitForTimeout(500);
  77  |         
  78  |         // Fill in all form fields
  79  |         await page.fill('#name', 'John Doe');
  80  |         await page.fill('#email', 'john.doe@example.com');
  81  |         await page.fill('#phone', '555-123-4567');
  82  |         await page.fill('#practice', 'Doe Medical Center');
  83  |         await page.selectOption('#specialty', 'primary-care');
  84  |         await page.selectOption('#interest', 'turnaround');
  85  |         await page.fill('#message', 'I need help optimizing my practice operations and revenue cycle.');
  86  |         
  87  |         // Take screenshot before submission
  88  |         await page.screenshot({ path: 'tests/screenshots/form-filled.png', fullPage: true });
  89  |         
  90  |         // Submit form
  91  |         await page.locator('button[type="submit"]').click();
  92  |         
  93  |         // Wait for success message (increase timeout for API call)
> 94  |         await page.waitForSelector('.form-message.success', { timeout: 10000 });
      |                    ^ TimeoutError: page.waitForSelector: Timeout 10000ms exceeded.
  95  |         
  96  |         // Verify success message
  97  |         const successMessage = page.locator('.form-message.success');
  98  |         await expect(successMessage).toBeVisible();
  99  |         await expect(successMessage).toContainText('Thank you');
  100 |         await expect(successMessage).toContainText('24 hours');
  101 |         
  102 |         // Take screenshot after submission
  103 |         await page.screenshot({ path: 'tests/screenshots/form-submitted.png', fullPage: true });
  104 |         
  105 |         // Verify form was reset
  106 |         await expect(page.locator('#name')).toHaveValue('');
  107 |         await expect(page.locator('#email')).toHaveValue('');
  108 |         await expect(page.locator('#phone')).toHaveValue('');
  109 |         await expect(page.locator('#practice')).toHaveValue('');
  110 |         await expect(page.locator('#message')).toHaveValue('');
  111 |     });
  112 | 
  113 |     test('should submit form with only required fields', async ({ page }) => {
  114 |         // Scroll to contact form
  115 |         await page.locator('#contact').scrollIntoViewIfNeeded();
  116 |         
  117 |         // Fill in only required fields
  118 |         await page.fill('#name', 'Jane Smith');
  119 |         await page.fill('#email', 'jane.smith@example.com');
  120 |         await page.selectOption('#interest', 'startup');
  121 |         
  122 |         // Submit form
  123 |         await page.locator('button[type="submit"]').click();
  124 |         
  125 |         // Wait for success message
  126 |         await page.waitForSelector('.form-message.success', { timeout: 10000 });
  127 |         
  128 |         // Verify success
  129 |         const successMessage = page.locator('.form-message.success');
  130 |         await expect(successMessage).toBeVisible();
  131 |     });
  132 | 
  133 |     test('should disable submit button during submission', async ({ page }) => {
  134 |         // Scroll to contact form
  135 |         await page.locator('#contact').scrollIntoViewIfNeeded();
  136 |         
  137 |         // Fill in required fields
  138 |         await page.fill('#name', 'Test User');
  139 |         await page.fill('#email', 'test@example.com');
  140 |         await page.selectOption('#interest', 'general');
  141 |         
  142 |         // Get submit button
  143 |         const submitButton = page.locator('button[type="submit"]');
  144 |         
  145 |         // Verify button is enabled
  146 |         await expect(submitButton).toBeEnabled();
  147 |         await expect(submitButton).toHaveText('Submit Request');
  148 |         
  149 |         // Click submit
  150 |         await submitButton.click();
  151 |         
  152 |         // Immediately check if button is disabled
  153 |         // Note: This might be too fast to catch, but worth testing
  154 |         await page.waitForTimeout(100);
  155 |         
  156 |         // Wait for completion
  157 |         await page.waitForSelector('.form-message', { timeout: 10000 });
  158 |         
  159 |         // Button should be enabled again
  160 |         await expect(submitButton).toBeEnabled();
  161 |         await expect(submitButton).toHaveText('Submit Request');
  162 |     });
  163 | 
  164 |     test('should test all specialty options', async ({ page }) => {
  165 |         // Scroll to contact form
  166 |         await page.locator('#contact').scrollIntoViewIfNeeded();
  167 |         
  168 |         // Verify all specialty options exist
  169 |         const specialtySelect = page.locator('#specialty');
  170 |         const options = await specialtySelect.locator('option').allTextContents();
  171 |         
  172 |         expect(options).toContain('Primary Care');
  173 |         expect(options).toContain('Internal Medicine');
  174 |         expect(options).toContain('Cardiology');
  175 |         expect(options).toContain('Orthopedics');
  176 |         expect(options).toContain('Geriatrics');
  177 |         expect(options).toContain('Behavioral Health');
  178 |         expect(options).toContain('Other Specialty');
  179 |     });
  180 | 
  181 |     test('should test all interest area options', async ({ page }) => {
  182 |         // Scroll to contact form
  183 |         await page.locator('#contact').scrollIntoViewIfNeeded();
  184 |         
  185 |         // Verify all interest options exist
  186 |         const interestSelect = page.locator('#interest');
  187 |         const options = await interestSelect.locator('option').allTextContents();
  188 |         
  189 |         expect(options).toContain('Practice Startup');
  190 |         expect(options).toContain('Turnaround & Optimization');
  191 |         expect(options).toContain('Ancillary Services');
  192 |         expect(options).toContain('Marketing & Growth');
  193 |         expect(options).toContain('Practice Sale/Exit');
  194 |         expect(options).toContain('Fraud Risk Assessment');
```