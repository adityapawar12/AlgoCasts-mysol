// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    let k = null;
    for (let i = 0; i < arr.length ; i++) {
        for (let j = 0; j < (arr.length - i - 1); j++) {
            if (arr[j] > arr[j + 1]) {
                k = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = k;
            }
        }
    }

    return arr;
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let indexOfMin = i;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[indexOfMin]) {
                indexOfMin = j;
            }
        }
        
        if (arr[i] !== arr[indexOfMin]) {
            let k = arr[i];
            arr[i] = arr[indexOfMin];
            arr[indexOfMin] = k;
        }
    }
     
    return arr;
}

function mergeSort(arr) {
    if (arr.length === 1) {
        return arr;
    }

    let center = Math.floor(arr.length / 2);
    let left = arr.slice(0, center);
    let right = arr.slice(center);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let results = [];

    while (left.length && right.length) {
        if (left[0] < right[0]) {
            results.push(left.shift());
        } else {
            results.push(right.shift());
        }
    }

    return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
