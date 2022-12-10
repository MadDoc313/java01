// 01
// for (let index = 0; index < 7000; index++) {
//     if (index%2==0) {
//         console.log(index);
//     } 
// }


// 02
// for (let index = 0; index < 10000; index++) {
//     if (index%2!=0) {
//         console.log(index);
        
//     } 
// }


// 03
// let numberarray=[1,13,22,123,49]
// let lenght= numberarray.length;
// let sum =0
// for (let index = 0; index < lenght; index++) {
//      sum=numberarray[index]+sum  
// }
// console.log(sum);


// 04
// let numberarray=[1,13,22,123,49];
// let length=numberarray.length;
// for (let index = 1; index <= length ; index++) {
//     numberarray.pop();
//     console.log(numberarray);
// }

// 05
// let number=Number(prompt("enter a number"))
// let array=[]
// for (let index = 0; index < number; index++) {
//    array[index]=index+1
//    aray=array.join(" ")
//    console.log(aray);
// }

// 06
// let numberarray=[1,13,22,123,49];
// let max=numberarray[0]
// let lnth=numberarray.length
// for (let index = 0; index < lnth; index++) {
//      if (max < numberarray[index]) {
//         max=numberarray[index]
//      }
// }
// console.log(max);


// 07
// let numberarray=[1,13,22,123,49];
// let min=numberarray[0]
// let lnth=numberarray.length
// for (let index = 0; index < lnth; index++) {
//      if (min > numberarray[index]) {
//         min=numberarray[index]
//      }
// }
// console.log(min);


// 08
// let numberarray=[1,13,22,123,49];
// numberarray.sort(function(a, b){return a - b})
// console.log(numberarray[1]);


// 09
// let text=prompt("enter a text:")
// console.log("original text:",text);
// let lnth=text.length
// let reverse=""
// for (let index = lnth; index >= 0; index--) {
//     let container=text.substring(index,index-1)
//     reverse+=container
// }
// console.log("reverse text is:",reverse); 


// 10
// let z=[]
// for (let i = 0; i < 9; i++) {
//     for (let j = 0; j < 9; j++) {
//          z[j]= (i+1)*(j+1);
       
//     }
//      ztable=z.join("  ");
//     console.log(ztable);
// }


// 11
// let numberarray=[1,13,22,13,49];
// let lnth=numberarray.length
// for (let index = 0; index < lnth; index++) {
//     for (let index2 = index+1; index2 < lnth; index2++) {
//         if (numberarray[index]==numberarray[index2]) {
//             console.log(numberarray[index]);       
//         }
//     }
// }