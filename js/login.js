if (localStorage.getItem('currentUser')) {
    window.location.href = './welcome.html';
}

function login() {
    var signinEmail = document.getElementById('signinEmail').value;
    var signinPassword = document.getElementById('signinPassword').value;
    var incorrectMsg = document.getElementById('incorrect');

    
    var users = JSON.parse(localStorage.getItem('users')) || [];

    var user = users.find(u => u.email === signinEmail && u.password === signinPassword);


    if (user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
        window.location.href = './welcome.html';
    } else if ( !signinEmail || !signinPassword) {
        incorrectMsg.innerHTML = 'All fields are required';
        incorrectMsg.style.color = 'red';
        return;
    }else {
        incorrectMsg.innerHTML = 'Incorrect email or password';
        incorrectMsg.style.color = 'red';
    }
}
