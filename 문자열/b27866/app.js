function solution(str, index) {
  console.log(str[index - 1])
}

const rl = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

let input = []
rl.on('line', line => {
  input.push(line)
}).on('close', () => {
  let [string, num] = input
  solution(string, Number(num))
  process.exit()
})
