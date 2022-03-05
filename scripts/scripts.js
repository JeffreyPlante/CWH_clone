//This section creates the mobile-menu button and sidebar function
const openSidebarButton = document.querySelector('#mobile-menu');
const closeSidebarButton = document.querySelector('#mobile-menu-killswitch')
const navSidebar = document.querySelector('.nav-menu');


openSidebarButton.addEventListener('click', ()=> {
  navSidebar.classList.add("sidebar-open");
});

closeSidebarButton.addEventListener('click', ()=>{
  navSidebar.classList.remove("sidebar-open");
});

//This section creates the accordion cards in the philosophy section

const accordions = document.querySelectorAll('.card');

accordions.forEach( acc => {
  accordionButton = document.querySelector('acc svg')

  acc.addEventListener('click', ()=> {
    if (acc.classList.contains('accordion-active')) {
      acc.classList.remove('accordion-active')
    }
    else {
      acc.classList.add('accordion-active');
    }
  })
  
});

