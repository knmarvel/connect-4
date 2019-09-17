function addDiskToBoard(color, boardToUpdate, selectedColumn) {

    return updatedBoard
}

function displayBoardInHTML(boardToDisplay) {

    // nothing to return
}

function checkForEndingCondition(boardToCheck) {
    // ending conditions: "red win", "black win", "tie", "" (keep playing)
    return condition
}

function showMessage() {
    // Tell the user if someone has won or there is a tie
}

function togglePlayer(color) {
    if (player === "R") {
        player = "B";
    } else {
        player = "R";
    }
    return newColor
}

function columnClickHandler(evt) {
    // figure out what column was clicked
    let clickedColumn = evt.target.dataset.col
    if (clickedColumn === undefined) {
        return
    }

    board = addDiskToBoard(currentPlayer, board, clickedColumn)
    displayBoardInHTML(board)
    let condition = checkForEndingCondition(board)
        // "red win", "black win", "tie", ""
    if (condition !== "") {
        showMessage(condition)
    } else {
        currentPlayer = togglePlayer(currentPlayer)
    }