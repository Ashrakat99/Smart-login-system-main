document.addEventListener('DOMContentLoaded', function() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userNameElement = document.getElementById('userName');

    if (!currentUser) {
        window.location.href = './login.html';
        return;
    }

    userNameElement.textContent = currentUser.name;
});

function logout(event) {
    localStorage.removeItem('currentUser');
    
    event.preventDefault();
    window.location.href = './login.html';
}