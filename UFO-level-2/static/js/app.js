// from data.js
var tableData = data;

// YOUR CODE HERE!
// step 1: Create the function needed to create the table and populate it with data
var tbody = d3.select("tbody");

function populateData(tableData) {
    tableData.forEach(ufoSighting => {
        var row = tbody.append("tr");
        Object.values(ufoSighting).forEach(value => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
};

populateData(tableData);

// step 2: Filter the data by date, city, state, country or shape
// Getting a reference to 'Filter table' button with its id reference
var button = d3.select("#filter-btn");

// Create event handlers 
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.html("");

    var tableData = data;

    // Select the input elements and get the value property of each input element
    var searchData={};

    var inputDate = d3.select("#datetime").property("value");
        if (inputDate.length != 0){searchData.datetime = inputDate};
       
    var inputCity = d3.select("#city").property("value").toLowerCase();
        if (inputCity.length != 0){searchData.city = inputCity};
        
    var inputState = d3.select("#state").property("value").toLowerCase();
        if (inputState.length != 0){searchData.state = inputState};
        
    var inputCountry = d3.select("#country").property("value").toLowerCase();
        if (inputCountry.length != 0){searchData.country = inputCountry};
        
    var inputShape = d3.select("#shape").property("value").toLowerCase();
        if (inputShape.length != 0){searchData.shape = inputShape};


    // Filter all data based on searchData
    var filteredData = tableData.filter(function(sighting) {
        for (var key in searchData) {
          if (sighting[key] != searchData[key])
            return false;
        }
        return true;
      });
     
    
    
    if (filteredData.length != 0) {
        populateData(filteredData);
    }
    else {
        tbody.html("");
    };
    
};




