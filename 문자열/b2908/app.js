function solution(strNum1, strNum2) {
  let reverse1 = strNum1.split('').reverse().join('')
  let reverse2 = strNum2.split('').reverse().join('')
  console.log(Math.max(Number(reverse1), Number(reverse2)))
}

const rl = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', line => {
  const [strNum1, strNum2] = line.split(' ')
  solution(strNum1, strNum2)
  rl.close()
})
