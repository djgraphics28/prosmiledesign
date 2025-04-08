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

// Sample data representing the cases with updated statuses
const caseData = [
  { id: 1, caseId: '001', client: 'Client A', patient: 'John Doe', due: '2025-05-01', status: 'Incoming', dept: 'Cardiology', user: 'Dr. Smith', file: 'file1.pdf' },
  { id: 2, caseId: '002', client: 'Client B', patient: 'Jane Smith', due: '2025-05-05', status: 'Inproduction', dept: 'Neurology', user: 'Dr. Adams', file: 'file2.pdf' },
  { id: 3, caseId: '003', client: 'Client C', patient: 'James Lee', due: '2025-05-10', status: 'Incoming', dept: 'Orthopedics', user: 'Dr. Wilson', file: 'file3.pdf' },
  { id: 4, caseId: '004', client: 'Client D', patient: 'Mary Johnson', due: '2025-05-15', status: 'Hold', dept: 'Cardiology', user: 'Dr. Davis', file: 'file4.pdf' },
  { id: 5, caseId: '005', client: 'Client E', patient: 'Robert Brown', due: '2025-05-20', status: 'Hold', dept: 'Neurology', user: 'Dr. Thomas', file: 'file5.pdf' },
  { id: 6, caseId: '006', client: 'Client F', patient: 'Emily Davis', due: '2025-04-30', status: 'Completed', dept: 'Orthopedics', user: 'Dr. Moore', file: 'file6.pdf' },
  { id: 7, caseId: '007', client: 'Client G', patient: 'Michael Wilson', due: '2025-04-25', status: 'Completed', dept: 'Cardiology', user: 'Dr. Lee', file: 'file7.pdf' },
];

// Summary data for case counts based on new statuses
const caseSummary = {
  incoming: caseData.filter(c => c.status === 'Incoming').length,
  inproduction: caseData.filter(c => c.status === 'Inproduction').length,
  hold: caseData.filter(c => c.status === 'Hold').length,
  completed: caseData.filter(c => c.status === 'Completed').length,
};

export default function CaseManagement() {
  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Case Management" />

      <div className="p-4 space-y-4">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card className="bg-blue-600 text-white">
            <CardHeader>
              <CardTitle className="text-sm">⚖️ INCOMING CASES</CardTitle>
            </CardHeader>
            <CardContent className="text-4xl font-bold">{caseSummary.incoming}</CardContent>
          </Card>

          <Card className="bg-blue-700 text-white">
            <CardHeader>
              <CardTitle className="text-sm">📅 INPRODUCTION CASES</CardTitle>
            </CardHeader>
            <CardContent className="text-4xl font-bold">{caseSummary.inproduction}</CardContent>
          </Card>

          <Card className="bg-blue-800 text-white">
            <CardHeader>
              <CardTitle className="text-sm">⏸️ HOLD CASES</CardTitle>
            </CardHeader>
            <CardContent className="text-4xl font-bold">{caseSummary.hold}</CardContent>
          </Card>

          <Card className="bg-blue-900 text-white">
            <CardHeader>
              <CardTitle className="text-sm">✔️ COMPLETED CASES</CardTitle>
            </CardHeader>
            <CardContent className="text-4xl font-bold">{caseSummary.completed}</CardContent>
          </Card>
        </div>

        {/* Filter Section for Case Management */}
        <div className="flex space-x-4 mb-4">
          {/* Status Filter */}
          <select className="px-4 py-2 border border-gray-300 rounded-md">
            <option value="">Select Status</option>
            <option value="Incoming">Incoming</option>
            <option value="Inproduction">Inproduction</option>
            <option value="Hold">Hold</option>
            <option value="Completed">Completed</option>
          </select>

          {/* User Filter */}
          <select className="px-4 py-2 border border-gray-300 rounded-md">
            <option value="">Select User</option>
            <option value="Dr. Smith">Dr. Smith</option>
            <option value="Dr. Adams">Dr. Adams</option>
            <option value="Dr. Wilson">Dr. Wilson</option>
            <option value="Dr. Davis">Dr. Davis</option>
            <option value="Dr. Thomas">Dr. Thomas</option>
            <option value="Dr. Moore">Dr. Moore</option>
            <option value="Dr. Lee">Dr. Lee</option>
          </select>

          {/* Client Filter */}
          <select className="px-4 py-2 border border-gray-300 rounded-md">
            <option value="">Select Client</option>
            <option value="Client A">Client A</option>
            <option value="Client B">Client B</option>
            <option value="Client C">Client C</option>
            <option value="Client D">Client D</option>
            <option value="Client E">Client E</option>
            <option value="Client F">Client F</option>
            <option value="Client G">Client G</option>
          </select>

          {/* Date Filter */}
          <input 
            type="date" 
            className="px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

        {/* Table Layout for Case Management */}
        <div className="space-y-8">
          {/* All Cases Table (Grouped by Status) */}
          <Card>
            <CardHeader>
              <CardTitle className="text-sm">All Cases</CardTitle>
            </CardHeader>
            <CardContent>
              <table className="min-w-full table-auto">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left">Case ID</th>
                    <th className="px-4 py-2 text-left">Client</th>
                    <th className="px-4 py-2 text-left">Patient</th>
                    <th className="px-4 py-2 text-left">Due</th>
                    <th className="px-4 py-2 text-left">Status</th>
                    <th className="px-4 py-2 text-left">Dept</th>
                    <th className="px-4 py-2 text-left">User</th>
                    <th className="px-4 py-2 text-left">File</th>
                    <th className="px-4 py-2 text-left">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {caseData.map((caseItem) => (
                    <tr key={caseItem.id} className="border-b">
                      <td className="px-4 py-2">{caseItem.caseId}</td>
                      <td className="px-4 py-2">{caseItem.client}</td>
                      <td className="px-4 py-2">{caseItem.patient}</td>
                      <td className="px-4 py-2">{caseItem.due}</td>
                      <td className="px-4 py-2">{caseItem.status}</td>
                      <td className="px-4 py-2">{caseItem.dept}</td>
                      <td className="px-4 py-2">{caseItem.user}</td>
                      <td className="px-4 py-2">
                        <a href={`/files/${caseItem.file}`} target="_blank" className="text-blue-600 hover:text-blue-800">
                          {caseItem.file}
                          {/* W3C SVG File Icon */}
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text ml-2 inline-block" viewBox="0 0 16 16">
                            <path d="M6 0a1 1 0 0 1 1 1v1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h8V1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V0z"/>
                          </svg>
                        </a>
                      </td>
                      <td className="px-4 py-2">
                        <button className="text-blue-600 hover:text-blue-800">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil inline-block text-xl" viewBox="0 0 16 16">
                            <path d="M12.854.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-8 8a.5.5 0 0 1-.22.132l-3.672 1.23a.5.5 0 0 1-.627-.627l1.23-3.672a.5.5 0 0 1 .132-.22l8-8a.5.5 0 0 1 .708 0z"/>
                          </svg>
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </div>
      </div>
    </AppLayout>
  );
}
