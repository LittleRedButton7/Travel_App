const queryParams = new URLSearchParams(window.location.search)
const id = queryParams.get('id')
console.log(id)
let bookNowElement = document.getElementById('book')

fetch(`http://localhost:3000/vacations/${id}`)
  .then(response => response.json())
  .then(vacation => {
    const div = document.createElement('div')

    div.className = "show-card"
    div.innerHTML = `
      <h1>${vacation.location_name}</h1>
      <h3>${vacation.climate}</h3>
      <img src="${vacation.accommodataion_image}"/>
      <ul>
        <form action="http://localhost:3001" onsubmit="myFunction()">
          Enter name to book: <input type="text" name="fname">
          <input type="submit" value="Submit">
        </form>
        <script>
        function myFunction() {
          alert("Booked! One of our agents will reach out to confirm details and payment options.");
        }
        </script>
        <h3><a href="http://localhost:3001">Go Home</a></h3>
      </ul>
      `

    
    // bookNowElement.addEventListener("click", bookNote);

    // function bookNote(){
    //   document.bookNowElement.innerHTML = "A rep will contact you";
    // }

    document.body.append(div)
  })




