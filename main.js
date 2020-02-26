//ARRAY

// let arr1 = [];
// let arr2 = new Array ();

// console.log(arr1);
// console.log(arr2);



//масив з обєктів або інших масивів 
// let arr3 = [
//     {},
//     []
// ];

// let arr3 = ['Ivan', 'Yurii', 2, 3];

// console.log(arr3[2]); //2 

// let arr4 = new Array('iven', 23, 55, 'Oleg')
// console.table(arr4);


// let arr5 = new Array(55)
// console.log(arr5);


// let arr6 = 5;
// console.log(arr6);




// let arr7 = ['Ivan', 'Petro', 'Vasyl'];

// arr7[1] = 'Roman'; // переприсвоємо значення  з індексом 1 на Roman
// console.log(arr7);
// arr7[10] = 'Oleg'; // кине в кінець масива 
// console.log(arr7.length);
// arr7.length = 3; // обрізаєм масив , було 11 стало 3 
// console.log(arr7);
// arr7.length = 11; // вийде 8 пустих комірок а Oleg пропаде 
// console.log(arr7);





// let arr8 = ['Ivan', 'Petro', 'Vasyl'];

// for (let i = 0; i < arr8.length; i++) {
//     console.log(arr8[i]);
// }




//TASK 
// let arr9 = [10, 20, 30, 40, 50];

// for (let i = 0; i < arr9.length; i++) {
//     arr9[i] += 5;
// }

// console.log(arr9);






//TASK

// запитує кількість пар і виводить суму
// let ask = prompt('Скільки пар чисел');

// let arr = [], arr2 = [], arr3 = [];

// for (let i  = 0; i < ask; i++) {
//     arr[i] = +prompt(`Вкажіть ${i} знaчeнння в першому масиві`)
// }
// for (let j  = 0; j < ask; j++) {
//     arr2[j] = +prompt(`Вкажіть ${j} знечeння в першому масиві`)
//     arr3[j] = arr[j] + arr2[j]
// }

// console.log(arr);
// console.log(arr2);
// console.log(arr3)






// let fruits = ['Orange', 'Apple'];
// let vegitables = ['Potato', 'Tomato'];

 
// let salad = fruits.concat(vegitables); // concat склеює два масиси в один
// console.log(salad);



//JOIN
// let saladStr = salad.join(); // join виводить стрічку 
// console.log(saladStr);




//SORT
// let saladSort = salad.sort(); // сортує за буквами, впливає на оригінальний масив 
// console.log(saladSort);
// console.log(salad);
// let numbers = [4, 12, 32, 15, 8];
// let sortNumbers = numbers.sort(function(a, b) {
//     return a - b;
// });
// console.log(numbers); //[4, 8, 12, 15, 32]
// console.log(sortNumbers); //[4, 8, 12, 15, 32] // видозмінило оригінальний масив




//REVERSE
// let saladReverse = salad.reverse(); // видозміню оригінальний масив 
// console.log(salad);                 //["Tomato", "Potato", "Orange", "Apple"]
// console.log(saladReverse)           //["Tomato", "Potato", "Orange", "Apple"]



//SHIFT 
// let shift = salad.shift(); // видаляє перший елемент з масиву і повертає його у вигляді стрічки
// console.log(salad);
// console.log(shift);  


//UNSHIFT
// let unshift = salad.unshift('onion', 'banana'); // кидає елементи на початок масиву
// console.log(salad);
// console.log(unshift);   //["onion", "banana", "Apple", "Potato", "Tomato"]


//POP
// let pop = salad.pop(); // видаляє останній елемент і показує йог ов стрічці
// console.log(salad);
// console.log(pop);


//PUSH
// let push = salad.push('onion', 'banana'); // кидає елемнти в кнець масиву 
// console.log(salad);
// console.log(push);



//SPLICE
// let arr = ['Ivan', 'Yurii', 'Petro', 'Oleg'];
// let splice = arr.splice(1, 1); // доступаєтсья до елемента з індексом 1 і вирізає його ( 1, 1)
// console.log(arr);
// console.log(splice);


// let splice1 = arr.splice(1, 0, 'Olenla'); // кине оленка на перший індекс 
// console.log(splice1);

// let splice2 = arr.splice(1, 1, 'Olenla');  // виріже yurii і кине оленка на місце  
// console.log(splice2);





//FOR OF FOR IN 
// let arr = ['Ivan', 'Yurii', 'Petro', 'Oleg'];

// arr.forEach(function(value, index, array) {
//     console.log(`Element: ${value} | ${index } | ${array}`) 
// });

// for(let key of arr) {
//     console.log(key);
// };

// for (let key in arr) {
//     console.log(arr[key]);
// };


