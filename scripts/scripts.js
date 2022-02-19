const openSidebarButton = document.querySelector('#mobile-menu');
const navSidebar = document.querySelector('.nav-flex');


// btn.addEventListener('click', () => {
//   const rndCol = `rgb(${random(255)}, ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = rndCol;
// });

// document.getElementById("div1").classList.add("classToBeAdded");

// document.getElementById("div1").classList.remove("classToBeRemoved");


openSidebarButton.addEventListener('click', ()=> {
  navSidebar.classList.add("sidebar-open");
});