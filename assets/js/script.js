console.log ('hello')

// Quiz Questions
  
// Start by pressing button to start quiz and timer
    // Create start button click event

var startButton = document.getElementById('startButton')

    // Have timer start with click event
    function timer(){
        console.log ('click')
    }
    // Show questions section
    // Hide header section
// Display question in order
    // Each answer needs to be a click event
    // One answer needs to be correct the rest need to be false, using a if else statment
    // Increase score if correct, if wrong change nothing
    // Move onto next question no matter the answer
// Display results input and save button
    // Create a Save Score click event, have it save the input from text box and the quiz score --> save to local storage
// Display all scores
    // Have all scores saved in local storage display

startButton.addEventListener('click', timer)
