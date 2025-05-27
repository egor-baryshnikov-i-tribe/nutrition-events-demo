import {getMetadata} from "../../scripts/aem.js";
import {loadFragment} from "../fragment/fragment.js";



/**
 * loads and decorates the header, mainly the nav
 * @param {Element} block The header block element
 */
export default async function decorate(block) {
  const parsedTemplate = document.createElement('html');
  parsedTemplate.innerHTML = await (await fetch("/nav")).text();
  const logo = document.createElement('div');
  logo.append(parsedTemplate.querySelector(".logo a"));
  logo.classList.add("logo");
  const menu = getMenu(parsedTemplate);
  const headerContainer = document.createElement('div');
  headerContainer.append(logo, menu);
  headerContainer.classList.add('header-container');
  const header = document.querySelector('header');
  header.classList.replace('header-wrapper', 'header');
  header.innerHTML = headerContainer.outerHTML;
  header.querySelectorAll('.nav-menu .item').forEach((menuItem) => {
    menuItem.addEventListener('focusin', openMenuList);
    menuItem.addEventListener('focusout', closeMenuList);
  });
}

function openMenuList(list) {
  console.log(list.target.closest('.item'))
  list.target.closest('.item').setAttribute('aria-expanded', 'true');
}

function closeMenuList(list) {
  console.log(list.target.closest('.item'))
  list.target.closest('.item').setAttribute('aria-expanded', 'false');
}

export function getMenu(parsedTemplate) {
  const menuTemplate = parsedTemplate.querySelector(".menu");
  const menu = document.createElement('nav');
  const navigationList = document.createElement('ul');
  navigationList.classList.add('nav-menu');
  for (const menuItemTemplate of menuTemplate.children) {
    const menuItem = document.createElement('li');
    menuItem.classList.add('item');
    menuItem.setAttribute('aria-expanded', 'false');
    if (menuItemTemplate && menuItemTemplate.querySelector('div div a')) {
      const link = menuItemTemplate.querySelector('a');
      link.classList.add('link');
      menuItem.append(link);
    }
    if (menuItemTemplate && menuItemTemplate.querySelector('ul li ul')) {
      const menuItemsList = menuItemTemplate.querySelector('ul li ul');
      menuItemsList.classList.add('list');
      menuItem.append(menuItemsList);
    }
    navigationList.append(menuItem);
  }
  menu.append(navigationList);
  return menu;
}