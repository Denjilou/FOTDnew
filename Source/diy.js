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
