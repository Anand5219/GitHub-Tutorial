const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const UserList = document.querySelector('#users');
myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    console.log(nameInput.value);
    if(nameInput.value===''|| emailInput.value===''){
        msg.classList.add('error');
msg.innerHTML='Please Enter all Fields';
setTimeout(() => msg.remove(),5000);
    }
    else{
        const li =document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
        UserList.appendChild(li);
        nameInput.value='';
        emailInput.value='';

    }

}