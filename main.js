// FETCH

// fetch('my url', "object options")
//     .then((response) => {
//         console.log(response)
//     });

fetch('data.txt')
    .then((res) => res.text())
    .then((data) => console.log(data));

fetch('data.json')
    .then((res) => res.json())
    .then((data) => console.log(data));
    // .then((data) => console.log(data.name));
