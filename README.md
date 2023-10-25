# DHL-Tracker

DHL-Tracker is a straightforward API that enables tracking of DHL shipments using the DHL API.

## Getting Started

To get started with the DHL-Tracker API, follow these steps:

Follow the "Set Up the Project" steps as outlined above.

**1. Set Up the Project**

``` bash
# Clone the project to your local machine
git clone https://github.com/girik21/DHL-Tracker.git
cd DHL-Tracker

# Install required Node.js modules and dependencies
npm install

#If you want to install it individually
npm i express
npm i nodemon --save-dev
npm i axios
npm i winston
npm i luxon 
npm i dotenv  Note: Proper way to import dotenv is ` "import * as dotenv from "dotenv" `

# Initialize a .env file to securely store your API keys  for secure access . Use the dotenv package for this.
API_KEY = "ENTER_YOUR_KEY"

```

## API Documentation

- Obtain your DHL API key from the [DHL Developer Portal](https://developer.dhl.com/api-catalog?f[0]=api_catalog_service%3A3).

**2. Set Up HTTPS Certificates for Local Development**

``` bash

#Generate a private key
openssl genrsa -out key.pem

#Generate a Certificate Signing Request (CSR)
openssl req -new -key key.pem -out csr.pem

#Create a self-signed certificate
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem

```



## Example Request using Postman

```http
POST https://127.0.0.1:8080/dhl
Content-Type: application/json

{
 "orderNumber": "1965295301"
 }
```

## Run the API locally
``` 
`npm start`
```


