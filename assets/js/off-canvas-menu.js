let body = document.body,
		closeButton = document.querySelector('.vvp-menu__close'),
		openButton = document.querySelector('.vvp-menu-open'),
		offMenuField = document.querySelector('.vvp-onmenu-background');

closeButton.addEventListener('click',toggleMenu);
openButton.addEventListener('click',toggleMenu);
offMenuField.addEventListener('click',toggleMenu);

function toggleMenu(){
	body.classList.toggle('vvp-menu-active');
}