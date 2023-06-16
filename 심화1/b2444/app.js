function solution(num) {
  let [blank, star] = [num - 1, 1]
  for (let i = 1; i < 2 * num; i++) {
    console.log(' '.repeat(blank) + '*'.repeat(star))
    blank += i < num ? -1 : 1
    star += i < num ? 2 : -2
  }
}

const rl = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', line => {
  solution(Number(line))
  process.exit()
})
