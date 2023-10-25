import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const api = process.env.API_KEY;

export const tracker = async (orderNumber) => {
   const url = `https://api-eu.dhl.com/track/shipments?trackingNumber=${orderNumber}&service=express&originCountryCode=NZ&requesterCountryCode=GB`;
   try {
    const response = await axios.get(url, {
        headers: {
            "DHL-API-Key": api, //Specific heeader key
        }
    });
    return response.data;
   } catch (error) {
    console.error("Error while fetching DHL tracking data:", error);
    throw error;
   }
}

// {
//     "orderNumber": "1965295301"
// }
