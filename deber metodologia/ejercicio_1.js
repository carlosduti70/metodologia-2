// A partir de un array de números sumar todos los elementos y guardar el resultado en una variable sum.//
let nums=[1,2,3,4,5,5,4,2];
let suma=0;
let i=0;
while (i<nums.length){
    suma=suma+nums[i];
    i=i+1;
}
console.log("la suma es "+suma)
