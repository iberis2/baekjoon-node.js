function solution(input) {
  input.forEach(element => {
    console.log(element)
  })
}

const rl = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {
  solution(input)
  process.exit()
})
