// let arr=[3343.3,543,23,5234,1915]
// let bignumber=0
// for(let a of arr){
//         if(a>bignumber){
//         bignumber=a
//         }
// }
// console.log(bignumber);
// let arr=['bigggest','smao','musician','electriton']
// let big=''
// for(let a of arr){
//         if(a.length>big.length){
//                 big=a
//         }
// }
// console.log(big);
// let arr=['anmo','small','om','rmmfib']
// let small=arr[0]
// for(let a of arr){
//         if(a.length<small.length){
//                 small=a
//         }
// }
// console.log(small);

// let arr = [10, 5, 20, 8, 15, 20,100,20,40,9,1,6];
// let large = 0
// let second = 0
// let small = arr[0]
// let secondsmall = arr[0]
// for (let a of arr) {
//     if (a > large) {
//         second = large
//         large = a
//     } else if (a < large && a > second) {
//         second = a
//     }
//     if (a < small) {
//         secondsmall = small
//         small = a
//     } else if (a > small && a < secondsmall)
//         secondsmall = a
// }
// console.log(large);
// console.log(second);
// console.log(small);
// console.log(secondsmall);
// let arr = [1, 2, 3, 5, 6, 7, 8,20,20,40,60];
// let odd=0
// let even=0
// for(let a of arr){
//     if(a%2==0){
//         even++
//     }else{
//         odd++
//     }
// }

// console.log(odd);
// console.log(even);

// let arr=['name,anmol,bol,sm ,xsje']
// let vowel='a,i,e,u,o'
// let word=''
// for(let a of vowel){
//     if(a!==",")
//     console.log(a);
// word+=a
// }
let arr=[1,2,3,6,8,-2,-4]
let pos=0
let min=0
for(let a of arr){
    if(a>0){
        pos=pos+a
    }else if(a<0){
        min=min+a
    }
}
console.log(pos)
console.log(min);

