
/*
    declare a list of numeric variable sort
    display in ascending order
    print the sorted list
*/

//insert your code below

var num;

function listsGetSortCompare(type, direction) {
  var compareFuncs = {
    "NUMERIC": function(a, b) {
        return Number(a) - Number(b); },
    "TEXT": function(a, b) {
        return a.toString() > b.toString() ? 1 : -1; },
    "IGNORE_CASE": function(a, b) {
        return a.toString().toLowerCase() > b.toString().toLowerCase() ? 1 : -1; },
  };
  var compare = compareFuncs[type];
  return function(a, b) { return compare(a, b) * direction; }
}


num = [10, 5, 6];
window.alert(num.slice().sort(listsGetSortCompare("NUMERIC", 1)));