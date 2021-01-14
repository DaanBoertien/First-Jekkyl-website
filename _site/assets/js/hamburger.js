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


//appear/disappear on scroll

var currentScrollTop = window.pageYOffset || document.documentElement.scrollTop,
  isVisible = true;



function show(){
  if(!isVisible){
    TweenLite.to(".navdesktop", 0, { y: "0%" }, 0)
    TweenLite.to(".hamburger", 0, { x: "0%" }, 0);
    isVisible = true;
  }
}

function hide(){
  if(isVisible){
    TweenLite.to(".navdesktop", 0, { y: "-100%" }, 0)
    TweenLite.to(".hamburger", 0, { x: "150%" }, 0);
    isVisible = false;
  }
}

function refresh() {
  var newScrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (newScrollTop > currentScrollTop) {
    hide();
  } else if (newScrollTop < currentScrollTop) {
    show();
  }
  currentScrollTop = newScrollTop;
}

window.addEventListener("scroll", refresh, {
  passive: true
});
refresh();


    




