function getHeader() {
    var bodyClasses = document.querySelector("body").classList;
    headerContainer = document.querySelector("header");
    
    if(bodyClasses.contains("home")) {
        var currentPage = "home";
        homeinsert1 = `
        <h1>Scoots</h1>
        <h3>Your Island Exploration Hub</h3>
        <h3>In Cozumel, Mexico</h3>
        <p>We are an owner operated company with an intimate knowledge of the little known parts of Cozumel outside of
        the Cozumel that tourists know. Come to us first to experience the island like a local.
        </p>`;
        homeinsert2 = `
        <a href="reservation.html" class="reserve-btn">Reserve<br/>Now</a>   
        `;
        homeinsert3 = `
        <p>Everything you need to start your discovery of Cozumel. 
        With two convenient locations, Near Playa del Caren-Cozumel
        and by the Terminal Puerta Maya.
        </p>        
        
        `;
        weatherAlert = `<div id="weatherAlert"><span class="alert-message"></span><span class="weatherAlertX">x</span></div>`;
    } else if(bodyClasses.contains("rental")) {    
        var currentPage = "rentals";    
        homeinsert1 = `
        <h1>Scoots</h1>
        <h3>Your Island Exploration Hub</h3>
        <h3>In Cozumel, Mexico</h3>
        <p>Convenient location to rent your ride to explore the coasts of Cozumel.
        </p>`;
        homeinsert2 = `
        <a href="reservation.html" class="reserve-btn">Reserve<br/>Now</a></div>   
        `;
        homeinsert3 = `     
        `
        weatherAlert =``;

    } else if(bodyClasses.contains("reservation")) {   
        var currentPage = "reservations";
        homeinsert1 = "";
        homeinsert2 = `<h1 class="page-title">Reservations</h1>`;
        homeinsert3 = "";
        weatherAlert =``;        
    }else if(bodyClasses.contains("tour")) {   
        var currentPage = "tours";
        homeinsert1 = "";
        homeinsert2 = `<h1 class="page-title">Tours</h1>`;
        homeinsert3 = "";
        weatherAlert =``;        
    }else if(bodyClasses.contains("contact")) {   
        var currentPage = "contact";
        homeinsert1 = "";
        homeinsert2 = `<h1 class="page-title">Contact</h1>`;
        homeinsert3 = "";
        weatherAlert =``;        
    } else {
        homeinsert1 = "";
        homeinsert2 = "";
        homeinsert3 = "";
        weatherAlert =``;
    }



    headerHTML = `
    ${weatherAlert}
    <div id="mobile-menu">&#9776;</div>
    <nav id="nav">
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
        ${homeinsert3}
        </div> 
    </div>

    
    `;
    headerContainer.innerHTML = headerHTML;
    var hamburger = document.querySelector("#mobile-menu");
    hamburger.addEventListener("click",openMenu);    
    document.querySelector('#'+currentPage).classList.add("active");
}

function getFooter() {
    console.log("footer loaded");
    footerContainer = document.querySelector("footer");
    footerHTML = `
    <div class="map-section">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14950.964613693843!2d-86.974762!3d20.475822!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xec697a2a774f7a00!2sPuerta%20Maya%20Cruise%20Ship%20Terminal!5e0!3m2!1sen!2sus!4v1607995311607!5m2!1sen!2sus" width="300" height="225" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>    
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3737.017718078173!2d-86.9591135845817!3d20.505499910809593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f4e59db448aa88f%3A0xd38084370678d753!2sAv.%20Rafael%20E.%20Melgar%2055%2C%20Centro%2C%2077600%20San%20Miguel%20de%20Cozumel%2C%20Q.R.%2C%20Mexico!5e0!3m2!1sen!2sus!4v1607995384325!5m2!1sen!2sus" width="300" height="225" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
    <div class="social-media">
    <a href="https://facebook.com/" target="_blank"><img src="images/facebook.jpg" alt="facebook"></a>
    <a href="https://youtube.com/" target="_blank"><img src="images/youtube.jpg" alt="youtube"></a>
    <a href="https://twitter.com/" target="_blank"><img src="images/twitter.jpg" alt="twitter"></a>
    </div>
    
    <div class="locations">
        <a href="https://goo.gl/maps/NN3JbnRfGh9Jnu4C6" target="_blank" class="address">
        Puerta Maya, Carretera Costera Sur km 4.5, 
        77600 San Miguel de Cozumel, 
        Q.R., Mexico
        </a>

        <a href="https://goo.gl/maps/52H92wY1YgWTAHHH7" target="_blank" class="address">
        Av. Rafael E. Melgar 55, Centro, 
        77600 San Miguel de Cozumel, 
        Q.R., Mexico
        </a> 
    </div>
    <div id="copyright"></div>
    <div class="footer-links">
        <a href="attribution.html">Attributions</a> | 
        <a href="privacy.html">Privacy Policy</a>
    </div>
    `;
    footerContainer.innerHTML = footerHTML;
    const copyright = document.querySelector("#copyright");
    var modifiedDate = new Date(document.lastModified);
    var modified = modifiedDate.getMonth()+1+"/";
    modified += modifiedDate.getUTCDate()+"/";
    modified += modifiedDate.getUTCFullYear();
    copyright.textContent = "Copyright "+modified;  
    
    console.log(modified);
    console.log(modifiedDate.getUTCDate());
    console.log(modifiedDate.getMonth());
    console.log(modifiedDate.getUTCFullYear());

}

document.addEventListener("DOMContentLoaded", function(event) { 
getHeader();
getFooter();
});