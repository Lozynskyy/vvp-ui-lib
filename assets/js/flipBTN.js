
function toggleAccordion() {
 document.querySelector('.vvp-accordion__toggle').classList.toggle('vvp-accordion__toggle--invert');
 document.querySelector('.vvp-accordion__content').classList.toggle('vvp-accordion__content--show');

}
let flip=document.querySelector('.vvp-accordion__header');
flip.addEventListener('click',toggleAccordion,false);
//classList
//addEventListener
//querySelector*/
