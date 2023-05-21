function getValue() {
    var value = document.getElementById('name').value;
    document.getElementById('result').innerHTML = "Olá " + value;
    document.getElementById('name').value = "";
}

function removeValue() {
    document.getElementById('name').value = "";
    document.getElementById('result').innerHTML = "Introdução ao Desenvolvimento Web";
}