
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

rules for variable creation.
1. can't use special words for variable names like let const...
2. can't start with numbers,but numbers can be in any position.
3. can't use special characters except: $/_ => $name/_name;

