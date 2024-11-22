var namePattern = /^[a-zA-Z\s]{3,}$/;
var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

function signUp() {
    var Name = document.getElementById('Name');
    var signupEmail = document.getElementById('signupEmail');
    var signupPassword = document.getElementById('signupPassword');
    var existMsg = document.getElementById('exist');

    var name = Name.value.trim();
    var email = signupEmail.value.trim();
    var password = signupPassword.value;

    if (!name || !email || !password) {
        existMsg.innerHTML = 'All fields are required';
        existMsg.style.color = 'red';
        return;
    }

    if (!namePattern.test(name)) {
        existMsg.innerHTML = 'Name must be at least 3 characters and contain only letters';
        existMsg.style.color = 'red';
        return;
    }

    
    if (!emailPattern.test(email)) {
        existMsg.innerHTML = 'Please enter a valid email address';
        existMsg.style.color = 'red';
        return;
    }

    
    if (!passwordPattern.test(password)) {
        existMsg.innerHTML = 'Password must be at least 8 characters and contain letters and numbers';
        existMsg.style.color = 'red';
        return;
    }

    
    var users = JSON.parse(localStorage.getItem('users')) || [];

    
    if (users.some(user => user.email.toLowerCase() === email.toLowerCase())) {
        existMsg.innerHTML = 'Email already exists';
        existMsg.style.color = 'red';
        return;
    }

    const newUser = {
        name: name,
        email: email,
        password: password
    };

    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));


    existMsg.innerHTML = 'Sign up successful!';
    existMsg.style.color = 'green';

    
    Name.value = '';
    signupEmail.value = '';
    signupPassword.value = '';

    
    setTimeout(() => {
        window.location.href = './login.html';
    }, 1500);
}