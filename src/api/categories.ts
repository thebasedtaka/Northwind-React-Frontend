import client from "./client";
import { z } from "zod";
import { categorySchema } from "@/models/category.model";

export const getCategories = async () => {
  try {
    const response = await client.get("/categories/");
    return z.array(categorySchema).parse(response.data);
  } catch (e) {
    console.error("validation error: ", e);
    throw new Error("Invalid category data");
  }
};
