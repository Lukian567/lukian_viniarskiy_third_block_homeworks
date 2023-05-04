let a = prompt('enter some words')
let b = a.split(" ");
let c = b.length-1;
console.log(c);



let mail = prompt('enter email');
function checkmail() {
    if (mail.startsWith("@") || mail.endsWith("@"))  {
        alert(`couldn't done`);
    }else if (mail.includes("@")){
        alert('all ok')
    }else {
        alert(`isn't email`)
    }
}

checkmail(mail)




let text = prompt('enter some text')
let check = 0;
for(let i = 0; i < text.split(" ").length;i++){
    if(text.split(" ")[i]==="html"){
        check++
    }
}
console.log(`this text contains:${check} words html`);



let txt = prompt('enter URL', 'https://www.google.com/')

function forward() {
    let txt = prompt('enter URL', 'https://www.google.com/')
    for (let h = 0; h <= txt.length; h++) {
        if (txt.includes('https://')) {
            console.log(txt.replace('https://', ' '));
        } else if (txt.includes('http://')) {
            console.log(txt.replace('http://', ' '));
        } else {
            console.log(`isn't a link`);
        }

    }
}

forward()



