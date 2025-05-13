import { z } from "zod";
import client from "./client";
import { regionSchema } from "@/models/region.model";

export const getRegions = async () => {
  try {
    const response = await client.get("/products/");
    return z.array(regionSchema).parse(response.data);
  } catch (e) {
    console.error("validation error: ", e);
    throw new Error("Invalid product data");
  }
};
