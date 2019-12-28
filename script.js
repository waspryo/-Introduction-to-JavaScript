
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