type Tasks = {
  label: string;
  due: string;
  status: "completed" | "in-progress" | "pending";
  checked: boolean;
}

const CaseTasksTab = ({ tasks }: { tasks: Tasks[] }) => {
  return (
    <div className="mt-2 p-3 space-y-2">
      {tasks.map((task, idx) => (
        <div key={idx} className="flex items-center gap-2 p-2 border rounded">
          <input type="checkbox" className="rounded" checked={task.checked} readOnly />
          <span>{task.label} - Due {task.due}</span>
          <span className={`ml-auto ${
            task.status === "completed" ? "text-green-500"
            : task.status === "in-progress" ? "text-yellow-500"
            : "text-gray-500"
          }`}>
            {task.status.charAt(0).toUpperCase() + task.status.slice(1)}
          </span>
        </div>
      ))}
    </div>
  )
}

export default CaseTasksTab
