function Overlay(_name) {
	document.getElementById("content5").style.display = "block"
	document.getElementById("closeDiv").style.display = "block"
	document.getElementById("content1").style.display = "none"
	document.getElementById("content2").style.display = "none"
	document.getElementById("content3").style.display = "none"
	document.getElementById("content4").style.display = "none"

	var random = Math.floor(Math.random() * _name.facts.length);
	
	var div = document.createElement("p");
	div.setAttribute("id","chuchu");
	document.getElementById("content5").appendChild(div);
	document.getElementById("chuchu").innerHTML = _name.facts[random];

	var img = document.createElement("img");
	img.setAttribute("id",_name.name+ "1");
	img.setAttribute("src",""+_name.imageLink+"");
	document.getElementById("content5").appendChild(img);
	
	
}
function Restore(){
	document.getElementById("content5").style.display = "none"
	document.getElementById("closeDiv").style.display = "none"
	document.getElementById("content1").style.display = "block"
	document.getElementById("content2").style.display = "block"
	document.getElementById("content3").style.display = "block"
	document.getElementById("content4").style.display = "block"
	document.getElementById("content5").innerHTML = '';
}