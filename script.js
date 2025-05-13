document.addEventListener('DOMContentLoaded', function() {
    const emailInput = document.querySelector('.email-input');
    const startButton = document.querySelector('.start-button');

    // Simple form handling
    startButton.addEventListener('click', function(e) {
        e.preventDefault();
        const email = emailInput.value.trim();
        
        if (validateEmail(email)) {
            // Would normally send this to a backend
            alert('Thank you for signing up! We will notify you when we launch.');
            emailInput.value = '';
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Basic email validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
}); 