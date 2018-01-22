'use strict';
let prevBtn=document.querySelector('.vvp-slider__arrow--prev'),
    nextBtn=document.querySelector('.vvp-slider__arrow--next'),
    gallery=document.querySelector('.vvp-slider__gallery-items'),
    sliderItems=document.querySelectorAll('.vvp-slider__item'),
    totalItems=sliderItems.length;

    let currentPosition=1;

prevBtn.addEventListener('click',previousSlide);
nextBtn.addEventListener('click',nextSlide);


function previousSlide() {
    if(currentPosition===1){
        currentPosition=totalItems;
        gallery.style['transform']=`translateX(-${currentPosition-1}00%)`;
    }
    else {
        gallery.style['transform']=`translateX(-${currentPosition-2}00%)`;
        currentPosition--;
    }


}
function nextSlide() {
    if(currentPosition>=totalItems){
        currentPosition=1;
    }
    else {
        currentPosition++;
    }
gallery.style['transform']=`translateX(-${currentPosition-1}00%)`;
}

