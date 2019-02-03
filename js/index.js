let navigationLink = document.querySelectorAll('.nav-link');
let navLinks = Array.from(navigationLink)

navLinks.forEach(function (element) {
  element.addEventListener('mouseover', (event) => {
    event.target.style.color = 'blue';
    event.preventDefault();
    event.stopPropagation();
  })
  element.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
    event.preventDefault();
    event.stopPropagation();
  })
  element.addEventListener('click', (event) => {
    event.target.style.fontSize = '20px';
    event.preventDefault();
    event.stopPropagation();
  })
})

let lastLink = document.querySelector('#lastlink');
lastLink.addEventListener('dblclick', (event) => {
  alert('We are busy! Contact us later')
})

let buttons = document.querySelectorAll('.btn');
let buttonEvents = Array.from(buttons);

buttonEvents.forEach(function (element) {
  element.addEventListener('click', (event) => {
    event.target.style.backgroundColor = 'black';
  })
  element.addEventListener('click', (event) => {
    alert('You are signed up for your trip!')
  })
})

let nav = document.querySelector('.main-navigation');
nav.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'pink';
    event.stopPropagation();
})
nav.addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'white';
    event.stopPropagation();
})

//Having problems with this - When you mouseover the whole thing, it turns pink. When you mouseover parts of the nav, their backgrounds turn pink and I don't know how to stop it!

let headings = document.querySelectorAll('h2');
let headingItems = Array.from(headings);

headingItems.forEach(function (element) {
  element.addEventListener('mouseenter', (event) => {
    event.target.style.color = 'green';
    event.target.style.fontSize = '30px'
  })
  element.addEventListener('mouseleave', (event) => {
    event.target.style.color = 'black';
    event.target.style.fontSize = '3.6rem'
  })
})
