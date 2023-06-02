// select the container div
let container = document.querySelector('.container');

// create table from the Api
function showTable(data) {
  let tableBody = document.querySelector("#mytable tbody");
  tableBody.innerHTML = '';

  data.forEach((item) => {
    let row = document.createElement('tr');
    row.innerHTML = `

      <td>${item.name}</td>
      <td>${item.brewery_type}</td>
      <td>${item.address_1}</td>
      <td>${item.phone}</td>
      <td><a href="${item.website_url}" target="_blank">click link</a></td>
     `;
    tableBody.appendChild(row);
  });
}
//create  card from the Api
function getDetails(data) {
  let row = document.createElement('div');
  row.classList.add('row');

  for (let i = 0; i < data.length; i++) {
    let col = document.createElement('div');
    col.classList.add('col-md-4');
    let card = `
      <div class="card border-dark mb-3" style="max-width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">Brewery Details:</h5>
          <p class="card-text">Name: ${data[i].name}</p>
          <p class="card-text">Brewery Type: ${data[i].brewery_type}</p>
          <p class="card-text">Address: ${data[i].address_1}</p>
          <p class="card-text">Phone: ${data[i].phone}</p>
          <a href="${data[i].website_url}" class="btn btn-primary" target="_blank">Click URL</a>
        </div>
      </div>
    `;
    col.innerHTML = card;
    row.appendChild(col);
  }

  container.appendChild(row);
}
//use async function with fetching the Api and collect the data
async function fetchData() {
  try {
    let response = await fetch(`https://api.openbrewerydb.org/v1/breweries`);
    let data = await response.json();
    getDetails(data);
    showTable(data);
   
  } catch (error) {
    console.log("Error fetching the data:", error);
  }
}

fetchData();
