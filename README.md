
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
Built in objects in Javascript:
console,JSON,localStorage,Math and document

----------------Shorthand Proerty & Shorthand Method---------------
we can write property into the object in 2 different ways.
1. 
    let name = 'shasank';
    const student = {
        name:name
    }

2. 
    let name = 'shasank';
    const student = {
        name
    }
we can write method into the object in 2 different ways.
1. 
    const student = {
        name:name,
        method: function method() {
            console.log(name);
        }
    }
2. 
    const student = {
        name
        method() {
            console.log(name);
        }
    }

Destructing the object is nothing but extracting the  required properties into variables.
example:
const student = {
    name:'shsank',
    age:'23',
    scrore:'90'
}
const {name,age} = student => this is called Destructing.

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

exercise-8


-----------------------------DOM------------------------------------
DOM stands for Document object Model

which is nothing but we can access/manage the html elements from javascript code.
for instance to change the entire HTML tags on body tag we use:
* document.body.innerHTML='Changed';
the above line changes entire appeareance of body tags.
Note: document is an builtin object in javascript it have lot properties associated with it.
for instance if we want to view particular HTML tag in body we use:
* console.log(document.querySelector('button')) => it will prints the entire <button> tag in console
for instance if we want to just print the innerHTML of button we use:
* console.log(document.querySelector('button').innerHTML) => it will prints the message that prints in UI.
for instnace if we want to update the message that appears in UI.
* document.querySelector('button').innerHTML = 'Changed';

we can access the html elements by its 'name' or we can access it with 'class name' because if we have multiple elements in body.
for instance:
<button class='another-button'>newOne</button>
<script>
    console.log(document.querySelector('.another-button'));
    const buttonElement = document.querySelector('.another-button'); => it contains <button class='another-button'>newOne</button>
</script>

DOM combines HTML and JS together. DOM gives full control to JS to accessthe page.

Note: 
1. clicks,keydowns are called events.
2. onClick, onkeydown are event Listeners.

document object represents the webpage and window object represents the browser.

exercise-10 mandatory exercise 



--------------------------Arrays-------------------------------
Arrays are heterogenous, can add any type of data in it.
there are few properties and methods for Array
1. splice() to remove elements -> arr.splice(startIndex,howManyElementsNeedToRemove);
2. push() to add elements at last -> arr.push(number);
3. length property to check the length of the array.
some mote methods 
shift()
unshift()
join()
concat()
slice()
toString()
toLocaleString()
pop()
reverse()
sort()
map()
filter()
forEach()
exercise-11

-------------------------Advanced Functions---------------------------------

1. setTimeout() -> to run our function in future.
first Parameter -> function/functionName
second Parameter -> How long to wait in milliseconds 3000ms => 3 seconds
this is an asynchronous code will not wait for code.
example:
setTimeout(function() {
    console.log("Tme out")
},3000);

setTimeout(function1,3000);
function function1() {
    console.log("timeout");
}

2. setInterval() -> same like above method
firstParameter -> function/functionName
secondParameter -> milliseconds
but this function keep runs for every 3000ms
we have once way to stop the interval. every time the setInterval will return one id and if we able to pass that id to below mentioned method, it will stop.
clearInterval(intervalId);

example:

intervalId = setInterval(function1,3000);
function function1() {
    console.log("timeout");
}

clearInterval(intervalId);
Note: better the above code placed in coditional block


arrowFunctions => 2 ways
const arrowFunction = () => {
    console.log('hi');
};

const arrowFunction = function() {
    console.log('hi');
};

addEventListener() method for document object.
we can add multiple eventListeners for one HTML tag.
<button class="js-button">Save</button>
<script>
    const buttonElement = document.querySelector('.js-button');
    const eventListener = () => {
        console.log('saved');
    };
    document.addEventListener('click',eventListener);
    //we can remove eventListener.
    buttonElement.removeEventListener('click',eventListener);
</script>