function changeOuterLinks() {
  const nav = document.querySelector('nav')
  const links = document.querySelectorAll('#link-list a');
  const linksFiltered = [...links].filter(link => link.innerHTML.includes('outer-link'));
  // console.log(linksFiltered);

  for(const link of linksFiltered) {
    link.setAttribute('target', '_blank');
    link.innerHTML = `<strong>${link.innerHTML}</strong>`
  }

  nav.setAttribute('style', 'display:flex; flex-direction:column; width:30%; margin:0 auto; border:1px solid blue; padding:16px;');
  // nav.setAttribute('style', 'flex-direction:column');

}

changeOuterLinks();
export { changeOuterLinks };