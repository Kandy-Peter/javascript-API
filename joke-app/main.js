const header = document.querySelector('.header');
const contents = document.querySelector('.contents');


function displayJoke() {
    fetch('https://api.blablagues.net/?rub=blagues')
        .then((res) => res.json())
        .then((data) => {
            const dataDestr = data.data.content;
            header.textContent = dataDestr.text_head;
            contents.textContent = 
                dataDestr.text !== "" ? dataDestr.text : dataDestr.text_hidden;
        });
    }

displayJoke();

document.body.addEventListener("click", displayJoke);
