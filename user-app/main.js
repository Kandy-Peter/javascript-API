let userData = [];

const fecthUser = async () => {
 await fetch("https://randomuser.me/api/?results=24")
  .then((res) => res.json())
  .then((data) => userData = data.results);
  console.log(userData);
}
const renderUsers = async () => {
  await fecthUser();

  document.body.innerHTML = userData.map((user) =>
    `
    <h3>${user.name.first}</h3>
    `
  ).join("");
}

renderUsers();
