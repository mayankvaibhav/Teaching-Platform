// Select the div by its class name
const redirectDiv = document.getElementsByClassName('home')[0];

// Add a click event listener to the div
redirectDiv.addEventListener('click', () => {
    // Redirect to the desired page
    window.location.href = '../Home/Home.html'; // Replace with your target URL
});
