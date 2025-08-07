document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission initially

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim(); // Kept for form completeness
  const mobile = document.getElementById("mobile").value.trim();
  const age = parseInt(document.getElementById("age").value.trim(), 10);
  const message = document.getElementById("message").value.trim();

  // Basic field check
  if (!name || !email || !mobile || !age || !message) {
    alert("All fields are required.");
    return;
  }

  // Mobile number validation
  if (!/^[0-9]{10}$/.test(mobile)) {
    alert("Mobile number must be 10 digits.");
    return;
  }

  // Age validation
  if (isNaN(age) || age < 1 || age > 120) {
    alert("Please enter a valid age between 1 and 120.");
    return;
  }

  // Success
  alert("✅ Thank you for your response!");
  document.getElementById("contactForm").reset();
});
