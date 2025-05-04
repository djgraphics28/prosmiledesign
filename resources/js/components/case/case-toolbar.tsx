import * as React from "react";
import { PlusIcon, Calendar } from "lucide-react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import CaseFormDialog from "@/components/case/new-case-dialog";

interface ToolbarProps {
  isAddCaseDialogOpen: boolean;
  setIsAddCaseDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
  newCaseData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSelectChange: (name: string, value: string) => void;
  handleDateChange: (name: string, date: Date | null) => void;
  clients: any[];
  doctors: any[];
  patients: any[];
  departments: any[];
  users: any[];
  handleSubmitNewCase: (e: React.FormEvent) => void;
}

const Toolbar: React.FC<ToolbarProps> = ({
  isAddCaseDialogOpen,
  setIsAddCaseDialogOpen,
  newCaseData,
  handleInputChange,
  handleSelectChange,
  handleDateChange,
  clients,
  doctors,
  patients,
  departments,
  users,
  handleSubmitNewCase
}) => {
  return (
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
          <CaseFormDialog
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
        </Dialog>
      </div>
    </div>
  );
};

export default Toolbar;
