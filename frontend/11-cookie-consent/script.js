const closeBtn = document.querySelector('.close-btn button');
const cookieContainer = document.querySelector('.cookie-container');
closeBtn.addEventListener('click', () => {
    cookieContainer.style.display = 'none';
    console.log("Cookie declined")
});

const acceptBtn = document.querySelector('.accept-btn button');
acceptBtn.addEventListener('click', () => {
    cookieContainer.style.display = 'none';
    localStorage.setItem('cookieConsent', 'accepted')
    console.log("Cookie accepted")
})

// If 'cookieConsent' is set to 'accepted', it hides the cookie consent banner and logs this event.
// if (localStorage.getItem('cookieConsent') === 'accepted') {
//     cookieContainer.style.display = 'none';
//     console.log("Cookie already accepted");
// }
