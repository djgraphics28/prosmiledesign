import * as React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ActivityLog from "@/components/case/activity-log";
import CaseProductsTab from "@/components/case/case-tab/case-product-tab";
import CaseFilesTab from "@/components/case/case-tab/case-files-tab";
import CaseTasksTab from "@/components/case/case-tab/case-task-tab";
import CaseDetails from "@/components/case/case-detail";
import { Status, Tasks } from "@/types/index";

interface CasePageContentProps {
    status: string; // Ensure the status is a string
    orderedDate: Date; // Ordered Date can be a string or Date
    dueDate: Date; // Due Date can be a string or Date
    appointmentDate: Date; // Appointment Date can be a string or Date
    clientName: string;
    doctorName: string;
    patientName: string;
    assignTo: string;
    department: string;
    selectedStatus: Status | null;
    statuses: Status[];
    productList: any[];
    mediaFiles: any[];
    tasks: any[];
    activityData: any[];
    getThumbnail: (file: any) => string; // Adjust based on your use case
  }
  
  
  const CasePageContent: React.FC<CasePageContentProps> = ({
    status,
    orderedDate,
    dueDate,
    appointmentDate,
    clientName,
    doctorName,
    patientName,
    assignTo,
    department,
    selectedStatus,
    statuses,
    productList,
    mediaFiles,
    tasks,
    activityData,
    getThumbnail
  }) => {
  
    // Helper function to format dates
    const formatDate = (date: string | Date): string => {
      if (date instanceof Date) {
        return date.toISOString(); // Convert Date to string
      }
      return date; // If already a string, return as is
    };
  
    return (
      <div className="flex">
        <div className="w-[70%] py-4 pr-4 pt-0 pb-3">
          <ScrollArea className="h-[83vh] w-[100%]">
            <CaseDetails 
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
            />
            <Tabs defaultValue="products" className="w-[100%] mt-5">
              <TabsList>
                <TabsTrigger value="products">Products & Services</TabsTrigger>
                <TabsTrigger value="file">Files (1)</TabsTrigger>
                <TabsTrigger value="task">Tasks</TabsTrigger>
              </TabsList>
              <TabsContent value="products" className="mt-2 p-3">
                <CaseProductsTab productList={productList} />
              </TabsContent>
              <TabsContent value="file" className="mt-2 p-3">
                <CaseFilesTab mediaFiles={mediaFiles} getThumbnail={getThumbnail} />
              </TabsContent>
              <TabsContent value="task" className="mt-2 p-3">
                <CaseTasksTab tasks={tasks} />
              </TabsContent>
            </Tabs>
          </ScrollArea>
        </div>
        {/* Activity Log */}
        <ActivityLog activities={activityData} />
      </div>
    );
  };
  
  export default CasePageContent;
