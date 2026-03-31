let a = document.querySelectorAll(".box");
let i = 0;
let color = "red";
let letter = "X";
let count = 0;
let gameOver = false;
let ans = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
let okay = (a, ans) => {
    for (let i = 0; i < ans.length; i++) {
        let val1 = a[ans[i][0]].innerText;
        let val2 = a[ans[i][1]].innerText;
        let val3 = a[ans[i][2]].innerText;

        if (val1 !== "" && val1 == val2 && val2 == val3) {
            return true;
        }
    }
    return false;
}
for (let i = 0; i < a.length; i++) {
    a[i].onclick = (c) => {
        if (a[i].innerText !== "" || gameOver) return;

        if (count % 2 != 0) {
            color = "yellow";
            letter = "O";
        }
        else {
            color = "red";
            letter = "X";
        }
        a[i].style.backgroundColor = color;
        a[i].style.color = "white";
        a[i].innerText = letter;
        count++;

        if (okay(a, ans)) {
            alert(letter + " wins");
            gameOver = true;
        }

        if (count === 9) {
            alert("Its a draw");
            gameOver = true;
        }
    }
}

let resetBtn = document.getElementById("reset");
resetBtn.onclick = () => {
    for (let i = 0; i < a.length; i++) {
        a[i].innerText = "";
        a[i].style.backgroundColor = "";
    }
    count = 0;
    gameOver = false;
}
