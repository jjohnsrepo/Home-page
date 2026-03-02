// Early Internet JavaScript - Local Only Website

// Visitor Counter
let visitorCount = localStorage.getItem('visitorCount') || 42;
document.getElementById('counter').textContent = String(visitorCount).padStart(5, '0');

// Increment counter on page load
visitorCount++;
localStorage.setItem('visitorCount', visitorCount);

// Guestbook functionality
document.getElementById('guestbookForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value;
    const message = document.querySelector('textarea[name="message"]').value;
    
    if (name && message) {
        const entries = JSON.parse(localStorage.getItem('guestbookEntries') || '[]');
        const entry = {
            name: name,
            message: message,
            timestamp: new Date().toLocaleString()
        };
        
        entries.unshift(entry);
        localStorage.setItem('guestbookEntries', JSON.stringify(entries));
        
        displayGuestbookEntries();
        this.reset();
        
        alert('Thanks for signing my guestbook!');
    }
});

function displayGuestbookEntries() {
    const entries = JSON.parse(localStorage.getItem('guestbookEntries') || '[]');
    const container = document.getElementById('guestbookEntries');
    
    container.innerHTML = entries.slice(0, 5).map(entry => `
        <div class="guestbook-entry">
            <div class="name">${entry.name}</div>
            <div class="message">${entry.message}</div>
            <div class="timestamp">${entry.timestamp}</div>
        </div>
    `).join('');
}

// Load guestbook entries on page load
displayGuestbookEntries();

// Last updated timestamp
document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString();

// Sparkle cursor effect
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.9) {
        createSparkle(e.clientX, e.clientY);
    }
});

function createSparkle(x, y) {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.innerHTML = '✨';
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    sparkle.style.color = ['#FF00FF', '#00FFFF', '#FFFF00', '#00FF00'][Math.floor(Math.random() * 4)];
    
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

// Random alert messages for webring
const webringMessages = [
    "Welcome to the coolest site on the web!",
    "You're visitor #" + Math.floor(Math.random() * 10000),
    "This site is under construction!",
    "Best viewed in Netscape Navigator!",
    "Sign my guestbook!",
    "Check out my MIDI collection!",
    "Email me at webmaster@localhost!"
];

// Random popup on click
document.addEventListener('click', function() {
    if (Math.random() > 0.95) {
        alert(webringMessages[Math.floor(Math.random() * webringMessages.length)]);
    }
});

// Console message
console.log('%c🌐 WELCOME TO MY HOMEPAGE! 🌐', 'color: #FF00FF; font-size: 20px; font-weight: bold;');
console.log('%cThis is the coolest local-only website!', 'color: #00FFFF; font-size: 16px;');
