const first_name = document.querySelector('.one');
const last_name = document.querySelector('.two');
const name_regex = /^[a-zA-Z]{1,20}$/;

const email = document.querySelector('.three');
const email_regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const phone = document.querySelector('.four');
const phone_regex = /^(\+38)?\s?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{2}[-.\s]?\d{2}$/;

const password = document.querySelector('.five');
const password_regex = /^[a-zA-Z0-9]{8,15}$/;

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    if (!name_regex.test(first_name.value)) {
        first_name.style.border = '2px solid red';
    } else {
        first_name.style.border = '2px solid green';
    }

    if (!name_regex.test(last_name.value)) {
        last_name.style.border = '2px solid red';
    } else {
        last_name.style.border = '2px solid green';
    }

    if (!email_regex.test(email.value)) {
        email.style.border = '2px solid red';
    } else {
        email.style.border = '2px solid green';
    }
    if (!phone_regex.test(phone.value)) {
        phone.style.border = '2px solid red';
    } else {
        phone.style.border = '2px solid green';
    }
    if (!password_regex.test(password.value)) {
        password.style.border = '2px solid red';
    } else {
        password.style.border = '2px solid green';
    }

});


