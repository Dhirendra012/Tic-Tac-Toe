let turn = "X";
const btn = document.getElementById("btn");
const info = document.getElementById("info");
const box = document.getElementsByClassName("box");
const changeTurnButton = document.getElementById("turn");
let win = false;

const cl = new Audio("ting.mp3");
const music = new Audio("music.mp3");
const winAudio = new Audio("gameover.mp3");
music.play();

const changeTurn = () =>
{
    if(turn === "X"){ turn = "O"; }
    else{ turn = "X"; }
}

const clearBox = () => 
{ 
    Array.from(box).forEach((event)=>
    {
        event.innerText = ``;
    })

    if(turn !== "X"){ changeTurn(); }
    changeTurnButton.innerText = turn;
    win = false;
    info.innerText = ``;
}

btn.addEventListener("click",clearBox);

const isWin = () =>
{
    let str = [ 
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]]

    Array.from(str).forEach((e)=>
    {
        if(box[e[0]].innerText === box[e[1]].innerText && 
            box[e[1]].innerText === box[e[2]].innerText &&
            box[e[0]].innerText !== "")
        {
            info.innerText = box[e[0]].innerText + " Wins";
            win = true;
            winAudio.play();
            document.querySelector("#imgbox").style.width = "200px"; 
        }
    })
}

Array.from(box).forEach((event)=>
{
    event.addEventListener("click",()=>
    { 
        if(win !== true && event.innerText === "")
        {
            event.innerText = turn; 
            changeTurn(); 
            changeTurnButton.innerText = turn;
            isWin();
        }

        cl.play();
    })
})