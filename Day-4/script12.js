let main = document.getElementById('main');
console.log(main);

let nav = document.getElementById('nav');
console.log(nav);

let containers = document.getElementsByClassName('container')
console.log(containers) //write container[1] in console

let sel = document.querySelector('.container')
console.log("selector returns",sel)

let con = document.querySelector('#nav')
console.log(con)

let op = document.querySelector('#nav>li')
console.log(op)

let ops = document.querySelectorAll('#nav>li')
console.log(ops)