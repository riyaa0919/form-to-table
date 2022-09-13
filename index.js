let form = document.getElementById("formSubmission");

let table = document.getElementById('data');
form.addEventListener("submit", (e) => {
    e.preventDefault();
    submit();
})


const submit = () => {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;


    let newArray = [name, email, phone, address];
    newArray.forEach((item) => {
        var li = document.createElement("li");
        var text = document.createTextNode(item);
        li.appendChild(text);
        table.appendChild(li);
    })
    form.reset();
}