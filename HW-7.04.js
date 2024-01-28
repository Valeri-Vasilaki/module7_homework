function ElectricAppliance(name, power) {
  this.name = name;
  this.power = power;
  this.pluggedIn = false;
}

ElectricAppliance.prototype.turnOn = function () {
  if (!this.pluggedIn) {
    this.pluggedIn = true;
    console.log(`${this.name} включен в розетку.`);
  } else {
    console.log(`${this.name} уже включен.`);
  }
};

ElectricAppliance.prototype.turnOff = function () {
  if (this.pluggedIn) {
    this.pluggedIn = false;
    console.log(`${this.name} выключен из розетки.`);
  } else {
    console.log(`${this.name} уже выключен.`);
  }
};

function DeskLamp(name, power, brightness) {
  ElectricAppliance.call(this, name, power);
  this.brightness = brightness;
}

DeskLamp.prototype = Object.create(ElectricAppliance.prototype);
DeskLamp.prototype.constructor = DeskLamp;

DeskLamp.prototype.adjustBrightness = function (newBrightness) {
  if (this.pluggedIn) {
    this.brightness = newBrightness;
    console.log(`${this.name} яркость установлена на ${newBrightness}.`);
  } else {
    console.log(`${this.name} не может менять яркость, так как выключен.`);
  }
};

function Computer(name, power, brand) {
  ElectricAppliance.call(this, name, power);
  this.brand = brand;
}

Computer.prototype = Object.create(ElectricAppliance.prototype);
Computer.prototype.constructor = Computer;

Computer.prototype.runProgram = function (program) {
  if (this.pluggedIn) {
    console.log(
      `${this.name} (${this.brand}) запускает программу: ${program}.`
    );
  } else {
    console.log(`${this.name} (${this.brand}) выключен. Сначала включите его.`);
  }
};

const deskLamp = new DeskLamp("Настольная лампа", 20, 50);
const computer = new Computer("Компьютер", 500, "ABC Corp");

deskLamp.turnOn();
computer.turnOn();

deskLamp.adjustBrightness(75);
computer.runProgram("Text Editor");

const totalPower = deskLamp.power + computer.power;
console.log(`Суммарная потребляемая мощность: ${totalPower} Вт.`);
