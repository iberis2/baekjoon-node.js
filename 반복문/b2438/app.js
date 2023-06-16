function solution(num) {
  // let starArray = Array.from({ length: num }, (_, idx) => {
  //   let value = '*'
  //   for (let i = 0; i < idx; ++i) {
  //     value += '*'
  //   }
  //   return value
  // })
  // let answer = starArray.reduce((acc, cur) => (acc += cur + '\n'), '')
  // console.log(answer)

  for (let i = ''; i.length < num; ) {
    console.log((i += '*'))
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
