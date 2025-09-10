// ------------------- FORM VALIDATION -------------------
// Custom validation (no HTML5-only validation)
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent default submit
  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const message = document.getElementById("formMessage");

  // Validation checks
  if (username.length < 3) {
    message.textContent = "Username must be at least 3 characters long.";
    message.style.color = "red";
    return;
  }
  if (!email.includes("@") || !email.includes(".")) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
    return;
  }
  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    message.style.color = "red";
    return;
  }

  // Success message
  message.textContent = "Form submitted successfully!";
  message.style.color = "green";
});

// ------------------- INTERACTIVE COUNTER -------------------
let counter = 0;
const counterValue = document.getElementById("counterValue");

document.getElementById("increaseBtn").addEventListener("click", function() {
  counter++;
  counterValue.textContent = counter;
});

document.getElementById("decreaseBtn").addEventListener("click", function() {
  counter--;
  counterValue.textContent = counter;
});

// ------------------- TOGGLE TEXT FEATURE -------------------
const toggleBtn = document.getElementById("toggleBtn");
const hiddenText = document.getElementById("hiddenText");

toggleBtn.addEventListener("click", function() {
  if (hiddenText.style.display === "none") {
    hiddenText.style.display = "block";
    toggleBtn.textContent = "Hide Info";
  } else {
    hiddenText.style.display = "none";
    toggleBtn.textContent = "Show Info";
  }
});
