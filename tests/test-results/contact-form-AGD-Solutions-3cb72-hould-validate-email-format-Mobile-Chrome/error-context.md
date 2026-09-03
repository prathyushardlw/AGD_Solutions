# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact-form.test.js >> AGD Solutions Contact Form >> should validate email format
- Location: tests\contact-form.test.js:52:5

# Error details

```
TimeoutError: page.waitForSelector: Timeout 2000ms exceeded.
Call log:
  - waiting for locator('.form-message.error') to be visible

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - img "AGD Solutions LLC" [ref=e6]
        - generic [ref=e7]: AGD Solutions
      - button "Toggle menu" [ref=e8] [cursor=pointer]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link "Home" [ref=e14] [cursor=pointer]:
            - /url: "#home"
        - listitem [ref=e15]:
          - link "About" [ref=e16] [cursor=pointer]:
            - /url: "#about"
        - listitem [ref=e17]:
          - link "Services" [ref=e18] [cursor=pointer]:
            - /url: "#services"
        - listitem [ref=e19]:
          - link "How We Work" [ref=e20] [cursor=pointer]:
            - /url: "#process"
        - listitem [ref=e21]:
          - link "Get Started" [ref=e22] [cursor=pointer]:
            - /url: "#contact"
  - main [ref=e23]:
    - generic [ref=e25]:
      - generic [ref=e26]:
        - heading "Build a Practice That's Structured. Profitable. Sustainable." [level=1] [ref=e27]:
          - text: Build a Practice That's
          - generic [ref=e28]: Structured. Profitable. Sustainable.
        - paragraph [ref=e29]: Expert healthcare consulting for independent physicians and specialty groups who want to focus on patient care, not operational chaos.
        - generic [ref=e30]:
          - link "Schedule a Consultation" [ref=e31] [cursor=pointer]:
            - /url: "#contact"
          - link "Explore Our Services" [ref=e32] [cursor=pointer]:
            - /url: "#services"
      - generic [ref=e33]:
        - generic [ref=e34]:
          - generic [ref=e35]: 
          - heading "20+ Years" [level=3] [ref=e36]
          - paragraph [ref=e37]: Healthcare Experience
        - generic [ref=e38]:
          - generic [ref=e39]: 
          - heading "Proven Results" [level=3] [ref=e40]
          - paragraph [ref=e41]: Revenue Optimization
        - generic [ref=e42]:
          - generic [ref=e43]: 
          - heading "Protected" [level=3] [ref=e44]
          - paragraph [ref=e45]: Financial Safeguards
    - generic [ref=e47]:
      - heading "Why Independent Practices Choose AGD Solutions" [level=2] [ref=e48]
      - generic [ref=e49]:
        - generic [ref=e50]:
          - generic [ref=e51]: 
          - heading "Operational Excellence" [level=3] [ref=e52]
          - paragraph [ref=e53]: Streamlined workflows and documented procedures that prevent problems before they occur.
        - generic [ref=e54]:
          - generic [ref=e55]: $
          - heading "Revenue Protection" [level=3] [ref=e56]
          - paragraph [ref=e57]: Strong financial controls and optimization strategies that eliminate leakage and maximize profitability.
        - generic [ref=e58]:
          - generic [ref=e59]: 
          - heading "Clinician-Centered" [level=3] [ref=e60]
          - paragraph [ref=e61]: "Practical solutions tailored to your goals, allowing you to focus on what matters: patient care."
        - generic [ref=e62]:
          - generic [ref=e63]: 
          - heading "Long-Term Success" [level=3] [ref=e64]
          - paragraph [ref=e65]: Sustainable growth strategies that position your practice for independence and future opportunities.
    - generic [ref=e67]:
      - generic [ref=e68]:
        - generic [ref=e69]:
          - heading "About AGD Solutions" [level=2] [ref=e70]
          - paragraph [ref=e71]: AGD Solutions is a healthcare practice consulting firm dedicated to helping private independent physicians and specialty groups build clinics that are structured, profitable, and sustainable.
          - paragraph [ref=e72]: "Led by Founder and Principal Consultant Diana Di Masi, we focus on the real engine of a practice: operations, processes, people, and revenue—allowing clinicians to concentrate on patient care rather than daily operational challenges."
          - paragraph [ref=e73]: From startup practices to mature organizations requiring turnaround support, AGD Solutions brings disciplined structure to every aspect of practice management.
          - generic [ref=e74]:
            - generic [ref=e75]:
              - heading " Our Mission" [level=3] [ref=e76]:
                - generic [ref=e77]: 
                - text: Our Mission
              - paragraph [ref=e78]: To transform independent medical practices into well-run, high-performing businesses that deliver excellent patient care, predictable revenue, and a manageable workload for clinicians and staff.
            - generic [ref=e79]:
              - heading " Our Vision" [level=3] [ref=e80]:
                - generic [ref=e81]: 
                - text: Our Vision
              - paragraph [ref=e82]: A future where independent medical practices are thriving businesses capable of competing successfully with large healthcare systems while maintaining their autonomy, identity, and patient relationships.
        - img "AGD Solutions" [ref=e84]
      - generic [ref=e85]:
        - heading "Our Core Values" [level=3] [ref=e86]
        - generic [ref=e87]:
          - generic [ref=e88]:
            - generic [ref=e89]: 
            - heading "Structure Before Stress" [level=4] [ref=e90]
            - paragraph [ref=e91]: Well-designed operations prevent problems before they occur. We build documented workflows that create consistency and accountability.
          - generic [ref=e92]:
            - generic [ref=e93]: 
            - heading "Clinician-Centered Solutions" [level=4] [ref=e94]
            - paragraph [ref=e95]: All recommendations are practical, realistic, and tailored to the goals and operating style of each physician or provider group.
          - generic [ref=e96]:
            - generic [ref=e97]: 
            - heading "Financial Integrity" [level=4] [ref=e98]
            - paragraph [ref=e99]: Strong controls and transparency protect practices from revenue leakage, fraud risks, and operational inefficiencies.
          - generic [ref=e100]:
            - generic [ref=e101]: 
            - heading "Straightforward Guidance" [level=4] [ref=e102]
            - paragraph [ref=e103]: Clients receive clear, actionable recommendations that simplify decision-making and accelerate implementation.
          - generic [ref=e104]:
            - generic [ref=e105]: 
            - heading "Long-Term Sustainability" [level=4] [ref=e106]
            - paragraph [ref=e107]: Every engagement is designed to leave the practice stronger, more independent, and equipped for future growth.
      - generic [ref=e108]:
        - heading "Leadership & Experience" [level=3] [ref=e109]
        - generic [ref=e111]:
          - heading "Diana Di Masi" [level=4] [ref=e112]
          - paragraph [ref=e113]: Founder & Principal Consultant
          - paragraph [ref=e114]: Diana Di Masi brings more than 20 years of experience supporting medical practices across multiple specialties. Her expertise spans practice startup development, clinical operations, revenue cycle management, staff training and development, ancillary service implementation, practice optimization, turnaround management, and fraud and embezzlement risk prevention.
          - paragraph [ref=e115]: Clients value her ability to combine operational discipline, financial oversight, and practical healthcare business experience to achieve measurable results.
    - generic [ref=e117]:
      - heading "Comprehensive Practice Management Services" [level=2] [ref=e118]
      - paragraph [ref=e119]: From startup to sale, we provide the expertise you need at every stage of your practice's journey.
      - generic [ref=e120]:
        - generic [ref=e121]:
          - generic [ref=e122]: 
          - heading "Practice Startup Support" [level=3] [ref=e124]
          - paragraph [ref=e125]: Launch your practice with confidence. We handle the operational design and structure so you can focus on patient care from day one.
          - list [ref=e126]:
            - listitem [ref=e127]:
              - generic [ref=e128]: 
              - text: Concept & service-line planning
            - listitem [ref=e129]:
              - generic [ref=e130]: 
              - text: Operational design & workflows
            - listitem [ref=e131]:
              - generic [ref=e132]: 
              - text: Procedure & policy manuals
            - listitem [ref=e133]:
              - generic [ref=e134]: 
              - text: Staffing plans & training programs
            - listitem [ref=e135]:
              - generic [ref=e136]: 
              - text: Initial marketing strategy
        - generic [ref=e137]:
          - generic [ref=e138]: 
          - heading "Turnaround & Practice Optimization" [level=3] [ref=e140]
          - paragraph [ref=e141]: Transform underperforming operations into efficient, profitable systems with our comprehensive assessment and redesign services.
          - list [ref=e142]:
            - listitem [ref=e143]:
              - generic [ref=e144]: 
              - text: Operational assessments
            - listitem [ref=e145]:
              - generic [ref=e146]: 
              - text: Workflow redesign
            - listitem [ref=e147]:
              - generic [ref=e148]: 
              - text: Revenue cycle reviews
            - listitem [ref=e149]:
              - generic [ref=e150]: 
              - text: Cost structure analysis
            - listitem [ref=e151]:
              - generic [ref=e152]: 
              - text: Productivity improvement
            - listitem [ref=e153]:
              - generic [ref=e154]: 
              - text: Leadership & culture support
        - generic [ref=e155]:
          - generic [ref=e156]: 
          - heading "Ancillary Services & Revenue Expansion" [level=3] [ref=e158]
          - paragraph [ref=e159]: Identify and implement new revenue streams that complement your existing services and enhance patient care.
          - list [ref=e160]:
            - listitem [ref=e161]:
              - generic [ref=e162]: 
              - text: Ancillary service identification
            - listitem [ref=e163]:
              - generic [ref=e164]: 
              - text: Feasibility assessments
            - listitem [ref=e165]:
              - generic [ref=e166]: 
              - text: Operational planning
            - listitem [ref=e167]:
              - generic [ref=e168]: 
              - text: Service implementation
            - listitem [ref=e169]:
              - generic [ref=e170]: 
              - text: Full integration support
        - generic [ref=e171]:
          - generic [ref=e172]: 
          - heading "Marketing & Growth Strategy" [level=3] [ref=e174]
          - paragraph [ref=e175]: Build a sustainable patient acquisition strategy that positions your practice for long-term growth and market leadership.
          - list [ref=e176]:
            - listitem [ref=e177]:
              - generic [ref=e178]: 
              - text: Patient acquisition strategies
            - listitem [ref=e179]:
              - generic [ref=e180]: 
              - text: Target market definition
            - listitem [ref=e181]:
              - generic [ref=e182]: 
              - text: Referral relationship development
            - listitem [ref=e183]:
              - generic [ref=e184]: 
              - text: Value proposition refinement
            - listitem [ref=e185]:
              - generic [ref=e186]: 
              - text: Digital presence guidance
        - generic [ref=e187]:
          - generic [ref=e188]: 
          - heading "Practice Sale & Exit Strategy" [level=3] [ref=e190]
          - paragraph [ref=e191]: Maximize your practice value with comprehensive preparation for sale, partnership, or ownership transition.
          - list [ref=e192]:
            - listitem [ref=e193]:
              - generic [ref=e194]: 
              - text: Sale readiness assessments
            - listitem [ref=e195]:
              - generic [ref=e196]: 
              - text: Documentation preparation
            - listitem [ref=e197]:
              - generic [ref=e198]: 
              - text: Process standardization
            - listitem [ref=e199]:
              - generic [ref=e200]: 
              - text: Operational optimization
            - listitem [ref=e201]:
              - generic [ref=e202]: 
              - text: Practice valuation support
        - generic [ref=e203]:
          - generic [ref=e204]: 
          - heading "Fraud & Embezzlement Risk Assessment" [level=3] [ref=e206]
          - paragraph [ref=e207]: Protect your practice with robust internal controls and financial safeguards designed to prevent fraud and revenue loss.
          - list [ref=e208]:
            - listitem [ref=e209]:
              - generic [ref=e210]: 
              - text: Financial workflow reviews
            - listitem [ref=e211]:
              - generic [ref=e212]: 
              - text: Internal control assessments
            - listitem [ref=e213]:
              - generic [ref=e214]: 
              - text: Risk identification
            - listitem [ref=e215]:
              - generic [ref=e216]: 
              - text: Safeguard recommendations
            - listitem [ref=e217]:
              - generic [ref=e218]: 
              - text: Owner education & training
    - generic [ref=e220]:
      - heading "How AGD Solutions Works" [level=2] [ref=e221]
      - paragraph [ref=e222]: A straightforward, results-focused approach to practice transformation
      - generic [ref=e223]:
        - generic [ref=e224]:
          - generic [ref=e225]: "1"
          - generic [ref=e226]:
            - heading "Discovery Consultation" [level=3] [ref=e227]
            - paragraph [ref=e228]: Initial consultation focused on your goals, challenges, and opportunities. We listen carefully to understand your unique situation and priorities.
        - generic [ref=e229]:
          - generic [ref=e230]: "2"
          - generic [ref=e231]:
            - heading "Comprehensive Assessment" [level=3] [ref=e232]
            - paragraph [ref=e233]: On-site or virtual assessment of operations, finances, workflows, and team structure. We identify strengths to build on and gaps to address.
        - generic [ref=e234]:
          - generic [ref=e235]: "3"
          - generic [ref=e236]:
            - heading "Strategic Recommendations" [level=3] [ref=e237]
            - paragraph [ref=e238]: Delivery of clear recommendations and a prioritized action plan. You'll receive straightforward guidance tailored to your practice's needs and resources.
        - generic [ref=e239]:
          - generic [ref=e240]: "4"
          - generic [ref=e241]:
            - heading "Implementation & Support" [level=3] [ref=e242]
            - paragraph [ref=e243]: Hands-on implementation support, staff training, and follow-up as needed. We ensure changes are successfully adopted and delivering results.
    - generic [ref=e246]:
      - generic [ref=e247]:
        - heading "Ready to Transform Your Practice?" [level=2] [ref=e248]
        - paragraph [ref=e249]: Let's discuss how AGD Solutions can help you build a practice that's organized, profitable, and sustainable.
        - paragraph [ref=e250]: Schedule a confidential consultation to explore your goals and challenges. Whether you're launching a new practice, optimizing operations, or preparing for a transition, we're here to help.
        - generic [ref=e251]:
          - generic [ref=e252]:
            - generic [ref=e253]: 
            - generic [ref=e254]:
              - heading "Email" [level=4] [ref=e255]
              - link "info@agdsolutions.com" [ref=e256] [cursor=pointer]:
                - /url: mailto:info@agdsolutions.com
          - generic [ref=e257]:
            - generic [ref=e258]: 
            - generic [ref=e259]:
              - heading "Phone" [level=4] [ref=e260]
              - link "Schedule a Call" [ref=e261] [cursor=pointer]:
                - /url: tel:+1234567890
      - generic [ref=e263]:
        - heading "Request a Consultation" [level=3] [ref=e264]
        - generic [ref=e265]:
          - generic [ref=e266]: Name *
          - textbox "Name *" [ref=e267]: Test User
        - generic [ref=e268]:
          - generic [ref=e269]: Email *
          - textbox "Email *" [active] [ref=e270]: invalid-email
        - generic [ref=e271]:
          - generic [ref=e272]: Phone
          - textbox "Phone" [ref=e273]
        - generic [ref=e274]:
          - generic [ref=e275]: Practice Name
          - textbox "Practice Name" [ref=e276]
        - generic [ref=e277]:
          - generic [ref=e278]: Specialty
          - combobox "Specialty" [ref=e279]:
            - option "Select..." [selected]
            - option "Primary Care"
            - option "Internal Medicine"
            - option "Cardiology"
            - option "Orthopedics"
            - option "Geriatrics"
            - option "Behavioral Health"
            - option "Other Specialty"
        - generic [ref=e280]:
          - generic [ref=e281]: Area of Interest *
          - combobox "Area of Interest *" [ref=e282]:
            - option "Select..."
            - option "Practice Startup"
            - option "Turnaround & Optimization"
            - option "Ancillary Services"
            - option "Marketing & Growth"
            - option "Practice Sale/Exit"
            - option "Fraud Risk Assessment"
            - option "General Consultation" [selected]
        - generic [ref=e283]:
          - generic [ref=e284]: Message
          - textbox "Message" [ref=e285]
        - button "Submit Request" [ref=e286] [cursor=pointer]
        - paragraph [ref=e287]: "* Required fields. We respect your privacy and will never share your information."
  - contentinfo [ref=e288]:
    - generic [ref=e289]:
      - generic [ref=e290]:
        - generic [ref=e291]:
          - img "AGD Solutions LLC" [ref=e292]
          - paragraph [ref=e293]: Healthcare practice consulting for independent physicians and specialty groups.
        - generic [ref=e294]:
          - heading "Quick Links" [level=4] [ref=e295]
          - list [ref=e296]:
            - listitem [ref=e297]:
              - link "Home" [ref=e298] [cursor=pointer]:
                - /url: "#home"
            - listitem [ref=e299]:
              - link "About" [ref=e300] [cursor=pointer]:
                - /url: "#about"
            - listitem [ref=e301]:
              - link "Services" [ref=e302] [cursor=pointer]:
                - /url: "#services"
            - listitem [ref=e303]:
              - link "How We Work" [ref=e304] [cursor=pointer]:
                - /url: "#process"
            - listitem [ref=e305]:
              - link "Contact" [ref=e306] [cursor=pointer]:
                - /url: "#contact"
        - generic [ref=e307]:
          - heading "Services" [level=4] [ref=e308]
          - list [ref=e309]:
            - listitem [ref=e310]:
              - link "Practice Startup" [ref=e311] [cursor=pointer]:
                - /url: "#services"
            - listitem [ref=e312]:
              - link "Turnaround & Optimization" [ref=e313] [cursor=pointer]:
                - /url: "#services"
            - listitem [ref=e314]:
              - link "Revenue Expansion" [ref=e315] [cursor=pointer]:
                - /url: "#services"
            - listitem [ref=e316]:
              - link "Marketing Strategy" [ref=e317] [cursor=pointer]:
                - /url: "#services"
            - listitem [ref=e318]:
              - link "Practice Sale Support" [ref=e319] [cursor=pointer]:
                - /url: "#services"
        - generic [ref=e320]:
          - heading "Contact" [level=4] [ref=e321]
          - list [ref=e322]:
            - listitem [ref=e323]:
              - link " info@agdsolutions.com" [ref=e324] [cursor=pointer]:
                - /url: mailto:info@agdsolutions.com
                - generic [ref=e325]: 
                - text: info@agdsolutions.com
            - listitem [ref=e326]:
              - link " Schedule Consultation" [ref=e327] [cursor=pointer]:
                - /url: "#contact"
                - generic [ref=e328]: 
                - text: Schedule Consultation
      - paragraph [ref=e330]: © 2026 AGD Solutions LLC. All rights reserved.
  - button "Back to top" [ref=e331] [cursor=pointer]:
    - generic [ref=e332]: 
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
> 65  |         await page.waitForSelector('.form-message.error', { timeout: 2000 });
      |                    ^ TimeoutError: page.waitForSelector: Timeout 2000ms exceeded.
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
  94  |         await page.waitForSelector('.form-message.success', { timeout: 10000 });
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
```