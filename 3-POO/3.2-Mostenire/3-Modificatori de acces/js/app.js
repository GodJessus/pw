class PC {
	constructor(brand){
		this.brand = brand;
		this._cpu = "Intel"
		this.display = null;
	}

	get cpu (){
		return this._cpu
	}

	setCPU(cpu){
		this._cpu = cpu;
	}


	runBIOS(){
		console.log(`CPU: ${this._cpu}`);
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


class StationaryPC extends PC{

}

class Notebook extends PC{

	constructor(brand){
		super();
		this.brand = brand;
		this.display = 'SuperDisplay';
	}

	run(){
		if(this.display !== null) {
			this.runBIOS();
			this.runOS();
			console.log('PC started');
			console.log(`PC brand ${this.brand}`);
		} else {
			console.log('No display found');
		}
		
	}
}

const stationaryPC = new StationaryPC("Simple");
console.log(stationaryPC.cpu);
stationaryPC.run();
stationaryPC.restart();
stationaryPC.shutdown();


const notebook = new Notebook("Super");
notebook.setCPU("AMD");
notebook.run();
notebook.restart();
notebook.shutdown();