var clsBtn = document.getElementsByClassName('vvp-menu-close');
var menu = document.getElementsByClassName('vvp-menu');
var navIcon = document.getElementsByClassName('vvp-menu-show');
var content = document.getElementsByClassName('vvp-content');

clsBtn[0].onclick = function() {
	menu[0].classList.add('vvp-menu--close');
	navIcon[0].classList.add('vvp-menu-show--active');
	menu[0].classList.remove('vvp-menu--open');
	content[0].classList.remove('vvp-content--moved');
}
clsBtn[1].onclick = function() {
	menu[0].classList.add('vvp-menu--close');
	navIcon[0].classList.add('vvp-menu-show--active');
	menu[0].classList.remove('vvp-menu--open');
	content[0].classList.remove('vvp-content--moved');
}

navIcon[0].onclick = function() {
	navIcon[0].classList.remove('vvp-menu-show--active');
	menu[0].classList.add('vvp-menu--open');
	content[0].classList.add('vvp-content--moved');
}