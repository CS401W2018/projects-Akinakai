document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const First = document.getElementById('FirstNameInput').value;
    const Last = document.getElementById('LastNameInput').value;
    const age = document.getElementById('age').value;

    // Validation checks
    if (!First || !Last) {
        alert("First name and Last name required!");
        return;
    }
    if (!age || age < 18) {
        alert("You must be 18 years of age to continue");
        return;
    }

    // Data to send
    const data = {
        FirstName: First,
        LastName: Last,
        age: age
    };

    // Create XHR object
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

    // Handle response
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                document.getElementById("message").innerHTML = response.message;
                document.getElementById("myForm").innerHTML = "";
                alert('Submitted!')
            } else {
                alert('Error submitting form.');
            }
        }
    };

    // Send request
    xhr.send(JSON.stringify(data));
    console.log(data);
});
