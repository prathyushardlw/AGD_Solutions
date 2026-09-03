# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: contact-form.test.js >> AGD Solutions Contact Form >> should successfully submit form with all fields filled
- Location: tests\contact-form.test.js:73:5

# Error details

```
Error: locator.scrollIntoViewIfNeeded: Target page, context or browser has been closed
Call log:
  - waiting for locator('#contact')
    - locator resolved to visible <section id="contact" class="contact">…</section>

```

```
Error: browserContext.close: Test ended.
Browser logs:

<launching> C:\Users\prath\AppData\Local\ms-playwright\webkit-2336\Playwright.exe --inspector-pipe --disable-accelerated-compositing --no-startup-window
<launched> pid=22376
[pid=22376] <gracefully close start>
```