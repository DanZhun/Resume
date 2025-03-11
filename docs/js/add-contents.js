// add-contents 
let today = new Date();
let hourNow = today.getHours();
let greeting;

// alert('Nice to meet you.');

if (hourNow > 18){
    greeting ='Good Night';
}
else if (hourNow > 12){
    greeting ='Good Afternoon';
}
else if (hourNow > 0){
    greeting ='Good Morning';
}
else {
    greeting ='Welcome';
}

document.write('<h3>' + greeting + '</h3>' + 'Neet to meet you');

//Date floor
// $(document).ready(function() {

//    let today = new Date();
//    let year = today.getFullYear();
  
//     $('#footer').html('<p>Copyright &copy;' + year + ' ' + 'Dan Wu</p>');
  
//   });

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)