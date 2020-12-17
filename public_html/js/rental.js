const scooterTableContainer = document.querySelector("#scooter-table");
const atvTableContainer = document.querySelector("#atv-table");
const jeepTableContainer = document.querySelector("#jeep-table");


fetch("./data/rental.json")
  .then(response => response.json())
  .then(jsonObj => {
    const rentals = jsonObj;
    console.log(rentals);
    var scooterInnerHtml = "";
    var atvInnerHtml = "";
    var jeepInnerHtml = "";
    tableHeadHtml = `<table class="rental-table">
    <tr>
        <td>
            Name
        </td>
        <td>
            Max Riders
        </td>
        <td>
            Reserved Half-Day
        </td>   
        <td>
            Reserved Full-Day
        </td> 
        <td>
            Walk-in Half-Day
        </td> 
        <td>
            Walk-in Full-Day
        </td>                                                                                                                          
    </tr>
    `;
    rentals.scooters.forEach(scooter => {
        scooterInnerHtml += `
        <tr>
        <td>
            ${scooter.name}
        </td>
        <td>
            ${scooter.riders}
        </td>
        <td>
            $${scooter.rsvHalfDay}
        </td>   
        <td>
            $${scooter.rsvFullDay}
        </td> 
        <td>
            $${scooter.walkinHalfDay}
        </td> 
        <td>
            $${scooter.walkinHalfDay}
        </td>                                                                                                                          
    </tr>    
        `;
    });

    rentals.atvs.forEach(atv => {
        atvInnerHtml += `
        <tr>
        <td>
            ${atv.name}
        </td>
        <td>
            ${atv.riders}
        </td>
        <td>
            $${atv.rsvHalfDay}
        </td>   
        <td>
            $${atv.rsvFullDay}
        </td> 
        <td>
            $${atv.walkinHalfDay}
        </td> 
        <td>
            $${atv.walkinHalfDay}
        </td>                                                                                                                          
    </tr>    
        `;
    });    
    rentals.jeeps.forEach(jeep => {
        jeepInnerHtml += `
        <tr>
        <td>
            ${jeep.name}
        </td>
        <td>
            ${jeep.riders}
        </td>
        <td>
            $${jeep.rsvHalfDay}
        </td>   
        <td>
            $${jeep.rsvFullDay}
        </td> 
        <td>
            $${jeep.walkinHalfDay}
        </td> 
        <td>
            $${jeep.walkinHalfDay}
        </td>                                                                                                                          
    </tr>    
        `;
    });    
    
    tableFooterHtml = `
    </table> 
    `;   
    
    
    scooterTableContainer.innerHTML = tableHeadHtml+scooterInnerHtml+tableFooterHtml;
    atvTableContainer.innerHTML = tableHeadHtml+atvInnerHtml+tableFooterHtml;
    jeepTableContainer.innerHTML = tableHeadHtml+jeepInnerHtml+tableFooterHtml;
})

