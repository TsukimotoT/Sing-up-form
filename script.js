const form = document.getElementById('form');

form.addEventListener('submit', e => {
    e.preventDefault();

    const first = form['firstName'].value;
    const last = form['lastName'].value;
    const email = form['email'].value;
    const password = form['password'].value



    if (first === '') {
        errorFunc('firstName', 'First Name cannot be empty')
    } else {
        removeError('firstName')
    }

    if (last === '') {
        errorFunc('lastName', 'Last Name cannot be empty')
    } else {
        removeError('lastName')
    }

    if (email == '') {
        errorFunc('email', 'Email cannot be empty')
    } else if (!validEmail(email)) {
        errorFunc('email', 'Email is not valid')
    } else {
        removeError('email')
    }

    if (password === '') {
        errorFunc('password', 'Password Name cannot be empty')
    } else {
        removeError('password')
    }
})

function errorFunc(id, message) {
    const formControl = form[id].parentNode;
    formControl.classList.add('error');

    const span = formControl.querySelector('span')
    span.innerText = message

}

function validEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function removeError(id) {
    const formControl = form[id].parentNode;
    formControl.classList.remove('error');

    const span = formControl.querySelector('span')
    span.style.opacity = '0'
}

