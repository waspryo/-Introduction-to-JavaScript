
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