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

// Перебирающие методы












