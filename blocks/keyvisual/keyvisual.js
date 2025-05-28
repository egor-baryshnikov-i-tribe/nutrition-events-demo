export default async function decorate(block) {
  const image = block.querySelector('div div img')
  const text = block.querySelectorAll('div div')[2] ?? null;
  const position = block.querySelectorAll('div div')[3] ?? null;

  const keyvisual = document.createElement('div')
  keyvisual.classList.add('keyvisual');
  image.classList.add('keyvisual-image');
  text.classList.add('text');
  text.classList.add(...position.querySelector('p').innerHTML.split(' '));
  const content = document.createElement('div')
  content.classList.add('keyvisual-content')
  content.appendChild(text);
  content.querySelector('a').classList.add('button')
  block.innerHTML = '';
  block.append(image, content);
}