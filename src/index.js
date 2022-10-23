const button = document.getElementById('user-menu');
const element = document.getElementById('account-settings');
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-left');
const expandIcon = document.getElementById('expand-icon');
const homeContainer = document.getElementById('home-container'); 
const topNav = document.querySelector(".desktop-top-nav"); 

let switchControl = 0;
button.addEventListener('click', function(){
    expandIcon.style.transform = "rotate(180deg)";
    if(switchControl == 1) {
    expandIcon.style.transform = "";
    };
    
    if(switchControl === 0) {
        element.style.visibility = "visible";
        element.style.opacity = 1;
        element.style["max-height"] = "1000px";
        switchControl = 1;
    } else {
        element.style.visibility = "hidden";
        element.style.opacity = 0;
        element.style["max-height"] = "0";
        switchControl = 0;
    }
});

let switchControl2 = 0;
hamburger.addEventListener('click', function(){
    if(switchControl2 === 0){
        openSideNav();
    }  
    else{
        closeSideNav();
        }
});

document.addEventListener('keydown', function(e){
    if(e.key == "Escape") {
        closeSideNav();
    }
});

const ourWidth = window.innerWidth

const backgroundXStart = ourWidth - ourWidth * 0.1; 
const backgroundYStart = topNav.clientHeight;

document.addEventListener('click',function(e) {
    if(e.clientX > backgroundXStart && e.clientY > backgroundYStart) {
        closeSideNav();
    };
});

const openSideNav = () => {
    navMobile.style.width = "100vw";
    navMobile.style.height = "100vh";
    navMobile.style["background-color"] = "rgba(0, 0, 0, 0.8)"
    navMobile.style.opacity = 1;
    homeContainer.style.overflow = "hidden";
    homeContainer.style["max-height"] = "calc(100vh - 55px)";
    
    hamburgerTransitionOn();

    switchControl2 = 1;
};
const closeSideNav = () => {
    navMobile.style.width = 0;
    navMobile.style.height = 0;
    navMobile.style.opacity = 0;
    homeContainer.style["max-height"] = "100%";

    hamburgerTransitionOff();

    switchControl2 = 0;
};

//>>>>>>>>>>>>humburger menu animation>>>>>>>>>>>>//

const layers = hamburger.children;

const hamburgerTransitionOn = () => {
    layers[2].style.display = "none";
    layers[0].style.transform = "rotate(45deg)";
    layers[1].style.transform = "rotate(-45deg)";
    
    for(let layer of layers) {
        layer.style["background-color"] = "#fff";
    };
};

const hamburgerTransitionOff = () => {
    layers[2].style.display = "";
    layers[0].style.transform = "";
    layers[1].style.transform = "";
    
    for(let layer of layers) {
        layer.style["background-color"] = "#ffffffa6";
    }
};
/*----------------------------------------------------*/ 

