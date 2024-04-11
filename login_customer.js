function showLogin() {
    var modal = document.getElementById("loginModal");
    modal.style.display = "block";
}

function hideLogin() {
    var modal = document.getElementById("loginModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var modal = document.getElementById("loginModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function showRegister() {
    var modal = document.getElementById("registerModal");
    modal.style.display = "block";
}

function hideRegister() {
    var modal = document.getElementById("registerModal");
    modal.style.display = "none";
}

// Close the modal if the user clicks outside of it
window.onclick = function(event) {
    var registerModal = document.getElementById("registerModal");
    if (event.target == registerModal) {
        registerModal.style.display = "none";
    }
}