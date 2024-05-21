let penguin = "Pingouin";
let polarBear = "Ours polaire";

let today = new Date();

let locations = ["banquise", "batman", "Madagascar", "l'age de glace"];

console.log(typeof penguin);

for (const location of locations) {
    console.log(location);
}

let morse = {
    name : "MorseAttack",
    age : 12,
    gender : "M"
}

for (const morseKey in morse) {
    console.log(morseKey);
    console.log(morse[morseKey]);
}

locations.forEach(function(value,index) {
    console.log(value);
});


(function hello() {
    console.log("Hello world!");
})()

const hell = function() {
    console.log("Hell world!");
}

hell()