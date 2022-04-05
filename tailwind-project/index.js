// login sumbit

document.getElementById('login').addEventListener('click', function(e){ 
    const emailField = document.getElementById('email');
    const passwordField = document.getElementById('password');
    console.log(emailField.value);
    console.log(passwordField.value);

    if (emailField.value == 'sani@app.com' && passwordField.value == '123') {
        window.location.href = 'bank.html'
    }
 });   
    