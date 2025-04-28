import { Head } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';

import AppLayout from '@/layouts/app-layout';
import BillingLayout from '@/layouts/billing/layout';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Payments',
        href: '/billing/payments',
    },
];

export default function Payments() {
    const payments = [
        {
            date: '2025-04-01',
            acct: '1234',
            client: 'John Doe',
            reference: 'INV-001',
            amount: '$100.00',
            notes: 'Payment for services',
            email: 'john@example.com',
            pdf: '#',
            edit: '#',
        },
        {
            date: '2025-04-02',
            acct: '5678',
            client: 'Jane Smith',
            reference: 'INV-002',
            amount: '$200.00',
            notes: 'Payment for services',
            email: 'jane@example.com',
            pdf: '#',
            edit: '#',
        },
        {
            date: '2025-04-01',
            acct: '1234',
            client: 'John Doe',
            reference: 'INV-001',
            amount: '$100.00',
            notes: 'Payment for services',
            email: 'john@example.com',
            pdf: '#',
            edit: '#',
        },
        {
            date: '2025-04-02',
            acct: '5678',
            client: 'Jane Smith',
            reference: 'INV-002',
            amount: '$200.00',
            notes: 'Payment for services',
            email: 'jane@example.com',
            pdf: '#',
            edit: '#',
        },
        {
            date: '2025-04-01',
            acct: '1234',
            client: 'John Doe',
            reference: 'INV-001',
            amount: '$100.00',
            notes: 'Payment for services',
            email: 'john@example.com',
            pdf: '#',
            edit: '#',
        },
        {
            date: '2025-04-02',
            acct: '5678',
            client: 'Jane Smith',
            reference: 'INV-002',
            amount: '$200.00',
            notes: 'Payment for services',
            email: 'jane@example.com',
            pdf: '#',
            edit: '#',
        },
        {
            date: '2025-04-01',
            acct: '1234',
            client: 'John Doe',
            reference: 'INV-001',
            amount: '$100.00',
            notes: 'Payment for services',
            email: 'john@example.com',
            pdf: '#',
            edit: '#',
        },
        {
            date: '2025-04-02',
            acct: '5678',
            client: 'Jane Smith',
            reference: 'INV-002',
            amount: '$200.00',
            notes: 'Payment for services',
            email: 'jane@example.com',
            pdf: '#',
            edit: '#',
        },
        {
            date: '2025-04-01',
            acct: '1234',
            client: 'John Doe',
            reference: 'INV-001',
            amount: '$100.00',
            notes: 'Payment for services',
            email: 'john@example.com',
            pdf: '#',
            edit: '#',
        },
        {
            date: '2025-04-02',
            acct: '5678',
            client: 'Jane Smith',
            reference: 'INV-002',
            amount: '$200.00',
            notes: 'Payment for services',
            email: 'jane@example.com',
            pdf: '#',
            edit: '#',
        },
        // Add more sample data as needed
    ];

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Payments" />
            <BillingLayout>
                <div className="w-full">
                    {/* Filter Section */}
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded my-6 p-4">
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
                            <button className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 dark:bg-indigo-700 rounded-md hover:bg-indigo-700 dark:hover:bg-indigo-600 focus:outline-none">
                                Apply Filters
                            </button>
                        </div>
                    </div>

                    {/* Table Section */}
                    <div className="bg-white dark:bg-gray-800 shadow-md rounded my-6">
                        <table className="min-w-max w-full table-auto text-gray-600 dark:text-gray-300">
                            <thead>
                                <tr className="bg-gray-200 dark:bg-gray-700 text-sm leading-normal">
                                    <th className="py-3 px-6 text-left">Date</th>
                                    <th className="py-3 px-6 text-left">Account Number</th>
                                    <th className="py-3 px-6 text-left">Client</th>
                                    <th className="py-3 px-6 text-left">Reference</th>
                                    <th className="py-3 px-6 text-left">Amount</th>
                                    <th className="py-3 px-6 text-left">Notes</th>
                                    <th className="py-3 px-6 text-center">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="font-light">
                                {payments.map((payment, index) => (
                                    <tr key={index} className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
                                        <td className="py-3 px-6 text-left whitespace-nowrap">
                                            {payment.date}
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            {payment.acct}
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            <div className="flex items-center">
                                                <div className="mr-2">
                                                    <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                                </div>
                                                <span>{payment.client}</span>
                                            </div>
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            {payment.reference}
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            {payment.amount}
                                        </td>
                                        <td className="py-3 px-6 text-left">
                                            {payment.notes}
                                        </td>
                                        <td className="py-3 px-6 text-center">
                                            <div className="flex item-center justify-center">
                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                    </svg>
                                                </div>
                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                                                    </svg>
                                                </div>
                                                <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-between py-3 px-6 bg-gray-100 dark:bg-gray-700 rounded-b-lg">
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
            </BillingLayout>
        </AppLayout>
    );
}
