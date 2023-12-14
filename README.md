  <h1> project of IE class </h1>
<h2> an app to read csv data,search in data visually, and store the searched data as csv </h2>
  <h3> backend + server side rendering view </h3>
<h4> work flow: </h4>
<span style="color: red;">&bull;</span> Create your `development.env`

<span style="color: red;">&bull;</span> Start the database: `sudo docker-compose --env-file development.env up -d dev-db`

<span style="color: red;">&bull;</span> Put your CSV file in the `csvDir` directory

<span style="color: red;">&bull;</span> Save data from CSV to PostgreSQL database by running: `npm start csvtojson [filename]`

<span style="color: red;">&bull;</span> Run the app: `npm run start:dev`

<span style="color: red;">&bull;</span> Search for the tracks endpoint in your browser

<span style="color: red;">&bull;</span> Search in the data and store the result as CSV!
