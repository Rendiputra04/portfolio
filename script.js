// INIT AOS
AOS.init();

// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// DATA PROJECT (JSON)
const projects = [
    {
        title: "Aplikasi Absensi",
        desc: "Web absensi karyawan berbasis web"
    },
    {
        title: "Sistem Tiket Online",
        desc: "Mirip M-TIX untuk booking tiket"
    },
    {
        title: "Portfolio Website",
        desc: "Website pribadi HTML CSS JS"
    }
];

// LOAD PROJECT
const container = document.getElementById("project-list");

projects.forEach(project => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${project.title}</h3>
        <p>${project.desc}</p>
    `;

    container.appendChild(card);
});

// FORM
function kirimPesan(e){
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
}
