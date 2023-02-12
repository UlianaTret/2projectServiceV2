var num;
var count;
var val = '';

function hiddenElems() {
    let v = document.getElementById('btn-moreless').value;
    let elem = document.getElementById('btn-moreless');

    if (v === "true") { //показать элементы
        document.getElementById('img-moreless').style.transform = 'rotate(180deg)';
        //document.getElementById('img-moreless').style.marginTop= "5px;";
        document.getElementById("text-btn").innerHTML = "Скрыть";
        elem.setAttribute('value', 'false');
        val = 'unset';
    } else { //скрыть элементы
        document.getElementById('img-moreless').style.transform = '';
        document.getElementById("text-btn").innerHTML = "Показать все";
        elem.setAttribute('value', 'true');
        val = 'none';
    }

    let screenWidth = window.screen.width;

    if (screenWidth > 768 && screenWidth < 1119) {
        num = 7; //hidden 5
    } else {
        num = 9; //hidden 3
    }

    count = 1;
    let id = '';
    let nodes = document.getElementById('list-logo').children;

    for (let count of (nodes)) {
        while (num <= document.getElementById('list-logo').children.length) {
            id = 'item' + String(num);
            document.getElementById(id).style.display = val;
            num += 1;
            count += 1;
        }
    }
}