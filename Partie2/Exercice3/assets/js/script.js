
let inputElement = document.getElementsByName('userName').value;
inputElement.addEventListener('compositionstart', function verification(){
        let user = 'Benedicte';
        let userName = document.getElementById('userName').value;
        let ok = document.getElementsByClassName('is-invalid').disabled = true;
        let notOk = document.getElementsByClassName('is-valid').disabled = true;
        let result;
        if (user = userName) {
        result = ok;
        } else {
        result = notOk;
        }
        alert(result);
});



