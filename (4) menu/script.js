
// 1 версия
const elements = document.getElementsByClassName('mainMenu');

for (i = 0; i < elements.length; i++) {
    elements[i].addEventListener('mouseover', showMenu);
    elements[i].addEventListener('mouseout', hideMenu);
}

function showMenu() {
    this.children[0].style.height = 'auto';
    this.children[0].style.opacity = '1'
    this.children[0].style.overflow = 'visible'
}

function hideMenu() {
    this.children[0].style.height = '0';
    this.children[0].style.opacity = '0'
    this.children[0].style.overflow = 'hidden'
}