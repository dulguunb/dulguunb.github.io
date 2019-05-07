var div_pic = document.getElementById("getPicture");
for(var i =1;i<=12;i++)
{
	var a_e = document.createElement("a");
	var img = document.createElement("img");
	img.className = "picture";
	img.src = "img/blog"+i+".jpg";
	img.alt = "pictures of travel";
	a_e.className ="thumbnailPicture";
	a_e.target = "_blank";
	a_e.href = "img/blog"+i+".jpg";
	a_e.appendChild(img);
	div_pic.appendChild(a_e);
}
