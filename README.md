
https://supersimple.dev/projects/amazon/checkout

JavaScript, we use this technology to built websites.
for mobile we use Apps
for laptop we use websites

For websites we use 3 technologies
1.HTML
2.CSS
3.JavaScript

JavaScript is nothing but giving instructions to computer to perform some actions.

document.body.innerHTML = 'Hello';
the above line will completely remove the content in body tags and will be replaced with 'Hello'

exercise - 1

1a.Use alert(...); to display Good Morning!! in a popup
    alert('Good Morning!');
1b.Display your name in popup
    alert('Shasank');
1c.Use math, calculate 10+5 in console
    15
1d.Use math, calculate 20-5 in console
    15
1e.Use math, calculate 2+2-5 in console
    -1
1f. use document.body.innerHTML=....; to display Good Morning on the webpage
    document.body.innerHTML='Good Morning';
1g. Display your name on webpage
    document.body.innerHTML='shasank';
1h. you have ordered Tshirt for 10$, socks for 20$ and lunch for 20$. calculate in JavaScript total cost for your orders.
    const tShirt = 10;
    const socks = 8;
    const lunch = 20;
    console.log(tShirt + socks + dinner);
1i.your bank account has 100$, you spend 20$ on lunch, 50$ on dinner and earn $200 from your job. calculate how much money you have.
    const balance = 100;
    const lunch = 20;
    const dinner = 50;
    const earn = 200$
    console.log((balance + earn) - (lunch + dinner));


Number and math

operator precedencs
1. (..)brackets are the high property.
2. * / first
3. + - second
Note: comparsion operators are having low priority when compared to above operators. 

example:
1 + 1 * 3 => 4
(1+1) * 3 => 6

Computer deals with 0/1 but not with floating values.
while calculating the floating values(money) here is one way convert them into cents.
example: 
20.95 + 7.99 => 28.93999999999998
now, (2095 + 799) / 100 => 28.94

rounding Number
Math.round(2.2) => 2

exercise-2
2a. 
    ((10 * 3) + (8 * 3) + (5 * 1))
2b.
    ((10 * 3) + (8 * 3) + (5 * 1)) * 3
2c.
    (1850 + (750 * 2)) / 100
2d.
    ((1850 + (750 * 2)) / 100) * 0.1
2e.
    ((1850 + (750 * 2)) / 100) * 0.2
2f. 
    (2095 + 499 + 1899) / 100
2g.
    (2095 + 499 + 1899 + 499) / 100
2h. 
    Math.round((2095 + 799 + 1899 + 499) * 0.1)/100 => applying 10% tax to cents and later converting it to percentage. 
2i.
    (4793 + 499 + 529) / 100
2j.  
    Math.floor(2.8)
2k.
    Math.ceil(2.2);
2l.
    (25 * 9/5) + 32
2m.
    (86-32) * 5/9
2n.
    (-5 * 9/5) + 32


-----------------------Strings------------------------------------

typeof -> to check what type of data was provided.
typeof 'hello' => 'string'
typeof 1 => 'number'

example:
1 + 'hello' => 1hello
'hello' + (2 + 3) => hello5
'hello' + 2 + 3 => hello23'
'$'(2095 + 799) / 100 => '$28.94'

3 way to create a string
1. single quote (used by default)
2. double quote => 'I'm Learning JavaScript' => error . so, "I'm Learning JavaScript" => I'm Learning JavaScript
3. using backticks `Hello` => called as template Strings, this are interpolation Strings
example: `Items ('${1 + 1}'): ${(2095 + 799 + 1899) / 100}`
multiline string can alone work for template strings.

characters:
1. numbers
2. characters
3. special characters
4. escape characters \' \" \n

exercise-3
3a.
    'My Name is:'
3b.
    'shasank'
3c.
    'My Name is:' + 'shasank'
3d.
    'Total cost: $' + (5 + 3)
3e.
    `Total cost: $${5 + 3}`
3f.
    alert(`Total cost: $${5 + 3}`);
3g.
    'Total Cost: $' + (599 + 295) / 100
3h.
    `Total cost: $${(599 + 295) / 100}`
3i.
    alert(`Total cost: $${(599 + 295) / 100}`);
3j.
    alert(`Total cost: $${(599 + 295) / 100}
    Thank you, Come again!!
    `);


exercise-4


--------------------variables----------------

3 ways to create a variable.
1. let is used to create a variable, we can change the value later on.
2. const is also used to create a variable but not able to change the value once created.
3. var is also used to create a variable. we can change the value. var means variable. it have few issues so we're not using to further.
Note: var will not follow scope rules.

rules for variable creation.
1. can't use special words for variable names like let const...
2. can't start with numbers,but numbers can be in any position.
3. can't use special characters except: $/_ => $name/_name;

exercise-5

------------------booleans & if-statements-----------------
True/false or the values of booleans
And comparators where >,<,>=,<=,===,!==
Note: == is also used in javascript but it try to convert the values into the same type console(5 == '5.00') => true
Note: === will check without any conversions 

If-statement => 
	if(condition) {
		//statements
	}
If-else =>
	if(condition) {
		//statements
	}else {
		//statements
	}
Else-if ladder =>
	if(condition) {
		//statements
	}else if(condition) {
		//statements
	}else {
		//statements
	}

False Values are: false, 0, '', Nan, undefined and null
Truthy values are: any value other than above false values are truthy values

Nan is a 'Not a number'
Undefined is nothing but, not assigning any value to the variable and trying to access it.
Null is a false value it was used in Objects point of view. Where no reference is provided to specific type of object will become as null.

Ternary operators = > condition ? Statement-1 : statement-2
Guard Operator => statement-1 && statement-2
If statement-1 is false then it will break checking other part cause it expects both are true. If we're returning it to any variable it will store statement-1 value. As it is false value.
If both statement is true then it will act as true. If we want to return it to any variable it will store statement-2 value in it.
Its like => 
		if(condition) {
			//statement		
		}

Default operator => statement1 || statement-2
If both statement is true then it will act as true. If we want to return it to any variable it will store statement-1 value in it. Example result = 'EUR' || 'USD' => 'EUR'
If statement-1 is false value then it will store statement-2 value in result. Example result = undefined || 'USD' => 'USD'
Its like => 
		if(!condition) {
			//statement		
		}

exercise-6
6a,b,c. 
    <script>
        let hour = 11;
        const name = 'Shasank';
        if(hour > 6 && hour < 12) {
            console.log(`Good Morning ${name}`);
        }else if(hour > 13 && hour < 17) {
            console.log(`Good Afternoon ${name}`);
        }else {
            console.log(`Good Night ${name}`);
        }
    </script>
6d,e.
    <script>
        let age=10;
        let isHoliday=true;
        if((age <= 6 || age >= 65) && !isHoliday) {
            console.log('Discount');
        }else {
            console.log('No Discount');
        }
    </script>
6f,g,h,i,j.
    <script>
      const randomNumber = Math.random();
      const result = randomNumber < 0.5 ? 'heads' : 'tails';

      const guess = 'heads';
      console.log(guess === result ? 'You win!' : 'You lose!');
    </script>

----------------------Functions---------------------------
Rules of functions:
1.function name can't be resvered/special words.
2.function name can't start with numbers
3.function name can't have a special characters
4.best practise is to use camelCase.

exercise-7
7a,b,c.
<script>
    function myFunction(name) {
        if(name) {
            console.log(`Hello ${name}`);
        }else {
            console.log('Hi there!!');
        }
    }

7d,e.
    function convertTemperature(degree,unit) {
        if(unit === 'C') {
            convertToFahrenheit(degree);
        }else {
            convertToCelsius(degree);
        }
    }
    function convertToFahrenheit(celsius) {
        return (celsius *(9/5))+32;
    }

    function convertToCelsius(fahrenheit) {
        return (fahrenheit - 32) * (5/9);
    }
    convertTemperature(25);
    convertTemperature(86);

7f.
    function convertTemperature(degree,unit) {
            if(unit === 'C') {
                return convertToFahrenheit(degree);
            }else {
                return convertToCelsius(degree);
            }
        }
        function convertToFahrenheit(celsius) {
            return (celsius *(9/5))+32;
        }

        function convertToCelsius(fahrenheit) {
            return (fahrenheit - 32) * (5/9);
        }
        console.log(convertTemperature(25,'C'));
        console.log(convertTemperature(86,'F'));

7g,h,i.
</script>

-----------------Objects----------------------------
objects we can use to group/use multiple attributes/properties together.
Note: we can delete any property by calling with delete command.
example
person = {
    name:'shasank',
    age:23
}
delete person.age; => it will delete the property.

In objects we can store several types of values, values can be number/floating numbers/objects or even we can store functions in it.


student = {
    name:'shasank',
    age:23,
    score:90,
    subjects:[
        {
            name:'Maths',
        },
        {
            name:'Telugu',
        },
        {
            name:'English',
        }
    ],
    toString: function toString() {
        return `Student:[name: ${this.name}, age: ${this.age}, score: ${this.score}, subjects: ${this.subjects[0].name}]`;
    }
}

we can call subjects in different ways.
1. dot notation => student.subjects;
2. by name = > student['subjects'];

slight difference between JSON and javascript objects.
1. JSON properties should defintely placed in between double quotes. it is mandatory, but in case of Javascript objects it is not needed.
2. JSON object wont have functions in it, but Javascript obbjects will contains functions in it.
3. JSON has less features
4. JSON is more universal.
few methods in JSON:
1. JSON.stringify(object); => it provides string result.
2. JSON.parse(JSONObjects); => converts JSON to javascript object
--------------------------Local Storage---------------------------
this is used to save the data in browser storage to get access whenever unforunate reloads occurs to not lose out old data.
few methods to manage data in localstorage will listeed out below.
1. localStorage.setItem('key',value);
2. localStorage.getItem('key');
3. localStorage.removeItem('key');


