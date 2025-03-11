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

//置頂按鈕
document.addEventListener('DOMContentLoaded', () => {
    const backTop = document.querySelector('.toTop-arrow');
    
    // 點擊或觸控返回頂部
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    backTop.addEventListener('click', scrollToTop);
    backTop.addEventListener('touchstart', (e) => {
        e.preventDefault(); // 防止觸控滾動干擾
        scrollToTop();
    });

    // 滾動事件處理
    let timeout;
    const handleScroll = () => {
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            const scrollPosition = window.scrollY || window.pageYOffset; // 兼容性增強
            backTop.style.display = scrollPosition > 300 ? 'block' : 'none';
            // 調試用：console.log('Scroll:', scrollPosition, 'Display:', backTop.style.display);
        }, 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 初始檢查
});
