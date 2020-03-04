
var all = document.getElementById("contenu");

var sommaire; 
let children = all.childNodes;

console.log(remplirSommaire(children));


let div = document.createElement("div");
div.innerHTML = remplirSommaire(children);
div.id="sommaire";
document.getElementsByTagName("body")[0].insertBefore(div, document.getElementsByTagName("body")[0].firstChild);


function remplirSommaire(children){
	var sommaire="";
	sommaire+= " <ol class='niveau1'>";

	for(child of children) {
		if(child.nodeType === Node.ELEMENT_NODE) {
			

			if(child.nodeName=="H1"){sommaire+="<li id='sommaire0'><a href='ancre0-0'></a>"+child.innerHTML;}
			if(child.nodeName=="DIV"){
				sommaire+="<ol class='niveau=2'>";
				for( child1 of child.childNodes) {
					if(child1.nodeType === Node.ELEMENT_NODE && child1.nodeName=="H2"){
					sommaire+="<li><a href='#ancre-0-0'>"+child1.innerHTML+"</a></li>";
					}
				}
				sommaire+="</ol></li>";
			}

		}

	}
	
	sommaire+="</ol>"
		
    return sommaire;

}
