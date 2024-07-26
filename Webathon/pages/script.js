const header = document.querySelector("header");

windows.addEventListener ("scroll", function(){
    header.classList.toggle("sticky",window.scrollY > 0);
});

