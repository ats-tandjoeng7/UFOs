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

function handleClick() {
  // grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;
  // check if a date was entered and filter the data using that date
  if (date) {
    // apply filter to the table data to only keep the <tr> rows 
    // where the datetime value matches the filter value
    filteredData = filteredData.filter(tr => tr.datetime === date);
  };
  // rebuild the table using the filtered data
  // @NOTE: If no date was entered, then filteredData will 
  // just be the original tableData
  buildTable(filteredData);
}

// attach an event to listen for the form button when clicked
d3.selectAll("#filter-btn").on("click", handleClick);

// build the table when the page loads
buildTable(tableData);
