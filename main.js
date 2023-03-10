// 랜덤 번호 지정 o
// 유저가 번호를 입력한다 그리고 go 라는 버튼을 누름 o
// 만약에 유저가 랜덤번호를 맞추면, 맞췄습니다!
// 랜덤 번호가 < 유저번호 Down
// 랜덤 번호가 > 유저번호 Up
//Reset버튼을 누르면 게임이 리셋된다
//5번의 기회를 다 쓰면 게임이 끝난다 (더이상 추측 불가, 버튼이 disable)
//유저가 1~100 범위 밖의 숫자를 입력하면 알려준다. 기회를 깎지 않는다.
// 유저가 이미 입력한 숫자를 또 입력하면, 알려준다. 기회를 깎지 않는다.


let computerNumber = 0
let playButton = document.getElementById("play-btn");
let userInput = document.getElementById("user-input");
let resultArea = document.getElementById("result-area");

playButton.addEventListener("click",play)

function pickRandomNum() {
    computerNumber = Math.floor(Math.random() * 100) + 1;
    //Math.random() => 0~1 까지의 랜덤 수를 반환 ex) 0.234234
    //그래서 100을 곱해줌으로써 소수점 앞자리가 숫자로나오게 만듦
    //소수점 뒤에있는 수들을 날리는 함수 => Math.floor()
    //이 모든걸 해주면 computerNumber는 0~99까지의 랜덤수를 반환
    //때문에 +1을 해줌
    console.log("정답", computerNumber);
}

function play() {
    let userValue = userInput.value;
    if (userValue < computerNumber) {
        resultArea.textContent = "UP!!!"
        console.log("UP!!!")
    } else if (userValue > computerNumber) {
        resultArea.textContent = "DOWN!!!"
        console.log("DOWN!!")
    } else {
        resultArea.textContent = "맞췄습니다 ~!"
        console.log("맞췄습니다 ~!")

    }
}

pickRandomNum()