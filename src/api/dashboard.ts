// src/api/dashboard.ts
import client from "./client";
import { z } from "zod";

// Schema for recent orders
const orderDetailSchema = z.object({
  UnitPrice: z.number(),
  Quantity: z.number(),
  ProductID: z.number(),
  product_name: z.string(),
});

const recentOrderSchema = z.object({
  OrderID: z.number(),
  OrderDate: z.string(),
  ShippedDate: z.string().nullable(),
  CustomerID: z.string(),
  customer_name: z.string(),
  order_details: z.array(orderDetailSchema),
});

// Schema for category distribution
const categoryDistributionSchema = z.object({
  category_name: z.string(),
  count: z.number(),
});

// Main dashboard schema
export const dashboardStatsSchema = z.object({
  total_products: z.number(),
  total_orders: z.number(),
  pending_orders: z.number(),
  total_customers: z.number(),
  total_revenue: z.number(),
  recent_orders: z.array(recentOrderSchema),
  category_distribution: z.array(categoryDistributionSchema),
});

export type DashboardStats = z.infer<typeof dashboardStatsSchema>;

export const getDashboardStats = async (
  fresh = false
): Promise<DashboardStats> => {
  const response = await client.get("/dashboard/", {
    params: { fresh },
  });
  return dashboardStatsSchema.parse(response.data);
};
