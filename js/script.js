// AGD Solutions LLC - Website JavaScript

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // Mobile Menu Toggle
    // ==========================================
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close mobile menu when clicking a nav link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        });
    });

    // ==========================================
    // Navbar Scroll Effect
    // ==========================================
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    });

    // ==========================================
    // Smooth Scroll for Navigation Links
    // ==========================================
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal anchor links
            if (href.startsWith('#')) {
                e.preventDefault();
                
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const navbarHeight = navbar.offsetHeight;
                    const targetPosition = targetSection.offsetTop - navbarHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // ==========================================
    // Active Navigation Link on Scroll
    // ==========================================
    const sections = document.querySelectorAll('section[id]');
    
    function updateActiveNavLink() {
        const scrollPosition = window.pageYOffset + navbar.offsetHeight + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNavLink);

    // ==========================================
    // Contact Form Handling
    // ==========================================
    const contactForm = document.getElementById('contactForm');
    
    // API Configuration - Update this URL when deploying
    const API_URL = window.location.hostname === 'localhost' || 
                    window.location.hostname === '127.0.0.1' || 
                    window.location.protocol === 'file:'
        ? 'http://localhost:5000/api'  // Development
        : 'https://your-backend-url.com/api';  // Production - UPDATE THIS!
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Disable submit button to prevent double submission
            const submitButton = contactForm.querySelector('button[type="submit"]');
            const originalButtonText = submitButton.textContent;
            submitButton.disabled = true;
            submitButton.textContent = 'Submitting...';
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                phone: document.getElementById('phone').value,
                practice: document.getElementById('practice').value,
                specialty: document.getElementById('specialty').value,
                interest: document.getElementById('interest').value,
                message: document.getElementById('message').value
            };
            
            // Basic validation
            if (!formData.name || !formData.email || !formData.interest) {
                showFormMessage('Please fill in all required fields.', 'error');
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                return;
            }
            
            // Email validation
            const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(formData.email)) {
                showFormMessage('Please enter a valid email address.', 'error');
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
                return;
            }
            
            try {
                // Send data to backend API
                const response = await fetch(`${API_URL}/contact`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData)
                });
                
                const result = await response.json();
                
                if (response.ok && result.success) {
                    // Show success message
                    showFormMessage(result.message || 'Thank you for your inquiry! We will contact you within 24 hours.', 'success');
                    
                    // Reset form
                    contactForm.reset();
                } else {
                    // Show error message from server
                    showFormMessage(result.message || 'An error occurred. Please try again.', 'error');
                }
                
            } catch (error) {
                console.error('Form submission error:', error);
                showFormMessage('Unable to submit form. Please check your connection and try again, or email us directly at info@agdsolutions.com', 'error');
            } finally {
                // Re-enable submit button
                submitButton.disabled = false;
                submitButton.textContent = originalButtonText;
            }
        });
    }
    
    function showFormMessage(message, type) {
        // Remove any existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message element
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        // Add styles
        messageDiv.style.padding = '1rem';
        messageDiv.style.marginTop = '1rem';
        messageDiv.style.borderRadius = '8px';
        messageDiv.style.textAlign = 'center';
        messageDiv.style.fontWeight = '500';
        
        if (type === 'success') {
            messageDiv.style.backgroundColor = '#d4edda';
            messageDiv.style.color = '#155724';
            messageDiv.style.border = '1px solid #c3e6cb';
        } else {
            messageDiv.style.backgroundColor = '#f8d7da';
            messageDiv.style.color = '#721c24';
            messageDiv.style.border = '1px solid #f5c6cb';
        }
        
        // Insert message before submit button
        const submitButton = contactForm.querySelector('button[type="submit"]');
        contactForm.insertBefore(messageDiv, submitButton);
        
        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.style.transition = 'opacity 0.5s';
            messageDiv.style.opacity = '0';
            setTimeout(() => messageDiv.remove(), 500);
        }, 5000);
    }

    // ==========================================
    // Intersection Observer for Fade-in Animations
    // ==========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animateElements = document.querySelectorAll(
        '.value-card, .service-card, .step, .stat, .value-item'
    );
    
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // ==========================================
    // Statistics Counter Animation (Hero Section)
    // ==========================================
    const stats = document.querySelectorAll('.stat');
    let statsAnimated = false;
    
    function animateStats() {
        if (statsAnimated) return;
        
        const statsSection = document.querySelector('.hero-stats');
        if (!statsSection) return;
        
        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
            statsAnimated = true;
            // Stats animation would go here if using numeric counters
            // For this design, the stats are text-based
        }
    }
    
    window.addEventListener('scroll', animateStats);
    animateStats(); // Check on load

    // ==========================================
    // Back to Top Button (Optional)
    // ==========================================
    const createBackToTopButton = () => {
        const button = document.createElement('button');
        button.innerHTML = '<i class="fas fa-arrow-up"></i>';
        button.className = 'back-to-top';
        button.setAttribute('aria-label', 'Back to top');
        
        // Styles
        button.style.cssText = `
            position: fixed;
            bottom: 2rem;
            right: 2rem;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--primary-color, #b8860b);
            color: white;
            border: none;
            cursor: pointer;
            display: none;
            align-items: center;
            justify-content: center;
            font-size: 1.25rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 999;
            transition: all 0.3s ease;
        `;
        
        button.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
        
        document.body.appendChild(button);
        
        // Show/hide based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 500) {
                button.style.display = 'flex';
            } else {
                button.style.display = 'none';
            }
        });
        
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'translateY(-5px)';
            button.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'translateY(0)';
            button.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    };
    
    createBackToTopButton();

    // ==========================================
    // Form Field Focus Effects
    // ==========================================
    const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');
    
    formInputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            this.parentElement.classList.remove('focused');
        });
    });

    // ==========================================
    // Log page load for analytics (optional)
    // ==========================================
    console.log('AGD Solutions website loaded successfully');
    
    // You can add Google Analytics or other tracking here
    // Example: gtag('event', 'page_view');
});

// ==========================================
// Utility Functions
// ==========================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}
