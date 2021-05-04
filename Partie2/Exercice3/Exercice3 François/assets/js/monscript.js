const user = 'DiBizou'
const userInput = document.getElementById('userField')

//EventListener du champ UserInput
userInput.addEventListener('input', function userCheck() {
  //Déclarations
  let userEntry = document.getElementById('userField').value;
  //Conditions
  if (userEntry === user) {
    userValid()
  }
  else {
    userInvalid()
  }
})

//Vérification Nom Utilisateur
function userValid() {
  userInput.className = 'alert alert-success';
}

function userInvalid() {
  userInput.className='alert alert-danger';
}