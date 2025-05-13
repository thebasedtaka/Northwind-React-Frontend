import { z } from "zod";
import client from "./client";
import { orderSchema } from "@/models/orders.model";

export const getOrders = async () => {
  try {
    const response = await client.get("/Orders/");
    return z.array(orderSchema).parse(response.data);
  } catch (e) {
    console.error("validation error: ", e);
    throw new Error("Invalid Order data");
  }
};
