
const inputName = document.querySelector('.name')
const inputLastName = document.querySelector('.lastName')
const btn = document.querySelector('.btn_submit')

const test = (e) => {
    e.preventDefault()

    const name = inputName.value
    const lName = inputLastName.value
 console.log(`Imię: ${name} Nazwisko: ${lName}`);
}

btn.addEventListener('click',test)