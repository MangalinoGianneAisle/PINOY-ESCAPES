document.getElementById('hamburger').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active'); // Toggle the 'active' class to show/hide the menu
});

function openModal(src, alt) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "flex"; // Show the modal
    modalImg.src = src; // Set the image source
    modalImg.alt = alt; // Set the alt text
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Hide the modal
}
