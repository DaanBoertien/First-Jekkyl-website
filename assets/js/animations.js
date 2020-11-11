const bgVideo = document.querySelector(".background-video");
const videoContainer = document.querySelector(".video-container");

window.onload = function() {
    videoContainer.classList.add("loaded")
    
  }

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.batch(".fadeIn", {
    onEnter: batch => gsap.to(batch, {duration: 1, y: 0, autoAlpha: 1, stagger: 0.2, ease: Power2.inOut}),
});