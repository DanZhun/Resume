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

//輪播圖
var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)


document.addEventListener('DOMContentLoaded', () => {
    const backTop = document.querySelector('.toTop-arrow');
    
    backTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    let timeout;
    window.addEventListener('scroll', () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            backTop.style.display = window.scrollY > 300 ? 'block' : 'none';
        }, 50);
    });
});
