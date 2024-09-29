// Javascript program that find's out the biggest integer from three given integers.

 function largestInteger (num1, num2, num3) {
     
     let result =  Math.max(num1, num2, num3) // max fuction is used to get the biggest number among the numbers that are given. 
     console.log ("Largest Integer is:-" + result);
 }

 console.log(largestInteger(1,100,1000));
 console.log(largestInteger(-10,0,-30));
 console.log(largestInteger(-10,-20,30));