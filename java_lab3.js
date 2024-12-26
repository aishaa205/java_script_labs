


// you are required to, given a string, replace every letter with its position in the alphabet
// If anything in the text isn't a letter, ignore it and don't return it."a" = 1, "b" = 2, etc.
// Example: alphabet_position("The sunset sets at twelve o' clock.") Should return "20 8 5 19
// 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )



function alphabetPosition(text) {
    return text
      .toLowerCase()
      .split('')
      .map(char => {
        const code = char.charCodeAt(0);
        if (code >= 97 && code <= 122) {
          return code - 96;
        }
        return null;
      })
      .filter(position => position !== null) 
      .join(' '); 
  }
  
  const result = alphabetPosition("The sunset sets at twelve o' clock.");
  console.log(result);
  
  



  // Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.
  // Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).
  // If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.
  // Examples
  // "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
  // "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
  // ""  -->  ""



  function order(words) {
    if (!words) return ""; 
    return words
      .split(' ')
      .sort((a, b) => {
        
        const numA = a.match(/\d/)[0]; 
        const numB = b.match(/\d/)[0]; 
        return numA - numB; 
      })
      .join(' '); 
  }
  

  console.log(order("is2 Thi1s T4est 3a")); 
  
  
  console.log(order("4of Fo1r pe6ople g3ood th5e the2")); 
  
  console.log(order("")); 
 
  
  







//   Write a function called specialMultiply which accepts two parameters. If the function is passed both parameters, 
//   it should return the product of the two. If the function is only passed one 
//   parameter - it should return a function which can later be passed another parameter 
//   to return the product. You will have to use closure and arguments to solve this.

// Examples:
// specialMultiply(3,4); // 12 
// specialMultiply(3)(4); // 12 
// specialMultiply(3); // function(){}....



function specialMultiply(a, b) {
  if (arguments.length === 2) {
    
    return a * b;
  } else {
   
    return function(b) {
      return a * b;
    };
  }
}


console.log(specialMultiply(3, 4)); 
console.log(specialMultiply(3)(4)); 
console.log(specialMultiply(3));   














// Write a function called guessingGame which takes in one parameter amount. The function should return another function that takes in 
// a parameter called guess. In the outer function, you should create a variable called answer which is the result of a random number between 0 and 10 as 
// well as a variable called guesses which should be set to 0.

// In the inner function, if the guess passed in is the same as the random number (defined in the outer function) - you should return the string "You got it!". If the guess is too high return "Your guess is too high!" 
// and if it is too low, return "Your guess is too low!". You should stop the user from guessing if the amount of guesses they have made is greater than the initial amount passed to the outer function.

// You will have to make use of closure to solve this problem.

// Examples (yours might not be like this, since the answer is random every time): 
// var game = guessingGame(5) 
// game(1) // "You're too low!" 
// game(8) // "You're too high!" 
// game(5) // "You're too low!" 
// game(7) // "You got it!" 
// var game2 = guessingGame(3) 
// game2(5) // "You're too low!" 
// game2(3) // "You're too low!" 
// game2(1) // "No more guesses the answer was 0" 


  
      



function guessingGame(amount) {
  const answer = Math.floor(Math.random() * 11);
  let guesses = 0;

  return function(guess) {
    if (guesses >= amount) {
      return `No more guesses. The answer was ${answer}`;
    }

    guesses++;

    if (guess === answer) {
      return "You got it!";
    } else if (guess > answer) {
      return "Your guess is too high!";
    } else {
      return "Your guess is too low!";
    }
  };
}

const game1 = guessingGame(5);
console.log(game1(1));
console.log(game1(8));
console.log(game1(5));
console.log(game1(7));

const game2 = guessingGame(3);
console.log(game2(5));
console.log(game2(3));
console.log(game2(1));




  