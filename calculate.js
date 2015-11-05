var sum = "";
var flag;
window.onload = function () {
	var buttons = document.getElementsByTagName('button');
	var monitor = document.getElementById('monitor');
	flag = false;
	if (monitor == null) {
		alert("NULL");
	}
	for (var i = 0; i < buttons.length; ++i) {
		buttons[i].onclick = function() {click(monitor, this)};
	}

}


function click (monitor, obj) {
	if (obj.id == 'CE') {
		sum = "";
	} else if (obj.id == 'larr') {
		sum = sum.substring(0, sum.length - 1);
	} else if (obj.id == 'equal') {
		flag = true;
		try {
			var ans = eval(sum);
		} catch(exception) {
			sum = "";
			monitor.innerHTML = sum;
			alert('用户操作非法!');
			return;
		}
		sum = ans;
	} else if (obj.id == '+' || obj.id == '-' || obj.id == '*' || obj.id == '/'){
		sum = sum + obj.id;
		flag = false;
	} else {
		if (flag == true) {
			sum = "";
			flag = false;
		}
		sum = sum + obj.id;
	}
	monitor.innerHTML = sum;
}