function solution(length) {
  for (let star = ''; star.length < length; ) {
    star += '*'
    console.log(star.padStart(length))
  }
}

const readline = require('node:readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', line => {
  solution(+line.trim())
  rl.close()
  process.exit()
})
