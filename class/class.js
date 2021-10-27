class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Duck extends Animal {
  flyTo(destination) {
    console.log(`${this.name} is flying to the ${destination}`);
  }

  eat(food) {
    console.log(`${this.name} is eating ${food}`);
  }

  swimAt(place) {
    console.log(`${this.name} is swiming at the ${place}`);
  }
}

const duck = new Duck("Donald duck");
duck.flyTo("home"); // Donald duck is flying to the home
duck.eat("fish"); // Donald duck is eating fish
duck.swimAt("river"); // Donald duck is swiming at the river
