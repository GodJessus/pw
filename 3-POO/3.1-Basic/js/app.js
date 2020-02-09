class PC{

	constructor(brand){
		this.brand = brand;
		this.cpu = "Intel"
	}

	setCPU(cpu){
		this.cpu = cpu;
	}


	runBIOS(){
		console.log(`CPU: ${this.cpu}`);
		console.log("Run BIOS");
	}

	runOS(){
		console.log("Run OS");
	}

	run(){
		this.runBIOS();
		this.runOS();
		console.log('PC started')
		console.log(`PC brand ${this.brand}`)
	}

	shutdown(){
		console.log("PC shut down");
	}

	restart(){
		console.log("PC restart");
	}
}


const myPCSimple = new PC("Simple");
myPCSimple.run();
myPCSimple.restart();
myPCSimple.shutdown();

const myPCSuper = new PC("Super");
myPCSuper.setCPU("AMD");
myPCSuper.run();
myPCSuper.restart();
myPCSuper.shutdown();
