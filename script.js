document.addEventListener('DOMContentLoaded', function() {
    const changeButton = document.querySelector('#changeTextButton');
    const resetButton = document.querySelector('#resetTextButton');
    const paragraph = document.querySelector('#displayText');

    function changeText() {
        paragraph.textContent = "Hello, World!";
        console.log("Changing text to 'Hello, World!'");  
    }

    function resetText() {
        paragraph.textContent = "Initial text";
        console.log("Resetting text to 'Initial text'"); 
    }

    changeButton.addEventListener('click', changeText);
    resetButton.addEventListener('click', resetText);

    console.log('Change Button:', changeButton);
    console.log('Reset Button:', resetButton);
    console.log('Paragraph:', paragraph);
});
