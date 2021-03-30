// const distractor = ["A", "B", "C"]  보기 (선택지) (n)
const distractor = ["T", "W", "S"] // 보기 (선택지) (n)
const questionNum = 6 // 문제의 수 (r)
let permutationOfRepetition = [] // 중복순열 결과 (정답경우의수)

let tryAnswer = [

    [
        "SWTTTW", 2
    ],
    [
        "TSTSST", 4
    ],
    [
        "TSWSSW", 2
    ],
    [
        "WWTSST", 4
    ]
];

let tryAnswer_array = []

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
    // console.log("전체 경우:", permutationOfRepetition);
    // console.log("전체 경우:", permutationOfRepetition.map(_ => _.join("")));




for (var i = 0; i < tryAnswer.length; i++) {
    tempArray = []
    tempArray.push(tryAnswer[i][0].split(""))

    tempArray.push(tryAnswer[i][1])

    tryAnswer_array.push(tempArray)
}
console.log("시도한 정답:", tryAnswer_array);

var possibleCase = JSON.parse(JSON.stringify(permutationOfRepetition)); // 깊은 복사

for (var i = 0; i < tryAnswer_array.length; i++) {

    for (var j = 0; j < permutationOfRepetition.length; j++) {

        let correctNum = 0

        for (var k = 0; k < questionNum; k++) {



            if (tryAnswer_array[i][0][k] == permutationOfRepetition[j][k]) {
                correctNum++
            }

        }

        if (correctNum != tryAnswer_array[i][1]) {
            // possibleCase.splice(j, 1);
            delete possibleCase[j];
        }

    }
}

possibleCase = possibleCase.filter((element, i) => element !== undefined); // undefined 제거

// console.log("잔여 경우:", possibleCase);
console.log("잔여 경우:", possibleCase.map(_ => _.join("")));

console.log(`잔여 경우의수: ${possibleCase.length}`)