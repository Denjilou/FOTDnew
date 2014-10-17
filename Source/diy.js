var objectName;
function Recipe(_name){
	this.name=_name;
	this.ing = [];
	this.steps = [];
}

var alling = new Recipe("alling");
var adobo = new Recipe("adobo");
var kaldereta = new Recipe("kaldereta");
var karekare = new Recipe("karekare");
var tinola = new Recipe("tinola");
var pinakbet = new Recipe("pinakbet");
var carbonara = new Recipe("carbonara");
var pizza = new Recipe("pizza");
var burger = new Recipe("burger");


alling.ing= ["kalabasa","beef","manok","kamatis","sayote","malunggay","luya","paminta","asin","okra","sitaw","pechay","talong","sibuyas","bawang","peanutbutter","alamang","toyo","suka","baboy","tubig","asukal","bayleaves","mantika","patatas","liverspread","sili","cheese","peas","carrots"];
adobo.ing = ["bawang","toyo","suka","baboy","tubig","asukal","bayleaves","mantika"];
kaldereta.ing = ["mantika","patatas","liverspread","beef","tubig","sili","cheese","peas","carrots","toyo"];
karekare.ing = ["beef","tubig","sitaw","pechay","talong","sibuyas","bawang","peanutbutter","alamang"];
tinola.ing=["manok","malunggay","sayote","tubig","mantika","luya","bawang","sibuyas"];
pinakbet.ing=["baboy","bawang","kamatis","asin","luya","paminta","sibuyas","tubig","kalabasa","alamang","okra","sitaw","talong",];
carbonara.ing = ["noodles","ham","bacon","cream"];
pizza.ing = ["dough","tomato sauce","pepperoni", "cheese"];
burger.ing = ["buns","patty","cheese","mayo","ketchup"];

var cm = document.createElement("img");
cm.setAttribute("id","manong");
cm.setAttribute("src", "resources/image/ManongCook2.png");
document.getElementById("content5").appendChild(cm);

var p = document.createElement("p");
p.setAttribute("id","cm");
document.getElementById("content5").appendChild(p);
document.getElementById("cm").innerHTML = "Welcome to Cooking Manong!";

var p = document.createElement("p");
p.setAttribute("id","con");
document.getElementById("content5").appendChild(p);
document.getElementById("con").innerHTML = "This Module will virtually help you cook your meals.<br/> To begin please choose your meal category.";
		
var meal = document.createElement("p");
meal.setAttribute("id","a");
meal.setAttribute("class","meal1");
meal.setAttribute("onClick","listMeal()")
document.getElementById("content5").appendChild(meal);
document.getElementById("a").innerHTML = "Meal";

var meal1 = document.createElement("p");
meal1.setAttribute("id","b");
meal1.setAttribute("class","meal1");
meal1.setAttribute("onClick","listSnack()")
document.getElementById("content5").appendChild(meal1);
document.getElementById("b").innerHTML = "Snacks";

function listMeal(){
	document.getElementById("content5").innerHTML = "";
	
	var meal = document.createElement("p");
	meal.setAttribute("id","con1");
	meal.setAttribute("onClick","listMeal()")
	document.getElementById("content5").appendChild(meal);
	document.getElementById("con1").innerHTML = "Choose a Meal you want to make!";
	
	var img = document.createElement("img");
	img.setAttribute("id","adobo1");
	img.setAttribute("onClick", "showIng('adobo',adobo)")
	img.setAttribute("class","notes");
	img.setAttribute("src","resources/diy/adobo.png");
	document.getElementById("content5").appendChild(img);
	
	var img = document.createElement("img");
	img.setAttribute("id","karekare1");
	img.setAttribute("onClick", "showIng('karekare',karekare)")
	img.setAttribute("class","notes");
	img.setAttribute("src","resources/diy/karekare.png");
	document.getElementById("content5").appendChild(img);
	
	var img = document.createElement("img");
	img.setAttribute("id","kaldereta1");
	img.setAttribute("class","notes");
	img.setAttribute("onClick", "showIng('kaldereta',kaldereta)")
	img.setAttribute("src","resources/diy/kaldereta.png");
	document.getElementById("content5").appendChild(img);
}
function listSnack(){
	document.getElementById("content5").innerHTML = "";
		var meal = document.createElement("p");
	meal.setAttribute("id","con1");
	meal.setAttribute("onClick","listMeal()")
	document.getElementById("content5").appendChild(meal);
	document.getElementById("con1").innerHTML = "Choose a Snack you want to make!";
	
	var img = document.createElement("img");
	img.setAttribute("id","carbonara1");
	img.setAttribute("class","notes");
	img.setAttribute("onClick", "showIng('carbonara',carbonara)")
	img.setAttribute("src","resources/diy/carbonara.png");
	document.getElementById("content5").appendChild(img);
	
	var img = document.createElement("img");
	img.setAttribute("id","pizza1");
	img.setAttribute("class","notes");
	img.setAttribute("onClick", "showIng('pizza',pizza)")
	img.setAttribute("src","resources/diy/pizza.png");
	document.getElementById("content5").appendChild(img);
	
	var img = document.createElement("img");
	img.setAttribute("id","burger1");
	img.setAttribute("class","notes");
	img.setAttribute("onClick", "showIng('burger',burger)")
	img.setAttribute("src","resources/diy/burger.png");
	document.getElementById("content5").appendChild(img);
}
function Restore(){
	document.getElementById("content6").style.display = "none"
	document.getElementById("closeDiv").style.display = "none"
}
function showIng(_name,_obj){
	objectName = _obj;
	document.getElementById("content6").innerHTML = "";

	document.getElementById("content6").style.display = "block";
	document.getElementById("closeDiv").style.display = "block";
	
	var img = document.createElement("img");
	img.setAttribute("class","bigPic");
	img.setAttribute("src","resources/diy/"+ _name+".png");
	document.getElementById("content6").appendChild(img);

	var meal = document.createElement("p");
	meal.setAttribute("id","intro");
	document.getElementById("content6").appendChild(meal);
	document.getElementById("intro").innerHTML = "You will need:";
	//console.log(_obj);
	
		var meal = document.createElement("div");
		meal.setAttribute("id","mealdiv");
		document.getElementById("content6").appendChild(meal);
	
	for (var i = 0; i<_obj.ing.length; i++){
		/*var meal = document.createElement("p");
		meal.setAttribute("id","ing"+1);
		meal.setAttribute("class","ingrids");
		document.getElementById("content6").appendChild(meal);*/
		var cont = document.getElementById("mealdiv").innerHTML;	
		document.getElementById("mealdiv").innerHTML = cont + (i+1) + ".) "+ _obj.ing[i] + "<br>";
	}
	console.log(_obj);
	var meal = document.createElement("p");
	meal.setAttribute("id","continue");
	meal.setAttribute("onClick","stepOne()");
	document.getElementById("content6").appendChild(meal);
	document.getElementById("continue").innerHTML = "Click to Proceed >";
}
function stepOne(){
console.log(objectName.name);
	document.getElementById("content6").style.display = "none";
	document.getElementById("closeDiv").style.display = "none";
	document.getElementById("content5").innerHTML = "";
	
}