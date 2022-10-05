
// var arr = [10,20,30,5,3,2,1];
var arr = ["India","Australia","Russia","Brazil","Japan"];
function compare(a,b){
    if(b<a){
        return 1;
    }
    else { 
        return -1 ;
    }
}
arr.sort(compare);
console.log(arr);

