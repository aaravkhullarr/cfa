document.addEventListener('DOMContentLoaded', function() {
    // Email form handling
    const emailInput = document.querySelector('.email-input');
    const signupBtn = document.querySelector('.signup-btn');

    if (emailInput && signupBtn) {
        signupBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const email = emailInput.value.trim();
        
        if (validateEmail(email)) {
            // Would normally send this to a backend
                alert('Thank you for signing up! We will be in touch soon.');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });
        
        // Allow form submission on Enter key
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                signupBtn.click();
            }
        });
    }

    // Basic email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Add scroll animations to sections
    function setupScrollAnimations() {
        const sections = document.querySelectorAll('section');
        const options = {
            threshold: 0.25,
            rootMargin: "0px 0px -100px 0px"
        };
        
        const sectionObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                    sectionObserver.unobserve(entry.target);
                }
            });
        }, options);
        
        sections.forEach((section, index) => {
            if (!section.classList.contains('hero-section')) {
                section.style.opacity = "0";
                section.style.transform = "translateY(30px)";
                section.style.transition = "opacity 0.6s ease, transform 0.6s ease";
                sectionObserver.observe(section);
            }
        });
    }
    
    setupScrollAnimations();
}); 