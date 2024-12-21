





// Write a JavaScript conditional statement to sort three numbers. Display an alert box to show the result.
// Sample numbers: 3, -7, 2
// Output: 3, 2, -7 

function sort (x,y,z)
{
     var a,b,c;
    
    if ( x>=y && x>=z )
    {
        a=x;
        if (y>=z) 
        {
            b=y;
            c=z

        }else
        {
            b=z;
            c=y;

        }
    } else if ( y>=x && y>=z )
    {
        a=y;
        if (x>=z) 
        {
            b=x;
            c=z;

        }else
        {
            b=z;
            c=x;

        }
    }else
        {
            a=z;
            if (z>=x) 
            {
                b=z;
                c=x;
    
            }else
            {
                b=x;
                c=z;
    
            }
        }
        console.log("after sort " + a +','+ b + ','+ c )  

}

sort(3,-7,2)



// Write a JavaScript program which iterates the integers 
// from 1 to 100. But for multiples of three print "Fizz" instead of 
// the number and for the multiples of five print "Buzz". 
// For numbers which are multiples of both three and five print "FizzBuzz".



function iterates()
 {
    for (var i = 1; i <= 100 ; i++) {
      if (i%5 ===0) 
      {
        console.log("Buzz");
        
      } 
      else if (i%3=== 0) 
      {
        console.log("Fizz")
      }
       else if (i%3===0 && i%5 === 0 ) 
      {
        console.log("FizzBuzz");
      }
       else 
      {
        console.log(i)
      }
    }
  }
  
  iterates();

//Write a JavaScript program to sum the multiples of 3 and 5 under 1000.

function multiples()
{ 
    var sum =0;
    for (var i=1; i<1000 ;i++ )
    {
        if (i%3===0 || i%5===0)
        {
            sum=sum+i
        }
    }
    console.log("sum is :"+sum)
}
multiples()





// Write a JavaScript program where the program takes a random integer between 1 to 10, 
// the user is then prompted to input a guess number. 
// If the user input matches with guess number, the program will display 
// a message "Good Work" otherwise display a message ‘ wrong guess, want to try again?’ 
// if confirmed continue up to 3 times, if not stop the code, after 3 failed times,
//  display message ‘game over’.

function guses_random_int(user_gess)
{
    var rand_int = Math.floor(Math.random()*10);

    for (i=1 ; i<=3  ; i++ )
    {
        if (user_gess === rand_int)
        {
            alert ("good work")
        } else if (i<=3)
        {
            var try_again = confirm ("wrong guess, want to try again?")
            { if (!try_again)
              { 
                alert ("game over")
                
              }else
              {
                
              }

            }
        }   


    } 
    console.log("Game over. The correct number was: " + rand_int );




}

guses_random_int()




