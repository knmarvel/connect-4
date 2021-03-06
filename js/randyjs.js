const board = [
    ["N", "N", "N", "N", "N", "N", "N"], //row 0: on click, the last "N" in the string changes to the appropriate rowor
    ["N", "N", "N", "N", "N", "N", "N"], //row 1
    ["N", "N", "N", "N", "N", "N", "N"], // row 2
    ["N", "N", "N", "N", "N", "N", "N"], //row 3
    ["N", "N", "N", "N", "N", "N", "N"], //row 4
    ["N", "N", "N", "N", "N", "N", "N"], //row 5
]

console.table(board);
let player = "R"
let rowCount0 = 0;
let rowCount1 = 0;
let rowCount2 = 0;
let rowCount3 = 0;
let rowCount4 = 0;
let rowCount5 = 0;
let rowCount6 = 0;

//check to see if there are any "N"'s left in board[]
function checkForTie () {
if (board[0].includes("N")|| board[1].includes("N") || board[2].includes("N") 
    || board[3].includes("N") || board[4].includes("N") || board[5].includes("N")) {
    checkForHorizontalWin();
    checkForVerticalWin();
    checkForDiagonalWin();
    togglePlayer();
  }
  else {
      alert ("Tie Game.  Try Again?")
      window.location.reload()
  }
}
function addDiscImage(blockId, player) {
    document.getElementById(blockId).classList.add(player);
}
function columnIsFullError() {
    alert("Invalid move: column is full.")
}
// function displayBoardInHTML(boardToDisplay) {
//     for (let columnCounter = 0; columnCounter <= 6; columnCounter++) {
//         for (let rowCounter = 0; rowCounter <= 5; rowCounter++) {
//             //select the div coordinates
//             let content = (findBlockLabel(rowCounter, columnCounter))
//             replaceBlockContentsByCoordinates(rowCounter, columnCounter, content)
 
//         }
//     }
// }
// displayBoardInHTML(board);
    // nothing to return
    function findBlockLabel(x, y) {
        let N = board[x][y]
        return N
    }
    function replaceBlockContentsByCoordinates(x,y,content) {
        let blockId = (x + "," + y)
        let divToReplace = document.getElementById(blockId);
        divToReplace.innerHTML = "";
        divToReplace.innerHTML = blockId + " " + content;
    }
function togglePlayer() {
    let newColor = player
    if (player === "R") {
        player = "B";
        let turn = "Player 2's turn"
    } else {
        player = "R";
        let turn = "Player 1's turn"
    }
    changePlayerState();
    return newColor;
}
function changePlayerState()    {
    let turn = "Player 1's turn"
    if (player === "R") {
        turn = "Player 1's turn"
    } else {
        turn = "Player 2's turn"
    }
 document.getElementById("whichPlayer").innerHTML = turn;
}
window.onload = changePlayerState();

    // figure out what column was clicked
    let col0Click = document.querySelector("#col0")
    col0Click.addEventListener('click', function selectColumn0() {
          console.log(col0Click)
          if(rowCount0 <6)  {
              let blockId = (rowCount0 + "," + 0)
              addDiscImage(blockId, player)
              board[rowCount0][0]=player;
              rowcount0 = rowCount0++;
              checkForTie ()
            //   checkForHorizontalWin();
            //   checkForVerticalWin();
            //   checkForDiagonalWin();
            //   togglePlayer();
          } else{
              columnIsFullError()
          }
    })
    let col1Click = document.querySelector("#col1")
    col1Click.addEventListener('click', function selectColumn1() {
          console.log(col1Click)
          if(rowCount1 <6)  {
            let blockId = (rowCount1 + "," + 1)
            addDiscImage(blockId, player)
              board[rowCount1][1]=player;
              rowcount1 = rowCount1++;
              checkForTie ()
            //   checkForHorizontalWin();
            //   checkForVerticalWin();
            //   checkForDiagonalWin();
            //   togglePlayer();
          } else{
              columnIsFullError()
          }
    })
        
    let col2Click = document.querySelector("#col2")
    col2Click.addEventListener('click', function selectColumn2() {
          console.log(col2Click)
          if(rowCount2 <6)  {
            let blockId = (rowCount2 + "," + 2)
            addDiscImage(blockId, player)
              board[rowCount2][2]=player;
              rowcount2= rowCount2++;
              checkForTie()
            //   checkForHorizontalWin();
            //   checkForVerticalWin();
            //   checkForDiagonalWin();
            //   togglePlayer();
          } else{
              columnIsFullError()
          }
    })
    let col3Click = document.querySelector("#col3")
    col3Click.addEventListener('click', function selectColumn3() {
          console.log(col3Click)
          if(rowCount3 <6)  {
            let blockId = (rowCount3 + "," + 3)
            addDiscImage(blockId, player)
              board[rowCount3][3]=player;
              rowcount3= rowCount3++;
              checkForTie()
            //   checkForVerticalWin();
            //   checkForDiagonalWin();
            //   checkForHorizontalWin()
            //   togglePlayer();
          } else{
              columnIsFullError()
          }
    })
    let col4Click = document.querySelector("#col4")
    col4Click.addEventListener('click', function selectColumn4() {
          console.log(col4Click)
          if(rowCount4 <6)  {
            let blockId = (rowCount4 + "," + 4)
            addDiscImage(blockId, player)
              board[rowCount4][4]=player;
              rowcount4= rowCount4++;
              checkForTie()
            //   checkForVerticalWin();
            //   checkForHorizontalWin()
            //   checkForDiagonalWin();
            //   togglePlayer();
          } else{
              columnIsFullError()
          }
    })
    let col5Click = document.querySelector("#col5")
    col5Click.addEventListener('click', function selectColumn5() {
          console.log(col5Click)
          if(rowCount5 <6)  {
            let blockId = (rowCount5 + "," + 5)
            addDiscImage(blockId, player)
              board[rowCount5][5] = player;
              rowcount5 = rowCount5++;
              checkForTie()
            //   checkForHorizontalWin();
            //   checkForVerticalWin();
            //   checkForDiagonalWin();
            //   togglePlayer();
          } else{
              columnIsFullError()
          }
    })
    let col6Click = document.querySelector("#col6")
    col6Click.addEventListener('click', function selectColumn6() {
          console.log(col6Click)
          if(rowCount6 <6)  {
            let blockId = (rowCount6 + "," + 6)
            addDiscImage(blockId, player)
              board[rowCount6][6] = player;
              rowcount6 = rowCount6++;
              checkForTie()
            //   checkForHorizontalWin();
            //   checkForVerticalWin();
            //   checkForDiagonalWin();
            //   togglePlayer();
          } else{
              columnIsFullError()
          }
    })
    //    board = addDiskToBoard(player, board, clickedColumn); displayBoardInHTML(board);
    //     let condition = checkForEndingCondition(board)
    //        // "red win", "black win", "tie", ""
    //    if (condition !== "") {
    //        showMessage(condition)
    //    } else {
    //        currentPlayer = togglePlayer(currentPlayer)
    //    }