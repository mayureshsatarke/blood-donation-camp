document.getElementById('donationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    
    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const bloodType = document.getElementById('bloodType').value;

    // Display a confirmation message
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = `Thank you, ${name}! You have registered to donate ${bloodType} blood. We will contact you at ${email}.`;
    
    // Reset the form
    document.getElementById('donationForm').reset();
});
