// BOUTON BACK TO TOP
let mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


// UNIQUEMENT UTILISE POUR LA PAGE CONTACT

//EFFET HOVER SUR LE BOUTON (CHANGEMENT DE COULEUR DU PICTO)
$('.text-box button').hover(function () {
    $('.fa-map').toggleClass("change-color")
});

//PERMET DE FERMER LA FENETRE SUR LA GOOGLE MAP
$('.text-box button').click(function () {
    $('.text-box').css("display","none")
});