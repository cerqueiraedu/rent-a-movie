# Rent a Movie

## Getting started

Install [Node.js](https://nodejs.org/en/)

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

[/customers](localhost:3000/customers)
[/movies](localhost:3000/movies)
[/rentals](localhost:3000/rentals)
[/users](localhost:3000/users)

You can use `_expand` and `_embed` to include children/parent [relationships](https://github.com/typicode/json-server#relationships):

```
GET     /customers?_embed=rentals
GET     /rentals?_expand=movie
GET     /rentals?_expand=movie&_expand=customer
GET     /rentals?customerId=1&_expand=movie
```

## Postman

You can find test examples on [official Postman website](https://learning.getpostman.com/docs/postman/scripts/test_examples/)

`collections` folder contains all defined requests for a test run.

`environments` folder contains all environment variables.

`globals` folder contains all global variables that might be shared across environments.

`test-runs` folder contains all the collections' test run results.
