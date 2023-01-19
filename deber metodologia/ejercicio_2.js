// A partir de un array de calificaciones, comparar si la calificación es mayor o igual a 70 imprimir junto a la calificación la palaba "aprueba" caso contrario "reprueba".
let nums=[70,69,78,43,89];
let i=0;
let itemsearch=70;
while(i<nums.length){
    if(nums[i]>=itemsearch){
        console.log(nums[i]+" aprueba");
    }
    else{
        console.log(nums[i]+" reprueba");
    }
    i=i+1;
};