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

    div.innerHTML = `
    <h1>${vacation.location_name}</h1>
    <img src="${vacation.main_image}"/>
    `

    vacationList.append(div)
}