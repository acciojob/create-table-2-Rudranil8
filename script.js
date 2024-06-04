// function createTable() {
//     //Write your code here
  
// }
function createTable() {
  var rn = prompt("Input number of rows");
  var cn = prompt("Input number of columns");
  var table = document.getElementById("myTable");
  for (var r = 0; r < parseInt(rn, 10); r++) {
    var row = document.createElement("tr");
    for (var c = 0; c < parseInt(cn, 10); c++) {
      var cell = document.createElement("td");
      var cellText = document.createTextNode("Row-" + r + " Column-" + c);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
}