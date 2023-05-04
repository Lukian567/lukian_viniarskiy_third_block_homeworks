const visible_alert = document.querySelector('.alert')
const button = document.querySelector('.btn')
const input = document.querySelector('.input_text')
const task_list = document.querySelector('.task_list')
const delete_alert = document.querySelector('.delete')


button.addEventListener('click', () => {
    if (!input.value) {
        visible_alert.style.display = 'flex'
        setTimeout(() => {
            visible_alert.style.display = 'none'
        }, 2000)
    }
    else {
        const new_task = document.createElement('div');
        const checkbox = document.createElement('input');
        const task_text = document.createElement('span');
        new_task.classList.add('tasks');
        checkbox.type = 'checkbox';
        task_text.textContent = input.value;
        new_task.appendChild(checkbox);
        new_task.appendChild(task_text);
        task_list.appendChild(new_task);
        input.value = '';
        checkbox.addEventListener('click', () => {
            if(task_list.children.length > 1 ){
                new_task.remove()

            }else{
                delete_alert.style.display='flex'
                setTimeout(()=>{
                    delete_alert.style.display='none'
                },2000)
            }
        });
    }
})


