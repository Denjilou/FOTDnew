function Trivia(_name) {
	this.name= _name;
	this.facts = [];
	this.imageLink = "resources/image/" + _name + ".png"
}
var Pizza = new Trivia("Pizza");
var Milk = new Trivia("Milk");
var Shrimp = new Trivia("Shrimp");


Pizza.facts = ["Kids ages 3 to 11 prefer pizza over all other food groups for lunch and dinner. Pizza, comes from the latin root word Picea which means the blackening of crust by fire.","36% of people consider pizza the perfect breakfast","Eating pizza once a week can reduce the risk of esophageal cancer"];
Milk.facts = ["Milk is better for cooling your mouth after eating spicy food. Milk products contain casein, a protein that cleanses burning taste buds.","In a food survey several years ago, respondents voted milk to be safer than water.","It takes 12 pounds of whole milk to make one gallon of ice cream!"];
Shrimp.facts = ["Shrimp are very low in saturated fats that balance the bad cholesterol with the good cholesterol. This makes shrimp beneficial for the circulatory system.","While they are low energy foods, shrimp are high in calcium, iodine and protein.","Shrimp play an important role in the food chain as they are a significant food source for larger animals in the waters, especially fish and whales."];

document.getElementById("content1").style.backgroundImage = "url('resources/image/pizza.png')";
document.getElementById("content1").style.backgroundSize = "cover";

document.getElementById("content2").style.backgroundImage = "url('resources/image/milk.png')";
document.getElementById("content2").style.backgroundSize = "cover";

document.getElementById("content3").style.backgroundImage = "url('resources/image/shrimp.png')";
document.getElementById("content3").style.backgroundSize = "cover";

document.getElementById("content4").style.backgroundImage = "url('resources/image/logo.png')";
document.getElementById("content4").style.backgroundSize = "cover";

var pos = 0;
setTimeout(changePlace, 5000)
function changePlace(){
	if (pos == 0){
		document.getElementById("content1").style.left = "780px";
		
		document.getElementById("content2").style.top = "332px";
		document.getElementById("content2").style.left = "330px";
		
		document.getElementById("content3").style.left = "780px";
		
		document.getElementById("content4").style.top = "50px";
		document.getElementById("content4").style.left = "330px";
		
		pos = Math.floor(Math.random() * 3);
		setTimeout(changePlace, 4000)
	}else if(pos == 1){
	
		document.getElementById("content1").style.top = "332px";
		document.getElementById("content1").style.left = "330px";
		
		document.getElementById("content2").style.top = "332px";
		document.getElementById("content2").style.left = "780px";
		
		document.getElementById("content3").style.left = "330px";
		document.getElementById("content3").style.top = "50px";

		document.getElementById("content4").style.top = "50px";
		document.getElementById("content4").style.left = "780px";
	
	pos = Math.floor(Math.random() * 3);
		setTimeout(changePlace, 4000)
	}else if(pos == 2){
	
		document.getElementById("content1").style.top = "332px";
		document.getElementById("content1").style.left = "780px";
		
		document.getElementById("content2").style.top = "50px";
		document.getElementById("content2").style.left = "330px";
		
		document.getElementById("content3").style.left = "780px";
		document.getElementById("content3").style.top = "50px";
		
		document.getElementById("content4").style.top = "332px";
		document.getElementById("content4").style.left = "330px";
	
	pos = Math.floor(Math.random() * 3);
		setTimeout(changePlace, 4000)
	}else if(pos == 3){
	
		document.getElementById("content1").style.top = "50px";
		document.getElementById("content1").style.left = "330px";
		
		document.getElementById("content2").style.top = "50px";
		document.getElementById("content2").style.left = "780px";
		
		document.getElementById("content3").style.left = "332px";
		document.getElementById("content3").style.top = "330px";
		
		document.getElementById("content4").style.top = "332px";
		document.getElementById("content4").style.left = "780px";
	
	pos = Math.floor(Math.random() * 3);	
		setTimeout(changePlace, 4000)
	}
}