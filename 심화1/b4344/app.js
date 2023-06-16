// '/dev/stdin'
const fs = require('fs')
let input = fs.readFileSync('./index.txt').toString()
input = input.split('\n')

const testCaseNum = Number(input[0])

const testCase = []
for (let i = 1; i <= testCaseNum; ++i) {
  const arr = input[i].split(' ').map(item => +item)
  testCase.push({ len: arr[0], case: arr.slice(1, arr.length) })
}

/*
testCaseNum : 5
testCase : [
  {
    len : 5,
    case : [ 50, 50, 70, 80, 100 ]
  }
]
*/

function solution(N, C) {
  for (let i = 0; i < N; i++) {
    const sum = C[i].case.reduce((acc, cur) => (acc += cur))
    const abj = sum / C[i].len
    const overAbj = C[i].case.filter(score => score > abj)
    const ratio = ((overAbj.length / C[i].len) * 100).toFixed(3)
    console.log(ratio + '%')
  }
}

solution(testCaseNum, testCase)
