import express from "express";
import { tracker } from "../controllers/trackControl.js";

export const dhl = express.Router();

dhl.post("/", async (req, res) => {
    try {
        const { orderNumber } = req.body; 
        if (!orderNumber) {
            return res.status(400).json({ error: "Order number is required" });
        }
        const response = await tracker(orderNumber);

        const shipments = response.shipments;

        if (shipments.length === 0) {
            return res.status(404).json({ error: "No tracking information found for this order" });
        }

        const firstShipment = shipments[0]; 

        const origin = firstShipment.origin.address.addressLocality;
        const destination = firstShipment.destination.address.addressLocality;

        const trackingEvents = firstShipment.events.map(event => {
            return {
                timestamp: event.timestamp,
                location: event.location.address.addressLocality,
                description: event.description
            };
        });

        return res.json({ 
            origin,
            destination,
            trackingEvents
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Error!!!");
    }
});
