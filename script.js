// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Reveal commit cards as they enter the viewport
const commits = document.querySelectorAll('.commit');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (reduceMotion) {
  commits.forEach(c => c.classList.add('in-view'));
} else if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: '0px 0px -40px 0px' });

  commits.forEach(c => observer.observe(c));
} else {
  commits.forEach(c => c.classList.add('in-view'));
}
