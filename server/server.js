require("dotenv").config();
const express = require("express");
// const massive = require("massive");

const app = express();
const {SERVER_PORT} = process.env

app.use(express.json());

app.use(express.static(`${__dirname}/../build`));

// massive(CONNECTION_STRING)
// 	.then(connection => {
// 		app.set('db', connection)
app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`));
// })
// .catch((err) => {console.log(err)})
