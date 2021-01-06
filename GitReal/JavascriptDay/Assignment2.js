let arr = [1,2,3,4,5];

//good 
function myEach(arr, callBack){

    for (let i = 0; i <= arr.length; i++){

        console.log(callBack(arr[i]));
    }
    return arr;
}

//good 
function myMap (arr, callBack){

    let returnArr = [];

    for (let i = 0; i <= arr.length-1; i++){

        returnArr[i] = callBack(arr[i]);
    }

    return returnArr;
}

function myFilter (arr, callBack) {

    let returnArr = [];

    for (let i = 0; i <= arr.length; i++){
        
        if (callBack(arr[i]) === true){
            
            returnArr[i] = arr[i];
        }
    }
    
    return returnArr;
}

function mySome (arr, callBack) {

    for (let i = 0; i <= arr.length; i++){

        if (callBack(arr[i]) === true){
            return true;
        }
    }
    return false;
}

function myEvery () {

    

}

function myReduce () {

}

//good 
function myPush (arr, x){
    
    arr[arr.length] = x;
}

//good
function myIndexOf (arr, x){
    
    for(let i = 0; i <= arr.length; i++){

        if (arr[i] === x){      
            return i;
        }
    }
    return -1;
}

function myUnshift(arr, x){

    for (let i = arr.length; i >= 0; i--){

        if (arr[i] === x){
            return i;
        }
    }

    return -1;
}

function callTest (num){
    return num*2;
}


