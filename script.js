function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
const roles = [
  'Project Management Specialist',
  'Social Media Specialist',
  'Video Editor',
  'Photographer',
  'Digital Marketing',
  'UI/UX Designer',
  'SEO Specialist',
];

const text = document.querySelector('.section__text__p2');
let roleIndex = 0;
let letterIndex = 0;
let isTyping = true;

function typeText() {
  if (isTyping && letterIndex <= roles[roleIndex].length) {
    text.innerHTML = roles[roleIndex].slice(0, letterIndex);
    letterIndex++;
    setTimeout(typeText, 50); // Adjust the typing speed (in milliseconds)
  } else {
    isTyping = false;
    setTimeout(eraseText, 1000); // Wait for a second before erasing
  }
}

function eraseText() {
  if (letterIndex >= 0) {
    text.innerHTML = roles[roleIndex].slice(0, letterIndex);
    letterIndex--;
    setTimeout(eraseText, 25); // Adjust the erasing speed (in milliseconds)
  } else {
    isTyping = true;
    roleIndex = (roleIndex + 1) % roles.length; // Move to the next role
    setTimeout(typeText, 500); // Wait for half a second before typing the next role
  }
}

// Start the animation
typeText();


