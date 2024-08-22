// JavaScript to change the button color when clicked
document.getElementById('colorButton').addEventListener('click', function() {
    // List of colors to cycle through
    const colors = [ '#4caf50','#1caf80'];
    
    // Get the current background color of the button
    const currentColor = this.style.backgroundColor;
    
    // Find the next color in the array
     const nextColor = colors[(colors.indexOf(currentColor) + 1) % colors.length];
    
    // Set the button's background color to the next color
    this.style.backgroundColor = nextColor;
});
