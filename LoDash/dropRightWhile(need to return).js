// _.dropRightWhile(array, [predicate=_.identity])

/* Task:
Creates a slice of array excluding elements dropped from the end.
Elements are dropped until predicate returns falsey. The predicate is invoked with three arguments: (value, index, array). */


var users = [
    { 'user': 'barney', 'active': true },
    { 'user': 'fred', 'active': false },
    { 'user': 'pebbles', 'active': false }
];

function baseWhile(array, predicate, isDrop, fromRight) {
    const { length } = array
    let index = fromRight ? length : -1

    while ((fromRight ? index-- : ++index < length) &&
        predicate(array[index], index, array)) { }

    return isDrop
        ? slice(array, (fromRight ? 0 : index), (fromRight ? index + 1 : length))
        : slice(array, (fromRight ? index + 1 : 0), (fromRight ? length : index))
}

function dropRightWhile(array, predicate) {
    return (array != null && array.length)
        ? baseWhile(array, predicate, true, true)
        : []
}

