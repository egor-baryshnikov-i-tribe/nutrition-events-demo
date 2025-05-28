import {getMenu} from '../header/header.js'

export default async function decorate(block) {
  const parsedMenuTemplate = document.createElement('html');
  parsedMenuTemplate.innerHTML = await (await fetch("/footer")).text();
  const menu = getMenu(parsedMenuTemplate);
  menu.classList.add('menu');
  const footer = document.querySelector('footer');
  footer.classList.replace('footer-wrapper', 'footer');
  footer.innerHTML = menu.outerHTML;

  const footerLinks = document.createElement('div');
  footerLinks.classList.add('footer-links');
  const container = document.createElement('div');
  container.classList.add('container');
  const nav = document.createElement('nav');
  const copyright = document.createElement('p');
  const logo = parsedMenuTemplate.querySelector('.footer-logo div div');
  logo.classList.add('footer-logo');
  copyright.classList.add('copyright');
  copyright.innerHTML = parsedMenuTemplate.querySelector('.copyright div div').innerText;
  nav.append(parsedMenuTemplate.querySelector('.footer-links div div'))
  for (let link of nav.children) {
    link.classList.add('item');
  }
  const left = document.createElement('div');
  left.append(copyright, nav);
  container.append(left, logo);
  footerLinks.appendChild(container);
  footer.append(footerLinks);}