import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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


export default function CaseManagement() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Case Management" />

      <div className="p-4 space-y-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-gradient-to-br from-emerald-400 to-emerald-800 text-white pattern-wavy pattern-blue-500 pattern-bg-white pattern-size-6 pattern-opacity-20">
            <CardHeader>
              <CardTitle className="text-sm">NEW CASES</CardTitle>
            </CardHeader>
            <CardContent className="text-4xl font-bold">2</CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-sky-400 to-sky-800 text-white">
            <CardHeader>
              <CardTitle className="text-sm">INPRODUCTION CASES</CardTitle>
            </CardHeader>
            <CardContent className="text-4xl font-bold">3</CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-red-400 to-red-800 text-white">
            <CardHeader>
              <CardTitle className="text-sm">HOLD CASES</CardTitle>
            </CardHeader>
            <CardContent className="text-4xl font-bold">1</CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-orange-400 to-amber-800 text-white">
            <CardHeader>
              <CardTitle className="text-sm">COMPLETED CASES</CardTitle>
            </CardHeader>
            <CardContent className="text-4xl font-bold">10</CardContent>
          </Card>
        </div>

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
                        <th className="py-3 px-6 text-left"></th>
                        <th className="py-3 px-6 text-left">Due Date</th>
                        <th className="py-3 px-6 text-left">Invoice Number</th>
                        <th className="py-3 px-6 text-left">Client</th>
                        <th className="py-3 px-6 text-left">Patient</th>
                        <th className="py-3 px-6 text-left">Status</th>
                        <th className="py-3 px-6 text-left">Dept</th>
                        <th className="py-3 px-6 text-left">User</th>
                        <th className="py-3 px-6 text-center">Actions</th>
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
                                <div className="flex items-center">
                                    <div className="mr-2">
                                        <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                    </div>
                                    <span>{payment.patient}</span>
                                </div>
                            </td>
                            <td className="py-3 px-6 text-left">
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
                                  New
                                </span>
                              )}
                              {payment.status === 'Completed' && (
                                <span className="inline-flex items-center px-3 py-1 text-amber-500 rounded-full gap-x-2 bg-amber-100/60 dark:bg-gray-800 text-sm font-normal">
                                  Completed
                                </span>
                              )}
                            </td>
                            <td className="py-3 px-6 text-left">
                                  <div className="mr-2">
                                      <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                  </div>
                            </td>
                            <td className="py-3 px-6 text-left">
                                  <div className="mr-2">
                                      <img className="w-6 h-6 rounded-full" src="https://randomuser.me/api/portraits/men/1.jpg"/>
                                  </div>
                            </td>
                            <td className="py-3 px-6 text-center">
                                <div className="flex item-center justify-center">
                                    <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                                      </svg>
                                    </div>
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
    </AppLayout>
  );
}
