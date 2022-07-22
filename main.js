const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burgerMenu = document.querySelector ('.menu');
const mobileMenu = document.querySelector ('.mobile-menu');
const productDetail= document.querySelector('.product-detail');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');



menuEmail.addEventListener('click',toggleDesktopMenu);// kevin es muy lindo
burgerMenu.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside)


function toggleDesktopMenu () {
desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu () {
    mobileMenu.classList.toggle('inactive');
    }
function toggleCarritoAside (){
    const isMobileMenuOpen = !mobileMenu.classList.contains('inactive')
    if(isMobileMenuOpen){
        mobileMenu.classList.add('inactive')
    }
    productDetail.classList.toggle('inactive');
   
    }