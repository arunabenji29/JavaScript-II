// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
function parent(){
  const familyName = "Arthur"

  function child(){

    console.log(`child shares the same familyName ${familyName}`)

    function grandchild(){
      console.log(`grandchild shares the same familyName ${familyName}`)
    }
    grandchild();
  }
  child()
}
parent()

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0
  const incrCounter = function (){
    count= count+1
    return count
  }
  
  return incrCounter
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

const newCounter = counter()
console.log(newCounter());
console.log(newCounter());
console.log(newCounter());

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
  let count = 0

  return{

   incrCounter : function (){
    count= count+1
    return count
  },
   decrCounter : function (){
    count= count-1
    return count
  }
  }
};


const newCounter = counter()
console.log(newCounter.incrCounter())
console.log(newCounter.incrCounter())
console.log(newCounter.decrCounter())