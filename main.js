// const distractor = ["A", "B", "C"]  보기 (선택지) (n)

const distractor = ["T", "W", "S"] // 보기 (선택지) (n)

const questionNum = 6 // 문제의 수 (r)

var permutationOfRepetition = [] // 중복순열 결과 (정답경우의수)

const permuteRepl = (array, n, eachElements, outArr) => {
    // 재귀 종료문
    if (array.length == n) {
        outArr.push(JSON.parse(JSON.stringify(array))) // 깊은 복사
        return
    }
    for (let el of eachElements) {
        array.push(el)
        permuteRepl(array, n, eachElements, outArr)
        array.pop()
    }
}
permuteRepl([], questionNum, distractor, permutationOfRepetition)

console.log(`전체 경우의수: ${permutationOfRepetition.length}`)
    // console.log("전체 경우:", permutationOfRepetition) console.log("전체 경우:",
    // permutationOfRepetition.map(_ => _.join("")))