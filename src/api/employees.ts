import { employeeSchema } from "@/models/employe.model";
import { z } from "zod";
import client from "./client";

export const getEmployees = async () => {
  try {
    const response = await client.get("/employees/");
    return z.array(employeeSchema).parse(response.data);
  } catch (e) {
    console.error("validation error: ", e);
    throw new Error("Invalid product data");
  }
};
