document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const First = document.getElementById('FirstNameInput').value;
    const Last = document.getElementById('LastNameInput').value;

    // Validation checks
    if (!First || !Last) {
        alert("First name and Last name required!");
        return;
    }

    // Data to send
    const data = {
        FirstName: First,
        LastName: Last,
    };

    // Create XHR object
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");


    // Handle response
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                const response = JSON.parse(xhr.responseText);
                document.getElementById("message").innerHTML = response.message;
                document.getElementById("myForm").reset();  // Reset the form fields
                alert('Submitted!');
            } else {
                console.error("Error:", xhr.status, xhr.statusText);  // Log error for debugging
                alert('Error submitting form.');
            }
        }
    };

    // Send request
    xhr.send(JSON.stringify(data));
    console.log(data);
});
