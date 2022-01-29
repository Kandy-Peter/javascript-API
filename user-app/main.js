let userData = [];

const fecthUser = async () => {
 await fetch("https://randomuser.me/api/?results=24")
  .then((res) => res.json())
  .then((data) => userData = data.results);
  console.log(userData);
}
const renderUsers = async () => {
  await fecthUser();
  const formatDate = (date) => {
    let newDate = new Date(date).toLocaleDateString("en-EN", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })
    return newDate;
  }

  // fucntion to calculate the date

  const calcDate = date => {
    let today = new Date();
    let timeStamp = Date.parse(today)
    let newTimeStamp = Date.parse(date);

    return Math.ceil((timeStamp - newTimeStamp) / 8.64e7);
  }

  document.body.innerHTML = userData.map((user) =>
    `
    <div class='card'>
      <img src=${user.picture.large} alt=pic of ${user.name.last}" />
      <h3>${user.name.first} ${user.name.last}</h3>
      <p>${user.location.city}, ${formatDate(user.dob.date)}</p>
      <em>Member since: ${calcDate(user.registered.date)} days</em>
    </div>
    `
  ).join("");
}

renderUsers();
