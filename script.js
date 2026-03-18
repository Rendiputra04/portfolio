const portfolioData = {
  name: "Rendi Putra",
  headline: "Saya adalah mahasiswa S1 Sistem Informasi semester 6 yang memiliki minat pada pengembangan aplikasi, website, database, dan analisis data. Saya senang mempelajari teknologi yang relevan untuk membangun solusi digital yang bermanfaat.",
  about: "Saya adalah mahasiswa S1 Sistem Informasi semester 6. Saya memiliki pengalaman mengerjakan project sistem pemesanan cafe menggunakan Java Spring Boot dan MySQL, membuat tampilan website dengan HTML, CSS, dan Bootstrap, serta melakukan analisis data menggunakan Python di Google Colab.",
  linkedin: "https://www.linkedin.com/in/rendiputra04",
  whatsappNumber: "6285877537894",
  whatsappLabel: "0858-7753-7894",
  profileImage: "profile-rendi.jpg",
  focus: [
    "Membangun aplikasi backend menggunakan Java Spring Boot",
    "Mendesain tampilan website responsif dengan HTML, CSS, dan Bootstrap",
    "Mengelola database relasional menggunakan MySQL",
    "Melakukan analisis data dengan Python di Google Colab",
    "Terus mengembangkan portofolio untuk kebutuhan karier profesional"
  ],
  skills: [
    "Java",
    "Spring Boot",
    "MySQL",
    "HTML5",
    "CSS3",
    "Bootstrap",
    "Python",
    "Database Design",
    "REST API",
  ],
  projects: [
    {
      title: "Sistem Pemesanan Cafe",
      category: "Backend & Database Project",
      description: "Project sistem pemesanan cafe yang dibangun menggunakan Java Spring Boot dan MySQL. Fitur utamanya meliputi pengelolaan data menu, proses pemesanan, serta penyimpanan transaksi ke database.",
      tech: ["Java", "Spring Boot", "MySQL", "SQL"],
      demo: "https://www.linkedin.com/in/rendiputra04",
      repo: "https://www.linkedin.com/in/rendiputra04"
    },
    {
      title: "Website Frontend dengan HTML, CSS, dan Bootstrap",
      category: "Frontend Web Project",
      description: "Project tampilan website responsif yang dibuat dengan HTML, CSS, dan Bootstrap. Fokus pengerjaan ada pada layout modern, struktur halaman yang rapi, dan pengalaman pengguna yang nyaman di berbagai ukuran layar.",
      tech: ["HTML", "CSS", "Bootstrap", "Responsive Design"],
      demo: "https://www.linkedin.com/in/rendiputra04",
      repo: "https://www.linkedin.com/in/rendiputra04"
    },
    {
      title: "Analisis Data Menggunakan Python di Google Colab",
      category: "Data Analysis Project",
      description: "Project analisis data menggunakan Python melalui Google Colab. Pengerjaan mencakup proses membaca data, membersihkan data, melakukan analisis sederhana, dan menampilkan insight dari dataset.",
      tech: ["Python", "Google Colab", "Pandas", "Data Analysis"],
      demo: "https://www.linkedin.com/in/rendiputra04",
      repo: "https://www.linkedin.com/in/rendiputra04"
    }
  ]
};

const setText = (id, value) => {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
};

setText("displayName", portfolioData.name);
setText("footerName", portfolioData.name);
setText("headline", portfolioData.headline);
setText("aboutText", portfolioData.about);
setText("year", new Date().getFullYear());
setText("projectCount", `${String(portfolioData.projects.length).padStart(2, '0')}+`);
setText("whatsappText", portfolioData.whatsappLabel);

document.getElementById("linkedinBtn").href = portfolioData.linkedin;
document.querySelectorAll('a[href="https://www.linkedin.com/in/rendiputra04"]').forEach(a => a.href = portfolioData.linkedin);

document.getElementById("profileImage").src = portfolioData.profileImage;
const whatsappUrl = `https://wa.me/${portfolioData.whatsappNumber}?text=Halo%20Rendi%20Putra%2C%20saya%20tertarik%20dengan%20portfolio%20Anda.`;
["whatsappBtn", "whatsappBtn2", "whatsappCard", "floatingWhatsapp"].forEach(id => {
  const el = document.getElementById(id);
  if (el) el.href = whatsappUrl;
});

const focusList = document.getElementById("focusList");
portfolioData.focus.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  focusList.appendChild(li);
});

const skillChips = document.getElementById("skillChips");
portfolioData.skills.forEach((skill, index) => {
  const span = document.createElement("span");
  span.className = "chip reveal";
  span.style.transitionDelay = `${index * 40}ms`;
  span.textContent = skill;
  skillChips.appendChild(span);
});

const projectsGrid = document.getElementById("projectsGrid");
portfolioData.projects.forEach((project, index) => {
  const article = document.createElement("article");
  article.className = "project-card glass reveal";
  article.style.transitionDelay = `${index * 100}ms`;
  article.innerHTML = `
    <div class="project-cover">${project.category}</div>
    <div class="project-body">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tags">
        ${project.tech.map(item => `<span class="tag">${item}</span>`).join('')}
      </div>
      <div class="project-links">
        <a href="${project.demo}" target="_blank" rel="noreferrer">Lihat Profil</a>
        <a href="${project.repo}" target="_blank" rel="noreferrer">Bagikan ke LinkedIn</a>
      </div>
    </div>
  `;
  projectsGrid.appendChild(article);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
