// Method XMLHttpRequest
//This is how the data was founded with the xml method

let req = new XMLHttpRequest();
req.onload =  reqListener;
// req.open("get", 'data.txt', true);
// we can also open an url as an api.

req.open("get", 'data.json', true);
req.send();

function reqListener () {
    console.log(this.responseText);
}
