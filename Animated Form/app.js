let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let text_con = document.getElementById("text_con");
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');

btn.onclick = function(){
    form1.style.transform = 'translatex(10%)';
    form1.style.display = 'none';
    text_con.style.transform = 'translatex(-100%)';
    form2.style.display = 'flex';
    form2.style.transform = 'translatex(100%)'; 
    btn.innerHTML = 'Sign Up';
    btn.setAttribute('id', 'btn2');
}

btn2.onclick = function(){
    form1.style.transform = 'translatex(-10%)';
    form1.style.display = 'flex';
    text_con.style.transform = 'translatex(100%)';
    form2.style.display = 'none';
    form2.style.transform = 'translatex(-10%)'; 
}