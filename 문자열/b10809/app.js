function solution(word) {
  let answer = ''
  for (let ascii = 97; ascii <= 122; ascii++) {
    let alphabet = String.fromCharCode(ascii)
    answer += word.indexOf(alphabet) + ' '
  }
  console.log(answer)
}

const rl = require('node:readline').createInterface({
  input: process.stdin,
  output: process.stdout,
})

rl.on('line', line => {
  solution(line)
  rl.close()
})
