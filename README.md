# Andala

## About
Symmetry is a drawing web application which allows users to create beautiful, symmetrical designs.

## MVP
* Design grid (HTML table, built with React cell components) sets center and symmetrical axis based on user click
* Grid cells change to user-designated color when moused over and trigger their symmetric partner cells to change color as well
* Grid cells know when to stop listening for mouse over when user clicks for the second time
* User may choose a drawing color
* User may reset drawing board
* A directions sidebar will be present

## Wireframe of Symmetry Design
The cells outlined in green show where the user clicked to start and stop the drawing. Cells 2 and 3 were moused over which triggered their symmetric cells across the Y axis to also render in purple (the user's chosen color).

![Symmetry Wireframe](https://github.com/AliciaUnderhill/Symmetry/blob/master/images/Symmetry_wireframe.png)

## Technologies Used
This app will employ Javascript and React to manage intelligent cell rendering.

In addition to the entry file, the project will include the following React components:
1. `app.jsx`: will hold the app and render Grid, UserInputSidebar and DirectionsSidebar
2. `user_input_sidebar.jsx`: holds reference to current user drawing color and symmetry direction (both passed via callbacks to App which feeds to Grid). Also holds reset button which triggers a callback to clear grid
3. `grid.jsx`: holds the HTML table grid of `Cell` components and defines mouseover callbacks to pass down to `Cell`s as props. Also holds local state of mouseoverListening boolean to know when to symmetrically render
4. `cell.jsx`: holds reference to its own coordinate position and its distance from the axis of symmetry. Changes color when moused over and fires callback to handle render of its symmetric pair
5. `directions_sidebar.jsx`: holds app directions


## Implementation Timeline

### Day 1, Wed:
* Build the starting grid, render it in the browser
* Have cells change color when moused over
* Have cells change color beginning and ending with a user click
* Figure out how to assign cells immutable coordinates

* Figure out a way to assign a line of symmetry
* Figure out how to trigger symmetric line drawing

* Figure out a script that selects DOM elements based on their relation to (1) the focal line and (2) the moused over cell

-------
#NOTES:
* Figure out rotational symmetry with different orders
* Include a button for "done", aka grid lines of all blank cells go away
* Somehow highlight the axis of symmetry as user is drawing, and it goes away when user selects a new axis or clicks the done button
* Maybe can add on filters at the end?
* Add an eraser
* Is there a way to save the drawing? look at toDataUrl


* Finalize needed component hierarchy
* Develop gameplan for how to render symmetric cells upon mousing over the first in a symmetric pair
* Build `App` and `Grid` component skeletons and render them in the browser

### Day 2, Thurs:
* Build `Cell` component
* Test that clicking on a cell sets the axis of symmetry
* Test that cells will change color when moused over between user clicks
* Build `Grid` logic to render symmetric cell pairs and test this
* Format styling of grid

### Day 3, Fri:
* Build `UserInputSidebar` component to keep track of color and symmetrical axis. Test this.
* Test that grid can be cleared when user hits reset button
* Style `UserInputSidebar`

### Day 4, Sat:
* Finish any work from previous days
* Build `DirectionsSidebar`
* Build radial symmetry feature

## Bonus Features
* User may select multiple colors
* User may continue clicking and unclicking to add to their design, and the focal point will remain the same
* User may choose radial symmetry
* User may customize grid size
