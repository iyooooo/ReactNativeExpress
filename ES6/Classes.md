# Classes

* 类的静态方便、普通方法都可以重新赋值
```javascript
"use strict";

class Animal {
  constructor(name) {
    this.name = name
  }

  static beProud() {
    console.log(`beProud : ${this.name}`)
  }

  printName() {
    console.log(this.name)
  }
}

const animal = new Animal('Cat')
animal.printName()  // Cat
Animal.beProud()    // Animal


animal.printName = ()=> {
    console.log('Dog')  
} 
Animal.beProud = ()=> {
    console.log('Human')    
} 


animal.printName()  // Dog
Animal.beProud()    // Human
```

* 输出
Cat
Animal
Dog
Human