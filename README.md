  <h1> project of IE class </h1>
<h2> an app to read csv data,search in data visually, and store the searched data as csv </h2>
  <h3> backend + server side rendering view </h3>
<h4> work flow: </h4>
 &#x2022 create your development.env
 &#x2022 start database: sudo docker-compose --env-file development.env up -d dev-db
 &#x2022 put your csv file in csvDir dir
 &#x2022 save data from csv to postgres db by: npm start csvtojson [filename]
 &#x2022 run the app: npm run start:dev
 &#x2022 search for the tracks endpoint in your browser
 &#x2022 search in data and store the result as csv!