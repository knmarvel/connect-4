const columns = [
    ["N", "N", "N", "N", "N", "N"], //col 0: on click, the last null in the string changes to the appropriate color
    ["N", "N", "N", "N", "N", "N"], //col 1
    ["N", "N", "N", "N", "N", "N"], // col 2
    ["N", "N", "N", "N", "N", "N"], //col 3
    ["N", "N", "N", "N", "N", "N"], //col 4
    ["N", "N", "N", "N", "N", "N"], //col 5
    ["N", "N", "N", "N", "N", "N"] //col 6
]


function labelBlocks(x, y) {
    let N = columns[y][x]
    return N
}
labelBlocks(0, 0)


//Loop through columns and label according to the array.

//loop through columns and rows and replaces div content from columns array. 
function columnLoop() {

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

columnLoop();





//Make a click handler for each column "target or current target" CHECK
//don't add more when column is full
//if/return
//fill bottom open position (use get first element?)
//what does a click need to do?
//Select a column CHECK




let col0Click = document.querySelector("#col0")
col0Click.addEventListener('click', function selectColumn() {
    console.log(col0Click)
})


let col1Click = document.querySelector("#col1")
col1Click.addEventListener('click', function selectColumn() {
    console.log(col1Click)
})
let col2Click = document.querySelector("#col2")
col2Click.addEventListener('click', function selectColumn() {
    console.log(col2Click)
})
let col3Click = document.querySelector("#col3")
col3Click.addEventListener('click', function selectColumn() {
    console.log(col3Click)
})
let col4Click = document.querySelector("#col4")
col4Click.addEventListener('click', function selectColumn() {
    console.log(col4Click)
})
let col5Click = document.querySelector("#col5")
col5Click.addEventListener('click', function selectColumn() {
    console.log(col5Click)
})
let col6Click = document.querySelector("#col6")
col6Click.addEventListener('click', function selectColumn() {
    console.log(col6Click)
})

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