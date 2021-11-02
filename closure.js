//we have an outer function named walk and an inner function named fly

function walk() {
  var dist = "1780 feet";

  function fly() {
    console.log("At " + dist);
  }

  return fly;
}

var flyFunc = walk(); //calling walk returns the fly function which is being assigned to flyFunc
//you would expect that once the walk function above is run
//you would think that JavaScript has gotten rid of the 'dist' var

flyFunc(); //Logs out 'At 1780 feet'
//but you still can use the function as above
//this is the power of closures

function by(propName) {
  return function (a, b) {
    return a[propName] - b[propName];
  };
}

const person1 = { name: "joe", height: 72 };
const person2 = { name: "rob", height: 70 };
const person3 = { name: "nicholas", height: 66 };

const arr_ = [person1, person2, person3];

const arr_sorted = arr_.sort(by("height")); // [ { name: 'nicholas', height: 66 }, { name: 'rob', height: 70 },{ name: 'joe', height: 72 } ]
