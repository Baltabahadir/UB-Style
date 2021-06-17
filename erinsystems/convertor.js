function Currency(){
    y = document.getElementById("converter").value;
    return y;
}

function Calculate(){
y = Currency();

x = document.getElementById("value1").value;

if(x == ""){
    document.getElementById("value2").value = "";
}else{
    switch(y){
        case "Dollar":
            document.getElementById("value2").value = x * 2449.89;
        break;

        case "Euro":
            document.getElementById("value2").value = x * 3150.84;
        break;

        case "Lira":
            document.getElementById("value2").value = x * 330.49;
        break;

        case "Yuan":
            document.getElementById("value2").value = x * 443.25;
        break;
    }
}
}