# Fly Away!
Welcome to Fly Away!


## Table of Contents
* [General Info](#General-Info)
* [Intro Video](#Intro-Video)
* [Technologies](#Technologies)
* [Setup](#Setup)
* [Code Examples](#Code-Examples)
* [Features](#Features)
* [Status](#Status)
* [Contact](#Contact)

## General Info
We created our own API using a Rails backend and deployed it on Rails. We used JavaScript and HTML to render the data on the pages. 

## Intro Video
[Fly Away! on YouTube]()

## Technologies
* Ruby on Rails - 6.0.3, 6.0.3.5
* SQLite3 - version 1.4
* JavaScript
* HTML
* CSS


## Setup
* Fork and clone this repo into your local branch.
* From the backend, run bundle:install
* Then run rails db:migrate && db:seed
* Add an additional terminal and cd into the frontend in that one
* From the backend terminal, run rails s and from the frontend run lite-server which will kick off the app in the localhost:3001

## Code Examples
```
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

    document.body.append(div)
  })
```

## Features
* Click on a destination to see a show page.
* Future Features 
    *Book Now - This will tie into the user's profile
    *Parallaxing background (clouds)

## Status
Project is functional but has room to build out more features and data. Hopefully one day this will be a fully deployed travel app!

## Contact
Feel free to reach out!
[Louis Leffler](https://www.linkedin.com/in/louisleffler/) and [Marissa Nolan](https://www.linkedin.com/in/marissanolan1/) 

### Thanks for visiting!
