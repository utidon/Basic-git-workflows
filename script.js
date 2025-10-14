// This function will run once the HTML document has fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Get the button element by its ID
    const button = document.getElementById('myButton');

    // Get the paragraph element where the message will be displayed
    const messageParagraph = document.getElementById('message');

    // Add a 'click' event listener to the button
    button.addEventListener('click', () => {
        // Change the text of the paragraph when the button is clicked
        messageParagraph.textContent = 'Button was clicked!';
        console.log('Button was clicked!'); // Also logs a message to the browser console
    });
});

