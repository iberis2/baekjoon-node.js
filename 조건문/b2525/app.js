// '/dev/stdin'

const fs = require('fs')
const input = fs.readFileSync('./input.txt').toString().trim().split(/ |\n/).map(Number)
const hour = input[0],
  minute = input[1],
  need = input[2]

function solution(hour, minute, need) {
  minute += need
  hour += Math.floor(minute / 60)

  hour = hour % 24
  minute = minute % 60

  console.log(hour, minute)
}

solution(hour, minute, need)
