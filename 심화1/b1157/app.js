function solution(input) {
  input = input.toUpperCase().split('')
  let words = {}
  input.forEach(alphabet => (words[alphabet] = words[alphabet] + 1 || 1))
  let maxValue = Math.max(...Object.values(words))
  let findKey = Object.keys(words).filter(key => words[key] === maxValue)
  console.log(findKey.length > 1 ? '?' : findKey[0])
}

const rl = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', line => {
  solution(line.trim())
  process.exit()
})
