// ========================================
// Utility Functions
// ========================================

// Dynamic dates
function date_calculator(date){

    const pastDate = new Date(date);
    const now = new Date();
    const diffInMs = now - pastDate; // difference in milliseconds
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if(diffInDays > 365){
        const diffInYears = Math.floor(diffInDays/365)
        console.log(diffInYears)
        return diffInYears
    }else{
        return diffInDays
    }
}


// ========================================
// Guestbook Functions
// ========================================

async function displayGuestbookEntries() {

    const response = await fetch("/guests");
    const entries = await response.json();
    const container = document.getElementById('guestbookEntries');

    container.innerHTML = entries.map(entry => `
        <div class="guestbook-entry">
            <div class="name">${entry[1]}</div>
            <div class="message">${entry[2]}</div>
            <div class="timestamp">${entry[3]}</div>
        </div>
    `).join('');
}

// ========================================
// Visitor count
// ========================================


async function visitor_count(){
    const counter = document.getElementById('counter')
    const data = await fetch("/visitor-count") 
    const response = JSON.parse(data)
    console.log(await response)
    
}


// ========================================
// Visual Effects
// ========================================

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


// ========================================
// Initialization Values
// ========================================


// Dynamic date values
const days_since_wedding = date_calculator("2025-05-30")
const days_since_aurora_birth = date_calculator("2002-9-30")  
const days_since_justin_birth = date_calculator("2002-06-06")
const birthday_aurora = date_calculator("2026-06-06")
const birthday_justin = date_calculator("2026-09-30")

document.getElementById("days_since_wedding").textContent = days_since_wedding
document.getElementById("days_since_aurora_birth").textContent = days_since_aurora_birth
document.getElementById("days_since_justin_birth").textContent = days_since_justin_birth
document.getElementById("birthday_aurora").textContent = birthday_aurora * -1
document.getElementById("birthday_justin").textContent = birthday_justin * -1


// Last updated timestamp
document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString();


// ========================================
// Event Listeners
// ========================================

// Guestbook form submission
document.getElementById('guestbookForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value;
    const message = document.querySelector('textarea[name="message"]').value

    if (name && message) {
        const entry = {
            name: name,
            message: message
        };
          
        const response = await fetch("/guest",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(entry)
        })

        console.log(await response.text())
        
        displayGuestbookEntries();
        this.reset();        
    }
});


// Sparkle cursor effect
document.addEventListener('mousemove', function(e) {
    if (Math.random() > 0.9) {
        createSparkle(e.clientX, e.clientY);
    }
});


// ========================================
// Startup
// ========================================

// Load guestbook entries and guest count on page load
displayGuestbookEntries()
visitor_count()
