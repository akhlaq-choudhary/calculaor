var display = document.getElementById("displayer");
	var  button = new Array()
for (let i = 0; i < 10;i++ ) {
	button[i] = document.getElementById(String(i));
}
myfun= () => {
	button = event.target;
	display.innerHTML += button.innerHTML;
}
for (var j = 0; j < 10;j++) {
button[j].onclick = myfun;
}
function backspace(event) {
var key = event.keyCode;
	if (key == "99") {
display.innerHTML = null;
	}
}
var plus = document.getElementById("plus");
plus.addEventListener("click",function() {
displayer.innerHTML += "+";
})
var equal = document.getElementById("equal");
equal.addEventListener("click",function() {
	try {
display.innerHTML = eval(display.innerHTML); 
	display.innerHTML;
}
catch(e) {
	display.innerHTML = e.message;
} 
});
var minus = document.getElementById("minus");
minus.addEventListener("click",function() {
	display.innerHTML += "-";
})
var dot = document.getElementById("dot");
dot.addEventListener("click",function() {
	display.innerHTML += ".";
})
function mykey(event) {
	key = event.keyCode || event.which;
console.log(key);
for(var c = 43;c < 58;c++)
if (key == c) {
display.innerHTML += String.fromCharCode(c);

}
else if (key == 13 || key == 61) {
	display.innerHTML = eval(display.innerHTML);
}
}
var clear = document.getElementById("clear");
clear.addEventListener("click",function() {
	display.innerHTML = display.innerHTML.slice(0,-1);
})