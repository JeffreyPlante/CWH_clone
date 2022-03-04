const openSidebarButton = document.querySelector('#mobile-menu');
const closeSidebarButton = document.querySelector('#mobile-menu-killswitch')
const navSidebar = document.querySelector('.nav-flex');


openSidebarButton.addEventListener('click', ()=> {
  navSidebar.classList.add("sidebar-open");
});

closeSidebarButton.addEventListener('click', ()=>{
  navSidebar.classList.remove("sidebar-open");
});

// Above code works as follows:
// create variable that stores dom element (to be modified) selected by queryselector
// create variable that stores dom element (to add listener)

// add listener to that dom element with addeventlistener
// include code that adds class to the dom element(to be modified)

//HOW TO CREATE THE OPEN/CLOSE BUTTON

//Use querySelectorAll to create a nodelist of all of the buttons
//iterate over the nodelist to add an event
//the event must reference the parent container and add the accordion-active class

const accordions = document.querySelectorAll('.card');
console.log(accordions);
accordions.forEach( acc => {
  accordionButton = document.querySelector('acc svg')
  // console.log('accordionButton')
  acc.addEventListener('click', ()=> {
    acc.classList.add('accordion-active');
  })
});

