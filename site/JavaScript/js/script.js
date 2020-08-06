function Dog(name) {
    this.name = name;
}

Dog.prototype.bark = function () {
    console.log(this.name + " like barking! Bark!");
    return "Hello";
}

var max = new Dog("Max", "buddy");
max.bark();

var hel = new Dog("Buddy");
console.log(hel.bark());
