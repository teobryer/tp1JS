
var all = document.getElementById("contenu");

var sommaire; 
let children = all.childNodes;
// test22
console.log(remplirSommaire(children));


let div = document.createElement("div");
div.innerHTML = remplirSommaire(children);
div.id="sommaire";
div.style.width = "20%";

div.style.border = "solid 1px black";
document.getElementsByTagName("body")[0].insertBefore(div, document.getElementsByTagName("body")[0].firstChild);

let button = document.createElement("BUTTON");
button.innerHTML="Cacher sommaire";
button.addEventListener("click", cacherSommaire);
document.getElementsByTagName("body")[0].insertBefore(button, document.getElementsByTagName("body")[0].firstChild);


function remplirSommaire(children){
	var sommaire="";
	sommaire+= " <ol class='niveau1'>";
	var ancrebase = -1;
	for(child of children) {
		ancre2eniveau = 0;
		if(child.nodeType === Node.ELEMENT_NODE) {
			

			if(child.nodeName=="H1"){
				ancrebase++;
				sommaire+="<li id='sommaire0'><a href='#ancre-"+ancrebase+"'>"+child.innerHTML+"</a>";
				child.id="ancre-"+ancrebase;
				child.style.background="grey";
				
			
			}
			if(child.nodeName=="DIV"){
				sommaire+="<ol class='niveau=2'>";
				for( child1 of child.childNodes) {
					if(child1.nodeType === Node.ELEMENT_NODE && child1.nodeName=="H2"){
					sommaire+="<li><a href='#ancre-"+ancrebase+"-"+ancre2eniveau+"'>"+child1.innerHTML+"</a></li>";
					child1.id="ancre-"+ancrebase+"-"+ancre2eniveau;
					ancre2eniveau++;
					}
					
				}
				sommaire+="</ol></li>";
				
			}
			
			
		}
		
	}
	
	
	sommaire+="</ol>"
		
    return sommaire;

}

function cacherSommaire(){
	let sommaire = document.getElementById("sommaire");
	let button = document.getElementsByTagName("body")[0].firstChild;
	if(sommaire.style.display=="none"){
		sommaire.style.display="block";
		button.innerHTML = "Cacher sommaire"
		console.log("display : " + sommaire.style.display)
	}
	else {
		sommaire.style.display="none";
		console.log("display : " + sommaire.style.display)
		button.innerHTML = "Afficher sommaire";
	}
	
	

}


