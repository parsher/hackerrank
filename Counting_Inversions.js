function countInversions(arr) {
    return mergeSort(arr, 0, arr.length - 1);
}

function mergeSort(arr, start, end) {
    // recursive => base
    if (start === end) return 0; // count === 0

    const middle = start + Math.floor((end - start) / 2);
    let count = mergeSort(arr, start, middle);
    count += mergeSort(arr, middle + 1, end);
    count += merge(arr, start, end);

    return count;
}

function merge(arr, start, end) {
    
    const middle = start + Math.floor((end - start) / 2);
    const sortedArr = new Array(end - start + 1); // prepare the space

    let left = start; // left arr : left index to middle index
    let right = middle + 1; // right arr : middle + 1 to end index

    let i = 0;

    let count = 0;
    // compare, count

    //  sorted      sorted
    // start ~  middle   middle + 1 ~ end
    // [1, 3, 5]           [1, 2, 2]
    //     l                r

    while (left <= middle && right <= end) {
        if (arr[left] > arr[right]) {
            sortedArr[i] = arr[right]; // ascending
            right++;
            count += (middle - left + 1); // count...
        } else {
            sortedArr[i] = arr[left];
            left++;
        }

        i++;
    }

    while (left <= middle) {
        sortedArr[i++] = arr[left++];
    }

    while (right <= end) {
        sortedArr[i++] = arr[right++];
    }

    // copy sortedArr => original arr 
    for (let i = 0; i < sortedArr.length; i++) {
        arr[start++] = sortedArr[i];
    }

    return count;
}