// ===================================
// LAB 4: DARK MODE 
// ===================================

// INSTRUCTIONS:
// 1. Select the necessary DOM elements
// 2. Add an event listener to the toggle button
// 3. Implement the toggleDarkMode function
// 4. Update the icon when switching modes
// 5. BONUS: Save the preference to localStorage

// ===================================
// STEP 1: Select DOM Elements
// ===================================
// TODO: Select the theme toggle button
const themeToggleBtn = document.getElementById('themeToggle');

// TODO: Select the theme icon element
const themeIcon = document.getElementById('themeIcon');

// TODO: Get the <body> element
const body = document.body;


// ===================================
// STEP 2: Add Event Listener
// ===================================
// TODO: Add a 'click' event listener to the toggle button
// The event listener should call the toggleDarkMode function
themeToggleBtn.addEventListener('click', toggleDarkMode);




// ===================================
// STEP 3: Toggle Dark Mode Function
// ===================================
function toggleDarkMode() {
    // TODO 1: Toggle the 'dark-mode' class on the body element
    body.classList.toggle('dark-mode');
    
    // TODO 2: Update the icon based on the current mode
    const isDarkMode = body.classList.contains('dark-mode');
    updateIcon(isDarkMode);
    
    // Optional: Save the current mode to localStorage
    // This is optional - try it after completing the basic functionality!
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}


// ===================================
// STEP 4: Update Icon Function
// ===================================
function updateIcon(isDarkMode) {
    // TODO: Change the icon based on the mode
    // If dark mode: show sun icon ☀️
    // If light mode: show moon icon 🌙
    if (isDarkMode) {
        themeIcon.textContent = '☀️';
    } else {
        themeIcon.textContent = '🌙';
    }
}


// ===================================
// Optional: Load Saved Preference
// ===================================
// This function runs when the page loads
// It checks if there's a saved preference in localStorage
function loadSavedTheme() {
    // TODO (OPTIONAL): 
    // 1. Get the saved theme from localStorage
    // 2. If it exists and is 'dark', add the dark-mode class to body
    // 3. Update the icon accordingly
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        body.classList.add('dark-mode');
        updateIcon(true);
    } else {
        updateIcon(false);
    }
}

// Call the function when the page loads (uncomment when you implement it)
loadSavedTheme();


// ===================================
// HELPFUL REMINDERS:
// ===================================
// DOM Selection:
//   - document.getElementById('id')
//   - document.querySelector('#id')
//   - document.body

// Class Manipulation:
//   - element.classList.add('class-name')
//   - element.classList.remove('class-name')
//   - element.classList.toggle('class-name')
//   - element.classList.contains('class-name')

// Event Listeners:
//   - element.addEventListener('event', function)
//   - Common events: 'click', 'mouseover', 'keydown'

// Changing Content:
//   - element.textContent = 'new text'
//   - element.innerHTML = '<span>html</span>'

// localStorage (BONUS):
//   - localStorage.setItem('key', 'value')
//   - localStorage.getItem('key')
//   - localStorage.removeItem('key')
// ===================================