function getHeader() {
    var bodyClasses = document.querySelector("body").classList;
    headerContainer = document.querySelector("header");
    
    if(bodyClasses.contains("home")) {
        homeinsert1 = `
        <h1>Scoots</h1>
        <h3>Your Island Exploration Hub</h3>
        <h3>In Cozumel, Mexico</h3>
        <p>Everything you need to start your discovery of Cozumel. 
        With two convenient locations, Near Playa del Caren-Cozumel
        and by the Terminal Puerta Maya.
        </p>`;
        homeinsert2 = `
        <a href="reservation.html" class="reserve-btn">Reserve<br/>Now</a></div>    
        `;
    } else {
        homeinsert1 = "";
        homeinsert2 = "";
    }



    headerHTML = `
    <div id="mobile-menu">&#9776;</div>
    <nav>
        <ul>
            <li id="home"><a href="index.html">Home</a></li>
            <li id="rentals"><a href="rental.html">Rentals</a></li>
            <li id="tours"><a href="tour.html">Tours</a></li>
            <li id="reservations"><a href="reservation.html">Reservations</a></li>
            <li id="contact"><a href="contact.html">Contact</a></li>
        </ul>
    </nav>
    <div class="blue-banner">
        <div class="blue-angle">
            <div class="angle-grid">
                <div class="introText">
                    ${homeinsert1}
                </div>            
                <div class="flex slogan">
                    <h2>Scoot<br/><span>Around</span><br/><span>Cozumel</span></h2>
                    <img src="images/logo.png" alt="~Scoots Logo" id="logo">
                </div>
            </div>
        ${homeinsert2}
    </div>

    
    `;
    headerContainer.innerHTML = headerHTML;
    var hamburger = document.querySelector("#mobile-menu");
    hamburger.addEventListener("click",openMenu);    
}

function getFooter() {
    console.log("footer loaded");
    footerContainer = document.querySelector("footer");
    footerHTML = "Footer";
    footerContainer.append(footerHTML);
}

document.addEventListener("DOMContentLoaded", function(event) { 
getHeader();
getFooter();
});