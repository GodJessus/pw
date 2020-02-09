class User{
	constructor(){
		this.name = null;
		this.age = 0;
	}
	setName(value){
		if(value.length <= 10){
			this.name = value;
		}		
	}
	getName(){
		return this.name;
	}

	setAge(value){
		if(+value <= 100){
			this.age = value;
		}		
	}
	getAge(){
		return this.age;
	}
}

const user = new User();


document.getElementById("name").addEventListener("keyup", function(){
	user.setName(document.getElementById("name").value);
	
	document.getElementById("namePreview").innerHTML = user.getName();
	document.getElementById("name").value = user.getName();
});


document.getElementById("age").addEventListener("keyup", function(){
	user.setAge(document.getElementById("age").value);
	
	document.getElementById("agePreview").innerHTML = user.getAge();
	document.getElementById("age").value = user.getAge();
});