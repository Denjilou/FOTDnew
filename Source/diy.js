var no_ing = 0;
var num = 1;
var el = 0;
var foodChoices= [];
var objectName;
var check = 0;

function Recipe(_name){
	this.name=_name;
	this.ing = [];
	this.steps = [];
	this.sequence = [];
}

var alling = new Recipe("alling");
var adobo = new Recipe("adobo");
var kaldereta = new Recipe("kaldereta");
var karekare = new Recipe("karekare");
var carbonara = new Recipe("carbonara");
var pizza = new Recipe("pizza");
var burger = new Recipe("burger");
//Ingredients
alling.ing= ["kalabasa","beef","manok","kamatis","sayote","malunggay","luya","dough","sauce","pepperoni","paminta","asin","okra","sitaw","ham","bacon","cream","pechay","talong","sibuyas","bawang","peanutbutter","alamang","toyo","suka","baboy","tubig","asukal","bayleaves","mantika","bun","patty","sauce","patatas","liverspread","sili","cheese","peas","carrots"];
adobo.ing = ["bawang","toyo","suka","baboy","tubig","asukal","bayleaves","mantika"];
kaldereta.ing = ["mantika","patatas","liverspread","beef","tubig","sili","cheese","peas","carrots","toyo"];
karekare.ing = ["beef","tubig","sitaw","pechay","talong","sibuyas","bawang","peanutbutter","alamang"];
carbonara.ing = ["noodles","ham","bacon","cream"];
pizza.ing = ["dough","sauce","pepperoni", "cheese"];
burger.ing = ["bun","patty","cheese","sauce"];
//steps
adobo.steps = ["Heat the frying pan, add oil","Sauté garlic","Add pork","Add Soy Sauce","Add Vinegar","Add Water", "Add Sugar. Simmer until sauce is thick","Add bay leaves","Serve with Rice"];
kaldereta.steps = ["Heat the frying pan, add oil","Add Potatoes","Add liver spread","Add beef","Add water","Add Soy Sauce","Add Sili","Add peas","Add carrots","Add cheese"];
karekare.steps = ["Boil Water","Add beef","Add Sibuyas","Add bawang","Add talong","Add pechay","Add sitaw","Add peanutbutter","Add alamang"];
carbonara.steps = ["Fry Bacon","Add ham","Kunin tas ilagay sa noodles. Add Cream"];
pizza.steps = ["Roll the Dough","Add tomato sauce","Add pepperoni","Add Cheese"];
burger.steps = ["Set aside Buns","Add patty","Add cheese","Add Sauce"];
//sequence
adobo.sequence = ["mantika","bawang","baboy","toyo","suka","tubig","asukal","bayleaves"];
kaldereta.sequence = ["mantika","patatas","liverspread","beef","tubig","toyo","sili","peas","carrots","cheese"];
karekare.sequence = ["tubig","beef","sibuyas","bawang","talong","pechay","sitaw","peanutbutter","alamang"];
carbonara.sequence = ["bacon","ham","cream"];
pizza.sequence = ["dough","sauce","pepperoni","cheese"];
burger.sequence = ["bun","patty","cheese","sauce"];

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
	
	var p = document.createElement("p");
	p.setAttribute("id","stepOne");
	document.getElementById("content5").appendChild(p);
	document.getElementById("stepOne").innerHTML = "Choose the needed Ingredients!";

	var div = document.createElement("div");
	div.setAttribute("id","listofing");
	document.getElementById("content5").appendChild(div);
	
	var div2 = document.createElement("div");
	div2.setAttribute("id","choice");
	document.getElementById("content5").appendChild(div2);
	
		for (var i = 0; i< alling.ing.length; i++){
			var img = document.createElement("img");
			img.setAttribute("src","resources/meals/alling/"+alling.ing[i]+".png");
			img.setAttribute("height","100px");
			img.setAttribute("id",alling.ing[i]);
			var name = alling.ing[i];
			img.setAttribute("onClick","addToChoice(\""+name+"\")");
			document.getElementById("listofing").appendChild(img);
		}
}
	function addToChoice(_name){
		var num = objectName.ing.length;
		console.log(objectName.ing.length);
		if (no_ing < objectName.ing.length) {

		var newImg = document.createElement("img");
		newImg.setAttribute("src","resources/meals/alling/"+_name+".png");
		newImg.setAttribute("height","100px");
		var z = _name + 1;
		newImg.setAttribute("id",z);
		newImg.setAttribute("onClick","back('"+z+"','"+_name+"',"+num+")");
		document.getElementById("choice").appendChild(newImg);
		
		foodChoices.push(_name);
		
		if(no_ing == objectName.ing.length - 1){
			
				var p = document.createElement("img");
				p.setAttribute("id","check1");
				p.setAttribute("src","resources/images/button.png");
				p.setAttribute("onClick","checkIng("+objectName.name+")");
				p.setAttribute("height","80px");
				document.getElementById("choice").appendChild(p);
				var p = document.createElement("p");
				p.setAttribute("id","check3");
				p.setAttribute("onClick","closeCheck()");
				document.getElementById("choice").appendChild(p);
				document.getElementById("check3").innerHTML = "x";
				}
		no_ing++;
		document.getElementById(_name).style.display = "none";
		}
		
	}
	function closeCheck(){
		document.getElementById("check1").style.display = "none";
		document.getElementById("check3").style.display = "none";
	}
	function back(_name,_name1,_obj){
		no_ing=no_ing-1;
		document.getElementById(_name1).style.display = "inline";
		var elem = document.getElementById(_name);
		elem.parentNode.removeChild(elem);
		var index = foodChoices.indexOf(_name1);
		delete foodChoices[index];
		//foodChoices.splice(_name1,1);
		console.log(foodChoices);
		
		if(no_ing == _obj-1){
			var elem2 = document.getElementById("check1");
			elem2.parentNode.removeChild(elem2);
			var elem2 = document.getElementById("check3");
			elem2.parentNode.removeChild(elem2);
			var elem3 = document.getElementById("check2");
			elem3.parentNode.removeChild(elem3);
		}
		
	}
	function checkIng() {
		var temp1=foodChoices;
		var temp2=objectName.ing;
		temp1.sort();
		temp2.sort();
		var diff = 0;
		for (var i = 0; i < objectName.ing.length; i++) {
			if(temp2[i] == temp1[i]) {	
				
			}
			else {
				diff = 1;
				i = objectName.ing.length;
			}
			
		}
		if(diff == 0){
		var h = document.createElement("img");
				h.setAttribute("id","check2");
				h.setAttribute("src","resources/images/button1.png");
				h.setAttribute("height","80px");
				h.setAttribute("onClick","cook()");
				document.getElementById("choice").appendChild(h);
		document.getElementById("check3").style.display = "none";		
		document.getElementById("check1").style.display = "none";
		}else{
			alert("Ooops. A unknown ingredient is on your list!");
			console.log(foodChoices);
		}
	}
	function cook(){
		document.getElementById("content5").innerHTML = "";
		
		var cm = document.createElement("img");
		cm.setAttribute("id","stove");
		cm.setAttribute("onclick", "openFire()");
		cm.setAttribute("src", "resources/cook/stove.png");
		document.getElementById("content5").appendChild(cm);
		
		var cm = document.createElement("img");
		cm.setAttribute("id","pan");
		cm.setAttribute("src", "resources/cook/pan.png");
		//cm.setAttribute("onclick", "openFire()");
		document.getElementById("content5").appendChild(cm);
		
		var cm = document.createElement("div");
		cm.setAttribute("id","food");
		document.getElementById("content5").appendChild(cm);
		
		var c = document.createElement("div");
		c.setAttribute("id","proced");
		document.getElementById("content5").appendChild(c);
		document.getElementById("proced").innerHTML = "Procedure:<br>";
		
		var c = document.createElement("p");
		c.setAttribute("id","inst");
		document.getElementById("proced").appendChild(c);
		document.getElementById("inst").innerHTML = objectName.steps[0];
		
		var c = document.createElement("div");
		c.setAttribute("id","ingri");
		document.getElementById("content5").appendChild(c);
		document.getElementById("ingri").innerHTML = "<br>Ingredients<br>";
		
		for(var i=0; i<objectName.ing.length; i++){
			var cm = document.createElement("img");
			cm.setAttribute("id",objectName.ing[i]);
			cm.setAttribute("onclick", "placeIn(\""+objectName.ing[i]+"\")");
			cm.setAttribute("height","100px");
			cm.setAttribute("src", "resources/meals/alling/"+objectName.ing[i]+".png");
			document.getElementById("ingri").appendChild(cm);
		}
	}
	function placeIn(_name){
		console.log(_name);
		document.getElementById("food").innerHTML = "";
			var img = document.createElement("img");
			img.setAttribute("src","resources/meals/walaSaPlate/alling/"+_name+".png");
			img.setAttribute("height","100px");
			img.setAttribute("onclick","go(\""+_name+"\")");
			document.getElementById("food").appendChild(img);
			
	}
	function go(_name){
		if(_name == objectName.sequence[check]){
			check++;
			document.getElementById("food").innerHTML = "";
			document.getElementById(_name).style.display = "none";			
			document.getElementById("inst").innerHTML = objectName.steps[check];
		}else{
			document.getElementById("food").innerHTML = "";
			alert("Wrong Ingredient!");
		}
		if(check == objectName.sequence.length){
			document.getElementById("content6").innerHTML = "";
			document.getElementById("content6").style.display = "block";
			document.getElementById("closeDiv").style.display = "block";
			document.getElementById("closeDiv").setAttribute("onClick", "location.href='diy.html'");
			
			var c = document.createElement("p");
			c.setAttribute("id","text");
			document.getElementById("content6").appendChild(c);
			document.getElementById("text").innerHTML = "Your "+ objectName.name + " is done!<br> HAPPY EATING";
			var cm = document.createElement("img");
			cm.setAttribute("id","finish");
			cm.setAttribute("src", "resources/diy/"+ objectName.name +".jpg");
			document.getElementById("content6").appendChild(cm);
			document.getElementById("content5").style.display = "none";
			
		}
	}
	function openFire(){
		var cm = document.createElement("img");
		cm.setAttribute("id","fire");
		cm.setAttribute("src", "resources/cook/fire.gif");
		document.getElementById("content5").appendChild(cm);
	}
	