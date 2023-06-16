# baekjoon-node.js
## 🔗 [백준-단계별로 풀어보기](https://www.acmicpc.net/step)
자바스크립트로 백준 문제풀이를 하는 분들을 위해 입출력이 들어있는 solution 함수가 있는 풀이 코드 모음을 만들어 보았습니다.\
solution 함수 내부 풀이 코드를 지우고 함수 내부에 문제를 풀면 됩니다.

## fs 입력 예제
- 코드 제출시 `'./input.txt'`를 `'/dev/stdin'` 또는 `0`으로 바꿔서 제출하시면 됩니다.
- 가장 첫 번째 테스트 케이스가 같은 폴더 내부 `input.txt` 파일에 들어있습니다.
  - 다른 테스트 케이스 확인은 input.txt 파일을 수정해서 확인할 수 있습니다.

🔗 [백준 / 단계별로 풀어보기 / 입출력과 사칙연산 / 1000번](https://www.acmicpc.net/problem/1000)

```js
// 입출력과_사칙연산/b1000/app.js

const fs = require('fs')
let input = fs.readFileSync('./input.txt').toString().split(' ') // vs
// 코드 제출 시 let input = fs.readFileSync('/dev/stdin').toString().split(' ') 로 바꿔주세요
const num1 = +input[0]
const num2 = +input[1]

function solution(a, b) {
 // 여기에 코드를 작성하면 됩니다.
}

solution(num1, num2)
```

## readline 입력 예제
solution 함수 내부에 문제 풀이 코드를 작성 후\
터미널에서 해당 폴더로 진입하여 node.js를 실행시키고 \
직접 테스트 케이스를 입력 후 확인할 수 있습니다.

🔗 [백준 / 단계별로 풀어보기 / 반복문 / 2438번](https://www.acmicpc.net/problem/2438)
```js
// 반복문/b2438/app.js

function solution(num) {
 // 여기에 코드를 작성해주세요
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
```

```shell
# 터미널에서 아래와 같이 node.js를 실행하여 확인할 수 있습니다.

cd 반복문/b2438
node app.js

# 테스트 케이스 input 입력
5 
```


--------
### 만들게 된 계기 TMI
알고리즘 스터디를 진행하기 위해 백준 그룹 생성이 필요했는데, 100문제 이상 푼 사용자만 그룹 생성이 가능했습니다.\
저와 같이 빠르게 많은 문제풀이가 필요한 사용자들을 위해 코드 모음을 만들어 보게 되었습니다.\
(하지만 결국 먼저 100문제 푼 스터디원이 있어서 그 분이 그룹 생성해 주심 😂)

2023.06.16. 기준 60문제 정도 됩니다.\
100문제를 목표로 채워놓도록 하겠습니다.
