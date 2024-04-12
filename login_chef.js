document.addEventListener("DOMContentLoaded", function() {
    // Function to handle login form submission
    function submitLoginForm(event) {
        event.preventDefault(); // Prevent form submission

        // Get username and password from the form
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Perform login validation here if needed

        // Redirect to landing_customer.html
        window.location.href = "landing_chef.html";
    }

    // Function to show login modal
    function showLogin() {
        var modal = document.getElementById("loginModal");
        modal.style.display = "block";
    }

    // Function to hide login modal
    function hideLogin() {
        var modal = document.getElementById("loginModal");
        modal.style.display = "none";
    }

    // Function to show register modal
    function showRegister() {
        var modal = document.getElementById("registerModal");
        modal.style.display = "block";
    }

    // Function to hide register modal
    function hideRegister() {
        var modal = document.getElementById("registerModal");
        modal.style.display = "none";
    }

    // Close the modal if the user clicks outside of it
    window.onclick = function(event) {
        var modal = document.getElementById("loginModal");
        if (event.target == modal) {
            modal.style.display = "none";
        }

        var registerModal = document.getElementById("registerModal");
        if (event.target == registerModal) {
            registerModal.style.display = "none";
        }
    }

    // Attach event listeners to show/hide login and register modals
    var loginLink = document.querySelector(".nav a[href='#']");
    if (loginLink) {
        loginLink.addEventListener("click", showLogin);
    }

    var registerLink = document.querySelector(".nav a[href='#']");
    if (registerLink) {
        registerLink.addEventListener("click", showRegister);
    }

    // Attach the submitLoginForm function to the form's submit event
    var loginForm = document.querySelector("#loginModal form");
    if (loginForm) {
        loginForm.addEventListener("submit", submitLoginForm);
    }
});
