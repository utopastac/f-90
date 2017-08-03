var images = document.querySelectorAll(".gallery img");
var overlay = document.querySelector("#overlay");
var overlayBg = document.querySelector("#overlay-bg");
var overlayContent = document.querySelector("#overlay-content");
var overlayClose = document.querySelector("#overlay-close");
overlay.addEventListener("click", closeOverlay);
//overlayClose.addEventListener("click", closeOverlay);
var scrollPos = 0;
TweenMax.set(overlay, {autoAlpha: 0, display: "none"});

for(var i=0; i<images.length; i++){
  images[i].addEventListener("click", function(event){
    scrollPos = window.pageYOffset || document.documentElement.scrollTop;
    document.body.classList.add("fixed");
    TweenMax.set(document.body, {top: -scrollPos});
    var img = this.cloneNode(true);
    while (overlayContent.firstChild) {
      overlayContent.removeChild(overlayContent.firstChild);
    }
    overlayContent.appendChild(img);
    TweenMax.to(overlay, 0.35, {autoAlpha: 1, display: "block", ease: Power2.easeOut, onUpdate:function(){
      overlayContent.scrollTop = 0;
    }});
    event.preventDefault();
  });
}

function closeOverlay(event){
  document.body.classList.remove("fixed");
  TweenMax.to(overlay, 0.25, {autoAlpha: 0, display: "none", ease: Power2.easeOut});
  //TweenMax.to(overlayContent, 0.2, {scrollTo: {y: 0}});
  TweenMax.set(document.body, {top: 0});
  window.scrollTo(0, scrollPos);
  event.preventDefault();
}