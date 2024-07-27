function validateForm() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var message = document.getElementById("message").value;
    
    if (name === "" || email === "" || message === "")  {
        alert("All fields must be filled out");
        return false;
    } else if (message.length < 10)  {
        alert("Message must be at least 10 characters long");
        return false;
    }
    return true;
}
