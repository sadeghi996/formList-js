const btnAdd = document.querySelector('.wrapper >.add');
const btnClear = document.querySelector('.wrapper >.clear');
const inp = document.querySelector('.wrapper > input');
const list = document.querySelector('.container > ul');


btnAdd.addEventListener('click', function() {
    if (inp.value !== "") {
        if (isExist(inp.value)) {
            inp.style.color = "red";

            inp.focus();
        } else {
            inp.style.color = "black";
            list.innerHTML += "<li>" + inp.value + "</li>";
            inp.value = "";
            inp.focus();
        }
    }


});

function isExist(word) {
    let items = document.querySelectorAll('.container > ul>li');
    let repeat = false;
    let redColor = false;

    for (let i = 0; i < items.length; i++) {
        if ((items[i].innerHTML).toLocaleLowerCase() == word.toLocaleLowerCase()) {
            repeat = true;
            redColor = true;
            inp.style.color = "black";
        }
    }
    return repeat;
}