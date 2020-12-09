 
/* PRE LOADER */

  $(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
  });


  /*jQuery Parallax */

    function initParallax() {
    $('#home').parallax("50%", 0.3);

  }
  initParallax();


  /* Back top
  -----------------------------------------------*/
  
  $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
        $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
        });   
        // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
      $('html, body').animate({scrollTop: 0}, 300);
      })



function myFunction() {
  // Declare variables
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById('myInput');
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  li = ul.getElementsByTagName('li');

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    txtValue = a.textContent || a.innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

var formName = document.getElementById('formName');
var formEmail = document.getElementById('formEmail');
var form = document.getElementById('whatIs');



form.addEventListener('submit', function(event) {
    if (!formName.value || !formEmail.value) {
        alert("Opsy! Field looks empty. Type in")
    } else {
        alert("You are now part of family!")
        
    }
});




