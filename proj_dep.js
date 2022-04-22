//FOREWARNING. I DID NOT ACCOUNT FOR ALL ERRORS
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

let y = [1, 2, 3, 4, 5, 6];//EXAMPLE
let z = chunk([1, 3, 4, 3, 2, 5, 6, 2], 2);//EXAMPLE
let f = [];
let s = [];
let bo = [];
let fc = 0;
let sc = 0;

function dep(l,m){
    
    for (let i = 0; i<l.length; i++){
        f.push(l[i][0]);
        s.push(l[i][1]);
    }
    for (let j =0; j<f.length; j++){
        for (let k =0; k<m.length; k++){
            if (f[j]==m[k]){
                fc+=1;
            }
        }
    }
    for (let j =0; j<s.length; j++){
        for (let k =0; k<m.length; k++){
            if (s[j]==m[k]){
                sc+=1;
            }
        }
    }

    for (let a = 0; a<m.length; a++){
        if (f.includes(m[a]) && s.includes(m[a])==false){
            bo.push(m[a]);
        }else if (f.includes(m[a])==false && s.includes(m[a])==false){
            bo.push(m[a]);
        }
    }
    for (let c = 0; c<2; c++){
        for (let b = 0; b<l.length; b++){
            if(s.includes(l[b][1])){
            if(bo.includes(l[b][0])){
                bo.push(l[b][1]);
            }
            }
        }
    }
    let Order = [...new Set(bo)]
    for(let  x =0; x<l.length; x++){
        if(fc !==sc || l[x][0]==l[x][1] || m.includes(l[x][0])==false || m.includes(l[x][1])==false){
            Order = "error"
        }
    }
   
    return Order;
}

console.log(dep(z,y));