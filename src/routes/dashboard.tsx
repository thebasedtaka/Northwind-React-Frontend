// src/routes/Dashboard.tsx
import { useDashboardStats } from "@/hooks/api/useDashboardStats";
import { MetricCard } from "@/components/MetricCard";
import { DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import { OrdersTable } from "@/components/OrdersTable";
import { CategoryChart } from "@/components/CategoryChart";

export function Dashboard() {
  const { data, isLoading } = useDashboardStats();

  // Helper functions to ensure correct types
  const getValue = (val?: number): string | number => {
    return isLoading || val === undefined ? "--" : val;
  };

  const getCurrency = (val?: number): string | number => {
    return isLoading || val === undefined ? "--" : `$${val.toLocaleString()}`;
  };

  return (
    <div className="space-y-6">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Total Products"
          value={getValue(data?.total_products)}
          icon={Package}
          loading={isLoading}
        />
        <MetricCard
          title="Pending Orders"
          value={getValue(data?.pending_orders)}
          icon={ShoppingCart}
          loading={isLoading}
        />
        <MetricCard
          title="Active Customers"
          value={getValue(data?.total_customers)}
          icon={Users}
          loading={isLoading}
        />
        <MetricCard
          title="Revenue"
          value={getCurrency(data?.total_revenue)}
          icon={DollarSign}
          loading={isLoading}
        />
      </div>
      {/* ... rest of your dashboard ... */}
      <div className="space-y-6">
        {/* Metrics Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {/* Your metric cards */}
        </div>

        {/* Charts Grid */}
        <div className="grid gap-4 md:grid-cols-2">
          {/* Category Distribution Chart */}
          <div className="rounded-lg border p-6 shadow-sm">
            <h3 className="text-lg font-semibold mb-4">Products by Category</h3>
            <div className="h-[400px]">
              <CategoryChart
                data={data?.category_distribution || []}
                loading={isLoading}
              />
            </div>
          </div>

          {/* Other chart or component */}
          <OrdersTable orders={data?.recent_orders || []} loading={isLoading} />
        </div>
      </div>
    </div>
  );
}
