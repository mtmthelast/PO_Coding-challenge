//making linked list examples

const L1 = {
  value: 5,
  next: {
    value: 10,
    next: {
      value: 3,
      next: null,
    },
  },
};

const L2 = {
  value: 4,
  next: {
    value: 8,
    next: {
      value: 9,
      next: {
        value: 6,
        next: null,
      },
    },
  },
};


//linked list iteration
let arr1 = [];
let arr2 = [];
let int = 0;

let h1 = L1;
let h2 = L2;

while (h1 !== null){
  arr1.push(h1.value);
  h1 = h1.next;
}

while (h2 !== null){
  arr2.push(h2.value);
  h2 = h2.next;
}

for(let i = 0; i<arr1.length; i++){
  if(arr2.includes(arr1[i])){
    int+=arr1[i];
  }
}

if(int==0){
  int = "no intersection";
}
console.log(int);//in this case, no intersection is observed

//circular linked list

//Example
const C1 = {
  value: 9,
  next: {
    value: 4,
    next: {
      value: 62,
      next: {
        value: 100,
        next: {
          value: 65,
          next: {
            value: 62,
            next: null,
        },
      },
    },
    },
  },
};

//turn linked list into an array
let CL = [];
let B1 = C1;

while (B1 !== null){
  CL.push(B1.value);
  B1 = B1.next;
}

//find repeating element that initiates loop
const looper = CL => CL.filter((item, index) => CL.indexOf(item) !== index)
const circular = looper(CL);
console.log(circular);//we find the value seen previously, 62
