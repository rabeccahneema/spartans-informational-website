document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', function(e) {
    if (this.hash) {
      e.preventDefault();
      document.querySelector(this.hash).scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form feedback
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  document.getElementById('formMessage').textContent = "Thank you for reaching out! We'll get back to you soon.";
  this.reset();
});