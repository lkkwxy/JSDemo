var myAge = 18;
function add (name,title) {
	alert(1);
	document.write(name+"<br>");
	document.write(title+"<br>");
	document.write(name+title+"忠实粉丝");
	sum = 5 + 6;
	alert(sum);
}
function love () {
	var isLove = confirm("你喜欢我吗？");
	if (isLove) {
		document.write("我也喜欢你");
	} else{
		document.write("我也不喜欢你");
	};
}
function inputName () {
	alert(1);
	var name = prompt("请输入你的名字","名字");
	if (name != null) {
		alert("你好"+name)
	} else{
		alert("你好,");
	};
}
function openNewWindow () {
	// alert(1);
	window.open('http://www.baidu.com','width=600,height=400');
}
// add();
// if (myAge >= 18) {
// 	document.write("成年人");
// 	alert("成年人")
// }else{
// 	document.write("未成年");
// 	alert("未成年");
// };
// alert("JS代码旅行");