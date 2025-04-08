import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];

const ordersDueData = [
  { date: "Wed 04/02", orders: 32 },
  { date: "Thu 04/03", orders: 45 },
  { date: "Fri 04/04", orders: 28 },
  { date: "Sat 04/05", orders: 40 },
  { date: "Sun 04/06", orders: 35 },
  { date: "Mon 04/07", orders: 50 },
  { date: "Tue 04/08", orders: 30 }
];

const productData = [
  { name: "PREMIUM Emax", count: 381 },
  { name: "STANDARD Emax", count: 205 },
  { name: "Zirconia CROWN", count: 192 },
  { name: "DSD Waxup", count: 169 },
  { name: "Hybrid VENEER", count: 92 }
];

// Blue Gradient Color (using inline SVG)
const gradientBlue = "url(#blueGradient)";

// Custom Tooltip Component
const CustomTooltip = (props: any) => {
  const { active, payload } = props;

  if (active && payload && payload.length) {
    const { name, count, date, orders } = payload[0].payload;
    return (
      <div style={{ backgroundColor: '#fff', borderRadius: '5px', padding: '5px', border: '1px solid #ddd' }}>
        {name && <p style={{ margin: 0, color: '#333' }}>Product: {name}</p>}
        {count && <p style={{ margin: 0, color: '#333' }}>Count: {count}</p>}
        {date && <p style={{ margin: 0, color: '#333' }}>Date: {date}</p>}
        {orders && <p style={{ margin: 0, color: '#333' }}>Orders: {orders}</p>}
      </div>
    );
  }

  return null;
};

export default function Dashboard() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />

      <div className="p-4 space-y-4">
        {/* Top Summary Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-blue-600 text-white">
            <CardHeader>
              <CardTitle className="text-sm">🔔 PAST DUE</CardTitle>
            </CardHeader>
            <CardContent className="text-4xl font-bold">38</CardContent>
          </Card>

          <Card className="bg-blue-700 text-white">
            <CardHeader>
              <CardTitle className="text-sm">📅 DUE TODAY</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">36</div>
              <p className="text-xs mt-1">31 out of 36 completed</p>
              <p className="text-xs">30 out of 36 shipped</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-800 text-white">
            <CardHeader>
              <CardTitle className="text-sm">📅 DUE TOMORROW</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-bold">18</div>
              <p className="text-xs mt-1">0 out of 18 completed</p>
              <p className="text-xs">0 out of 18 shipped</p>
            </CardContent>
          </Card>

          <Card className="bg-blue-900 text-white">
            <CardHeader>
              <CardTitle className="text-sm">⏸️ ON HOLD</CardTitle>
            </CardHeader>
            <CardContent className="text-4xl font-bold">40</CardContent>
          </Card>
        </div>

        {/* Charts Row (50% width for each chart) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Recharts Line Chart (Top Product Categories) */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Top Product Categories</CardTitle>
            </CardHeader>
            <CardContent className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={productData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  {/* Use Custom Tooltip */}
                  <Tooltip content={<CustomTooltip />} />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke={gradientBlue}
                    strokeWidth={3}
                    dot={false} // Optional: removes the dots at data points
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
            <CardContent className="text-xs text-center">
              This chart represents the top product categories by count.
            </CardContent>
          </Card>

          {/* Recharts Bar Chart (Today's Daily Counts) */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Today's Daily Counts</CardTitle>
            </CardHeader>
            <CardContent className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ordersDueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  {/* Customize Tooltip */}
                  <Tooltip
                    content={<CustomTooltip />}
                    contentStyle={{
                      backgroundColor: 'rgba(255, 255, 255, 0.8)', // Light background color
                      borderRadius: '5px',
                      border: '1px solid #ddd',
                    }}
                    itemStyle={{
                      color: '#333', // Text color inside the tooltip
                    }}
                  />
                  <Bar dataKey="orders" fill={gradientBlue} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
            <CardContent className="text-xs text-center">
              This chart shows the number of orders due for each day.
            </CardContent>
          </Card>
        </div>

        {/* Product + Line Chart (50% width for each chart) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Recharts Bar Chart (Vertical Layout) */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Top Product Counts</CardTitle>
            </CardHeader>
            <CardContent className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart layout="vertical" data={productData}>
                  <XAxis type="number" />
                  <YAxis dataKey="name" type="category" />
                  {/* Use Custom Tooltip */}
                  <Tooltip content={<CustomTooltip />} />
                  <Bar
                    dataKey="count"
                    fill={gradientBlue}
                    label={{ position: 'inside', fill: '#ffffff', fontSize: 12 }}
                    stroke="#ffffff"
                    strokeWidth={5}
                  />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
            <CardContent className="text-xs text-center">
              This chart shows the top products by count in a vertical bar chart format.
            </CardContent>
          </Card>

          {/* Recharts Line Chart (Orders Due Per Day) */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">Orders Due Per Day</CardTitle>
            </CardHeader>
            <CardContent className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={ordersDueData}>
                  {/* SVG Gradient Definition */}
                  <defs>
                    <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.8} />
                      <stop offset="100%" stopColor="#2563eb" stopOpacity={0.8} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="date" />
                  <YAxis />
                  {/* Use Custom Tooltip */}
                  <Tooltip content={<CustomTooltip />} />
                  <Line type="monotone" dataKey="orders" stroke="url(#blueGradient)" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
            <CardContent className="text-xs text-center">
              This chart shows the number of orders due per day with a gradient line indicator.
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
