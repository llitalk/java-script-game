//get userValue
function UserValueInput() {
    const UserValue = document.getElementById('playerValue').value;
    if (UserValue > 10) {
        alert('please enter number less then 10');
    }
    return UserValue;
}

//get caomputer value
function computerValueChoice() {
    const max = 10;
    const computerValue = Math.floor(Math.random() * Math.floor(max));
    return computerValue;
}

function whoWin(cValue, uValue) {
    if (cValue > uValue) {
        alert(`computer won this game You choose ${uValue} and Computer choose ${cValue}`);
    } else if (cValue < uValue) {
        alert(`You won this game You choose ${uValue} and Computer choose ${cValue}`);
    } else {
        alert(`draw  !! You choose ${uValue} and Computer choose ${cValue}`);
    }
}

//get computer value
function gameclickBtn() {
    console.log('click');
    const UserValue = UserValueInput();
    console.log(UserValue);
    const computerValue = computerValueChoice();
    const checkWinner = whoWin(computerValue, UserValue);
}
