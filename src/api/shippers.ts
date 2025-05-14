import { z } from "zod";
import client from "./client";
import { shipperSchema } from "@/models/shipper.model";

export const getShippers = async () => {
  try {
    const response = await client.get("/shippers/");
    return z.array(shipperSchema).parse(response.data);
  } catch (e) {
    console.error("validation error: ", e);
    throw new Error("Invalid product data");
  }
};
