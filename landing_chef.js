document.addEventListener("DOMContentLoaded", function() {
    // Get the add menu button
    var addMenuBtn = document.getElementById("add-menu-btn");
  
    // Get the popup
    var popup = document.getElementById("add-menu-popup");
  
    // Get the close button
    var closeBtn = document.querySelector(".close-btn");
  
    // When the user clicks the add menu button, show the popup
    addMenuBtn.addEventListener("click", function() {
      popup.style.display = "block";
    });
  
    // When the user clicks on the close button, close the popup
    closeBtn.addEventListener("click", function() {
      popup.style.display = "none";
    });
  
    // When the user clicks anywhere outside of the popup, close it
    window.addEventListener("click", function(event) {
      if (event.target == popup) {
        popup.style.display = "none";
      }
    });
  
    // Get the form element
    var menuForm = document.getElementById("menu-form");
  
    // Add submit event listener to the form
    menuForm.addEventListener("submit", function(event) {
      // Prevent the default form submission behavior
      event.preventDefault();
  
      // Get the values from the form fields
      var foodType = document.getElementById("food-type").value;
      var daysOfWeek = document.getElementById("days").value;
      var mealType = document.getElementById("meal-type").value;
  
      // You can perform further actions with the form data here
      // For example, you can send it to a server using AJAX
  
      // After processing, close the popup
      popup.style.display = "none";
    });
  });
  