fetch('https://api.blablagues.net/?rub=blagues')
    .then((res) => res.json())
    .then((data) => (document.body.textContent = data.data.content.text_head));
