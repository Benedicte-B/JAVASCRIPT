let verifName = 'Thomas';

document.getElementById('username').addEventListener('keyup', function verifyName(){
    let userEntry = document.getElementById('username').value;
    if(verifName == userEntry){
        document.getElementById('username').style.borderColor = 'green';
        document.getElementById('message').innerHTML = `<div class="alert alert-success" role="alert">Bien joué !</div>`;
    } else {
        document.getElementById('username').style.borderColor = 'red';
        document.getElementById('message').innerHTML = `<div class="alert alert-danger" role="alert">Dommage !</div>`;
    }

})