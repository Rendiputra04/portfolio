function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

function kirimPesan(event) {
    event.preventDefault();
    alert("Pesan berhasil dikirim!");
}
