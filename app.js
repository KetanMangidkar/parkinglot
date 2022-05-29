
const express = require("express");
const connect = require('./src/Config/db');
const userController = require('./src/Controllers/User.Controller');
const floorController = require('./src/Controllers/Floor.Controller');
const spotController = require('./src/Controllers/Spot.Controller');
const ticketController = require('./src/Controllers/Ticket.Controller');

const app = express();

app.use(express.json())
app.use("/user", userController);
app.use("/floor", floorController);
app.use("/spot", spotController);
app.use("/ticket", ticketController)


const port = process.env.PORT || 9555;
const start = async () => {
  try {
    await connect()
    app.listen(port, () => {
      console.log(`Listening on Port ${port}`);
    });
  } catch (err) {
    console.log({ Error: err.message });
  }
};

start()