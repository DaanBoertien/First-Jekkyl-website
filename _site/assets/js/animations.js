const bgVideo = document.querySelector(".background-video");
const videoContainer = document.querySelector(".video-container");



window.onload = function() {
    videoContainer.classList.add("loaded");
}


gsap.registerPlugin(ScrollTrigger);


gsap.to(".landing-title-container", {
  yPercent: -70,
  ease: "none",
  scrollTrigger: {
    trigger: videoContainer,
    // start: "top bottom", // the default values
    // end: "bottom top",
    scrub: true
  }, 
});




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
      ScrollTrigger.batch(".fadeInLanding", {
        onEnter: batch => gsap.to(batch, {duration: 2, y: 0, autoAlpha: 1, stagger: .7, ease: Power2.inOut})
    })
    
     

   });
   

};

});

function animate(enterClass){
        return ScrollTrigger.batch(enterClass, {
            onEnter: batch => gsap.to(batch, {duration: 1, y: 0, autoAlpha: 1, stagger: 0.2, ease: Power3.inOut}),
})
}