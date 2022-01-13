// 1) Write a function to get FirstName & lastName as input and return fullName as output

const concatstr = (fname,lname) => 
{
   let fullname = fname . concat(lname);
   return fullname;
}
let concat1 = concatstr ('sri', 'vidhya');
console.log(concat1);