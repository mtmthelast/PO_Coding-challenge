// Movement algorithm
//untested

let x = 5;//example
let y = 10;//example
let pos = [];
let cap = [];
const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );

let exc = chunk([1,2,2,6,2,7,2,10,3,1,3,2,3,3,3,4,3,6,3,7,3,8,4,10,5,2,5,4,5,5,,5,8], 2);//example
const includesMultiDimension = (arr, str) =>
JSON.stringify(arr).includes(str);


pos.push([2,1]);
for (let a =1; a<=x; a++){
    for (let b=1 ; b<=y; b++){
        if(includesMultiDimension(exc, [a,b])==false){
            pos.push([a,b]);
        }
    }
}
let w = pos.sort(sortFunction);
    function sortFunction(a, b) {
        if (a[0] === b[0]) {
            return 0;
        }
        else {
            return (a[0] < b[0]) ? -1 : 1;
        }
    } 

function path(z){
  for(let m = 0; m<=x; m++){
    for(let n = 0; n<=z.length; n++){
      if(includesMultiDimension(pos, [m,n]) && (includesMultiDimension(pos, [(m+1),n])||includesMultiDimension(pos, [m,(n+1)]))){
        cap.push([m,n])
      }
    
    }
}
  let uniquecap = [...new Set(cap)];
  return uniquecap;
}
console.log(path(w));
