function datumentijd(){
var d = new Date();
var n = d.toLocaleTimeString();
document.querySelector("#tijd").textContent = n;
}

setInterval(datumentijd, 1000);