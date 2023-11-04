//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").Vehicle;

class car extends VehicleModule {
  constructor(make, model, year, color, mileage) {
    super(make, model, year, color, mileage);
    this.maxPassengers = 5;
    this.passenger = 5;
    this.numberOfWheels = 5;
    this.maxSpeed = 5;
    this.fuel = 5;
    this.scheduleService = 5;
  }

  checkService() {
    if (this.milegae > 6000) {
      this.scheduleService = true;
      return this.scheduleService;
    }
  }
  start() {
    if (this.fuel > 0) {
      console.log("You started the car!");
      return (this.started = true);
    } else {
      console.log(" no fuel :<");
      return (this.started = false);
    }
  }
  loadPassenger(num) {
    if (this.passenger < this.maxPassengers) {
      if (num >= this.maxPassengers) {
        this.passenger = num;
        return this.passenger;
      }
    } else {
      console.log(this.model + "" + this.make + "is full");
    }
  }
}

let myCar = new car("ford", "expedition", "2003", "red", 50000);

myCar.start();
myCar.loadPassenger(5);
myCar.stop();
myCar.checkService();

console.log(myCar);
