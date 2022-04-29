//BONUS

let start = 'aabcccccaaa'//example
function focus(x){
    let count = 1;
    let sol = [];
    let counter = [];
    let ans = [];
    sol.push(x.charAt(0));
    for(let i = 1; i<(x.length+1); i++){
      if(x.charAt(i)==x.charAt(i-1)){
        count+=1;
      }else {
          counter.push(count);
          sol.push(x.charAt(i));
          count = 1;
      }
    }
    for (let j = 0; j<counter.length; j++){
        ans.push(sol[j]);
        ans.push(counter[j]);
    }
    let finish = ans.join('');
    if(ans.length > x.length){
        finish = x;
    }
    return finish;
}
console.log(focus(start));