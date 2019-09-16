//Make a click handler for each column "target or current target"
    //don't add more when column is full
        //if/return
    //fill bottom open position (use get first element?)
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
const columns = [
    NNNNNN, //col 0: on click, the last null in the string changes to the appropriate color
    NNNNNN, //col 1
    NNNNNN, // col 2
    NNNNNN, //col 3
    NNNNNN, //col 4
    NNNNNN, //col 5
    NNNNNN //col 6
]

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
//