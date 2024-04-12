// customer_landing.js
document.addEventListener('DOMContentLoaded', function() {
    const chooseMealButton = document.getElementById('chooseMealButton');
    chooseMealButton.addEventListener('click', redirectToCustomerOrder);
  });
  
  function redirectToCustomerOrder() {
    window.location.href = "customer_order.html";
  }
  