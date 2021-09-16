const nums =[12,14,17,21];
const result1 = nums.map(num => num*2); //Map : Return exact array

const result2 = nums.find(num => num <= 14); //Find : Return exact value

const result3 = nums.filter(num => num <=14); //Filter : Return Array

const result = nums.reduce((sum,num) => num + sum,0); //Reduce: Return at last exact value
//console.log(result4);

//reduce recap

const friends = [
    {name : 'Rony',money : 30},
    {name : 'Jony',money : 10},
    {name : 'Mony',money : 20},
    {name : 'Tony',money : 30}
];

const final = friends.reduce((sum,friend) => sum + friend.money,0)
console.log(final);