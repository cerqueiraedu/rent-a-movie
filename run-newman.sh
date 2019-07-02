#/bin/bash

docker pull postman/newman:4.5-alpine

docker run -v c:/development/rent-a-movie/postman/test-suite:/etc/newman -t postman/newman:4.5-alpine run "./collections/End to End Tests.postman_collection.json" --environment="./environments/Docker Env.postman_environment.json" --globals="./globals/ACELERA - Rent a Movie.postman_globals.json" --reporters junit --reporter-junit-export="newman-report.xml"