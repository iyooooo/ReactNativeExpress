"use strict";

// class Cat {
//     static legCount = 4;
    
//     static function speak() {
//         console.log(`I,m cat! I have ${legCount} legs`);
//         console.log(`cat have ${legCount} legs`);
//     }
// }

// const cat = new Cat();
// Cat.legCount = 8;
// cat.legCount = 1;

// console.log(Cat.legCount);
// console.log(Cat.legCount());

// console.log(cat.legCount);
// console.log(cat.speak());

class Animal {
  constructor(name) {
    this.name = name
  }

  static beProud() {
    console.log(this.name)
  }

  printName() {
    console.log(this.name)
  }
}

const animal = new Animal('Cat')
animal.printName() // Cat
Animal.beProud() // Animal

Animal.beProud = ()=> {
    console.log('Human')
} // I AM AN ANIMAL
animal.printName = ()=> {
    console.log('Dog')
} // I AM AN ANIMAL

animal.printName() 
Animal.beProud()