document.addEventListener("DOMContentLoaded", function () {

    console.log("JS loaded");

    const form = document.getElementById("myForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = form.name.value;
        const email = form.email.value;
        const age = form.age.value;
        const classValue = form.class.value;

        console.log("Form Data:", name, email, age, classValue);

        // ---- VALIDATION ----
        let filled = 0;

        if (name !== "") filled++;
        if (email !== "") filled++;
        if (age !== "") filled++;
        if (classValue !== "") filled++;

        if (filled < 3) {
            alert("Please fill out at least 3 fields.");
            return;
        }

        if (name.length < 2) {
            alert("Name must be at least 2 characters.");
            return;
        }

        const ageNum = Number(age);

        if (age === "" || ageNum < 18 || ageNum > 60) {
            alert("Age must be between 18 and 60.");
            return;
        }

        // ---- AJAX ----
        sendData(form);
    });

});

function sendData(form) {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", "response.json", true);

    document.getElementById("responseMessage").textContent = "Submitting...";

    xhr.onload = function () {
        if (xhr.status === 200) {

            const response = JSON.parse(xhr.responseText);

            document.getElementById("responseMessage").textContent = response.message;

            form.reset();

            form.querySelector("button").disabled = true;

        } else {
            alert("Submission failed.");
        }
    };

    xhr.send();
}