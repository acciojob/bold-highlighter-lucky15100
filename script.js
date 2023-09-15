// Function to highlight bold words in a specific color
function highlight() {
    // Get all <strong> elements in the second paragraph
    const boldElements = document.querySelectorAll('p:nth-child(2) strong');

    // Loop through each <strong> element and change its color
    for (const boldElement of boldElements) {
        boldElement.style.color = 'green'; // Change the color to your desired highlight color
    }
}

// Function to return bold words to their normal color
function return_normal() {
    // Get all <strong> elements in the second paragraph
    const boldElements = document.querySelectorAll('p:nth-child(2) strong');

    // Loop through each <strong> element and change its color back to its original color
    for (const boldElement of boldElements) {
        boldElement.style.color = 'black'; // Change the color back to the normal color
    }
}

// Attach the hover event handlers to the link
const link = document.querySelector('a');

// Add the 'mouseenter' event handler to highlight on hover
link.addEventListener('mouseenter', highlight);

// Add the 'mouseleave' event handler to return to normal color on hover out
link.addEventListener('mouseleave', return_normal);
