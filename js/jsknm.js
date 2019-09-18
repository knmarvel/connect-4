
function checkForEndingCondition(board) {
   
    
   
   
    // ending conditions: "red win", "black win", "tie", "" (keep playing)
    return condition
}

function showMessage() {
    // Tell the user if someone has won or there is a tie
}









function checkForHorizontalWin()   {
let checkHorizontalWin = (checkboard)=> {
    if(checkBoard.includes("BBBB")||checkboard.includes("RRRR")) {
        return checkboard;
    } 
}
return board.filter(checkHorizontalWin)
}









function addDiscImage(blockId, player) {
    document.getElementById(blockId).classList.add(player);
}












//Make a click handler for each column "target or current target" CHECK
//don't add more when column is full
//if/return
//fill bottom open position (use get first element?)
//what does a click need to do?
//Select a column CHECK




//Drop a game piece into bottom available row (and change array)

//if no row available, declares bad move
//check for win
//switches to the next player


//Alternate between red and black discs
//Filler for discs (CSS)
//method to check positioning
//way to go looping through these strings
//array that updates with the board with strings, start with "NNNNNNN", B for black, R for red
//foreach to loop through all the rows
//Declare an array
//All elements displayed in a string: 
//On click of column, we change the last remaining null in the string to appropriate color
//

//Win conditions
//4 horizontally:
// Slice the same character from each string, if they all match, win!
// 4 vertically: 
// Does the string include RRRR or BBBB? If so, win! (kata 4:19)
// 4 diagonally:
// Slope of a line: y = mx+b
// X = row coordinate
// Y = column coordinate
// B = offset (0-2)
// We know slope: 1&-1
// (y-b)/x = 1 || -1

//Win output "red wins!" "black wins" "ties" "stalemate"
//ocp;




//check for win conditions
//connect click handler with change column functions
//function for changing null to R or B