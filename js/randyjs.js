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

console.log(board[2][2]),

    function addDiskToBoard(color, boardToUpdate, selectedColumn) {

        return updatedBoard

    }

function columnIsFullError() {
    alert("Invalid move: column is full.")
}

function displayBoardInHTML(boardToDisplay) {


    // nothing to return
}

function boardLoop() {

    for (let columnCounter = 0; columnCounter <= 6; columnCounter++) {
        for (let rowCounter = 0; rowCounter <= 5; rowCounter++) {
            //select the div coordinates
            let content = (labelBlocks(rowCounter, columnCounter))
            let blockId = (rowCounter + "," + columnCounter)
            let divToReplace = document.getElementById(blockId);
            //find the block label
            divToReplace.innerHTML += " " + content;
        }
    }
}
boardLoop();

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

function switchPlayer() {
    if (player === "R") {
        player = "B";
    } else {
        player = "R";
    }
}

function columnClickHandler(evt) {
    // figure out what column was clicked


    let col0Click = document.querySelector("#col0")
    col0Click.addEventListener('click', function changeColumn0Value(player) {
            if (rowcount0 < 6) {
                board[row][0] = player;
                rowCount0 = rowCount0 + 1
            } else {
                columnIsFullError()
            }
        }

        let col1Click = document.querySelector("#col1")
        col1Click.addEventListener('click', function selectColumn() {
            console.log(col1Click)
        })

        function changeColumn1Value(player) {
            if (rowcount1 < 6) {
                board[row][1] = player;
                rowCount1 = rowCount1 + 1
            } else {
                columnIsFullError()
            }
        }
        let col2Click = document.querySelector("#col2")
        col2Click.addEventListener('click', function selectColumn() {
            console.log(col2Click)
        })

        function changeColumn2Value(player) {
            if (rowcount2 < 6) {
                board[row][2] = player;
                rowCount2 = rowCount2 + 1
            } else {
                columnIsFullError()
            }
        }
        let col3Click = document.querySelector("#col3")
        col3Click.addEventListener('click', function selectColumn() {
            console.log(col3Click)
        })

        function changeColumn3Value(player) {
            if (rowcount3 < 6) {
                board[row][3] = player;
                rowCount3 = rowCount3 + 1
            } else {
                columnIsFullError()
            }
        }
        let col4Click = document.querySelector("#col4")
        col4Click.addEventListener('click', function selectColumn() {
            console.log(col4Click)
        })

        function changeColumn4Value(player) {
            if (rowcount4 < 6) {
                board[row][4] = player;
                rowCount4 = rowCount4 + 1
            } else {
                columnIsFullError()
            }
        }
        let col5Click = document.querySelector("#col5")
        col5Click.addEventListener('click', function selectColumn() {
            console.log(col5Click)
        })

        function changeColumn5Value(player) {
            if (rowcount5 < 6) {
                board[row][5] = player;
                rowCount5 = rowCount5 + 1
            } else {
                columnIsFullError()
            }
        }
        let col6Click = document.querySelector("#col6")
        col6Click.addEventListener('click', function selectColumn() {
            console.log(col6Click)
        }) if (clickedColumn === undefined) {
            return
        }

        function changeColumn6Value(player) {
            if (rowcount6 < 6) {
                board[row][5] = player;
                rowCount5 = rowCount5 + 1
            } else {
                columnIsFullError()
            }
        }

        board = addDiskToBoard(currentPlayer, board, clickedColumn) displayBoardInHTML(board) let condition = checkForEndingCondition(board)
            // "red win", "black win", "tie", ""
        if (condition !== "") {
            showMessage(condition)
        } else {
            currentPlayer = togglePlayer(currentPlayer)
        }
    }