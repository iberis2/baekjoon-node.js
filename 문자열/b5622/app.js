function solution(str) {
  let dial = ['ABC', 'DEF', 'GHI', 'JKL', 'MNO', 'PQRS', 'TUV', 'WXYZ']
  let answer = [...str].reduce((acc, cur) => {
    return (acc += dial.findIndex(el => el.includes(cur)) + 3)
  }, 0)
  console.log(answer)
}

const rl = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', line => {
  solution(line.trim())
  rl.close()
})
