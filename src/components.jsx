import {color_mix,largest_product,day_of_the_week,pay_raise,is_leap} from './functions.js';

function Question1(){
    return <section>
1. Write a function that Determines the secondary rgb_colour from mixing two primary. Test at least 3 times. <br />
      <h2>results</h2>
      <p>First colour: green Second colour: green color_mix("green","green") == "{color_mix("green","green")}"</p >
      <p>First colour: red Second colour: blue color_mix("red","blue") == "{color_mix("red","blue")}"</p >
      <p>First colour: green Second colour: blue color_mix("green","blue") == "{color_mix("green","blue")}"</p >
    </section>;
}

function Question2(){
    return <section>
    <br /><br />
2. Returns the product of the two largest values of val1, val2, and val3. Test at least 3 times.<br />
      <h2>results</h2>
      <p>First value: 1 Second value: 2 Third value: 3 largest_product(1, 2, 3) == "{largest_product(1,2,3)}"</p >
      <p>First value: -2 Second value: 3 Third value: 4 largest_product(-2, 3, 4) == "{largest_product(-2,3,4)}"</p >
      <p>First value: 3 Second value: 5 Third value: 7 largest_product(3, 5, 7) == "{largest_product(3,5,7)}"</p >
    </section>;
}

function Question3(){
    return <section>
    <br /><br />
3. Returns the name of a day of the week given an integer day number. Test at least 3 times.<br />
      <h2>results</h2>
      <p>Please enter a number between 1 and 7: 1 day_of_the_week(6) == "{day_of_the_week(6)}"</p >
      <p>Please enter a number between 1 and 7: 1 day_of_the_week(3) == "{day_of_the_week(3)}"</p >
      <p>Please enter a number between 1 and 7: 1 day_of_the_week(4) == "{day_of_the_week(4)}"</p >
    </section>;
}

function Question4(){
    return <section>
    <br /><br />
4. Calculates pay raises for employees. Test at least 3 times.<br />
      <h2>results</h2>
      <p>pay_raise('F', 3, 25000) == "{pay_raise('F', 3, 25000)}"</p >
      <p>pay_raise('F', 10, 25000) == "{pay_raise('F', 10, 25000)}"</p >
      <p>pay_raise('P', 2, 25000) == "{pay_raise('P', 2, 25000)}"</p >
    </section>;
}

function Question5(){
    return <section>
    <br /><br />
5. Determines if a year is a leap year. Test at least 3 times.<br />
      <h2>results</h2>
      <p>is_leap(2000) == "{is_leap(2020)}"</p >
      <p>is_leap(2004) == "{is_leap(1900)}"</p >
      <p>is_leap(1600) == "{is_leap(2000)}"</p >
    </section>;
}


export {Question1,Question2,Question3,Question4,Question5}