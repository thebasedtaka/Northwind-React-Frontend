// src/components/OrdersTable.tsx
import { Skeleton } from "@/components/ui/skeleton";

interface OrdersTableProps {
  orders: {
    OrderID: number;
    OrderDate: string;
    ShippedDate: string | null;
    customer_name: string;
    order_details: {
      ProductID: number;
      product_name: string;
      UnitPrice: number;
      Quantity: number;
    }[];
  }[];
  loading?: boolean;
}

export function OrdersTable({ orders, loading }: OrdersTableProps) {
  if (loading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <Skeleton key={i} className="h-4 w-full" />
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.OrderID} className="border-b pb-4 last:border-b-0">
          <div className="flex justify-between">
            <div>
              <p className="font-medium">Order #{order.OrderID}</p>
              <p className="text-sm text-muted-foreground">
                Customer: {order.customer_name}
              </p>
            </div>
            <div className="text-right">
              <p className="font-medium">
                $
                {order.order_details
                  .reduce(
                    (sum, item) => sum + item.UnitPrice * item.Quantity,
                    0
                  )
                  .toFixed(2)}
              </p>
              <p
                className={`text-xs ${
                  order.ShippedDate ? "text-green-500" : "text-yellow-500"
                }`}
              >
                {order.ShippedDate ? "Shipped" : "Pending"}
              </p>
            </div>
          </div>
          <div className="mt-2 space-y-1">
            {order.order_details.map((item) => (
              <div
                key={item.ProductID}
                className="flex justify-between text-sm"
              >
                <span>{item.product_name}</span>
                <span>
                  {item.Quantity} × ${item.UnitPrice.toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
