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
    let str = "" + num; // переводит цифр в строку
    let zeroPos = str.indexOf("."); // цифра перео точкой
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
    for (let i = 1; i < arguments.length; i++) { // перебор аргументов в ф-ии
        let arg = arguments[i]; // добавляет в переменную объекты из аргументов
        for (let key in arg) { // перебор свойств из бъектов
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
  let width = options.width || 200; // по умолчанию
  let height = options.height || 100;

  let contents = options.contents || "Предупреждение";

  // ...
} */

// Вызвать такую функцию очень легко. Достаточно передать объект аргументов, указав в нем только нужные:

/* showWarning({
  contents: "Вы вызвали функцию" // и всё понятно!
}); */

// Ещё один бонус кроме красивой записи – возможность повторного использования объекта аргументов:

/* let opts = {
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
//let d = new Date(2013, 0, 32); // 32 января 2013 ?!?
//alert(d); // ... это 1 февраля 2013!

//let d = new Date(2011, 1, 28);
//d.setDate(d.getDate() + 2); // установить дату + 2 дня
//alert( d ); // 2 марта, 2011 

//let d = new Date(); 
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
/*let arr = [];

for (let i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
    for (let key in arr) arr[key]++;
}
function walkLength(arr) {
    for (let i = 0; i < arr.length; i++) arr[i]++;
}
function bench(f) {
    let date = new Date();
    for (let i = 0; i < 10000; i++) f(arr);
    return new Date() - date;
}
alert('Время walkIn: ' + bench(walkIn) + 'мс');
alert('Время walkLength: ' + bench(walkLength) + 'мс'); */

// Гораздо более надёжные результаты можно получить, если весь пакет тестов прогнать много раз.

/* let arr = [];
for (let i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
    for (let key in arr) arr[key]++;
}

function walkLength(arr) {
    for (let i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
    let date = new Date();
    for (let i = 0; i < 1000; i++) f(arr);
    return new Date() - date;
}

// bench для каждого теста запустим много раз, чередуя
let timeIn = 0,
    timeLength = 0;
for (let i = 0; i < 100; i++) {
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

/* let arr = [];
for (let i = 0; i < 1000; i++) arr[i] = 0;

function walkIn(arr) {
    for (let key in arr) arr[key]++;
}

function walkLength(arr) {
    for (let i = 0; i < arr.length; i++) arr[i]++;
}

function bench(f) {
    for (let i = 0; i < 10000; i++) f(arr);
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

/* let date = new Date(2014, 11, 31, 12, 30, 0);

let options = {
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
// let msUTC = Date.parse('2012-01-26T13:51:50.417Z'); // зона UTC
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

    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;

    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;

    let yy = date.getFullYear() % 100;
    if (yy < 10) yy = '0' + yy;

    return dd + '.' + mm + '.' + yy;
}

let d = new Date(2014, 0, 30); // 30 Янв 2014
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
    let text = '';

    return function (piece) {
        if (arguments.length == 0) { // вызов без аргументов
            return text;
        }
        text += piece;
    };
};

// Task 47 строковой буфер с очисткой
function makeBuffer() {
    let text = '';

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
    let text = '';

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

// =====================================================

// Work with spread operators apply(), [...arr1] etc.

// '...'

// - Copying an array >>>  arr1 = [...arr2]
const fruits = ['🍏', '🍊', '🍌', '🍉', '🍍']
const moreFruits = [...fruits];
console.log(moreFruits) // Array(5) [ "🍏", "🍊", "🍌", "🍉", "🍍" ]
fruits[0] = '🍑'
console.log(...[...fruits, '...', ...moreFruits]) //  🍑 🍊 🍌 🍉 🍍 ... 🍏 🍊 🍌 🍉 🍍

// - Concatenating or combining arrays
const myArray = [`🤪`, `🐻`, `🎌`]
const yourArray = [`🙂`, `🤗`, `🤩`]
const ourArray = [...myArray, ...yourArray]
console.log(...ourArray) // 🤪 🐻 🎌 🙂 🤗 🤩

// - Using Math functions
let arr = [1, 5, 10];
Math.max(...arr) // 10

// - Using an array as arguments
const fruitStand = ['🍏', '🍊', '🍌']
const sellFruit = (f1, f2, f3) => { console.log(`Fruits for sale: ${f1}, ${f2}, ${f3}`) }
sellFruit(...fruitStand) // Fruits for sale: 🍏, 🍊, 🍌
fruitStand.pop()
fruitStand.pop()
fruitStand.push('🍉')
fruitStand.push('🍍')
sellFruit(...fruitStand) // Fruits for sale: 🍏, 🍉, 🍍
fruitStand.pop()
fruitStand.pop()
sellFruit(...fruitStand, '🍋') // Fruits for sale: 🍏, 🍋, undefined

// - Adding an item to a list
const fewFruit = ['🍏', '🍊', '🍌']
const fewMoreFruit = ['🍉', '🍍', ...fewFruit]
console.log(fewMoreFruit) //  Array(5) [ "🍉", "🍍", "🍏", "🍊", "🍌" ]

// - Adding to state in React 
// https://gist.github.com/djD-REK/9b8d671c8614674104bb076caddc5d2a#file-using-spread-operator-to-add-an-item-to-react-state-js

// - Combining objects 
const objectOne = { hello: "🤪" }
const objectTwo = { world: "🐻" }
const objectThree = { ...objectOne, ...objectTwo, laugh: "😂" }
console.log(objectThree) // Object { hello: "🤪", world: "🐻", laugh: "😂" }
const objectFour = { ...objectOne, ...objectTwo, laugh: () => { console.log("😂".repeat(5)) } }
objectFour.laugh() // 😂😂😂😂😂 // вызов через скомбенированную функцию

//   - Converting NodeList to an array * /
// [...document.querySelectorAll('div')]

// =====================================================
// ES6

// Destructuring Assignment to Extract Values from Objects ????

const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES; // ES5
const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
};
const { today: { low: lowToday, high: highToday } } = LOCAL_FORECAST; // ES6

// =====================================================
// removeFirstTwo

function removeFirstTwo(list) {
    const [a, b, ...arr] = list;
    return arr; // [3, 4, 5, 6, 7, 8, 9, 10]
}

// =====================================================

// time html // для указания времени
// <p>The match finished at <time datetime="2001-05-15">15 of May</time>.</p>

// =====================================================

// input html (предназначен для создания текстовых полей, различных кнопок, переключателей и флажков.)
// type: text / password / radio / checkbox / hidden / button / submit / reset / file / image 
// Atributes: accept (data type file filter for submit) / autocomplete / form (связиает с формой) / max / min / placeholder / required ...

// =====================================================

// fieldset html предназначен для группирования элементов формы

// =====================================================

// Template Literals

for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning">${arr[i]}</li>`);
}
// const resultDisplayArray = arr.map(item => `<li class="text-warning">${item}</li>`); (without for loop)

// =====================================================

// ES5 
const person = {
    name: "Taylor",
    sayHello: function () {
        return `Hello! My name is ${this.name}.`;
    }
};

// ES6 
const person = {
    name: "Taylor",
    sayHello() {
        return `Hello! My name is ${this.name}.`;
    }
};

// =====================================================
// js classes

class Vegetable {
    constructor(name) {
        this.name = name
    }
}
const carrot = new Vegetable('carrot');
console.log(carrot.name); // Should display 'carrot'

// =====================================================
// Use getters and setters
// get - связывает свойство объекта с функцией (and creates a function), которая будет вызываться при обращении к этому свойству.
// set - связывает свойство объекта с функцией, которая будет вызвана при попытке установить это свойство.
class Thermostat { // create a class
    constructor(fahrenheit) {
        this.fahrenheit = fahrenheit;
    }
    get temperature() { // use getter
        return (5 / 9) * (this.fahrenheit - 32);
    }
    set temperature(celsius) { // use setter
        this.fahrenheit = (celsius * 9.0) / 5 + 32;
    }
}

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius


// =====================================================

// Create a Module Script позволяет подключать модули
// <script type="module" src="index.js"></script>

// =====================================================

// Use export to Share a Code Block

const lowercaseString = (string) => {
    return string.toLowerCase()
}
export { lowercaseString } // експортирут функцию

// =====================================================

// Reuse JavaScript Code Using import
import { lowercaseString } from './string_functions.js';

// =====================================================
// Use * to Import Everything from a File
import * as stringFunctions from './index.js';

// =====================================================

// Create an Export Fallback with export default
// Если мы хотим экспортировать единственное значение или 
// иметь резервное значение (fallback) для данного модуля, мы можем использовать export default.
export default function subtract(x, y) {
    return x - y;
}

// =====================================================

//Create a JavaScript Promise используется для отложенных и асинхронных вычислений.
const makeServerRequest = new Promise((resolve, reject) => { });

// =====================================================
// Complete a Promise
const makeServerRequest = new Promise((resolve, reject) => {
    let responseFromServer;
    if (responseFromServer) {
        resolve('We got the data');
    } else {
        reject('Data not received')
    }
});

// =====================================================

// Handle a Fulfilled Promise with then / catch
const makeServerRequest = new Promise((resolve, reject) => {

    let responseFromServer = true;

    if (responseFromServer) {
        resolve("We got the data");
    } else {
        reject("Data not received");
    }
});

// =====================================================

/* Regular expressions */

let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/; // Change this line
let result = petRegex.test(petString); // true
let result = extractStr.match(codingRegex); // ["coding", index: 18, input: "Extract the word 'coding' from this string.", groups: undefined]

// i flag = ignore case
// g flag = To search or extract a pattern more than once.
//  '.' will match any one character. let unRegex = /.un/; 
// [aiu] = define a group of characters you wish
// [a-z] = matched wetween this letters
// [a-z2-6] = matched wetween this letters and numbers
// /[^aeiou0-9]/gi = negated character sets (not a wovel and numbers)
// s+ = возвращает совпадения и если два совпадения подряд возвращает как одно совпадение
// Aa* = если более одного совпадеия, совпадеия вернется
// ? = lazy matching ищет как бы ближайшее совпадение 
let text = "<h1>Winter is coming</h1>";
let myRegex = /<.?>/; // it's the answer!
let result = text.match(myRegex);
// $ = You can search the end of strings
// \w = This shortcut is equal to [A-Za-z0-9_]
// \W = This shortcut is equal to [^A-Za-z0-9_]. (ищет все кроме букв и цифр)
// \d = иещет все цифры
// \D = все кроме цифр
// \s = search for whitespace 
// \S = non whitespace
// Oh{3,5} = уточняет сколько должно быть овпадений что бы оно вернулось
let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Change this line
let result = haRegex.test(haStr);
// /favou?rite/ = позволяет менять последнюю букву до знака
// (Frank|Max).*Jameson = может быть несколько вариантов

// lookahead (?=...) where the ... is the required part that is not matched
// A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there.
// Use lookaheads in the pwRegex to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);

// match numbers that are repeated only three times in a string
let repeatNum = "42 42 42";
let reRegex = /^(\d+)\s\1\s\1$/; // Change this line
let result = reRegex.test(repeatNum);

// replace "one two three" with the string "three two one"
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

// Remove whitespace
let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex, ""); // Change this line

// /^[a-z]([0-9][0-9]+|[a-z]+\d*)$/i
/* Code Explanation
^ - start of input
[a-z] - first character is a letter
[0-9][0-9]+ - ends with two or more numbers
| - or
[a-z]+ - has one or more letters next
\d* - and ends with zero or more numbers
$ - end of input
i - ignore case of input */

// /Oh{3,6}\sno/gi; ???



// =====================================================

// Task / is it a digit?
String.prototype.digit = function () { // create a string prototype
    return /^\d$/g.test(this);
};
'1'.digit() // true
'14'.digit() // false

// =====================================================

// Task / Simple validation of a username with regex
function validateUsr(username) {
    /**
      - `^`        Start from the beginning of the string.
      - `[]`       Allow any character specified, including...
      - `a-z`      anything from a to z,
      - `0-9`      anything from 0 to 9,
      - `_`        and underscore.
      - `{4,16}`   Accept 4 to 16 of allowed characters, both numbers included.
      - `$`        End the string right after specified amount of allowed characters is given.
    */
    const validator = /^[a-z0-9_]{4,16}$/;

    return validator.test(username);
}

// =====================================================

// Task / A Strange Trip to the Market
function isLockNessMonster(s) {
    let reg = /3.50|three fifty|tree fiddy/;
    return reg.test(s);
}

// =====================================================

// Task / validate code with simple regex
function validateCode(code) {
    return /^[1|2|3]/.test(code);
}

// =====================================================

// Task / Regex count lowercase letters
function lowercaseCount(str) {
    return (str.match(/[a-z]/g) || []).length // возвращает длину масива созданного матчем
}


// Palindrome cheker
function palindrome(str) {
    return (
        str.replace(/[\W_]/g, "").toLowerCase() ===
        str
            .replace(/[\W_]/g, "")
            .toLowerCase()
            .split("")
            .reverse()
            .join("")
    );
}

function palindrome(str) {
    str = str.toLowerCase().replace(/[\W_]/g, "");
    for (let i = 0, len = str.length - 1; i < len / 2; i++) {
        if (str[i] !== str[len - i]) {
            return false;
        }
    }
    return true;
}

// Roman Numeral Converter
// solution 1
let convertToRoman = function (num) {
    let decimalValue = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let romanNumeral = [
        "M",
        "CM",
        "D",
        "CD",
        "C",
        "XC",
        "L",
        "XL",
        "X",
        "IX",
        "V",
        "IV",
        "I"
    ];

    let romanized = "";

    for (let index = 0; index < decimalValue.length; index++) {
        while (decimalValue[index] <= num) {
            romanized += romanNumeral[index];
            num -= decimalValue[index];
        }
    }

    return romanized;
};

// test here
convertToRoman(36);

// solution 2 

function convertToRoman(num) {
    let romans = ["I", "V", "X", "L", "C", "D", "M"],
        ints = [],
        romanNumber = [],
        numeral = "",
        i;
    while (num) {
        ints.push(num % 10);
        num = Math.floor(num / 10);
    }
    for (i = 0; i < ints.length; i++) {
        units(ints[i]);
    }
    function units() {
        numeral = romans[i * 2];
        switch (ints[i]) {
            case 1:
                romanNumber.push(numeral);
                break;
            case 2:
                romanNumber.push(numeral.concat(numeral));
                break;
            case 3:
                romanNumber.push(numeral.concat(numeral).concat(numeral));
                break;
            case 4:
                romanNumber.push(numeral.concat(romans[i * 2 + 1]));
                break;
            case 5:
                romanNumber.push(romans[i * 2 + 1]);
                break;
            case 6:
                romanNumber.push(romans[i * 2 + 1].concat(numeral));
                break;
            case 7:
                romanNumber.push(romans[i * 2 + 1].concat(numeral).concat(numeral));
                break;
            case 8:
                romanNumber.push(
                    romans[i * 2 + 1]
                        .concat(numeral)
                        .concat(numeral)
                        .concat(numeral)
                );
                break;
            case 9:
                romanNumber.push(romans[i * 2].concat(romans[i * 2 + 2]));
        }
    }
    return romanNumber
        .reverse()
        .join("")
        .toString();
}

// test here
convertToRoman(97);


// solution 3 

function convertToRoman(num) {
    let romans = [
        // 10^i 10^i*5
        ["I", "V"], // 10^0
        ["X", "L"], // 10^1
        ["C", "D"], // 10^2
        ["M"] // 10^3
    ],
        digits = num
            .toString()
            .split("")
            .reverse()
            .map(function (item, index) {
                return parseInt(item);
            }),
        numeral = "";

    // Loop through each digit, starting with the ones place
    for (let i = 0; i < digits.length; i++) {
        // Make a Roman numeral that ignores 5-multiples and shortening rules
        numeral = romans[i][0].repeat(digits[i]) + numeral;
        // Check for a Roman numeral 5-multiple version
        if (romans[i][1]) {
            numeral = numeral
                // Change occurrences of 5 * 10^i to the corresponding 5-multiple Roman numeral
                .replace(romans[i][0].repeat(5), romans[i][1])
                // Shorten occurrences of 9 * 10^i
                .replace(
                    romans[i][1] + romans[i][0].repeat(4),
                    romans[i][0] + romans[i + 1][0]
                )
                // Shorten occurrences of 4 * 10^i
                .replace(romans[i][0].repeat(4), romans[i][0] + romans[i][1]);
        }
    }

    return numeral;
}

// test here
convertToRoman(36);



// Caesars Cipher

function rot13(str) {
    // Split str into a character array
    return (
        str
            .split("")
            // Iterate over each character in the array
            .map.call(str, function (char) {
                // Convert char to a character code
                let x = char.charCodeAt(0);
                // Checks if character lies between A-Z
                if (x < 65 || x > 90) {
                    return String.fromCharCode(x); // Return un-converted character
                }
                //N = ASCII 78, if the character code is less than 78, shift forward 13 places
                else if (x < 78) {
                    return String.fromCharCode(x + 13);
                }
                // Otherwise shift the character 13 places backward
                return String.fromCharCode(x - 13);
            })
            .join("")
    ); // Rejoin the array into a string
}


// Telephone Number Validator

function telephoneCheck(str) {
    let regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}
telephoneCheck("555-555-5555");

/* Code Explanation
- ^ denotes the beginning of the string.
- (1\s?)? allows for “1” or "1 " if there is one.
- \d{n} checks for exactly n number of digits so \d{3} checks for three digits.
- x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
- [\s\-]? checks for spaces or dashes between the groups of digits.
- $ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).
- Lastly we use regex.test(str) to test if the string adheres to the regular expression, it returns true or false. */

// Cash Register
/* You have to create a program that will return an object containing a status key and a change key. The value of status is the string INSUFFICIENT_FUNDS, CLOSED, or OPEN, and the value of change is a 2D array of the change due. */
// Create an array of objects which hold the denominations and their values
let denom = [
    { name: "ONE HUNDRED", val: 100.0 },
    { name: "TWENTY", val: 20.0 },
    { name: "TEN", val: 10.0 },
    { name: "FIVE", val: 5.0 },
    { name: "ONE", val: 1.0 },
    { name: "QUARTER", val: 0.25 },
    { name: "DIME", val: 0.1 },
    { name: "NICKEL", val: 0.05 },
    { name: "PENNY", val: 0.01 }
];

function checkCashRegister(price, cash, cid) {
    let output = { status: null, change: [] };
    let change = cash - price;

    // Transform CID array into drawer object
    let register = cid.reduce(
        function (acc, curr) {
            acc.total += curr[1];
            acc[curr[0]] = curr[1];
            return acc;
        },
        { total: 0 }
    );

    // Handle exact change
    if (register.total === change) {
        output.status = "CLOSED";
        output.change = cid;
        return output;
    }

    // Handle obvious insufficient funds
    if (register.total < change) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    // Loop through the denomination array
    let change_arr = denom.reduce(function (acc, curr) {
        let value = 0;
        // While there is still money of this type in the drawer
        // And while the denomination is larger than the change remaining
        while (register[curr.name] > 0 && change >= curr.val) {
            change -= curr.val;
            register[curr.name] -= curr.val;
            value += curr.val;

            // Round change to the nearest hundreth deals with precision errors
            change = Math.round(change * 100) / 100;
        }
        // Add this denomination to the output only if any was used.
        if (value > 0) {
            acc.push([curr.name, value]);
        }
        return acc; // Return the current change_arr
    }, []); // Initial value of empty array for reduce

    // If there are no elements in change_arr or we have leftover change, return
    // the string "Insufficient Funds"
    if (change_arr.length < 1 || change > 0) {
        output.status = "INSUFFICIENT_FUNDS";
        return output;
    }

    // Here is your change, ma'am.
    output.status = "OPEN";
    output.change = change_arr;
    return output;
}

// test here
checkCashRegister(19.5, 20.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0]
]);

/* Code Explanation
First, create an array of objects with the value of each denomination of bill or coin, along with an output object with the status and change keys. 
Next, transform the CID array into a drawer object. Then, handle the conditions of exact change and insufficient funds. Loop through the denom array 
and update the change and values while there is still money of each type in the drawer and while the denomination is larger than the change remaining. 
Add this denomination to the accumulator of change_arr if any of this type was used. After the loop, change_arr is a 2D array of the change due, sorted 
from highest to lowest denomination. If there are no elements in change_arr or you still owe change, return the output object with a status of INSUFFICIENT_FUNDS. 
Finally you can give the correct change. Return the output object with a status of OPEN and change_arr as the value of change. */


// Copy an Array with spread operator
let copyArr = (arr, num) => {
    let newArr = [];
    while (num <= 1) {
        newArr.push([...arr])
        num--;
    }
    return newArr;
}

// Add fragment with spread operator

let addFragment = () => {
    let fragment = [2, 3];
    let numbersToFive = [1, ...fragment, 4, 5];
    return numbersToFive; // [1, 2, 3, 4, 5]
}

// Iterate Through All an Array's Items Using For Loops

function filteredArray(arr, elem) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        arr[i].indexOf(elem) === -1 ? newArr.push(arr[i]) : true
    }
    return newArr;
}
console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


// Factorialize a Number

// Solution 1 (Recursion) 
function factorialize(num) {
    if (num === 0) {
        return 1;
    }
    return num * factorialize(num - 1);
}

factorialize(5);

// solution 2 
function factorialize(num) {
    for (let product = 1; num > 0; num--) {
        product *= num;
    }
    return product;
}

factorialize(5);

// solution 3 
function factorialize(num, factorial = 1) {
    if (num == 0) {
        return factorial;
    } else {
        return factorialize(num - 1, factorial * num);
    }
}

factorialize(5);


// Solution 4 
function factorialize(num, factorial = 1) {
    return num < 0 ? 1 : (
        new Array(num)
            .fill(undefined)
            .reduce((product, val, index) => product * (index + 1), 1)
    );
}
factorialize(5);


// Find the Longest Word in a String
function findLongestWordLength(str) {
    str = str.split(' ');
    return str.sort((a, b) => a.length - b.length)[str.length - 1].length;
}
function findLongestWordLength2(str) {
    return Math.max(...str.split(" ").map(word => word.length));
}

// Return Largest Numbers in Arrays
function largestOfFour(arr) {
    return arr.map((group) => group.reduce((prev, current) => current > prev ? current : prev));
}
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// Confirm the Ending

function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

// Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    let accumulatedStr = "";

    while (num > 0) {
        accumulatedStr += str;
        num--;
    }

    return accumulatedStr;
}

// Repeat a String
function repeatStringNumTimes(str, num) {
    return num > 0 ? str + repeatStringNumTimes(str, num - 1) : '';
}

//Truncate a String
function truncateString(str, num) {
    return str.length > num ? str.slice(0, num) + '...' : str;
}

// Find first element wich pass the func
let elemPass = (arr, func) => arr.find(func);

// Title Case a Sentence
function titleCase(str) {
    let convertToArray = str.toLowerCase().split(" ");
    let result = convertToArray.map(function (val) {
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
}

titleCase("I'm a little tea pot");


// Chunky Monkey // split arr (first argument) into smaller chunks of arrays with the length provided by size (second argument). https://forum.freecodecamp.org/t/freecodecamp-challenge-guide-chunky-monkey/16005                          
function chunkArrayInGroups(arr, size) {
    let newArr = [];
    while (arr.length) {
        newArr.push(arr.splice(0, size));
    }
    return newArr;
}

// Mutations // Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array…

function mutation(arr) {
    let test = arr[1].toLowerCase();
    let target = arr[0].toLowerCase();
    for (let i = 0; i < test.length; i++) {
        if (target.indexOf(test[i]) < 0) return false;
    }
    return true;
}

// Where do I Belong // You need to find where in the array a number should be inserted by order, and return the index where it should go.

function getIndexToIns(arr, num) {
    arr.sort(function (a, b) {
        return a - b;
    });

    for (let a = 0; a < arr.length; a++) {
        if (arr[a] >= num) return a;
    }

    return arr.length;
}

// Falsy Bouncer // Remove all falsy values from an array.

function bouncer(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) newArray.push(arr[i]);
    }
    return newArray;
}

// Slice and Splice // We need to copy each element from the first array into the second array starting at the index n.

function frankenSplice(arr1, arr2, n) {
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
}

/* 
    \'	=> single quote
    \"	=> double quote
    \\  => backslash
    \n	=> newline
    \r	=> carriage return
    \t	=> tab
    \b	=> word boundary
    \f	=> form feed 
*/


let getSum = (a, b) => a + b; // куда оно выводиться вместо консоли?
let getSum = (a, b) => console.log(a + b); // здесь точно идет в консоль


// Counting Cards // 

var count = 0;
function cc(card) {
    // Only change code below this line
    let regex = /[JQKA]/;
    if (card > 1 && card < 7) {
        count++;
    } else if (card === 10 || String(card).match(regex)) {
        count--;
    }
    if (count > 0) return count + " Bet";
    return count + " Hold";
}

// Record Collection

// Setup
var collection = {
    2548: {
        album: "Slippery When Wet",
        artist: "Bon Jovi",
        tracks: [
            "Let It Rock",
            "You Give Love a Bad Name"
        ]
    },
    2468: {
        album: "1999",
        artist: "Prince",
        tracks: [
            "1999",
            "Little Red Corvette"
        ]
    },
    1245: {
        artist: "Robert Palmer",
        tracks: []
    },
    5439: {
        album: "ABBA Gold"
    }
};

// Only change code below this line
function updateRecords(id, prop, value) {
    if (value === "") delete collection[id][prop];
    else if (prop === "tracks") {
        collection[id][prop] = collection[id][prop] || [];
        collection[id][prop].push(value);
    } else {
        collection[id][prop] = value;
    }
    return collection;
}

updateRecords(5439, "artist", "ABBA");

// Nesting For Loops

function multiplyAll(arr) {
    var product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }

    }
    // Only change code above this line
    return product;
}

// Replace Loops using Recursion

function sum(arr, n) {

    if (n <= 0) {
        return 0;
    } else
        return sum(arr, n - 1) + arr[n - 1]

}

// Profile Lookup

function lookUpProfile(name, prop) {
    for (var i = 0; i < contacts.length; i++) {
        if (contacts[i].firstName === name) {
            if (prop in contacts[i]) {
                return contacts[i][prop];
            } else return "No such property";
        }
    }
    return "No such contact";
}

// Generate Random Whole Numbers within a Range
function randomRange(myMin, myMax) {
    // Only change code below this line
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
    // Only change code above this line
}

/// Use Recursion to Create a Countdown

function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const countArray = countdown(n - 1);
        countArray.unshift(n); // also we can use push()
        return countArray;
    }
}

// Use Recursion to Create a Range of Numbers
function rangeOfNumbers(startNum, endNum) {
    return startNum === endNum
        ? [startNum]
        : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
}

// 4 штуки Q&A / в день
// Каждую пятницу практика инервью
// Отдельные вопросы задавать через свой канал в слэке с обращением к конкретному иэнору
// Запонять форму для фидбэка
// улучшать скорость набора
// 