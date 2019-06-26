# Rent a Movie

## Getting started

* Install [Node.js](https://nodejs.org/en/download/)

* Install [Postman](https://www.getpostman.com/downloads/)

* Clone the the repository locally:

```bash
$ git clone https://github.com/cerqueiraedu/rent-a-movie.git
```

* Download package dependencies:

```bash
$ npm install
```

* Start the application:

```bash
$ node rent-a-movie-server.js
```

or simply:

```bash
$ npm start
```

## Getting started with Postman

You can find test examples on [official Postman website](https://learning.getpostman.com/docs/postman/scripts/test_examples/).

### Importing Collections

* Access Postman Home screen: File > Import:
  - Select the `test-suites` folder to import the collections and variables. 

The `test-suites` folder contains:

* `collections` folder contains all defined requests for a test run.

* `environments` folder contains all environment variables.

* `globals` folder contains all global variables that might be shared across environments.

### Importing Test Runs

* Access Postman Runner screen and click on `Import Test Run`:
  - Import `test-runs` folder, that contains all the collections' test run results (i.e. evidences).

## Resources

### Allowed Verbs

You can make GET, POST, PUT, PATCH or DELETE requests. Changes will be automatically and safely saved to `db.json`.

### Authentication

[POST /register](http://localhost:3000/register) - registers a new `user` and returns a new token

```json
{
  "email": "user@no-mail.com"
  "password": "YourPassword"
}
```


[POST /login](http://localhost:3000/login) - validates a `user` and returns a new token, if credentials are valid

```json
{
  "email": "user@no-mail.com"
  "password": "YourPassword"
}
```


### Protected Resources

You will need to provide a valid token and supply it using the `Bearer Token` authorization header to have access to protected resources.

[GET /customers](http://localhost:3000/customers) - returns all customers that can rent a movie

```json
{
  "id": 1,
  "name": "A Customer",
  "email": "customer@no-mail.com"
}
```

[GET /rentals](http://localhost:3000/rentals) - returns all rentals

```json
{
  "id": 1,
  "customerId": 1,
  "movieId": 1,
  "rating": 5
}
```

[GET /users](http://localhost:3000/users) - returns every user allowed to access the app (authentication purposes)

```json
{
  "id": 1
  "email": "user@no-mail.com"
  "password": "YourPassword"
}
```


### Common Resources

[GET /movies](http://localhost:3000/movies) - returns all movies currently available

```json
{
  "id": 1,
  "title": "Inception",
  "genre": "Sci-Fi"
}
```

You can also use `_expand` and `_embed` to include children/parent [relationships](https://github.com/typicode/json-server#relationships):

```
GET     /customers?_embed=rentals
GET     /rentals?_expand=movie
GET     /rentals?_expand=movie&_expand=customer
GET     /rentals?customerId=1&_expand=movie
```
