boxs = document.querySelectorAll('.box')
idTurn = document.getElementById('turn');
idResult = document.getElementById('result');
cTurn = document.querySelector('.turn')
classResult = document.querySelector('.result')
turn = true
let WIN = false;
Array.from(boxs).forEach(box => {
    box.addEventListener('click',()=>{
        if(WIN){
            alert("Match End")
            location.reload()
        }
        checkFill(box);
        checkDraw();
    })
});
function checkFill(b){
   if((b.innerText !== '')&&(b.innerText == 'X')||(b.innerText=='O')){
    alert('Box Already Filled......')
   }
   else{
    checkTurn();
    fillTurn(b);
    checkWin();
   }
}
function fillTurn(bot){
    bot.style.color = "white";
    if(!turn){
        bot.innerText='X'
        bot.style.backgroundColor = "green";
    }
    else{
        bot.innerText='O'
        bot.style.backgroundColor = "red";
    }
}

function checkWin(){
    win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]
    for(i=0;i<8;i++){
        if((boxs[win[i][0]].innerText==boxs[win[i][1]].innerText)&&(boxs[win[i][1]].innerText==boxs[win[i][2]].innerText)&&(boxs[win[i][0]].innerText!='')&&(boxs[win[i][1]].innerText!='')&&(boxs[win[i][2]].innerText!='')){
            // alert("YOu Won")
            WIN = true;
            idResult.innerText=boxs[win[i][0]].innerText + ' Won';            
            setTimeout(() => {
                classResult.style.display = 'flex';
            }, 300);
        }
    }
}
// console.log(checkWin());

function checkTurn(){
    if(turn){
        turn = false;
        idTurn.innerText = 'O';
        idTurn.style.color = 'red';
    }
    else{
        turn = true;
        idTurn.innerText = 'X';
        idTurn.style.color = 'green';
    }
}
function gameOver(){
    // alert('Hi')
    for (let i = 0; i < 9; i++) {
        boxs[i].innerText = ''
        boxs[i].style.backgroundColor = 'blue';
        classResult.style.display = 'none'
        turn = false;
        checkTurn();
    }
}
function Reload(){
    location.reload();
}
function checkDraw(){
    let draw = true;
    for (let i = 0; i < 9; i++) {
        if((boxs[i].innerText === '')){
            draw=false;
        }
    }
    if((draw) && (!WIN)){
        // alert("Game Draw");
        idResult.innerText='Match Draw';            
        setTimeout(() => {
            classResult.style.display = 'flex';
        }, 300);
    }
}
if(WIN){
    
}