(function() {
  var scrollLinks = document.querySelectorAll(".scroll");
  for(var i=0; i<scrollLinks.length; i++){
    scrollLinks[i].addEventListener("click", function(event){
      event.preventDefault();
      var target = event.currentTarget.getAttribute("href");
      TweenMax.to(window, 0.5, {scrollTo:{y:target, offsetY:50}, ease: Power2.easeOut});
    });
  }
})();