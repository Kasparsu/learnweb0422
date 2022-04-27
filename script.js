let array = [1,2,3,4];
array.push(5,6,3,2,1,4,3);
array.pop();
array.reverse();
array.sort();

console.log(array[2]);
let array2d = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
];

console.log(array2d[1][2]);
let array3d = [
    [
        [1,2,3],
        [1,2,3],
        [1,2,3]
    ],
    [
        [1,2,3],
        [1,2,3],
        [1,2,3]
    ],
    [
        [1,2,3],
        [1,2,3],
        [1,2,3]
    ],
];

console.log(array3d[1][2][0]);
let array4d = [[[[1]]]];
console.log(array4d[0][0][0][0])

let name = 'Kaspar';
console.log(name[3]);