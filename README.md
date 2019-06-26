# Rent a Movie

## Getting started

Install [Node.js](https://nodejs.org/en/download/)

Install [Postman](https://www.getpostman.com/downloads/)

Clone the the repository locally:

```bash
$ git clone https://github.com/cerqueiraedu/rent-a-movie.git
```

Download package dependencies:

```bash
$ npm install
```

Start the application:

```bash
$ node rent-a-movie-server.js
```

or simply:

```bash
$ npm start
```

## Resources

### Authentication

[POST /register](http://localhost:3000/register)

[POST /login](http://localhost:3000/login)

### Protected Resources

[GET /customers](http://localhost:3000/customers)

[GET /rentals](http://localhost:3000/rentals)

[GET /users](http://localhost:3000/users)

### Common Resources

[GET /movies](http://localhost:3000/movies)

You can use `_expand` and `_embed` to include children/parent [relationships](https://github.com/typicode/json-server#relationships):

```
GET     /customers?_embed=rentals
GET     /rentals?_expand=movie
GET     /rentals?_expand=movie&_expand=customer
GET     /rentals?customerId=1&_expand=movie
```

## Postman

You can find test examples on [official Postman website](https://learning.getpostman.com/docs/postman/scripts/test_examples/).

### Importing Collections

Access Postman Home screen: File > Import and select the `test-suites` folder to import the collections and variables. 

The `test-suites` folder contains:

`collections` folder contains all defined requests for a test run.

`environments` folder contains all environment variables.

`globals` folder contains all global variables that might be shared across environments.

### Importing Test Runs

Access Postman Runner screen and click on `Import Test Run`:

Import `test-runs` folder, that contains all the collections' test run results (i.e. our evidences).