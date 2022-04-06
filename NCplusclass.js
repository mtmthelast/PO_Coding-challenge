//Wasn't too adept in Java, so I used ES6 javascript!
//Made 2 classes; one rotating the array in one direction and another rotating the other.
//Both rely on array length and the number of indices for rotation. Neither rely on content so long as its an array.

//First class
let Circ = class Circ{
    constructor(arr,m){
    for (let j = 0; j<m; j++){
    let C = arr[0];
    for (let i = 0; i<arr.length; i++){
        arr[i]=arr[i+1];
        if (i+1==arr.length){
            arr[i]=C;
        }
    }
}
    return arr;
}
}

//Second Class
let RevCirc = class RevCirc{
    constructor(arr,m){
    for (let j = 0; j<m; j++){
        let C = arr[arr.length-1];
        for (let i = (arr.length-1); i>0; i--){
            arr[i]=arr[i-1];
            if(i-1 == 0){
                arr[i-1]=C;
            }
        }
    }
    return arr;
}
}
//proof of class RevCirc
let Z = [2,5,4,7,1,5,9,0];
var RZ = new RevCirc(Z,3);
console.log(RZ);

//proof of class Circ
let A = ["grammar", "math", "science", "social studies", "art", "gym"];
var AB = new Circ(A,2);
console.log(AB);