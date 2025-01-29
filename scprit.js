let links = document.querySelectorAll(".url");
let url1 =document.querySelector(".url1");

links.forEach(link => {
    link.addEventListener("onmouseover" , ()=>{
        link.classList.add('allurl:hover');
    });

    link.addEventListener("onmouseout" ,()=>{
        link.classList.remove('allurl:hover')
    });
});

url1.addEventListener("click",()=>{
    window.location.href = "https://github.com/iamAnish18";
});

let url2 =document.querySelector(".url2");
url2.addEventListener("click",()=>{
    window.location.href = "https://www.linkedin.com/in/anish-tamoli-45bb68313/";
});

let url3 =document.querySelector(".url3");
url3.addEventListener("click",()=>{
    window.location.href = "https://www.instagram.com/iamanish__18/?hl=en";
});

let url4 =document.querySelector(".url4");
url4.addEventListener("click",()=>{
    window.location.href = "https://x.com/AnishTamoli";
});

let url5 =document.querySelector(".url5");
url5.addEventListener("click",()=>{
    window.location.href = "https://www.snapchat.com/add/iamanish25";
});

let url6 =document.querySelector(".url6");
url6.addEventListener("click",()=>{
    window.location.href = "https://www.youtube.com/@CodewithAnishtamoli";
});

let url7 =document.querySelector(".url7");
url7.addEventListener("click",()=>{
    window.location.href = "https://t.me/iamAnish18";
});

let url8 =document.querySelector(".url8");
url8.addEventListener("click",()=>{
    window.location.href = "https://codewithanishtamoli18gmail.google.com/";
});

let project1 = document.querySelector(".pro1");
let project2 = document.querySelector(".pro2");
let project3 = document.querySelector(".pro3");
let project4 = document.querySelector(".pro4");

project1.addEventListener("click" , ()=>{
    window.location.href = "https://github.com/iamAnish18/Link-s";
});

project2.addEventListener("click" , ()=>{
    window.location.href = "https://github.com/iamAnish18/My-Playlist";
});

project3.addEventListener("click" , ()=>{
    window.location.href = "https://github.com/iamAnish18/Tic-Tac-Toe";
});

project4.addEventListener("click" , ()=>{
    window.location.href = "https://github.com/iamAnish18/Tic-Tac-Toe";
});
