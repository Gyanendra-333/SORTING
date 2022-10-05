
function selectionSortName(inputArray){
    var i,j,minimumIndex;
    for (let i=0; i<inputArray.length-1; i++){

        // initilize the current element as minimumIndex
        minimumIndex =i;
        for(let j=i+1; j<inputArray.length; j++){
            if (inputArray[j].localeCompare(inputArray[minimumIndex])==-1){
                minimumIndex = j;
            }
        }
        // swap the found minimum element with the current element
        if (minimumIndex !=i){
             
            var temp = inputArray[minimumIndex];
            inputArray[minimumIndex]=inputArray[i];
            inputArray[i] = temp;
        }
    }
    return inputArray;
}
var arr = ["India","Australia","China","Russia","Brazil","Japan"];
console.log(selectionSortName(arr));