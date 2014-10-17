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

alling.ing= ["kalabasa","beef","manok","kamatis","sayote","malunggay","luya","paminta","asin","okra","sitaw","pechay","talong","sibuyas","bawang","peanutbutter","alamang","toyo","suka","baboy","tubig","asukal","bayleaves","mantika","patatas","liverspread","sili","cheese","peas","carrots"];
adobo.ing = ["bawang","toyo","suka","baboy","tubig","asukal","bayleaves","mantika"];
kaldereta.ing = ["mantika","patatas","liverspread","beef","tubig","sili","cheese","peas","carrots","toyo"];
karekare.ing = ["beef","tubig","sitaw","pechay","talong","sibuyas","bawang","peanutbutter","alamang"];
tinola.ing=["manok","malunggay","sayote","tubig","mantika","luya","bawang","sibuyas"];
pinakbet.ing=["baboy","bawang","kamatis","asin","luya","paminta","sibuyas","tubig","kalabasa","alamang","okra","sitaw","talong",];

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
document.getElementById("content5").appendChild(meal);
document.getElementById("a").innerHTML = "Meal";

var meal1 = document.createElement("p");
meal1.setAttribute("id","b");
meal1.setAttribute("class","meal1");
document.getElementById("content5").appendChild(meal1);
document.getElementById("b").innerHTML = "Snacks";