const bgVideo = document.querySelector(".background-video");
const videoContainer = document.querySelector(".video-container");



window.onload = function() {
    videoContainer.classList.add("loaded");
}


gsap.registerPlugin(ScrollTrigger);



if (videoContainer) {
    animate(".fadeIn", 3, 1);
}

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {
console.log('Loaded DOM')
animate(".fadeIn")
animate(".fadeInTitle")

// wait until window is loaded - all images, styles-sheets, fonts, links, and other media assets
// you could also use addEventListener() instead
window.onload = function() {
console.log("loaded window")

   // OPTIONAL - waits til next tick render to run code (prevents running in the middle of render tick)
   window.requestAnimationFrame(function() {
    console.log("loaded animation ticker")
      // GSAP custom code goes here  
    //   gsap.to('.video-container', {duration: 3, background: 'rgba(92, 59, 33, 0.1)'}); 
    if (videoContainer) {
        videoContainer.classList.add("loaded");
    }

      animate(".fadeInVideo");
      animate(".fadeInPhoto");
    
     

   });
   

};

});

function animate(enterClass, speed = 1, timeBetween = 0.2){
    return ScrollTrigger.batch(enterClass, {
        onEnter: batch => gsap.to(batch, {duration: speed, y: 0, autoAlpha: 1, stagger: timeBetween, ease: Power3.inOut}),
    });
}