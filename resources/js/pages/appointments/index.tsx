import * as React from "react"
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { TrendingDownIcon, TrendingUpIcon, ClockIcon, CheckCircleIcon, XCircleIcon, CalendarIcon, PlusIcon } from "lucide-react";
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
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Appointments',
        href: '/appointments',
    },
];

const appointments = [
    {
        id: 'APT-001',
        patient: {
            name: 'John Doe',
            id: 'P-001',
            avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
        },
        doctor: {
            name: 'Dr. Smith',
            specialty: 'Cardiology',
            avatar: 'https://randomuser.me/api/portraits/men/10.jpg'
        },
        date: '2025-05-15',
        time: '09:30 AM',
        duration: 30,
        type: 'Consultation',
        status: 'confirmed',
        reason: 'Annual checkup',
        notes: 'Patient has history of hypertension'
    },
    {
        id: 'APT-002',
        patient: {
            name: 'Jane Smith',
            id: 'P-002',
            avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
        },
        doctor: {
            name: 'Dr. Johnson',
            specialty: 'Dermatology',
            avatar: 'https://randomuser.me/api/portraits/women/15.jpg'
        },
        date: '2025-05-15',
        time: '10:15 AM',
        duration: 45,
        type: 'Follow-up',
        status: 'confirmed',
        reason: 'Skin condition follow-up',
        notes: 'Prescribed topical cream last visit'
    },
    {
        id: 'APT-003',
        patient: {
            name: 'Michael Brown',
            id: 'P-003',
            avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
        },
        doctor: {
            name: 'Dr. Lee',
            specialty: 'Orthopedics',
            avatar: 'https://randomuser.me/api/portraits/men/12.jpg'
        },
        date: '2025-05-16',
        time: '02:00 PM',
        duration: 60,
        type: 'Procedure',
        status: 'completed',
        reason: 'Knee injection',
        notes: 'Allergic to latex'
    },
    {
        id: 'APT-004',
        patient: {
            name: 'Sophia Williams',
            id: 'P-004',
            avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
        },
        doctor: {
            name: 'Dr. Patel',
            specialty: 'Pediatrics',
            avatar: 'https://randomuser.me/api/portraits/women/18.jpg'
        },
        date: '2025-05-17',
        time: '11:00 AM',
        duration: 30,
        type: 'Vaccination',
        status: 'scheduled',
        reason: 'Flu vaccine',
        notes: 'New patient'
    },
    {
        id: 'APT-005',
        patient: {
            name: 'David Johnson',
            id: 'P-005',
            avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
        },
        doctor: {
            name: 'Dr. Garcia',
            specialty: 'Dentistry',
            avatar: 'https://randomuser.me/api/portraits/women/20.jpg'
        },
        date: '2025-05-17',
        time: '03:30 PM',
        duration: 45,
        type: 'Cleaning',
        status: 'cancelled',
        reason: 'Dental cleaning',
        notes: 'Needs X-rays'
    },
];

const statuses = [
    { value: 'scheduled', label: 'Scheduled' },
    { value: 'confirmed', label: 'Confirmed' },
    { value: 'completed', label: 'Completed' },
    { value: 'cancelled', label: 'Cancelled' },
    { value: 'no-show', label: 'No Show' }
];

const appointmentTypes = [
    'Consultation',
    'Follow-up',
    'Procedure',
    'Vaccination',
    'Cleaning',
    'Emergency',
    'Physical',
    'Lab Test'
];

export default function Appointments() {
    const [date, setDate] = React.useState<Date>()
    const [selectedStatus, setSelectedStatus] = React.useState('all')
    const [selectedType, setSelectedType] = React.useState('all')
    const [openNewAppointment, setOpenNewAppointment] = React.useState(false)

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Appointments" />

            <div className="p-4 space-y-4">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="relative">
                            <CardDescription>Total Appointments</CardDescription>
                            <CardTitle className="text-2xl font-semibold tabular-nums">
                                1,245
                            </CardTitle>
                            <div className="absolute right-4 top-4">
                                <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                                    <TrendingUpIcon className="size-3" />
                                    +12.5%
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardFooter className="text-sm text-muted-foreground">
                            This month
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader className="relative">
                            <CardDescription>Scheduled</CardDescription>
                            <CardTitle className="text-2xl font-semibold tabular-nums">
                                42
                            </CardTitle>
                            <div className="absolute right-4 top-4">
                                <ClockIcon className="size-4 text-blue-500" />
                            </div>
                        </CardHeader>
                        <CardFooter className="text-sm text-muted-foreground">
                            Upcoming appointments
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader className="relative">
                            <CardDescription>Completed</CardDescription>
                            <CardTitle className="text-2xl font-semibold tabular-nums">
                                1,156
                            </CardTitle>
                            <div className="absolute right-4 top-4">
                                <CheckCircleIcon className="size-4 text-green-500" />
                            </div>
                        </CardHeader>
                        <CardFooter className="text-sm text-muted-foreground">
                            This year
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader className="relative">
                            <CardDescription>Cancelled</CardDescription>
                            <CardTitle className="text-2xl font-semibold tabular-nums">
                                47
                            </CardTitle>
                            <div className="absolute right-4 top-4">
                                <XCircleIcon className="size-4 text-red-500" />
                            </div>
                        </CardHeader>
                        <CardFooter className="text-sm text-muted-foreground">
                            Last 30 days
                        </CardFooter>
                    </Card>
                </div>

                {/* Controls and Filters */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant="outline"
                                    className="w-full md:w-[240px] justify-start text-left font-normal"
                                >
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
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

                        <Select value={selectedStatus} onValueChange={setSelectedStatus}>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="Status" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Statuses</SelectItem>
                                {statuses.map((status) => (
                                    <SelectItem key={status.value} value={status.value}>
                                        {status.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select value={selectedType} onValueChange={setSelectedType}>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="Type" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Types</SelectItem>
                                {appointmentTypes.map((type) => (
                                    <SelectItem key={type} value={type.toLowerCase()}>
                                        {type}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <Dialog open={openNewAppointment} onOpenChange={setOpenNewAppointment}>
                        <DialogTrigger asChild>
                            <Button className="w-full md:w-auto">
                                <PlusIcon className="mr-2 h-4 w-4" />
                                New Appointment
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                                <DialogTitle>Schedule New Appointment</DialogTitle>
                                <DialogDescription>
                                    Fill in the details to create a new appointment.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="patient">Patient</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select patient" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {appointments.map((appt) => (
                                                    <SelectItem key={appt.patient.id} value={appt.patient.id}>
                                                        {appt.patient.name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="doctor">Doctor</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select doctor" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {Array.from(new Set(appointments.map(a => a.doctor.name))).map(name => (
                                                    <SelectItem key={name} value={name}>
                                                        {name}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label>Date</Label>
                                        <Popover>
                                            <PopoverTrigger asChild>
                                                <Button
                                                    variant="outline"
                                                    className="w-full justify-start text-left font-normal"
                                                >
                                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                                    {date ? format(date, "PPP") : <span>Pick a date</span>}
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
                                    <div className="space-y-2">
                                        <Label htmlFor="time">Time</Label>
                                        <Input id="time" type="time" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="type">Type</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select type" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {appointmentTypes.map((type) => (
                                                    <SelectItem key={type} value={type.toLowerCase()}>
                                                        {type}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="duration">Duration (minutes)</Label>
                                        <Input id="duration" type="number" defaultValue="30" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="reason">Reason</Label>
                                    <Input id="reason" placeholder="Reason for appointment" />
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="notes">Notes</Label>
                                    <Textarea id="notes" placeholder="Additional notes..." />
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Schedule Appointment</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Appointments Table */}
                <div className="rounded-md border">
                    <div className="relative w-full overflow-auto">
                        <table className="w-full caption-bottom text-sm">
                            <thead className="[&_tr]:border-b">
                                <tr className="border-b transition-colors hover:bg-muted/50">
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Patient</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Doctor</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Date & Time</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Type</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Status</th>
                                    <th className="h-12 px-4 text-left align-middle font-medium text-muted-foreground">Reason</th>
                                    <th className="h-12 px-4 text-right align-middle font-medium text-muted-foreground">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="[&_tr:last-child]:border-0">
                                {appointments.map((appointment) => (
                                    <tr key={appointment.id} className="border-b transition-colors hover:bg-muted/50">
                                        <td className="p-4 align-middle">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={appointment.patient.avatar}
                                                    alt={appointment.patient.name}
                                                    className="h-10 w-10 rounded-full"
                                                />
                                                <div>
                                                    <div className="font-medium">{appointment.patient.name}</div>
                                                    <div className="text-sm text-muted-foreground">{appointment.patient.id}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 align-middle">
                                            <div className="flex items-center gap-3">
                                                <img
                                                    src={appointment.doctor.avatar}
                                                    alt={appointment.doctor.name}
                                                    className="h-10 w-10 rounded-full"
                                                />
                                                <div>
                                                    <div className="font-medium">{appointment.doctor.name}</div>
                                                    <div className="text-sm text-muted-foreground">{appointment.doctor.specialty}</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="p-4 align-middle">
                                            <div className="font-medium">{format(new Date(appointment.date), "MMM d, yyyy")}</div>
                                            <div className="text-sm text-muted-foreground">{appointment.time}</div>
                                        </td>
                                        <td className="p-4 align-middle">
                                            <Badge variant="outline">{appointment.type}</Badge>
                                        </td>
                                        <td className="p-4 align-middle">
                                            {appointment.status === 'scheduled' && (
                                                <Badge variant="secondary" className="gap-1">
                                                    <ClockIcon className="h-3 w-3" />
                                                    Scheduled
                                                </Badge>
                                            )}
                                            {appointment.status === 'confirmed' && (
                                                <Badge className="gap-1 bg-blue-500 hover:bg-blue-600">
                                                    <CheckCircleIcon className="h-3 w-3" />
                                                    Confirmed
                                                </Badge>
                                            )}
                                            {appointment.status === 'completed' && (
                                                <Badge className="gap-1 bg-green-500 hover:bg-green-600">
                                                    <CheckCircleIcon className="h-3 w-3" />
                                                    Completed
                                                </Badge>
                                            )}
                                            {appointment.status === 'cancelled' && (
                                                <Badge variant="destructive" className="gap-1">
                                                    <XCircleIcon className="h-3 w-3" />
                                                    Cancelled
                                                </Badge>
                                            )}
                                        </td>
                                        <td className="p-4 align-middle">
                                            <div className="line-clamp-2 max-w-[200px]">{appointment.reason}</div>
                                        </td>
                                        <td className="p-4 align-middle text-right">
                                            <div className="flex justify-end gap-2">
                                                <Dialog>
                                                    <DialogTrigger asChild>
                                                        <Button variant="outline" size="sm">
                                                            View
                                                        </Button>
                                                    </DialogTrigger>
                                                    <DialogContent className="sm:max-w-[800px]">
                                                        <DialogHeader>
                                                            <DialogTitle>Appointment Details</DialogTitle>
                                                            <DialogDescription>
                                                                {appointment.id} - {appointment.type}
                                                            </DialogDescription>
                                                        </DialogHeader>
                                                        <div className="grid gap-4 py-4">
                                                            <div className="grid grid-cols-2 gap-6">
                                                                <div className="space-y-4">
                                                                    <div>
                                                                        <h3 className="font-medium mb-2">Patient Information</h3>
                                                                        <div className="flex items-center gap-3">
                                                                            <img
                                                                                src={appointment.patient.avatar}
                                                                                alt={appointment.patient.name}
                                                                                className="h-12 w-12 rounded-full"
                                                                            />
                                                                            <div>
                                                                                <div className="font-medium">{appointment.patient.name}</div>
                                                                                <div className="text-sm text-muted-foreground">ID: {appointment.patient.id}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div>
                                                                        <h3 className="font-medium mb-2">Appointment Details</h3>
                                                                        <div className="space-y-2">
                                                                            <div className="flex justify-between">
                                                                                <span className="text-sm text-muted-foreground">Date:</span>
                                                                                <span>{format(new Date(appointment.date), "MMMM d, yyyy")}</span>
                                                                            </div>
                                                                            <div className="flex justify-between">
                                                                                <span className="text-sm text-muted-foreground">Time:</span>
                                                                                <span>{appointment.time}</span>
                                                                            </div>
                                                                            <div className="flex justify-between">
                                                                                <span className="text-sm text-muted-foreground">Duration:</span>
                                                                                <span>{appointment.duration} minutes</span>
                                                                            </div>
                                                                            <div className="flex justify-between">
                                                                                <span className="text-sm text-muted-foreground">Type:</span>
                                                                                <span>{appointment.type}</span>
                                                                            </div>
                                                                            <div className="flex justify-between">
                                                                                <span className="text-sm text-muted-foreground">Status:</span>
                                                                                <span>
                                                                                    {appointment.status === 'scheduled' && (
                                                                                        <Badge variant="secondary">Scheduled</Badge>
                                                                                    )}
                                                                                    {appointment.status === 'confirmed' && (
                                                                                        <Badge className="bg-blue-500 hover:bg-blue-600">Confirmed</Badge>
                                                                                    )}
                                                                                    {appointment.status === 'completed' && (
                                                                                        <Badge className="bg-green-500 hover:bg-green-600">Completed</Badge>
                                                                                    )}
                                                                                    {appointment.status === 'cancelled' && (
                                                                                        <Badge variant="destructive">Cancelled</Badge>
                                                                                    )}
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                                <div className="space-y-4">
                                                                    <div>
                                                                        <h3 className="font-medium mb-2">Doctor Information</h3>
                                                                        <div className="flex items-center gap-3">
                                                                            <img
                                                                                src={appointment.doctor.avatar}
                                                                                alt={appointment.doctor.name}
                                                                                className="h-12 w-12 rounded-full"
                                                                            />
                                                                            <div>
                                                                                <div className="font-medium">{appointment.doctor.name}</div>
                                                                                <div className="text-sm text-muted-foreground">{appointment.doctor.specialty}</div>
                                                                            </div>
                                                                        </div>
                                                                    </div>

                                                                    <div>
                                                                        <h3 className="font-medium mb-2">Reason & Notes</h3>
                                                                        <div className="space-y-3">
                                                                            <div>
                                                                                <Label>Reason for visit</Label>
                                                                                <p className="text-sm mt-1">{appointment.reason}</p>
                                                                            </div>
                                                                            <div>
                                                                                <Label>Notes</Label>
                                                                                <p className="text-sm mt-1">{appointment.notes}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div className="border-t pt-4">
                                                                <h3 className="font-medium mb-3">Actions</h3>
                                                                <div className="flex gap-2">
                                                                    {appointment.status === 'scheduled' && (
                                                                        <>
                                                                            <Button size="sm">Confirm</Button>
                                                                            <Button variant="secondary" size="sm">
                                                                                Reschedule
                                                                            </Button>
                                                                        </>
                                                                    )}
                                                                    {appointment.status === 'confirmed' && (
                                                                        <Button size="sm">Mark as Complete</Button>
                                                                    )}
                                                                    {appointment.status !== 'cancelled' && (
                                                                        <Button variant="destructive" size="sm">
                                                                            Cancel Appointment
                                                                        </Button>
                                                                    )}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </DialogContent>
                                                </Dialog>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between px-2">
                    <div className="text-sm text-muted-foreground">
                        Showing <strong>1-{appointments.length}</strong> of <strong>{appointments.length}</strong> appointments
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                            Previous
                        </Button>
                        <Button variant="outline" size="sm">
                            Next
                        </Button>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
