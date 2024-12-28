// 1- image slider while mouse on(auto sliding between imgs)
// - back to first img if exit the img


    const slider = document.getElementById('slider');
    const images = slider.querySelectorAll('img');

    let interval;
    let currentIndex = 0;


    function startSliding() {
      interval = setInterval(() => {
      
        images[currentIndex].classList.add('hidden');
        
        currentIndex = (currentIndex + 1) % images.length;
      
        images[currentIndex].classList.remove('hidden');
      }, 2000); 
    }

    function resetSlider() {
      clearInterval(interval);
      images[currentIndex].classList.add('hidden'); 
      
      currentIndex = 0;
      images[currentIndex].classList.remove('hidden'); 
    }

    // Add event listeners
    slider.addEventListener('mouseenter', startSliding);
    slider.addEventListener('mouseleave', resetSlider);




