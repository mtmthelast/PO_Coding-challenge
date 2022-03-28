//Locker Challenge

var T = 100;
var C = [];
var D = 0;

//for initialization of lockers
for (let i = 1; i <= T; i ++){
    C.push(i);
}

//for processesing
for (let m = 2; m<=T; m++){
    for(let k = 0; k<T; k++){
        if ((k+1)%m==0 && C[k]==0){
            C[k]=k+1;
   }    else if ((k+1)%m==0 && C[k]!==0){
            C[k]=0;
   }
}
}

//for the overall solution
for (let j = 0; j<=T; j++){
    if (C[j]!==0){
        D+=1;
    }
}
console.log(D);