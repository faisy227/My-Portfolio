// contact.js - Form submission handler for Zion-Faith Akakpo's portfolio

document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS with your user ID
    (function() {
        emailjs.init("mSNfgvWmT8nD8lOXY"); // You'll need to replace this with your actual EmailJS user ID
    })();

    const contactForm = document.querySelector('.contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Get form data
            const formData = {
                name: this.name.value,
                email: this.email.value,
                subject: this.subject.value,
                message: this.message.value
            };

            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<span class="span">Sending...</span>';
            submitBtn.disabled = true;

            // Send email using EmailJS
            emailjs.send('service_jb6r3vj', 'template_x5plxbw', formData)
                .then(function(response) {
                    // Show success message
                    alert('Message sent successfully! I will get back to you soon.');
                    contactForm.reset();
                }, function(error) {
                    // Show error message
                    alert('Oops! Something went wrong. Please try again later or contact me directly at zionakakpo06@gmail.com');
                    console.error('EmailJS Error:', error);
                })
                .finally(function() {
                    // Reset button state
                    submitBtn.innerHTML = originalBtnText;
                    submitBtn.disabled = false;
                });
        });
    }
});