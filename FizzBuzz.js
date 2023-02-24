function FizzBuzz()
{   var list = [];
    var number=1
    
   
   if (number%3===0)
   {
     list.push("fizz");

   }
   else if (number%5===0)
   {
    list.push("buzz");
   }
   else if (number%3===0&&number%5===0)
   {
    list.push("fizzbuzz");
   }
   else
   {
    list.push(number);
   }
   number++;
  
   console.log(list);
}

FizzBuzz();
FizzBuzz();
FizzBuzz();
FizzBuzz();


