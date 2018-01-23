let flipAccordion=document.querySelector('.vvp-accordion__header');
flipAccordion.addEventListener('click',toggleAccordion);


Array.from(document.querySelectorAll('.vvp-media-card__toggle')).forEach((toggleNode)=> {
    toggleNode.addEventListener('click',toggleContent);
});


function toggleAccordion() {
    document.querySelector('.vvp-accordion').classList.toggle('vvp-accordion--open');
}

function toggleContent(){
    let targetElement=event.target;
    let elementParent;
    if(targetElement.className==='vvp-media-card__toggle'){
        for(let i=0;i<2;i++){
            elementParent=targetElement.parentNode;
            targetElement=elementParent;
        }
    }
    else {
        for(let i=0;i<3;i++){
            elementParent=targetElement.parentNode;
            targetElement=elementParent;
        }
    }
    elementParent.classList.toggle('vvp-media-card--open');
}