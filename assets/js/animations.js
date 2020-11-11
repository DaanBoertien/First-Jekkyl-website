const bgVideo = document.querySelector(".background-video");
const videoContainer = document.querySelector(".video-container");

window.onload = function() {
    videoContainer.classList.add("loaded")
    
  }

gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.batch(".fadeIn", {
    onEnter: batch => gsap.from(batch, {duration: 1, y: 30, autoAlpha: 0, stagger: 0.2, ease: Power2.inOut}),
});