import * as React from "react"
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { TrendingUpIcon, ActivityIcon, LocateIcon, CreditCardIcon, PackageIcon, PlusIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Clients',
        href: '/clients',

    },
];

const dentalClinics = Array.from({ length: 100 }, (_, i) => {
    const id = `DC-${String(i + 1).padStart(3, '0')}`;
    const names = ['Bright Smile Dental', 'Gentle Care Dentistry', 'Perfect Teeth Clinic', 'Family Dental Care', 'Modern Dental Studio', 'Elite Dental', 'Sunshine Dental', 'City Dental Group', 'Premier Dental', 'Advanced Dental Care'];
    const contacts = ['Dr. Sarah Johnson', 'Dr. Michael Chen', 'Dr. Emily Rodriguez', 'Dr. James Wilson', 'Dr. Olivia Park', 'Dr. David Kim', 'Dr. Lisa Brown', 'Dr. Robert Smith', 'Dr. Maria Garcia', 'Dr. John Davis'];
    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'];
    const states = ['NY', 'CA', 'IL', 'TX', 'AZ', 'PA', 'TX', 'CA', 'TX', 'CA'];
    const products = ['Porcelain Crowns', 'Dental Implants', 'Whitening Kits', 'Composite Fillings', 'Orthodontic Supplies', 'Dental Tools'];
    const statuses = ['active', 'pending', 'inactive'];
    const tiers = ['basic', 'standard', 'premium'];

    const randomIndex = Math.floor(Math.random() * 10);
    const randomStatus = statuses[Math.floor(Math.random() * statuses.length)];
    const randomTier = tiers[Math.floor(Math.random() * tiers.length)];
    const randomProducts = products.sort(() => 0.5 - Math.random()).slice(0, Math.floor(Math.random() * 3) + 1);
    const randomSpent = Math.floor(Math.random() * 20000) + 1000;

    const today = new Date();
    const randomDays = Math.floor(Math.random() * 365);
    const randomDate = new Date(today.setDate(today.getDate() - randomDays));
    const lastOrder = randomDate.toISOString().split('T')[0];

    return {
        id,
        name: names[randomIndex],
        contact: contacts[randomIndex],
        email: `contact@${names[randomIndex].toLowerCase().replace(/\s+/g, '')}.com`,
        phone: `(${Math.floor(Math.random() * 900) + 100}) ${Math.floor(Math.random() * 900) + 100}-${Math.floor(Math.random() * 9000) + 1000}`,
        address: `${Math.floor(Math.random() * 1000) + 100} ${['Main', 'Oak', 'Maple', 'Cedar', 'Pine'][Math.floor(Math.random() * 5)]} ${['St', 'Ave', 'Blvd', 'Rd', 'Ln'][Math.floor(Math.random() * 5)]}, ${cities[randomIndex]}, ${states[randomIndex]} ${Math.floor(Math.random() * 90000) + 10000}`,
        status: randomStatus,
        tier: randomTier,
        lastOrder,
        totalSpent: randomSpent,
        products: randomProducts
    };
});
const clientStatuses = [
    { value: 'active', label: 'Active' },
    { value: 'pending', label: 'Pending' },
    { value: 'inactive', label: 'Inactive' }
];

const clientTiers = [
    { value: 'basic', label: 'Basic' },
    { value: 'standard', label: 'Standard' },
    { value: 'premium', label: 'Premium' }
];

export default function ClientsManagement() {
    const [searchTerm, setSearchTerm] = React.useState('')
    const [statusFilter, setStatusFilter] = React.useState('all')
    const [tierFilter, setTierFilter] = React.useState('all')
    const [openNewClient, setOpenNewClient] = React.useState(false)

    const filteredClinics = dentalClinics.filter(clinic => {
        const matchesSearch = clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            clinic.contact.toLowerCase().includes(searchTerm.toLowerCase()) ||
            clinic.email.toLowerCase().includes(searchTerm.toLowerCase())
        const matchesStatus = statusFilter === 'all' || clinic.status === statusFilter
        const matchesTier = tierFilter === 'all' || clinic.tier === tierFilter

        return matchesSearch && matchesStatus && matchesTier
    })

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Clients Management" />

            <div className="p-4 space-y-4">
                {/* Summary Cards */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <Card>
                        <CardHeader className="relative">
                            <CardDescription>Total Clients</CardDescription>
                            <CardTitle className="text-2xl font-semibold tabular-nums">
                                {dentalClinics.length}
                            </CardTitle>
                            <div className="absolute right-4 top-4">
                                <Badge variant="outline" className="flex gap-1 rounded-lg text-xs">
                                    <TrendingUpIcon className="size-3" />
                                    +8.5%
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardFooter className="text-sm text-muted-foreground">
                            Dental clinics using our products
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader className="relative">
                            <CardDescription>Active Clients</CardDescription>
                            <CardTitle className="text-2xl font-semibold tabular-nums">
                                {dentalClinics.filter(c => c.status === 'active').length}
                            </CardTitle>
                            <div className="absolute right-4 top-4">
                                <ActivityIcon className="size-4 text-green-500" />
                            </div>
                        </CardHeader>
                        <CardFooter className="text-sm text-muted-foreground">
                            Currently ordering products
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader className="relative">
                            <CardDescription>Premium Tier</CardDescription>
                            <CardTitle className="text-2xl font-semibold tabular-nums">
                                {dentalClinics.filter(c => c.tier === 'premium').length}
                            </CardTitle>
                            <div className="absolute right-4 top-4">
                                <CreditCardIcon className="size-4 text-purple-500" />
                            </div>
                        </CardHeader>
                        <CardFooter className="text-sm text-muted-foreground">
                            Top-tier clients
                        </CardFooter>
                    </Card>

                    <Card>
                        <CardHeader className="relative">
                            <CardDescription>Total Revenue</CardDescription>
                            <CardTitle className="text-2xl font-semibold tabular-nums">
                                ${dentalClinics.reduce((sum, clinic) => sum + clinic.totalSpent, 0).toLocaleString()}
                            </CardTitle>
                            <div className="absolute right-4 top-4">
                                <PackageIcon className="size-4 text-blue-500" />
                            </div>
                        </CardHeader>
                        <CardFooter className="text-sm text-muted-foreground">
                            From all clients
                        </CardFooter>
                    </Card>
                </div>

                {/* Controls and Filters */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                        <Input
                            placeholder="Search clinics, contacts..."
                            className="w-full md:w-[300px]"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />

                        <Select value={statusFilter} onValueChange={setStatusFilter}>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="All Statuses" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Statuses</SelectItem>
                                {clientStatuses.map((status) => (
                                    <SelectItem key={status.value} value={status.value}>
                                        {status.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>

                        <Select value={tierFilter} onValueChange={setTierFilter}>
                            <SelectTrigger className="w-full md:w-[180px]">
                                <SelectValue placeholder="All Tiers" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">All Tiers</SelectItem>
                                {clientTiers.map((tier) => (
                                    <SelectItem key={tier.value} value={tier.value}>
                                        {tier.label}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    <Dialog open={openNewClient} onOpenChange={setOpenNewClient}>
                        <DialogTrigger asChild>
                            <Button className="w-full md:w-auto">
                                <PlusIcon className="mr-2 h-4 w-4" />
                                Add Dental Clinic
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[600px]">
                            <DialogHeader>
                                <DialogTitle>Add New Client</DialogTitle>
                                <DialogDescription>
                                    Register a new client for Prosmile Design.
                                </DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="client-id">Client ID</Label>
                                        <Input id="client-id" placeholder="DC-006" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="clinic-name">Client Name</Label>
                                        <Input id="clinic-name" placeholder="Bright Smile Dental" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="contact">Primary Contact</Label>
                                        <Input id="contact" placeholder="Dr. Sarah Johnson" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input id="email" type="email" placeholder="contact@brightsmile.com" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="phone">Phone</Label>
                                        <Input id="phone" placeholder="(555) 123-4567" />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="address">Address</Label>
                                        <Input id="address" placeholder="123 Main St, Anytown, CA 90210" />
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="address">Address</Label>
                                    <Input id="address" placeholder="123 Main St, Anytown, CA 90210" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor="status">Status</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select status" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {clientStatuses.map((status) => (
                                                    <SelectItem key={status.value} value={status.value}>
                                                        {status.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="tier">Client Tier</Label>
                                        <Select>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select tier" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                {clientTiers.map((tier) => (
                                                    <SelectItem key={tier.value} value={tier.value}>
                                                        {tier.label}
                                                    </SelectItem>
                                                ))}
                                            </SelectContent>
                                        </Select>
                                    </div>
                                </div>

                                <div className="space-y-2">
                                    <Label>Products of Interest</Label>
                                    <div className="flex flex-wrap gap-2">
                                        {['Porcelain Crowns', 'Dental Implants', 'Whitening Kits', 'Composite Fillings', 'Orthodontic Supplies', 'Dental Tools'].map(product => (
                                            <Badge key={product} variant="outline" className="cursor-pointer hover:bg-gray-100">
                                                {product}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <DialogFooter>
                                <Button type="submit">Add Client</Button>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
                </div>

                {/* Clients Table */}
                <div className="rounded-md border">
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Client ID</TableHead>
                                <TableHead>Client</TableHead>
                                <TableHead>Contact</TableHead>
                                <TableHead>Contact Info</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Tier</TableHead>
                                <TableHead>Last Order</TableHead>
                                <TableHead>Total Spent</TableHead>
                                <TableHead>Products</TableHead>
                                <TableHead className="text-right">Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredClinics.map((clinic) => (
                                <TableRow key={clinic.id}>
                                    <TableCell className="font-medium">{clinic.id}</TableCell>
                                    <TableCell className="font-medium">{clinic.name}</TableCell>
                                    <TableCell>{clinic.contact}</TableCell>
                                    <TableCell>
                                        <div className="text-sm text-muted-foreground">{clinic.email}</div>
                                        <div className="text-sm">{clinic.phone}</div>
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex items-center gap-1">
                                            <LocateIcon className="h-4 w-4 text-muted-foreground" />
                                            <span className="text-sm line-clamp-1 max-w-[150px]">{clinic.address}</span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {clinic.status === 'active' && (
                                            <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                                        )}
                                        {clinic.status === 'pending' && (
                                            <Badge variant="secondary">Pending</Badge>
                                        )}
                                        {clinic.status === 'inactive' && (
                                            <Badge variant="destructive">Inactive</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell>
                                        {clinic.tier === 'premium' && (
                                            <Badge className="bg-purple-500 hover:bg-purple-600">Premium</Badge>
                                        )}
                                        {clinic.tier === 'standard' && (
                                            <Badge className="bg-blue-500 hover:bg-blue-600">Standard</Badge>
                                        )}
                                        {clinic.tier === 'basic' && (
                                            <Badge variant="outline">Basic</Badge>
                                        )}
                                    </TableCell>
                                    <TableCell>{clinic.lastOrder}</TableCell>
                                    <TableCell>${clinic.totalSpent.toLocaleString()}</TableCell>
                                    <TableCell>
                                        <div className="flex flex-wrap gap-1 max-w-[200px]">
                                            {clinic.products.map(product => (
                                                <Badge key={product} variant="outline" className="text-xs">
                                                    {product}
                                                </Badge>
                                            ))}
                                        </div>
                                    </TableCell>
                                    <TableCell className="text-right">
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <Button variant="outline" size="sm">
                                                    View
                                                </Button>
                                            </DialogTrigger>
                                            <DialogContent className="sm:max-w-[800px]">
                                                <DialogHeader>
                                                    <DialogTitle>{clinic.name}</DialogTitle>
                                                    <DialogDescription>
                                                        Client ID: {clinic.id} | {clinic.tier} Tier
                                                    </DialogDescription>
                                                </DialogHeader>
                                                <div className="grid gap-6 py-4">
                                                    <div className="grid grid-cols-2 gap-6">
                                                        <div className="space-y-4">
                                                            <div>
                                                                <h3 className="font-medium mb-2">Clinic Information</h3>
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between">
                                                                        <span className="text-sm text-muted-foreground">Client ID:</span>
                                                                        <span>{clinic.id}</span>
                                                                    </div>
                                                                    <div className="flex justify-between">
                                                                        <span className="text-sm text-muted-foreground">Name:</span>
                                                                        <span>{clinic.name}</span>
                                                                    </div>
                                                                    <div className="flex justify-between">
                                                                        <span className="text-sm text-muted-foreground">Status:</span>
                                                                        <span>
                                                                            {clinic.status === 'active' && (
                                                                                <Badge className="bg-green-500 hover:bg-green-600">Active</Badge>
                                                                            )}
                                                                            {clinic.status === 'pending' && (
                                                                                <Badge variant="secondary">Pending</Badge>
                                                                            )}
                                                                            {clinic.status === 'inactive' && (
                                                                                <Badge variant="destructive">Inactive</Badge>
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                    <div className="flex justify-between">
                                                                        <span className="text-sm text-muted-foreground">Tier:</span>
                                                                        <span>
                                                                            {clinic.tier === 'premium' && (
                                                                                <Badge className="bg-purple-500 hover:bg-purple-600">Premium</Badge>
                                                                            )}
                                                                            {clinic.tier === 'standard' && (
                                                                                <Badge className="bg-blue-500 hover:bg-blue-600">Standard</Badge>
                                                                            )}
                                                                            {clinic.tier === 'basic' && (
                                                                                <Badge variant="outline">Basic</Badge>
                                                                            )}
                                                                        </span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <h3 className="font-medium mb-2">Contact Details</h3>
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between">
                                                                        <span className="text-sm text-muted-foreground">Primary Contact:</span>
                                                                        <span>{clinic.contact}</span>
                                                                    </div>
                                                                    <div className="flex justify-between">
                                                                        <span className="text-sm text-muted-foreground">Email:</span>
                                                                        <span>{clinic.email}</span>
                                                                    </div>
                                                                    <div className="flex justify-between">
                                                                        <span className="text-sm text-muted-foreground">Phone:</span>
                                                                        <span>{clinic.phone}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div className="space-y-4">
                                                            <div>
                                                                <h3 className="font-medium mb-2">Location</h3>
                                                                <div className="flex items-start gap-2">
                                                                    <LocateIcon className="h-5 w-5 mt-0.5 text-muted-foreground" />
                                                                    <span>{clinic.address}</span>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <h3 className="font-medium mb-2">Order History</h3>
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between">
                                                                        <span className="text-sm text-muted-foreground">Last Order:</span>
                                                                        <span>{clinic.lastOrder}</span>
                                                                    </div>
                                                                    <div className="flex justify-between">
                                                                        <span className="text-sm text-muted-foreground">Total Spent:</span>
                                                                        <span>${clinic.totalSpent.toLocaleString()}</span>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div>
                                                                <h3 className="font-medium mb-2">Products Ordered</h3>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {clinic.products.map(product => (
                                                                        <Badge key={product} variant="outline">
                                                                            {product}
                                                                        </Badge>
                                                                    ))}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="border-t pt-4">
                                                        <h3 className="font-medium mb-3">Actions</h3>
                                                        <div className="flex gap-2">
                                                            <Button size="sm">Place New Order</Button>
                                                            <Button variant="outline" size="sm">
                                                                Edit Details
                                                            </Button>
                                                            {clinic.status === 'active' ? (
                                                                <Button variant="destructive" size="sm">
                                                                    Deactivate
                                                                </Button>
                                                            ) : (
                                                                <Button size="sm">Activate</Button>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </DialogContent>
                                        </Dialog>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Pagination */}
                <div className="flex items-center justify-between px-2">
                    <div className="text-sm text-muted-foreground">
                        Showing <strong>1-{filteredClinics.length}</strong> of <strong>{filteredClinics.length}</strong> clinics
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
