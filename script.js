AOS.init();

// DARK MODE
function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

// FETCH DATA API
async function loadProjects() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=3");
    const data = await res.json();

    const container = document.getElementById("project-list");

    data.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML = `
            <h3>${item.title}</h3>
            <p>${item.body}</p>
        `;

        container.appendChild(card);
    });
}

loadProjects();

// FORM
function kirimPesan(e){
    e.preventDefault();
    alert("Pesan berhasil dikirim!");
}
