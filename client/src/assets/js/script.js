
$(".button-open").click(function (e) { 

  e.preventDefault();

  $(".button-open").css("display", "none");

  $(".menu-content").css({"display": "flex",
                          "position":"fixed",
                          "width":"100%",
                          "justify-content": "space-between"
                          });

  $(".button-close").css("display", "flex");

  
});

$(".button-close").click(function (e) { 
  
  e.preventDefault();

  $(".menu-content").css("display", "none");

  $(".button-open").css("display", "flex");

  $(".button-close").css("display", "none");

});

//SCROLLUP
/* function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp) */