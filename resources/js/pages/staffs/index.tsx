import * as React from "react"
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import {
  UsersIcon, UserPlusIcon, UserXIcon,
  TrendingUpIcon, ClockIcon, CheckCircleIcon,
  BadgeCheckIcon, BadgeHelpIcon, CalendarIcon,
  PlusIcon, DownloadIcon, UploadIcon
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
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
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Staff Management',
    href: '/staff-management',
  },
];

// Sample employee data
const activeEmployees = [
  {
    id: 'EMP-001',
    name: 'Alex Johnson',
    role: 'Product Designer',
    department: 'Design',
    email: 'alex@prosmile.com',
    hireDate: '2023-01-15',
    status: 'active',
    projects: ['Dental Crowns', 'Whitening Kits'],
    avatar: 'https://randomuser.me/api/portraits/men/1.jpg'
  },
  {
    id: 'EMP-002',
    name: 'Sarah Williams',
    role: 'Sales Manager',
    department: 'Sales',
    email: 'sarah@prosmile.com',
    hireDate: '2022-05-20',
    status: 'active',
    projects: ['Client Relations', 'New Markets'],
    avatar: 'https://randomuser.me/api/portraits/women/1.jpg'
  },
  {
    id: 'EMP-003',
    name: 'James Wilson',
    role: 'Marketing Lead',
    department: 'Marketing',
    email: 'james@prosmile.com',
    hireDate: '2023-03-10',
    status: 'active',
    projects: ['Brand Refresh', 'Social Media Campaign'],
    avatar: 'https://randomuser.me/api/portraits/men/3.jpg'
  },
  {
    id: 'EMP-004',
    name: 'Maria Garcia',
    role: 'HR Manager',
    department: 'HR',
    email: 'maria@prosmile.com',
    hireDate: '2022-08-15',
    status: 'active',
    projects: ['Employee Wellness', 'Recruitment'],
    avatar: 'https://randomuser.me/api/portraits/women/3.jpg'
  }
];

const onboardingEmployees = [
  {
    id: 'EMP-101',
    name: 'Michael Brown',
    role: 'Junior Designer',
    department: 'Design',
    email: 'michael@prosmile.com',
    startDate: '2025-06-01',
    status: 'onboarding',
    progress: 65,
    tasks: [
      { name: 'Paperwork', completed: true },
      { name: 'Equipment Setup', completed: true },
      { name: 'Training', completed: false },
      { name: 'Mentor Assignment', completed: false }
    ],
    avatar: 'https://randomuser.me/api/portraits/men/2.jpg'
  },
  {
    id: 'EMP-102',
    name: 'Lisa Chen',
    role: 'Financial Analyst',
    department: 'Finance',
    email: 'lisa@prosmile.com',
    startDate: '2025-05-15',
    status: 'onboarding',
    progress: 35,
    tasks: [
      { name: 'Paperwork', completed: true },
      { name: 'System Access', completed: false },
      { name: 'Department Orientation', completed: false },
      { name: 'Training Schedule', completed: false }
    ],
    avatar: 'https://randomuser.me/api/portraits/women/4.jpg'
  },
  {
    id: 'EMP-103',
    name: 'David Kim',
    role: 'Operations Coordinator',
    department: 'Operations',
    email: 'david@prosmile.com',
    startDate: '2025-05-20',
    status: 'onboarding',
    progress: 80,
    tasks: [
      { name: 'Paperwork', completed: true },
      { name: 'Equipment Setup', completed: true },
      { name: 'Safety Training', completed: true },
      { name: 'Team Introduction', completed: false }
    ],
    avatar: 'https://randomuser.me/api/portraits/men/4.jpg'
  }
];

const offboardingEmployees = [
  {
    id: 'EMP-201',
    name: 'Emily Davis',
    role: 'Sales Representative',
    department: 'Sales',
    email: 'emily@prosmile.com',
    endDate: '2025-05-30',
    status: 'offboarding',
    reason: 'Resignation',
    tasks: [
      { name: 'Exit Interview', completed: false },
      { name: 'Equipment Return', completed: false },
      { name: 'Access Revocation', completed: true }
    ],
    avatar: 'https://randomuser.me/api/portraits/women/2.jpg'
  },
  {
    id: 'EMP-202',
    name: 'Robert Taylor',
    role: 'Marketing Specialist',
    department: 'Marketing',
    email: 'robert@prosmile.com',
    endDate: '2025-06-15',
    status: 'offboarding',
    reason: 'Career Change',
    tasks: [
      { name: 'Knowledge Transfer', completed: true },
      { name: 'Project Handover', completed: false },
      { name: 'Exit Documentation', completed: false }
    ],
    avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
  },
  {
    id: 'EMP-203',
    name: 'Amanda White',
    role: 'HR Coordinator',
    department: 'HR',
    email: 'amanda@prosmile.com',
    endDate: '2025-05-25',
    status: 'offboarding',
    reason: 'Relocation',
    tasks: [
      { name: 'Benefits Review', completed: true },
      { name: 'Final Payroll', completed: true },
      { name: 'System Access Removal', completed: false }
    ],
    avatar: 'https://randomuser.me/api/portraits/women/5.jpg'
  }
];

const departments = ['Design', 'Sales', 'Operations', 'HR', 'Finance', 'Marketing'];
const roles = {
  'Design': ['Product Designer', 'Junior Designer', 'Design Lead'],
  'Sales': ['Sales Manager', 'Sales Representative', 'Account Executive'],
  // ... other departments
};

export default function StaffManagement() {
  const [date, setDate] = React.useState<Date>()
  const [activeTab, setActiveTab] = React.useState('active')
  const [openNewEmployee, setOpenNewEmployee] = React.useState(false)
  const [openOnboardingTask, setOpenOnboardingTask] = React.useState(false)
  const [selectedDepartment, setSelectedDepartment] = React.useState('')
  const [selectedRole, setSelectedRole] = React.useState('')

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Staff Management" />

      <div className="p-4 space-y-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="relative">
              <CardDescription>Total Employees</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                42
              </CardTitle>
              <div className="absolute right-4 top-4">
                <UsersIcon className="size-5 text-blue-500" />
              </div>
            </CardHeader>
            <CardFooter className="text-sm text-muted-foreground">
              Across all departments
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="relative">
              <CardDescription>Onboarding</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                3
              </CardTitle>
              <div className="absolute right-4 top-4">
                <UserPlusIcon className="size-5 text-green-500" />
              </div>
            </CardHeader>
            <CardFooter className="text-sm text-muted-foreground">
              New hires in progress
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="relative">
              <CardDescription>Offboarding</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                2
              </CardTitle>
              <div className="absolute right-4 top-4">
                <UserXIcon className="size-5 text-orange-500" />
              </div>
            </CardHeader>
            <CardFooter className="text-sm text-muted-foreground">
              Departures in progress
            </CardFooter>
          </Card>

          <Card>
            <CardHeader className="relative">
              <CardDescription>Avg. Tenure</CardDescription>
              <CardTitle className="text-2xl font-semibold tabular-nums">
                2.5 yrs
              </CardTitle>
              <div className="absolute right-4 top-4">
                <BadgeCheckIcon className="size-5 text-purple-500" />
              </div>
            </CardHeader>
            <CardFooter className="text-sm text-muted-foreground">
              Company average
            </CardFooter>
          </Card>
        </div>

        {/* Main Tabs */}
        <Tabs defaultValue="active" className="w-full">
          <div className="flex justify-between items-center">
            <TabsList>
              <TabsTrigger value="active" className="flex gap-2">
                <UsersIcon className="size-4" />
                Active Staff
              </TabsTrigger>
              <TabsTrigger value="onboarding" className="flex gap-2">
                <UserPlusIcon className="size-4" />
                Onboarding
              </TabsTrigger>
              <TabsTrigger value="offboarding" className="flex gap-2">
                <UserXIcon className="size-4" />
                Offboarding
              </TabsTrigger>
            </TabsList>

            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <DownloadIcon className="mr-2 size-4" />
                Export
              </Button>

              {activeTab === 'active' && (
                <Dialog open={openNewEmployee} onOpenChange={setOpenNewEmployee}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <PlusIcon className="mr-2 size-4" />
                      Add Employee
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Add New Employee</DialogTitle>
                      <DialogDescription>
                        Register a new staff member at Prosmile Design.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full Name</Label>
                          <Input id="name" placeholder="Alex Johnson" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="alex@prosmile.com" />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Select
                            value={selectedDepartment}
                            onValueChange={(value) => {
                              setSelectedDepartment(value);
                              setSelectedRole('');
                            }}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              {departments.map((dept) => (
                                <SelectItem key={dept} value={dept}>
                                  {dept}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">Role</Label>
                          <Select
                            value={selectedRole}
                            onValueChange={setSelectedRole}
                            disabled={!selectedDepartment}
                          >
                            <SelectTrigger>
                              <SelectValue placeholder="Select role" />
                            </SelectTrigger>
                            <SelectContent>
                              {selectedDepartment && roles[selectedDepartment]?.map((role) => (
                                <SelectItem key={role} value={role}>
                                  {role}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Start Date</Label>
                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
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
                        <Label htmlFor="notes">Notes</Label>
                        <Textarea id="notes" placeholder="Additional information..." />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit">Add Employee</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}

              {activeTab === 'onboarding' && (
                <Dialog open={openOnboardingTask} onOpenChange={setOpenOnboardingTask}>
                  <DialogTrigger asChild>
                    <Button size="sm">
                      <PlusIcon className="mr-2 size-4" />
                      Add Task
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[600px]">
                    <DialogHeader>
                      <DialogTitle>Add Onboarding Task</DialogTitle>
                      <DialogDescription>
                        Create a new task for the onboarding checklist.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="space-y-2">
                        <Label htmlFor="task-name">Task Name</Label>
                        <Input id="task-name" placeholder="e.g., Equipment Setup" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="task-description">Description</Label>
                        <Textarea id="task-description" placeholder="Detailed instructions..." />
                      </div>

                      <div className="space-y-2">
                        <Label>Assigned To</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select employee" />
                          </SelectTrigger>
                          <SelectContent>
                            {activeEmployees.map((emp) => (
                              <SelectItem key={emp.id} value={emp.id}>
                                {emp.name} ({emp.role})
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
                              variant="outline"
                              className={cn(
                                "w-full justify-start text-left font-normal",
                                !date && "text-muted-foreground"
                              )}
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
                    </div>
                    <DialogFooter>
                      <Button type="submit">Add Task</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
              )}
            </div>
          </div>

          {/* Active Staff Tab */}
          <TabsContent value="active">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Employee</TableHead>
                    <TableHead>Role</TableHead>
                    <TableHead>Department</TableHead>
                    <TableHead>Hire Date</TableHead>
                    <TableHead>Projects</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {activeEmployees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={employee.avatar}
                            alt={employee.name}
                            className="h-8 w-8 rounded-full"
                          />
                          <div>
                            <div className="font-medium">{employee.name}</div>
                            <div className="text-sm text-muted-foreground">{employee.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.role}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{employee.department}</Badge>
                      </TableCell>
                      <TableCell>{employee.hireDate}</TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {employee.projects.map(project => (
                            <Badge key={project} variant="secondary" className="text-xs">
                              {project}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge className="bg-green-500 hover:bg-green-600">
                          Active
                        </Badge>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Onboarding Tab */}
          <TabsContent value="onboarding">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableHead>New Hire</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>Start Date</TableHead>
                  <TableHead>Progress</TableHead>
                  <TableHead>Tasks</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableHeader>
                <TableBody>
                  {onboardingEmployees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={employee.avatar}
                            alt={employee.name}
                            className="h-8 w-8 rounded-full"
                          />
                          <div>
                            <div className="font-medium">{employee.name}</div>
                            <div className="text-sm text-muted-foreground">{employee.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.role}</TableCell>
                      <TableCell>{employee.startDate}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <div className="w-full bg-gray-200 rounded-full h-2.5">
                            <div
                              className="bg-blue-600 h-2.5 rounded-full"
                              style={{ width: `${employee.progress}%` }}
                            ></div>
                          </div>
                          <span className="text-sm">{employee.progress}%</span>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {employee.tasks.map((task, index) => (
                            <Badge
                              key={index}
                              variant={task.completed ? "default" : "outline"}
                              className="text-xs"
                            >
                              {task.name}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Manage
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>

          {/* Offboarding Tab */}
          <TabsContent value="offboarding">
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableHead>Employee</TableHead>
                  <TableHead>Role</TableHead>
                  <TableHead>End Date</TableHead>
                  <TableHead>Reason</TableHead>
                  <TableHead>Tasks</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableHeader>
                <TableBody>
                  {offboardingEmployees.map((employee) => (
                    <TableRow key={employee.id}>
                      <TableCell>
                        <div className="flex items-center gap-3">
                          <img
                            src={employee.avatar}
                            alt={employee.name}
                            className="h-8 w-8 rounded-full"
                          />
                          <div>
                            <div className="font-medium">{employee.name}</div>
                            <div className="text-sm text-muted-foreground">{employee.email}</div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>{employee.role}</TableCell>
                      <TableCell>{employee.endDate}</TableCell>
                      <TableCell>
                        <Badge variant="outline">{employee.reason}</Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                          {employee.tasks.map((task, index) => (
                            <Badge
                              key={index}
                              variant={task.completed ? "default" : "outline"}
                              className="text-xs"
                            >
                              {task.name}
                            </Badge>
                          ))}
                        </div>
                      </TableCell>
                      <TableCell className="text-right">
                        <Button variant="outline" size="sm">
                          Complete
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
}
