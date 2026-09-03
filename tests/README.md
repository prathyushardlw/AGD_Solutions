# AGD Solutions - Test Suite

Comprehensive end-to-end tests for the AGD Solutions website using Playwright.

## 📋 Test Coverage

### Frontend Tests
- ✅ Contact form visibility and fields
- ✅ Form validation (required fields, email format)
- ✅ Form submission with all fields
- ✅ Form submission with required fields only
- ✅ Submit button state during submission
- ✅ All specialty options
- ✅ All interest area options
- ✅ Navigation to contact form
- ✅ Network error handling

### Backend API Tests
- ✅ API health check
- ✅ Contact submission via API
- ✅ Required field validation
- ✅ Email format validation
- ✅ Retrieve all contacts

### Full Website Tests
- ✅ All main sections load
- ✅ Navigation links work
- ✅ All 6 service cards display
- ✅ All 4 process steps display
- ✅ Responsive mobile menu
- ✅ Full page screenshots

## 🚀 Prerequisites

1. **Backend must be running:**
   ```bash
   cd backend
   npm start
   ```

2. **Install Playwright:**
   ```bash
   npm install
   npx playwright install
   ```

## 🧪 Running Tests

### Run all tests
```bash
npm test
```

### Run tests with browser visible
```bash
npm run test:headed
```

### Run tests in UI mode (interactive)
```bash
npm run test:ui
```

### Run specific test file
```bash
npx playwright test tests/contact-form.test.js
```

### Run specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Debug tests
```bash
npm run test:debug
```

### View test report
```bash
npm run test:report
```

## 📊 Test Reports

After running tests, view the HTML report:
```bash
npx playwright show-report tests/playwright-report
```

## 📸 Screenshots

Screenshots are automatically saved to `tests/screenshots/`:
- `form-filled.png` - Form with all fields filled
- `form-submitted.png` - Success message after submission
- `full-website.png` - Full page screenshot

## 🎯 Test Results

Test results are saved to:
- `tests/playwright-report/` - HTML report
- `tests/test-results.json` - JSON format
- `tests/test-results/` - Screenshots, videos, traces

## 🔧 Configuration

Edit `playwright.config.js` to:
- Add more browsers
- Change timeout settings
- Modify screenshot/video behavior
- Update base URLs

## 📝 Writing New Tests

Add new tests to `tests/contact-form.test.js` or create new test files:

```javascript
test('my new test', async ({ page }) => {
    await page.goto(FRONTEND_URL);
    // Your test code here
    await expect(page.locator('.element')).toBeVisible();
});
```

## 🐛 Troubleshooting

### Backend not running
```
Error: connect ECONNREFUSED 127.0.0.1:5000
```
**Fix:** Start the backend server first:
```bash
cd backend && npm start
```

### Playwright not installed
```
Error: browserType.launch: Executable doesn't exist
```
**Fix:** Install Playwright browsers:
```bash
npx playwright install
```

### Tests timing out
**Fix:** Increase timeout in `playwright.config.js`:
```javascript
timeout: 60 * 1000,  // 60 seconds
```

## 📊 CI/CD Integration

### GitHub Actions Example
```yaml
- name: Install dependencies
  run: npm install

- name: Install Playwright browsers
  run: npx playwright install --with-deps

- name: Start backend
  run: cd backend && npm start &

- name: Run tests
  run: npm test

- name: Upload test report
  uses: actions/upload-artifact@v3
  with:
    name: playwright-report
    path: tests/playwright-report/
```

## 🎯 Best Practices

1. **Keep backend running** during test development
2. **Use descriptive test names** that explain what's being tested
3. **Take screenshots** for visual verification
4. **Test both success and failure cases**
5. **Clean up test data** from MongoDB after tests (if needed)

## 📞 Support

For test issues:
- Check backend is running on port 5000
- Verify MongoDB connection is working
- Review test output and screenshots
- Check `tests/test-results/` for detailed logs

---

**Ready to test!** Run `npm test` to verify everything works! 🚀
