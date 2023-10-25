//basic imports
import https from "https";
import express from "express";
import fs from "fs";
import { dhl } from "./routes/dhl.js";
import { getLoggerInstance } from "./logger.js";

const app = express();
const logger = getLoggerInstance();

//import certificates for https validation
const httpsOptions = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
}

//creating a server with the certifications
const server = https.createServer(httpsOptions, app);

//defining host and port
const localhost = '127.0.0.1';
const port = 8080;
const message = `The server is running on https://${localhost}:${port}/`;

// listen to requests using server
server.listen(port, () => {
    logger.info(message);
});

//simple get for hompage
app.get("/", async (req, res) => {
    res.send("Welcome to DHL Tracking");
});

app.use(express.json());
app.use("/dhl", dhl);

// Order Number
// {
//     "orderNumber": "1965295301"
// }
