function new_book(){
    document.getElementById("form_Con").style.display = "flex";
}
function close_form(){
    document.getElementById("form_Con").style.display = "none";
}

var count  = 1;

function add_book(){

    let title =  document.getElementById("title").value;
    let author =  document.getElementById("author").value;
    let status =  document.getElementById("status").value;
    let price =  document.getElementById("price").value;

    console.log(title);
    console.log(author);
    console.log(price);


    const row = document.createElement("div");
    row.id = "row" + count + "";
    row.style.width = "100%";
    row.style.display  = "flex";
    row.style.flexDirection = "row";
    row.style.justifyContent = "space-around";
    row.style.alignItems = "center";
    row.style.marginTop = "10px";

    const p0 = document.createElement("p");
    p0.innerHTML = count++;
    row.appendChild(p0);

    const p1 = document.createElement("p");
    p1.innerHTML = title;
    row.appendChild(p1);

    const p2 = document.createElement("p");
    p2.innerHTML = author;
    row.appendChild(p2);
    
    const p3 = document.createElement("p");
    p3.innerHTML = status;
    row.appendChild(p3);

    const p4 = document.createElement("p");
    p4.innerHTML = price;
    row.appendChild(p4);

    const btn = document.createElement("button");
    btn.className = "btn btn-danger";
    btn.innerHTML = "Remove";
    btn.type = "btn";
    btn.addEventListener("click", function(){
        remove_book(row.id);
    });
    row.appendChild(btn);

    document.getElementById("books_con").appendChild(row);



    document.getElementById("form_Con").style.display = "none";

}


function remove_book(id){
    console.log(id);
    let element = document.getElementById("" + id + "");
    element.remove();
}