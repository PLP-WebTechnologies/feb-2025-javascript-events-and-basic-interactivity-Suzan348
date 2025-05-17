document.addEventListener('DOMContentLoaded', () => {
  // --- Event Handling ---
  document.getElementById('clickMeBtn').addEventListener('click', () => {
    alert('Thanks for clicking! 🎉');
  });

  document.getElementById('hoverBtn').addEventListener('mouseover', () => {
    alert('Hey! You hovered over me! 🐭');
  });

  document.getElementById('keypressInput').addEventListener('keypress', (e) => {
    console.log(`You pressed: ${e.key}`);
  });

  const secretBtn = document.getElementById('secretBtn');
  let longPressTimer;

  secretBtn.addEventListener('dblclick', () => {
    alert('Double-click detected! You found the secret! 🕵️‍♂️');
  });

  secretBtn.addEventListener('mousedown', () => {
    longPressTimer = setTimeout(() => {
      alert('Long press detected! You’re a wizard! 🧙‍♀️');
    }, 1000);
  });

  secretBtn.addEventListener('mouseup', () => clearTimeout(longPressTimer));

  // --- Interactive Elements ---
  const colorBtn = document.getElementById('colorToggleBtn');
  let colorToggled = false;
  colorBtn.addEventListener('click', () => {
    colorToggled = !colorToggled;
    colorBtn.style.backgroundColor = colorToggled ? '#e74c3c' : '#3498db';
    colorBtn.textContent = colorToggled ? "Back to Blue" : "Toggle My Color";
  });

  // Image Gallery
  const galleryImage = document.getElementById('galleryImage');
  const images = [
    "https://via.placeholder.com/300x200?text=Image+1",
    "https://via.placeholder.com/300x200?text=Image+2",
    "https://via.placeholder.com/300x200?text=Image+3"
  ];
  let currentImage = 0;
  document.getElementById('nextImageBtn').addEventListener('click', () => {
    currentImage = (currentImage + 1) % images.length;
    galleryImage.src = images[currentImage];
  });

  // Tabs
  const tabButtons = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetId = button.getAttribute('data-tab');
      tabContents.forEach(content => {
        content.classList.remove('active');
      });
      document.getElementById(targetId).classList.add('active');
    });
  });

  // --- Form Validation ---
  const form = document.getElementById('signupForm');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const emailFeedback = document.getElementById('emailFeedback');
  const passwordFeedback = document.getElementById('passwordFeedback');

  emailInput.addEventListener('input', () => {
    if (!emailInput.validity.valid) {
      emailFeedback.textContent = "Please enter a valid email.";
    } else {
      emailFeedback.textContent = "";
    }
  });

  passwordInput.addEventListener('input', () => {
    if (passwordInput.value.length < 8) {
      passwordFeedback.textContent = "Password must be at least 8 characters.";
    } else {
      passwordFeedback.textContent = "";
    }
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!emailInput.validity.valid || passwordInput.value.length < 8) {
      alert("Please correct the errors before submitting.");
    } else {
      alert("Form submitted successfully! ✅");
      form.reset();
    }
  });
});