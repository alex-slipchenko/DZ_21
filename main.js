
const myInput = document.querySelector('#container__input');
const myButton = document.querySelector('#container__button');

const mywrapp = document.querySelector('.wrapp');
const myTitle = document.querySelector('#container__title');
const myOut = document.querySelector('#container__out');



myButton.addEventListener('click', () => {
    const myId = myInput.value;
    if (isNaN(myId)) {
        mywrapp.style.border = '1px solid red';
        myOut.innerHTML = 'Error:You entered a <b>string</b>,use a number from 0 to 100';
    } else {
        fetch(`https://jsonplaceholder.typicode.com/posts/${myId}`)
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('You mast enter a number from 0 to 100')
                }

            })
            .then(value => {
                mywrapp.style.border = '1px solid green';

                myTitle.textContent = value.title;
                myTitle.style.color = 'green'
                myOut.textContent = value.body;
            })
            .catch(err => {
                mywrapp.style.border = '1px solid red';

                myTitle.textContent = 'Error';
                myTitle.style.color = 'red'
                myOut.textContent = err;
                console.log(err);
            })
    }
});






