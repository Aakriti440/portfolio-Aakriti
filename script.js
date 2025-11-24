// -------------------------------
// MOBILE NAVIGATION
// -------------------------------
const menuButton = document.getElementById("menu-button");
const navLinks = document.getElementById("nav-links");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  menuButton.textContent = navLinks.classList.contains("open") ? "✕" : "☰";
});

// -------------------------------
// SCROLL PROGRESS BAR
// -------------------------------
const progressBar = document.getElementById("scroll-progress");

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const progress = (scrollTop / docHeight) * 100;
  progressBar.style.width = progress + "%";
});

// -------------------------------
// CONTACT FORM HANDLING
// -------------------------------
const contactForm = document.getElementById("contact-form-id");
const formMessage = document.getElementById("form-message");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    formMessage.textContent = "Please fill out all required fields.";
    formMessage.style.color = "red";
    return;
  }

  formMessage.textContent = "Message sent successfully!";
  formMessage.style.color = "lightgreen";
  contactForm.reset();
});
