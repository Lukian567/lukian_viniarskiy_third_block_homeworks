const block1 = document.querySelector('.block1')
const block2 = document.querySelector('.block2')
const block3 = document.querySelector('.block3')

block1.addEventListener('click', () => {
    let url = prompt('enter image url')
    block1.style.backgroundImage = `url(${url})`
})
block2.addEventListener('click', () => {
    let url = prompt('enter image url')
    block2.style.backgroundImage = `url(${url})`
})
block3.addEventListener('click', () => {
    let url = prompt('enter image url')
    block3.style.backgroundImage = `url(${url})`
})

const cube = document.querySelector('.cube');
let cube_counter = 0;

cube.addEventListener('mouseover', () => {

    if (cube_counter === 0) {
        cube.style.backgroundColor = 'red'
    } else if (cube_counter === 1) {
        cube.style.backgroundColor = 'yellow'
    } else if (cube_counter === 2) {
        cube.style.backgroundColor = 'green'
    }
    cube_counter++;
    if (cube_counter === 3) {
        cube_counter = 0;
    }
})

cube.addEventListener('mouseout', () => {
    cube.style.backgroundColor = 'purple'
})

const secret = document.querySelector('.secret')
let txt = secret.innerHTML = 'У мене є секрет!'
secret.addEventListener('mouseover', () => {
    secret.style.backgroundColor = 'yellow'
    secret.style.color = 'black'
    txt = secret.innerHTML = 'хочеш знати який?'
})

secret.addEventListener('mousedown', () => {
    secret.style.backgroundColor = 'black'
    secret.style.color = 'yellow'
    txt = secret.innerHTML = 'а я тобі не скажу'
})

secret.addEventListener('mouseup', () => {
    secret.style.backgroundColor = 'yellow'
    secret.style.color = 'black'
    txt = secret.innerHTML = 'хочеш знати який?'
})

secret.addEventListener('mouseout', () => {
    secret.style.backgroundColor = 'rgb(218, 23, 218)'
    secret.style.color = 'black'
    txt = secret.innerHTML = 'У мене є секрет!'
    array.forEach(element => {

    });
})

const list = document.querySelectorAll('li');


list.forEach(li => {
    li.addEventListener('click', function () {
        let color = this.innerHTML;
        this.style.color = color;
    });
});