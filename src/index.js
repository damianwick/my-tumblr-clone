const button = document.getElementById('user-menu');
const element = document.getElementById('account-settings');
const hamburger = document.getElementById('hamburger');
const navMobile = document.getElementById('nav-left');
const expandIcon = document.getElementById('expand-icon');  


let switchControl = 0;
button.addEventListener('click', function(){

    expandIcon.style.transform = "rotate(180deg)";
    if(element.classList.length == 1) {
    expandIcon.style.transform = "";
    };
 
    
    if(switchControl === 0) {
        element.style.visibility = "visible";
        element.style.opacity = 1;
        // element.style.transform = "translateY(0)";
        switchControl = 1;
    } else {
        element.style.visibility = "hidden";
        element.style.opacity = 0;
        // element.style.transform = "translateY(-3em)"
        switchControl = 0;
    }
});

hamburger.addEventListener('click', function(){
    navMobile.classList.toggle('hide');
});


