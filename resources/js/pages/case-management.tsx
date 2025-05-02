import * as React from "react"
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter, } from "@/components/ui/card";
import { TrendingDownIcon, TrendingUpIcon, PlusIcon } from "lucide-react";
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
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Case Management',
        href: '/case-management',
    },
];

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

const clients = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Smith" },
    { id: "3", name: "Michael Brown" },
    { id: "4", name: "Sophia Williams" },
];

const doctors = [
    { id: "1", name: "Dr. Smith" },
    { id: "2", name: "Dr. Johnson" },
    { id: "3", name: "Dr. Williams" },
];

const patients = [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Emily Smith" },
    { id: "3", name: "Lucas Brown" },
];

const departments = [
    { id: "1", name: "Design" },
    { id: "2", name: "Production" },
    { id: "3", name: "Quality Control" },
];

const users = [
    { id: "1", name: "Ryan Antonio" },
    { id: "2", name: "Sarah Johnson" },
    { id: "3", name: "Michael Brown" },
];

const mediaFiles = [
    { name: 'photo1.jpg', type: 'image', src: 'https://placehold.co/600x400' },
    { name: 'design.png', type: 'image', src: 'https://placehold.co/600x400' },
    { name: 'manual.pdf', type: 'pdf', src: 'https://placehold.co/600x400' },
    { name: 'model.glb', type: '3d', src: '/media/model.glb' },
    { name: 'photo2.jpg', type: 'image', src: 'https://placehold.co/600x400' },
    // Add more as needed
  ];
  
const getThumbnail = (file: { type: string; src: string }) => {
    if (file.type === 'image') return file.src;
    if (file.type === 'pdf') return 'https://placehold.co/600x400';
    if (file.type === '3d') return 'https://placehold.co/600x400';
    return 'https://placehold.co/600x400';
};

export default function CaseManagement() {
    const [open, setOpen] = React.useState(false)
    const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(null)
    const [date, setDate] = React.useState<Date>()
    const [isAddCaseDialogOpen, setIsAddCaseDialogOpen] = React.useState(false)
    const [newCaseData, setNewCaseData] = React.useState({
        title: '',
        description: '',
        client: '',
        doctor: '',
        patient: '',
        department: '',
        assignedTo: '',
        status: 'New',
        dueDate: new Date(),
        appointmentDate: new Date(),
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setNewCaseData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSelectChange = (name: string, value: string) => {
        setNewCaseData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleDateChange = (name: string, value: Date | undefined) => {
        if (value) {
            setNewCaseData(prev => ({
                ...prev,
                [name]: value
            }))
        }
    }

    const handleSubmitNewCase = (e: React.FormEvent) => {
        e.preventDefault()
        // Here you would typically send the data to your backend
        console.log('New case submitted:', newCaseData)
        // Reset form and close dialog
        setNewCaseData({
            title: '',
            description: '',
            client: '',
            doctor: '',
            patient: '',
            department: '',
            assignedTo: '',
            status: 'New',
            dueDate: new Date(),
            appointmentDate: new Date(),
        })
        setIsAddCaseDialogOpen(false)
    }

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Case Management" />

            <div className="p-4 space-y-4">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card className="@container/card m-0">
                        <CardHeader className="relative">
                            <CardDescription>Total Ongoing</CardDescription>
                            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                1,500
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
                                Ongoing this month <TrendingUpIcon className="size-4" />
                            </div>
                            <div className="text-muted-foreground">
                                Orders for the last 6 months
                            </div>
                        </CardFooter>
                    </Card>
                    <Card className="@container/card m-0">
                        <CardHeader className="relative">
                            <CardDescription>In Productions</CardDescription>
                            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                234
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
                            <CardDescription>Hold</CardDescription>
                            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                78
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
                                Strong orders retention <TrendingUpIcon className="size-4" />
                            </div>
                            <div className="text-muted-foreground">Exceed target date</div>
                        </CardFooter>
                    </Card>
                    <Card className="@container/card m-0">
                        <CardHeader className="relative">
                            <CardDescription>Completed</CardDescription>
                            <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                                4,567
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

                {/* Filter and Add New Case Section */}
                <div className="flex justify-between items-center my-6">
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
                            <label htmlFor="client" className="text-sm font-medium text-gray-700 dark:text-gray-300 px-5">
                                Client
                            </label>
                            <input
                                type="text"
                                id="client"
                                placeholder="Search client"
                                className="mt-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="reference" className="text-sm font-medium text-gray-700 dark:text-gray-300 px-5">
                                Reference
                            </label>
                            <input
                                type="text"
                                id="reference"
                                placeholder="Search reference"
                                className="mt-1 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:ring-indigo-500 focus:border-indigo-500 dark:bg-gray-700 dark:text-gray-300 dark:focus:ring-indigo-500 dark:focus:border-indigo-500"
                            />
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 dark:bg-indigo-700 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none">
                            Apply Filters
                        </button>
                        <Dialog open={isAddCaseDialogOpen} onOpenChange={setIsAddCaseDialogOpen}>
                            <DialogTrigger asChild>
                                <Button className="gap-2">
                                    <PlusIcon className="h-4 w-4" />
                                    Add New Case
                                </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[800px]">
                                <DialogHeader>
                                    <DialogTitle>Create New Case</DialogTitle>
                                    <DialogDescription>
                                        Fill in the details below to create a new case.
                                    </DialogDescription>
                                </DialogHeader>
                                <form onSubmit={handleSubmitNewCase}>
                                    <div className="grid gap-4 py-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="title">Case Title</Label>
                                                <Input
                                                    id="title"
                                                    name="title"
                                                    value={newCaseData.title}
                                                    onChange={handleInputChange}
                                                    placeholder="Enter case title"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="status">Status</Label>
                                                <Select
                                                    value={newCaseData.status}
                                                    onValueChange={(value) => handleSelectChange('status', value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select status" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        <SelectItem value="New">New</SelectItem>
                                                        <SelectItem value="InProduction">In Production</SelectItem>
                                                        <SelectItem value="Hold">Hold</SelectItem>
                                                        <SelectItem value="Completed">Completed</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label htmlFor="description">Description</Label>
                                            <Textarea
                                                id="description"
                                                name="description"
                                                value={newCaseData.description}
                                                onChange={handleInputChange}
                                                placeholder="Enter case description"
                                                rows={3}
                                            />
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>Client</Label>
                                                <Select
                                                    value={newCaseData.client}
                                                    onValueChange={(value) => handleSelectChange('client', value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select client" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {clients.map(client => (
                                                            <SelectItem key={client.id} value={client.id}>
                                                                {client.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Doctor</Label>
                                                <Select
                                                    value={newCaseData.doctor}
                                                    onValueChange={(value) => handleSelectChange('doctor', value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select doctor" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {doctors.map(doctor => (
                                                            <SelectItem key={doctor.id} value={doctor.id}>
                                                                {doctor.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>Patient</Label>
                                                <Select
                                                    value={newCaseData.patient}
                                                    onValueChange={(value) => handleSelectChange('patient', value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select patient" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {patients.map(patient => (
                                                            <SelectItem key={patient.id} value={patient.id}>
                                                                {patient.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Department</Label>
                                                <Select
                                                    value={newCaseData.department}
                                                    onValueChange={(value) => handleSelectChange('department', value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select department" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {departments.map(dept => (
                                                            <SelectItem key={dept.id} value={dept.id}>
                                                                {dept.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>Assigned To</Label>
                                                <Select
                                                    value={newCaseData.assignedTo}
                                                    onValueChange={(value) => handleSelectChange('assignedTo', value)}
                                                >
                                                    <SelectTrigger>
                                                        <SelectValue placeholder="Select user" />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                        {users.map(user => (
                                                            <SelectItem key={user.id} value={user.id}>
                                                                {user.name}
                                                            </SelectItem>
                                                        ))}
                                                    </SelectContent>
                                                </Select>
                                            </div>
                                            <div className="space-y-2">
                                                <Label>Due Date</Label>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full justify-start text-left font-normal",
                                                                !newCaseData.dueDate && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {newCaseData.dueDate ? format(newCaseData.dueDate, "PPP") : <span>Pick a date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        <Calendar
                                                            mode="single"
                                                            selected={newCaseData.dueDate}
                                                            onSelect={(date) => handleDateChange('dueDate', date)}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label>Appointment Date</Label>
                                                <Popover>
                                                    <PopoverTrigger asChild>
                                                        <Button
                                                            variant={"outline"}
                                                            className={cn(
                                                                "w-full justify-start text-left font-normal",
                                                                !newCaseData.appointmentDate && "text-muted-foreground"
                                                            )}
                                                        >
                                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                                            {newCaseData.appointmentDate ? format(newCaseData.appointmentDate, "PPP") : <span>Pick a date</span>}
                                                        </Button>
                                                    </PopoverTrigger>
                                                    <PopoverContent className="w-auto p-0">
                                                        <Calendar
                                                            mode="single"
                                                            selected={newCaseData.appointmentDate}
                                                            onSelect={(date) => handleDateChange('appointmentDate', date)}
                                                            initialFocus
                                                        />
                                                    </PopoverContent>
                                                </Popover>
                                            </div>
                                        </div>
                                    </div>
                                    <DialogFooter>
                                        <Button type="submit">Create Case</Button>
                                    </DialogFooter>
                                </form>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>

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
                                                <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                            </div>
                                            <span>{payment.client}</span>
                                        </div>
                                    </td>
                                    <td className="p-2 align-middle whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="mr-2">
                                                <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" />
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
                                            <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                        </div>
                                    </td>
                                    <td className="p-2 align-middle whitespace-nowrap">
                                        <div className="mr-2">
                                            <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg" />
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
                                                        <div className="w-[70%] py-4 pr-4 pt-0 pb-3">
                                                            <ScrollArea className="h-[83vh] w-[100%] ">
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
                                                                                <img className="w-6 h-6 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                                                                Client Name
                                                                            </div>
                                                                        </div>

                                                                        <div className="flex">
                                                                            <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                                                                ⌘ Doctor
                                                                            </div>
                                                                            <div className="mr-2 flex">
                                                                                <img className="w-6 h-6 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/1.jpg" />
                                                                                Doctor Name
                                                                            </div>
                                                                        </div>

                                                                        <div className="flex">
                                                                            <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">
                                                                                ⌘ Patient
                                                                            </div>
                                                                            <div className="mr-2 flex">
                                                                                <img className="w-6 h-6 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/1.jpg" />
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
                                                                        <TabsTrigger value="chat" className="relative">
                                                                            Chats
                                                                            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
                                                                                2
                                                                            </div>
                                                                        </TabsTrigger>                                                                    </TabsList>
                                                                    <TabsContent value="products" className="mt-2 p-3">
                                                                        <table className="w-full">
                                                                            <thead>
                                                                                <tr className="border-b">
                                                                                    <th className="text-left p-2">Product</th>
                                                                                    <th className="text-left p-2">Shade</th>
                                                                                    <th className="text-left p-2">Material</th>
                                                                                    <th className="text-right p-2">Units</th>
                                                                                    <th className="text-right p-2">Price</th>
                                                                                </tr>
                                                                            </thead>
                                                                            <tbody>
                                                                                <tr className="border-b">
                                                                                    <td className="p-2">Full Contour Zirconia Crown</td>
                                                                                    <td className="p-2">A2</td>
                                                                                    <td className="p-2">High Translucent Zirconia</td>
                                                                                    <td className="text-right p-2">2</td>
                                                                                    <td className="text-right p-2">$199.00</td>
                                                                                </tr>
                                                                                <tr className="border-b">
                                                                                    <td className="p-2">Porcelain Fused to Metal Crown</td>
                                                                                    <td className="p-2">A3</td>
                                                                                    <td className="p-2">High Noble Metal</td>
                                                                                    <td className="text-right p-2">1</td>
                                                                                    <td className="text-right p-2">$295.00</td>
                                                                                </tr>
                                                                                <tr className="border-b">
                                                                                    <td className="p-2">Custom Abutment</td>
                                                                                    <td className="p-2">-</td>
                                                                                    <td className="p-2">Titanium</td>
                                                                                    <td className="text-right p-2">1</td>
                                                                                    <td className="text-right p-2">$225.00</td>
                                                                                </tr>
                                                                            </tbody>
                                                                            <tfoot>
                                                                                <tr>
                                                                                    <td colSpan={4} className="text-right p-2 font-bold">Total:</td>
                                                                                    <td className="text-right p-2 font-bold">$719.00</td>
                                                                                </tr>
                                                                            </tfoot>
                                                                        </table>
                                                                    </TabsContent>
                                                                    <TabsContent value="file" className="mt-2 p-3">
                                                                        <div className="space-y-2">
                                                                            <div className="p-6 pl-0 pt-0">
                                                                                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4">
                                                                                    {mediaFiles.map((file, idx) => (
                                                                                    <div key={idx} className="bg-card text-card-foreground flex flex-col rounded-xl pb-4 shadow-sm">
                                                                                        <div className="aspect-square bg-gray-50 flex items-center justify-center overflow-hidden rounded">
                                                                                        <img
                                                                                            src={getThumbnail(file)}
                                                                                            alt={file.name}
                                                                                            className="object-cover w-full h-full"
                                                                                        />
                                                                                        </div>
                                                                                        <div className="text-sm text-gray-800 dark:text-white px-3 py-3 pb-0">{file.name}</div>
                                                                                        <Button
                                                                                            className="mt-3 text-[12px] px-1 py-1"
                                                                                        >
                                                                                            Download
                                                                                        </Button>
                                                                                        {file.name.toLowerCase().endsWith('.glb') && (
                                                                                            <Button
                                                                                                className="mt-3 text-[12px]"
                                                                                                onClick={() => window.open('/viewer', '_blank')}
                                                                                            >
                                                                                                3D view
                                                                                            </Button>
                                                                                        )}
                                                                                    </div>
                                                                                    ))}
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </TabsContent>
                                                                    <TabsContent value="task" className="mt-2 p-3">
                                                                        <div className="space-y-2">
                                                                            <div className="flex items-center gap-2 p-2 border rounded">
                                                                                <input type="checkbox" checked className="rounded" />
                                                                                <span>Scan and Design - Due Apr 12</span>
                                                                                <span className="ml-auto text-green-500">Completed</span>
                                                                            </div>
                                                                            <div className="flex items-center gap-2 p-2 border rounded">
                                                                                <input type="checkbox" className="rounded" />
                                                                                <span>Mill Crowns - Due Apr 13</span>
                                                                                <span className="ml-auto text-yellow-500">In Progress</span>
                                                                            </div>
                                                                            <div className="flex items-center gap-2 p-2 border rounded">
                                                                                <input type="checkbox" className="rounded" />
                                                                                <span>Quality Check - Due Apr 14</span>
                                                                                <span className="ml-auto text-gray-500">Pending</span>
                                                                            </div>
                                                                        </div>
                                                                    </TabsContent>
                                                                    <TabsContent value="chat" className="mt-2 p-3">
                                                                        <div className="flex flex-col space-y-4">
                                                                            <ScrollArea className="h-[80%] w-[100%] p-4 rounded-md border ">
                                                                                {/* Message from other user */}
                                                                                <div className="flex items-start">
                                                                                    <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-8 h-8 rounded-full mr-3" />
                                                                                    <div className="flex flex-col">
                                                                                        <div className="flex items-center space-x-2">
                                                                                            <span className="font-medium text-sm dark:text-gray-200">Ryan Antonio</span>
                                                                                            <span className="text-xs text-gray-500 dark:text-gray-400">10:23 AM</span>
                                                                                        </div>
                                                                                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mt-1 max-w-md">
                                                                                            <p className="text-sm dark:text-gray-300">Hi, I've reviewed the design and made some adjustments to the crown specifications. Can you take a look?</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>

                                                                                {/* Message from current user */}
                                                                                <div className="flex items-start justify-end">
                                                                                    <div className="flex flex-col items-end">
                                                                                        <div className="flex items-center space-x-2">
                                                                                            <span className="text-xs text-gray-500 dark:text-gray-400">10:25 AM</span>
                                                                                            <span className="font-medium text-sm dark:text-gray-200">You</span>
                                                                                        </div>
                                                                                        <div className="bg-blue-500 text-white rounded-lg p-3 mt-1 max-w-md dark:bg-blue-600">
                                                                                            <p className="text-sm">Sure, I'll check it right away. The previous measurements were slightly off.</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <img src="https://randomuser.me/api/portraits/men/2.jpg" className="w-8 h-8 rounded-full ml-3" />
                                                                                </div>

                                                                                {/* Message from other user with file attachment */}
                                                                                <div className="flex items-start">
                                                                                    <img src="https://randomuser.me/api/portraits/men/1.jpg" className="w-8 h-8 rounded-full mr-3" />
                                                                                    <div className="flex flex-col">
                                                                                        <div className="flex items-center space-x-2">
                                                                                            <span className="font-medium text-sm dark:text-gray-200">Ryan Antonio</span>
                                                                                            <span className="text-xs text-gray-500 dark:text-gray-400">10:30 AM</span>
                                                                                        </div>
                                                                                        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mt-1 max-w-md">
                                                                                            <p className="text-sm mb-2 dark:text-gray-300">I've attached the updated design files here.</p>
                                                                                            <div className="flex items-center bg-white dark:bg-gray-700 p-2 rounded border dark:border-gray-600">
                                                                                                <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                                                                </svg>
                                                                                                <span className="text-sm text-blue-500 dark:text-blue-400">updated_design.pdf</span>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </ScrollArea>

                                                                            {/* Chat input */}
                                                                            <div className="mt-4 border-t dark:border-gray-700 pt-4">
                                                                                <form onSubmit={(e) => {
                                                                                    e.preventDefault();
                                                                                    // Add submit logic here
                                                                                }} className="flex flex-col space-y-2">
                                                                                    <div className="flex items-center space-x-2">
                                                                                        <input
                                                                                            type="text"
                                                                                            placeholder="Type a message..."
                                                                                            className="flex-1 p-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
                                                                                        />
                                                                                        <button type="submit" className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700">
                                                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                                                                            </svg>
                                                                                        </button>
                                                                                    </div>
                                                                                    <div className="flex items-center space-x-2">
                                                                                        <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                                                                            <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                                                                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                                                                            </svg>
                                                                                            <span className="text-sm text-gray-500 dark:text-gray-400">Attach File</span>
                                                                                        </label>
                                                                                        <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
                                                                                            <input type="file" className="hidden" accept="image/*" />
                                                                                            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                                                            </svg>
                                                                                            <span className="text-sm text-gray-500 dark:text-gray-400">Upload Image</span>
                                                                                        </label>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </TabsContent>                                                                </Tabs>
                                                            </ScrollArea>
                                                        </div>
                                                        <div className="w-[30%]  flex flex flex-col justify-between justify-start">
                                                            <ScrollArea className="h-[60vh] w-[100%] p-4 rounded-md border">
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
                {/* Pagination */}
                <div className="flex items-center justify-between rounded my-6rounded-b-lg">
                    <span className="text-sm text-gray-600 dark:text-gray-300">Showing 1 to 10 of 50 results</span>
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
                            3
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
