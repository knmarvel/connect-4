const board6 = [
    ["R", "10", "20", "30", "40", "50", "60"], //row 0: on click, the last "N" in the string changes to the appropriate rowor
    ["01", "R", "21", "31", "41", "51", "61"], //row 1
    ["R", "12", "R", "R", "42", "52", "62"], // row 2
    ["03", "R", "R", "R", "43", "53", "63"], //row 3
    ["04", "R", "R", "34", "44", "54", "64"], //row 4
    ["R", "15", "25", "R", "45", "55", "65"], //row 5
]


function checkForDiagonalWin()  {
    let positiveSlopes = getPositiveSlopes();
    let winConditionR = positiveSlopes.search("RRRR");
    let winConditionB = positiveSlopes.search("BBBB");
    let negativeSlopes = getNegativeSlopes();
    if (winConditionR === -1){
    winConditionR = negativeSlopes.search("RRRR");}
    if (winConditionB === -1)   {
    winConditionB = negativeSlopes.search("BBBB");}
    console.log(winConditionR,winConditionB);
    console.log(declareConnect4(winConditionR, winConditionB))
}

function getPositiveSlopes()    {
    let slopePositiveString="";
    for(let verticalCounter = 0; verticalCounter <=2; verticalCounter++)  {
        for(let horizontalCounter = 0; horizontalCounter <=3; horizontalCounter++)  {
            for(let slope = 0; slope <=3; slope++) {
                let upX = horizontalCounter+slope;
                let upY = verticalCounter+slope;
            slopePositiveString = slopePositiveString + board[upY][upX];
        } slopePositiveString = slopePositiveString + " ";
    }
        
    }return slopePositiveString;
}

function getNegativeSlopes()    {
    let slopeNegativeString="";
    for(let verticalCounter = 5; verticalCounter >=3; verticalCounter--)  {
        for(let horizontalCounter = 0; horizontalCounter <=3; horizontalCounter++)  {
            for(let slope = 0; slope <=3; slope++) {
                let downX = horizontalCounter+slope;
                let downY = verticalCounter-slope;
            slopeNegativeString = slopeNegativeString + board[downY][downX];
        } slopeNegativeString = slopeNegativeString + " ";
        
    }
    
    }console.log(slopeNegativeString) 
    return slopeNegativeString;
}

function declareConnect4(winConditionR, winConditionB)  {
    let connect4Alert = "";
    let redConnect = "Player 1 Has Connect 4!"
    let blackConnect = "Player 2 Has Connect 4"
    if(winConditionR !=-1)   {
        if (connect4Alert === "") {
        connect4Alert = redConnect;
        }
        else {connect4Alert = "Tie!" +" "+ redconnect +", " + blackConnect}
    }
    if(winConditionB !=-1)  {
        if(connect4Alert === "")    {
        connect4Alert = connect4Alert + blackConnect;}
        else {connect4Alert = "Tie!" + redConnect + ", " + blackConnect}
    }
    if (connect4Alert != "")    {
    alert(connect4Alert);
    }
}


function checkForHorizontalWin() {

    for (let rowCounter = 0; rowCounter <= 5; rowCounter++) {
        let rowString = ""
        for (let columnCounter = 0; columnCounter <= 6; columnCounter++) {
            rowString = rowString.split(",").join("") + board[rowCounter][columnCounter];
        }
        if (rowString.includes("RRRR")){
            alert("Red Wins")
        }
        else if(rowString.includes("BBBB")){
            alert("Black Wins")}
;    }
}