// '/dev/stdin'
let [[N, M], ...input] = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .split('\n')
  .map(el => el.split(' ').map(Number))

/* N: 3 M: 3 
input: [
  [ 1, 1, 1 ],
  [ 2, 2, 2 ],
  [ 0, 1, 0 ],
  [ 3, 3, 3 ],
  [ 4, 4, 4 ],
  [ 5, 5, 100 ]
]
*/

function solution(size, elementCount, input) {
  방법1
  let answer = []
  for (let i = 0; i < size; i++) {
    answer[i] = []
    for (let j = 0; j < elementCount; j++) {
      let answerElement = input[i][j] + input[i + size][j]
      answer[i].push(answerElement)
    }
  }
  answer.forEach(el => console.log(...el))
}

solution(N, M, input)
