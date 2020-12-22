




const buttonMenuMob = document.querySelector(".header__menu__main--btn");
const mobMenu = document.querySelector(".nav__mobile");


    (function menuHeaderMob() {
const navMobile = document.querySelector('.nav__mobile');
navMobile.classList.remove('hidden');
const templateNav = document.querySelector('.template').content.querySelector(".header__nav--tablet");
const fragment = document.createDocumentFragment();
const elementsNav = templateNav.cloneNode(true);
console.log(fragment);
fragment.appendChild(elementsNav);
navMobile.appendChild(fragment);
//mobMenu.style.display = "none";
//mobMenu.style.opacity = "0";
mobMenu.classList.add('disabled')
})();


buttonMenuMob.addEventListener("click" , function (evt) {
console.log(evt.target)
    if(mobMenu.style.transform == "translate(0%)"){  
        mobMenu.style.transform = "translate(100%)"
        mobMenu.style.opacity = "0"
    }
    else{
        console.log(mobMenu.style.transform)
        mobMenu.style.transform = "translate(0%)"
        mobMenu.style.opacity = "0.9"
    }
});

