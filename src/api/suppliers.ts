import { z } from "zod";
import client from "./client";
import { supplierSchema } from "@/models/suppliers.model";

export const getSupplier = async () => {
  try {
    const response = await client.get("/suppliers/");
    return z.array(supplierSchema).parse(response.data);
  } catch (e) {
    console.error("validation error: ", e);
    throw new Error("Invalid supplier data");
  }
};
