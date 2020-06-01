"use strict"

let string = 'Hi World, don\`t get up',
    number = 12.345,
    strnum = '123.3',
    price = 6.35,
    errorNumber = 0.1 + 0.2;

// str.lenght
// str.toUpperCase()

// num.toFixed(n) >> определяет кол-во символов после точки.

//isFinite(n) >> возвращае тру если аргумент не NaN/infinity/-infinity

//parseInt() >> читает из строки целое число
//parseFloat() >> читает из строки дробные числа

function isNumeric(x) { // функция для проверки на число
    return isNaN(parseFloat(x) && isFinite(x));
}

// Math.floor >> округляет вниз
// Math.ceil >> округляет вверх
// Math.round >> округляет до ближайшего числа !более коректное округление
// ~~12.3 > 12 >> округляет вниз
// 1.2 + 1.3 ^ 0 >> 2 то же самое что и Math.floor
// let x = a * B / C ^ 0 >> a * b / c и округлять
// Math.floor( 3.123 * 100) / 100 >> 3.12
//num.toFixed(precision) >> округляет до заданной цифры
// +num.toFixed(2) >> возвращает номер
// num.toFixed(2) >> возвращает строку
// (0.1 * 10 + 0.2 * 10) / 10 = 0.3
//  let result 0.1 + 0.2 >> +result.toFixed(10) >> 0.3

// ----------------------------------------------------------------------------------

// Тригонометрические вычисления
// Math.acos(x) возвращает арккосинус икс
// Math.asin(x) возаращает арксинус икс 
// Math.atan(x) возаращает арктангенс икс
// Math.atan2(y, x) возаращает угол до точки (y, x)
// Math.sin(x) выисляет синут икс
// Math.cos(x) выисляет косинус икс
// Math.tan(x) возаращает тангенс икс 

// ----------------------------------------------------------------------------------

// Функции общего значения:
// Math.sqrt(x) возвращает квадратний корень из x;
// Math.log(x) возвращает натуралный (по основанию е) логарифм x; <<< ?
// Math.pow(x, exp) возводт число в степень;
// Math.abs(x) возвращает абсолютное значения числа;
// Math.exp(x) возврощает е, где е основание натуральных логарифмов; <<< ?
// Math.max(a, b, c...) возвращает найбольший из списка аргументов;
// Math.Min(a, b, c...) возвращает найменьший из списка аргументов;
// Math.random() возвращает псевдо-случайное число в интервале [0,1] <<< ? 
// - то есть между 0 (включительно) и 1(не включая). 

// ----------------------------------------------------------------------------------

// Форматирование
// toLocaleString() 

/* function toLocaleStringSupportsLocales() { // проверк поддержки аргументов браузером
  let number = 0;
  try {
    number.toLocaleString('i');
  } catch (e) {
    return e​.name === 'RangeError';
  }
  return false;
}  */

// Task 1
function sum() {
    let a = +prompt('Insert first number', ''),
        b = +prompt('Insert Second number', ''),
        result = a + b;
    if (a && b) {
        return alert('Total is:' + result);
    }
}

// Task 2
function getDecimal(num) {
    let result,
        initialNum = Math.abs(num),
        roundedNum = Math.round(initialNum);

    if (roundedNum > initialNum) {
        result = roundedNum - initialNum - 1;
        result = Math.abs(result);
        result = +result.toFixed(10)
    } else {
        result = initialNum - roundedNum;
        result = +result.toFixed(10);
    }
    return result;
}

function getDecimal2(num) {
    var str = "" + num; // переводит цифр в строку
    var zeroPos = str.indexOf("."); // цифра перео точкой
    if (zeroPos == -1)
        return 0;
    str = str.slice(zeroPos); // возвращает отрубленную цифру (которая в строке)
    return +str; // переводит в число
}

// Task 3

function random(min, max) {
    return min + Math.random() * (max - min);
}

(random(1, 5));
(random(1, 5));
(random(1, 5));

// Task 4

function fibBinet(n) {
    let phi = (1 + Math.sqrt(5)) / 2; // 1 + квадратный корень от 5 (2.23...)/2
    return Math.round(Math.pow(phi, n) / Math.sqrt(5));
}

function fib(n) {
    let a = 1,
        b = 0,
        x;
    for (i = 0; i < n; i++) {
        x = a + b;
        a = b;
        b = x;
    }
    return b;
}

// Task 5
function random(n) {
    let max = 10; // << maximum value
    return Math.random() * max;
}

function randomMinMax() {
    let min = 5,
        max = 10;
    return min + Math.random() * (max - min);
}

// Task 6

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

// ----------------------------------------------------------------------------------

// Методы и свойства Строк

// charAt(position) >> доет символ за позицией // str[position];
// toUpperCase() & toLowerCase();
// indexOf() // 1 - найден, 0 - найден с 1поз, -1 - не найден;
// lastIndexOf() ищет с конца строки;
// ~n = -(n+1);
// string.fromCharCode(1072) // >> 'a' >>?
// str.charCodeAt(pos);
// сравнение строк str1.localeCompare(str2) // >> -1 - str1 < str2; 1 - str1 > str2: 0 - str1 == str2;

// ! символы сравниваються по юникоду.



// Взятие всех входящих
function pos(target) {
    let str2 = 'Hello world, get up',
        pos = 0;
    while (true) {
        let foundPos = str2.indexOf(target, pos);
        if (foundPos == -1) break;

        console.log(foundPos);
        pos = foundPos + 1;
    }
}

function pos2(target) {
    let pos = -1,
        str2 = 'Hello World, get up';
    while ((pos = str2.indexOf(target, pos + 1)) != -1) {
        console.log(pos);
    }
}

// ----------------------------------------------------------------------------------

// методы для взятия подстроки
// substring(start, end) строка с позиции старт до (не включая) энд;
// substr(start, length) с позиции и количество символов;
// slice(start, end) строка с позиции старт до (не включая) энд; 

/* разница между substring() & slice() в их работе 
с отрицательными и большими аргументами */

// console.log('test'.substring(-2)); // -2 >> 0
// console.log('testme'.substring(4, -1)); // -1 >> 0 >> (0, 4) = 'test'

// console.log('testme'.slice(-2)); // от конца строки >> 'me'
// console.log('testme'.slice(1, -2)); // от обрезаного конца до 2 обреззаных первых; 

// ----------------------------------------------------------------------------------

// Task 7 
function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

// Task 8
function checkSpam(str) {
    let lowerStr = str.toLowerCase(); //приводим все в внижний регистр
    return !! // приводим к логическому типу 
        (~lowerStr.indexOf('viagra') || ~lowerStr.indexOf('xxx'));
}

// Task 9
function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 3) + '...';
    }
    return str;
}

// Task 10
function extractCurrencyValue(price) {
    let justPrice = +price.slice(1);
    return justPrice;
}

// ----------------------------------------------------------------------------------

// Объекты (ассоциативный массив, возможности для ООП)

// Ассоциативный массив - данные, ключ-значение.
// let o = new Object;
// let o1 = {}; << предпочтительней.
// delete person.age // удаляет значение;
// ('name' in person) // проверка наличия значения;
// проверка in || undefined;
// person['name'] >> 'Vlad';

let person = {
    name: 'Vlad',
    age: 25,
    weight: '100kg',
    car: null,
    'favorite_music': 'blues', // person['favorite_music'] >> 'blues';
};

let user = { // литеральный синтаксис
    name: 'Vlad',
    surnme: 'Pavlik',
    age: 25,
    weight: '100kg',
    'favorite music': 'blues',
    cars: {
        Mazda: true,
        Lexus: true,
        BMW: false,
    },
    sister: 'Milana',
    brother: 'Stas',
}

function loopInObj(obj) {
    for (let key in obj) {
        console.log('key: ' + '\"' + key + '\"' + ', has a value: ' + '\"' + obj[key] + '\"');
    }
}

// Лучше использовать квадратные скобки когда мы не знаес имя свойства:
// person[key] >> 25
function objCounter() {
    let counter = 0;
    for (let key in user) {
        counter++;
    }
    return 'Всего значений: ' + counter;
}

// "+" приводит к сортеровке по умолч. ибо будет по юникоду;
function telCodes() {
    let codes = {
        '+7': 'Russia',
        '+38': 'Ukraine',
        '+1': 'USA',
    };
    for (code in codes) {
        let value = codes[code];
        code = +code;
        console.log(code + ':' + value);
    }
}

// Task 11

function isEmpty(obj) {
    for (key in obj) {
        return false;
    }
    return true;
}

// Task 12

const selaries = {
    'Vasia': 100,
    'Dasha': 250,
    'Misha': -50,
    'Alina': 500,
},
    emptySelaries = {};

function sumSelaries(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key]
    }
    return sum + '$';
}

// Task 13

function getBiggestSelaries(obj) {
    let bigest = 0,
        bigestName = '';
    for (let name in obj) { //проходит по каждосу значению
        if (bigest < obj[name]) { // выводит самый большой результат
            bigest = obj[name]; // после находки идет присвоение
            bigestName = name + ', has a biggest selaries!'; // ретерн
        }
    }
    console.log(bigestName || 'There are no employers!');
}

// Task 14

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (isNumeric(obj[key])) {
            obj[key] *= 2;
        }
    }
    return obj;
}

function isNumeric(n) { // проверка на число
    return !isNaN(parseFloat(n)) && isFinite(n);
}

// ----------------------------------------------------------------------------------

// Копирование значения по ссылке;
// В переменной в которой храниться объект, хранится его адрес в памяти (а не сам объект).;

// клоирование
let sample = {
    brend: 'Mazda',
    enine: 3.7,
    seats: 7,
    color: 'white',
    type: 'Crossover'
}
let clone = {};

function getClone(obj) {
    for (let key in obj) {
        clone[key] = obj[key];
    }
}

// глубокое клонирование - это когда в обекте есть ссылки на другие обекты >> ?;
let nestedDoll = {
    name: 'Admin',
    age: 18,
    citizenship: 'Ukrainian',
};

function getnestedDoll(obj) {
    nestedDoll[nestedDoll.length] = obj;
    return nestedDoll;

}

// ----------------------------------------------------------------------------------

// Массивы с числовыми индексами

// Массивы нужны для непрерывной работы с колекциями елементов;

let fruits = ['Apple', 'Orange', 'Plum'];
let cars = new Array('Mazda', 'BMW', 'Audi', 'Toyota', 'Fiat') // используется редко;
let bred = new Array(5); // > undefined так как массив пуст но есть 5 мест.

// pop() > (fast)удаляет последний едемент из масива и возвращает его;
// push(...) > (fast) добавляет елемент в конец масива (можно несколько через запятую) === fruits[fruits.length] = ...
// shift() > (slow) удаляет первый елемент и возвращает его;
// unshift() > (slow) добавляет елемент в начало масива (можно несколько);

function showArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
//цикл for..in смассивами использовать нельзя!;
// 1) выводятся лишник цифровые значения;
// 2) цикл for выполняется быстрее;

// length in Array
// 1) методы масивов автоматом обновляют length;
// 2) length = последний индекс +1;
// arr.length = 0 >> самый простой способ очистить масив;

// Многомерные массивы;

let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Работа с массивами в браузерах:
// 1) Не ставить массиву произвольные свойства (arr.test = 5);
// 2) Нельзя заполнять масив неприрывно и по возрастающей иначе браузер будет работать с ним как с объектом;

// ----------------------------------------------------------------------------------

// Task 15
function lastOfArr(arr) {
    let last = arr.length;
    return arr[last - 1];
}

// Task 16
function addToEnd(arr, el) {
    // return arr.push(el); // как вариант.
    return arr[arr.length] = el;
}

// Task 17
function randomEl(arr) {
    let random = Math.floor(Math.random() * arr.length)
    return arrp[random]
}

// Task 18
function getSumOfArray() {
    let numbers = [];
    while (true) {
        let value = prompt('Введите число:', 0);
        if (value === '' || value === null || isNaN(value))
            break;
        numbers[numbers.length] = +value;
    }
    console.log(numbers);
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    alert(sum);
    return sum;
}

// Task 19 <<< Переписать еще неск раз
function find(arr, value) {
    if (arr.indexOf) {
        return arr.indexOf(value);
    }
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === value) {
            return i;
        }
    }
    return -1;
}

// Task 20
// метод filter(); Возвращает новый массив; 
// let newArray = arr.filter(callback(element[, index, [array]])[, thisArg]);

// callack >> Функция с тремя необяз. аргумнтами, которая будет вызвана для каждого элемента массива. 
// Если функция возвращает true, то элемент остаётся в массиве, если false, то удаляется.
// Элементы, добавленные в массив после начала выполнения метода filter(), не будут посещены функцией callbac.
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}

// Task 21 Решето Эратосфена
function erato() {
    let arr = [];
    for (let i = 2; i < 100; i++) {
        arr[i] = true;
    }

    let p = 2;
    do {
        for (let i = 2 * p; i < 100; i += p) {
            arr[i] = false;
        }
        for (let i = p + 1; i < 100; i++) {
            if (arr[i]) break;
        }
        p = i;
    } while (p * p < 100);

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            sum += i;
        }
    }
    console.log(sum);
}

// Task 22 Подмассив найбольшей суммы.
function getMaxSubSum(arr) { // медленный способ
    let maxSum = 0; // если элементов не будет - возвращаем 0

    for (let i = 0; i < arr.length; i++) { // проходит по всем елементам
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) { // сумирует начиная с текущего елемента
            sumFixedStart += arr[j];
            maxSum = Math.max(maxSum, sumFixedStart); // возв найбольший из списка аргумент
        }
    }
    return maxSum;
}
// Оценка алгоритма O(n2). Другими словами, если мы увеличим размер массива в 2 раза, 
// время выполнения алгоритма увеличится в 4 раза.

function getMaxSubSum2(arr) { // Быстрый способ
    let maxSum = 0;
    let partialSum = 0;

    for (let item of arr) { // для каждого элемента массивас начала до конца
        partialSum += item; // добавляем значение элемента к partialSum
        maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
        if (partialSum < 0) partialSum = 0; // ноль если отрицательное
    }
    return maxSum;
}
// Идём по массиву и накапливаем текущую частичную сумму элементов в переменной s.
// Если s в какой-то момент становится отрицательной – присваиваем s=0. 
// Максимальный из всех s и будет ответом.
// Этот алгоритм требует ровно 1 проход по массиву и его оценка сложности O(n).

// ----------------------------------------------------------------------------------

// Массивы: методы

// split(s, 2) переводит строку в массив разбив ее по разделителю s + второй необяз арг ограничитель елементов.
// 'test'.split('', 2) >> [t,e]
function splitNames(names) { // разделяет;
    let arr = names.split(', ');
    for (let i = 0; i < arr.length; i++) {
        console.log('This is message for you: ' + arr[i]);
    }
}

// join(str); >> делает в точности противоположное split();
function joinNames(arrOfNames) {
    let str = arrOfNames.join(', ');
    return str;
}
// ['1', '2', '3'].join(',') >> '1, 2, 3,'
// new Array(4).join('la') >> ['lalala']

//delete.arr[i]; >> удаляет ару ключ-значение;
// splice() >> удаление с середины массива (наряду с pop & shift);

// splice() >> удаляет, вставляет, заменяет елементы;
// arr.splice(index[, deleteCount, e1...eN]);;
// arr.splice(-1, 0, 'Hi') >> [1, 2, 'Hi', 3] (отицательное с конца);
function deleteSplice(arr, a, b) {
    let removed = arr.splice(a, b);
    arr.splice(a, b); // удалит включая b елемент;
    console.log('Deleted elements: ' + removed);
    return arr;
}
function changeSplice(arr, a, b) {
    arr.splice(a, 1, b); // заменяет один елемент
}
function addSplice(arr, a, str) {
    arr.splice(a, 0, str); // так как 0 - добавляет новый елемент
    return arr;
}

// slice() >> одинаков для строк и масссивов;
// slice(start, end) // копирует заданный участок масива не включая end;
// arr1 = [1,2,3,4,5].slice(1,3) >> arr2 [2,3] // не изменяя исход массив.
// если не казать энд, копирование до конца массива;
// [1,2,3,4].slice(-2) >> [3,4];
// [1,2].slice() >> [1,2] >> fullcopy;

// Сортировка, метод sort(fn) // по умолчанию сортирует все как строки
// в интерпритатор уже встроенный алгоритм "быстрой сортировки"
// мы лишь даем ему функцию - способ сравнения, он сам ее вызывает
// Свой алгоритм сортировки:
function compareNumeric(a, b) { // сортировка по возрастанию
    let arr = [3, 2, 1, 14, 6, -1, 7];
    if (a > b) return 1;
    if (a < b) return -1;
    // return a - b;
    return arr.sort(compareNumeric);
}
// ф-я для sort() должна иметь 2 аргумента
/* визуализация 
let arr = [-1,3,5,7,3,6,2,6,7].sort(function(a,b){
    console.log(a+"<>"+b);
});*/

// arr.reverse() >> меняет порядок в масиве
function reverse(arr) {
    arr.reverse();
    return arr;
}

// concat(v1, v2...vN) >> создает новыйй масив с копиями елементов
// Если аргументом выступает массив, то concat добавляет его елементы в новый.
// arr.concat([1,2],5) >> [arr,1,2,5]
function concatArr(arr1, arr2) {
    let newArr = arr1.concat(arr2);
    return newArr;
}

// indexOf()/lastIndexOf() >> (может не пожжерживаться IE8 (ES5-Shim))
// indexOf(searchElement[fromIndex]) >> возв номер елемента или -1 если его нет
// lastIndexOf(searchElement[fromIndex]) >> ищет с права на лево
// Методы делают поиск перебором как цикл for

// ----------------------------------------------------------------------------------

// Коллекция уникальных елементов
// Делаем все елементы ключами объекта и проверить есть ли такой ключ.
function uniqCollection() { // >> ? 
    let store = {};
    let items = ['a', 'div', 'form'];
    for (i = 0; i < items.length; i++) {
        let key = items[i];
        storep[key] = true; // значение здесь не важно
    }
    if (store[key]) return store;
}

// ----------------------------------------------------------------------------------

// Object.keys(obj) >> возвращает массив со свойствами объекта
function objToArray(obj) {
    let arr = Object.keys(obj);
    return arr;
}

// Методы:
// pop/push/shift/unshify/splice - добавление, удаление, замена
// join/splite - для преобразования строк в масив и обратно
// slice - копирует участок массива
// splice - операции с серединой масива
// sort - если не передать ф-ию сортируеи массив как строки
// indexOf()/lastIndexOf() - возвращают позицию елемента в массиве.

// ----------------------------------------------------------------------------------

// <div onmouseover="this.style.backgroundColor='red'">myDIV.</div>
// replace(a, b) >> меняет местами слова в строке


// Task 22
const obj = {
    className: 'open menu'
};
function addClass(obj, cls) {
    let classes = obj.className ? obj.className.split(' ') : []; // переводит строку (obj.className) в массив

    for (let i = 0; i < classes.length; i++) { // перебирает масив classes
        if (classes[i] == cls) return '\'' + cls + '\'' + ': has alredy assigned'; // возвращается undefined 
    }

    classes.push(cls); // пушит в ммассив наш cls

    obj.className = classes.join(' '); // преабразовует массив обратно в строку.
}

// Task 23
function camelize(str) {
    return str.split('-') // разбивает на масив удаляя "-"
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
        .join('') //соединяет в одну строку.
}

// Task 24
function removeClass(obj, cls) {
    let classes = obj.className ? obj.className.split(' ') : []; // переводит строку (obj.className) в массив

    for (let i = 0; i < classes.length; i++) { // перебирает масив classes
        if (classes[i] == cls) {
            classes.splice(i, 1);
            i--;
        }
    }
    obj.className = classes.join('');
}

// Task 25
function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        let val = arr[i];
        if (val < a || val > b) {
            arr.splice[i--, 1];
        }
    }
}

// Task 26
function compareReversed(arr) {
    function reversed(a, b) {
        return b - a;
    }
    return arr.sort(reversed);
}

// Task 27
function sortedStrings(arr) {
    let arrSorted = arr.slice().sort();
    return arrSorted;
}

// Task 28
function sortRandom(arr) {
    function random(a, b) {
        return Math.random() - 0.5; // Вычтем 0.5, чтобы область значений стала [-0.5 ... 0.5).
    }
    return arr.sort(random);
}

// Task 29
let Vlad = {
    name: 'Vlad',
    age: 25,
},
    Milana = {
        name: 'Liana',
        age: 12,
    },
    Alex = {
        name: 'Alex',
        age: 43,
    },
    Anelina = {
        name: 'Anelina',
        age: 44,
    },
    Stas = {
        name: 'Stas',
        age: 23,
    };

let people = { Vlad, Milana, Alex, Anelina, Stas };

function comparePeople(people) {
    function compareAge(personA, personB) {
        return personA.age - personB.age;
    };
    people.sort(compareAge);

    for (let i = 0; i < people.length; i++) {
        return people[i].name;
    }
}

// Task 30 Вывод односвязного списка

let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
};

function printListCyrcle(list) { // решение с использованием цикла (более эфективный)
    let tmp = list;

    while (tmp) { // временная переменная
        alert(tmp.value);
        tmp = tmp.next;
    }
}
function printListCyrcleRverse(list) { // решение с использованием цикла (более эфективный)
    let arr = [];
    let tmp = list;
    while (tmp) {
        arr.push(tmp.value);
        tmp = tmp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
        alert(arr[i]);
    }
}
function printListRecurs(list) { // более понятный
    console.log(list.value); // выводим текущий элемент
    if (list.next) {
        printListRecurs(list.next); // делаем то же самое для остальной части списка
    }
}
function printListRecursReverse(list) { // более понятный
    if (list.next) {
        printListRecursReverse(list.next); // делаем то же самое для остальной части списка
    }
    console.log(list.value);
}

// Task 31 филтрация анаграммы
let arrForAclean = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
function aclean(arr) {
    let obj = {}; // используем обект так как ключи это строки
    for (let i = 0; i < arr.length; i++) { // проходимся помасиву
        let sorted = arr[i].toLowerCase().split("").sort().join(""); // строка с отсортированными буквами
        obj[sorted] = arr[i]; // по отдельным словам
    }
    return Object.values(obj); // Array.from(map.values()) принимает итерируемый объект значений объекта Map и возвращает их в виде массива.
}

// Task 32 Оставить уникальные елементы массива
let stringsForUnique = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];
function unique(arr) {
    let result = [];
    for (let str of arr) {
        if (!result.includes(str)) {
            result.push(str);
        }
    }
    return result;
}
/* Таким образом, если result содержит 100 элементов и ни один не совпадает со str,
тогда он обойдёт весь result и сделает ровно 100 сравнений.
А если result большой, например, 10000, то будет произведено 10000 сравнений.
Поэтому, если arr.length равен 10000, у нас будет что-то вроде 10000*10000 = 100 миллионов сравнений.
Это многовато.*/

// ----------------------------------------------------------------------------------

// Перебирающие методы массивов
// для их пожжержки в IE8 подключить ES5-shim

// forEach // arr.forEach(callback[, thisArg]); вызывает ф-ю callback
// item - очередной елемент
// i - его номер
// arr -  массив
// forEach как более елегантный вариант перебора цикла чем обычный for

// filter // arr.filter (callback[, thisArg]);
// создает новый массив в который войдуи только елементы arr для которых вызов вернет true

// map // rr.map(callback[, thisArg]); >> трансформация массива

// every/some >> проверка массива
// arr.every(callback[, thisArg]); >> вернет true если каждый елемент arr вернет true 
// arr.some(callback[, thisArg]); >> вернет true если какой-то елемент arr вернет true

// reduce/reduceRight // arr.forEach(callback[, initialValue]); используетьяс для обработки каждогоелемента масссива
// с сохранением промежуточного оезультата !!!
// callback для каждого елемента массива сохроняя промежуточный результат
// аргументы ф-ии callback(prevValue, currenItem, indx, arr)
// prevValue - последний результат вызова (он же и промежуточный)
// currenItem - текущий елемент массива (слева на право)
// ! если reduce не имеет воторого аргумента оно = первому елементу масива и перебор нчнеться со второго
// reduceRight - работает аналогично но идет с права на лево

// ----------------------------------------------------------------------------------

// Task 33 // цикл через map
function throughMap(arr) {
    let arrLenght = arr.map(function (item) { // каждый елемент
        return item.length; // длина каждого елемента в arrLenght
    });
    return arrLenght;
};

// Task 34 // массив частных сумм
function getSum(arr) {
    let result = []; // создвем смассив
    if (!arr.length) return result; // если масив пуст вернет result

    let totalSum = arr.reduce(function (sum, item) { // проходит по массиву слева направл
        result.push(sum); // пушит первый едемент в пустой массив
        return sum + item; // на каждом елементе добаляет к нему предыдущий елемент
    });
    result.push(totalSum); // добавляет последний елемент так как по дефотлу reduce к нему не доходит
    return result;
};

// ----------------------------------------------------------------------------------

// Task 35 // псевдомассив аргументов "arguments"
// В старом стандарте JavaScript псевдо-массив arguments и переменные-параметры ссылаются на одни и те же значения.
/* Например:
function f(x) {
    arguments[0] = 5; // меняет переменную x
    alert(x); // 5
}
f(1);
Наоборот:
function f(x) {
    x = 5;
    alert(arguments[0]); // 5, обновлённый x
}
f(1); */
// В современной редакции стандарта это поведение изменено. Аргументы отделены от локальных переменных:

/* Если вы не используете строгий режим,
то чтобы переменные не менялись «неожиданно»,
рекомендуется никогда не изменять arguments. */

// arguments – это не массив
// В действительности arguments - это обычный объект, просто ключи числовые и есть length

/* function copy(dst) { // Для объединения нескольких объектов в один:
    for (var i = 1; i < arguments.length; i++) { // перебор аргументов в ф-ии
        var arg = arguments[i]; // добавляет в переменную объекты из аргументов
        for (var key in arg) { // перебор свойств из бъектов
            dst[key] = arg[key]; добавление свойств в объект dist
        }
    }
    return dst;
} */
// ----------------------------------------------------------------------------------

// Аргументы по умолчанию через ||
/* function showWarning(width, height, title, contents) {
  width = width || 200; // если не указана width, то width = 200
  height = height || 100; // если нет height, то height = 100
  title = title || "Предупреждение";

  //...
} */

/* function showWarning(width, height, title, contents) { // только если width === undefined
  if (width === undefined) width = 200;
  if (height === undefined) height = 100;
  if (title === undefined) title = "Предупреждение";

  //...
} */

// ----------------------------------------------------------------------------------

// Именованные аргументы – альтернативная техника работы с аргументами, которая вообще не использует arguments.

// В JavaScript для этих целей используется передача аргументов в виде объекта, а в его свойствах мы передаём параметры.
/* function showWarning(options) {
  var width = options.width || 200; // по умолчанию
  var height = options.height || 100;

  var contents = options.contents || "Предупреждение";

  // ...
} */

// Вызвать такую функцию очень легко. Достаточно передать объект аргументов, указав в нем только нужные:

/* showWarning({
  contents: "Вы вызвали функцию" // и всё понятно!
}); */

// Ещё один бонус кроме красивой записи – возможность повторного использования объекта аргументов:

/* var opts = {
  width: 400,
  height: 200,
  contents: "Текст"
};

showWarning(opts);

opts.contents = "Другой текст";

showWarning(opts); // вызвать с новым текстом, без копирования других аргументов */

// !! Именованные аргументы применяются во многих JavaScript-фреймворках. !!

// ----------------------------------------------------------------------------------

// Task 36
function isUndefiened(x) { // проверка аргумента на undfined 
    return arguments.length ? 1 : 0;
}

// Task 36 сумма аргументов
/* function sumArg() {
    let result = 0;
    for (let i = 0; i < arguments.length; i++) {
        result += arguments[i];
    };
    return result;
} */


// ----------------------------------------------------------------------------------

// Date & time
// new Date(milliseconds) > (1/1000 sec from 1 jan 1970)
// new Date(milliseconds) 
// new Date(year, month, date, hours, minutes, seconds, ms) >> обязательны первые 2 аргумента

// получение компонентов даты
// getFullYear()
// getMonth() 
// getDate() > day
// getHours()
// getMinutes()
// getSeconds()
// getMilliseconds()

// неделя в JS начинаеться с вск!
// UTC
// getUTCFullYear()
// getUTCMonth()
// getUTCDay() ... etc.

// getTime() >> число миллисекунд с 1970
// geTimezoneOffset() >> разница между местным и UTC в минутах

// ----------------------------------------------------------------------------------

// Установка компонентов даты + UTC варианты (setUTCHours())
// setFullYear(year[, month, date])
// setMonth(month [, date]) 
// setDate(date) > day
// setHours(hour[, min, sec, ms])
// setMinutes(min[, sec, ms])
// setSeconds(sec[,ms])
// getMilliseconds(ms)
// setTime(Milliseconds) > уст. всю дату по ms. 

// Автоиспавление даты
//var d = new Date(2013, 0, 32); // 32 января 2013 ?!?
//alert(d); // ... это 1 февраля 2013!

//var d = new Date(2011, 1, 28);
//d.setDate(d.getDate() + 2); // установить дату + 2 дня
//alert( d ); // 2 марта, 2011 

//var d = new Date(); 
//d.setSeconds(d.getSeconds() + 70);// на 70 секунд больше
//alert( d ); // выведет корректную дату

// Можно установить и нулевые, и даже отрицательные компоненты.
//d.setDate(1); // поставить первое число месяца
//alert( d );

// ----------------------------------------------------------------------------------

//Преобразование к числу, разность дат
// Когда объект Date используется в числовом контексте, он преобразуется в количество миллисекунд:
// alert(+new Date) // +date то же самое, что: +date.valueOf()

// Важный побочный эффект: даты можно вычитать, результат вычитания объектов Date – их временная разница, 
// в миллисекундах.

// Бенчмаркинг !
// Померяем, какая из функций быстрее:
/*var arr = [];

for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
    for (var key in arr) arr[key]++;
}
function walkLength(arr) {
    for (var i = 0; i < arr.length; i++) arr[i]++;
}
function bench(f) {
    var date = new Date();
    for (var i = 0; i < 10000; i++) f(arr);
    return new Date() - date;
}
alert('Время walkIn: ' + bench(walkIn) + 'мс');
alert('Время walkLength: ' + bench(walkLength) + 'мс'); */

// Гораздо более надёжные результаты можно получить, если весь пакет тестов прогнать много раз.

/* var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
    for (var key in arr) arr[key]++;
}

function walkLength(arr) {
    for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
    var date = new Date();
    for (var i = 0; i < 1000; i++) f(arr);
    return new Date() - date;
}

// bench для каждого теста запустим много раз, чередуя
var timeIn = 0,
    timeLength = 0;
for (var i = 0; i < 100; i++) {
    timeIn += bench(walkIn);
    timeLength += bench(walkLength);
}

alert('Время walkIn: ' + timeIn + 'мс');
alert('Время walkLength: ' + timeLength + 'мс'); */

// performance.now()
// вызов performance.now() возвращает количество миллисекунд, прошедшее с начала загрузки страницы.
// Для бенчмаркинга лучше использовать performance.now()


// console.time(метка) && console.timeEnd(метка)

// console.time(метка) – включить внутренний хронометр браузера с меткой.
// console.timeEnd(метка) – выключить внутренний хронометр браузера с меткой и вывести результат.

/* Параметр "метка" используется для идентификации таймера, чтобы можно было делать много замеров одновременно
и даже вкладывать измерения друг в друга.В коде ниже таймеры walkIn, walkLength – конкретные тесты,
а таймер «All Benchmarks» – время «на всё про всё»: */

/* var arr = [];
for (var i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
    for (var key in arr) arr[key]++;
}

function walkLength(arr) {
    for (var i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
    for (var i = 0; i < 10000; i++) f(arr);
}

console.time("All Benchmarks");

console.time("walkIn");
bench(walkIn);
console.timeEnd("walkIn");

console.time("walkLength");
bench(walkLength);
console.timeEnd("walkLength");

console.timeEnd("All Benchmarks"); */

// ----------------------------------------------------------------------------------

// Современные интерпретаторы JavaScript делают массу оптимизаций, например:

// 1. Автоматически выносят в цикле значение типа arr.length, за пределы цикла.
// 2. Стараются понять, значения какого типа хранит данная переменная или массив, 
// какую структуру имеет объект и, исходя из этого, оптимизировать внутренние алгоритмы.
// 3. Выполняют простейшие операции на этапе компиляции.
// 4. Могут обнаружить, ни на что не влияющтй код и вообще исключить его из выполнения, хотя делают это редко.

// ----------------------------------------------------------------------------------

/* var date = new Date(2014, 11, 31, 12, 30, 0);

var options = {
  era: 'long',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long',
  timezone: 'UTC',
  hour: 'numeric',
  minute: 'numeric',
  second: 'numeric'
};

alert( date.toLocaleString("ru", options) ); // среда, 31 декабря 2014 г. н.э. 12:30:00
alert( date.toLocaleString("en-US", options) ); // Wednesday, December 31, 2014 Anno Domini 12:30:00 PM */

// toString() возвращает дату целиком
// toDateString() и toTimeString() – только дату и время.

/* Если хочется иметь большую гибкость и кросс-браузерность, то также можно воспользоваться специальной библиотекой,
например Moment.JS или написать свою функцию форматирования. */

// ----------------------------------------------------------------------------------

// Date.parse
// var msUTC = Date.parse('2012-01-26T13:51:50.417Z'); // зона UTC
// alert( msUTC ); // 1327571510417 (число миллисекунд)

// Date.now() >> возвращает дату сразу в виде миллисекунд.
/* Технически, он аналогичен вызову +new Date(), но в отличие от него не создаёт промежуточный объект даты, а поэтому – во много раз быстрее.
Его использование особенно рекомендуется там, где производительность при работе с датами критична. Обычно это не на веб-страницах, а, к примеру, в разработке игр на JavaScript. */

// ----------------------------------------------------------------------------------

// Task 37 create a date
function newDate() {
    let date = new Date('February 20, 2012 03:12:00');
    return date;
}

// Task 38 name of the weekday
function getWeekDay() {
    /* let week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'],
        currentDay = new Date(),
        day = currentDay.getDay();
    return week[day]; */

    let options = {
        weekday: 'short',
    },
        currentDay = new Date();
    return currentDay.toLocaleString("ru", options);
}

// Task 39
function getLocalDay(date) {
    let weekDay = new Date(date);
    return weekDay.getDay() - 1;
}

// Task 40 last day of month
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month, -1, 0);
    return date.getDate();
}

// Task 41 'day ago'
function getDayAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date.getDate();
}

// Task 42 'seconds are past'
function getSecondsToday() {
    let now = new Date();

    // создаём объект с текущими днём/месяцем/годом
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

    let diff = now - today; // разница в миллисекундах
    return Math.round(diff / 1000); // получаем секунды
}

// В качестве альтернативного решения можно получить часы/минуты и преобразовать их в секунды:

function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

// Task 43 second before tomorrow

function getSecondsToTomorrow() {
    let now = new Date();

    // завтрашняя дата
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let diff = tomorrow - now; // разница в миллисекундах
    return Math.round(diff / 1000); // преобразуем в секунды
}

// Альтернативное решение:

function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;

    return totalSecondsInADay - totalSecondsToday;
}

// Task 44 special Date

function formatDate(date) {

    var dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    var mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    var yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

var d = new Date(2014, 0, 30); // 30 Янв 2014
// formatDate(d); // '30.01.14'

// Task 45 орматирование относительной даты

/* Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
В противном случае, если меньше часа, вывести "m мин. назад".
В противном случае, полная дата в формате "DD.MM.YY HH:mm". А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00. */

function formatDate(date) {
    let diff = new Date() - date; // разница в миллисекундах

    if (diff < 1000) { // меньше 1 секунды
        return 'прямо сейчас';
    }

    let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

    if (sec < 60) {
        return sec + ' сек. назад';
    }

    let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
    if (min < 60) {
        return min + ' мин. назад';
    }

    // отформатировать дату
    // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
    let d = date;
    d = [
        '0' + d.getDate(),
        '0' + (d.getMonth() + 1),
        '' + d.getFullYear(),
        '0' + d.getHours(),
        '0' + d.getMinutes()
    ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

    // соединить компоненты в дату
    return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
}

// alert(formatDate(new Date(new Date - 1))); // "прямо сейчас"

// alert(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

// alert(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
// alert(formatDate(new Date(new Date - 86400 * 1000)));

// альтернаимвное решение

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;

    // форматирование
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    if (diffSec < 1) {
        return 'прямо сейчас';
    } else if (diffMin < 1) {
        return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
        return `${diffMin} мин. назад`
    } else {
        return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

// Task 46 Функция - строковый буфер

function makeBuffer() {
    var text = '';

    return function (piece) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        text += piece;
    };
};

// Task 47 строковой буфер с очисткой
function makeBuffer() {
    var text = '';

    function buffer(piece) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        text += piece;
    };

    buffer.clear = function () {
        text = "";
    }

    return buffer;
};

// Task 48 сортировка

function makeBuffer() {
    var text = '';

    function buffer(piece) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        text += piece;
    };

    buffer.clear = function () {
        text = "";
    }

    return buffer;
};

function inArray(arr) {
    return function (x) {
        return arr.includes(x);
    };
}

let arr = [1, 2, 3, 4, 5, 6, 7];
alert(arr.filter(inArray([1, 2, 10]))); // 1,2

// Task 49 фильтрация через функцию


