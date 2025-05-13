import { orderDetailSchema } from "@/models/orderDetails.model";
import client from "./client";
import { z } from "zod";

export const getOrderDetails = async () => {
  try {
    const response = await client.get("/orderdetails/");
    return z.array(orderDetailSchema).parse(response.data);
  } catch (e) {
    console.error("validation error: ", e);
    throw new Error("Invalid product data");
  }
};
