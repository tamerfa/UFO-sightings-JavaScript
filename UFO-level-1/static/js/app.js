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

// step 2: Filter the data by date
// Getting a reference to 'Filter table' button with its id reference
var button = d3.select("#filter-btn");

// Getting a reference to the input field
var inputField = d3.select(".filters");

// Create event handlers 
button.on("click", runEnter);
inputField.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    tbody.html("");

    var tableData = data;

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    var filteredData = tableData.filter((sighting)=> (sighting.datetime === inputValue));

    if (inputValue.length == 0) {
        populateData(tableData);
    }
    else {
        populateData(filteredData);
    };
    
};




