//Create ninja class
class Ninja {
    //define attributes
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }

    //create methods
    sayName() {
        console.log(`Ninja: ${this.name}`);
        return this;
    }

    showStats() {
        console.log(`Ninja: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`);
        return this;
    }

    drinkSake() {
        this.health += 10;
        return this;
    }
}

//new Sensei class that will inherit from Ninja
class Sensei extends Ninja {
    constructor(name, health =200, speed=10, strength=10, wisdom=10) {
        super(name, health, speed, strength);
        this.wisdom = wisdom;
    }

    speakWisdom() {
        this.drinkSake();
        console.log("I now have infinite wisdom!")
    }
}

//create and test Ninjas
const ninja1 = new Ninja("Billy", 15, 5, 7);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const ninja2 = new Ninja("Bobby", 10);
ninja2.sayName();
ninja2.showStats();
ninja2.drinkSake();
ninja2.showStats();

//create and test Sensei
const sensei1 = new Sensei("Wise Bobby");
sensei1.showStats();
sensei1.speakWisdom();