// console.log("Hello World")
const vacationList = document.querySelector('.vacations')

fetch('http://localhost:3000/vacations')
    .then(handleResponse)
    .then(showVacations)

function handleResponse(response){
    return response.json()
}

function showVacations(vacations){
    vacations.forEach(createVacationElement)
}

function createVacationElement(vacation){
    const div = document.createElement('div')
    div.className = "flex-container"
    div.innerHTML = `
    <h2><a href="vacation.html?id=${vacation.id}">${vacation.location_name}</a></h2>
    <img src="${vacation.main_image}"/>
    `

    vacationList.append(div)

}
