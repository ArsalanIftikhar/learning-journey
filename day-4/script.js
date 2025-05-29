/*document.getElementById("changeColor").addEventListener("click", function() {
    document.body.style.backgroundColor = "lightblue";
});
document.getElementById("resetColor").addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
});*/

/*const colors = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender"];
let colorIndex = 0;*/

/*document.getElementById("changeColor").addEventListener("click", function() {
    document.body.style.backgroundColor = colors[colorIndex];
    colorIndex++;

    if (colorIndex === colors.length) {
    setTimeout(() => {
        alert("You've cycled through all the colours! 🎉");
    }, 100); // small delay so you can see the last colour
    colorIndex = 0; // reset to start from beginning
    }
});*/

document.getElementById("resetColor").addEventListener("click", function() {
    document.body.style.backgroundColor = "white";
    colorIndex = 0; // also reset the cycle
});

// === CONSTANTS & VARIABLES === //

// Array of possible hobbies
let possibleHobbies = ["photography", "cooking", "hiking", "painting", "music", "gardening"];
// Arr of hobbies shown on the page
let myHobbies = ["coding", "football", "gym"];

// Object holding personal info (linked to "Show Info" button)
let myInfo = {
    name: "Arsalan",
    age: 24,
    learning: "JavaScript",
    goal: "Become a software engineer"
};

// === EVENT LISTENERS === //

// When "Change Background" button is clicked
// Attach an event listener to button with ID 'changeColour'
document.getElementById("changeColour").addEventListener("click", function() {
    // Define arr of possible background colours
    let colours = ["lightblue", "lightgreen", "lightpink", "lightyellow", "lavender"];
    // Math.random() returns a float from 0 (inclusive) to 1 (exclusive), e.g. 0.726
    // Multiply it by colors.length (e.g. 5) to scale to 0 <= x < 5
    // Math.floor() rounds it down to nearest whole number (0,1,2,3,4)
    let randomColour = colours[Math.floor(Math.random() * colours.length)];
    // Apply selected colour to background
    document.body.style.backgroundColor = randomColour;
});

// When "Add Random Hobby" button is clicked
document.getElementById("addHobby").addEventListener("click", function() {
    // Pick random hobby from possibleHobbies list
    let randomHobby = possibleHobbies[Math.floor(Math.random() * possibleHobbies.length)];
    // Add hobby to hobby list by pushing to end of arr
    myHobbies.push(randomHobby);
    // Update visible HTML list
    updateHobbiesList();
});

// When "Show My Info" button is clicked
document.getElementById("showInfo").addEventListener("click", function() {
    // grab target container (div)
    let infoDiv = document.getElementById("info-display");
    // Use template literals (backticks) to insert dynamic variables into HTML
    // Overwrite contents of info display with structured info
    infoDiv.innerHTML = `
        <h3>About Me:</h3>
        <p>Name: ${myInfo.name}</p>
        <p>Age: ${myInfo.age}</p>
        <p>Currently Learning: ${myInfo.learning}</p>
        <p>Goal: ${myInfo.goal}</p>
    `;
});

// === FUNCTION DECLARATION === //

// Function updates hobby list shown on page
function updateHobbiesList() {
    // Grab unordered list (ul) element that holds hobby list items
    let hobbyList = document.getElementById("hobby-ul");
    // Clear current contents of list to avoid duplicates
    // If we didn't do this, old items would remain and new ones would get added again
    hobbyList.innerHTML = "";
    
    // Loop through each hobby in arr and create a <li> element
    for (let hobby of myHobbies) {
        // Create new <li> element
        let listItem = document.createElement("li");
        // Set text of list item to hobby name
        listItem.textContent = hobby;
        // Append <li> to <ul> so it appears on screen
        hobbyList.appendChild(listItem);
    }
}

// === FORM HANDLER === //

// Attached event listener to form submission to prevent default refresh of page
// Trim input to remove extra spaces
// Add new hobby to myHobbies array and update displayed list
// If input is empty, do nothing
// Get the form element by its ID
const form = document.getElementById("hobbies-form");
form.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents page refresh
    // Get and trim input value and convert to lowercase, so it's consistent
    const input = form.elements["hobbies"].value.trim().toLowerCase();
    // Stop if the input is empty
    if (!input) return;
    // Loop through to check if the hobby already exists (case-insensitive) in array
    var isDuplicate = false;
    for (var i = 0; i < myHobbies.length; i++) {
        if (myHobbies[i].toLowerCase() === input) {
            // If hobby already exits, isDuplicate = true and break out of loop
            isDuplicate = true;
            break;
        }
    }
    // Assign message div by ID to show feedback to user
    var messageDiv = document.getElementById("submission-message");
    // If hobby is dupe, show error message
    if (isDuplicate) {
        messageDiv.textContent = '"' + input + '" is already in your hobby list.';
        messageDiv.style.color = "red";
    // If hobby is new, add to list and update display
    } else {
        myHobbies.push(input);
        updateHobbiesList();
        // Clear input
        form.reset();
        // Success message
        messageDiv.textContent = '"' + input + '" added to your hobby list!';
        messageDiv.style.color = "green";
    }
});

// === INITIALIZATION === //

// Populate initial hobbies on page load
// Even before user clicks anything, this ensures existing hobbies are visible
updateHobbiesList();