/*
for (i = 44; i < 67; i++){
    console.log(i);
}


console.log("One Two".length);
console.log(43);
console.log(6.36);
console.log(false);

console.log("One Two".toLowerCase());
console.log("One Two".toUpperCase());
console.log("   One Two   ".trim());

console.log(Math.floor(Math.random() * 10) );

console.log("One Two Three Four".search("Two"));
console.log("One Two Three Four".lastIndexOf("T"));
console.log("One Two Three Four".slice(8, 13));
console.log("One Two Three Four".substring(4,13));
console.log("One Two Three Four".substr(4,3));
console.log("One Two Three Four".replace("Two","2"));
console.log("One Two Three Four".concat(" Five Six"));

console.log(("All Around the World".substr(8,1)).toUpperCase());

console.log("All Around the World".substr(8,1).toUpperCase());

let favouriteDrink = "coffee";
console.log(`My favourite drink is ${favouriteDrink}`)

let name = "Joe";
let age = 22;
let favouriteColour = "blue";
console.log(`My name is ${name}, I am ${age} years old, and my favourite colour is ${favouriteColour}.`);

let topLeft = `x`
let topCenter = `o`
let topRight = ` `
let midLeft = ` `
let midCenter = `x`
let midRight = `o`
let botLeft = ` `
let botCenter = ` `
let botRight = `o`

console.log(`   |   |    `);
console.log(` ${topLeft} | ${topCenter} | ${topRight}  `);
console.log(`   |   |    `);
console.log(`-----------`);
console.log(`   |   |    `);
console.log(` ${midLeft} | ${midCenter} | ${midRight}  `);
console.log(`   |   |    `);
console.log(`-----------`);
console.log(`   |   |    `);
console.log(` ${botLeft} | ${botCenter} | ${botRight}  `);
console.log(`   |   |    `);

let age = 18
let country = "UK"

if(age>17 && country=="UK") {
console.log(`Yes I can serve you.`)
}
else {
console.log(`You aren't old enough.`)
}


//Challenge 1
let password = "Testing"
if(password.length<8) {
    console.log("Your password is too short.")
}
else {
    console.log(password)
}


//Challenge 2
let num = 13
if(num%3==0 || num%5==0) {
    console.log("Number is divisible by 3 or 5")
}
else {
    console.log("Number is not divisible by 3 or 5")
}

//Challenge 3
let num2 = 15
if(num2%3==0 && num2%5==0) {
    console.log("fizz buzz")
}
else if(num2%5==0) {
    console.log("buzz")
}
else if(num2%3==0) {
    console.log("fizz")
}
else {
    console.log(num2)
}

//Challenge 4
let num3 = "101"
let num3Reversed = num3.split("").reverse().join("")
if(num3==num3Reversed) {
    console.log(`${num3} is a pallindrome.`)
}
else {
    console.log(`${num3} is not a pallindrome.`)
}

//Challenge 5
let time = 8
let placeOfWork = "Work"
let townOfHome = "Home"
if(time<8){
    console.log(`I'm at ${townOfHome}`)
}
else if(time<9){
    console.log(`I'm commuting`)
}
else if (time<18){
    console.log(`I'm at ${placeOfWork}`)
}
else if(time<19){
    console.log(`I'm commuting`)
}
else if(time<25){
    console.log(`I'm at ${townOfHome}`)
}
else{
    console.log(`I'm at a time that is somehow outside of the 24 hour clock.`)
}

//Challenge 7
let madString = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi'
let lastA = madString.lastIndexOf("a")
let lastE = madString.lastIndexOf("e")
let lastI = madString.lastIndexOf("i")
let lastO = madString.lastIndexOf("e")
let lastU = madString.lastIndexOf("u")
console.log(Math.max(lastA,lastE,lastI,lastO,lastU))

//Challenge 8
let word = "Test"
let length = word.length
let firstLetter = word.toUpperCase().substring(0,1)
let lastLetter = word.toUpperCase().substr(length-1,1)
if(firstLetter==lastLetter){
    console.log(true)
}
else{
    console.log(false)
}

//Challenge 9
let num4 = 20
let num5 = 22
if (Number.isInteger(((num4+num5)/2))==true){
    console.log(num4+num5)
}
else{
    console.log(num4*num5)
}

// Challenge 10

let topLeft = `x`
let topCenter = `o`
let topRight = `x`
let midLeft = ` `
let midCenter = `x`
let midRight = `o`
let botLeft = ` `
let botCenter = `o`
let botRight = `o`
console.log(`   |   |    `);
console.log(` ${topLeft} | ${topCenter} | ${topRight}  `);
console.log(`   |   |    `);
console.log(`-----------`);
console.log(`   |   |    `);
console.log(` ${midLeft} | ${midCenter} | ${midRight}  `);
console.log(`   |   |    `);
console.log(`-----------`);
console.log(`   |   |    `);
console.log(` ${botLeft} | ${botCenter} | ${botRight}  `);
console.log(`   |   |    `);
if(topLeft==`x` && topCenter == `x` && topRight == `x`){
    console.log(`x has won in the top row.'`)
}
else if(topLeft==`o` && topCenter == `o` && topRight == `o`){
    console.log(`o has won in the top row.`)
}
else{
    console.log(`No victory for x or o in top row.`)
}


const ordercoffee = (size, type) => {
    console.log(`Customer ordered a ${size} ${type}.`)
}

ordercoffee('small','coffee')


const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } 
    else {
    return (n * factorial(n-1));
    } }
    console.log(factorial(33));

const noughtsandcrosses = (topLeft,topCenter,topRight,midLeft,midCenter,midRight,botLeft,botCenter,botRight) => {
    console.log(`   |   |    `);
    console.log(` ${topLeft} | ${topCenter} | ${topRight}  `);
    console.log(`   |   |    `);
    console.log(`-----------`);
    console.log(`   |   |    `);
    console.log(` ${midLeft} | ${midCenter} | ${midRight}  `);
    console.log(`   |   |    `);
    console.log(`-----------`);
    console.log(`   |   |    `);
    console.log(` ${botLeft} | ${botCenter} | ${botRight}  `);
    console.log(`   |   |    `);
}

noughtsandcrosses('x','x','o',' ','x','o',' ',' ','o')

let realPIN = 1234
let balance = 1000

const withdraw = (amount, enteredPIN) => {
    if(enteredPIN==realPIN && amount<=balance){
        balance = balance-amount
        console.log(`Dispensing £${amount}, £${balance} remaining in account`)
        
    }
    else if (enteredPIN==realPIN && amount>balance){
        console.log(`Insufficient balance remaining in account (Attempted to withdraw £${amount} and £${balance} is remaining.)`)
    }
    else if (enteredPIN!=realPIN){
        console.log(`Incorrect PIN`)
    }
    else{
        console.log(`Something has gone wrong.`)
    }
} 

withdraw(125,1234)
withdraw(56,1234)
withdraw(56,9999)
withdraw(500,1234)
withdraw(1000,1234)

const multParameters = (par1, par2) =>{
    return (par1*par2)
}

console.log(multParameters(4,2))

let songArray = ['Song1','Song2','Song3']
console.log(songArray)
songArray[2] = 'New Song'
console.log(songArray[2])
console.log(songArray.length)
songArray.push('Song4')
console.log(songArray)
songArray.pop()
console.log(songArray)

let favouriteWebsites = ['Website 1','Website 2','Website 3']
favouriteWebsites.push('Website 4', 'Website 5')
console.log(favouriteWebsites)
favouriteWebsites.pop()
console.log(favouriteWebsites)


const numberToString = (num) =>{
    string = num.toString()
    return string
}
console.log(numberToString(10))

const increase = (n) =>{
    n = n+1
    return n
}
console.log(increase(2))

const decrease = (n) =>{
    n = n-1
    return n
}
console.log(decrease(2))

const add = (x,y) =>{
    num = x+y
    return num
}
console.log(add(2,4))

const subtract = (x,y) =>{
    num = x-y
    return num
}
console.log(subtract(2,4))

const multiply = (x,y) =>{
    num = x*y
    return num
}
console.log(multiply(2,4))

const divide = (x,y) =>{
    num = x/y
    return num
}
console.log(divide(2,4))

const square = (x) =>{
    num = x*x
    return num
}
console.log(square(2))

const calculate = (operation, x, y) =>{
    if(operation==add){
        console.log(`${x} + ${y} = ${operation(x,y)}`)
        return operation(x,y)
    }
    else if(operation==subtract){
        console.log(`${x} - ${y} = ${operation(x,y)}`)
        return operation(x,y)
    }
    else if(operation==multiply){
        console.log(`${x} * ${y} = ${operation(x,y)}`)
        return operation(x,y)
    }
    else if(operation==divide){
        console.log(`${x} / ${y} = ${operation(x,y)}`)
        return operation(x,y)
    }
    else {
        console.log(`Input Error`)
    }
}
console.log(calculate(add, 3, 2))
console.log(calculate(multiply, 6, 5))
console.log(calculate(divide, 6, 8))
console.log(calculate(subtract, 8, 10))


const isGreaterThan = (a, b) =>{
    if(a>b){
        return true
    }
    else{
        return false
    }
}
console.log(isGreaterThan(3,2))

const isLessThan = (a, b) =>{
    if(a<b){
        return true
    }
    else{
        return false
    }
}
console.log(isLessThan(1,2))

const areEqual = (a, b) =>{
    if(a=b){
        return true
    }
    else{
        return false
    }
}
console.log(areEqual(2,2))

const minimum = (a, b) =>{
    return Math.min(a,b)
}
console.log(minimum(10.1,50))

const maximum = (a, b) =>{
    return Math.max(a,b)
}
console.log(maximum(10.1,50))

const isEven = (n) =>{
    if(Number.isInteger(n/2)==true)
    return true
    else{
        return false
    }
}
console.log(isEven(2))

const isOdd = (n) =>{
    if(Number.isInteger(n/2)==false)
    return true
    else{
        return false
    }
}
console.log(isOdd(2))

const letterGrade = (score, total) =>{
    percent = (score/total)*100
    if(percent<60){
        return "F"
    }
    else if (percent<70){
        return "D"
    }
    else if (percent<80){
        return "C"
    }
    else if (percent<90){
        return "B"
    }
    else if (percent>89){
        return "A"
    }
    else{
        return "Error"
    }
}
console.log(letterGrade(75,100))
console.log(letterGrade(5,32))
console.log(letterGrade(33,34))

const combine = (word1, word2) =>{
    return `${word1} ${word2}`
}
console.log(combine('First', 'Second'))
console.log(combine('AAAA', 'BBBB'))
console.log(combine('Ice', 'Cream'))

//Project Euler Problem 1
let runningtotal = 0

for(n = 0; n<=1000; n=n+3) {
    runningtotal = runningtotal+n
}
for(n = 0; n<=1000; n=n+5) {
    runningtotal = runningtotal+n
}
console.log(runningtotal)
//Project Euler Problem 6
let squaredSum = 0
let regularSum = 0
for(n=0; n<=100; n++){
    squaredSum = squaredSum+(n*n)
    regularSum = regularSum+n
}
let squaredRegularSum = regularSum*regularSum
console.log(squaredRegularSum-squaredSum)

//Project Euler Problem 5
let x = 1
for(n=0;n<1;){
if(x%1==0 && x%2==0 && x%3==0 && x%4==0 && x%5==0 && x%6==0 && x%7==0 && x%8==0 && x%9==0 && x%10==0 && x%11==0 && x%12==0 && x%13==0 && x%14==0 && x%15==0 && x%16==0 && x%17==0 && x%18==0 && x%19==0 && x%20==0){
    console.log(x)
    n=1
}
else{
    x = x+1
}
}

//Project Euler Problem 2
let n1 = 1
let n2 = 2
let sumEvens = 0

for(fib=0;fib<=4000000;){
    fib = n1+n2
    n1 = n2
    n2 = fib
    if(Number.isInteger(fib/2)==true){
        sumEvens = sumEvens+fib
    }
    else{

    }
}
console.log(sumEvens)
console.log(n1)
console.log(n2)

//Problem 2 alternative solution, if they mean all values of fib that have even valued terms, 
//rather than the values themselves are even (IE: N = 2, 4, 6, 8, etc)

let n1 = 1
let n2 = 2
let terms = 2
let sumEvens = 2
let sumAll = 3

for(fib=0;fib<=4000000;){
    fib = n1+n2
    n1 = n2
    n2 = fib
    terms++
    sumAll = sumAll+fib
    console.log(`N = ${terms}, Fib = ${fib}`)
    if(Number.isInteger(terms/2)==true){
        sumEvens = sumEvens+fib
    }
    else{

    }
}
console.log(`${sumEvens} = sum of all values with even terms of Fib sequence below`)
console.log(`${sumAll} = Sum of all values of Fib sequence below 4000000`)


for(i=9;i>=0;i--){
    console.log(i)
}

let filmsArray = ['Film 1','Film 2','Film 3','Film 4','Film 5']
filmsArray.push('Film 6')
filmsArray.push('Film 7')
for(filmIndex=0;filmIndex<filmsArray.length;filmIndex++){
    console.log(filmsArray[filmIndex])
}

let filmsArray = ['Film 1','Film 2','Film 3','Film 4']
for(filmIndex=0;filmIndex<filmsArray.length;filmIndex++){
    console.log(filmsArray[filmIndex])
}

const filmCheck = (array) =>{
    if(array[2]=='Film 3'){
        return `It's film 3!`
    }
    else{
        return `It's not film 3.`
    }
}

console.log(filmCheck(filmsArray))



let madString2 = 'jrfndklhgfndjkjlkgperfijfhidknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhiejkdsoiufghedjwsh'
console.log(madString2.search('hi'))
console.log(madString2.lastIndexOf('hi'))


let madArray = madString2.split("")

for(arrayIndex=0;arrayIndex<madArray.length;arrayIndex++){
    console.log(madArray[arrayIndex])
}

let lastEntry=0
let currentEntry = 0
let hiCount = 0
for(t=0;t<1;){
    lastEntry = (currentEntry)+1
    currentEntry = madString2.indexOf('hi', lastEntry)
    if(currentEntry==(-1)){
        console.log('Loop Ended')
        stringIndex=madString2.length
        t=t+1
    }
    else{
        console.log(currentEntry)
        hiCount++
    }
}
console.log(`${hiCount} instances of hi`)

const isPalindrome = (n) =>{
    n = n.toString()
    let nReversed = n.split("").reverse().join("")
    if(n==nReversed) {
        return true
    }
    else {
        return false
    }
}

for(i=90283743503594;i!=0;){
    if(isPalindrome(i)==true){
        console.log(`${i} is a palindrome`)
        i=0
    }
    else{
        i=i-1
    }
}

let n1 = 1
let n2 = 1
fib = 0
for(i=0;i<1000;i++){
    if(fib>=Number(1e+49)){
        console.log(fib)
        console.log(i)
        i=1000
    }
    else{
        fib = n1+n2
        n1 = n2
        n2 = fib
    }
}



let dumbNumber = '371072875339021027987979982208375902465101357402504637693767749000971264812489697007805041701826053874324986199524741059474233309513058123726617309629919422133635741615725224305633018110724061549082502306758820753934617117198031042104751377806324667689261670696623633820136378418383684177343617267572811287981284997940806548193159262169127588983273844274228917432520321923589422876796487670272189318474514457360013064390911672168568445887116031532767038648610584302543993961982891759366568675793495162176457141856560629502157223196586755079324193331'
let digitSum = 0
let dumbNumberArray = dumbNumber.split("")
for(numberIndex=0;numberIndex<dumbNumberArray.length;numberIndex++){
    digitSum = digitSum+Number(dumbNumberArray[numberIndex])
}
console.log(digitSum)




let excerpt = 'Non-magic people (more commonly known as Muggles) were particularly afraid of magic in medieval times, but not very good at recognizing it. On the rare occasion that they did catch a real witch or wizard, burning had no effect whatsoever. The witch or wizard would perform a basic Flame Freezing Charm and then pretend to shriek with pain while enjoying a gentle, tickling sensation. Indeed, Wendelin the Weird enjoyed being burned so much that she allowed herself to be caught no less than forty seven times in various disguises.'
console.log(excerpt.split(" ").length)
excerpt = excerpt.replace(`-`,` `)
excerpt = excerpt.replace(`(`,` `)
excerpt = excerpt.replace(`)`,` `)
excerpt = excerpt.replace(`,`,` `)
excerpt = excerpt.replace(`,`,` `)
excerpt = excerpt.replace(`,`,` `)
excerpt = excerpt.replace(`,`,` `)
excerpt = excerpt.replace('.',` `)
excerpt = excerpt.replace('.',` `)
excerpt = excerpt.replace('.',` `)
excerpt = excerpt.replace('.',` `)
console.log(excerpt)
console.log(`The first use of the word witch is at index ${excerpt.indexOf('witch')}`)
let longestWord = 0
for(excerptIndex=0;excerptIndex<excerpt.split(" ").length;excerptIndex++){
    if(excerpt.split(" ")[excerptIndex].length>longestWord){
        longestWord = excerpt.split(" ")[excerptIndex].length
        console.log(excerpt.split(" ")[excerptIndex])
    }
    else{

    }
}
console.log(longestWord)

//Project Euler Problem 8
let insaneNumberString = '731671765313306249192251196744265747423553491949349698352031277450632623957831801698480186947885184385861560789112949495459501737958331952853208805511125406987471585238630507156932909632952274430435576689664895044524452316173185640309871112172238311362229893423380308135336276614282806444486645238749303589072962904915604407723907138105158593079608667017242712188399879790879227492190169972088809377657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450'
let lengthOfProduct = 13
let currentNumbers = 0
let currentProduct = 0
let largestProduct = 0  
for(productIndex=0;productIndex<(insaneNumberString.length-lengthOfProduct);productIndex++){
    currentNumbers = insaneNumberString.substr(productIndex,lengthOfProduct).split("")
    currentProduct=Number(currentNumbers[0])
    for(productGeneration=1;productGeneration<currentNumbers.length;productGeneration++){
        currentProduct = currentProduct*Number(currentNumbers[productGeneration])
    }
    if(currentProduct>largestProduct){
        largestProduct=currentProduct
        console.log(largestProduct)
    }
    else{

    }
}

 

let person = {

    name: "Joe",
    age: 22,
    sayHi () {
        return `Hello, my name is ${this.name}`
    }
}

console.log(person.sayHi())

let rabbit = {
    name: 'Sherlock',
    colour: 'black and white',
    ears: 'Uppy',
    bunHop () {
        return `${this.name} is hopping`
    },
    bunChew () {
        return `${this.name} is chewing`
    }
}
console.log(rabbit)
console.log(rabbit.bunHop())
console.log(rabbit.bunChew())

let noughtsAndCrosses = {
    playerXName:``,
    playerOName:``,
    grid: [[' ',' ' ,' '],[' ',' ',' '],[' ',' ',' ']],
    displayGrid () {
        console.log(`   |   |    `);
        console.log(` ${this.grid[0][0]} | ${this.grid[0][1]} | ${this.grid[0][2]}  `);
        console.log(`   |   |    `);
        console.log(`-----------`);
        console.log(`   |   |    `);
        console.log(` ${this.grid[1][0]} | ${this.grid[1][1]} | ${this.grid[1][2]}  `);
        console.log(`   |   |    `);
        console.log(`-----------`);
        console.log(`   |   |    `);
        console.log(` ${this.grid[2][0]} | ${this.grid[2][1]} | ${this.grid[2][2]}  `);
        console.log(`   |   |    `);
    },
    makeMove (row, column, type) {
        if(type=='x'){
            this.grid[column][row] = 'x'
        }
        else if(type=='o'){
            this.grid[column][row] = 'o'
        }
        else{
            console.log('Input Error')
        }
    },
    checkVictory (n1, n2, n3) {
            if(n1=='x' && n2=='x' && n3=='x'){
                return true
            }
            else if(n1=='o' && n2=='o' && n3=='o'){
                return true
            }
            else{
                return false
            }
    },
    determineResult () {
        let x1y1 = this.grid[0][0]
        let x2y1 = this.grid[0][1]
        let x3y1 = this.grid[0][2]
        let x1y2 = this.grid[1][0]
        let x2y2 = this.grid[1][1]
        let x3y2 = this.grid[1][2]
        let x1y3 = this.grid[2][0]
        let x2y3 = this.grid[2][1]
        let x3y3 = this.grid[2][2]
        if(this.checkVictory(x1y1,x2y1,x3y1)==true){ // Top row
            console.log(`${x1y1} wins!`)
        }
        else if(this.checkVictory(x1y2,x2y2,x3y2)==true){ // Middle row
            console.log(`${x1y2} wins!`)
        }
        else if(this.checkVictory(x1y3,x2y3,x3y3)==true){ // Bottom row
            console.log(`${x1y2} wins!`)
        }
        else if(this.checkVictory(x1y1,x1y2,x1y3)==true){ // Left column
            console.log(`${x1y1} wins!`)
        }
        else if(this.checkVictory(x2y1,x2y2,x2y3)==true){ // Middle column
            console.log(`${x2y1} wins!`)
        }
        else if(this.checkVictory(x3y1,x3y2,x3y3)==true){ // Right column
            console.log(`${x1y1} wins!`)
        }
        else if(this.checkVictory(x1y1,x2y2,x3y3)==true){ // Top left -> Bottom right diagonal
            console.log(`${x1y1} wins!`)
        }
        else if(this.checkVictory(x3y1,x2y2,x1y3)==true){ // Top right -> Bottom left diagonal
            console.log(`${x3y1} wins!`)
        }
        else{
            console.log('No victory.')
        }
    }
}

noughtsAndCrosses.displayGrid()
noughtsAndCrosses.determineResult()
noughtsAndCrosses.makeMove(0,0,'o')
noughtsAndCrosses.makeMove(1,1,'o')
noughtsAndCrosses.makeMove(2,2,'o')
noughtsAndCrosses.displayGrid()
noughtsAndCrosses.determineResult()


// Project Euler Problem 9
const isPythagoreanTriple = (a,b,c) =>{
    if(a<b && b<c && (Math.pow(a, 2) + Math.pow(b, 2)) == Math.pow(c, 2)){
        return true
    }
    else{
        return false
    }
}

let limit = 1000

for(aCount=0;aCount<=limit;aCount++){
    for(bCount=0;bCount<=limit;bCount++){
        for(cCount=0;cCount<=limit;cCount++){
            if(isPythagoreanTriple(aCount,bCount,cCount) == true && (aCount+bCount+cCount)==1000){
                console.log(`a = ${aCount}, b = ${bCount}, c = ${cCount}`)
            }
            else{

            }
        }
        if(isPythagoreanTriple(aCount,bCount,cCount) == true && (aCount+bCount+cCount)==1000){
            console.log(`a = ${aCount}, b = ${bCount}, c = ${cCount}`)
        }
        else{
            
        }
    }
    if(isPythagoreanTriple(aCount,bCount,cCount) == true && (aCount+bCount+cCount)==1000){
        console.log(`a = ${aCount}, b = ${bCount}, c = ${cCount}`)
    }
    else{
        
    }
}

console.log(isPythagoreanTriple(200, 375, 425))


//Project Euler Problem 7

let loopsLimit = 10001
let primeCount = 0
let primesDesired = 10001

const isPrime = (num) =>{
    for(divisor=(num-1);divisor>1;divisor--){
        if(Number.isInteger(num/divisor)==true){
            return false
        }
        else if(Number.isInteger(num/divisor)==false){
        }
    }
    return true
}

for(loops = 2;primeCount<primesDesired;loops++){
    if(isPrime(loops)==true){
        primeCount++
        console.log(`Prime Number ${primeCount} = ${loops}`)
    }
    else if(isPrime(loops)==false){
    }
}



//Project Euler Problem 10

let loopsLimit = 2000000
let primeSum = 0

const isPrime = (num) =>{
    for(divisor=(Math.min (num-1,10000));divisor>1;divisor--){
        if(Number.isInteger(num/divisor)==true){
            return false
        }
        else if(Number.isInteger(num/divisor)==false){
        }
    }
    return true
}

for(loops = 2;loops<=loopsLimit;loops++){
    if(Number.isInteger(loops/1000)==true){
        console.log(`Loop ${loops} completed`)
    }
    if(isPrime(loops)==true){
        primeSum = primeSum+loops
    }
    else if(isPrime(loops)==false){
    }
}
console.log(primeSum) // 142913828922 with a divisor limit of 10000



//Project Euler Problem 12


const numDivisors = (num) =>{
    let divisorNumber = 0
    for(divisor=num;divisor>0;divisor--){
        if(Number.isInteger(num/divisor)==true){
        divisorNumber++
        }
        else if(Number.isInteger(num/divisor)==false){
        }
    }
    return divisorNumber
}

const generateTriangleNumber = (triNum) =>{
    let workingNumber = 0
    for(loops=triNum;loops>0;loops--){
        workingNumber = workingNumber+loops
    }
    return workingNumber
}

let currentNumber = 10500
let currentTriNum = 0
let currentNumDivisors = 0
for(answer=false;answer!=true;){
    currentTriNum=generateTriangleNumber(currentNumber)
    if(Number.isInteger(currentTriNum/2)==true && Number.isInteger(currentTriNum/3)==true && Number.isInteger(currentTriNum/4)==true && Number.isInteger(currentTriNum/5)==true){
    currentNumDivisors=numDivisors(currentTriNum)
    if(currentNumDivisors>100){
        console.log(`Tri-num ${currentNumber} = ${currentTriNum}, Divisors = ${currentNumDivisors}`)
    }
    else{
    }
    if(currentNumDivisors>500==true){
        answer=true
    }
    else{
        currentNumber++
    }
}
else{
    currentNumber++
}
}
// Answer is 76576500 (Trinum 12375, 576 divisors)



//Project Euler Problem 14

const collatzSequence = (startingNumber) =>{
    let CollatzArray = []
    let currentNumber = startingNumber
    for(;currentNumber>1;){
        if(Number.isInteger(currentNumber/2)==true){
            CollatzArray[CollatzArray.length] = currentNumber
            currentNumber = currentNumber/2
        }
        else if(Number.isInteger(currentNumber/2)==false){
            CollatzArray[CollatzArray.length] = currentNumber
            currentNumber = (currentNumber*3)+1
        }
    }
    CollatzArray[CollatzArray.length] = currentNumber
    return CollatzArray
}

let longestSequence = 0
let currentLength = 0

for(l=1;l<=1000000;l++){
currentLength = collatzSequence(l).length
if(currentLength>longestSequence){
    console.log(`Start number = ${l}, Length = ${currentLength}`)
    longestSequence = currentLength
}
else{
}
} // Solution is start num 837799, with a length of 525

//Project Euler problem 16
let twoPower = Math.pow(2,1000).toString().slice(0,-5).replace('.','').split("")
console.log(twoPower)
let totalSum = 0
for(i=0;i<twoPower.length;i++){
    totalSum = totalSum+Number(twoPower[i])
}
console.log(totalSum) //68

//Project Euler 10

const factorial = (startNum) =>{
    for(currentNum=startNum;currentNum>0;currentNum--){

    }
}

*/