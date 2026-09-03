# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact-form.test.js >> AGD Solutions Contact Form >> should validate email format
- Location: tests\contact-form.test.js:52:5

# Error details

```
TimeoutError: page.fill: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('#name')
    - locator resolved to <input id="name" type="text" name="name" required=""/>
    - fill("Test User")
  - attempting fill action
    - waiting for element to be visible, enabled and editable

```

```
Tearing down "context" exceeded the test timeout of 30000ms.
```