import AppLayout from '@/layouts/app-layout';
import { TrendingDownIcon, TrendingUpIcon} from "lucide-react"
import * as React from "react"
import { type BreadcrumbItem } from '@/types';
import { Badge } from "@/components/ui/badge"
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter, } from "@/components/ui/card";
import { XAxis, CartesianGrid, AreaChart, Area } from 'recharts';
import { ChartConfig, ChartContainer,  ChartTooltip, ChartTooltipContent,  ChartLegend, ChartLegendContent } from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Textarea } from "@/components/ui/textarea"



const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
  },
];


const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
  ongoing: {
    label: "In Production",
    color: "#2563eb",
  },
  completed: {
    label: "Completed",
    color: "#60a5fa",
  },
} satisfies ChartConfig



const chartData = [
  { date: "2024-04-01", ongoing: 222, completed: 150 },
  { date: "2024-04-02", ongoing: 97, completed: 180 },
  { date: "2024-04-03", ongoing: 167, completed: 120 },
  { date: "2024-04-04", ongoing: 242, completed: 260 },
  { date: "2024-04-05", ongoing: 373, completed: 290 },
  { date: "2024-04-06", ongoing: 301, completed: 340 },
  { date: "2024-04-07", ongoing: 245, completed: 180 },
  { date: "2024-04-08", ongoing: 409, completed: 320 },
  { date: "2024-04-09", ongoing: 59, completed: 110 },
  { date: "2024-04-10", ongoing: 261, completed: 190 },
  { date: "2024-04-11", ongoing: 327, completed: 350 },
  { date: "2024-04-12", ongoing: 292, completed: 210 },
  { date: "2024-04-13", ongoing: 342, completed: 380 },
  { date: "2024-04-14", ongoing: 137, completed: 220 },
  { date: "2024-04-15", ongoing: 120, completed: 170 },
  { date: "2024-04-16", ongoing: 138, completed: 190 },
  { date: "2024-04-17", ongoing: 446, completed: 360 },
  { date: "2024-04-18", ongoing: 364, completed: 410 },
  { date: "2024-04-19", ongoing: 243, completed: 180 },
  { date: "2024-04-20", ongoing: 89, completed: 150 },
  { date: "2024-04-21", ongoing: 137, completed: 200 },
  { date: "2024-04-22", ongoing: 224, completed: 170 },
  { date: "2024-04-23", ongoing: 138, completed: 230 },
  { date: "2024-04-24", ongoing: 387, completed: 290 },
  { date: "2024-04-25", ongoing: 215, completed: 250 },
  { date: "2024-04-26", ongoing: 75, completed: 130 },
  { date: "2024-04-27", ongoing: 383, completed: 420 },
  { date: "2024-04-28", ongoing: 122, completed: 180 },
  { date: "2024-04-29", ongoing: 315, completed: 240 },
  { date: "2024-04-30", ongoing: 454, completed: 380 },
  { date: "2024-05-01", ongoing: 165, completed: 220 },
  { date: "2024-05-02", ongoing: 293, completed: 310 },
  { date: "2024-05-03", ongoing: 247, completed: 190 },
  { date: "2024-05-04", ongoing: 385, completed: 420 },
  { date: "2024-05-05", ongoing: 481, completed: 390 },
  { date: "2024-05-06", ongoing: 498, completed: 520 },
  { date: "2024-05-07", ongoing: 388, completed: 300 },
  { date: "2024-05-08", ongoing: 149, completed: 210 },
  { date: "2024-05-09", ongoing: 227, completed: 180 },
  { date: "2024-05-10", ongoing: 293, completed: 330 },
  { date: "2024-05-11", ongoing: 335, completed: 270 },
  { date: "2024-05-12", ongoing: 197, completed: 240 },
  { date: "2024-05-13", ongoing: 197, completed: 160 },
  { date: "2024-05-14", ongoing: 448, completed: 490 },
  { date: "2024-05-15", ongoing: 473, completed: 380 },
  { date: "2024-05-16", ongoing: 338, completed: 400 },
  { date: "2024-05-17", ongoing: 499, completed: 420 },
  { date: "2024-05-18", ongoing: 315, completed: 350 },
  { date: "2024-05-19", ongoing: 235, completed: 180 },
  { date: "2024-05-20", ongoing: 177, completed: 230 },
  { date: "2024-05-21", ongoing: 82, completed: 140 },
  { date: "2024-05-22", ongoing: 81, completed: 120 },
  { date: "2024-05-23", ongoing: 252, completed: 290 },
  { date: "2024-05-24", ongoing: 294, completed: 220 },
  { date: "2024-05-25", ongoing: 201, completed: 250 },
  { date: "2024-05-26", ongoing: 213, completed: 170 },
  { date: "2024-05-27", ongoing: 420, completed: 460 },
  { date: "2024-05-28", ongoing: 233, completed: 190 },
  { date: "2024-05-29", ongoing: 78, completed: 130 },
  { date: "2024-05-30", ongoing: 340, completed: 280 },
  { date: "2024-05-31", ongoing: 178, completed: 230 },
  { date: "2024-06-01", ongoing: 178, completed: 200 },
  { date: "2024-06-02", ongoing: 470, completed: 410 },
  { date: "2024-06-03", ongoing: 103, completed: 160 },
  { date: "2024-06-04", ongoing: 439, completed: 380 },
  { date: "2024-06-05", ongoing: 88, completed: 140 },
  { date: "2024-06-06", ongoing: 294, completed: 250 },
  { date: "2024-06-07", ongoing: 323, completed: 370 },
  { date: "2024-06-08", ongoing: 385, completed: 320 },
  { date: "2024-06-09", ongoing: 438, completed: 480 },
  { date: "2024-06-10", ongoing: 155, completed: 200 },
  { date: "2024-06-11", ongoing: 92, completed: 150 },
  { date: "2024-06-12", ongoing: 492, completed: 420 },
  { date: "2024-06-13", ongoing: 81, completed: 130 },
  { date: "2024-06-14", ongoing: 426, completed: 380 },
  { date: "2024-06-15", ongoing: 307, completed: 350 },
  { date: "2024-06-16", ongoing: 371, completed: 310 },
  { date: "2024-06-17", ongoing: 475, completed: 520 },
  { date: "2024-06-18", ongoing: 107, completed: 170 },
  { date: "2024-06-19", ongoing: 341, completed: 290 },
  { date: "2024-06-20", ongoing: 408, completed: 450 },
  { date: "2024-06-21", ongoing: 169, completed: 210 },
  { date: "2024-06-22", ongoing: 317, completed: 270 },
  { date: "2024-06-23", ongoing: 480, completed: 530 },
  { date: "2024-06-24", ongoing: 132, completed: 180 },
  { date: "2024-06-25", ongoing: 141, completed: 190 },
  { date: "2024-06-26", ongoing: 434, completed: 380 },
  { date: "2024-06-27", ongoing: 448, completed: 490 },
  { date: "2024-06-28", ongoing: 149, completed: 200 },
  { date: "2024-06-29", ongoing: 103, completed: 160 },
  { date: "2024-06-30", ongoing: 446, completed: 400 },
]

const payments = [
  {
    date: '2025-04-01',
    acct: '1234',
    client: 'John Doe',
    patient: 'John Doe',
    status: 'InProduction',
    email: 'john@example.com',
    pdf: '#',
    edit: '#',
  },
  {
    date: '2025-04-02',
    acct: '5678',
    client: 'Jane Smith',
    patient: 'Emily Smith',
    status: 'New',
    email: 'jane@example.com',
    pdf: '#',
    edit: '#',
  },
  {
    date: '2025-04-03',
    acct: '9101',
    client: 'Michael Brown',
    patient: 'Lucas Brown',
    status: 'Completed',
    email: 'michael@example.com',
    pdf: '#',
    edit: '#',
  },
  {
    date: '2025-04-04',
    acct: '1121',
    client: 'Sophia Williams',
    patient: 'Olivia Williams',
    status: 'Hold',
    email: 'sophia@example.com',
    pdf: '#',
    edit: '#',
  },
  {
    date: '2025-04-05',
    acct: '3141',
    client: 'David Johnson',
    patient: 'Benjamin Johnson',
    status: 'InProduction',
    email: 'david@example.com',
    pdf: '#',
    edit: '#',
  },
  {
    date: '2025-04-06',
    acct: '5161',
    client: 'Lily Davis',
    patient: 'Charlotte Davis',
    status: 'Completed',
    email: 'lily@example.com',
    pdf: '#',
    edit: '#',
  },
  {
    date: '2025-04-07',
    acct: '7181',
    client: 'William Martinez',
    patient: 'Ethan Martinez',
    status: 'New',
    email: 'william@example.com',
    pdf: '#',
    edit: '#',
  },
  {
    date: '2025-04-08',
    acct: '9202',
    client: 'Olivia Taylor',
    patient: 'Isabella Taylor',
    status: 'Completed',
    email: 'olivia@example.com',
    pdf: '#',
    edit: '#',
  },
  {
    date: '2025-04-09',
    acct: '1122',
    client: 'James Wilson',
    patient: 'Henry Wilson',
    status: 'InProduction',
    email: 'james@example.com',
    pdf: '#',
    edit: '#',
  },
  {
    date: '2025-04-10',
    acct: '2233',
    client: 'Ava Thomas',
    patient: 'Mia Thomas',
    status: 'Hold',
    email: 'ava@example.com',
    pdf: '#',
    edit: '#',
  },
];

type Status = {
  value: string
  label: string
}

const statuses: Status[] = [
  {
    value: "other",
    label: "Other",
  },
  {
    value: "optionone",
    label: "Deliver Option One",
  }
];


export default function Dashboard() {
  const [timeRange, setTimeRange] = React.useState("90d")
  
    const filteredData = chartData.filter((item) => {
      const date = new Date(item.date)
      const referenceDate = new Date("2024-06-30")
      let daysToSubtract = 90
      if (timeRange === "30d") {
        daysToSubtract = 30
      } else if (timeRange === "7d") {
        daysToSubtract = 7
      }
      const startDate = new Date(referenceDate)
      startDate.setDate(startDate.getDate() - daysToSubtract)
      return date >= startDate
    })


      const [open, setOpen] = React.useState(false)
      const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
        null
      )
    
      const [date, setDate] = React.useState<Date>()


  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2 p-4 space-y-4">
          <Card>
            <CardHeader className="flex items-center gap-2 space-y-0 border-b py-5 sm:flex-row">
              <div className="grid flex-1 gap-1 text-center sm:text-left">
                <CardTitle>Orders Chart - Interactive</CardTitle>
                <CardDescription>
                  Showing total orders for the last 3 months
                </CardDescription>
              </div>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger
                  className="w-[160px] rounded-lg sm:ml-auto"
                  aria-label="Select a value"
                >
                  <SelectValue placeholder="Last 3 months" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="90d" className="rounded-lg">
                    Last 3 months
                  </SelectItem>
                  <SelectItem value="30d" className="rounded-lg">
                    Last 30 days
                  </SelectItem>
                  <SelectItem value="7d" className="rounded-lg">
                    Last 7 days
                  </SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
              <ChartContainer
                config={chartConfig}
                className="aspect-auto h-[250px] w-full"
              >
                <AreaChart data={filteredData}>
                  <defs>
                    <linearGradient id="fillOngoing" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="var(--color-ongoing)"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="var((--color-ongoing)"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                    <linearGradient id="fillCompleted" x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="5%"
                        stopColor="var(--color-completed)"
                        stopOpacity={0.8}
                      />
                      <stop
                        offset="95%"
                        stopColor="var(--color-completed)"
                        stopOpacity={0.1}
                      />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="date"
                    tickLine={false}
                    axisLine={false}
                    tickMargin={8}
                    minTickGap={32}
                    tickFormatter={(value) => {
                      const date = new Date(value)
                      return date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })
                    }}
                  />
                  <ChartTooltip
                    cursor={false}
                    content={
                      <ChartTooltipContent
                        labelFormatter={(value) => {
                          return new Date(value).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })
                        }}
                        indicator="dot"
                      />
                    }
                  />
                  <Area
                    dataKey="ongoing"
                    type="natural"
                    fill="url(#fillOngoing)"
                    stroke="var(--color-ongoing)"
                    stackId="a"
                  />
                  <Area
                    dataKey="completed"
                    type="natural"
                    fill="url(#fillCompleted)"
                    stroke="var(--color-completed)"
                    stackId="a"
                  />
                  <ChartLegend content={<ChartLegendContent />} />
                </AreaChart>
              </ChartContainer>
            </CardContent>
          </Card>

        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-2 p-4 space-y-4">
        <Card className="@container/card m-0">
          <CardHeader className="relative">
            <CardDescription>Total Revenue</CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              $1,250.00
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                <TrendingUpIcon className="size-3" />
                +12.5%
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Trending up this month <TrendingUpIcon className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card m-0">
          <CardHeader className="relative">
            <CardDescription>New orders</CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              1,234
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                <TrendingDownIcon className="size-3" />
                -20%
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Down 20% this period <TrendingDownIcon className="size-4" />
            </div>
            <div className="text-muted-foreground">
              Acquisition needs attention
            </div>
          </CardFooter>
        </Card>
        <Card className="@container/card m-0">
          <CardHeader className="relative">
            <CardDescription>Active Clients</CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              45,678
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                <TrendingUpIcon className="size-3" />
                +12.5%
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Strong user retention <TrendingUpIcon className="size-4" />
            </div>
            <div className="text-muted-foreground">Engagement exceed targets</div>
          </CardFooter>
        </Card>
        <Card className="@container/card m-0">
          <CardHeader className="relative">
            <CardDescription>Growth Rate</CardDescription>
            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
              4.5%
            </CardTitle>
            <div className="absolute right-4 top-4">
              <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                <TrendingUpIcon className="size-3" />
                +4.5%
              </Badge>
            </div>
          </CardHeader>
          <CardFooter className="flex-col items-start gap-1 text-sm">
            <div className="line-clamp-1 flex gap-2 font-medium">
              Steady performance <TrendingUpIcon className="size-4" />
            </div>
            <div className="text-muted-foreground">Meets growth projections</div>
          </CardFooter>
        </Card>
        </div>
        
      </div>
      <div className='grid grid-cols-1 gap-4 p-4'>
        {/* Table Section */}
        <div className="shadow-md rounded my-6">
            <table className="w-full caption-bottom text-sm">
                <thead>
                    <tr className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                        <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"></th>
                        <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Due Date</th>
                        <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Invoice Number</th>
                        <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Client</th>
                        <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Patient</th>
                        <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Status</th>
                        <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Dept</th>
                        <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">User</th>
                        <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Actions</th>
                    </tr>
                </thead>
                <tbody className="font-light">
                    {payments.map((payment, index) => (
                        <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                            <td className="py-3 px-6 text-left whitespace-nowrap">
                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star text-yellow-500">
                                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                                    </svg>

                                  </div>
                            </td>
                            <td className="p-2 align-middle whitespace-nowrap">
                                {payment.date}
                            </td>
                            <td className="p-2 align-middle whitespace-nowrap">
                                {payment.acct}
                            </td>
                            <td className="p-2 align-middle whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                    </div>
                                    <span>{payment.client}</span>
                                </div>
                            </td>
                            <td className="p-2 align-middle whitespace-nowrap">
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                    </div>
                                    <span>{payment.patient}</span>
                                </div>
                            </td>
                            <td className="p-2 align-middle whitespace-nowrap">
                              {payment.status === 'New' && (
                                <span className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800 text-sm font-normal">
                                  New
                                </span>
                              )}
                              {payment.status === 'InProduction' && (
                                <span className="inline-flex items-center px-3 py-1 text-sky-500 rounded-full gap-x-2 bg-sky-100/60 dark:bg-gray-800 text-sm font-normal">
                                  In Production
                                </span>
                              )}
                              {payment.status === 'Hold' && (
                                <span className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-red-500 bg-red-100/60 dark:bg-gray-800 text-sm font-normal">
                                  Hold
                                </span>
                              )}
                              {payment.status === 'Completed' && (
                                <span className="inline-flex items-center px-3 py-1 text-amber-500 rounded-full gap-x-2 bg-amber-100/60 dark:bg-gray-800 text-sm font-normal">
                                  Completed
                                </span>
                              )}
                            </td>
                            <td className="p-2 align-middle whitespace-nowrap">
                                  <div className="mr-2">
                                      <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                  </div>
                            </td>
                            <td className="p-2 align-middle whitespace-nowrap">
                                  <div className="mr-2">
                                      <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                  </div>
                            </td>
                            <td className="p-2 align-middle whitespace-nowrap">
                                <div className="flex item-center justify-center">
                                    <Dialog>
                                      <DialogTrigger asChild>
                                        <div className="w-4 mr-2 transform hover:text-blue-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                                      </DialogTrigger>
                                      <DialogContent className="w-[90%] h-[95%] sm:max-w-full flex flex-col">
                                        <DialogHeader className="max-h-20">
                                          <DialogTitle>Case Number# 123456 - Case Title</DialogTitle>
                                          <DialogDescription>
                                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
                                          </DialogDescription>
                                        </DialogHeader>
                                        <div className="flex">
                                          <div className="w-[70%] py-4 pr-4 pt-0">
                                            <ScrollArea className="h-[100%] w-[100%] ">
                                              <div className="grid grid-cols-2 gap-6 p-6 text-sm rounded-md border">
                                                <div className="space-y-6">
                                                  <div className="flex">
                                                    <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                                    ⌘ Status
                                                    </div>
                                                    <div className="mt-1">
                                                      <span className="inline-flex items-center px-3 py-1 text-sky-500 rounded-full gap-x-2 bg-sky-100/60 dark:bg-gray-800 text-sm font-normal">
                                                        In Production
                                                      </span>
                                                    </div>
                                                  </div>

                                                  <div className="flex">
                                                    <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                                    ⌘ Ordered
                                                    </div>
                                                    <Popover>
                                                      <PopoverTrigger asChild>
                                                        <Button
                                                          variant={"outline"}
                                                          className={cn(
                                                            "w-[240px] justify-start text-left font-normal",
                                                            !date && ""
                                                          )}
                                                        >
                                                          <CalendarIcon />
                                                          {date ? format(date, "PPP") : <span>Apr 01, 2025 </span>}
                                                        </Button>
                                                      </PopoverTrigger>
                                                      <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                          mode="single"
                                                          selected={date}
                                                          onSelect={setDate}
                                                          initialFocus
                                                        />
                                                      </PopoverContent>
                                                    </Popover>
                                                  </div>

                                                  <div className="flex">
                                                    <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                                    ⌘ 
                                                      <RadioGroup defaultValue="option-one">
                                                        <div className="flex items-center space-x-2">
                                                          <RadioGroupItem value="option-one" id="option-one" />
                                                          <Label htmlFor="option-one">Due</Label>
                                                        </div>
                                                        <div className="flex items-center space-x-2">
                                                          <RadioGroupItem value="option-two" id="option-two" />
                                                          <Label htmlFor="option-two">TBD</Label>
                                                        </div>
                                                      </RadioGroup>
                                                    </div>
                                                    <div className="mt-1">
                                                    <Popover>
                                                      <PopoverTrigger asChild>
                                                        <Button
                                                          variant={"outline"}
                                                          className={cn(
                                                            "w-[240px] justify-start text-left font-normal",
                                                            !date && ""
                                                          )}
                                                        >
                                                          <CalendarIcon />
                                                          {date ? format(date, "PPP") : <span>Apr 10, 2025 </span>}
                                                        </Button>
                                                      </PopoverTrigger>
                                                      <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                          mode="single"
                                                          selected={date}
                                                          onSelect={setDate}
                                                          initialFocus
                                                        />
                                                      </PopoverContent>
                                                    </Popover>
                                                    </div>
                                                  </div>

                                                  <div className="flex">
                                                    <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                                    ⌘ Appointment
                                                    </div>
                                                    <Popover>
                                                      <PopoverTrigger asChild>
                                                        <Button
                                                          variant={"outline"}
                                                          className={cn(
                                                            "w-[240px] justify-start text-left font-normal",
                                                            !date && ""
                                                          )}
                                                        >
                                                          <CalendarIcon />
                                                          {date ? format(date, "PPP") : <span>Apr 15, 2025 </span>}
                                                        </Button>
                                                      </PopoverTrigger>
                                                      <PopoverContent className="w-auto p-0" align="start">
                                                        <Calendar
                                                          mode="single"
                                                          selected={date}
                                                          onSelect={setDate}
                                                          initialFocus
                                                        />
                                                      </PopoverContent>
                                                    </Popover>
                                                  </div>

                                                  <div className="flex">
                                                    <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                                    ⌘ Delivery Method:	
                                                    </div>
                                                    <Popover open={open} onOpenChange={setOpen}>
                                                      <PopoverTrigger asChild>
                                                        <Button variant="outline" className="w-[150px] justify-start">
                                                          {selectedStatus ? <>{selectedStatus.label}</> : <>Other</>}
                                                        </Button>
                                                      </PopoverTrigger>
                                                      <PopoverContent className="p-0" side="right" align="start">
                                                        <Command>
                                                          <CommandInput placeholder="Change status..." />
                                                          <CommandList>
                                                            <CommandEmpty>No results found.</CommandEmpty>
                                                            <CommandGroup>
                                                              {statuses.map((status) => (
                                                                <CommandItem
                                                                  key={status.value}
                                                                  value={status.value}
                                                                  onSelect={(value) => {
                                                                    setSelectedStatus(
                                                                      statuses.find((priority) => priority.value === value) ||
                                                                        null
                                                                    )
                                                                    setOpen(false)
                                                                  }}
                                                                >
                                                                  {status.label}
                                                                </CommandItem>
                                                              ))}
                                                            </CommandGroup>
                                                          </CommandList>
                                                        </Command>
                                                      </PopoverContent>
                                                    </Popover>
                                                  </div>
                                                </div>

                                                <div className="space-y-6">
                                                  <div className="flex">
                                                    <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                                    ⌘ Client
                                                    </div>
                                                    <div className="mr-2 flex">
                                                        <img className="w-6 h-6 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                                        Client Name
                                                    </div>
                                                  </div>

                                                  <div className="flex">
                                                    <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                                    ⌘ Doctor
                                                    </div>
                                                    <div className="mr-2 flex">
                                                        <img className="w-6 h-6 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                                        Doctor Name
                                                    </div>
                                                  </div>

                                                  <div className="flex">
                                                    <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                                    ⌘ Patient
                                                    </div>
                                                    <div className="mr-2 flex">
                                                        <img className="w-6 h-6 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                                        Patient Name
                                                    </div>
                                                  </div>

                                                  <div className="flex">
                                                    <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                                    ⌘ Assign To
                                                    </div>
                                                    <div className="mt-1">
                                                    Ryan Antonio
                                                    </div>
                                                  </div>
                                                  <div className="flex">
                                                    <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                                    ⌘ Department:	
                                                    </div>
                                                    <div className="mt-1">
                                                    Waiting Design Approval
                                                    </div>
                                                  </div>
                                                </div>
                                              </div>
                                              <Tabs defaultValue="products" className="w-[100%] mt-5">
                                                <TabsList>
                                                  <TabsTrigger value="products">Products & Services</TabsTrigger>
                                                  <TabsTrigger value="file">Files (1)</TabsTrigger>
                                                  <TabsTrigger value="task">Tasks</TabsTrigger>
                                                </TabsList>
                                                <TabsContent value="products" className="mt-2 p-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</TabsContent>
                                                <TabsContent value="file" className="mt-2 p-3">File Directory</TabsContent>
                                                <TabsContent value="task" className="mt-2 p-3">Task List</TabsContent>
                                              </Tabs>




                                            </ScrollArea>
                                          </div>
                                          <div className="w-[30%]  flex flex flex-col justify-between">
                                          <ScrollArea className="h-[80%] w-[100%] p-4 rounded-md border">
                                              <h2 className="font-semibold text-xl pr-3">Activity</h2>
                                              <ol className="relative">                  
                                                  <li className="mb-4 ms-4">
                                                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 10, 2022</time>
                                                      <h3 className="text-sm font-semibold text-gray-500 dark:text-white"> Super admin create this case</h3>
                                                   </li>
                                                   <li className="mb-4 ms-4">
                                                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 10, 2022</time>
                                                      <h3 className="text-sm font-semibold text-gray-500 dark:text-white"> Assign to Ryan Antonio</h3>
                                                   </li>
                                                   <li className="mb-4 ms-4">
                                                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 10, 2022</time>
                                                      <h3 className="text-sm font-semibold text-gray-500 dark:text-white"> Department waiting design approval</h3>
                                                   </li>
                                                   <li className="mb-4 ms-4">
                                                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 10, 2022</time>
                                                      <h3 className="text-sm font-semibold text-gray-500 dark:text-white"> Delivery method set Other</h3>
                                                   </li>
                                                   <li className="mb-4 ms-4">
                                                      <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                                      <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 11, 2022</time>
                                                      <h3 className="text-sm font-semibold text-gray-800 dark:text-white"> Ryan Antonio <br></br>Comment: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</h3>
                                                   </li>
                                              </ol>
                                          </ScrollArea>
                                          <div className="grid w-full gap-1.5 mt-5">
                                            <Label htmlFor="message">Comment</Label>
                                            <Textarea placeholder="Type your message here." id="message" />
                                            <Button className="mt-3">Submit</Button>
                                          </div>
                                          </div>
                                        </div>
                                      </DialogContent>
                                    </Dialog>
                                    <AlertDialog>
                                      <AlertDialogTrigger asChild>
                                        <div className="w-4 mr-2 transform hover:text-rose-500">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                        </div>
                                      </AlertDialogTrigger>
                                      <AlertDialogContent>
                                        <AlertDialogHeader>
                                          <AlertDialogTitle>Are you sure you want to delete this?</AlertDialogTitle>
                                          <AlertDialogDescription>
                                          This action cannot be undone. The data will be permanently removed.
                                          </AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                          <AlertDialogCancel>Cancel</AlertDialogCancel>
                                          <AlertDialogAction>Continue</AlertDialogAction>
                                        </AlertDialogFooter>
                                      </AlertDialogContent>
                                    </AlertDialog>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>

      
    </AppLayout>
  );
}
