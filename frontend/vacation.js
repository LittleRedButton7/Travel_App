const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')
console.log(id)

fetch(`http://localhost:3000/vacations/${id}`)
  .then(response => response.json())
  .then(vacation => {
    const div = document.createElement('div')

    div.className = "show-card"
    div.innerHTML = `
      <h1>${vacation.location_name}</h1>
      <h3>${vacation.climate}</h3>
      <img src="${vacation.accommodataion_image}"/>
      `

    document.body.append(div)
  })




