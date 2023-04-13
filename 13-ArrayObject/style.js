let array=[23,1,5,3,12,4,9,81,7,11,22,31,6];
let min = 81; 
let max= 0;


for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 !== 0 && (array[i] < min)) {
    min = array[i];

  }
}


for (let i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0 && (array[i] > max)) {
    max = array[i];
  
  }
}

for (let i = 0; i < array.length; i++) {
     if(array[i]==min){
        array[i]=max;
     }
     else if(array[i]==max){
        array[i]=min;
     }
    
}
console.log(array);