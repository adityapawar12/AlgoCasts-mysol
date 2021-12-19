// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    for (let row = 0; row < n; row++) {
        let stair = '';

        for (let column = 0; column < n * 2 - 1; column++) {
            if (column <= row * 2) {
                stair += '#';
            } else if (column > row && column % 2 == 0) {
                stair = ' ' + stair + ' '; 
            }
        }
        console.log(stair);
    }
}

module.exports = pyramid;
