Что выведется в консоль ?
console.log( null || 2 || undefined ); = 2
console.log( alert(1) || 2 || alert(3) ); 2 
console.log( 1 && null && 2 ); = 2 
console.log( alert(1) && alert(2) ); = Nan 
console.log( null || 2 && 3 || 4 ); = 3 

Напишите условие if для проверки, что переменная age находится в диапазоне между 14 и 90 включительно. «Включительно» означает,
 что значение переменной age может быть равно 14 или 90.
let age = 14 || 90

if (age) {
    alert ("Correct")
}

if (!age) {
    console.log ("Bad")
}


Напишите условие if для проверки, что значение переменной age НЕ находится в диапазоне 14 и 90 включительно. 
Напишите два варианта: первый с использованием оператора НЕ !, второй – без этого оператора.

Какие из перечисленных ниже alert выполнятся?
if (-1 || 0) { alert( 'first' )};
if (-1 && 0) { alert( 'second' )};
if (null || -1 && 1) { alert( 'third' )}; тут будет 1

Выведется ли alert?

if ("0") {
  alert( 'Привет' ); ---- Выведется если будет переменная
}

let answer = prompt ('Какое «официальное» название JavaScript?')

if (answer == ECMAScript) {
    alert ('верно!')
}
else {
    alert ('Не знаете? ECMAScript!')
}
Покажите знак числа
Используя конструкцию if..else, напишите код, который получает число через prompt, а затем выводит в alert:

1, если значение больше нуля,

let number = prompt ("Сколько у тебя мозгов?", 'вводить только число(не буквы)')
if (number == 1) {
    alert ('Good')
}else {
    alert ("bad")
}
-1, если значение меньше нуля,
let number2 = prompt ('Какое у тебя зрение?', 'вводить только число(не буквы)')
if (number2 == -1) {
    alert ('BAD')
}else {
    alert ('GOOD')
}
0, если значение равно нулю.
let number = prompt ("Сколько у тебя денег с собой?", 'вводить только число(не буквы)')
if (number3 ==0) {
    alert ('Good')
}else {
    alert ('Bad')
}
Предполагается, что пользователь вводит только числа.
