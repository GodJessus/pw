class Animal{
	constructor(){
		this.animalType = "Animal";
	}

	move(){
		console.log(`${this.animalType} RUN`);
	}

	eat(){
		console.log(`${this.animalType} Eat`);
	}
}

class Rabbit extends Animal{

	constructor(){
		super();
		this.animalType = "Rabbit";
	}
}

class Snake extends Animal{

	constructor(){
		super();
		this.animalType = "Snake";
	}
}


class Bird extends Animal{

	constructor(){
		super();
		this.animalType = "Bird";
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