function changeOuterLinks() {    
    const navElements = document.querySelectorAll('nav#link-list a');
        navElements.forEach( element => {
            if ( element.innerHTML.includes('outer-link') ) {
                element.target ='_blank';
                element.innerHTML = `<strong>${element.innerHTML}</strong>`;
            }
        })


    // Ez az adott navra vonatkozik!
    const nav = document.querySelector('#link-list');
        nav.style.border = '1px solid blue';
        nav.style.display = 'flex';
        nav.style.flexDirection = 'column';
        nav.style.margin = '0px auto';
        nav.style.padding = '16px';
        nav.style.width = '30%';

    /*    
    // Ez általánosan a nav-ra megírva!        
    const nav = document.querySelectorAll('nav').forEach(
        element => {
            element.style.border = '1px solid blue';
            element.style.display = 'flex';
            element.style.flexDirection = 'column';
            element.style.margin = '0px auto';
            element.style.padding = '16px';
            element.style.width = '30%';
        }
    )
    */

}

export { changeOuterLinks };