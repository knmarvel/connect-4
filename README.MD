Assessment: Connect-Four

In Connect-Four, one player is assigned Red and the other player is assigned Black. Players alternate inserting their pieces into one of the 7 columns of a 7x6 grid. The first player to get four of their pieces in a row (horizontal, vertical, or diagonal), wins.

In the physical world, the grid is placed perpendicular to the playing table, such that the pieces fall to the bottom and stack upon each other. Your digital version of the game should yield the same end result (the falling animation is optional).

The game can end in a tie, meaning all cells are filled but no player achieved four-in-a-row.

Implement Connect-Four using HTML, CSS, and JavaScript. In each game, the players will be sitting at the same mouse & keyboard, alternating turns.
Submission Details

You will work in groups to complete your Connect-Four implementation. You should all code individually, but work together in building the layout and functionality of your game.

Submissions will also be individual. This will be a project you include in your portfolio, so make it look nice, and use GitLab's Pages feature to host your finished game so that anyone can play it.
Hints

If you are unsure how to get started, here are some incremental milestones:

    Display a red or black disc.
    Stack red and black discs in a column using a flex box layout.
    Display a full board consisting of 7 columns.
    Set a click handler function for each column that adds an additional disc.
    Take turns! Toggle the color of each successive disc added.
    Keep track of what color disc is at each position in the board. You should be able to console.log() debugging output after each move showing the state of the board.
    Once a column is full (has 6 discs), don't allow any more discs to be added.
    Check whether the last disc added completed a four-in-a-row within the column (vertically).
    Check whether the last disc added completed four-in-a-row horizontally.
    Check whether the last disc added completed four-in-a-row on either an upward- or downward-sloping diagonal.

Example

Here is an sample screenshot of an implementation that is complete, but without any fancy styling.

Submission

Push and deploy your code to Gitlab. Add KA_Grading as a member on your project with "Reporter" permission, and submit your gitlab pages url (Ex: https://username.gitlab.io/tower-of-hanoi). Add a comment to your submission stating your teammates names.


Rubric:
 Connect Four!
Connect Four!
Criteria 	Ratings 	Pts
This criterion is linked to a Learning Outcome 7x6 grid on the page.
	
	
2.0 pts
This criterion is linked to a Learning Outcome Player can add discs to the board.
	
	
2.0 pts
This criterion is linked to a Learning Outcome Disc color alternates between players.
	
	
2.0 pts
This criterion is linked to a Learning Outcome Game checks for wins vertically, horizontaly, and diagonally, and lets user know when the game ends in a Red Win, a Black Win, or a Tie.
	
	
4.0 pts
