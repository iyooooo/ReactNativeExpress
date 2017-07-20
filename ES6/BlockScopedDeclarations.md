##Block Scoped Declarations

*实际上解决了block(for, if, switch等)没有限制var变量作用域的问题。

*使用var声明变量，block(for, if, switch等)中的变量和它同名的全局变量是一个“对象”，所以block中给var变量赋值会影响同名全局变量。
```javascript
"use strict";

var a =1;

if (true) {
    var a = 4;  // 覆盖同名的全局变量
    console.log(a);
}

function xx() {
    var a = 8;  // 不会覆盖同名的全局变量
    console.log(a);
}

xx();

console.log(a);

输出
4
8
4
```

*而，使用const, let声明变量，block(for, if, switch等)中的变量和它同名的全局变量是不同的“对象”，block中给const变量赋值不会影响同名全局变量。
```javascript
"use strict";
let b = 1;

if (true) {
    let b = 4;
    console.log(b);
}

function xx() {
    let b = 8;
    console.log(b);
}

xx();
console.log(b);

输出
4
8
1
```
```javascript
"use strict";
const b = 1;

if (true) {
    const b = 4;
    console.log(b);
}

function xx() {
    const b = 8;
    console.log(b);
}

xx();
console.log(b);

输出
4
8
1
```

##思考：
*（var， let , const 区别？function scope, block scope 区别？）

