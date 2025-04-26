const apiUrl = "https://api.rootnet.in/covid19-in/stats/latest";
const dataSheet = document.querySelectorAll(".dataSheet");



async function apiCall() {
    const response = await fetch(apiUrl);
    let data = await response.json()
    const tableBody = document.querySelector("#dataTable tbody");

    data.data.regional.forEach((regionalData, srNo) => {
        console.log(regionalData);
        let row = `
      <tr>
        <td>${srNo + 1}</td>
        <td>${regionalData.loc}</td>
        <td>${regionalData.confirmedCasesIndian}</td>
        <td>${regionalData.confirmedCasesForeign}</td>
        <td>${regionalData.discharged}</td>
        <td>${regionalData.deaths}</td>
        <td>${regionalData.totalConfirmed}</td>
      </tr>
    `;
        tableBody.innerHTML += row;
    });

}

apiCall();