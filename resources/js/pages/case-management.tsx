import * as React from "react";
import { useState } from "react";
import AppLayout from "@/layouts/app-layout";
import { type BreadcrumbItem } from "@/types";
import { Head } from "@inertiajs/react";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ActivityLog from "@/components/case/activity-log";
import SummaryCard from "@/components/general/summary-card";
import CaseProductsTab from "@/components/case/case-tab/case-product-tab";
import CaseFilesTab from "@/components/case/case-tab/case-files-tab";
import CaseTasksTab from "@/components/case/case-tab/case-task-tab";
import CaseDetails from "@/components/case/case-detail";
import Toolbar from "@/components/case/case-toolbar";
import CasePageContent from "@/components/case/case-main-tab/casedetail-tab";
import { ChatBox } from "@/components/case/case-main-tab/casechat-tab";
import { ChatBoxSupplier } from "@/components/case/case-main-tab/casechat-supplier-tab";
import Pagination from "@/components/general/pagination";
import DeleteAlertDialog from "@/components/general/delete-alert";
import Viewer from "@/components/general/3d-viewer";
import { Status, Tasks } from "@/types/index";


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

    const handleDateChange = (name: string, date: Date | null) => {
        setNewCaseData((prevData) => ({
          ...prevData,
          [name]: date,
        }));
    };

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
        

    //Activity Log Data
    const activityData = [
        {
        date: "April 10, 2022",
        message: "Super admin create this case",
        },
        {
        date: "April 10, 2022",
        message: "Assign to Ryan Antonio",
        },
        {
        date: "April 10, 2022",
        message: "Department waiting design approval",
        },
        {
        date: "April 10, 2022",
        message: "Delivery method set Other",
        },
        {
        date: "April 11, 2022",
        message: `Ryan Antonio\nComment: Lorem ipsum dolor sit amet...`,
        },
    ]
        
        // Initial product data for the "Products & Services" tab
    const productList = [
        {
            id: 1,
            name: "Full Contour Zirconia Crown",
            shade: "A2",
            material: "High Translucent Zirconia",
            units: 2,
            price: 199.00,
        },
        {
            id: 2,
            name: "Porcelain Fused to Metal Crown",
            shade: "A3",
            material: "High Noble Metal",
            units: 1,
            price: 295.00,
        },
        {
            id: 3,
            name: "Custom Abutment",
            shade: "-",
            material: "Titanium",
            units: 1,
            price: 225.00,
        },
    ];
        
        
    const tasks = [
        { label: "Scan and Design", due: "Apr 12", status: "completed", checked: true },
        { label: "Mill Crowns", due: "Apr 13", status: "in-progress", checked: false },
        { label: "Quality Check", due: "Apr 14", status: "pending", checked: false },
    ] as const satisfies Tasks[];

    // Pagination
    const [page, setPage] = useState(1)
    const resultsPerPage = 10
    const totalItems = 50
    const totalPages = Math.ceil(totalItems / resultsPerPage)
    const handlePageChange = (newPage: number) => {
        setPage(newPage)
        // trigger data fetch or filtering logic here
    }

    const status = "In Production"
    const orderedDate = new Date("2025-04-01")
    const dueDate = new Date("2025-04-10")
    const appointmentDate = new Date("2025-04-15")
    const clientName = "John Doe"
    const doctorName = "Dr. Smith"
    const patientName = "Jane Doe"
    const assignTo = "Ryan Antonio"
    const department = "Waiting Design Approval"


    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Case Management" />

            <div className="p-4 space-y-4">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <SummaryCard
                        title="Total Ongoing"
                        value="1,500"
                        description="Total Ongoing"
                        trendLabel="+12.5%"
                        footerLabel="Ongoing this month"
                        footerSubLabel="Orders for the last 6 months"
                        icon={<TrendingUpIcon className="size-3" />}
                        trendDirection="up"
                    />
                    <SummaryCard
                        title="In Productions"
                        value="234"
                        description="In Productions"
                        trendLabel="-20%"
                        footerLabel="Down 20% this period"
                        footerSubLabel="Acquisition needs attention"
                        icon={<TrendingDownIcon className="size-3" />}
                        trendDirection="down"
                    />
                    <SummaryCard
                        title="Hold"
                        value="78"
                        description="Hold"
                        trendLabel="+12.5%"
                        footerLabel="Strong orders retention"
                        footerSubLabel="Exceed target date"
                        icon={<TrendingUpIcon className="size-3" />}
                        trendDirection="up"
                    />
                    <SummaryCard
                        title="Completed"
                        value="4,567"
                        description="Completed"
                        trendLabel="+4.5%"
                        footerLabel="Steady performance"
                        footerSubLabel="Meets growth projections"
                        icon={<TrendingUpIcon className="size-3" />}
                        trendDirection="up"
                    />
                </div>

                {/* Filter and Add New Case Section */}
                <Toolbar
                    isAddCaseDialogOpen={isAddCaseDialogOpen}
                    setIsAddCaseDialogOpen={setIsAddCaseDialogOpen}
                    newCaseData={newCaseData}
                    handleInputChange={handleInputChange}
                    handleSelectChange={handleSelectChange}
                    handleDateChange={handleDateChange}
                    clients={clients}
                    doctors={doctors}
                    patients={patients}
                    departments={departments}
                    users={users}
                    handleSubmitNewCase={handleSubmitNewCase}
                />

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
                                                    <Tabs defaultValue="casedetail" className="w-[100%]">
                                                        <TabsList className="absolute flex flex-col items-center right-[-5%] h-auto right-[-2%] rounded-none bg-background">
                                                            <TabsTrigger value="casedetail">
                                                                <svg className="size-5 text-gray-500 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 6h8M8 12h5M4 20h16a2 2 0 002-2V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                                                </svg>
                                                            </TabsTrigger>
                                                            <TabsTrigger value="casechat">
                                                                <svg className="size-5 text-gray-500 dark:text-gray-100" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M4 4h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2z"/>
                                                                </svg>
                                                            </TabsTrigger>
                                                            <TabsTrigger value="casechatsupplier">
                                                                <svg className="size-5 text-gray-500 dark:text-gray-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 21h18M5 21V9a2 2 0 012-2h2a2 2 0 012 2v12M13 21V5a2 2 0 012-2h2a2 2 0 012 2v16" />
                                                                </svg>
                                                            </TabsTrigger>
                                                        </TabsList>
                                                        <TabsContent value="casedetail">
                                                            <CasePageContent 
                                                                status={status}
                                                                orderedDate={orderedDate}
                                                                dueDate={dueDate}
                                                                appointmentDate={appointmentDate}
                                                                clientName={clientName}
                                                                doctorName={doctorName}
                                                                patientName={patientName}
                                                                assignTo={assignTo}
                                                                department={department}
                                                                selectedStatus={selectedStatus}
                                                                statuses={statuses}
                                                                productList={productList}
                                                                mediaFiles={mediaFiles}
                                                                tasks={tasks}
                                                                activityData={activityData}
                                                                getThumbnail={getThumbnail}
                                                            />
                                                        </TabsContent>
                                                        <TabsContent value="casechat"> <ChatBox /> </TabsContent>
                                                        <TabsContent value="casechatsupplier"> <ChatBoxSupplier /> </TabsContent>
                                                    </Tabs>
                                                </DialogContent>
                                            </Dialog>
                                            <DeleteAlertDialog 
                                                title="Delete Case #12345"
                                                description="Are you sure you want to delete this case? This action cannot be undone." 
                                            />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {/* Pagination */}
                <Pagination
                    currentPage={page}
                    totalPages={totalPages}
                    perPage={resultsPerPage}
                    totalResults={totalItems}
                    onPageChange={handlePageChange}
                />
            </div>
        </AppLayout>
    );
}
