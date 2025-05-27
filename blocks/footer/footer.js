import {getMenu} from '../header/header.js'

export default async function decorate(block) {
    const parsedMenuTemplate = document.createElement('html');
    parsedMenuTemplate.innerHTML = await (await fetch("/footer")).text();
    const menu = getMenu(parsedMenuTemplate);
    const footer = document.querySelector('footer');
    footer.classList.replace('footer-wrapper', 'footer');
    footer.innerHTML = menu.outerHTML;
}