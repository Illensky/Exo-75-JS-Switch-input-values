document.getElementById('switch').addEventListener("click", function (){
    let a = document.getElementById("input1").value;
    document.getElementById("input1").value = document.getElementById("input2").value;
    document.getElementById("input2").value = a;
})