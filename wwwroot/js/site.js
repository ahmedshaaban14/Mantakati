// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// ========================================
// ANIMATION & INTERACTION EFFECTS
// ========================================

// Add scroll-triggered animations to cards
document.addEventListener('DOMContentLoaded', function() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'slideUp 0.6s ease-out forwards';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all service cards and category cards
    document.querySelectorAll('.service-card, .category-card, .suggestion-box').forEach(card => {
        card.style.opacity = '0';
        observer.observe(card);
    });

    // Add hover effect to buttons - use CSS classes for better performance
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.classList.add('btn-hover');
        });
        btn.addEventListener('mouseleave', function() {
            this.classList.remove('btn-hover');
        });
    });

    // Add hover ripple effect for cards - use CSS classes for better performance
    const cards = document.querySelectorAll('.service-card, .category-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.classList.add('card-hover');
        });
        card.addEventListener('mouseleave', function() {
            this.classList.remove('card-hover');
        });
    });

    // Add counter animation for numbers
    const animateCounters = () => {
        const counters = document.querySelectorAll('.counter');
        counters.forEach(counter => {
            const target = parseInt(counter.textContent);
            const duration = 1000;
            const increment = target / (duration / 16);
            let current = 0;

            const updateCounter = () => {
                current += increment;
                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };
            updateCounter();
        });
    };

    // Form input focus effects
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShado - use CSS classes
    const inputs = document.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
        input.addEventListener('focus', function() {
            this.classList.add('input-focused');
        });
        input.addEventListener('blur', function() {
            this.classList.remove('input-focused')ach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // Add navbar scroll effect
    const navbar = document.que (throttled for performance)
    const navbar = document.querySelector('.custom-navbar, .navbar-user, .navbar-admin');
    let lastScrollTime = 0;
    const scrollThrottle = 100;
    
    window.addEventListener('scroll', function() {
        if (!navbar) return;
        const now = Date.now();
        if (now - lastScrollTime >= scrollThrottle) {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 100) {
                navbar.classList.add('navbar-scrolled');
            } else {
                navbar.classList.remove('navbar-scrolled');
            }
            lastScrollTime = now;
        }
    }, { passive: true
    // Add active link styling on navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
            link.classList.add('active');
            link.style.background = 'rgba(255, 255, 255, 0.15)';
        }
    });

    // Toast notification handler
    window.showToast = function(message, type = 'success') {
        const toast = document.createElement('div');
        toast.className = `alert alert-${type}`;
        toast.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            min-width: 300px;
            z-index: 9999;
            animation: slideDown 0.4s ease-out;
        `;
        toast.textContent = message;
        document.body.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'slideUp 0.4s ease-out forwards';
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    };

    // Initialize any Popovers/Tooltips
    const tooltips = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    tooltips.forEach(tooltip => {
        new bootstrap.Tooltip(tooltip);
    });
});

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close any open modals
        const modals = document.querySelectorAll('.modal.show');
        modals.forEach(modal => {
            bootstrap.Modal.getInstance(modal)?.hide();
        });
    }
});
