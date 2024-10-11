document.addEventListener('DOMContentLoaded', function() {
    const generateButton = document.getElementById('generate-button');
    const flowerImage = document.getElementById('flower-image');
    const numberOverlay = document.getElementById('number-overlay');
    const logoOverlay = document.getElementById('logo-overlay');
    const controlsContainer = document.getElementById('controls-container');
    const flowerContainer = document.getElementById('flower-container');

    // Check if all elements are found
    if (!generateButton || !flowerImage || !numberOverlay || !logoOverlay || !controlsContainer || !flowerContainer) {
        console.error('One or more elements were not found. Please check the HTML for matching IDs.');
        return;
    }

    // Set initial generate count to 1
    let generateCount = 1;

    // Set initial state on page load
    controlsContainer.style.display = 'block';
    flowerContainer.style.display = 'none';

    // Generate button click handler
    generateButton.addEventListener('click', function() {
        const randomFlowerIndex = Math.floor(Math.random() * 10) + 1; // Assuming we have 10 different flower images

        // Update the flower image and number overlay with animation
        flowerImage.src = `flowers/flower${randomFlowerIndex}.webp`;
        flowerImage.style.display = 'block';
        flowerContainer.style.display = 'block';

        // Remove existing fade-out classes if present
        flowerImage.classList.remove('fade-out');
        flowerContainer.classList.remove('fade-out');
        numberOverlay.classList.remove('fade-out');
        logoOverlay.classList.remove('fade-out');

        // Add fade-in animation classes to trigger appearance
        flowerImage.classList.add('shuffle-and-fade-in');
        flowerContainer.classList.add('shuffle-and-fade-in');
        numberOverlay.classList.add('shuffle-and-fade-in');
        logoOverlay.classList.add('shuffle-and-fade-in');

        numberOverlay.textContent = `${generateCount}`;

        // Hide controls
        controlsContainer.style.display = 'none';

        // Increment the generate count
        generateCount++;
    });

    // Add click event listener to flower image to make everything disappear with fade-out animation
    flowerImage.addEventListener('click', function() {
        // Remove fade-in classes
        flowerImage.classList.remove('shuffle-and-fade-in');
        flowerContainer.classList.remove('shuffle-and-fade-in');
        numberOverlay.classList.remove('shuffle-and-fade-in');
        logoOverlay.classList.remove('shuffle-and-fade-in');

        // Force reflow to ensure fade-out classes are applied properly
        void flowerImage.offsetWidth;

        // Add fade-out classes to all elements
        flowerImage.classList.add('fade-out');
        flowerContainer.classList.add('fade-out');
        numberOverlay.classList.add('fade-out');
        logoOverlay.classList.add('fade-out');

        // Delay hiding elements until fade-out animation is complete (0.8 seconds)
        setTimeout(() => {
            // Hide elements after fade-out
            flowerContainer.style.display = 'none';
            flowerImage.src = ''; // Clear the image source to avoid showing an empty image
            controlsContainer.style.display = 'block';

            // Remove fade-out classes
            flowerImage.classList.remove('fade-out');
            flowerContainer.classList.remove('fade-out');
            numberOverlay.classList.remove('fade-out');
            logoOverlay.classList.remove('fade-out');
        }, 800); // Matches the CSS transition duration
    });
});
