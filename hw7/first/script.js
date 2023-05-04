const input1 = document.querySelector('.one')
const input2 = document.querySelector('.two')
const move = document.querySelector('.move')

move.onclick = () => {
    if (input1.value) {
        input2.value = input1.value;
        input1.value = '';
    }
}

const holder = document.querySelector('.holder')
addEventListener('blur', event => {
    if (holder.value) {
        holder.placeholder = holder.value
        holder.value='';
    }
})