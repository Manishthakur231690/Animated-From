let form1 = document.getElementById("form1");
let form2 = document.getElementById("form2");
let text_con = document.getElementById("text_con");
let btn = document.getElementById('btn');
let btn2 = document.getElementById('btn2');

btn.onclick = function(){
    form1.style.transform = 'translatex(10%)';
    text_con.style.transform = 'translatex(-100%)';
    btn.style.display = 'none';
    btn2.style.display = 'block';
    form2.style.right = '0';
    document.getElementById('heading').innerHTML = 'Welcome Back!';
    document.getElementById('para').innerHTML = 'To keep connected with us please login </br> with your personal info';
}

btn2.onclick = function(){
    form1.style.transform = 'translatex(0%)';
    text_con.style.transform = 'translatex(0%)';
    form2.style.right = '20%';
    btn.style.display = 'block';
    btn2.style.display = 'none';
    
    document.getElementById('heading').innerHTML = 'Hello, Friends!';
    document.getElementById('para').innerHTML = 'Enter your personal details and start <br> your journey with us';
}