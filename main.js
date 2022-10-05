let show = document.querySelector(".show");
let nav = document.querySelector(".nav");
let closeNav = document.querySelector(".nav .close");

show.onclick = () => nav.style.right = '0';
closeNav.onclick = () => nav.style.right = '-600px';
