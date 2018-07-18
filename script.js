//KONIECZNIE TRZEBA ZADEKLAROWAĆ ELEMENTY

var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var lis = document.querySelector("li");


function inputlength() {
	return input.value.length;
} 

function createListElement() { //tu już sama funkcja dodawania elementu
		var li = document.createElement("li");  //tworzy nowy element 
		li.appendChild(document.createTextNode(input.value)); //przypisuje tekst/wartośćnowego elementu
		ul.appendChild(li); //dodaje stworzony element z nazwą do listy
		input.value = "";
}

function AddLiAfterClick () { //funckja sprawdza czy text wpisany nie jest pusty
	if (inputlength() > 0){
		createListElement();
	}
}


function AddLiAfterEnter (event) {
		if (inputlength() > 0 && event.keyCode === 13 ){ //funckja sprawdza czy text wpisany nie jest pusty i czy przycsk wcisnięty to był enter (numer 13)
		createListElement();
	}
}

button.addEventListener("click", AddLiAfterClick); //dodaje element po kliknieciu przycisku

input.addEventListener("keypress", AddLiAfterEnter); //dodaje element po nacisnieciu enter

lis.addEventListener("click", function(){
	console.log($(this).parent('li').index());
})