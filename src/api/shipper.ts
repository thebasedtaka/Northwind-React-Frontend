import { z } from "zod";
import client from "./client";
import { productSchema } from "@/models/products.model";

export const getProducts = async () => {
  try {
    const response = await client.get("/products/");
    return z.array(productSchema).parse(response.data);
  } catch (e) {
    console.error("validation error: ", e);
    throw new Error("Invalid product data");
  }
};
