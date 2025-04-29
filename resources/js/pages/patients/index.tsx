import * as React from "react"
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter, } from "@/components/ui/card";
import { TrendingDownIcon, TrendingUpIcon} from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
    title: 'Patient Management',
    href: '/patient-management',
  },
];

const patients = [
  {
    id: 'P-001',
    name: 'John Doe',
    dob: '1985-04-15',
    gender: 'Male',
    phone: '(555) 123-4567',
    email: 'john@example.com',
    lastVisit: '2025-04-10',
    status: 'Active',
    insurance: 'Blue Cross',
  },
  {
    id: 'P-002',
    name: 'Jane Smith',
    dob: '1990-07-22',
    gender: 'Female',
    phone: '(555) 987-6543',
    email: 'jane@example.com',
    lastVisit: '2025-04-05',
    status: 'Active',
    insurance: 'Aetna',
  },
  {
    id: 'P-003',
    name: 'Michael Brown',
    dob: '1978-11-30',
    gender: 'Male',
    phone: '(555) 456-7890',
    email: 'michael@example.com',
    lastVisit: '2025-03-28',
    status: 'Inactive',
    insurance: 'Medicare',
  },
  {
    id: 'P-004',
    name: 'Sophia Williams',
    dob: '1995-02-18',
    gender: 'Female',
    phone: '(555) 321-6549',
    email: 'sophia@example.com',
    lastVisit: '2025-04-12',
    status: 'Active',
    insurance: 'United Health',
  },
  {
    id: 'P-005',
    name: 'David Johnson',
    dob: '1982-09-05',
    gender: 'Male',
    phone: '(555) 789-1234',
    email: 'david@example.com',
    lastVisit: '2025-03-15',
    status: 'Inactive',
    insurance: 'Cigna',
  },
  {
    id: 'P-006',
    name: 'Lily Davis',
    dob: '1975-12-25',
    gender: 'Female',
    phone: '(555) 654-3210',
    email: 'lily@example.com',
    lastVisit: '2025-04-08',
    status: 'Active',
    insurance: 'Humana',
  },
  {
    id: 'P-007',
    name: 'William Martinez',
    dob: '1992-06-14',
    gender: 'Male',
    phone: '(555) 321-9876',
    email: 'william@example.com',
    lastVisit: '2025-04-01',
    status: 'Active',
    insurance: 'Kaiser',
  },
  {
    id: 'P-008',
    name: 'Olivia Taylor',
    dob: '1988-03-08',
    gender: 'Female',
    phone: '(555) 789-4561',
    email: 'olivia@example.com',
    lastVisit: '2025-03-22',
    status: 'Inactive',
    insurance: 'Blue Shield',
  },
  {
    id: 'P-009',
    name: 'James Wilson',
    dob: '1970-08-19',
    gender: 'Male',
    phone: '(555) 123-7890',
    email: 'james@example.com',
    lastVisit: '2025-04-14',
    status: 'Active',
    insurance: 'Medicaid',
  },
  {
    id: 'P-010',
    name: 'Ava Thomas',
    dob: '1998-05-27',
    gender: 'Female',
    phone: '(555) 456-1237',
    email: 'ava@example.com',
    lastVisit: '2025-03-30',
    status: 'Active',
    insurance: 'Tricare',
  },
];

type Status = {
  value: string
  label: string
}

const statuses: Status[] = [
  {
    value: "active",
    label: "Active",
  },
  {
    value: "inactive",
    label: "Inactive",
  },
  {
    value: "new",
    label: "New Patient",
  }
];

export default function PatientManagement() {
  const [open, setOpen] = React.useState(false)
  const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
    null
  )
  const [date, setDate] = React.useState<Date>()

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Patient Management" />

      <div className="p-4 space-y-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="@container/card m-0">
            <CardHeader className="relative">
              <CardDescription>Total Patients</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                1,245
              </CardTitle>
              <div className="absolute right-4 top-4">
                <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                  <TrendingUpIcon className="size-3" />
                  +8.5%
                </Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                New patients this month <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Compared to last 6 months
              </div>
            </CardFooter>
          </Card>
          <Card className="@container/card m-0">
            <CardHeader className="relative">
              <CardDescription>Active Patients</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                856
              </CardTitle>
              <div className="absolute right-4 top-4">
                <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                  <TrendingUpIcon className="size-3" />
                  +3.2%
                </Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                Regular patients <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Visited in last 3 months
              </div>
            </CardFooter>
          </Card>
          <Card className="@container/card m-0">
            <CardHeader className="relative">
              <CardDescription>New Patients</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                42
              </CardTitle>
              <div className="absolute right-4 top-4">
                <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                  <TrendingUpIcon className="size-3" />
                  +15.5%
                </Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                New this month <TrendingUpIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                First-time visitors
              </div>
            </CardFooter>
          </Card>
          <Card className="@container/card m-0">
            <CardHeader className="relative">
              <CardDescription>Inactive Patients</CardDescription>
              <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                347
              </CardTitle>
              <div className="absolute right-4 top-4">
                <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                  <TrendingDownIcon className="size-3" />
                  -2.5%
                </Badge>
              </div>
            </CardHeader>
            <CardFooter className="flex-col items-start gap-1 text-sm">
              <div className="line-clamp-1 flex gap-2 font-medium">
                No recent visits <TrendingDownIcon className="size-4" />
              </div>
              <div className="text-muted-foreground">
                Over 6 months inactive
              </div>
            </CardFooter>
          </Card>
        </div>

        {/* Filter Section */}
        <div className="rounded my-6 p-4">
          <div className="flex justify-between items-center">
            <div className="flex space-x-4">
              <div>
                <label htmlFor="date" className="text-sm font-medium text-gray-700 dark:text-gray-300 px-5">
                  Date Range
                </label>
                <input
                  type="date"
                  id="date"
                  className="mt-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="patient" className="text-sm font-medium text-gray-700 dark:text-gray-300 px-5">
                  Patient
                </label>
                <input
                  type="text"
                  id="patient"
                  placeholder="Search patient"
                  className="mt-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                />
              </div>
              <div>
                <label htmlFor="status" className="text-sm font-medium text-gray-700 dark:text-gray-300 px-5">
                  Status
                </label>
                <select
                  id="status"
                  className="mt-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                >
                  <option value="">All Status</option>
                  <option value="active">Active</option>
                  <option value="inactive">Inactive</option>
                  <option value="new">New</option>
                </select>
              </div>
            </div>
            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 dark:bg-indigo-700 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none">
              Apply Filters
            </button>
          </div>
        </div>

        {/* Table Section */}
        <div className="shadow-md rounded my-6">
          <table className="w-full caption-bottom text-sm">
            <thead>
              <tr className="hover:bg-muted/50 data-[state=selected]:bg-muted border-b transition-colors">
                <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]"></th>
                <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Patient ID</th>
                <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Name</th>
                <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Date of Birth</th>
                <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Gender</th>
                <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Contact</th>
                <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Last Visit</th>
                <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Status</th>
                <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Insurance</th>
                <th className="text-foreground h-10 px-2 text-left align-middle font-medium whitespace-nowrap [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]">Actions</th>
              </tr>
            </thead>
            <tbody className="font-light">
              {patients.map((patient, index) => (
                <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-star text-yellow-500">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    </div>
                  </td>
                  <td className="p-2 align-middle whitespace-nowrap">
                    {patient.id}
                  </td>
                  <td className="p-2 align-middle whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="mr-2">
                        <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                      </div>
                      <span>{patient.name}</span>
                    </div>
                  </td>
                  <td className="p-2 align-middle whitespace-nowrap">
                    {patient.dob}
                  </td>
                  <td className="p-2 align-middle whitespace-nowrap">
                    {patient.gender}
                  </td>
                  <td className="p-2 align-middle whitespace-nowrap">
                    <div className="flex flex-col">
                      <span>{patient.phone}</span>
                      <span className="text-xs text-gray-500">{patient.email}</span>
                    </div>
                  </td>
                  <td className="p-2 align-middle whitespace-nowrap">
                    {patient.lastVisit}
                  </td>
                  <td className="p-2 align-middle whitespace-nowrap">
                    {patient.status === 'Active' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800 text-sm font-normal">
                        Active
                      </span>
                    )}
                    {patient.status === 'Inactive' && (
                      <span className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-red-500 bg-red-100/60 dark:bg-gray-800 text-sm font-normal">
                        Inactive
                      </span>
                    )}
                  </td>
                  <td className="p-2 align-middle whitespace-nowrap">
                    {patient.insurance}
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
                            <DialogTitle>Patient Record - {patient.name}</DialogTitle>
                            <DialogDescription>
                              Complete medical history and records for {patient.name}
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
                                        {patient.status === 'Active' ? (
                                          <span className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-emerald-500 bg-emerald-100/60 dark:bg-gray-800 text-sm font-normal">
                                            Active
                                          </span>
                                        ) : (
                                          <span className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 text-red-500 bg-red-100/60 dark:bg-gray-800 text-sm font-normal">
                                            Inactive
                                          </span>
                                        )}
                                      </div>
                                    </div>

                                    <div className="flex">
                                      <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                        ⌘ Date of Birth
                                      </div>
                                      <div className="mt-1">
                                        {patient.dob}
                                      </div>
                                    </div>

                                    <div className="flex">
                                      <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                        ⌘ Gender
                                      </div>
                                      <div className="mt-1">
                                        {patient.gender}
                                      </div>
                                    </div>

                                    <div className="flex">
                                      <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                        ⌘ Phone
                                      </div>
                                      <div className="mt-1">
                                        {patient.phone}
                                      </div>
                                    </div>

                                    <div className="flex">
                                      <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                        ⌘ Email
                                      </div>
                                      <div className="mt-1">
                                        {patient.email}
                                      </div>
                                    </div>
                                  </div>

                                  <div className="space-y-6">
                                    <div className="flex">
                                      <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                        ⌘ Insurance
                                      </div>
                                      <div className="mt-1">
                                        {patient.insurance}
                                      </div>
                                    </div>

                                    <div className="flex">
                                      <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                        ⌘ Last Visit
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
                                            {date ? format(date, "PPP") : <span>{patient.lastVisit}</span>}
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
                                        ⌘ Primary Physician
                                      </div>
                                      <div className="mr-2 flex">
                                        <img className="w-6 h-6 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                        Dr. Smith
                                      </div>
                                    </div>

                                    <div className="flex">
                                      <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                        ⌘ Patient Status
                                      </div>
                                      <Popover open={open} onOpenChange={setOpen}>
                                        <PopoverTrigger asChild>
                                          <Button variant="outline" className="w-[150px] justify-start">
                                            {selectedStatus ? <>{selectedStatus.label}</> : <>Active</>}
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
                                </div>
                                <Tabs defaultValue="medical" className="w-[100%] mt-5">
                                  <TabsList>
                                    <TabsTrigger value="medical">Medical History</TabsTrigger>
                                    <TabsTrigger value="prescriptions">Prescriptions</TabsTrigger>
                                    <TabsTrigger value="appointments">Appointments</TabsTrigger>
                                    <TabsTrigger value="documents">Documents</TabsTrigger>
                                  </TabsList>
                                  <TabsContent value="medical" className="mt-2 p-3">
                                    <div className="space-y-4">
                                      <div>
                                        <h3 className="font-medium">Allergies</h3>
                                        <p className="text-sm text-gray-600">Penicillin, Peanuts</p>
                                      </div>
                                      <div>
                                        <h3 className="font-medium">Conditions</h3>
                                        <p className="text-sm text-gray-600">Hypertension, Type 2 Diabetes</p>
                                      </div>
                                      <div>
                                        <h3 className="font-medium">Medications</h3>
                                        <p className="text-sm text-gray-600">Lisinopril 10mg daily, Metformin 500mg twice daily</p>
                                      </div>
                                      <div>
                                        <h3 className="font-medium">Notes</h3>
                                        <p className="text-sm text-gray-600">Patient reports occasional dizziness when standing up quickly. Advised to increase water intake and rise slowly.</p>
                                      </div>
                                    </div>
                                  </TabsContent>
                                  <TabsContent value="prescriptions" className="mt-2 p-3">
                                    <div className="space-y-4">
                                      <div className="border-b pb-2">
                                        <h3 className="font-medium">Lisinopril 10mg</h3>
                                        <p className="text-sm text-gray-600">Take 1 tablet by mouth daily for blood pressure</p>
                                        <p className="text-xs text-gray-500">Prescribed: 03/15/2025 | Refills: 3</p>
                                      </div>
                                      <div className="border-b pb-2">
                                        <h3 className="font-medium">Metformin 500mg</h3>
                                        <p className="text-sm text-gray-600">Take 1 tablet by mouth twice daily with meals for diabetes</p>
                                        <p className="text-xs text-gray-500">Prescribed: 03/15/2025 | Refills: 3</p>
                                      </div>
                                    </div>
                                  </TabsContent>
                                  <TabsContent value="appointments" className="mt-2 p-3">
                                    <div className="space-y-4">
                                      <div className="border-b pb-2">
                                        <h3 className="font-medium">Annual Physical</h3>
                                        <p className="text-sm text-gray-600">Scheduled: April 10, 2025 at 10:00 AM</p>
                                        <p className="text-xs text-gray-500">Dr. Smith - Confirmed</p>
                                      </div>
                                      <div className="border-b pb-2">
                                        <h3 className="font-medium">Follow-up Visit</h3>
                                        <p className="text-sm text-gray-600">Completed: March 15, 2025 at 2:30 PM</p>
                                        <p className="text-xs text-gray-500">Dr. Smith - Blood pressure improved</p>
                                      </div>
                                    </div>
                                  </TabsContent>
                                  <TabsContent value="documents" className="mt-2 p-3">
                                    <div className="space-y-2">
                                      <div className="flex items-center justify-between p-2 border rounded">
                                        <span className="text-sm">Consent Form.pdf</span>
                                        <Button variant="outline" size="sm">Download</Button>
                                      </div>
                                      <div className="flex items-center justify-between p-2 border rounded">
                                        <span className="text-sm">Lab Results 03-15-2025.pdf</span>
                                        <Button variant="outline" size="sm">Download</Button>
                                      </div>
                                      <div className="flex items-center justify-between p-2 border rounded">
                                        <span className="text-sm">Insurance Card.jpg</span>
                                        <Button variant="outline" size="sm">Download</Button>
                                      </div>
                                    </div>
                                  </TabsContent>
                                </Tabs>
                              </ScrollArea>
                            </div>
                            <div className="w-[30%] flex flex flex-col justify-between">
                              <ScrollArea className="h-[80%] w-[100%] p-4 rounded-md border">
                                <h2 className="font-semibold text-xl pr-3">Activity</h2>
                                <ol className="relative">
                                  <li className="mb-4 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 10, 2025</time>
                                    <h3 className="text-sm font-semibold text-gray-500 dark:text-white"> Last visit - Annual checkup</h3>
                                  </li>
                                  <li className="mb-4 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 15, 2025</time>
                                    <h3 className="text-sm font-semibold text-gray-500 dark:text-white"> Follow-up visit</h3>
                                  </li>
                                  <li className="mb-4 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 10, 2025</time>
                                    <h3 className="text-sm font-semibold text-gray-500 dark:text-white"> Lab tests ordered</h3>
                                  </li>
                                  <li className="mb-4 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">January 5, 2025</time>
                                    <h3 className="text-sm font-semibold text-gray-500 dark:text-white"> New prescription added</h3>
                                  </li>
                                  <li className="mb-4 ms-4">
                                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[.5px] border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">November 20, 2024</time>
                                    <h3 className="text-sm font-semibold text-gray-800 dark:text-white"> Dr. Smith<br></br>Note: Patient reports feeling better after medication adjustment. Blood pressure within normal range.</h3>
                                  </li>
                                </ol>
                              </ScrollArea>
                              <div className="grid w-full gap-1.5 mt-5">
                                <Label htmlFor="message">Medical Notes</Label>
                                <Textarea placeholder="Add medical notes here..." id="message" />
                                <Button className="mt-3">Save Notes</Button>
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
                            <AlertDialogTitle>Are you sure you want to delete this patient record?</AlertDialogTitle>
                            <AlertDialogDescription>
                              This action cannot be undone. All medical history and records for {patient.name} will be permanently removed.
                            </AlertDialogDescription>
                          </AlertDialogHeader>
                          <AlertDialogFooter>
                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                            <AlertDialogAction>Delete Patient</AlertDialogAction>
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

        {/* Pagination */}
        <div className="flex items-center justify-between rounded my-6 rounded-b-lg">
          <span className="text-sm text-gray-600 dark:text-gray-300">Showing 1 to 10 of {patients.length} patients</span>
          <div className="flex space-x-2">
            <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none">
              Previous
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none">
              1
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none">
              2
            </button>
            <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-200 dark:bg-gray-600 rounded hover:bg-gray-300 dark:hover:bg-gray-500 focus:outline-none">
              Next
            </button>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
