to run appiction follow this two steps

1.npm install
2.npm start

if there was a need to change database or port on which server is running checkout .env file

connecting to database is via connect() function in ./db/index.js , closing database is done with close()

app file is in ./app/index and is imported into server file if the connection to database is successful

routes for our application is located in ./routes/index.js

controllers for respective routes are in ./controllers/index.js

models for our database is located in ./models/index.j
