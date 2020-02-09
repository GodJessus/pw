document.getElementById('calculateBut').addEventListener("click", function(){
	const x = Number(document.getElementById('x').value);
	const y = Number(document.getElementById('y').value);
	document.getElementById('result').innerHTML = x + y;
});

document.getElementById("colorListBut").addEventListener("click", function(){
	const listItems = document.querySelectorAll("ul.writers li");
	console.log(listItems);

	listItems.forEach(function(listItem) {
	  listItem.style.backgroundColor = "green";
	});
});


document.querySelectorAll("ul.disciplines li").forEach(function(element){
	element.addEventListener("click", function(){
		element.style.backgroundColor = "green";
	});
});


setTimeout(function(){
	const oldValue = +document.getElementById("counter").value;
	const newValue = oldValue + 1;
	document.getElementById("counter").value = newValue;
}, 1000);


setInterval(function(){
	const oldValue = +document.getElementById("counterCountinuous").value;
	if(oldValue < 10){
		const newValue = oldValue + 1;
		document.getElementById("counterCountinuous").value = newValue;
	}
	
}, 1000);