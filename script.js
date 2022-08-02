
var m =document.getElementsByClassName('menuIcon')[0];
var s = document.getElementsByClassName('sidebar')[0];
var r = document.getElementsByClassName('content')[0];
function onClickHandler() {
   s.classList.add('show');
}
function onMouseClickBody() {
    s.classList.remove('show');
    console.log("s")
}
m.addEventListener('click',onClickHandler);
r.addEventListener('click',onMouseClickBody);

var loader = document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display = "none";

});