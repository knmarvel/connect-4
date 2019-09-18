const board = [
    [null, null, null, null, null, null, null], //row 0: on click, the last null in the string changes to the appropriate rowor
    [null, null, null, null, null, null, null], //row 1
    [null, null, null, null, null, null, null], // row 2
    [null, null, null, null, null, null, null], //row 3
    [null, null, null, null, null, null, null], //row 4
    [null, null, null, null, null, null, null], //row 5
]
let player = "R"
let rowCount0 = 0;
let rowCount1 = 0;
let rowCount2 = 0;
let rowCount3 = 0;
let rowCount4 = 0;
let rowCount5 = 0;
let rowCount6 = 0;


    function addDiskToBoard(player, boardToUpdate, selectedColumn) {
        
        return board

    }

function columnIsFullError() {
    alert("Invalid move: column is full.")
}

function displayBoardInHTML(boardToDisplay) {

    for (let columnCounter = 0; columnCounter <= 6; columnCounter++) {
        for (let rowCounter = 0; rowCounter <= 5; rowCounter++) {
            //select the div coordinates
            let content = (findBlockLabel(rowCounter, columnCounter))
            replaceBlockContentsByCoordinates(rowCounter, columnCounter, content)
 
        }
    }
}
displayBoardInHTML(board);

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



function checkForEndingCondition(boardToCheck) {
    // ending conditions: "red win", "black win", "tie", "" (keep playing)
    return condition
}

function showMessage() {
    // Tell the user if someone has won or there is a tie
}

function togglePlayer(color) {
    let newColor = player
    if (player === "R") {
        player = "B";
    } else {
        player = "R";
    }
    return newColor
}



    // figure out what column was clicked
    let col0Click = document.querySelector("#col0")
    col0Click.addEventListener('click', function selectColumn0() {
          console.log(col0Click)
          if(rowCount0 <6)  {
              board[rowCount0][0]=player;
              rowcount0 = rowCount0++;

              displayBoardInHTML(board);
          } else{
              columnIsFullError()
          }
    })



    let col1Click = document.querySelector("#col1")
    col1Click.addEventListener('click', function selectColumn1() {
          console.log(col1Click)
          if(rowCount1 <6)  {
              board[rowCount1][1]=player;
              rowcount1 = rowCount1++;
              displayBoardInHTML(board);
          } else{
              columnIsFullError()
          }
    })
        
    let col2Click = document.querySelector("#col2")
    col2Click.addEventListener('click', function selectColumn2() {
          console.log(col2Click)
          if(rowCount2 <6)  {
              board[rowCount2][2]=player;
              rowcount2= rowCount2++;
              displayBoardInHTML(board);
          } else{
              columnIsFullError()
          }
    })
    let col3Click = document.querySelector("#col3")
    col3Click.addEventListener('click', function selectColumn3() {
          console.log(col3Click)
          if(rowCount3 <6)  {
              board[rowCount3][3]=player;
              rowcount3= rowCount3++;
              displayBoardInHTML(board);
          } else{
              columnIsFullError()
          }
    })
    let col4Click = document.querySelector("#col4")
    col4Click.addEventListener('click', function selectColumn4() {
          console.log(col4Click)
          if(rowCount4 <6)  {
              board[rowCount4][4]=player;
              rowcount4= rowCount4++;
              displayBoardInHTML(board);
          } else{
              columnIsFullError()
          }
    })

    let col5Click = document.querySelector("#col5")
    col5Click.addEventListener('click', function selectColumn5() {
          console.log(col5Click)
          if(rowCount5 <6)  {
              board[rowCount5][5]=player;
              rowcount5 = rowCount5++;
              displayBoardInHTML(board);
          } else{
              columnIsFullError()
          }
    })
    let col6Click = document.querySelector("#col6")
    col6Click.addEventListener('click', function selectColumn6() {
          console.log(col6Click)
          if(rowCount6 <6)  {
              board[rowCount6][6] = player;
              rowcount6 = rowCount6++;
              displayBoardInHTML(board);
          } else{
              columnIsFullError()
          }
    })
       let clickedColumn = 4

    //    board = addDiskToBoard(player, board, clickedColumn); displayBoardInHTML(board);
    //     let condition = checkForEndingCondition(board)
    //        // "red win", "black win", "tie", ""
    //    if (condition !== "") {
    //        showMessage(condition)
    //    } else {
    //        currentPlayer = togglePlayer(currentPlayer)
    //    }
    