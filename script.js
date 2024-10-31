function firstChar(text) {
  // your code here
	let x=text.trim();
	if(text=="") return "";
	return x.charAt(0).toUpperCase()
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");   
alert(firstChar(text));     
