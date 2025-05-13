import { z } from "zod";
import client from "./client";
import { customerSchema } from "@/models/customer.model";

export const getCustomers = async () => {
  try {
    const response = await client.get("/customers/");
    return z.array(customerSchema).parse(response.data);
  } catch (e) {
    console.error("validation error: ", e);
    throw new Error("Invalid customer data");
  }
};
