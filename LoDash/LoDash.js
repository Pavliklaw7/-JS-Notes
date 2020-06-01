/* “Array” Methods */

// _.chunk(array, [size=1])
//--------------------------------------
/* Task:
Creates an array of elements split into groups the length of size. 
If array can't be split evenly, the final chunk will be the remaining elements.

Test:
console.log(['item1', 'item2', 'item3', 'item4'], 2);

Descr: 
Метод slice() возвращает новый массив, содержащий копию части исходного массива. */
Solution:
function chunk(arr, len) {
    let chunks = [];
    i = 0;
    n = arr, length;
    while (i < n) {
        chunk.push(arr.slice(i, i += len));
    }
    return chunks
}

// _.compact(array)
//--------------------------------------
/* Task:
Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

descr: 

The double-application of the ! operator will make the filter callback return true when the value is "truthy" 
and false when it's "falsy". */

Solution:
function compact(arr) {
    return arr.filter(function (v) { return !!v; });
}

// _.concat(array, [values])
//--------------------------------------
/* Task: Creates a new array concatenating array with any additional arrays and/or values.

Descr: 
Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, 
соединённого с другими массивами и/или значениями, переданными в качестве аргументов. */

Solution:
function concat(arr1, arr2) {
    return arr = arr1.concat(arr2);
}

// _.difference(array, [values])
//--------------------------------------

/* Task: 
Creates an array of array values not included in the other given arrays using SameValueZero 
for equality comparisons. The order and references of result values are determined by the first array.
 */

Solution:
difference = (arr1, arr2) => arr1.filter(e => !arr2.includes(e));

// _.differenceBy(array, [values], [iteratee=_.identity])
//--------------------------------------
/* Task: 
Этот метод принимает итератор, который вызывается для каждого 
элемента массива, чтобы сгенерировать критерий, по которому они сравниваются. Порядок и ссылки на значения 
результатов определяются первым массивом. Итерируемый вызывается с одним аргументом:
(value).*/

const differenceBy = (array, values, filterСriterion) =>
    array.reduce((res, current, i) => {
        if (typeof filterСriterion === 'function') {
            return (filterСriterion(current) != filterСriterion(values[i]))
                ? res.concat(current)
                : res;
        }

        return (values[i] &&
            current[filterСriterion] != values[i][filterСriterion])
            ? res.concat(current)
            : res;
    }, []);

//console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
//console.log(differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));

// _.drop(array, [n=1])
//--------------------------------------
/* Task: Creates a slice of array with n elements dropped from the beginning.

Test:
console.log(drop([1,2,3,4,5], 2));

Descr:
Метод slice() возвращает новый массив, содержащий копию части исходного массива. */

Solution:
drop = (arr, n) => arr.slice(n);


// _.dropRight(array, [n=1])
//--------------------------------------
/* Task:
Creates a slice of array with n elements dropped from the end.

Test:
console.log(drop([1,2,3,4,5], 1));

Descr:
Using negative index as first argument returns the sliced string to the 6 elements counting from the end of the string. */

Solution:
dropRight = (arr, n) => arr.slice(0, -n);

// _.fill(array, value, [start=0], [end=array.length]) !!!!!!!!!!!!!! 
//--------------------------------------
/* Task:
Fills elements of array with value from start up to, but not including, end. (This method mutates array.) */

// fill = (arr, value) => arr.fill(value, 1, arr.length -1);

function fill(arr, value) {
    let filled = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === undefined) {
            arr.fill(value);
        }
        filled = arr.fill(value, 1, arr.length - 1);
        return arr;
    }
}



