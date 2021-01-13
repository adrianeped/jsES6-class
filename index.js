// Arrow functions

/*
// funcao classica
function log (value){
    console.log(value);
}
log('test');
*/
/*
//funcao anonima
var log = function (value){
    console.log(value);
}
log('test');
*/
/*
//arrow function 
var sum = (a, b) => a + b; //return implicito do lado direito (só no caso de expressao)
(sum(5, 5));

var sum = (a, b) => {
    var x = 10;   // tudo que nao for expressao precisa estar entre chaves
}

var sum = a => a + 5; //se existir apenas um argumento na funcao, nao precisa estar entre parenteses

var obj = {
    teste: '1,2,3' //objetos literais no js sao declarados assim
}

var createObj = () => ({ test: 123}); //para retorno implicito de um objeto, coloca-se chaves dentro dos parenteses
console.log(createObj());  //da mesma forma que chaves define o corpo de uma funcao, ele tambem define um objeto literal

function Car(){
    this.foo = 'bar';
}
console.log(new Car()); //Outra forma de construir objetos é através de funcoes construtoras
//Nao pode fazer o mesmo usando arrow function
*/

//Default Function Arguments

/*
function multiply (a, b = 1) { //usando o = apos um paramentro é possivel atribuir um valor padrao  quando esse parametro nao for passado ou passado com valor undefined
    return a * b;   
}
console.log(multiply(5));

function multiply (a, b = a){ //pode referenciar outro parametro, mas a ordem é importante, nao pode referenciar um valor que venha depois
    return (a * b);
}
console.log(multiply(5));

    //lazy revaluation - referencia outra funcao

function randomNumber(){
    return Math.random() * 10;
}
function multiply (a, b = randomNumber()){
    return a * b;
}
console.log(multiply(5)); 
    //os valores atribuidos so sao invocados quando a funcao for invocada sem parametro, com isso garante que a funcao so vai ser executada no momento cert
*/

//Enhanced Object Literals

var obj = {
    prop1 : 'Digital Inovation One' //maneira classica de escrever objetos literais
}

    //short hand - pode omitir o lado direito definindo valores p propriedades e metodos sem repetir a palavra
function method1(){
    console.log('method called');
}
var obj = {
    method1
}
obj.method1();

    //escrever uma funcao dentro do objeto, declarando a funcao direto no metodo
var obj = {
    sum : function (a, b) {
        return a + b;
    }
}
console.log(obj.sum(1, 5));

    //outra capacidade de encurtar os objetos literais, omitindo o function (palavra)
var obj = {
    sum (a, b) {
        return a + b;
    }
}
console.log(obj.sum(1, 5));

    //criar a propriedade computada diretamente no objeto
var propName = 'test';

var obj = {
    [propName + 'concat'] : 'prop value';
}
console.log(obj);