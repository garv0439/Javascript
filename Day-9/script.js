

console.log("garv")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');
const texts = document.querySelector('.text');
const header1 = document.querySelector('h1');
const header2 = document.querySelector('h2');
const header3 = document.querySelector('h3');

buttons.forEach(function (button) {
  console.log(button);
  button.addEventListener('click', function (event) {
    console.log(event);
    console.log(event.target);
    if (event.target.id === 'gray') {
      body.style.backgroundColor = event.target.id;
      texts.style.color = 'lightgreen'
      header1.style.color = 'black'
      header2.style.color = 'gold'
      header3.style.color = 'blue'
    }
    if (event.target.id === 'white') {
      body.style.backgroundColor = event.target.id;
      texts.style.color = 'blue'
      header1.style.color = 'black'
      header2.style.color = 'red'
      header3.style.color = 'gray'
    }
    if (event.target.id === 'blue') {
      body.style.backgroundColor = event.target.id;
      texts.style.color = 'yellow'
      header1.style.color = 'green'
      header2.style.color = 'black'
      header3.style.color = 'lightblue'
    }
    if (event.target.id === 'black') {
      body.style.backgroundColor = event.target.id;
      texts.style.color = 'red'
      header1.style.color = 'green'
      header2.style.color = 'gold'
      header3.style.color = 'lightblue'
    }

  });
});

