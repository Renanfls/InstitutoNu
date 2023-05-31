var valueTotal = [0,0];
    valueProduct = [50.00,30.00];
    qtd = [0,0];

function addItem(item){
    qtd[item]++;
    updateQuantity(item)
    calculateTotal(item);
    valueTotalBuy()
}

function removeItem(item){
    if(qtd[item] > 0){
        qtd[item]--;
        updateQuantity(item)
        calculateTotal(item);
        valueTotalBuy()
    }
}

function updateQuantity(item){
    var quantity = document.getElementById('quantity' + item);
    quantity.innerHTML = qtd[item];
}

function calculateTotal(item){
    var total = document.getElementById('total' + item);
    valueTotal[item] = Number.parseFloat(valueProduct[item]) * qtd[item];
    total.innerHTML = valueTotal[item].toFixed(2);
}

function valueTotalBuy(){
    var valueTotalBuy = document.getElementById("valueTotalBuy");
        value = 0;
    for(var i = 0; i < valueTotal.length; i++){
        value += valueTotal[i];    
    }
    valueTotalBuy.innerHTML = value.toFixed(2);
}
