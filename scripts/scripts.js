const openSidebarButton = document.querySelector('#mobile-menu');
const closeSidebarButton = document.querySelector('#mobile-menu-killswitch')
const navSidebar = document.querySelector('.nav-flex');


openSidebarButton.addEventListener('click', ()=> {
  navSidebar.classList.add("sidebar-open");
});

closeSidebarButton.addEventListener('click', ()=>{
  navSidebar.classList.remove("sidebar-open");
});