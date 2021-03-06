
// 最後のバリューが実行される
message = 'nice' 
messaging(message)
function messaging(message) {
    othermessage = 'hey'
    console.log(message)
}

console.log(message)
console.log(othermessage)
// 外で呼ぶのをhoistingと呼ぶ


/******************************
 *  Variables - Let and Const
 */
// var
var nice = 'I am'
var nice = 'I am'
// let
let boy = '18'

let title = 'h1'

if (true) {
    let message = 'hey'
    console.log(message)
}
console.log(title)

// const
const onigiri = 'okaka'
// onigiri = 'shake'
// 再代入できない
console.log(onigiri)

const onigiriDayo = ['okaka']
onigiriDayo.push('ume')
console.log(onigiriDayo)

/******************************
 * Basic Operations
 */

var str = 'Nice guy, You are really awsome !'
str.search('i')
console.log(str.search('g'))
console.log(str.indexOf('u'))

var ary = str.split(' ')
var ary1 = ary.join(' ')
console.log(ary[4])
// length = prpperty
console.log(ary.length)
console.log(ary1)

/*****************************
 * sentence
 */
var str = 'hello world'

var arr = str.split(' ')

var str2 = arr.join(' ')

var arr2 = [1, 2, 3, 4, 5]

console.log(arr2)
arr2.push(5.5,6)
console.log(arr2)

for (var elem of arr2) {
    result = elem * 2
}

var arr3 = arr2.map(function(elem) {
    return elem + 5
})


console.log(arr3)

var math1 = 10 + 2
var math2 = 10 - 5
var math3 = 10 * 3
var math4 = 10 / 4
var math5 = Math.floor(math4)

console.log(math1)
console.log(math2)
console.log(math3)
console.log(math4)
console.log(math5)

function evens(){
    var numbers = [1,2,3,4,5];
    
    return numbers.map(function(elem) {
        return elem * 2;
    })
}

/***********************
 * String Concatenation and
 * Interpolation
 */

 var message = "I'll be success"

//  ES5の記法
console.log('This is my message from feature!!' + ' ' + message)

//  ES6の記法
console.log(`This is my message from feature!! ${message}`)

var a = function() {
    return message
}
console.log(`The message is ${a()}`)

var success = "success"
if (message.indexOf(success) > -1) {
    // var newmessage = message.substr(0, message.indexOf(success))
    var newmessage = message.split(success)
    newmessage = newmessage.join('')
    console.log(newmessage)
} 

var a = 2
var b = 2

var a = true
var b = false

if (a == b) {
    console.log('hey man')
} else if (a < b) {
    console.log('ok buddy')
} else {
    console.log('who are u?')
}

console.log(a == b)
console.log(a > b)
console.log(a < b)
console.log(a >= b)
console.log(a <= b)

console.log(true != false)
console.log(true !== 1)

console.log('0' == false)

console.log(null == undefined)

function return_only_10_plus(){
    let initial_array = [1, 21, 5, 6, 42, 8, 3, 10, 15]
    //Populate the final array only with numbers greated than 10
    let final_array = [];
    
    for (let i = 0; i < initial_array.length; i++){
        if(initial_array[i] > 10) {
         final_array.push(initial_array[i])
        }
    }
    console.log(final_array)
}
 
return_only_10_plus()

function num() {
    return 4
}
console.log(num())

var a = function() {
    return 5
}
console.log(a())

a = function() {
    return 'nice'
}
console.log(a())

var a = (paramA, paramB, paramC, paramD) => {
    console.log(paramA)
    console.log(paramB)
    console.log(paramC)
    console.log(paramD)
    return (paramC - paramB)
}
var arr = [54,324,12, 120]
console.log(a(...arr)) 

var texts = 'hey man what is up?'
if (texts.indexOf(texts) > -1) {
    // var newmessage = message.substr(0, message.indexOf(success))
    var newmessage = texts.split(success)
    newmessage = newmessage.join('')
    console.log(newmessage)
} 