function pivot(arr, start = 0, end = arr.length - 1) {
    const swap = (arr, idx1, idx2) => {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }

    // We are assuming the pivot is always the first element
    let pivot = arr[start];
    let swapIdx = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivot > arr[i]) {
            swapIdx++;
            swap(arr, swapIdx, i);
        }
    }

    // Swap the pivot from the start the swapPoint
    swap(arr, start, swapIdx);

    return swapIdx;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let pivotIdx = pivot(arr, start, end);
        quickSort(arr, start, pivotIdx - 1);
        quickSort(arr, pivotIdx + 1, end);
    }

    return arr;
}

quickSort([51, 8, 90, 22, 43, 1, -4]); //[ -4, 1, 8, 22, 43, 51, 90 ]
// Time Complexity O(nlogn) - best, avg O(n^2) - worst
// Space Complexity O(logn)