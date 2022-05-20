//sum list
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;                
    }
}

function insert( root, item){
    var temp = new ListNode();
    var ptr;
    temp.value = item;
    temp.next = null;
   
    if (root == null){
        root = temp;
    }else{
        ptr = root;
        while (ptr.next != null){
            ptr = ptr.next
        }
        ptr.next = temp;
    }
    return root;
}

function display( root){
    while (root != null)
    {
        root = root.next;
    }
}
function arrayToList( arr, n)
{
    var root = null;
    for (let i = 0; i < n; i++){
        root = insert(root, arr[i])
    };
    return root;
}


const L1 = {
    value: 5,
    next: {
      value: 1,
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
        next: null,
        },
      },
};

function alltogether(list1, list2){
    let arr1 = [];
    let arr2 = [];
    let n1 = list1;
    let n2 = list2;
    
    while (n1 !== null){
        arr1.push(n1.value);
        n1 = n1.next;
    };
      
    while (n2 !== null){
        arr2.push(n2.value);
        n2 = n2.next;
    };
    
    let r1 = arr1.reverse();
    let r2 = arr2.reverse();
    
    let R1 = +r1.join('');
    let R2 = +r2.join('');
    
    let Z = R1+R2;
    var Z1 = String(Z).split("").map((Z)=>{
        return Number(Z)
      })
    Z2 = Z1.reverse();
    let n = Z2.length;
    var root = arrayToList(Z2, n);
    return root;
    
}

console.log(alltogether(L1, L2));
//if you don't want the values in reverse order, simply comment out the reverse sections of the code found in the alltogether function.

//Stacks







  