let bg = prompt('enter bg color of the page', 'lightblue');
document.body.style.backgroundColor = bg;

let font = prompt('enter font type', 'arial');
document.body.style.fontFamily = font;

let zag = prompt('enter main text direction', 'center');
document.querySelector('.zagolovog').style.justifyContent = zag;

let par = prompt('enter block1 color', 'yellow')
document.querySelector('.block').style.backgroundColor = par;


let links = prompt('enter links color', 'black')
for (let i = 0; i < document.querySelectorAll('a').length; i++) {
    document.querySelectorAll('a')[i].style.color = links
}


let more = prompt('enter text color in block', 'grey')
document.querySelector('.more').style.color = more;

let moreSIZE = prompt('enter text size in block', 'larger')
document.querySelector('.block').style.fontSize = moreSIZE;

let moreWEIGHT = prompt('enter text weight in block', 'bolder')
document.querySelector('.block').style.fontWeight = moreWEIGHT;

let list = prompt('enter list style', 'circle')
document.querySelector('ul').style.listStyleType = list;

let col = prompt('enter text color in block', 'orange')
document.querySelector('ul').style.color = col;




