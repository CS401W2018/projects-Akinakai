document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const First = document.getElementById('FirstNameInput').value;
    const age = document.getElementById ('age').value;
    const Last = document.getElementById("LastNameInput").value

    if (!FirstNameInput || !LastNameInput){
        alert("First name and Last name required!")
        return;
    }
    if (!age || age <18) {
        alert(" You must be 18 years of age to continue")
        return;
    }
    const data = {
        FirstNameInput: First,
        LastNameInput: Last,
        age: age
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-Type", "application/json;charsset=UTF-8");
    xhr.onreadystatechange = function (){
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse (xhr.responseText)
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
        }else if (xhr.readyState === 4){
            alert('Error submitting form.')
        }
    };
    xhr.send (JSON.stringify(data));
    console.log(data);

});