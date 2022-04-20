
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