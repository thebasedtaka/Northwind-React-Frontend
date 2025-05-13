import { z } from "zod";
import client from "./client";
import { territorySchema } from "@/models/territory.model";

export const getTerritories = async () => {
  try {
    const response = await client.get("/territories/");
    return z.array(territorySchema).parse(response.data);
  } catch (e) {
    console.error("validation error: ", e);
    throw new Error("Invalid product data");
  }
};
