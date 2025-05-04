import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command";
import { Calendar as CalendarIcon } from "lucide-react";


type CaseDetailsProps = {
  status: string
  orderedDate: Date
  dueDate: Date
  appointmentDate: Date
  clientName: string
  doctorName: string
  patientName: string
  assignTo: string
  department: string
  selectedStatus: { label: string } | null
  statuses: { label: string, value: string }[]
}

export default function CaseDetails({
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
  statuses
}: CaseDetailsProps) {
  return (
    <div className="grid grid-cols-2 gap-6 p-6 text-sm rounded-md border">
      <div className="space-y-6">
        <div className="flex">
          <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">⌘ Status</div>
          <div className="mt-1">
            <span className="inline-flex items-center px-3 py-1 text-sky-500 rounded-full gap-x-2 bg-sky-100/60 dark:bg-gray-800 text-sm font-normal">
              {status}
            </span>
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">⌘ Ordered</div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"outline"} className="w-[240px] justify-start text-left font-normal">
                <CalendarIcon />
                {orderedDate ? format(orderedDate, "PPP") : <span>Apr 01, 2025</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={orderedDate} onSelect={() => {}} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex">
          <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">⌘ Due</div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"outline"} className="w-[240px] justify-start text-left font-normal">
                <CalendarIcon />
                {dueDate ? format(dueDate, "PPP") : <span>Apr 10, 2025</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={dueDate} onSelect={() => {}} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex">
          <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">⌘ Appointment</div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant={"outline"} className="w-[240px] justify-start text-left font-normal">
                <CalendarIcon />
                {appointmentDate ? format(appointmentDate, "PPP") : <span>Apr 15, 2025</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <Calendar mode="single" selected={appointmentDate} onSelect={() => {}} initialFocus />
            </PopoverContent>
          </Popover>
        </div>

        <div className="flex">
          <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">⌘ Delivery Method</div>
          <Popover open={false} onOpenChange={() => {}}>
            <PopoverTrigger asChild>
              <Button variant="outline" className="w-[150px] justify-start">
                {selectedStatus ? selectedStatus.label : "Other"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="p-0" side="right" align="start">
              <Command>
                <CommandInput placeholder="Change status..." />
                <CommandList>
                  <CommandEmpty>No results found.</CommandEmpty>
                  <CommandGroup>
                    {statuses.map((status) => (
                      <CommandItem key={status.value} value={status.value}>
                        {status.label}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex">
          <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">⌘ Client</div>
          <div className="mr-2 flex">
            <img className="w-6 h-6 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/1.jpg" />
            {clientName}
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">⌘ Doctor</div>
          <div className="mr-2 flex">
            <img className="w-6 h-6 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/1.jpg" />
            {doctorName}
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">⌘ Patient</div>
          <div className="mr-2 flex">
            <img className="w-6 h-6 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/1.jpg" />
            {patientName}
          </div>
        </div>

        <div className="flex">
          <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">⌘ Assign To</div>
          <div className="mt-1">{assignTo}</div>
        </div>

        <div className="flex">
          <div className="flex items-center gap-2 font-semibold pr-3 min-w-[30%]">⌘ Department</div>
          <div className="mt-1">{department}</div>
        </div>
      </div>
    </div>
  )
}
