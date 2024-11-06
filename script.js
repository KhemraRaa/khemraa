// Form submission handling
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting

    // Collect the form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Simple form validation
    if (name && email && message) {
        alert("Thank you, " + name + "! Your message has been sent.");
        
        // Clear the form after submission
        document.getElementById('contactForm').reset();
    } else {
        alert("Please fill out all fields before submitting.");
    }
});
