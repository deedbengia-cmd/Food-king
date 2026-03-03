function loginUser() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;

    if(name === "" || phone === "") {
        alert("Please fill all details");
        return;
    }

    localStorage.setItem("customerName", name);
    localStorage.setItem("customerPhone", phone);

    window.location.href = "index.html";
}
