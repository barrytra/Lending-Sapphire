const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

// Import & Initialize
import { initiateUserControlledWalletsClient } from '@circle-fin/user-controlled-wallets';
const client = initiateUserControlledWalletsClient({
    apiKey: '<API_KEY>',
});

dotenv.config();

const app = express();

app.use(express.json()); // to accept json data

app.get("/", (req, res) => {
  res.send("API Running!");
});


// Error Handling middlewares
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 4000;

const server = app.listen(
    PORT,
    console.log(`Server running on PORT ${PORT}...`)
);

