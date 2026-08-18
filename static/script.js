// ========================================
// Utility Functions
// ========================================

// Calculates total days since a past date
function getDaysSince(dateString) {
    const pastDate = new Date(dateString);
    const now = new Date();
    // Use Math.round to account for daylight savings time shifts
    const diffInDays = Math.round((now - pastDate) / (1000 * 60 * 60 * 24));
    return diffInDays;
}

// Calculates exact age in years
function getAge(dateString) {
    const birthDate = new Date(dateString);
    const now = new Date();
    let age = now.getFullYear() - birthDate.getFullYear();
    const monthDiff = now.getMonth() - birthDate.getMonth();
    
    // If the birth month hasn't happened yet this year, or it's the birth month 
    // but the day hasn't happened yet, subtract 1 from the age
    if (monthDiff < 0 || (monthDiff === 0 && now.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Calculates days until the NEXT birthday, regardless of the current year
function getDaysUntilNextBirthday(dateString) {
    const birthDate = new Date(dateString);
    const now = new Date();
    
    // Create a date object for the birthday THIS year
    let nextBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
    
    // If that date has already passed this year, set it to NEXT year
    if (now > nextBirthday) {
        nextBirthday.setFullYear(now.getFullYear() + 1);
    }
    
    // Calculate difference in days
    const diffInDays = Math.ceil((nextBirthday - now) / (1000 * 60 * 60 * 24));
    return diffInDays;
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
    const counter = document.getElementById('counter');
    const response = await fetch("/visitor-count");
    const data = await response.json();
    const visitor_count = counter.textContent = data[0][0];
    console.log(visitor_count);
    update_visitor_count(visitor_count);
}

async function update_visitor_count(count){
    const response = await fetch("/visitor-count",{
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json', // Indicate the body format
      },
      body: JSON.stringify(count)
    });
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

const wedding_date = "2025-05-30";
const aurora_birth_date = "2002-09-21";
const justin_birth_date = "2002-06-06";

// Populate the DOM
document.getElementById("days_since_wedding").textContent = getDaysSince(wedding_date);
document.getElementById("days_since_aurora_birth").textContent = getAge(aurora_birth_date);
document.getElementById("days_since_justin_birth").textContent = getAge(justin_birth_date);
document.getElementById("birthday_aurora").textContent = getDaysUntilNextBirthday(aurora_birth_date);
document.getElementById("birthday_justin").textContent = getDaysUntilNextBirthday(justin_birth_date);

// Last updated timestamp
document.getElementById('lastUpdated').textContent = new Date().toLocaleDateString();

// ========================================
// Event Listeners
// ========================================

// Guestbook form submission
document.getElementById('guestbookForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = document.querySelector('input[name="name"]').value;
    const message = document.querySelector('textarea[name="message"]').value;

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
        });
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
displayGuestbookEntries();
visitor_count();