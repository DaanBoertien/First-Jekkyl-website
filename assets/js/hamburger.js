const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector("nav");



const tl = new TimelineLite({paused : true, reversed: true});

tl.to('nav', .3, {
  x: 0,
  ease: Power2.easeOut
})
.to('.fadeInNav', 1, {
  y: 0,
  autoAlpha: 1,
  ease: Power2.easeInOut,
  stagger: 0.15
})

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("is-active");
  // nav.classList.toggle("site-nav--open");
  toggleTween(tl);
      
  
});

function toggleTween(tween) {
  tween.reversed() ? tween.play() : tween.reverse();
}



    




