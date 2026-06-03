// EmailJS Configuration
// Initialize EmailJS with your Public Key
emailjs.init("_YOUR_PUBLIC_KEY_"); // You'll get this from EmailJS dashboard

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formNote = document.getElementById('formNote');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();

            // Validation
            if (!name || !email || !subject || !message) {
                showMessage('Please fill in all fields', 'error');
                return;
            }

            if (!isValidEmail(email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            // Send email
            sendEmail(name, email, subject, message);
        });
    }
});

// Function to send email via EmailJS
function sendEmail(name, email, subject, message) {
    const formNote = document.getElementById('formNote');
    const submitBtn = document.querySelector('.contact-form .btn-primary');

    // Disable button and show loading state
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    const templateParams = {
        to_email: 'khatiwadanamit@gmail.com',
        from_name: name,
        from_email: email,
        subject: subject,
        message: message,
        reply_to: email
    };

    emailjs.send('service_YOUR_SERVICE_ID', 'template_YOUR_TEMPLATE_ID', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showMessage('✓ Message sent successfully! I\'ll get back to you soon.', 'success');
            document.getElementById('contactForm').reset();
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        }, function(error) {
            console.log('FAILED...', error);
            showMessage('✗ Failed to send message. Please try again or email directly.', 'error');
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Message';
        });
}

// Helper function to validate email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Helper function to show messages
function showMessage(message, type) {
    const formNote = document.getElementById('formNote');
    formNote.textContent = message;
    formNote.className = `form-note ${type}`;
    formNote.style.display = 'block';

    // Auto-hide after 5 seconds
    if (type === 'success') {
        setTimeout(() => {
            formNote.style.display = 'none';
        }, 5000);
    }
}
