function changeImpaired()
{
	var button = document.getElementsByTagName("button");
	console.log(button);
	var div = document.getElementsByTagName("div");
	var a = document.getElementsByTagName("a");
	var h4 = document.getElementsByTagName("h4");
	for(var i =0;i<a.length;i++)
	{
		a[i].style.color ="white";
	}
	for(var i=0;i<div.length;i++)
	{
		div[i].style.fontSize = "110%";
		div[i].style.color = "white";
		div[i].style.backgroundColor = "black";
		div[i].style.border = "4 em solid white";
	}
	for(var i=0;i<button.length;i++){
		button[i].style.padding = "40px 60px";
		button[i].style.color = "white";
		button[i].style.border = "none";
		button[i].style.display = "inline-block";
		button[i].style.backgroundColor = "black";
		button[i].style.border = "4 em solid white";
	}
for(var i=0;i<h4.length;i++)
{
	h4[i].style.backgroundColor = "black";
}
	document.getElementsByTagName("nav")[0].className ="navbar navbar-inverse bg-inverse";
	document.body.style.backgroundColor = "black";
	var body = document.getElementsByTagName('body')[0];
	body.style.backgroundImage = 'url(../img/black.jpg)';
}