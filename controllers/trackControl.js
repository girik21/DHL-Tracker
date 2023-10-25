import axios from "axios";
import dotenv from "dotenv";
import { getLoggerInstance } from "../logger.js";

dotenv.config();

const api = process.env.API_KEY;
const logger = getLoggerInstance();

export const tracker = async (orderNumber) => {
   const url = `https://api-eu.dhl.com/track/shipments?trackingNumber=${orderNumber}&service=express&originCountryCode=NZ&requesterCountryCode=GB`;
   try {
    const response = await axios.get(url, {
        headers: {
            "DHL-API-Key": api, //Specific header key
        }
    });
    return response.data;
   } catch (error) {
    logger.error("Error while fetching DHL tracking data:", error);
    throw error;
   }
}
