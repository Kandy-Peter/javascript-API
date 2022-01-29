const myHeaders = new Headers();
const init = {
  method: "GET",
  headers: myHeaders,
  mode: "cors",
  cache: "default"
}

// fetch('../data.json', init).then((res) => console.log(res));
//------------CRUD => create(POST), read(GET), Update(PUT), delete(DELETE)

let init2 = {
  method: "POST",
  headers: {
    "Content-type": "application/json"
  },
  body: JSON.stringify({
    pseudo: "Kandy Peter",
    age: 25,
  }),
  mode: "cors",
  credentials: "same-origin",
}
document.querySelector('form').addEventListener('submit', () => {
  fetch("http://localhost:3000/users", init2).then(() => console.log('data sent'));
})