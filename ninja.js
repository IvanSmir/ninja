class ninja{
    constructor(name){
        this.name = name;
        this.health = 100;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log(this.name);
    }
    showStats(){
        console.log(this.name, this.health, this.speed, this.strength);
    }
    drinkSake(){
        this.health += 10;
    }
}