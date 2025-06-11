'use strict';
const heading = document.querySelector('h1');

// Changing the content in a tag
// heading.textContent = 'Mark'

// Changing other attributes
// heading.style.color = 'red'
// heading.style.fontSize = '100px'

// answers to the plus icon
const answer1 = document.querySelector('.answer-1')
const answer2 = document.querySelector('.answer-2')
const answer3 = document.querySelector('.answer-3')
const answer4 = document.querySelector('.answer-4')

//answer1.textContent = 'JavaScript'
// answer1.style.display = 'none'

console.log(heading.textContent)

console.log(answer1.textContent)

// these are the buttons
const button1 = document.querySelector('.button-1')
const button2 = document.querySelector('.button-2')
const button3 = document.querySelector('.button-3')
const button4 = document.querySelector('.button-4')


button1.addEventListener('click', function () {
    // console.log('click')
    //answer1.style.display = 'block';
    answer1.classList.toggle('hide')
    const icon = button1.querySelector('img');
    if (answer1.classList.contains('hide')) {
        icon.src = 'assets/images/icon-plus.svg';
    } else {
        icon.src = 'assets/images/icon-minus.svg';
    }
})


button2.addEventListener('click', function () {
    //answer2.style.display = 'block';
    answer2.classList.toggle('hide')
    const icon = button2.querySelector('img');
    if (answer2.classList.contains('hide')) {
        icon.src = 'assets/images/icon-plus.svg';
    } else {
        icon.src = 'assets/images/icon-minus.svg';
    }
})


button3.addEventListener('click', function () {
    //answer3.style.display = 'block';
    answer3.classList.toggle('hide')
    const icon = button3.querySelector('img');
    if (answer3.classList.contains('hide')) {
        icon.src = 'assets/images/icon-plus.svg';
    } else {
        icon.src = 'assets/images/icon-minus.svg';
    }
})


button4.addEventListener('click', function () {
    //answer4.style.display = 'block';
    answer4.classList.toggle('hide')
    const icon = button4.querySelector('img');
    if (answer4.classList.contains('hide')) {
        icon.src = 'assets/images/icon-plus.svg';
    } else {
        icon.src = 'assets/images/icon-minus.svg';
    }
})