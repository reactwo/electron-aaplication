const fs = require('fs');

let jsonData = JSON.parse(fs.readFileSync('data.json', 'utf-8'))

document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById("username").value = jsonData.user
    document.getElementById("password").value = jsonData.password
});