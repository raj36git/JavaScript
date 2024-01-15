let linearSearch = function(arr, target){
    for(let i=0; i<arr.length; i++){
        if(arr[i] == target){
            return i;
        }
    }
    return undefined;
}
let binarySearch = function(arr, target){
    let s = 0, e = arr.length-1;
    while(s<=e){
        let mid = Math.floor((s + e)/2);
        if(arr[mid] == target){
            return mid;
        }
        else if(arr[mid] < target){
            s = mid+1;
        }else{
            e = mid-1;
        }
    }
    return undefined;
}

module.exports = {
    linearSearch,
    binarySearch
}