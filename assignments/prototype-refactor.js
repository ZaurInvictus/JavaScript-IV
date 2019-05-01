/* 

Prototype Refactor

1. Copy and paste your code or the solution from yesterday

2. Your goal is to refactor all of this code to use ES6 Classes. The console.log() statements should still return what is expected of them.
*/

////////////////////////////////////////////////////////////////////////////
//OLD CODE
////////////////////////////////////////////////////////////////////////////

    /*
    /////////////////////////////////////////////////
    function Fruit(ats) {
      this.type = ats.type;
      this.name = ats.name;
      this.isRipe = ats.isRipe;
      this.calories = ats.calories;
    }

    Fruit.prototype.shipped = function (destination) {
      console.log(`Shipping ${this.name} to ${destination}`);
    };

    Fruit.prototype.calculateCals = function () {
      console.log(`Calories in ${this.name} are ${this.calories * 200}`);
    };

    //BANANA  CODE
    function Banana(bananaAts) {
      Fruit.call(this, bananaAts);
      this.doMonkeysLikeIt = bananaAts.doMonkeysLikeIt;
    }

    Banana.prototype = Object.create(Fruit.prototype); // setiing BANANA prototype same as FRUIT prototype

    Banana.prototype.checkIfMonkeysLikeIt = function () {
      if (this.doMonkeysLikeIt) {
        return true;
      } else {
        return false;
      }
    };


    //KIWI CODE 
    function Kiwi(kiwiAts) {
      Fruit.call(this, kiwiAts);
      this.isFuzzy = kiwiAts.isFuzzy;
    }

    Kiwi.prototype = Object.create(Fruit.prototype);

    Kiwi.prototype.checkIfFuzzy = function () {
      if (this.isFuzzy) {
        return true;
      } else {
        return false;
      }
    }


    const newBanana = new Banana({
      doMonkeysLikeIt: true,
      type: 'Tree',
      name: 'Banana',
      isRipe: false,
      calories: 0.1
    });

    const newKiwi = new Kiwi({
      isFuzzy: true,
      type: 'Tree',
      name: 'Kiwi',
      isRipe: false,
      calories: 0.7
    });

    console.log(newBanana.shipped('Alaska'));
    console.log(newKiwi.shipped('Colorado'));
    console.log(newBanana.checkIfMonkeysLikeIt());
    console.log(newKiwi.checkIfFuzzy());
    console.log(newBanana.calculateCals());
    console.log(newKiwi.calculateCals());
*/

    

  ////////////////////////////////////////////////////////////////////////
  //REFCTORED CODE
  ////////////////////////////////////////////////////////////////////////

  class Fruit {
    constructor(ats) {
      this.type = ats.type;
      this.name = ats.name;
      this.isRipe = ats.isRipe;
      this.calories = ats.calories;
    }
    shipped(destination) {
      console.log(`Shipping ${this.name} to ${destination}`);
    };
    calculateCals() {
      console.log(`Calories in ${this.name} are ${this.calories * 200}`);
    };
  }

  //BANANA  CODE
  class Banana extends Fruit {
    constructor(bananaAts) {
      super(bananaAts);
      this.doMonkeysLikeIt = bananaAts.doMonkeysLikeIt;
    };

    checkIfMonkeysLikeIt() {
      if (this.doMonkeysLikeIt) {
        return true;
      } else {
        return false;
      }
    };
  }

  //KIWI CODE 
  class Kiwi extends Fruit {
    constructor(kiwiAts) {
      super(kiwiAts);
      this.isFuzzy = kiwiAts.isFuzzy;
    }
    checkIfFuzzy() {
      if (this.isFuzzy) {
        return true;
      } else {
        return false;
      }
    }
  }


  const newBanana = new Banana({
    doMonkeysLikeIt: true,
    type: 'Tree',
    name: 'Banana',
    isRipe: false,
    calories: 0.1
  });

  const newKiwi = new Kiwi({
    isFuzzy: true,
    type: 'Tree',
    name: 'Kiwi',
    isRipe: false,
    calories: 0.7
  });

  console.log(newBanana.shipped('Alaska'));
  console.log(newKiwi.shipped('Colorado'));
  console.log(newBanana.checkIfMonkeysLikeIt());
  console.log(newKiwi.checkIfFuzzy());
  console.log(newBanana.calculateCals());
  console.log(newKiwi.calculateCals());



  class Person {
  constructor(attributes) {
    this.age = attributes.age;
    this.name = attributes.name;
    this.homeTown = attributes.homeTown;
  }
  speak() {
    return `Hello, my name is ${this.name}`;
  }
}

class Zaur extends Person {
  constructor(attributes) {
    super(attributes);
    this.color = attributes.color;
  }
  tells() {
    return 'HELLLOO'
  }
}

const zaur = new Zaur({
 name: 'Zaur',
 age: '35',
 color: 'red'
});


console.log(zaur.name);
console.log(zaur.age);
console.log(zaur.speak());
console.log(zaur.tells());
console.log(zaur.color);

