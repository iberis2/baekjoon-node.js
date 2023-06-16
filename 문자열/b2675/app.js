// '/dev/stdin'
const [count, ...input] = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map((el, idx) => {
    if (idx === 0) {
      return Number(el)
    }
    let [num, str] = el.split(' ')
    return [Number(num), str]
  })

// count: 2 input: [ [ 3, 'ABC' ], [ 5, '/HTP' ] ]

function solution(count, input) {
  input.forEach(el => {
    let answer = ''
    for (let i = 0; i < el[1].length; i++) {
      answer += el[1][i].repeat(el[0])
    }
    console.log(answer)
  })
}

solution(count, input)
