// אפקט לחיצה על "תרגעו"
const heroText = document.getElementById('hero-text');
heroText.addEventListener('click', () => {
  heroText.classList.add('active');
  // מסירים את המחלקה לאחר סיום האנימציה
  setTimeout(() => heroText.classList.remove('active'), 300);
});
