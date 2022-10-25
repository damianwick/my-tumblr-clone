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
    };
});

let switchControl2 = 0;
hamburger.addEventListener('click', function(){
    if(switchControl2 === 0){
        openSideNav();
    }  
    else{
        closeSideNav();
    };
});

/*****************close side nav with a click outside the nav & esc*****************/
document.addEventListener('keydown', function(e){
    if(e.key == "Escape") {
        closeSideNav();
    };
});

const ourWidth = window.innerWidth;
const backgroundXStart = ourWidth - ourWidth * 0.1; 
const backgroundYStart = topNav.clientHeight;

document.addEventListener('click',function(e) {
    if(e.clientX > backgroundXStart && e.clientY > backgroundYStart) {
        closeSideNav();
    };
});

//********************************************************************

const topNavHeight = topNav.clientHeight + "px";

const openSideNav = () => {
    navMobile.style.width = "100vw";
    navMobile.style.height = "calc(100vh - 44px)";
    navMobile.style["background-color"] = "rgba(0, 0, 0, 0.8)";
    navMobile.style.opacity = 1;

    hamburgerTransitionOn();

    switchControl2 = 1;
};
const closeSideNav = () => {
    navMobile.style.width = 0;
    navMobile.style.height = 0;
    navMobile.style.opacity = 0;
    homeContainer.style.overflow = "block";

    hamburgerTransitionOff();

    switchControl2 = 0;
};

//*******************humburger menu animation*******************//

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
    };
};

//********************************************************************

// *****************MORE BUTTON FUNCTIONALITY*****************

const moreBtn = document.querySelector(".more-btn");
const moreContainer = document.querySelector(".more-container");

let moreBtnControl = 0;

moreBtn.addEventListener('click', function() {
    if(moreBtnControl === 0) {
        openMoreBtn();
        closeWhenClickedOutside();
        moreBtnControl = 1;
    } else{
        closeMoreBtn();
        moreBtnControl = 0;
    };
});

const closeWhenClickedOutside = () => {
    document.addEventListener('click', function(e) {
        if(e.target.parentElement.id != moreContainer.id 
            && moreBtnControl == 1
            && !e.target.parentElement.classList.contains('more-btn')) {
            closeMoreBtn();
            moreBtnControl = 0;
        };
    });
};

const openMoreBtn = () => {
    moreContainer.style.visibility = "visible";
    moreContainer.style.opacity = 1;
};

const closeMoreBtn = () => {
    moreContainer.style.visibility = "hidden";
    moreContainer.style.opacity = 0;
};

//********************************************************************

// *******************LIKE ICON TRANSITION*******************

const inactiveLikeIcon = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="21" width="23" viewBox="0 0 20 18" role="presentation" style="--icon-color-primary:rgba(var(--black), 0.65)"><defs><svg id="managed-icon__like-empty" fill="var(--icon-color-primary, rgba(255, 255, 255, 0.4))" viewBox="0 0 20 18">
<path d="M14.658 0c-1.625 0-3.21.767-4.463 2.156-.06.064-.127.138-.197.225-.074-.085-.137-.159-.196-.225C8.547.766 6.966 0 5.35 0 4.215 0 3.114.387 2.162 1.117c-2.773 2.13-2.611 5.89-1.017 8.5 2.158 3.535 6.556 7.18 7.416 7.875A2.3 2.3 0 0 0 9.998 18c.519 0 1.028-.18 1.436-.508.859-.695 5.257-4.34 7.416-7.875 1.595-2.616 1.765-6.376-1-8.5C16.895.387 15.792 0 14.657 0h.001zm0 2.124c.645 0 1.298.208 1.916.683 1.903 1.461 1.457 4.099.484 5.695-1.973 3.23-6.16 6.7-6.94 7.331a.191.191 0 0 1-.241 0c-.779-.631-4.966-4.101-6.94-7.332-.972-1.595-1.4-4.233.5-5.694.619-.475 1.27-.683 1.911-.683 1.064 0 2.095.574 2.898 1.461.495.549 1.658 2.082 1.753 2.203.095-.12 1.259-1.654 1.752-2.203.8-.887 1.842-1.461 2.908-1.461h-.001z" fill-opacity="0.65" fill="#FFFFFF"></path>
</svg></defs><g>
<path d="M14.658 0c-1.625 0-3.21.767-4.463 2.156-.06.064-.127.138-.197.225-.074-.085-.137-.159-.196-.225C8.547.766 6.966 0 5.35 0 4.215 0 3.114.387 2.162 1.117c-2.773 2.13-2.611 5.89-1.017 8.5 2.158 3.535 6.556 7.18 7.416 7.875A2.3 2.3 0 0 0 9.998 18c.519 0 1.028-.18 1.436-.508.859-.695 5.257-4.34 7.416-7.875 1.595-2.616 1.765-6.376-1-8.5C16.895.387 15.792 0 14.657 0h.001zm0 2.124c.645 0 1.298.208 1.916.683 1.903 1.461 1.457 4.099.484 5.695-1.973 3.23-6.16 6.7-6.94 7.331a.191.191 0 0 1-.241 0c-.779-.631-4.966-4.101-6.94-7.332-.972-1.595-1.4-4.233.5-5.694.619-.475 1.27-.683 1.911-.683 1.064 0 2.095.574 2.898 1.461.495.549 1.658 2.082 1.753 2.203.095-.12 1.259-1.654 1.752-2.203.8-.887 1.842-1.461 2.908-1.461h-.001z" fill-opacity="0.65" fill="#FFFFFF"></path>
</g></svg>`;

const activeLikeIcon = `<svg xmlns:xlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" height="21" width="23" viewBox="0 0 20 18" role="presentation"><defs><svg id="managed-icon__like-filled" fill="var(--icon-color-primary, RGB(var(--red))" viewBox="0 0 20 18">
<path d="M17.888 1.1C16.953.38 15.87 0 14.758 0c-1.6 0-3.162.76-4.402 2.139-.098.109-.217.249-.358.42a12.862 12.862 0 0 0-.36-.421C8.4.758 6.84 0 5.248 0 4.14 0 3.06.381 2.125 1.1-.608 3.201-.44 6.925 1.14 9.516c2.186 3.59 6.653 7.301 7.526 8.009.38.307.851.474 1.333.474a2.12 2.12 0 0 0 1.332-.473c.873-.71 5.34-4.42 7.526-8.01 1.581-2.597 1.755-6.321-.968-8.418" fill="#FF4930"></path>
</svg></defs><g>
<path d="M17.888 1.1C16.953.38 15.87 0 14.758 0c-1.6 0-3.162.76-4.402 2.139-.098.109-.217.249-.358.42a12.862 12.862 0 0 0-.36-.421C8.4.758 6.84 0 5.248 0 4.14 0 3.06.381 2.125 1.1-.608 3.201-.44 6.925 1.14 9.516c2.186 3.59 6.653 7.301 7.526 8.009.38.307.851.474 1.333.474a2.12 2.12 0 0 0 1.332-.473c.873-.71 5.34-4.42 7.526-8.01 1.581-2.597 1.755-6.321-.968-8.418" fill="#FF4930"></path>
</g></svg>`;

const likeBtn = document.querySelectorAll('.like-icon');

likeBtn.forEach(el => {
    el.addEventListener('click', function() {
        if(el.classList.contains('inactive')) {
            el.innerHTML = activeLikeIcon;
            el.classList.remove('inactive');
            el.classList.add('active');
        } else if(el.classList.contains('active')){
            el.innerHTML = inactiveLikeIcon;
            el.classList.remove('active');
            el.classList.add('inactive');
        };
    });
});
    
//********************************************************************