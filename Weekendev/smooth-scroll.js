document.addEventListener('DOMContentLoaded', function () {
  // Get the button element
  const contactButton = document.querySelector('.contact-button');

  // Get the target section
  const contactSection = document.getElementById('Contact');

  // Add click event listener to the button
  contactButton.addEventListener('click', function () {
    // Scroll to the target section
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
});
