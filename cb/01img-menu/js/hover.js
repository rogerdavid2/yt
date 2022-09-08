const links = document.querySelectorAll('.menu-item');
const hovR = document.querySelector('.hover-reveal');


// console.log(links[0].children[1]); gets you the .hover-reveal container
// console.log(links[0].children[0]) gets you the span element inside a (const links) which the parent


// const hovR = document.querySelector('.hover-reveal');
// console.log(hovR) won't work when using forEach() loop because we need to structure the for eachLoop


const linkImages = document.querySelectorAll('.hover-reveal__img');

links.forEach((link, idx) => {
    link.addEventListener("mousemove", (ev) => {
        link.children[1].style.opacity = 1;
        link.children[0].style.zIndex = 3;
        link.children[1].style.transform = `translate(${ev.clientX - 300}px, -${ev.clientY / 3}px)`;
        linkImages[idx].style.transform = 'scale(1, 1)';
        link.style.zIndex = 2;
    })
    link.addEventListener('mouseleave', (ev) => {
        link.children[1].style.opacity = 0;
        link.children[1].style.transform = `translate(${-ev.clientX}px, -300px)`;
        linkImages[idx].style.transform = 'scale(0.8, 0.8)';
        link.style.zIndex = 0;
    })

})
