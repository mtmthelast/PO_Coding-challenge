// magic index
let M = [0,3,14,7,9];
let ans = [];
for(let i = 0; i< M.length; i++){
    if(A[i]==i){
        ans.push(i);
    }
}
if(ans.length==0){
    console.log("no magic index available");
}else{
    console.log(ans);
}
//in this case, there will be no magic indices

// set subsets
const V = new Set([5,4,3,2,1,0]);
const X = [...V];

const Subsets =
  theArray => theArray.reduce(
    (subsets, value) => subsets.concat(
      subsets.map(set => [value, ...set])
    ),
    [
      []
    ]
  );
  
//example
console.log(Subsets(X));

//recursive multiplication
function multiply(x, y){
  if (y === 0) return 0;
  return x + multiply(x, y - 1);
}
function times(x,y) {
  if(x==0 || y==0) {
      return 0;
  }  else {
      return multiply(y, x);
  }
}
//example
console.log(times(5,25));