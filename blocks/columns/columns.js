export default function decorate(block) {
  const cols = [...block.firstElementChild.children];
  block.classList.add(`columns-${cols.length}-cols`);

  console.log(block.querySelector('div').children)
  const columns = block.querySelector('div').children;
  let i = 0;
  for (let column of columns) {
    console.log(column);
      column.querySelectorAll('a').forEach((link) => {
        console.log(link)
        if (link.getAttribute('href').startsWith('https://cdn.jwplayer.com/players/')) {

          link.outerHTML = `<div style="position:relative;overflow:hidden;padding-bottom:56.25%"><iframe src="${link.getAttribute('href')}" width="100%" height="100%" frameborder="0" scrolling="auto" title="JUMPstartCN_Basic-Module_Impression-film" style="position:absolute;" allowfullscreen></iframe></div>`
        }
      })
  }

  // setup image columns
  [...block.children].forEach((row) => {
    [...row.children].forEach((col) => {
      const pic = col.querySelector('picture');
      if (pic) {
        const picWrapper = pic.closest('div');
        if (picWrapper && picWrapper.children.length === 1) {
          // picture is only content in column
          picWrapper.classList.add('columns-img-col');
        }
      }
    });
  });
}
