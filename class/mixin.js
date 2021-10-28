// 나는 행위를 담당하는 Mixin
const FlyToMixin = (superclass) =>
  class extends superclass {
    flyTo(destination) {
      console.log(`${this.name} is flying to the ${destination}`);
    }
  };

// 먹는 행위를 담당하는 Mixin
const EatMixin = (superclass) =>
  class extends superclass {
    eat(food) {
      console.log(`${this.name} is eating ${food}`);
    }
  };

// 헤엄치는 행위를 담당하는 Mixin
const SwimAtMixin = (superclass) =>
  class extends superclass {
    swimAt(place) {
      console.log(`${this.name} is swiming at the ${place}`);
    }
  };

// 믹스인을 탑재한 Mouse
class Mouse extends SwimAtMixin(EatMixin(Animal)) {
  /*...*/
}

const mickyMouse = new Mouse("Micky Mouse");
mickyMouse.swimAt("river");
