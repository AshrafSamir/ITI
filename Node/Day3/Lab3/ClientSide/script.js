async function displayData() {
  console.log("here");
  let apiResponse = await fetch(`../data.json`);
  data = await apiResponse.json();
  console.log(data);
  let table = document.getElementById("table");
  let tableBody = document.createElement("tbody");
  table.appendChild(tableBody);
  for (let i = 0; i < data.length; i++) {
    let row = document.createElement("tr");
    tableBody.appendChild(row);
    for (let key in data[i]) {
      let cell = document.createElement("td");
      let cellText = document.createTextNode(data[i][key]);
      cell.appendChild(cellText);
      row.appendChild(cell);
    }
  }
}

document.getElementById("display").addEventListener("click", () => {
  displayData();
});
