var isg = false;
var counter = 0;
const n = 200;

function generate(x) {
	s = document.getElementById("container").innerHTML;
	for (let i=0; i<x; i++) {
		s += counter+"<br>";
		counter++;
	}
	document.getElementById("container").innerHTML = s;
}

generate(n);

window.onscroll = function(ev) {
    if (window.innerHeight + window.pageYOffset >= 0.8*document.body.offsetHeight) {
        if (!isg) {
			isg = true;
			generate(n);
			isg = false;
		}
    }
}