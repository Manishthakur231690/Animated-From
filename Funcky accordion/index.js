let div1 = document.getElementById('div1');
let div2 = document.getElementById('div2');
let div3 = document.getElementById('div3');
let div4 = document.getElementById('div4');

let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let text3 = document.getElementById('text3');
let text4 = document.getElementById('text4');

let icon  = document.getElementById('icon');

div1.onclick = function(){
    div1.style.height = '200px';
    div2.style.height = '100px';
    div3.style.height = '100px';
    div4.style.height = '100px';
    icon.style.top = '60px';
    icon.className = 'fa-solid fa-palette';
    icon.style.backgroundColor = 'rgb(197, 74, 74)';
    text1.style.display = 'block';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'none';
}
div2.onclick = function(){
    div1.style.height = '100px';
    div2.style.height = '200px';
    div3.style.height = '100px';
    div4.style.height = '100px';
    icon.style.top = '155px';
    icon.className = 'fa-solid fa-music';
    icon.style.backgroundColor = 'rgb(96, 141, 93)';
    text1.style.display = 'none';
    text2.style.display = 'block';
    text3.style.display = 'none';
    text4.style.display = 'none';
}
div3.onclick = function(){
    div1.style.height = '100px';
    div2.style.height = '100px';
    div3.style.height = '200px';
    div4.style.height = '100px';
    icon.style.top = '260px';
    icon.className = 'fa-solid fa-microphone';
    icon.style.backgroundColor = 'rgb(202, 132, 67)';
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'block';
    text4.style.display = 'none';
}
div4.onclick = function(){
    div1.style.height = '100px';
    div2.style.height = '100px';
    div3.style.height = '100px';
    div4.style.height = '200px';
    icon.style.top = '350px';
    icon.className = 'fa-solid fa-wine-glass';
    icon.style.backgroundColor = 'rgb(96, 141, 93)';
    text1.style.display = 'none';
    text2.style.display = 'none';
    text3.style.display = 'none';
    text4.style.display = 'block';
}