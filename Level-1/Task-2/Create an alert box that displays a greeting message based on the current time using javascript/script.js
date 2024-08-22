// Get the current hour
const currentHour = new Date().getHours();

// Determine the greeting message based on the current time
let greeting;

if (currentHour < 12) {
    greeting = "Good Morning!";
} else if (currentHour < 18) {
    greeting = "Good Afternoon!";
} else {
    greeting = "Good Evening!";
}

// Display an alert with the greeting message
alert(greeting);
