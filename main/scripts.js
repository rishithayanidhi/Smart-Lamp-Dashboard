function toggleMenu() {
  var navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}

// Dashboard overview start

document.addEventListener("DOMContentLoaded", function () {
  const data = [
    {
      poleId: "P-085",
      accessPointId: "AP009",
      lightStatus: "on",
      deviceId: "C-085",
      chargingStatus: "active",
    },
    {
      poleId: "P-075",
      accessPointId: "AP008",
      lightStatus: "off",
      deviceId: "C-075",
      chargingStatus: "inactive",
    },
    {
      poleId: "P-016",
      accessPointId: "AP002",
      lightStatus: "on",
      deviceId: "C-016",
      chargingStatus: "active",
    },
    {
      poleId: "P-096",
      accessPointId: "AP010",
      lightStatus: "off",
      deviceId: "C-096",
      chargingStatus: "inactive",
    },
    // Add more rows as needed
  ];

  const rowsPerPage = 50;
  let currentPage = 1;

  const tbody = document.querySelector("tbody");
  const pageInfo = document.querySelector(".page-info");
  const prevPageBtn = document.querySelector(".prev-page");
  const nextPageBtn = document.querySelector(".next-page");
  const pageSizeSelect = document.querySelector(".page-size select");

  function renderTable() {
    tbody.innerHTML = "";
    const start = (currentPage - 1) * rowsPerPage;
    const end = 333;
    // Math.min(start + rowsPerPage, data.length)

    for (let i = start; i < end; i++) {
      const row = data[i];
      const tr = document.createElement("tr");

      tr.innerHTML = `
                <td>${row.poleId}</td>
                <td>${row.accessPointId}</td>
                <td class="light-status">
                    <span class="${row.lightStatus === "on" ? "on" : "off"}">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="${
                          row.lightStatus === "on" ? "green" : "red"
                        }" viewBox="0 0 16 16">
                            <path d="M2 6a6 6 0 1 1 12 0c0 2.905-2.342 5.278-4.5 5.637V14.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.863C4.342 11.278 2 8.905 2 6zm4.5 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z"/>
                        </svg>
                        ${
                          row.lightStatus.charAt(0).toUpperCase() +
                          row.lightStatus.slice(1)
                        }
                    </span>
                </td>
                <td>${row.deviceId}</td>
                <td class="charging-status">
                    <i class="fas fa-plug" style="color: ${
                      row.chargingStatus === "active" ? "green" : "red"
                    }"></i>
                </td>
                   <td><img src="https://img.icons8.com/material-outlined/24/marker.png" alt="Map Icon"></td>
            `;

      tbody.appendChild(tr);
    }

    // updatePagination();
  }

  function updatePagination() {
    const totalPages = Math.ceil(data.length / rowsPerPage);
    pageInfo.textContent = `${currentPage} of ${totalPages}`;

    prevPageBtn.disabled = currentPage === 1;
    nextPageBtn.disabled = currentPage === totalPages;
  }

  prevPageBtn.addEventListener("click", function () {
    if (currentPage > 1) {
      currentPage--;
      renderTable();
    }
  });

  nextPageBtn.addEventListener("click", function () {
    if (currentPage < Math.ceil(data.length / rowsPerPage)) {
      currentPage++;
      renderTable();
    }
  });

  pageSizeSelect.addEventListener("change", function () {
    rowsPerPage = parseInt(this.value);
    currentPage = 1;
    renderTable();
  });

  // Initial render
  renderTable();
});

// Dashboard overview end

// Inventory Summary Chart
var ctx = document.getElementById("inventorySummaryChart").getContext("2d");
var inventorySummaryChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Streetlights", "Gateways", "Sensors", "Others"],
    datasets: [
      {
        label: "Inventory Summary",
        data: [60, 20, 10, 10],
        backgroundColor: ["#FFCE56", "#36A2EB", "#FF6384", "#FF9F40"],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// Alarms Chart
var ctx = document.getElementById("alarmsChart").getContext("2d");
var alarmsChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Critical", "Major", "Minor"],
    datasets: [
      {
        label: "Alarms",
        data: [10, 28, 62],
        backgroundColor: ["#FF6384", "#FFCE56", "#36A2EB"],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

// // Installation Status Chart
// var ctx = document.getElementById("installationStatusChart").getContext("2d");
// var installationStatusChart = new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["Los Angeles", "Sacramento", "DhyanLab"],
//     datasets: [
//       {
//         label: "Installed",
//         data: [70, 20, 5],
//         backgroundColor: "#36A2EB",
//       },
//       {
//         label: "Commissioned",
//         data: [10, 5, 1],
//         backgroundColor: "#FFCE56",
//       },
//       {
//         label: "Decommissioned",
//         data: [10, 2, 1],
//         backgroundColor: "#FF6384",
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//   },
// });

// // CO2 Emissions Chart
// var ctx = document.getElementById("co2EmissionsChart").getContext("2d");
// var co2EmissionsChart = new Chart(ctx, {
//   type: "bar",
//   data: {
//     labels: ["Los Angeles", "Sacramento"],
//     datasets: [
//       {
//         label: "4M168",
//         data: [32.45, 28.13],
//         backgroundColor: "#FF6384",
//       },
//       {
//         label: "63418",
//         data: [30.23, 25.89],
//         backgroundColor: "#36A2EB",
//       },
//       {
//         label: "13246DC",
//         data: [29.34, 27.45],
//         backgroundColor: "#FFCE56",
//       },
//       {
//         label: "12669",
//         data: [28.12, 26.78],
//         backgroundColor: "#4BC0C0",
//       },
//       {
//         label: "63521",
//         data: [27.45, 25.23],
//         backgroundColor: "#FF9F40",
//       },
//     ],
//   },
//   options: {
//     responsive: true,
//   },
// });

// Initialize Google Map
function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5,
    center: { lat: 36.7783, lng: -119.4179 },
  });

  // Example data for map markers
  var locations = [
    { lat: 34.0522, lng: -118.2437 }, // Los Angeles
    { lat: 38.5816, lng: -121.4944 }, // Sacramento
    { lat: 37.7749, lng: -122.4194 }, // San Francisco
  ];

  locations.forEach(function (location) {
    new google.maps.Marker({
      position: location,
      map: map,
    });
  });
}

// document.addEventListener("DOMContentLoaded", function () {
//   document.getElementById("costSavingsProgress").style.height = "45%";
//   document.getElementById("energySavingsProgress").style.height = "75%";
//   document.getElementById("dimmingSavingsProgress").style.height = "40%";

//   // Get references to elements
//   var analyticsLink = document.getElementById("analytics-link");
//   var dashboardContent = document.getElementById("dashboard-content");

//   // Add click event listener to Analytics link
//   analyticsLink.addEventListener("click", function (event) {
//     event.preventDefault(); // Prevent default link behavior

//     // Toggle visibility of dashboard content
//     if (dashboardContent.style.display === "none") {
//       dashboardContent.style.display = "flex"; // Show dashboard content
//     } else {
//       dashboardContent.style.display = "none"; // Hide dashboard content
//     }
//   });
// });

// main content

document.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.getElementById("table-body");
  const pageSizeSelect = document.getElementById("page-size");
  const currentPageSpan = document.getElementById("current-page");
  const prevPageButton = document.getElementById("prev-page");
  const nextPageButton = document.getElementById("next-page");
  const recordCountSpan = document.getElementById("record-count");

  let currentPage = 1;
  let pageSize = parseInt(pageSizeSelect.value);
  let totalRecords = 80; // Example total records
  let totalPages = Math.ceil(totalRecords / pageSize);

  const tableData = [
    // Example data
    {
      poleId: "P-085",
      accessPointId: "AP009",
      poleName: "11351DC",
      lightStatus: "active",
      lightLevel: "35%",
      installationStatus: true,
      lightSerialNo: "2527911",
      deviceId: "C-085",
      batteryLevel: 37,
      chargingStatus: "active",
      scheduleName: "Winter_Calen",
    },
    // Add more data to fill the table
  ];

  function renderTable() {
    tableBody.innerHTML = "";

    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;

    const visibleData = tableData.slice(start, end);

    visibleData.forEach((item) => {
      const row = document.createElement("tr");

      row.innerHTML = `
                <td>${item.poleId}</td>
                <td>${item.accessPointId}</td>
                <td>${item.poleName}</td>
                <td><i class="fas fa-lightbulb"></i> ${item.lightStatus}</td>
                <td>${item.lightLevel}</td>
                <td>${
                  item.installationStatus
                    ? '<i class="fas fa-check-circle"></i>'
                    : ""
                }</td>
                <td>${item.lightSerialNo}</td>
                <td>${item.deviceId}</td>
                <td>${item.batteryLevel}</td>
                <td><i class="fas fa-plug"></i> ${item.chargingStatus}</td>
                <td>${item.scheduleName}</td>
            `;

      tableBody.appendChild(row);
    });

    recordCountSpan.textContent = `Record Count: ${
      start + 1
    }-${end} of ${totalRecords}`;
  }

  pageSizeSelect.addEventListener("change", (e) => {
    pageSize = parseInt(e.target.value);
    currentPage = 1;
    totalPages = Math.ceil(totalRecords / pageSize);
    renderTable();
  });

  prevPageButton.addEventListener("click", () => {
    if (currentPage > 1) {
      currentPage--;
      renderTable();
      currentPageSpan.textContent = currentPage;
    }
  });

  nextPageButton.addEventListener("click", () => {
    if (currentPage < totalPages) {
      currentPage++;
      renderTable();
      currentPageSpan.textContent = currentPage;
    }
  });

  renderTable(); // Initial render
});
