// _.differenceBy(array, [values], [iteratee=_.identity])

/* Task: 
This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared. \
The order and references of result values are determined by the first array. The iteratee is invoked with one argument:
(value). */

Slution: // https://codepen.io/classandroid/pen/ePYOwp?editors=1112
const differenceBy = (array, values, filterСriterion) => // создаем функцмю с тремя аргументами
  array.reduce((res, current, i) => {    // reduce принимает три аргумента по дэфолту: предыдущеее знач, текущее знач, индекс.
    // эти данные метод reduce озьмет с array.
    if (typeof filterСriterion === 'function') { // filterСriterion это компаратор - это значение для сравнения другого елемента со ссылкой на первый елемент. // Оператор typeof возвращает строку, указывающую тип операнда.
      // то есть, typeof filterСriterion === 'function' сравнивае являеться ли filterСriterion функцией.

      return (filterСriterion(current) != filterСriterion(values[i])) // если filterСriterion функция мы возвращаем res.concat(current) или res(пред. знач. то есть 0);
        ? res.concat(current)
        : res;
    }

    return (values[i] && // в другом случае если values[i] или current[filterСriterion] не равное values[i][filterСriterion] мы возвращаем res.concat(current)
      current[filterСriterion] != values[i][filterСriterion])
      ? res.concat(current)
      : res;
  }, []);

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));


Descr:
// создаем функцмю с тремя аргументами
// reduce принимает три аргумента по дэфолту: предыдущеее знач, текущее знач, индекс.
// эти данные метод reduce озьмет с array.
// filterСriterion это компаратор - это значение для сравнения другого елемента со ссылкой на первый елемент. // Оператор typeof возвращает строку, указывающую тип операнда.
// то есть, typeof filterСriterion === 'function' сравнивае являеться ли filterСriterion функцией.
// если filterСriterion функция мы возвращаем res.concat(current) или res(пред. знач. то есть 0);
// в другом случае если values[i] или current[filterСriterion] не равное values[i][filterСriterion] мы возвращаем res.concat(current)


// Метод reduce() применяет функцию reducer к каждому элементу массива(слева - направо), возвращая одно результирующее значение.


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

console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));

