var elem = document.getElementById('btn-more');

elem.addEventListener('click', {
    handleEvent(event) {
        document.getElementById('list-logo').style.overflow = 'visible';
        document.getElementById('list-logo').style.height = '100%';
        document.getElementById('btn-more').style.display = 'none';
        document.getElementById('btn-less').style.display = 'unset';
    }
});

var test1 = document.getElementById('btn-less');

test1.addEventListener('click', {
    handleEvent(event) {
        document.getElementById('list-logo').style.overflow = '';
        document.getElementById('list-logo').style.height = '';
        document.getElementById('btn-more').style.display = 'unset';
        document.getElementById('btn-less').style.display = 'none';
    }
});

// slider
const swiper = new Swiper('.swiper-container', {
    loop: false, //бесконечность прокрутки
    pagination: {//точки
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: false,
    spaceBetween: 10, // расстояние между слайдами
    speed: 800, // скорость прокрутки
    autoHeight: true,// высота слайда
    width: 250,
});