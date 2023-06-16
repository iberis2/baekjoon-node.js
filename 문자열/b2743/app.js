function solution(string) {
  console.log(string.length)
}
const rl = require('node:readline').createInterface({
  input: process.stdin,
  output: process.output,
})

rl.on('line', line => {
  solution(line)
  rl.close()
  process.exit()
})
