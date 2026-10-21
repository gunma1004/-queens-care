// app.js - 퀸즈케어 인터랙션 스크립트
document.addEventListener("DOMContentLoaded", () => {
  // 모바일 메뉴 토글
  const toggleBtn = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector("#site-menu");

  if (toggleBtn && navMenu) {
    toggleBtn.addEventListener("click", () => {
      const expanded = toggleBtn.getAttribute("aria-expanded") === "true";
      toggleBtn.setAttribute("aria-expanded", !expanded);
      navMenu.classList.toggle("is-open");
    });
  }

  // 부드러운 스크롤
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId.length > 1) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });

  // 스크롤 시 스크롤 리빌 효과
  const reveals = document.querySelectorAll(".reveal");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.1 });

  reveals.forEach(el => observer.observe(el));
});
