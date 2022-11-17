// UCB-DATA-ANALYTICS-2022, Parto T.

// import data from data.js
const tableData = data;

// reference the html table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
  // clear any existing table data
  tbody.html("");
  // loop through each object in the data by using arr functions
  data.forEach((dataRow) => {
    // append a row to the table body
    let tr = tbody.append("tr");
    // loop through each field in the dataRow
    Object.values(dataRow).forEach((val) => {
      // append each value to the table cell
      let td = tr.append("td");
      td.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = {};

// 3. Use this function to update the filters. 
function updateFilters() {
  // 4a. Save the element that was changed as a variable.
  let htmlDOM = d3.select(this);
  
  // 4b. Save the value that was changed as a variable.
  let filterVal = htmlDOM.property("value").toLowerCase();

  // 4c. Save the id of the filter that was changed as a variable.
  let filterId = htmlDOM.attr("id");
  
  // 5. If a filter value was entered then add that filterId and value
  // to the filters list. Otherwise, clear that filter from the filters object.
  filters[filterId] = filterVal;
  if (!filterVal) {
    delete filters[filterId];
  }
  console.log(Object.keys(filters).length)
//  console.log(filterId, filterVal, filters);

  // 6. Call function to apply all filters and rebuild the table
  filterTable();
}

// 7. Use this function to filter the table when data is entered.
function filterTable() {
  // 8. Set the filtered data to the tableData.
  let filteredData = tableData;
  
  // 9. Loop through all of the filters and keep any data that
  // matches the filter values
  Object.entries(filters).forEach(([id, val]) => {
    filteredData = filteredData.filter(tr => tr[id] === val);
  });

  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
}

// 2. Attach an event to listen for changes to each filter
d3.selectAll("input").on("change", updateFilters);

// Build the table when the page loads
buildTable(tableData);

// Below function is not used currently
function arrayToObj(a1, a2) {
  if (a1.length != a2.length || a1.length == 0 || a2.length == 0) {
    return null;
  }
  return Object.assign(...a1.map( (key, i) => ({[key]: a2[i]}) ));
}
