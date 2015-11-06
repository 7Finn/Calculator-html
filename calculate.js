var sum = "";
var flag;
window.onload = function () {
	var buttons = document.getElementsByTagName('button');
	var monitor = document.getElementById('monitor');
	flag = false;
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
		if (sum.length == 0) {
			return;
		}
		flag = true;
		try {
			var ans = parseFloat(eval(sum).toFixed(12));
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
		if (obj.id == '0') {
			if (sum.length == 1 && sum[0] == '0')
				return;
		}
		if (flag == true) {
			sum = "";
			flag = false;
		}
		sum = sum + obj.id;
	}
	monitor.innerHTML = sum;
}