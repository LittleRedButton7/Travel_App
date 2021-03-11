const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')

fetch(`http://localhost:3000/vacations/${id}`)
  .then(handleResponse)
  .then(vacation => {
    const div = document.createElement('div')
    div.className = "show-card"
    div.innerHTML = `
      <h2><a href="vacation.html?=${vacation.id}">${vacation.location_name}</a></h2>
      <h2>${vacation.location_name}</h2>
      <h3>${vacation.climate}</h3>`

    document.body.append(div)
  })

  function handleResponse(response){
    return response.json()
}

