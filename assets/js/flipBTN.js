function toggleAccordion() {
 document.querySelector('.vvp-accordion__content').classList.toggle('vvp-accordion__content--show');
}
//TODO:Drop down menu shows only on first element. Fix it.
function toggleContent(){
  document.querySelector('.vvp-media-card__dropdown-info').classList.toggle('vvp-media-card__dropdown-info--show');
}

let flipAccordion=document.querySelector('.vvp-accordion__header');
let dropDownInfo=document.querySelectorAll('.vvp-media-card');

for(let i=0;i<dropDownInfo.length;i++){
 dropDownInfo[i].addEventListener('click',toggleContent,false)
}
//передать функции i
//if querySelectorAll --> is not a function

flipAccordion.addEventListener('click',toggleAccordion,false);


