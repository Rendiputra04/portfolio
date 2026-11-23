(() => {
  const sections = document.querySelectorAll("main section");
  const navLinks = document.querySelectorAll("header nav a");
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // 1. Animasi muncul saat di-scroll
  //    (dilewati jika browser tidak mendukung atau pengguna mematikan animasi,
  //    sehingga konten tidak pernah tersembunyi)
  if ("IntersectionObserver" in window && !prefersReducedMotion) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".hero, .section").forEach((section) => {
      section.classList.add("reveal");
      observer.observe(section);
    });
  }

  // 2. Menu navigasi aktif sesuai bagian yang sedang dilihat
  function updateActiveNav() {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }

  window.addEventListener("scroll", updateActiveNav, { passive: true });
  updateActiveNav();

  // 3. Tahun di footer selalu mengikuti tahun saat ini
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
