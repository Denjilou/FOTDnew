function changeBfast(){
	document.getElementById("content1").innerHTML = "";
	var img = document.createElement("img");
	link = "resources/images/c/Lugaw.png";
	img.setAttribute("src",link);
	img.setAttribute("height","280px");
	img.setAttribute("width","450px");
	img.setAttribute("onClick","OverlayLugaw()");
	document.getElementById("content1").appendChild(img);
	console.log(img);
	
	document.getElementById("content2").innerHTML = "";
	var img1 = document.createElement("img");
	link = "resources/images/c/Pancakes.png";
	img1.setAttribute("src",link);
	img1.setAttribute("height","280px");
	img1.setAttribute("width","450px");
	img1.setAttribute("onClick","OverlayPancake()");
	document.getElementById("content2").appendChild(img1);
	console.log(img1);
	
	document.getElementById("content3").innerHTML = "";
	var img2 = document.createElement("img");
	link = "resources/images/c/Tapsilog.png";
	img2.setAttribute("src",link);
	img2.setAttribute("height","280px");
	img2.setAttribute("width","450px");
	img2.setAttribute("onClick","OverlayTapsi()");
	document.getElementById("content3").appendChild(img2);
	console.log(img2);
	
	document.getElementById("content4").innerHTML = "";
	var img3 = document.createElement("img");
	link = "resources/images/c/Pares.png";
	img3.setAttribute("src",link);
	img3.setAttribute("height","280px");
	img3.setAttribute("width","450px");
	img3.setAttribute("onClick","OverlayPares()");
	document.getElementById("content4").appendChild(img3);
	console.log(img3);
	
}

function changeLunch(){
	document.getElementById("content1").innerHTML = "";
	var img = document.createElement("img");
	link = "resources/images/c/Sisig.png";
	img.setAttribute("src",link);
	img.setAttribute("height","280px");
	img.setAttribute("width","450px");
	img.setAttribute("onClick","OverlaySisig()");
	document.getElementById("content1").appendChild(img);
	console.log(img);
	
	document.getElementById("content2").innerHTML = "";
	var img1 = document.createElement("img");
	link = "resources/images/c/Steak.png";
	img1.setAttribute("src",link);
	img1.setAttribute("height","280px");
	img1.setAttribute("width","450px");
	img1.setAttribute("onClick","OverlaySteak()");
	document.getElementById("content2").appendChild(img1);
	console.log(img1);
	
	document.getElementById("content3").innerHTML = "";
	var img2 = document.createElement("img");
	link = "resources/images/c/Bulalo.png";
	img2.setAttribute("src",link);
	img2.setAttribute("height","280px");
	img2.setAttribute("width","450px");
	img2.setAttribute("onClick","OverlayBulalo()");
	document.getElementById("content3").appendChild(img2);
	console.log(img2);
	
	document.getElementById("content4").innerHTML = "";
	var img3 = document.createElement("img");
	link = "resources/images/c/Crispypata.png";
	img3.setAttribute("src",link);
	img3.setAttribute("height","280px");
	img3.setAttribute("width","450px");
	img3.setAttribute("onClick","OverlayCrispy()");
	document.getElementById("content4").appendChild(img3);
	console.log(img3);
}

function changeDrinks(){
	document.getElementById("content1").innerHTML = "";
	var img = document.createElement("img");
	link = "resources/images/c/Icedtea.png";
	img.setAttribute("src",link);
	img.setAttribute("height","280px");
	img.setAttribute("width","450px");
	img.setAttribute("onClick","OverlayIcedtea()");
	document.getElementById("content1").appendChild(img);
	console.log(img);
	
	document.getElementById("content2").innerHTML = "";
	var img1 = document.createElement("img");
	link = "resources/images/c/Milkshake.png";
	img1.setAttribute("src",link);
	img1.setAttribute("height","280px");
	img1.setAttribute("width","450px");
	img1.setAttribute("onClick","OverlayMilkShake()");
	document.getElementById("content2").appendChild(img1);
	console.log(img1);
	
	document.getElementById("content3").innerHTML = "";
	var img2 = document.createElement("img");
	link = "resources/images/c/Milktea.png";
	img2.setAttribute("src",link);
	img2.setAttribute("height","280px");
	img2.setAttribute("width","450px");
	img2.setAttribute("onClick","OverlayMilkTea()");
	document.getElementById("content3").appendChild(img2);
	console.log(img2);
	
	document.getElementById("content4").innerHTML = "";
	var img3 = document.createElement("img");
	link = "resources/images/c/Halohalo.png";
	img3.setAttribute("src",link);
	img3.setAttribute("height","280px");
	img3.setAttribute("width","450px");
	img3.setAttribute("onClick","OverlayHaloHalo()");
	document.getElementById("content4").appendChild(img3);
	console.log(img3);
}

function changeSnacks(){
	document.getElementById("content1").innerHTML = "";
	var img = document.createElement("img");
	link = "resources/images/c/Burger.png";
	img.setAttribute("src",link);
	img.setAttribute("height","280px");
	img.setAttribute("width","450px");
	img.setAttribute("onClick","OverlayBurger()");
	document.getElementById("content1").appendChild(img);
	console.log(img);
	
	document.getElementById("content2").innerHTML = "";
	var img1 = document.createElement("img");
	link = "resources/images/c/Pancit.png";
	img1.setAttribute("src",link);
	img1.setAttribute("height","280px");
	img1.setAttribute("width","450px");
	img1.setAttribute("onClick","OverlayPancit()");
	document.getElementById("content2").appendChild(img1);
	console.log(img);
	
	document.getElementById("content3").innerHTML = "";
	var img2 = document.createElement("img");
	link = "resources/images/c/Cupcake.png";
	img2.setAttribute("src",link);
	img2.setAttribute("height","280px");
	img2.setAttribute("width","450px");
	img2.setAttribute("onClick","OverlayCupcake()");
	document.getElementById("content3").appendChild(img2);
	console.log(img);
	
	document.getElementById("content4").innerHTML = "";
	var img3 = document.createElement("img");
	link = "resources/images/c/BBQ.png";
	img3.setAttribute("src",link);
	img3.setAttribute("height","280px");
	img3.setAttribute("width","450px");
	img3.setAttribute("onClick","OverlayBbq()");
	document.getElementById("content4").appendChild(img3);
	console.log(img3);
}

function Store(name){
	this.about = [];
}
var choi = new Store("Choi");
var dragon = new Store("Dragon");
var north = new Store("North");
var bowl = new Store("Bowl");
var leching = new Store("LeChing");
var mamou = new Store("Mamou");
var pancakehouse = new Store("PancakeHouse");
var butter = new Store("ButterDiner");
var brida = new Store("Brida");
var grams = new Store("Grams");
var matys = new Store("Matys");
var goodah = new Store("Goodah");
var original = new Store("Original");
var rufo = new Store("Rufos");
var rodic = new Store("Rodics");
var paresmami = new Store("Paresmami");
var cocoy = new Store("Cocoy");
var house = new Store("House");
var king = new Store("King");
var partner = new Store("Partner");
var lab = new Store ("Lab");
var jimmy = new Store ("Jimmy");
var hooray = new Store ("Hooray");
var crisostomo = new Store ("Crisostomo");
var razon = new Store ("Razon");
var tivoli = new Store("Tivoli");
var fireplace = new Store("Fireplace");
var mamou1 = new Store("Mamou");
var melos = new Store("Melos");
var red = new Store("Red");
var vivian = new Store("Vivian");
var pat = new Store("Pat");
var rj = new Store("RJ");
var fiesta = new Store("Fiesta");
var freska = new Store("Freska");
var livestock = new Store("Livestock");
var tipsy = new Store("Tipsy");
var analisa = new Store("Analisa");
var jamicos = new Store("Jamicos");
var cerchio = new Store("Cerchio");
var elbert = new Store("Elbert");
var demi = new Store("Demi");
var fc = new Store("Fc");
var black = new Store("Black");
var smoked = new Store("Smoked");
var aling = new Store("Aling");
var ado = new Store("Ado");
var buddy = new Store("Buddy");
var luyong = new Store("Luyong");
var pakibalot = new Store("Pakibalot");
var karen = new Store("Karen");
var ucc = new Store("UCC");
var sonja = new Store("Sonja");
var slice = new Store("Slice");
var baker = new Store("Baker");
var nene = new Store("Nene");
var danny = new Store("Danny");
var aristocrat = new Store("Aristocrat");
var amber = new Store("Amber");
var reyes = new Store("Reyes");
var cibo = new Store("Cibo");
var dalandan = new Store("Dalandan");
var army = new Store("Army");
var real = new Store("Real");
var lugang = new Store("Lugang");
var jones = new Store("Jones");
var filling = new Store("Filling");
var rocket = new Store("Rocket");
var charlie = new Store("Charlie");
var seattle = new Store("Seattle");
var kabig = new Store("Kabigting");
var milk = new Store("Milkyway");
var nath = new Store("Nathaniel");
var razon1 = new Store("Razon1");
var arist = new Store("Aristocrat1");
var gong = new Store("Gong");
var dau = new Store("Dau");
var chat = new Store("Chat");
var tokyo = new Store("Tokyo");
var saint = new Store("Saint");
choi.about = ["The Fish Fillet Congee(130), which also has chopped chives and a raw egg, is the establishment's bestseller. Which, come to think of it, is not surprising. The fish strips - presumably fried and crispy before going under the pool of congee - is tender and tasty, no need for condiments, even for the unabashedly carnivorous. Same goes for the congee itself, which is alread a treat.</br></br>Location:</br>Ground flr, Waltermart, 790 Chino Roces Avenue"];
dragon.about = ["For starters, color and texture are the qualities that set Dragon Noodle Center's Halo-Halo Congee (95) apart from the rest. The rice congee itself is light brown. After all, based on taste alone, its color may be the result of the confluence of all the ingredients' flavors: pieces of liver, beef strips, meatball, tripe, century eggs, as well as a raw egg. Served on a bowl half the size of basketball, Dragon Noodle’s Congee is one of the best in the city.</br></br>Location:</br>1037, MH Del Pilar Street, Malate Manila "];
north.about = ["North Park's famous Superior Congee (171) has the finest ingredients that can ever be found in a congee dish, hands down. Besides pork and chicken balls, the dish has slices of century egg, Pacific clams , fish fillet, Szechuan vegetables, fresh egg, and shrimps. It has chips for toppings too.</br></br>Location:</br>689 Banawe Street Quezon City with branches all over Metro Manila "];
bowl.about = ["Though Super Bowl of China plain congee (100) is already a treat, things get even better if you go for the Chicken congee (130). The dish is loaded with black mushrooms, thinly sliced ginger, and chopped chives. It’s a dish that’s filling and soothing at the same time. The soft and incredibly tasty chicken chunks seal the deal.</br></br>Location:</br>Branches all over Metro Manila "];
leching.about = ["Don’t judge the place by its pun-ny name. The plain congee served with raw egg (42) is tasty enough – but you can’t pass up the special variations.  We got the Shredded Pork with Century Egg Congee (102) and we were not disappointed. Aside from the star ingredients, the dish also had chopped chives and raw a egg “hidden” at the bottom, of the bowl.</br></br>Location:</br>M2 level, Food Choices Trinoma Mall, Quezon City with branches all over Metro Manila"];
mamou.about = ["Dubbed as Pol’s Pancakes, they look charming with their golden brown color and perfectly round shape. They are thick, but soft and fluffy. They are not the cheapest pancakes in the market, but they do come with your choice of side dishes. They’re only served on weekends, so they’re the perfect weekend treat after a long week at work.</br></br>Location:</br>Serendra, Bonifacio Global City, Taguig; Powerplant Mall, Rockwell Center, Makati "];
pancakehouse.about = ["They are fairly large, perfectly round, slightly thick, and light golden-brown in color, with a buttery aroma. Those who like their pancakes dense might find this version a bit too fluffy. They're served with whipped butter, whose texture and sweetness is akin to cake icing. While Pancake House is known for more complex pancake variations, it’s nice to know that they can still make a basic pancake shine.</br></br>Location:</br>Binondo, Ayala Center, and branches all over Metro Manila"];
butter.about = ["Their classic pancakes remind us of the ones that mom used to make, but much better. They are not perfectly round and mostly light golden-brown in color, with some darker brown spots. Their slightly crispy exterior belie their soft and fluffy interior. There is a slight “egg-y” taste—but it isn’t too obvious.</br></br>Location:</br>GF, Shopwise Arcade, Araneta Center, Cubao, Quezon City.</br>Tel no. 421-0030. "];
brida.about = ["Fairly large in size, they are not perfectly round or even in color, but are nicely light and fluffy, served with a slathering of maple syrup and dried cranberries. Also served with the pancakes are slices of fresh oranges, strawberries, and green apples—a refreshing and healthier alternative to the usual side dish of bacon or sausage.</br></br>Location:</br>R2 201 Level 2 Power Plant Mall, Poblacion, Makati City. Tel. no. 823-3537 "];
grams.about = ["They are dainty, light, and fluffy, and served with scrambled eggs and homemade bacon. The eggs are standard fare—but the bacon really seals the deal, with a flavor that is similar to that of crispy pork jerky that you can find in Chinese groceries, and a saltiness that, of course, complements the sweetness of the pancakes excellently.</br></br>Location:</br>Sgt. Esguerra cor. Mother Ignacia, Quezon City."];
matys.about = ["Service is quick, all portions of the combo meal are served to you in less than five minutes, all piping hot. The tapa in Maty’s tapsilog is soft and has right blend of sweet and salty.</br></br>Location:</br>0395 Quirino Avenue, Dongalo, Parañaque </br>Tel. no 854-0889"];
goodah.about = ["The sweet beef slices have the right hint of saltiness. The meat is soft and juicy.</br></br>Location:</br>Caltex  EDSA Station corner Connecticut Street, San Juan Tel. no 409-7521"];
original.about = ["They have bigger servings of tapa and rice and two fried eggs. Both, if not all, of their meals also come with hot soup, which is a welcome bonus since their tapa could use a little more flavor and a little more frying. The restaurant also offers unlimited rice to its dine-in customers.</br></br>Location:</br>Makati Cinema Square, Pasong Tamo, Makati City</br> Tel.no 811-1569 "];
rufo.about = ["Rufo’s serves its flagship offering swimming in its special sauce. But instead of overwhelming the dish, the sauce –“a sweet, brown-colored, gravy-textured mixture-“ enhances its taste, thereby allowing for a one of a kind tapsilog experience. It makes you wish that their servings were bigger.</br></br>Location:</br>Shaw Boulevard, corner Seridan Street, Greenfield District, Mandaluyong City</br> Tel. no 633-5936 "];
rodic.about = ["Their tapa seems that it’s been tossed inside a blender. The shredded meat is more on the sweet side and the accompanying fried rice and runny sunny side-up egg only enhances its taste. The sinangag gets extra point for being nicely moist.</br></br>Location:</br>Masaya Street corner Maginhawa Street , UP Village, Diliman Quezon City</br> Tel.no 436-4389"];
paresmami.about = ["With a whole lot of litid, the beef stew makes this pares ashowstopper. It goes without saying that the beef chunks are extremely tender. The fried rice-“with scrambled egg and chorizo bits-“goes very well with the lightly peppered soup.</br></br>Location:</br>2024 España Boulevard corner Basilio Street"];
cocoy.about = ["Cocoy’s pares has beef stew with a generous helping of litid and fat, as well as a hint of star anise. The beef chunks are tender enough to be cut with a spoon and the fried rice is served with chopped leeks, scrambled egg bits, and toasted garlic chips. The soup tends to be too greasy though.</br></br>Location:</br>Unit 118-C, Visayas Avenue, VASRA I, Quezon City</br> Tel. no 924-5019"];
house.about = ["The pares boasts of tender, litid-laden beef chunks in the stew, fried rice with chorizo bits, and soup with shredded Chinese cabbage. There’s just a hint of star anise and enough salt to counter the sweetness of the stew.</br></br>Location:</br>445 N.S. Amoranto Avenue corner D.Tuazon Street, Brgy. Maharlika, Sta. Mesa Heights, Metro Manila"];
king.about = ["The combo boasts of lightly spicy stew with tender beef chunks. There’s enough litid and fat on the meat to keep things interesting. The stew’s sweet and salty taste is the perfect counterpoint for the clear soup. The rice is also fried lightly with just a few minced bits of garlic.</br></br>Location:</br>1593 Dimasalang Street, Sta. Cruz, Manila</br> Tel. no 386-5326"];
partner.about = ["Partner’s pares has tender, mildly seasoned beef chunks with the barest hint of star anise. Though the soup is forgettable, the fried rice with minced carrots, garlic, and scrambled egg makes up for it. It’s  a good choice for an after-gimik or hang-over meal. However, those who are into litid may find this pares lacking.</br></br>Location:</br>Kamuning Road corner Judge Jimenez Street, Quezon City </br>Tel. no 410-3236"];
lab.about = ["Price of Sisig starts at 195. Lab Gastropub gives us a refreshing take on the popular sisig with its Lab Sisig. This is basically a sisig that comes with juicy chunks of pork, chili, a secret sauce, and then topped with egg and pork floss instead of chicharon. This makes it to the top of our list for striking a perfect balance between a traditional sisig with a totally new and inventive take on the well known dish.</br></br>Location:</br> Oceana Culinary Complex, Building A, SM by the Bay, Pasay City"];
jimmy.about = ["Price of Sisig starts at 110.With sisig that is meticulously prepared for four hours, it’s no mystery why patrons of Mang Jimmy’s keep coming back for more. Topped with an egg, chili peppers, and a generous serving of pork, liver and fat trimming, this sisig is definitely worth the repeat visits. It has rich array of flavors that you can tweak with grated cheddar cheese. </br></br>Location:</br>MWSS Compound Old Balara Quezon City"];
hooray.about = ["Price of Sisig starts at 70.Sisig Hooray simple formula of crispy pork strips, chili peppers, and minced chicharon, along with a big dollop of its secrets brown sauce is the cheapest, fastest and one of the most flavorful version of sisig. At P55, this is definitely a steal. More often than not, you’ll find yourself ordering extra rice. </br></br>Location:</br>Sisig Hooray has various locations around Metro Manila"];
crisostomo.about = ["Price of Sisig starts at 250.What makes Crisostomo’s sisig a favorite among locals and foreigners alike is the fact that each bite gives you a consistent dose of flavor. It is always a little bit savory, sweet, spicy in every spoonful. It includes deep – fried clumps of lechon kawali, onions and mayonnaise. It’s simple and straight forward, while keeping its charm by giving us the familiar taste of a Filipino favorite.</br></br>Location:</br>Newport Mall, Eastwood Mall and Alabang Town Center"];
razon.about = ["Price of Sisig starts at 180. What’s so good about Razon’s sisig is that it doesn’t hold back on the flat. It is served piping hot, causing its meat to slowly clump together and form crispy clusters of heaven. Slightly spicy, this sisig dish is on the wet and chewy side with hints of richness similar to their sizzling bulalo. It pairs well with a dash of an all-around or Worcestershire sauce. </br></br>Location:</br>Razon’s has various branches in Manila and other locations"];
tivoli.about = ["One doesn’t automatically think of The Tivoli at The Mandarin Oriental when one thinks of steak, but the restaurant does offer an excellent and varied choice of meat, all of them well aged and beautifully marbled. The kitchen does a wonderful job of cooking the beef well done, a lovely brown on the outside and delightfully pink when cut.</br></br>Location:</br>Mandarin Oriental, Makati Avenue, Makati City</br> Tel. 750-8888 local 2437 "];
fireplace.about = ["You can tell this from the ambiance—the low light, the open fire, the stacks of wood for fuel. And you can taste it in the steak. ThePorterhouse steak (P3450, 25 oz) is tender, the beef infused with a hint of smokiness from the wood and fire, and the steak a perfect medium rare. The steak here is cooked and served in a straightforward manner, yet each bite yields a complex, beefy flavor.</br></br>Location:</br>5/F Hyatt Hotel and Casino Manila 1588 Pedro Gil cor M.H. Del Pilar Streets, Malate</br> Tel. 245-1234. "];
mamou1.about = ["Though Mamou’s menu is extensive and not limited to beef, they do take pride in their steak. There are two types of steak to choose from, but the more expensive Dry Aged USDA Prime Grade Bone-in Ribeye Steak(600g/21oz, P2800; 800g/28oz, P3500) is thick, juicy, and has an intense flavor. The best way to eat it would be without gravy—just sprinkle a little sea salt on it to draw out the flavor and you’re good to go.</br></br>Location:</br>Serendra, Bonifacio Global City Taguig City </br>Tel. 856-3569 "];
melos.about = ["The restaurant offers different kinds of steak served in many different ways which means that there will be something on the menu that will appeal to almost anyone. Those looking for your basic slab of meat on a plate can go for the Rib-Eye Wagyu Grade 6 (P220/ oz min 8oz), which is soft, well-marbled, with a smokey flavor that is sensed more than tasted, as one chews on the beef.</br></br>Location:</br>41 Precinct, Westgate Center Alabang, Filinvest, Muntinlupa City</br> Tel. 771-2288, 771-3945. "];
red.about = ["The Australia Red Darlingdown Rib-eye (P1700, 350g) is modestly priced, given that this is a hotel restaurant, that the steak is flown in almost weekly and aged for about a month, and that 350 grams is about the size of half a dinner plate.</br></br>Location:</br>Lobby Level, Makati Shangri-La, Ayala Avenue corner Makati Avenue, Makati City 1200</br> Tel. 813 8888 "];
vivian.about = ["The establishment offers the most bang for the buck, or the most marrow for the money, so to speak. The bone and its meat are served on one whole bowl the size of a basketball cut in half. The dish is complemented by vegetables, which are wrapped around the meat. A separate smaller bowl of soup is provided, making it one of the most authentic bulalo dining experience in the city.</br></br>Location:</br>No. 6 Lauan St.,  Barangay Duyan-Duyan, Project 3, Quezon City</br> Tel. no. 433-4267"];
pat.about = ["Kansi is the Ilonggo version of the Bulalo and Pat-Pat’s serves the best in the city. Of two special implements provided with an order of Kansi – a barbeque stick and a thin, serrated steak knife – the latter proves more useful. The soft, rich, if stubborn flesh lodged inside the bone is complemented by the specially formulated broth.</br></br>Location:</br>8809 Sampaloc Street, San Antonio, Makati City</br> Tel. no. 890-6179 "];
rj.about = ["Plain Bulalo, P199 and Bulalo Special, 249. Bulalo is supposed to be salty and served in huge chunks. And this is exactly the kind of bulalo served at R&J’s Bulalohan and Tapsilogan. It’s plain bulalo dish is cooked nilaga-style, unlike the others, which are cook their regular bulalo sinigang-style. Which probably explains why it explains why it keeps on attracting customers – from the hoi polloi to yuppies -  despite its location.</br></br>Location:</br>600 Boni Avenue, Mandaluyong City.</br> Tel no. 533-4811. "];
fiesta.about = ["Plain Bulalo, P225 and Bulalo Sweet Corn, P255. Bulalo Fiesta offers all manner of bulalo variants imaginable to the connoisseur – from pochero to sinigang sa sampalok, from bulalo lomi to yes, kare-kare. Meanwhile, it’s plain bulalo is not something to ignore – with its well seasoned broth, beef chuncks, and the bone chunck with the delicious marrow.</br></br>Location:</br>Block 75, Lot 14, Neopolitan Sitio Seville, North Fairview</br>Tel. no. 418-7804. "];
freska.about = ["Though Freska takes pride in offering “the best of “Ilonggo seafood”, it has other non-seafood offering. Among them is the Ilonggo Beef Bulalo. The dish has a flavorful beef broth and an almost – flat beef shank with marrow. Pechay leaves and chopped leeks further enhance the bulalo, which contains very little beef fat.</br></br>Location:</br>Market! Market! Outdoor food court with various branches"];
livestock.about = ["Price of Crispy Pata is 590. The Crispy Pata melts in your mouth like an ice pop. The textures are reminiscent of cochinillo, in fact. Chef Cecicila Magdangal Uy experimented for months to perfect the recipe that she refuses to divulge. The meat is so tender and moist, with a mild but flavorful pork profile. Put a piece inside your mouth and it disappears because it’s just out-of-this-world good. </br></br>Location:</br>Livestock Restaurant and Bar is at 34 Sergeant Esguerra Avenue, South Triangle, Quezon City"];
tipsy.about = ["Price of Crispy Pata is 770. Their Crispy Pata is served off the bone. The paint of sweet sauce makes it glisten so much that you’ll find yourself mesmerized – at the shine, at your hungry reflection, at the  sheer deliciousness. The combination of sweet and salty works so well: the perfect bite would include the skin, meat, sauce, rice and maybe a side dish. Get the coleslaw for a nice balance. </br></br>Location:</br>Tipsy Pig is at Capitol Commons, Pasig City"];
analisa.about = ["Price of Crispy Pata is 310. Analisa’s is nothing more than huge takeout window with small kitchen that speaks loudly and deliciously – so much that it’s developed a cultish following over the years. The Crispy Pata is well seasoned without being too salty, and the sauce has the right ratio of vinegar and soy sauce that keeps everything balance. The dish is placed in a nice brown paper bag left open to keep the skin oh so crispy.</br></br>Location:</br>Project 4, in Quezon City"];
jamicos.about = ["Price of Crispy Pata is 500. Sliced pickles on top drench the pata in salty – tart juices, coating tanginess on the skin whose crispness is impressively. White meat lovers will enjoy the hefy portions served with two kinds of sauce. Jamicos is currently under renovation but because the Crispy Pata is so popular, a makeshift takeout counter on the sidewalk allows you to order it. </br></br>Location:</br>Jamicos Restaurant is at 201 General Luna Street, Concepcion, Malabon City"];
cerchio.about = ["Price of Crispy Pata is 650. Served with tree sauces, Cerchio’s Crispy Pata looks dolled up, but that’s only skin – deep. It tastes like something your grandmother would have lovingly made for you at home. The meat is cooked perfectly and evenly, with the juices and flavors sealed in. Cerchio shows us how an old favorite can be refreshed without losing integrity.</br></br>Location:</br> Cerchio Grill and Lounge is at 76 Scout Limbaga Street, Quezon City"];
elbert.about = ["The 200-gram patty is made by hand-chopping aged tenderloin trimmings and combining it with chunks of bone marrow and a dab of black truffle paste. This bad boy has to be ordered two days in advance to give enough time to prepare the bone marrow. To fully appreciate and experience this mouth-watering masterpiece, the Chef’s Burger must be cooked only one way, medium rare. </br></br>Location:</br>3/F Sagittarius Building III, 111 H. V. de la Costa Street, Salcedo Village Makati City </br>Tel. No. 339-3363 "];
demi.about = ["From the patty with foie gras and the Cambozola cheese bath and Prosecco-onions, to the unorthodox, crusty bun and even the little gold spike that holds the burger together. Presented elegantly on a plate with French fries, a side salad, a velvety cheese sauce. Be careful when you take a bite—juice from the burger tends to ooze out and drips all over your hands.</br></br>Location:</br>Ground Level, Greenbelt 5, Ayala Center,Makati City </br>Tel. No. 756-5893 "];
fc.about = ["Beautifully served alongside chips made with real potatoes and a truffle mayo dip plus a simple salad composed of assorted fresh greens, cherry tomatoes, and shaved parmesan, the FC burger is decked out with a 180-gram pure Angus beef patty, a generous portion of foie gras, and caramelized onions with a sweet and slightly acidic bite that cuts through this extremely juicy burger. You can even order extra portion of foie gras!</br></br>Location:</br>Ground Floor, The Podium Mandaluyong City </br>Tel. No. 638-7527. "];
black.about = ["Inside the semi-crusty bun, you’ll find fresh lettuce, tomato, onions, arugula, and a thick, succulent ground beef patty. Take a bite and discover chunks of goose liver mixed into the already great-tasting Black Angus patty. The goose liver adds a tenderness to the burger, and is complemented by sweet raspberry honey sauce drizzled on top of the patty.</br></br>Location:</br>Ground Floor, Amorsolo Square, Amorsolo Drive,Rockwell Center, Makati City</br> Tel. No. 890-6543 "];
smoked.about = ["The burger is finished off with a slice of Egmont cheese and chunks of maple smoked bacon. What makes this burger even more appetizing is the lingering truffle aroma from the French fries tossed in truffle butter and sprinkled with Blackwood’s signature spice.</br></br>Location:</br>105-106 The Venice at Piazza, Mckinley Hill Taguig City</br> Tel. No. 659-4409"];
aling.about = ["Aling Norma’s Pancit Malabon-P200-P1200, boasts of thick rice noodles drenched in rich sauce. It’s also generously heaped with shelled shrimps, chipped spring onions, sliced hard-boiled eggs, minced garlic, adobong posit, chopped Chinese cabbage, and crushed chicharon. Those who aren’t into pork can ask the cook to skip the chicharon and just add more shrimp.</br></br>Location:</br>No. 25 L.R. Yangco Street, Navotas City </br>Tel. no 282-1280 "];
pakibalot.about = ["Pakibalot Panciteria’s Pancit Canton-P120 is drenched in sauce and mixed with carrots, cabbage strips, and sliced white onions. You can also have add-ons such as lechon and shelled shrimps. If you don’t have any dietary restrictions, add both lechon and shrimp to make your pancit stop a memorable one.</br></br>Location:</br>No. 122 Maginhawa Street, UP Village, Diliman, Quezon City</br> Tel. no 383-9625 "];
buddy.about = ["Buddy’s Pancit Lucban-P139(for2-3 people) is the kind of noodle dish that guy would love. The noodles are nicely dry and clumped together to hold thhickslices of porkthat literally weigh down the dish. Sliced pechay and carrots are also generously mixed with the noodles.</br></br>Location:</br>2948 Kakarong Street, Makati City "];
luyong.about = ["Luyong restaurant, which has been serving great food for more than 20 years, boasts of heavenly pancit. Its bestselling Miki Bihon-P130(for two people) lives up to its reputation. The secret to Luyong’s pancit dishes is the sauce.</br></br>Location:</br>801 J.P. Rizal Street, Concepcion I, Marikina City "];
ado.about = ["Ado’s Panciteria in Pasig is more popular than its address. Bite-sized chunks of chicharon top its Pancit Canton Guisado-P57(single serving), one of its many bestsellers.</br></br>Location:</br>126 A. Luna Street, Malinao, Pasig City</br>Tel. no 641-1851 "];
karen.about = ["The cupcake has a perfectly delicious combination of a thick yet light cream cheese frosting that tastes as it should—a little sour and creamy from the cheese yet sweet from the powdered sugar. Whether you’re looking for a cupcake (P75) or going for one of their full-sized cakes (P550 and up).</br></br>Location:</br>Petron Dasma and in Palm Village,Makati</br> Tel. no 55-0555 "];
ucc.about = ["This cake has a rich, perfectly tangy and wonderfully sweetened cream cheese frosting that covers layers of a sweet, dense cake with a wonderfully moist and even crumb that had us sighing in pleasure. A bestseller, this is one slice that definitely makes the cut, and whatever form it’s in, this delicious red velvet cake (P160) would still stand strong.</br></br>Location:</br>UCC Café Terrace is located at Glorietta 3; The Podium; One Rockwell; and Trinoma. "];
slice.about = ["The first thing that catches the eye with this red velvet cupcake (P80) is a cream cheese frosting that’s been whipped to stiff peaks like egg whites, holding its shape as a tall, intimidating coif on top of the cupcake. But it doesn’t end there: the cake reveals a dense, moist crumb that can only be described as melt-in-your-mouth. It’s a perfectly baked dark red cake with a super light cream cheese icing.</br></br>Location:</br>Southeast Block, Lower Ground Floor, Bonifacio High Street Central</br> Tel. no 565-1998 "];
sonja.about = ["This red velvet cupcake, called the Red Velvet Vixen (P78), has a tad more than just a hint of cocoa in a deliciously moist cake that dissolves into cakey creaminess as you eat it. With it is a rich, creamy cream cheese frosting that is lightly dusted with cocoa powder, giving you a sweet-smelling hint of what you’ve just bitten into.</br></br>Location:</br>Serendra in Bonifacio Global City "];
baker.about = ["But in this case, first impressions don’t last. If you like your cream cheese frosting sweet enough so that’s it’s undeniably a frosting, yet sour enough for it to be undoubtedly identified as cream cheese, this would get your vote. Meanwhile, the cake is just as predictable in a good way: moist and wonderfully dense, but still soft to the bite. It’s the biggest cupcake on this list so at P45.</br></br>Location:</br>5th floor of Shangri-la Mall "];
nene.about = ["Aling Nenes’s started as a small take-out counter in 1955 selling lechon baboy, lechon baka, grilled chicken and pork barbeque. Soon after, the take-out counter became a restaurant, with the pork barbecue being one of Aling Nene’s most popular offerings. A stick of the Aling Nene’s special pork barbecue has lean an tender tenderloin cuts. Well-marinated and smoky with hints of pepper.</br></br>Location:</br>1300 Vito Cruz Street corner South Super Highway, Manila </br>Tel.no 353-2253 "];
danny.about = ["Dannylicious, a small carinderia in Project 4, Quezon City has been grilling and selling barbecue since 1970s. A small cramped lace without parking, their pork barbecue is still worth the drive, with lean pieces of meat alternating with a few chunks of fat basted in sweet marinade. Tender even with some burnt edges, Dannylicious’ barbecue is a perfect match with the vinegar dip with onions.</br></br>Location:</br>176-C Kalantiwa Street, Project 4, Quezon City </br>Tel. no 497-3982 "];
aristocrat.about = ["While more popular for their chicken barbecue, aristocrat’s pork barbecue has thick chunks of juicy pork meat grilled well with some charred edges. Meaty and tender with a slightly sweet and smoky, taste coupled with the piquant sauce that they serve upon request.</br></br>Location:</br>SM Mall of Asia"];
amber.about = ["Amber’s pork barbecue, with only four thick cubes of pork on the stick, is juicy and tender with hints of sweetness in the marinade. Skewered with a big chunk of fat at the end of the stick, Amber’s pork barbecue is savory and tasty, like it was marinated for a long time.</br></br>Location:</br>1324 Filmore corner Emilia Streets, Makati </br>Tel. no 884-8888 "];
reyes.about = ["Reyes barbecue is the most expensive on the list. The pork meat is alternately skewered with slivers of fat and grilled until most of the edges are burned. Juicy and moderately tender with a strong peppery taste, the pork barbecue can actually be eaten without any sauce, but it’d the Reyes barbecue peanut sauce that makes their version distinct from the rest.</br></br>Location:</br>Reyes BBQ has various branches in Manila and other locations"];
cibo.about = ["Shaken not stirred best describes this foamy concoction. Cibo’s scrumptious fruit shakes overshadow its selection often freddo (iced tea) but those flavors are too delicious to miss. The challenge with lemon anything is how the strong zest can scratch the throat, but this brew is as smooth as velvet. Not too bitter, not to sour, and with just a touch of sweetness—this tea’s just about right.</br></br>Location:</br>2nd Flr, Greenbelt 5 (at Legazpi St. & Greenbelt Dr.), Makati City"];
dalandan.about = ["Earthy hints of tea are given a much needed punch with the tangy zing of dalandan in this mix. There’s a light shade of acidity that gives the drink some oomph, making it the ultimate pick-me-up. We can’t help but say \"aaah\" with every sip. They also have duhat, green mango, lychee, and guava iced tea on the menu if you're feeling more adventurous.</br></br>Location:</br>Level 1, Greenbelt 4, Ayala Museum, Ayala Center, Makati City"];
army.about = ["Something as common as iced tea shouldn’t be overworked, so we’re taking our cue from Army Navy’s simple yet amazing Libertea. No fancy mixes or complicated ingredients here, just the natural flavors of lemon and tea balancing each other out in delicious harmony.</br></br>Location:</br>Army Navy has various branches in Manila and other locations"];
real.about = ["CPK’s mildly flavored Real Leaf Honey Lychee iced tea is a welcome substitute to its famed raspberry counterpart (which nearly killed our taste buds with tooth-decaying sweetness). We’re not sure how it fares against its bottled version but this green tea-based beverage has the distinct sweetness of lychee. The honey doesn’t play much except in its golden color, but this one tips the scale either way.</br></br>Location:</br>"];
lugang.about = ["If there ever was a contest for the most no-nonsense interpretation of iced tea, Lugang wins hands down. Their version has that pleasant watery texture of tea that works well with a mild lemon zest punch. Truly refreshing and light, Lugang’s Cantonese iced tea is out to prove that no one makes tea like the Chinese do.</br></br>Location:</br>Connecticut St, San Juan, Metro Manila"];
jones.about = ["American-style diner churns out seriously mouthwatering hand-blended milkshakes. It holds the number one spot among many milkshake lovers and it’s not hard to see and taste why. Flavors cover a wide range of different combinations, and it offers a ‘healthier’ alternative in its Blueberry Granola Yogurt “Slim Shake,” which doesn’t have as many calories as its sinful siblings.</br></br>Location:</br>Mr. Jones is at Greenbelt 5, Ayala Center, Makati."];
filling.about = ["Flavors include the classic three and its ‘premium’ flavors of Cookies & Cream, Ube, Avocado, Banana, and Carrot. </br></br>Location:</br>Filling Station is at P. Burgos. "];
rocket.about = ["Flavors cover 20 varieties including their “Original Shakes & Malt” (the three classic flavors) and the “Deluxe Shakes (P275),” which include flavors such as Chocolate Peanut Butter, Strawberry Banana, Oreo Cookies & Cream, and Big Apple.</br></br>Location:</br>Johnny Rockets is at Veranda, Robinsons Galleria; Eastwood Mall, Eastwood, Quezon City. "];
charlie.about = ["Its milkshakes though are drool-worthy too. Flavors are vanilla, chocolate, strawberry and pineapple.</br></br>Location:</br>Charlie’s is at 16 East Kapitolyo Drive, Pasig; G/F Ronac Art Center, Ortigas Ave., Greenhills, San Juan. "];
seattle.about = ["Whether or not theirs is the best coffee among all the franchised coffee shops is still up for debate, but their milkshake is a definite winner. Flavors include the classic three and avocado. (They also have Classic Javanilla Shakes for those who prefer their shakes with a caffeine kick.)</br></br>Location:</br>Bonifacio High Street City Center, Q3, 9th Ave;Fort Bonifacio, Taguig"];
kabig.about = ["Though considered novel to Manila’s halo-halo playing field, Kabigting’s has been a favorite in Pampanga, especially in Arayat where it hails from. Now, there’s no need to troop up north. Every cup brims over with extra-fine ice that is measured to yield the smoothest, creamiest halo-halo.</br></br>Location:</br>528 Banawe Avenue corner Calamba Street, Quezon City "];
milk.about = ["You’ll just find yourself surprised that you’re already down to the last spoonful ofyour halo-halo after only a few minutes. Then you’ll start wishing it came in bottomless option. Consistency is key to this Milky Way classic: in the amount of ingredients you get from top to bottom, in the flay ice that’s been a trademark all these years, and in that guaranteed satisfaction you get once finish a glass or two.</br></br>Location:</br>928 Pasay Roa(A. Arnaiz Avenue), Makati City "];
nath.about = ["Every spoonful is a happy mix of homey favorites: a lot of beans, creamy leche flan, some lovely red gulaman, and a generous sprinkling of cornflakes. That serving of golden cereal provides a good crunch and a desirable contrast to the smooth and heavenly milk-ice combination.</br></br>Location:</br>GF02 Metro Pointe Cwenter, P. Guevarra Street corner N. Averilla St. San Juan City, and Katipunan Avenue, Quezon City "];
razon1.about = ["Perfect textures continue to keep this Guagua pride at the top of the charts. The leche flan is firm and creamy; the ice extra fine and light; the banana is perfectly tender and sweetened; the macapuno is both chewy and soft to the bite. It’s a tale of how simple things one right can never fail. Using just four ingredients, Razon’s already has its own die-hard following.</br></br>Location:</br>Razon has various locations around Metro Manila"];
arist.about = ["That generous scoop, however, gives the mix a distinct creaminess and a vibrant purple tint that perfectly matches the golden summer sun. you also scoop out a lot of loveable langka every time, giving each bite that rich sweetness. </br></br>Location:</br>432 San Andres Street, Malate, Manila"];
gong.about = ["At Gong Cha, you can really tell that the tea is made fresh, but the best part is the Gong Cha Milk Cream, hands down the best cream topping so far. It’s a combination of sweet, creamy and salty, and so good that we’ve been tempted to order just a cup of the milk cream alone. Must tries: house Special Milk Earl grey Tea</br></br>Location:</br>Gong Cha has various locations around Metro Manila"];
dau.about = ["Daude (da-you-deh) is more a tea place than a bubble tea place but they have their own version of the popular beverage. You can order your tea with sago or gulaman as sinkers. Must Tries: Black/Green Tea Con Leche</br></br>Location:</br>Da U De has various locations around Metro Manila"];
chat.about = ["Chatime’s sinkers menu is one of the most comprehensive in the city. The bright interiors of their shops invite one to sip and linger, so make sure you have time to hang out.  This is not an order-and-run place.  Must tries: Chatime Roasted Milk Tea</br></br>Location:</br>Chatime has various locations around Metro Manila"];
tokyo.about = ["Tokyo Bubble Tea seperates itself from the bunch by being an actual restaurant that serves filling meals – apart from being a bubble tea place and bakery. The cream they serve on top has got to be the thickest., it’s like ordering a milkshake tea. Must tries: JCC Roasted Tea </br></br>Location:</br>Tokyo Bubble Tea has various locations around Metro Manila"];
saint.about = ["Saint’s Alp adds good dollop of cream to their Milk Moustache tea lineup, through the cream can be a bit too sweet with its heavy vanilla flavor overpowering the saltiness of the cream. The interiors make them a favorite hangout among students and suits. Must Tries: Milk Moustache Black Tea</br></br>Location:</br>Saint Alps has various locations around Metro Manila"];
function OverlayLugaw() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// choi lugaw
	var div = document.createElement("h3");
	var name = "Mr. Choi Kitchen";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/LugawPNG/choi.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = choi.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// dragon lugaw
	var div = document.createElement("h3");
	var name = "Dragon Noodle Center";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/LugawPNG/dragon.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = dragon.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// northpark lugaw
	var div = document.createElement("h3");
	var name = "North Park";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/LugawPNG/northpark.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = north.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// superbowl lugaw
	var div = document.createElement("h3");
	var name = "Super Bowl of China";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/LugawPNG/superbowl.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = bowl.about[0];
	document.getElementById("content5d").appendChild(diva);
	// leching lugaw
	var div = document.createElement("h3");
	var name = "Le Ching Tea House";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/LugawPNG/leching.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = leching.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlayPancake() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// mamou 
	var div = document.createElement("h3");
	var name = "Mamou";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/PancakesPNG/mamou.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = mamou.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// pancakehouse 
	var div = document.createElement("h3");
	var name = "Pancake House";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/PancakesPNG/PancakeHouse.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = pancakehouse.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// butterdiner
	var div = document.createElement("h3");
	var name = "Butter Diner";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/PancakesPNG/ButterDiner.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = butter.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// brida bistro
	var div = document.createElement("h3");
	var name = "Brida Bistro";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/PancakesPNG/Brida.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = brida.about[0];
	document.getElementById("content5d").appendChild(diva);
	// Grams diner
	var div = document.createElement("h3");
	var name = "Gram's Diner";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/PancakesPNG/grams.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = grams.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlayTapsi() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// matys 
	var div = document.createElement("h3");
	var name = "Matys Tapsilog";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/TapsilogPNG/Matys.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = matys.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// goodah 
	var div = document.createElement("h3");
	var name = "Goodah";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/TapsilogPNG/Goodah.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = goodah.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// sinangag express
	var div = document.createElement("h3");
	var name = "Sinangag Express";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/TapsilogPNG/Original.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = original.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// rufos
	var div = document.createElement("h3");
	var name = "Rufo's Tapa";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/TapsilogPNG/Rufos.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = rufo.about[0];
	document.getElementById("content5d").appendChild(diva);
	// Rodic's
	var div = document.createElement("h3");
	var name = "Rodics's";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/TapsilogPNG/Rodics.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = rodic.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlayPares() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// paresmami 
	var div = document.createElement("h3");
	var name = "Original Pares Mami House";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/ParesPNG/Originalpares.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = paresmami.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// cocoy 
	var div = document.createElement("h3");
	var name = "Cocoy mami House Restaurant";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/ParesPNG/cocoy.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = cocoy.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// house
	var div = document.createElement("h3");
	var name = "Pares Mami House";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/ParesPNG/Paresmami.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = house.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// king
	var div = document.createElement("h3");
	var name = "Noodles King Pares House";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/ParesPNG/NoodlesKing.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = king.about[0];
	document.getElementById("content5d").appendChild(diva);
	// Partners
	var div = document.createElement("h3");
	var name = "Original Partners Pares and Mami House";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/ParesPNG/Partners.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = partner.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlaySisig() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// Lab  
	var div = document.createElement("h3");
	var name = "LaB Gastropub";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/SisigPNG/Lab.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = lab.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// jimmy 
	var div = document.createElement("h3");
	var name = "Mang Jimmy’s";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/SisigPNG/MangJimmy.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = jimmy.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// hooray
	var div = document.createElement("h3");
	var name = "Sisig Hooray";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/SisigPNG/Hooray.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = hooray.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// crisostomo
	var div = document.createElement("h3");
	var name = "Crisostomo";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/SisigPNG/Crisistomo.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = crisostomo.about[0];
	document.getElementById("content5d").appendChild(diva);
	// razon
	var div = document.createElement("h3");
	var name = "Razon’s of Guagua";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/SisigPNG/razon.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = razon.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlaySteak() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// tivoli  
	var div = document.createElement("h3");
	var name = "The Tivoli";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/StreakPNG/Tivoli.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = tivoli.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// fireplace 
	var div = document.createElement("h3");
	var name = "The Fireplace";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/StreakPNG/Fireplace.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = fireplace.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// mamou
	var div = document.createElement("h3");
	var name = "Mamou";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/StreakPNG/Mamou.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = mamou1.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// melos
	var div = document.createElement("h3");
	var name1 = "Melo's Steak";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name1;
	
	var img = document.createElement("img");
	link = "resources/images/StreakPNG/Melos.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = melos.about[0];
	document.getElementById("content5d").appendChild(diva);
	// red
	var div = document.createElement("h3");
	var name2 = "Red Steak";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name2;
	
	var img = document.createElement("img");
	link = "resources/images/StreakPNG/Red.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = red.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlayBulalo() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// vivian 
	var div = document.createElement("h3");
	var name = "Tapsi ni Vivian at Bulalohan";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BulaloPNG/vivian.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = vivian.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// pat
	var div = document.createElement("h3");
	var name = "Pat - Pat's Kansi House";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BulaloPNG/pats.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = pat.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// rj 
	var div = document.createElement("h3");
	var name = "R&J Bulalohan and tapsilogan";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BulaloPNG/RnJ.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = rj.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// fiesta
	var div = document.createElement("h3");
	var name = "Bulalo Fiesta";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BulaloPNG/fiesta.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = fiesta.about[0];
	document.getElementById("content5d").appendChild(diva);
	// freska
	var div = document.createElement("h3");
	var name = "Freska";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BulaloPNG/Freska.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = freska.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlayCrispy() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// livestock 
	var div = document.createElement("h3");
	var name = "Livestock's Crispy Pata";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/CrispypataPNG/livestock.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = livestock.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// tipsy
	var div = document.createElement("h3");
	var name = "Tipsy Pig's Crispy Pata";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/CrispypataPNG/Tipsy.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = tipsy.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// analisa 
	var div = document.createElement("h3");
	var name = "Analisa's Crispy Pata";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/CrispypataPNG/Analisa.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = analisa.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// jamicos
	var div = document.createElement("h3");
	var name = "Jamicos Crispy Pata";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/CrispypataPNG/Jamico.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = jamicos.about[0];
	document.getElementById("content5d").appendChild(diva);
	// cerchio
	var div = document.createElement("h3");
	var name = "Cerchio's oven baked Crispy Pata";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/CrispypataPNG/Cerchio.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = cerchio.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlayBurger() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// chef
	var div = document.createElement("h3");
	var name = "Chef's Burger";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BurgerPNG/Elberts.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = elbert.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// demi
	var div = document.createElement("h3");
	var name = "Demi-Poung Burger at Lusso";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BurgerPNG/Lusso.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = demi.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// fc
	var div = document.createElement("h3");
	var name = "FC Burger at Florabel";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BurgerPNG/Florabel.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = fc.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// black
	var div = document.createElement("h3");
	var name = "U.S Black Angus Beef Burger at Chef Jessie";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BurgerPNG/Jessie.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = black.about[0];
	document.getElementById("content5d").appendChild(diva);
	// smoked
	var div = document.createElement("h3");
	var name = "Smoked Bacon Cheeseburger at Blackwood Bistro";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BurgerPNG/Blackwood.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = smoked.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlayPancit() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// aling
	var div = document.createElement("h3");
	var name = "Aling Norma's Pancit";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/PancitPNG/AlingNorma.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = aling.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// pakibalot
	var div = document.createElement("h3");
	var name = "Pakibalot Panciteria";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/PancitPNG/Pakibalot.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = pakibalot.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// buddys
	var div = document.createElement("h3");
	var name = "North Park";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/PancitPNG/Buddy.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = buddy.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// luyong
	var div = document.createElement("h3");
	var name = "Luyong Restaurant";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/PancitPNG/Luyong.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = luyong.about[0];
	document.getElementById("content5d").appendChild(diva);
	// ado
	var div = document.createElement("h3");
	var name = "Ado's Panciteria";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/PancitPNG/Ado.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = ado.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlayCupcake() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// karen
	var div = document.createElement("h3");
	var name = "Karen's Kitchen";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/CupcakePNG/Karens.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = karen.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// ucc
	var div = document.createElement("h3");
	var name = "UCC Cafe Terraces";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/CupcakePNG/Ucc.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = ucc.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// slice
	var div = document.createElement("h3");
	var name = "Slice Cupcake";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/CupcakePNG/Slice.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = slice.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// sonja
	var div = document.createElement("h3");
	var name = "Cupcakes by Sonja";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/CupcakePNG/Sonja.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = sonja.about[0];
	document.getElementById("content5d").appendChild(diva);
	// baker
	var div = document.createElement("h3");
	var name = "Bakers Fresh";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/CupcakePNG/Bakers.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = baker.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlayBbq() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// nene
	var div = document.createElement("h3");
	var name = "Aling Nene's Bbq Restaurant";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BBQPNG/AlingNene.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = nene.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// danny
	var div = document.createElement("h3");
	var name = "Dannylicious";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BBQPNG/Dannylicious.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = danny.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// aristocrat
	var div = document.createElement("h3");
	var name = "Aristocrat";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BBQPNG/Aristocrat.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = aristocrat.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// amber
	var div = document.createElement("h3");
	var name = "Amber Golden Chain of Restaurants";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BBQPNG/Amber.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = amber.about[0];
	document.getElementById("content5d").appendChild(diva);
	// reyes
	var div = document.createElement("h3");
	var name = "Reyes Bbq";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/BBQPNG/Reyes.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = reyes.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlayIcedtea() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// cibo
	var div = document.createElement("h3");
	var name = "Lemon Iced Tea at Cibo";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/IceteaPNG/Cibo.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = cibo.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// dalandan
	var div = document.createElement("h3");
	var name = "Dalandan Iced Tea at M Cafe";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/IceteaPNG/MCafe.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = dalandan.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// army
	var div = document.createElement("h3");
	var name = "Libertea at Army Navy";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/IceteaPNG/ArmyNavy.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = army.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// real
	var div = document.createElement("h3");
	var name = "Real Leaf Honey Lychee at California Pizza Kitchen";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/IceteaPNG/Cpk.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = amber.about[0];
	document.getElementById("content5d").appendChild(diva);
	// lugang
	var div = document.createElement("h3");
	var name = "Cantonese Iced Tea at Lugang Cafe";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/IceteaPNG/Lugang.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = lugang.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlayMilkShake() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// jones
	var div = document.createElement("h3");
	var name = "Mr. Jones Classic Chocolate";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/MilkshakePNG/Mrjones.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = jones.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// filling
	var div = document.createElement("h3");
	var name = "Filling Station's Classic Chocolate Milkshake";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/MilkshakePNG/Filling.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = filling.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// rocket
	var div = document.createElement("h3");
	var name = "Johnny Rockets' Malt Chocolate Shake";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/MilkshakePNG/Johnny.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = rocket.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// charlie
	var div = document.createElement("h3");
	var name = "Charlie's Vanilla Milkshake";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/MilkshakePNG/Charlie.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = charlie.about[0];
	document.getElementById("content5d").appendChild(diva);
	// seattle
	var div = document.createElement("h3");
	var name = "Seattle’s Best Coffee’s Strawberry Milkshake ";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/MilkshakePNG/Seattle.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = seattle.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlayHaloHalo() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// kabig
	var div = document.createElement("h3");
	var name = "Kabigting's Halo halo";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/HalohaloPNG/Kabigting.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = kabig.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// mlik
	var div = document.createElement("h3");
	var name = "Milky Way Halo-Halo";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/HalohaloPNG/Milkyway.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = milk.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// nath
	var div = document.createElement("h3");
	var name = "Nathaniel's Halo-Halo";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/HalohaloPNG/Nathaniel.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = nath.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// razon1
	var div = document.createElement("h3");
	var name = "Razon's Halo-Halo";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/HalohaloPNG/Razon.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = razon1.about[0];
	document.getElementById("content5d").appendChild(diva);
	// arist
	var div = document.createElement("h3");
	var name = "Aristocrat Halo-Halo Special";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/HalohaloPNG/Aristocrat.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = arist.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function OverlayMilkTea() {
	document.getElementById("contentTop5").style.display = "block";
	document.getElementById("content5a").style.display = "block";
	document.getElementById("content5b").style.display = "block";
	document.getElementById("content5c").style.display = "block";
	document.getElementById("content5d").style.display = "block";
	document.getElementById("content5e").style.display = "block";
	document.getElementById("closeDivTop5").style.display = "block";
	document.getElementById("content1").style.display = "none";
	document.getElementById("content2").style.display = "none";
	document.getElementById("content3").style.display = "none";
	document.getElementById("content4").style.display = "none";
	// gong
	var div = document.createElement("h3");
	var name = "Gong Cha";
	document.getElementById("content5a").appendChild(div);
	document.getElementById("content5a").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/MilkteaPNG/Gongcha.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5a").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = gong.about[0];
	document.getElementById("content5a").appendChild(diva); 
	// dau
	var div = document.createElement("h3");
	var name = "Da.u.de";
	document.getElementById("content5b").appendChild(div);
	document.getElementById("content5b").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/MilkteaPNG/Daude.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5b").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = dau.about[0];
	document.getElementById("content5b").appendChild(diva); 
	// chat
	var div = document.createElement("h3");
	var name = "Chattime";
	document.getElementById("content5c").appendChild(div);
	document.getElementById("content5c").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/MilkteaPNG/Chatime.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5c").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = chat.about[0];
	document.getElementById("content5c").appendChild(diva); 
	// tokyo
	var div = document.createElement("h3");
	var name = "Tokyo Bubble Tea";
	document.getElementById("content5d").appendChild(div);
	document.getElementById("content5d").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/MilkteaPNG/Tokyo.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5d").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = tokyo.about[0];
	document.getElementById("content5d").appendChild(diva);
	// saint
	var div = document.createElement("h3");
	var name = "Saint's Alp Teahouse";
	document.getElementById("content5e").appendChild(div);
	document.getElementById("content5e").innerHTML = name;
	
	var img = document.createElement("img");
	link = "resources/images/MilkteaPNG/Saint.png";
	img.setAttribute("src",link);
	img.setAttribute("height","100px");
	img.setAttribute("width","150px");
	document.getElementById("content5e").appendChild(img);
	
	var diva = document.createElement("p");
	diva.innerHTML = saint.about[0];
	document.getElementById("content5e").appendChild(diva);
}
function Restore(){
	document.getElementById("contentTop5").style.display = "none";
	document.getElementById("content5a").style.display = "none";
	document.getElementById("content5b").style.display = "none";
	document.getElementById("content5c").style.display = "none";
	document.getElementById("content5d").style.display = "none";
	document.getElementById("content5e").style.display = "none";
	document.getElementById("closeDivTop5").style.display = "none";
	document.getElementById("content1").style.display = "block";
	document.getElementById("content2").style.display = "block";
	document.getElementById("content3").style.display = "block";
	document.getElementById("content4").style.display = "block";
	document.getElementById("content5a").innerHTML = '';
	document.getElementById("content5b").innerHTML = '';
	document.getElementById("content5c").innerHTML = '';
	document.getElementById("content5d").innerHTML = '';
	document.getElementById("content5e").innerHTML = '';
}