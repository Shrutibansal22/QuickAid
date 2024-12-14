document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
  
    // Validate form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const cardNumber = document.getElementById('cardNumber').value;
    const expiry = document.getElementById('expiry').value;
    const cvv = document.getElementById('cvv').value;
  
    if (name && email && cardNumber && expiry && cvv) {
      showSuccessPopup();
      sendConfirmationEmail(email);
    } else {
      alert('Please fill all fields');
    }
  });
  
  function showSuccessPopup() {
    const popup = document.getElementById('successPopup');
    popup.style.display = 'block';
    popup.classList.add('fade-in');
    setTimeout(() => {
      popup.style.display = 'none';
    }, 3000);
  }
  
  function sendConfirmationEmail(email) {
    console.log("Email sent to ${email}: Payment was successful!");
  }