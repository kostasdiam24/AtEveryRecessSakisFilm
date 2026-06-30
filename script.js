// Intersection-observer scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) {
      e.target.classList.add("shown");
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach((el) => {
  const delay = el.dataset.delay;
  if (delay) el.style.transitionDelay = `${delay}ms`;
  io.observe(el);
});

// Footer year
const yEl = document.getElementById("year");
if (yEl) yEl.textContent = new Date().getFullYear();
