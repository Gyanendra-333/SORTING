
function bubbleSort(inputArray)
{
    for(var i=0; i<inputArray.length; i++){
        var isSwapped= false;

        // last i element is already sorted
        for(var j=0; j<(inputArray-i-1); j++){
            
            // check if the current element is greater than the next element

            if(inputArray[j].localeCompare(inputArray[j+1])!=-1){
            //if the condition is true then swap them
            let temp =inputArray[j];
            inputArray[j]= inputArray[j+1];
            temp = inputArray[j+1];
            isSwapped = true;     
        }
        }
        if(!isSwapped);
        break;
    }
    return inputArray;
}
// this is our unsorted array
var arr = ["India","Australia", "Japan","Russia","Brazil"];
console.log(bubbleSort(arr));