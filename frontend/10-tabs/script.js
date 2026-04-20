// Select all tabs button
const allTabs = document.querySelectorAll('.tab-btn');
allTabs.forEach(tab => {
    // When each tab is clicked
    tab.addEventListener('click', (event) => {
        const tabId = tab.id;
        // Remove 'active' from all contents
        document.querySelectorAll('.tab-content').forEach(content => {
            content.classList.remove('active');
        });
        // Add 'active' to the content matching the tab's id
        const contentToShow = document.querySelector(`.tab-content#${tabId}`);
        contentToShow.classList.add('active');
    });
});

// Show the first tab by default
const firstTab = document.querySelector('.tab-content')
firstTab.classList.add('active')
