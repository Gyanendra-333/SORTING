
arr = [5,4,3,2,1,6,2];
function bubbleSort(inputArray,k){

    for(var i=0; i<k; i++){
        var isSwapped = false;

        // last element are already sorted
        for(var j=0; j<(inputArray.length-i-1); j++){

            // cheeck if the current element is greater than the next element
            if (inputArray[j] > inputArray[j+1]){

                //if the condition is true then swap them
                var temp = inputArray[j];
                inputArray[j] = inputArray[j+1];
                inputArray[j+1]= temp;
                isSwapped = true;
            }
        }
        if (!isSwapped);
        break;
    }
    return inputArray;
}
k=7;
arr=bubbleSort(arr,k);
console.log(arr[arr.length-k]);