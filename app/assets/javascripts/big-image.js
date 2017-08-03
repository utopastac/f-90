(function() {
  var images = document.querySelectorAll(".gallery img");
  var overlay = document.querySelector("#overlay");
  var overlayContent = document.querySelector("#overlay-content");
  overlay.addEventListener("click", closeOverlay);
  var scrollPos = 0;
  TweenMax.set(overlay, {autoAlpha: 0, display: "none"});

  for(var i=0; i<images.length; i++){
    images[i].addEventListener("click", function(event){
      scrollPos = window.pageYOffset || document.documentElement.scrollTop;
      document.body.classList.add("fixed");
      TweenMax.set(document.body, {top: -scrollPos});
      var img = this.cloneNode(true);
      overlayContent.appendChild(img);
      TweenMax.to(overlay, 0.35, {autoAlpha: 1, display: "block", ease: Power2.easeOut});
      event.preventDefault();
    });
  }

  function closeOverlay(event){
    
    // TweenMax.to(overlay, 0.25, {autoAlpha: 0, ease: Power2.easeOut, onComplete: function(){
      
    // }});
    overlayContent.scrollTop = 0;
    while (overlayContent.firstChild) {
      overlayContent.removeChild(overlayContent.firstChild);
    }
    TweenMax.set(overlay, {autoAlpha: 0, display: "none"});
    document.body.classList.remove("fixed");
    TweenMax.set(document.body, {top: 0});
    window.scrollTo(0, scrollPos);
    
    event.preventDefault();
  }
})();