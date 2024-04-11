window.addEventListener('scroll', () => {
    const meals = document.querySelector('.meals');
    const text = document.querySelector('.text');
    const scrolled = window.scrollY;
  
    // Adjust the speed factor as needed to achieve the desired parallax effect
    meals.style.top = `${50 - scrolled * 0.1}%`; 
    text.style.top = `${20 - scrolled * 0.05}%`; 
  });
  