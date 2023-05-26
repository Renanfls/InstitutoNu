console.log("olá");
console.log("---------------");


// ----------------- VARIAVEIS -----------------
var a = 10;
var b = 20;
var total = a + b;
console.log("total: " + total);
console.log("---------------");

var nomePessoa = "Lucas";
var NomePessoa = "Jose";
console.log("nomePessoa: " + nomePessoa);
console.log("NomePessoa: " + NomePessoa);
console.log("---------------");

var var1 = 1, 
    var2 = 2, 
    var3 = 3;
console.log("var3: " + var3);
console.log("---------------");

var n1; // Se não for atribuir valor inicial
n1 = 20;
console.log("n1: " + n1);
console.log("---------------");

let book = 10; // Se for atribuir valor inicial
book = 20;
console.log("book: " + book);
console.log("---------------");

const valor1 = 100; // Não pode ser alterado
// valor1 = 200; // Dá erro
console.log("valor1: " + valor1);
console.log("---------------");


// ----------------- TIPOS DE DADOS -----------------
var nome = "Renan";
console.log("A variavel é do tipo: " + typeof(nome)); // Retorna qual é o tipo da variavel
if(typeof(nome) == "string"){
    console.log(nome.toLocaleUpperCase());
}else{
    console.log("Você precisa usar uma string")
} 
console.log("---------------");


// ----------------- OPERADORES -----------------
var a = 10, b = 4;
// Verificar se a é maior que b e b é divisivel por 2
console.log(a > b && b % 2 == 0);

// Verificar se b é maior igual a ou b dividido por 2 o resultado é 2
console.log(a <= b || b / 2 == 2);

// Verificar se a é maior que b e b maior igual a 5
console.log(a > b && 5 <= b);

// verificar se b é par ou impar usando ternario
resultado = b % 2 == 0 ? "Par" : "Impar";
console.log(resultado)