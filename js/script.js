document.addEventListener('DOMContentLoaded', () => {
  const title = document.getElementById('relax-title');
  title.addEventListener('mouseenter', () => {
    title.style.animation = 'pulse 0.6s ease-in-out';
  });
  title.addEventListener('animationend', () => {
    title.style.animation = '';
  });
  // אפשר גם להוסיף קליק לאפקט
  title.addEventListener('click', () => {
    title.style.animation = 'pulse 0.6s ease-in-out';
  });
});
