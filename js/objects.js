//Objects lesson

//Object Literal
var Robot = {  // Attribute
    fuel: 100,          // Listed inside are called parameters
    weapon: "laser",
    speed: 10,
    strength: 5,
    armor: "light",
//methods
    addFuel: function(tank) {
        this.fuel += tank;
    }, //Needs a comma unless it's the last c-bracket
    UpgradeArmor: function (change){
        this.armor = change;
    },
    ChangeWeapon: function (change) {
        this.weapon = change;
    }

}

Robot.speed += parseInt(prompt("Increase robot speed."));
alert("Our Robot now has a speed of " + Robot.speed);
Robot.UpgradeArmor(prompt("What should we upgrade the armor to?"));
alert("Our Robot now has " + Robot.armor + " armor.");
