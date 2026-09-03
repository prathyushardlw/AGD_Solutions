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

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - navigation [ref=e2]:
    - generic [ref=e4]:
      - generic [ref=e5]:
        - img "AGD Solutions LLC" [ref=e6]
        - generic [ref=e7]: AGD Solutions
      - list [ref=e8]:
        - listitem [ref=e9]:
          - link "Home" [ref=e10] [cursor=pointer]:
            - /url: "#home"
        - listitem [ref=e11]:
          - link "About" [ref=e12] [cursor=pointer]:
            - /url: "#about"
        - listitem [ref=e13]:
          - link "Services" [ref=e14] [cursor=pointer]:
            - /url: "#services"
        - listitem [ref=e15]:
          - link "How We Work" [ref=e16] [cursor=pointer]:
            - /url: "#process"
        - listitem [ref=e17]:
          - link "Get Started" [ref=e18] [cursor=pointer]:
            - /url: "#contact"
  - main [ref=e19]:
    - generic [ref=e21]:
      - generic [ref=e22]:
        - heading "Build a Practice That's Structured. Profitable. Sustainable." [level=1] [ref=e23]:
          - text: Build a Practice That's
          - generic [ref=e24]: Structured. Profitable. Sustainable.
        - paragraph [ref=e25]: Expert healthcare consulting for independent physicians and specialty groups who want to focus on patient care, not operational chaos.
        - generic [ref=e26]:
          - link "Schedule a Consultation" [ref=e27] [cursor=pointer]:
            - /url: "#contact"
          - link "Explore Our Services" [ref=e28] [cursor=pointer]:
            - /url: "#services"
      - generic [ref=e29]:
        - generic [ref=e30]:
          - generic [ref=e31]: 
          - heading "20+ Years" [level=3] [ref=e32]
          - paragraph [ref=e33]: Healthcare Experience
        - generic [ref=e34]:
          - generic [ref=e35]: 
          - heading "Proven Results" [level=3] [ref=e36]
          - paragraph [ref=e37]: Revenue Optimization
        - generic [ref=e38]:
          - generic [ref=e39]: 
          - heading "Protected" [level=3] [ref=e40]
          - paragraph [ref=e41]: Financial Safeguards
    - generic [ref=e43]:
      - heading "Why Independent Practices Choose AGD Solutions" [level=2] [ref=e44]
      - generic [ref=e45]:
        - generic [ref=e46]:
          - generic [ref=e47]: 
          - heading "Operational Excellence" [level=3] [ref=e48]
          - paragraph [ref=e49]: Streamlined workflows and documented procedures that prevent problems before they occur.
        - generic [ref=e50]:
          - generic [ref=e51]: $
          - heading "Revenue Protection" [level=3] [ref=e52]
          - paragraph [ref=e53]: Strong financial controls and optimization strategies that eliminate leakage and maximize profitability.
        - generic [ref=e54]:
          - generic [ref=e55]: 
          - heading "Clinician-Centered" [level=3] [ref=e56]
          - paragraph [ref=e57]: "Practical solutions tailored to your goals, allowing you to focus on what matters: patient care."
        - generic [ref=e58]:
          - generic [ref=e59]: 
          - heading "Long-Term Success" [level=3] [ref=e60]
          - paragraph [ref=e61]: Sustainable growth strategies that position your practice for independence and future opportunities.
    - generic [ref=e63]:
      - generic [ref=e64]:
        - generic [ref=e65]:
          - heading "About AGD Solutions" [level=2] [ref=e66]
          - paragraph [ref=e67]: AGD Solutions is a healthcare practice consulting firm dedicated to helping private independent physicians and specialty groups build clinics that are structured, profitable, and sustainable.
          - paragraph [ref=e68]: "Led by Founder and Principal Consultant Diana Di Masi, we focus on the real engine of a practice: operations, processes, people, and revenue—allowing clinicians to concentrate on patient care rather than daily operational challenges."
          - paragraph [ref=e69]: From startup practices to mature organizations requiring turnaround support, AGD Solutions brings disciplined structure to every aspect of practice management.
          - generic [ref=e70]:
            - generic [ref=e71]:
              - heading " Our Mission" [level=3] [ref=e72]:
                - generic [ref=e73]: 
                - text: Our Mission
              - paragraph [ref=e74]: To transform independent medical practices into well-run, high-performing businesses that deliver excellent patient care, predictable revenue, and a manageable workload for clinicians and staff.
            - generic [ref=e75]:
              - heading " Our Vision" [level=3] [ref=e76]:
                - generic [ref=e77]: 
                - text: Our Vision
              - paragraph [ref=e78]: A future where independent medical practices are thriving businesses capable of competing successfully with large healthcare systems while maintaining their autonomy, identity, and patient relationships.
        - img "AGD Solutions" [ref=e80]
      - generic [ref=e81]:
        - heading "Our Core Values" [level=3] [ref=e82]
        - generic [ref=e83]:
          - generic [ref=e84]:
            - generic [ref=e85]: 
            - heading "Structure Before Stress" [level=4] [ref=e86]
            - paragraph [ref=e87]: Well-designed operations prevent problems before they occur. We build documented workflows that create consistency and accountability.
          - generic [ref=e88]:
            - generic [ref=e89]: 
            - heading "Clinician-Centered Solutions" [level=4] [ref=e90]
            - paragraph [ref=e91]: All recommendations are practical, realistic, and tailored to the goals and operating style of each physician or provider group.
          - generic [ref=e92]:
            - generic [ref=e93]: 
            - heading "Financial Integrity" [level=4] [ref=e94]
            - paragraph [ref=e95]: Strong controls and transparency protect practices from revenue leakage, fraud risks, and operational inefficiencies.
          - generic [ref=e96]:
            - generic [ref=e97]: 
            - heading "Straightforward Guidance" [level=4] [ref=e98]
            - paragraph [ref=e99]: Clients receive clear, actionable recommendations that simplify decision-making and accelerate implementation.
          - generic [ref=e100]:
            - generic [ref=e101]: 
            - heading "Long-Term Sustainability" [level=4] [ref=e102]
            - paragraph [ref=e103]: Every engagement is designed to leave the practice stronger, more independent, and equipped for future growth.
      - generic [ref=e104]:
        - heading "Leadership & Experience" [level=3] [ref=e105]
        - generic [ref=e107]:
          - heading "Diana Di Masi" [level=4] [ref=e108]
          - paragraph [ref=e109]: Founder & Principal Consultant
          - paragraph [ref=e110]: Diana Di Masi brings more than 20 years of experience supporting medical practices across multiple specialties. Her expertise spans practice startup development, clinical operations, revenue cycle management, staff training and development, ancillary service implementation, practice optimization, turnaround management, and fraud and embezzlement risk prevention.
          - paragraph [ref=e111]: Clients value her ability to combine operational discipline, financial oversight, and practical healthcare business experience to achieve measurable results.
    - generic [ref=e113]:
      - heading "Comprehensive Practice Management Services" [level=2] [ref=e114]
      - paragraph [ref=e115]: From startup to sale, we provide the expertise you need at every stage of your practice's journey.
      - generic [ref=e116]:
        - generic [ref=e117]:
          - generic [ref=e118]: 
          - heading "Practice Startup Support" [level=3] [ref=e120]
          - paragraph [ref=e121]: Launch your practice with confidence. We handle the operational design and structure so you can focus on patient care from day one.
          - list [ref=e122]:
            - listitem [ref=e123]:
              - generic [ref=e124]: 
              - text: Concept & service-line planning
            - listitem [ref=e125]:
              - generic [ref=e126]: 
              - text: Operational design & workflows
            - listitem [ref=e127]:
              - generic [ref=e128]: 
              - text: Procedure & policy manuals
            - listitem [ref=e129]:
              - generic [ref=e130]: 
              - text: Staffing plans & training programs
            - listitem [ref=e131]:
              - generic [ref=e132]: 
              - text: Initial marketing strategy
        - generic [ref=e133]:
          - generic [ref=e134]: 
          - heading "Turnaround & Practice Optimization" [level=3] [ref=e136]
          - paragraph [ref=e137]: Transform underperforming operations into efficient, profitable systems with our comprehensive assessment and redesign services.
          - list [ref=e138]:
            - listitem [ref=e139]:
              - generic [ref=e140]: 
              - text: Operational assessments
            - listitem [ref=e141]:
              - generic [ref=e142]: 
              - text: Workflow redesign
            - listitem [ref=e143]:
              - generic [ref=e144]: 
              - text: Revenue cycle reviews
            - listitem [ref=e145]:
              - generic [ref=e146]: 
              - text: Cost structure analysis
            - listitem [ref=e147]:
              - generic [ref=e148]: 
              - text: Productivity improvement
            - listitem [ref=e149]:
              - generic [ref=e150]: 
              - text: Leadership & culture support
        - generic [ref=e151]:
          - generic [ref=e152]: 
          - heading "Ancillary Services & Revenue Expansion" [level=3] [ref=e154]
          - paragraph [ref=e155]: Identify and implement new revenue streams that complement your existing services and enhance patient care.
          - list [ref=e156]:
            - listitem [ref=e157]:
              - generic [ref=e158]: 
              - text: Ancillary service identification
            - listitem [ref=e159]:
              - generic [ref=e160]: 
              - text: Feasibility assessments
            - listitem [ref=e161]:
              - generic [ref=e162]: 
              - text: Operational planning
            - listitem [ref=e163]:
              - generic [ref=e164]: 
              - text: Service implementation
            - listitem [ref=e165]:
              - generic [ref=e166]: 
              - text: Full integration support
        - generic [ref=e167]:
          - generic [ref=e168]: 
          - heading "Marketing & Growth Strategy" [level=3] [ref=e170]
          - paragraph [ref=e171]: Build a sustainable patient acquisition strategy that positions your practice for long-term growth and market leadership.
          - list [ref=e172]:
            - listitem [ref=e173]:
              - generic [ref=e174]: 
              - text: Patient acquisition strategies
            - listitem [ref=e175]:
              - generic [ref=e176]: 
              - text: Target market definition
            - listitem [ref=e177]:
              - generic [ref=e178]: 
              - text: Referral relationship development
            - listitem [ref=e179]:
              - generic [ref=e180]: 
              - text: Value proposition refinement
            - listitem [ref=e181]:
              - generic [ref=e182]: 
              - text: Digital presence guidance
        - generic [ref=e183]:
          - generic [ref=e184]: 
          - heading "Practice Sale & Exit Strategy" [level=3] [ref=e186]
          - paragraph [ref=e187]: Maximize your practice value with comprehensive preparation for sale, partnership, or ownership transition.
          - list [ref=e188]:
            - listitem [ref=e189]:
              - generic [ref=e190]: 
              - text: Sale readiness assessments
            - listitem [ref=e191]:
              - generic [ref=e192]: 
              - text: Documentation preparation
            - listitem [ref=e193]:
              - generic [ref=e194]: 
              - text: Process standardization
            - listitem [ref=e195]:
              - generic [ref=e196]: 
              - text: Operational optimization
            - listitem [ref=e197]:
              - generic [ref=e198]: 
              - text: Practice valuation support
        - generic [ref=e199]:
          - generic [ref=e200]: 
          - heading "Fraud & Embezzlement Risk Assessment" [level=3] [ref=e202]
          - paragraph [ref=e203]: Protect your practice with robust internal controls and financial safeguards designed to prevent fraud and revenue loss.
          - list [ref=e204]:
            - listitem [ref=e205]:
              - generic [ref=e206]: 
              - text: Financial workflow reviews
            - listitem [ref=e207]:
              - generic [ref=e208]: 
              - text: Internal control assessments
            - listitem [ref=e209]:
              - generic [ref=e210]: 
              - text: Risk identification
            - listitem [ref=e211]:
              - generic [ref=e212]: 
              - text: Safeguard recommendations
            - listitem [ref=e213]:
              - generic [ref=e214]: 
              - text: Owner education & training
    - generic [ref=e216]:
      - heading "How AGD Solutions Works" [level=2] [ref=e217]
      - paragraph [ref=e218]: A straightforward, results-focused approach to practice transformation
      - generic [ref=e219]:
        - generic [ref=e220]:
          - generic [ref=e221]: "1"
          - generic [ref=e222]:
            - heading "Discovery Consultation" [level=3] [ref=e223]
            - paragraph [ref=e224]: Initial consultation focused on your goals, challenges, and opportunities. We listen carefully to understand your unique situation and priorities.
        - generic [ref=e225]:
          - generic [ref=e226]: "2"
          - generic [ref=e227]:
            - heading "Comprehensive Assessment" [level=3] [ref=e228]
            - paragraph [ref=e229]: On-site or virtual assessment of operations, finances, workflows, and team structure. We identify strengths to build on and gaps to address.
        - generic [ref=e230]:
          - generic [ref=e231]: "3"
          - generic [ref=e232]:
            - heading "Strategic Recommendations" [level=3] [ref=e233]
            - paragraph [ref=e234]: Delivery of clear recommendations and a prioritized action plan. You'll receive straightforward guidance tailored to your practice's needs and resources.
        - generic [ref=e235]:
          - generic [ref=e236]: "4"
          - generic [ref=e237]:
            - heading "Implementation & Support" [level=3] [ref=e238]
            - paragraph [ref=e239]: Hands-on implementation support, staff training, and follow-up as needed. We ensure changes are successfully adopted and delivering results.
    - generic [ref=e242]:
      - generic [ref=e243]:
        - heading "Ready to Transform Your Practice?" [level=2] [ref=e244]
        - paragraph [ref=e245]: Let's discuss how AGD Solutions can help you build a practice that's organized, profitable, and sustainable.
        - paragraph [ref=e246]: Schedule a confidential consultation to explore your goals and challenges. Whether you're launching a new practice, optimizing operations, or preparing for a transition, we're here to help.
        - generic [ref=e247]:
          - generic [ref=e248]:
            - generic [ref=e249]: 
            - generic [ref=e250]:
              - heading "Email" [level=4] [ref=e251]
              - link "info@agdsolutions.com" [ref=e252] [cursor=pointer]:
                - /url: mailto:info@agdsolutions.com
          - generic [ref=e253]:
            - generic [ref=e254]: 
            - generic [ref=e255]:
              - heading "Phone" [level=4] [ref=e256]
              - link "Schedule a Call" [ref=e257] [cursor=pointer]:
                - /url: tel:+1234567890
      - generic [ref=e259]:
        - heading "Request a Consultation" [level=3] [ref=e260]
        - generic [ref=e261]:
          - generic [ref=e262]: Name *
          - textbox "Name *" [ref=e263]: John Doe
        - generic [ref=e264]:
          - generic [ref=e265]: Email *
          - textbox "Email *" [ref=e266]: john.doe@example.com
        - generic [ref=e267]:
          - generic [ref=e268]: Phone
          - textbox "Phone" [ref=e269]: 555-123-4567
        - generic [ref=e270]:
          - generic [ref=e271]: Practice Name
          - textbox "Practice Name" [ref=e272]: Doe Medical Center
        - generic [ref=e273]:
          - generic [ref=e274]: Specialty
          - combobox "Specialty" [ref=e275]:
            - option "Select..."
            - option "Primary Care" [selected]
            - option "Internal Medicine"
            - option "Cardiology"
            - option "Orthopedics"
            - option "Geriatrics"
            - option "Behavioral Health"
            - option "Other Specialty"
        - generic [ref=e276]:
          - generic [ref=e277]: Area of Interest *
          - combobox "Area of Interest *" [ref=e278]:
            - option "Select..."
            - option "Practice Startup"
            - option "Turnaround & Optimization" [selected]
            - option "Ancillary Services"
            - option "Marketing & Growth"
            - option "Practice Sale/Exit"
            - option "Fraud Risk Assessment"
            - option "General Consultation"
        - generic [ref=e279]:
          - generic [ref=e280]: Message
          - textbox "Message" [ref=e281]: I need help optimizing my practice operations and revenue cycle.
        - button "Submit Request" [ref=e282] [cursor=pointer]
        - paragraph [ref=e283]: "* Required fields. We respect your privacy and will never share your information."
  - contentinfo [ref=e284]:
    - generic [ref=e285]:
      - generic [ref=e286]:
        - generic [ref=e287]:
          - img "AGD Solutions LLC" [ref=e288]
          - paragraph [ref=e289]: Healthcare practice consulting for independent physicians and specialty groups.
        - generic [ref=e290]:
          - heading "Quick Links" [level=4] [ref=e291]
          - list [ref=e292]:
            - listitem [ref=e293]:
              - link "Home" [ref=e294] [cursor=pointer]:
                - /url: "#home"
            - listitem [ref=e295]:
              - link "About" [ref=e296] [cursor=pointer]:
                - /url: "#about"
            - listitem [ref=e297]:
              - link "Services" [ref=e298] [cursor=pointer]:
                - /url: "#services"
            - listitem [ref=e299]:
              - link "How We Work" [ref=e300] [cursor=pointer]:
                - /url: "#process"
            - listitem [ref=e301]:
              - link "Contact" [ref=e302] [cursor=pointer]:
                - /url: "#contact"
        - generic [ref=e303]:
          - heading "Services" [level=4] [ref=e304]
          - list [ref=e305]:
            - listitem [ref=e306]:
              - link "Practice Startup" [ref=e307] [cursor=pointer]:
                - /url: "#services"
            - listitem [ref=e308]:
              - link "Turnaround & Optimization" [ref=e309] [cursor=pointer]:
                - /url: "#services"
            - listitem [ref=e310]:
              - link "Revenue Expansion" [ref=e311] [cursor=pointer]:
                - /url: "#services"
            - listitem [ref=e312]:
              - link "Marketing Strategy" [ref=e313] [cursor=pointer]:
                - /url: "#services"
            - listitem [ref=e314]:
              - link "Practice Sale Support" [ref=e315] [cursor=pointer]:
                - /url: "#services"
        - generic [ref=e316]:
          - heading "Contact" [level=4] [ref=e317]
          - list [ref=e318]:
            - listitem [ref=e319]:
              - link " info@agdsolutions.com" [ref=e320] [cursor=pointer]:
                - /url: mailto:info@agdsolutions.com
                - generic [ref=e321]: 
                - text: info@agdsolutions.com
            - listitem [ref=e322]:
              - link " Schedule Consultation" [ref=e323] [cursor=pointer]:
                - /url: "#contact"
                - generic [ref=e324]: 
                - text: Schedule Consultation
      - paragraph [ref=e326]: © 2026 AGD Solutions LLC. All rights reserved.
  - button "Back to top" [ref=e327] [cursor=pointer]:
    - generic [ref=e328]: 
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