HTML

show who the current player is
7 x 6 board


switch between colors when you switch players
draw a disk into the board
disk appears in the column that was clicked

stack the disks
can't put a disk in a cell that already has a disk in it
Only allow six disks per column

do nothing. The player should not switch players




determine if a player has won

horizontally
vertically
diagonally


Tie game

board is full, but no player has four-in-a-row



== Plan for the actual code ==

Initialize

HTML
current player
board array


Click handlers for each column

Try to insert a disk of the current player's color into the board array in the selected column

*****Validate the move: can't put a disk in a cell that already has a disk in it


Update the HTML on the page to reflect the current state of the board array
Check the board for an ending condition

Tie game

board is full, but no player has four-in-a-row


determine if a player has won

horizontally
vertically
diagonally


If game has ended, show an appropriate message
toggle current player