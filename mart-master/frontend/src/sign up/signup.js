document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.register-form').onsubmit = function(){
        const name = document.querySelector('#name').value;
        alert(`Hey ${name} congratulations! your are successfully signed up`);
    };
});

document.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.login-form').onsubmit = function(){
        const username = document.querySelector('#username').value;
        alert(`Welcome! back ${username},happy shooping!`);
    };
});
