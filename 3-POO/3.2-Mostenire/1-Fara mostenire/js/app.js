class Rabbit{

	constructor(){
		this.animalType = "Rabbit";
	}

	move(){
		console.log(`${this.animalType} RUN`);
	}

	eat(){
		console.log(`${this.animalType} Eat`);
	}
}

class Snake{

	constructor(){
		this.animalType = "Snake";
	}

	move(){
		console.log(`${this.animalType} RUN`);
	}

	eat(){
		console.log(`${this.animalType} Eat`);
	}
}


class Bird{

	constructor(){
		this.animalType = "Bird";
	}

	move(){
		console.log(`${this.animalType} RUN`);
	}

	eat(){
		console.log(`${this.animalType} Eat`);
	}
}

const rabbit = new Rabbit();
rabbit.eat();
rabbit.move();

const snake = new Snake();
snake.move()
snake.eat();


const bird = new Bird();
bird.move()
bird.eat();