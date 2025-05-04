import React from 'react'
import { ScrollArea } from "@/components/ui/scroll-area";
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

type ActivityItem = {
    date: string
    message: string
  }
  
  type ActivityLogProps = {
    activities: ActivityItem[]
  }
  
const ActivityLog: React.FC<ActivityLogProps> = ({ activities }) => {
    return (
        <div className="w-[30%] flex flex-col justify-start">
        <ScrollArea className="h-[60vh] w-full p-4 rounded-md border">
            <h2 className="font-semibold text-xl pr-3">Activity</h2>
            <ol className="relative">
            {activities.map((activity, index) => (
                <li key={index} className="mb-4 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-[.5px] border border-white dark:border-gray-900 dark:bg-gray-700" />
                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {activity.date}
                </time>
                <h3 className="text-sm font-semibold text-gray-800 dark:text-white">
                    {activity.message}
                </h3>
                </li>
            ))}
            </ol>
        </ScrollArea>

        <div className="grid w-full gap-1.5 mt-5">
            <Label htmlFor="message">Comment</Label>
            <Textarea placeholder="Type your message here." id="message" />
            <Button className="mt-3">Submit</Button>
        </div>
        </div>
    )
}

export default ActivityLog
