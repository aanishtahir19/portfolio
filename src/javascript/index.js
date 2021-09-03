// Applying Darm Mode
let themeChange = document.querySelector("#change-mode");
let navitem = document.querySelectorAll("#navbar .nav-item .nav-link");
let themeToggleBtn = document.querySelector("#change-mode");
document.body.style.backgroundColor = 'white';

function changeMode() {
    if (document.body.style.backgroundColor == "white") {
        console.log("Flag1");
        document.body.style.backgroundColor = "#353535";
        document.body.style.color = "white";
        for (let i of navitem) {
            i.style.color = "white";
        }
        themeToggleBtn.classList.remove("btn-dark");
        themeToggleBtn.classList.add("btn-light");


    } else {
        console.log("Flag2");
        document.body.style.backgroundColor = "white";
        document.body.style.color = "#353535";
        for (let i of navitem) {
            i.style.color = "#353535";
        }
        themeToggleBtn.classList.remove("btn-light");
        themeToggleBtn.classList.add("btn-dark");
    }
}