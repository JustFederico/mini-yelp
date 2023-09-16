
# Mini-Yelp App

This repository provides the code for a Yelp-like Express server.

The server features several routes that provide different functionalities like listing restaurants/cities/tags, listing a specific restaurant/city/tag by ID and adding a new each of them.

## Routes

#### Examples of following routes:

| Method | Path     | Description                |
| :-------- | :------- | :------------------------- |
| `GET` | `/restaurants/` | Lists all restaurants
| `GET` | `/restaurants/:id` | Lists a specific restaurant by its ID
| `GET` | `/cities/` | Lists all cities



 ## Sample Outputs

 ### Here are some example outputs from these endpoints:

#### 1. GET /restaurants/

[
  {
    "_id": "64bbaa497496a5d98178fc9b",
    "name": "Veggie Heaven",
    "description": "Escape the hustle of the city and find solace in this cozy haven offering delectable vegetarian comfort food.",
    "openingTime": "11:00 - 22:00",
    "address": {
      "street": "89 Serenity Lane",
      "postcode": "3000",
      "city": "Melbourne",
      "_id": "64bbaa497496a5d98178fc9c"
    },
    "coordinates": [
      -37.8136,
      144.9631
    ],
    "comments": [
      {
        "user": "Ella",
        "comment": "Great options for vegans!",
        "_id": "64bbaa497496a5d98178fc9d"
      }
    ],
    "tags": [
      "Vegetarian",
      "Healthy"
    ],
    "image": ""
  },
   //more and more
]
## Run Locally

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
 Node app
```

