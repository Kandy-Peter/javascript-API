const header = document.querySelector('.header');
const contents = document.querySelector('.contents');


function displayJoke() {
    fetch('https://api.blablagues.net/?rub=blagues')
        .then((res) => res.json())
        .then((data) => {
            header.textContent = data.data.content.text_head;
            contents.textContent = 
                data.data.content.text !== "" ? data.data.content.text : data.data.content.text_hidden;
        });
    }

displayJoke();

document.body.addEventListener("click", displayJoke);
