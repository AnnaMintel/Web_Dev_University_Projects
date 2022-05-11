
const submit = () => {
    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");

    if (name.value != "" && (phone.value != "" || email.value != "")) {
        name.classList.remove('error');
        phone.classList.remove('error');
        email.classList.remove('error');
        alert("Your data registered successfully!");
    } else if (phone.value == "" && email.value == "" && name.value == "") {
        name.classList.add('error');
        phone.classList.add('error');
        email.classList.add('error');
    } else if (((phone.value != "" && email.value != "") && name.value == "")) {
        name.classList.add('error');
        phone.classList.remove('error');
        email.classList.remove('error');
    } else if ((phone.value == "" && email.value != "") && name.value == "") {
        name.classList.add('error');
        phone.classList.add('error');
        email.classList.remove('error');
    } else if ((phone.value != "" && email.value == "") && name.value == "") {
        name.classList.add('error');
        phone.classList.remove('error');
        email.classList.add('error');
    } else {
        name.classList.remove('error');
        phone.classList.add('error');
        email.classList.add('error');
    }

}
