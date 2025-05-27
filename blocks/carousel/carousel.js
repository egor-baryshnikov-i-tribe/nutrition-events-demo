import Swiper from '../../node_modules/swiper/swiper-bundle.mjs';
import * as Navigation from "../../node_modules/swiper/modules/navigation.mjs";

export default async function decorate(block) {
  let swiperElement = block.firstElementChild;
  console.log(block.firstElementChild)
  swiperElement.classList.add('swiper');
  swiperElement = document.body.appendChild(block.firstElementChild);
  // swiperElement.childNodes.forEach(child => {
  //   console.log(child)
  //   child.classList.add('swiper-slide');
  // })
  console.log(block.firstElementChild)
  let swiper = new Swiper(block.firstElementChild, [Navigation]);
  console.log();
}