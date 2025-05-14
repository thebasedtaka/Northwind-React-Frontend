import { z } from "zod";
import client from "./client";
import { employeeTerritorySchema } from "@/models/employeeTerritory.model";

export const getEmployeeTeritories = async () => {
  try {
    const response = await client.get("/employeeterritories/");
    return z.array(employeeTerritorySchema).parse(response.data);
  } catch (e) {
    console.error("validation error: ", e);
    throw new Error("Invalid product data");
  }
};
