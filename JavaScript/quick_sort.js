const array = [10,6,3,7,9,13,1,2,11,4,5,8,12];

//swap two elements (i&j)
function swap(array, leftIndex, rightIndex){
    let temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
}

//partition based on middle element as pivot
function partition(array, left, right) {
    let pivot = array[Math.floor((right + left) / 2)], //middle element
    i = left, //left pointer
    j = right; //right pointer
    while (i <= j) {
        while (array[i] < pivot) {
            i++;
        }
        while (array[j] > pivot) {
            j--;
        }
        if (i <= j) {
            swap(array, i, j); //call swap function
            i++;
            j--;
        }
    }
    return i;
}

//put it all together.. 
function quickSort(array, left, right) {
    let index;
    if (array.length > 1) {
        index = partition(array, left, right); //position returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            quickSort(array, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            quickSort(array, index, right);
        }
    }
    return array;
}

console.log(quickSort(array, 0, array.length-1));