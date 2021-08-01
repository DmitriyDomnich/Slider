const downBtn = document.querySelector('.down-button');
const upBtn = document.querySelector('.up-button');

const sidebar = document.querySelector('.sidebar');
const mainSlide = document.querySelector('.main-slide');
const SLIDESCOUNT = document.querySelector('.main-slide').children.length - 1;

let currentSlideNum = 3;
sidebar.style.transform = `translateY(-${SLIDESCOUNT * 100}vh)`;

upBtn.addEventListener('click', (e) => {
    changeSlide('up');
});

downBtn.addEventListener('click', (e) => {
    changeSlide('down');
});

document.addEventListener('wheel', (e) => {
    console.log(e);
    if (e.deltaY < 0) {
        changeSlide('up');
    } else {
        changeSlide('down');
    }
})



function changeSlide(direction) {
    if (direction === 'up') {
        currentSlideNum - 1 < 0 ? currentSlideNum = SLIDESCOUNT : currentSlideNum--;
    } else {
        currentSlideNum + 1 > SLIDESCOUNT ? currentSlideNum = 0 : currentSlideNum++;
    }
    sidebar.style.transform = `translateY(-${currentSlideNum * 100}vh)`;
    mainSlide.style.transform = `translateY(-${(SLIDESCOUNT - currentSlideNum) * mainSlide.clientHeight}px)`;
}