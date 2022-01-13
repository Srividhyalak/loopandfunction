// 4) Write a program to iterate over the properties of the given object

let concept = {
    name: 'for loop',
    use: 'iterate over arrays',
    steps: 3
 }
 for (const prop in concept) {
    
    console.log(prop);
    console.log(concept[prop]);

 }
