/*=============== SHOW MENU ===============*/
const NAVMENU = document.querySelector('.nav-menu'),
NAVTOGGLE = document.querySelector('.nav-toggle'),
NAVCLOSE = document.querySelector('.nav-close'),
toggleMenu = () => NAVMENU.classList.toggle('open')

NAVTOGGLE.onclick = toggleMenu
NAVCLOSE.onclick = toggleMenu

/*=============== REMOVE MENU ON LINK CLICK ===============*/
const NAVLINK = document.querySelectorAll('.nav-link').forEach(el => el.onclick = toggleMenu)


/*=============== ADD BLUR TO HEADER ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
