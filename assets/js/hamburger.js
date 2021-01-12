const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");



const tl = new TimelineLite({paused : true, reversed: true});
    gsap.set('nav', {x: '100%', autoAlpha: 0})
    gsap.set('.fadeInNav', {
      y: 50,
      autoAlpha: 0,
      x: 20,
      rotate: -10
    })





tl.to('nav', .5, {
  x: 0,
  ease: "power2.out",
  autoAlpha: 1
})
.to('.fadeInNav', .5, {
  y: 0,
  x: 0,
  rotate: 0,
  autoAlpha: 1,
  ease: "power2.out",
  stagger: 0.15
})

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  
  toggleTween(tl);
      
  
});

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}



    




