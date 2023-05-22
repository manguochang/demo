function myFunction() {
    var fname = document.querySelector("#first-name").value;
    var email = document.querySelector("#email").value;
    if (document.querySelector("#my-form").checkValidity()) {
        alert(`Dear ${fname}, we will contact you at ${email}.`);
    }
}