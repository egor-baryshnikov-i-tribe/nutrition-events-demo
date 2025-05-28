export default async function decorate(block) {
  for (let card of block.children) {
    card.classList.add('card');
  }
}