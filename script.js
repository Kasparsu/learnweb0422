let nums = [1,2,3,4,5,6];

let nums4 = nums.map(a => a*4);

let nums5 = nums.map(a => {
    if(a%2==0){
        return a*5;
    }
    return a;
});

let odd = nums.filter(function(a) {
    return a%2==1;
});
let odd2 = nums.filter(a => a%2==1);

let sum = nums.reduce((lastValue,currentValue) => lastValue+currentValue);
let total = nums.reduce((lastValue,currentValue) => lastValue*currentValue);

for(let i = 0; i<nums.length;i++){
    console.log(nums[i]);
}

nums.forEach(a => {
    console.log(a);
});

console.log(nums, nums4, nums5, odd, odd2, sum, total);