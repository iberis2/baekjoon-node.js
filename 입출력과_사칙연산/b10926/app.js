// '/dev/stdin'
const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim() // 문자열 양 끝에 공백 제거해야함

function solution(input) {
  console.log(`${input}??!`)
}

solution(input)
