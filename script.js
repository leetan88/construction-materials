// Mobile navigation
const toggle = document.getElementById("navToggle");
const nav = document.getElementById("nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  })
);

// Header border on scroll
const header = document.querySelector(".header");
const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

// Reveal elements on scroll
const revealTargets = document.querySelectorAll(
  ".section__head, .card, .feature, .steps li, .review, .why__intro, .quote__info, .form"
);
revealTargets.forEach((el) => el.classList.add("reveal"));

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.15 }
);
revealTargets.forEach((el) => revealObserver.observe(el));

// Animated counters
const fmt = new Intl.NumberFormat("vi-VN");
const animateCount = (el) => {
  const target = Number(el.dataset.count);
  const suffix = el.dataset.suffix || "";
  const duration = 1400;
  const start = performance.now();
  const tick = (now) => {
    const p = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = fmt.format(Math.round(target * eased)) + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

const countObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCount(entry.target);
        countObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);
document.querySelectorAll("[data-count]").forEach((el) => countObserver.observe(el));

// Quote form (client-side validation demo — connect to a backend/API to actually send)
const form = document.getElementById("quoteForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valid = true;
  form.querySelectorAll("[required]").forEach((field) => {
    const ok = field.checkValidity();
    field.classList.toggle("is-invalid", !ok);
    if (!ok) valid = false;
  });

  if (!valid) {
    msg.className = "form__msg err";
    msg.textContent = "Vui lòng điền đầy đủ và đúng thông tin bắt buộc.";
    return;
  }

  const name = form.elements.name.value.trim();
  msg.className = "form__msg ok";
  msg.textContent = `Cảm ơn ${name}! Chúng tôi sẽ liên hệ báo giá trong vòng 30 phút.`;
  form.reset();
});

form.querySelectorAll("input, select, textarea").forEach((field) =>
  field.addEventListener("input", () => field.classList.remove("is-invalid"))
);

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
