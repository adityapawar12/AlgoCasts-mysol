// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    let arr = str.split(' ');
    let cap_arr = [];
    for (let item in arr) {
        let first = arr[item][0].toUpperCase();
        let remain = arr[item].slice(1);
        cap_arr.push(first + remain);
    }
    return cap_arr.join(' ');
}

module.exports = capitalize;
