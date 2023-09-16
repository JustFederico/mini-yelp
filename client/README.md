# Mini-Yelp App

This repository provides the code for a Yelp-like Express server that features several routes that provide different functionalities like listing and creating restaurants, cities, comments, ratings, and tags.

## Routes

| Method | Path     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/restaurants` | Lists all restaurants
| `POST` | `/restaurants` | Add a restaurant
| `GET` | `/restaurants/:id` | Lists a specific restaurant by its ID
| `GET` | `/cities` | Lists all cities
| `POST` | `/cities` | Add a city
| `GET` | `/cities/:id` | Lists a specific city by its ID
| `GET` | `/ratings` | Lists all ratings
| `POST` | `/ratings` | Add a rating
| `GET` | `/comments` | Lists all comments
| `POST` | `/comments` | Add a comment
| `GET` | `/comments/:id` | Lists a specific comment by its ID
| `GET` | `/tags` | Lists all tags
| `POST` | `/tags` | Add a tag
| `GET` | `/tags/:id` | Lists a specific tag by its ID
| `GET` | `/restauranthastag` | List of all restaurant IDs & associated tag IDs
| `POST` | `/restauranthastag` | Add a tag ID to a restaurant ID

### Example outputs from these endpoints:

GET /restaurants
{
    "_id": "6502dc33d98423c21a35888e",
    "name": "Cucina della Nonna",
    "city_id": "6502db5fd98423c21a35887d",
    "__v": 0
}

GET /cities
{
    "_id": "6502db55d98423c21a358879",
    "name": "Tokyo",
    "__v": 0
}

GET /tags
{
    "_id": "6502e0f275b9a6e884be67e6",
    "name": "Greek",
    "__v": 0
}

GET /ratings
{
    "_id": "65056172c77ccf63e097ecbc",
    "rating": 4,
    "restaurant_id": "6502dc33d98423c21a35888e",
    "__v": 0,
    "date": "2023-09-16T09:23:57.261Z"
}

##### Sample Usage

You can use these endpoints in your code using the fetch API, Axios, or any other method of making HTTP requests.

Here is an example using the fetch API in JavaScript:

`fetch('https://mini-yelp.onrender.com/restaurants')`

###### Run Locally

Clone the project

```bash
  git clone https://github.com/kjthier/crossover9-23.git
```

Go to the project directory

```bash
  cd my-project
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
 Node app.js
```

