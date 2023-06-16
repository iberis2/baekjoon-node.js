// '/dev/stdin'

const input = require('fs')
  .readFileSync('./input.txt')
  .toString()
  .trim()
  .split('\n')
  .map(el => el.split(' '))

/* input: [
  [ 'ObjectOrientedProgramming1', '3.0', 'A+' ],
  [ 'IntroductiontoComputerEngineering', '3.0', 'A+' ],
  [ 'ObjectOrientedProgramming2', '3.0', 'A0' ],
  [ 'CreativeComputerEngineeringDesign', '3.0', 'A+' ],
  [ 'AssemblyLanguage', '3.0', 'A+' ],
  [ 'InternetProgramming', '3.0', 'B0' ],
  [ 'ApplicationProgramminginJava', '3.0', 'A0' ],
  [ 'SystemProgramming', '3.0', 'B0' ],
  [ 'OperatingSystem', '3.0', 'B0' ],
  [ 'WirelessCommunicationsandNetworking', '3.0', 'C+' ],
  [ 'LogicCircuits', '3.0', 'B0' ],
  [ 'DataStructure', '4.0', 'A+' ],
  [ 'MicroprocessorApplication', '3.0', 'B+' ],
  [ 'EmbeddedSoftware', '3.0', 'C0' ],
  [ 'ComputerSecurity', '3.0', 'D+' ],
  [ 'Database', '3.0', 'C+' ],
  [ 'Algorithm', '3.0', 'B0' ],
  [ 'CapstoneDesigninCSE', '3.0', 'B+' ],
  [ 'CompilerDesign', '3.0', 'D0' ],
  [ 'ProblemSolving', '4.0', 'P' ]
]
 */

function solution(input) {
  const score = {
    'A+': 4.5,
    A0: 4.0,
    'B+': 3.5,
    B0: 3.0,
    'C+': 2.5,
    C0: 2.0,
    'D+': 1.5,
    D0: 1.0,
    F: 0.0,
  }

  // 방법1
  const [addScore, subjectScores] = input.reduce(
    (acc, cur) => {
      const [subject, credits, grade] = cur
      const addScore = grade !== 'P' ? +credits * score[grade] : 0
      const subjectScore = grade !== 'P' ? +credits : 0
      return (acc = [acc[0] + addScore, acc[1] + subjectScore])
    },
    [0, 0]
  )
  console.log(addScore / subjectScores)

  // 방법2
  let getGrades = 0,
    totalSubjectsCredits = 0
  for (const [name, credits, grade] of input) {
    if (grade === 'P') continue
    getGrades += +credits * score[grade]
    totalSubjectsCredits += +credits
  }
  console.log(getGrades / totalSubjectsCredits)
}

solution(input)
