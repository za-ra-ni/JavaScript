// Task 1
var str = "Have a good day!";
console.log (str);

// Task 2
var age;
console.log (age);
age = undefined;

// Task 3
var info = {
    name: "Zariana",
    age: 28,
};
console.log (info.name);
console.log (info.age);
var name = `${info.name}`;
console.log (name);
delete info.name;
console.log (name);

// Task 4
var customArray = [3,14,15];
console.log (customArray);
customArray = [0,0,0];
// тут просто нужно было прировнять массив к 0
console.log (customArray);

//Task 5
var student = "Zariana";
console.log (student);
student = "Zariana Nikolaieva";
console.log (student);

// Task 6
var complex = [];
complex[0] = "My name is:";
complex[1] = 7;
complex[2] = null;
complex[3] = `${info}`;
// это будет не правильно оно тебе из массива info создаст строку а нам тут нужна ссылка на объект
// complex[3] = info;
console.log (complex[2]);

//Task 7
var complexObj = {};
complexObj = {
    name: "Zariana",
    age: 28,
    friends: ["Nata","Olia","Ksu"],
    soc_links: {
        facebook: "https://www.facebook.com/presentisperfect",
        googleplus: "https://plus.google.com/u/0/105769178901708400938",
    }
};
console.log (`My name is ${complexObj.name}, I am ${complexObj.age} years old. 
I have a lot of friends, one of them is ${complexObj.friends[2]}. 
You can find me on Facebook: ${complexObj.soc_links.facebook} or GooglePlus: ${complexObj.soc_links.googleplus}`);
