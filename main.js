// Main Page Functions
function exploreMainPage() {
    // Add code for exploring the main page (e.g., walking animation, tooltips)
    alert("Explore the Main Page!");
}

function explorePhotographyPortfolio() {
    // Add code for exploring the photography portfolio (e.g., walking into the darkroom)
    alert("Explore the Photography Portfolio!");
}

// UX Portfolio Functions
function openWork() {
    document.getElementById('work').style.display = "block";
    document.getElementById('work').style.animation = "fadeIn 1s";
}

function openContact() {
    document.getElementById('contact').style.display = "block";
    document.getElementById('contact').style.animation = "fadeIn 1s";
}

function openHome() {
    // Add code for opening the home section (e.g., zooming into the computer screen)
    alert("Explore the Home Section!");
}

function openAbout() {
    // Add code for opening the about section (e.g., tooltip with information)
    alert("Explore the About Section!");
}

function openCaseStudies() {
    // Add code for opening the case studies section (e.g., clicking on case study icons)
    alert("Explore the Case Studies!");
}

function powerOff() {
    window.location.href = 'index.html';
}

// Photography Portfolio Functions
function enterDarkroom() {
    // Add code for entering the darkroom (e.g., walking animation, opening the darkroom door)
    alert("Enter the Darkroom!");
}

function switchLights() {
    document.getElementById('litCorridor').style.backgroundImage = "url('images/dark_corridor.jpg')";
    document.getElementById('bulletinBoard').style.display = "none";
    document.getElementById('doorway').style.display = "none";
    document.getElementById('darkroom').style.display = "flex";
}
