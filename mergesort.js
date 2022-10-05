
var arr1 = [1,3,8,9];
var arr2 = [4,5,7];

function mergeTwoArray(arr1,arr2){

    let index1 = 0;
    let index2 = 0;
    let current = 0;
    let merged = [];

    while (current<(arr1.length +arr2.length)){

        let isArr1Depleted = index1>=arr1.length;
        let isArr2Depleted = index2>=arr2.length;

        if (!isArr1Depleted && (isArr2Depleted || (arr1[index1] <arr2[index2]))){

            merged[current] = arr1[index1];
            index1++;
        } else {
            merged[current]= arr2[index2];
            index2++;
        }
        current++;
    }
    return merged;
}
console.log(mergeTwoArray(arr1,arr2));