class ElectricAppliance {
  constructor(name, power) {
    this.name = name;
    this.power = power;
    this.pluggedIn = false;
  }

  turnOn() {
    if (!this.pluggedIn) {
      this.pluggedIn = true;
      console.log(`${this.name} включен в розетку.`);
    } else {
      console.log(`${this.name} уже включен.`);
    }
  }

  turnOff() {
    if (this.pluggedIn) {
      this.pluggedIn = false;
      console.log(`${this.name} выключен из розетки.`);
    } else {
      console.log(`${this.name} уже выключен.`);
    }
  }
}

class DeskLamp extends ElectricAppliance {
  constructor(name, power, brightness) {
    super(name, power);
    this.brightness = brightness;
  }

  adjustBrightness(newBrightness) {
    if (this.pluggedIn) {
      this.brightness = newBrightness;
      console.log(`${this.name} яркость установлена на ${newBrightness}.`);
    } else {
      console.log(`${this.name} не может менять яркость, так как выключен.`);
    }
  }
}

class Computer extends ElectricAppliance {
  constructor(name, power, brand) {
    super(name, power);
    this.brand = brand;
  }

  runProgram(program) {
    if (this.pluggedIn) {
      console.log(
        `${this.name} (${this.brand}) запускает программу: ${program}.`
      );
    } else {
      console.log(
        `${this.name} (${this.brand}) выключен. Сначала включите его.`
      );
    }
  }
}

const deskLamp = new DeskLamp("Настольная лампа", 20, 50);
const computer = new Computer("Компьютер", 500, "ABC Corp");

deskLamp.turnOn();
computer.turnOn();

deskLamp.adjustBrightness(75);
computer.runProgram("Text Editor");

const totalPower = deskLamp.power + computer.power;
console.log(`Суммарная потребляемая мощность: ${totalPower} Вт.`);
