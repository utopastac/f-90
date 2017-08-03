(function() {
  var links = document.querySelectorAll(".meta-toggle");
  var meta = document.querySelector(".side-content");
  var metaActive = false;
  for(var i=0; i<links.length; i++){
    links[i].addEventListener("click", function(event){
      var target = metaActive ? 0 : -window.innerWidth*0.7;
      TweenMax.to(meta, 0.5, {x:target, ease: Power2.easeOut});
      metaActive = !metaActive;
      event.preventDefault();
    });
  }
})();