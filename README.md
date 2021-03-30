# MultipleChoiceCases

### 설정해야하는 변수 (3가지)

- distractor

[example]
```
["A", "B", "C", "D", "E", "F"] // 선다형 선택지
```

- questionNum

[example]
```
6 // 총 6문제
```

- tryAnswer

[example]
```
[
    ["AFAFCE", 2], // A,F,A,F,C,E 순서로 입력했더니 2개 일치
    ["AFECCD", 4],
    ["DFADFE", 2],
]
```