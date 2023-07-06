# To Do List # 

## ABOUT ## 
- Dynamic single page application to do list generated primarily from React and demonstrate principles of CRUD
  <br>
- Users can add, filter between lists, and delete tasks if necessary (three different views)
  <br>
- Users can cross out or check off items as 'completed' / Also users can 'complete all' using a complete all button
  <br>
- UI displays a count or remaining items to do
  <br>
- Ability for user to press button to make 'completed' items active again

## Atomic Design :
- *ATOMS*
    - Heading component displaying 'todos'
    - User input to add a task to the list
    - Each individual task in the list after user enters
    - Checkmark radio box on left hand side of task items to mark task as completed
    - 'X' button on task hover to be able deleted tasks from the list
    - Item count in footer of list container displaying number of active items
    - Each button at bottom of footer for different display types (i.e. all, active, completed)
    - Clear completed button at bottom right of footer to clear completed status of all already marked as completed tasks
- *MOLECULES*
    - Each task itself combined with the checkmark radio box and the x button on hover
    - The footer of the container with the count, and different display buttons
- *ORGANISMS*
    - The entirety of the list itself with full app functionality utilizing CRUD principles as a SPA

## MoSCoW: 
- *MUST HAVE*
    - Heading displaying 'todos' at top
    - User Input ability to type in new tasks
    - User able to checkmark task as completed
    - User able to delete task if necessary with a button:hover effect
    - Count of active items displayed
    - Buttons to display all items, active items, or completed items
    - Button to clear all completed items if needed
- *SHOULD HAVE*
    - Friendly UI
    - Mobile responsiveness
    - SPA using React
- *COULD HAVE*
    - Remove all completed items (soft delete/archive)
    - Use local storage to persist data on revisit of page. Would need to use a useEffect hook to access local storage.
    - Add a seperate 'reminders' functionality
    - Add due dates and alarms to pop up in a 'elegant' fashion
    - Have a 'NEW' badge displayed to freshly added items for a certain period of time
- *WONT' HAVE*
    - a lot
 
## Variables / Components:
1. **HEADING COMPONENT**
     * Displays 'todos' at the top of the page
2. **ADDTASK COMPONENT**
     * User ability to type in whatever task they need to complete
     * Use event listener to look for 'enter' button being pressed to add item to task list
3. **TASKS**
     * Tasks will be an array of objects made up entirely from the user input
     * Starts out as an empty array, updates when user enters in text
     * **PROPERTIES**
         * Unique id set by getting seconds since Epoch
         * Actual task text set to be user's text entered
         * Status property or active property set to true or false, true meaning active and false meaning completed
4. **TASK COMPONENT**
     * Each task item displayed on the list will have a radio checkmark box to change object status to completed
     * On hover, will display a red X to delete task from the todos list if needed
5. **FOOTER COMPONENT**
     * Bottom left will display total number of active items left
     * Center will have 3 buttons to click, each button will change state to show all items, active items, or completed items
     * Right of footer will have text that appears only when objects are marked completed, this button will change the status of all completed objects back to active
  
## Functions : 
- 'Enter' Event Listener function ()
    - START user presses enter
    - userInput is unshift() to tasks array[] and declared new state. AVOID MUTATING ARRAYS  
    - INVOKES function ran to get unique id for that task
    - Active status automatically set to true
    - END
- 'Check' Event Listener
    - START user clicks check box
    - Tasks active status is set to false
    - Strikethrough task text and color changes
    - UPDATE state of objects
- Display Event Listeners at Footer
    - All 3 of these buttons will handleClicks to show either all items, active:true items or active:false items
- 'Clear Completed Items' event listener
    - START User clicks this button
    - Uses FOR loop to go through all objects in the array
    - If the objects active property is set to false, update it to active DO THIS WITHOUT MUTATING THE ARRAY