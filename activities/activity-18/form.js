document.getElementById("myForm").addEventListener("submit", function(event) {

    event.preventDefault();

    // get values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    // validation
    if (!name || !email || !age) {
        alert("Please fill out all required fields.");
        return;
    }

    if (name.length < 2) {
        alert("Name must be at least 2 characters.");
        return;
    }

    if (age < 18) {
        alert("You must be 18 or older.");
        return;
    }

    // create object
    const data = {
        name: name,
        email: email,
        age: age
    };

    console.log(data);

    // AJAX
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "response.json");
    xhr.send();

    xhr.onload = function() {
        if (xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);

            document.getElementById("myForm").innerHTML =
                "<p>" + response.message + "</p>";
        }
    };

});