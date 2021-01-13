// Symbols e iterators
/*
const uniqueId = Symbol('Hello');
const uniqueId2 = Symbol('Hello');

console.log (uniqueId === uniqueId2);
 
const obj = {
    [uniqueId]: 'Hello'
};
console.log(obj);
*/

/*
    //Well known symbols
Symbol.iterator

const arr = [1, 2, 3, 4];
const it = arr[Symbol.iterator]();
const str = 'Digital Innovation One'

console.log(it.next());

for (let value of str) {
    console.log(value);
}
*/
/*
const obj = {
    values: [1, 2, 3, 4],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return {
                    value: this.values[i - 1],
                    done: i > this.values.length
                }
            }
        }
    }
}
const it = obj[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());

for (let value of obj) {
    console.log(value);
}

const arr2 = [...obj];

console.log(arr2);
*/

//Generators 
/*
function* hello() {
    console.log('Hello');
    yield 1;

    console.log('From');
    const value = yield 2;

    console.log(value);
}
const it = hello();
console.log(it.next());
console.log(it.next());
console.log(it.next('Outside!'));
*/

/*
 // pegar um rand de numeros infinitos
function* naturalNumbers() {
    let number = 0;
    while(true) {
        yield number;
        number++;
   } 
}
const it = naturalNumbers();

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
*/

const arr = [1, 2, 3, 4];
const str = 'Digital Innovation One'

const obj = {
    values: [1, 2, 3, 4],
    * [Symbol.iterator]() {
        for (var i = 0; i < this.values.length; i++) {
            yield this.values[i];
        }  
      }
    }  
for (let value of obj) {
    console.log(value);
}


 //____________________________________

 //Rest e spread operator
/*
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

const sum = (...rest) => {
    return multiply(...rest);
}
console.log(sum(5, 5, 2, 3));
*/
    //rest operator pega todos os parametros da funcao e transforma num array
    //spread operator pega todos os itens do array e transforma em parametros para uma funcao

    //spread operator nao se limita a listas, pode ser usado em:
    //strings, arrays, literal objects e objetos iteraveis
/*
const str = 'Digital Innovation One';
function logArgs(...args){ //rest operator
    console.log(args);
}
logArgs(...str); //spread operator
*/

    //spread operator como parametro de funcao utilizando em arrays
/*
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];
function logArgs(){ 
    console.log(arguments);
}
logArgs(...arr); //spread operator
*/
/*
const str = 'Digital Innovation One';
const arr = [1, 2, 3, 4];
function logArgs(a, b, c){ 
    console.log(a, b, c);
}
logArgs(...arr); //spread operator

const arr2 = [...arr, 5, 6, 7]; //chama o primeiro array com spread

console.log(arr2);

    //clone simples com spread
const arrClone = [...arr];
console.log(arrClone);
*/
    //spread com literal objects (só pode utilizar o spread p construir novos objetos)
/*
const obj = {
    test : 123
};
const obj2 = {
    test : 456
}
const objMerged = {
    ...obj,
    ...obj2
}
console.log(objMerged);
*/
    //clone raso - se o objeto tiver propriedades que sejam outros objetos
/*
    const obj = {
    test : 123,
    subObj : {
        test : 123
    }
}
const obj2 = { ...obj };

obj2.subObj.test = 456;
console.log(obj); //altera o valor da propriedade
*/

/*
    //spread para que nao altere o valor da propriedade
    const obj = {
        test : 123,
        subObj : {
            test : 123
        }
    }
    const obj2 = { ...obj, subObj : { ...obj.subObj }}; //gerar um sub objeto fazendo spread do primeiro
    
    obj2.subObj.test = 456;
    console.log(obj);
 */

//maneira antiga e verbosa de extrair dados de um array
/*
var arr = ['Apple', 'Banana', 'Orange', ['Tomato']];

var apple = arr[0];
var banana = arr[1];
var orange = arr[2];
var tomato = arr[3][0];

 //Destructuring Assignment
var [apple2, banana2, orange2, [tomato2]] = ['Apple', 'Banana', 'Orange', ['Tomato']];
console.log(tomato, tomato2);
*/

/*
//maneira antiga de extrair dados do objeto
var obj = {
    name : 'Adriane'
}
var name = obj.name;

 //Destructuring Assignment
var { name } = obj;
console.log(name);
*/

//maneira antiga de acessar uma propriedade
/*
var obj = {
    name : 'Adriane',
    props : {
        age : 26,
        favoriteColors : ['black', 'gray', 'yellow']
    }
}
var name = obj.props.name;

 //Destructuring de multiniveis utilizando array
var { props: { age: age2, favoriteColors : [color1, color2, color3]} } = obj;
console.log(color3);
*/

/*
var arr = [ { name: 'Apple', type: 'fruit'}];

var fruit1 = arr[0].name;

 //Destructuring 
var [{ name: fruitName }] = arr;

console.log(fruitName);
*/

    //functions
/*
function sum (arr) {
    var a = arr[0]; 
    var b = arr[1];

    return a + b;
}
console.log(sum([5,5]));
 //Destructuring na funcao com array
 function sum ([a, b] = [0, 0]) {
     return a + b;
 }
 console.log(sum([5, 5]));

 //Destructuring na funcao com objeto
 function sum ({a, b}) {
     return a + b;
 }
 console.log(sum({ a: 5, b: 5 }));
*/
//_______________________________
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
/*
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
*/
    //criar a propriedade computada diretamente no objeto
/*
var propName = 'test';

var obj = {
    [propName + 'concat'] : 'prop value'
}
console.log(obj);
*/