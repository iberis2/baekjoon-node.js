// '/dev/stdin'
const [length, ...input] = require('fs').readFileSync('./input.txt').toString().trim().split('\n')

// length: 3 input: [ 'happy', 'new', 'year' ]

function solution(_, words) {
  let count = 0
  words.forEach(word => {
    let splitWord = ''
    for (let i = 0; i < word.length; i++) {
      if (word[i] !== word[i - 1] && splitWord.includes(word[i])) {
        splitWord = ''
        break
      }
      splitWord += word[i]
    }
    splitWord && count++
  })
  console.log(count)
}

solution(length, input)
