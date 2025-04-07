import { Head } from '@inertiajs/react';

import { useState } from 'react';
import HeadingSmall from '@/components/heading-small';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';
import ClientLayout from '@/layouts/clients/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Accounts',
        href: '/clients/accounts',
    },
];

// Generate 50 static accounts
const generateAccounts = () => {
    const accounts = [];
    for (let i = 1; i <= 50; i++) {
        accounts.push({
            id: i,
            account_number: `ACC-${String(i).padStart(5, '0')}`,
            company: `Company ${i}`,
            full_name: `John Doe ${i}`,
            city: `City ${i}`,
            phone: `+1 555-${String(i).padStart(4, '0')}`,
            email: `contact${i}@company${i}.com`,
            active: Math.random() > 0.2,
        });
    }
    return accounts;
};

export default function Accounts() {
    const [search, setSearch] = useState('');
    const [showActive, setShowActive] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const accounts = generateAccounts();

    const filteredAccounts = accounts.filter(account => {
        const matchesSearch = Object.values(account).some(
            value => value.toString().toLowerCase().includes(search.toLowerCase())
        );
        const matchesActive = showActive ? account.active : true;
        return matchesSearch && matchesActive;
    });

    const paginatedAccounts = filteredAccounts.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(filteredAccounts.length / itemsPerPage);

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Client Accounts" />

            <ClientLayout>
                <div className="space-y-6">
                    <HeadingSmall title="Client Accounts" description="View and manage client accounts" />

                    <div className="flex justify-between items-center mb-4">
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                className="px-4 py-2 border rounded-lg"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={showActive}
                                    onChange={(e) => setShowActive(e.target.checked)}
                                />
                                Show Active Only
                            </label>
                        </div>
                        <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                            Add Account
                        </button>
                    </div>

                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border rounded-lg">
                            <thead>
                                <tr className="bg-gray-50">
                                    <th className="px-6 py-3 text-left">Account Number</th>
                                    <th className="px-6 py-3 text-left">Company</th>
                                    <th className="px-6 py-3 text-left">Full Name</th>
                                    <th className="px-6 py-3 text-left">City</th>
                                    <th className="px-6 py-3 text-left">Phone</th>
                                    <th className="px-6 py-3 text-left">Email</th>
                                    <th className="px-6 py-3 text-left">Active</th>
                                    <th className="px-6 py-3 text-left">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paginatedAccounts.map((account) => (
                                    <tr key={account.id} className="border-t hover:bg-gray-50">
                                        <td className="px-6 py-4">{account.account_number}</td>
                                        <td className="px-6 py-4">{account.company}</td>
                                        <td className="px-6 py-4">{account.full_name}</td>
                                        <td className="px-6 py-4">{account.city}</td>
                                        <td className="px-6 py-4">{account.phone}</td>
                                        <td className="px-6 py-4">{account.email}</td>
                                        <td className="px-6 py-4">
                                            <span className={`px-2 py-1 rounded-full text-sm ${account.active ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                                                {account.active ? 'Active' : 'Inactive'}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4">
                                            <button className="text-blue-600 hover:text-blue-800">Edit</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className="flex justify-between items-center mt-4">
                        <div>
                            Showing {((currentPage - 1) * itemsPerPage) + 1} to {Math.min(currentPage * itemsPerPage, filteredAccounts.length)} of {filteredAccounts.length} results
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                                className="px-3 py-1 border rounded-lg disabled:opacity-50"
                            >
                                Previous
                            </button>
                            <button
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                                className="px-3 py-1 border rounded-lg disabled:opacity-50"
                            >
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </ClientLayout>
        </AppLayout>
    );
}
