// src/components/CategoryChart.tsx
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Skeleton } from "@/components/ui/skeleton";

// Register ChartJS components
ChartJS.register(ArcElement, Tooltip, Legend);

interface CategoryChartProps {
  data: {
    category_name: string;
    count: number;
  }[];
  loading?: boolean;
}

export function CategoryChart({ data, loading }: CategoryChartProps) {
  if (loading) {
    return <Skeleton className="h-64 w-full" />;
  }

  const chartData = {
    labels: data.map((item) => item.category_name),
    datasets: [
      {
        data: data.map((item) => item.count),
        backgroundColor: [
          "#FF6384", // Red
          "#36A2EB", // Blue
          "#FFCE56", // Yellow
          "#4BC0C0", // Teal
          "#9966FF", // Purple
          "#FF9F40", // Orange
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="h-full w-full">
      <Pie
        data={chartData}
        options={{
          plugins: {
            legend: {
              position: "right",
            },
            tooltip: {
              callbacks: {
                label: (context) => {
                  const label = context.label || "";
                  const value = context.raw || 0;
                  const total = context.dataset.data.reduce((a, b) => a + b, 0);
                  const percentage = Math.round((Number(value) / total) * 100);
                  return `${label}: ${value} (${percentage}%)`;
                },
              },
            },
          },
          maintainAspectRatio: false,
        }}
      />
    </div>
  );
}
