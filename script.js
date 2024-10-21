//FILE FOR MY JAVASCRIPT

//to enable humburger menu:
document.getElementById('hamburger').addEventListener('click', function() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.toggle('active'); 
});

//to allow the images of the gallery and video to be clickable
function openModal(src, alt) {
    const modal = document.getElementById("modal");
    const modalImg = document.getElementById("modal-img");
    modal.style.display = "flex"; 
    modalImg.src = src; 
    modalImg.alt = alt; 
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; 
}
