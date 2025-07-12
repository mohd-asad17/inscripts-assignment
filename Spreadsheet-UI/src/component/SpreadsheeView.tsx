
import { type ColumnDef, useReactTable, getCoreRowModel, flexRender } from "@tanstack/react-table";
import { Buttons } from "./Buttons";
import { Financial } from "./Financial";

const filledData = [
  {
    id: 1,
    job: "Launch social media campaign for pro...",
    submitted: "15-11-2024",
    status: "In-process",
    submitter: "Aisha Patel",
    url: "www.aishapatel.com",
    assigned: "Sophie Choudhury",
    priority: "Medium",
    due: "20-11-2024",
    value: "6,200,000 ₹",
  },
  {
    id: 2,
    job: "Update press kit for company redesign",
    submitted: "28-10-2024",
    status: "Need to start",
    submitter: "Irfan Khan",
    url: "www.irfankhanp.com",
    assigned: "Tejas Pandey",
    priority: "High",
    due: "30-10-2024",
    value: "3,500,000 ₹",
  },
  {
    id: 3,
    job: "Finalize user testing feedback for app...",
    submitted: "05-12-2024",
    status: "In-process",
    submitter: "Mark Johnson",
    url: "www.markjohnson.com",
    assigned: "Rachel Lee",
    priority: "Medium",
    due: "10-12-2024",
    value: "4,750,000 ₹",
  },
  {
    id: 4,
    job: "Design new features for the website",
    submitted: "10-01-2025",
    status: "Complete",
    submitter: "Emily Green",
    url: "www.emilygreen.com",
    assigned: "Tom Wright",
    priority: "Low",
    due: "15-01-2025",
    value: "5,900,000 ₹",
  },
  {
    id: 5,
    job: "Prepare financial report for Q4",
    submitted: "25-01-2025",
    status: "Blocked",
    submitter: "Jessica Brown",
    url: "www.jessicabrown.com",
    assigned: "Kevin Smith",
    priority: "Low",
    due: "30-01-2025",
    value: "2,800,000 ₹",
  },
];

// Add 5 empty rows to visually simulate a spreadsheet layout
const emptyRows = Array.from({ length: 12 }, (_, i) => ({
  id: filledData.length + i + 1,
  job: "",
  submitted: "",
  status: "",
  submitter: "",
  url: "",
  assigned: "",
  priority: "",
  due: "",
  value: "",
}));

const data = [...filledData, ...emptyRows];

const columns: ColumnDef<typeof data[0]>[] = [
  {
    header: "#",
    accessorKey: "id",
    cell: ({ row }) => row.index + 1,
  },
  {
    header: "Job Request",
    accessorKey: "job",
  },
  {
    header: "Submitted",
    accessorKey: "submitted",
  },
  {
    header: "Status",
    accessorKey: "status",
    cell: ({ getValue }) => {
      const value = getValue() as string;
      if (!value) return "";
      const colorMap: Record<string, string> = {
        "In-process": "bg-yellow-100 text-yellow-700",
        "Need to start": "bg-blue-100 text-blue-700",
        Complete: "bg-green-100 text-green-700",
        Blocked: "bg-red-100 text-red-700",
      };
      return (
        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${colorMap[value]}`}>{value}</span>
      );
    },
  },
  {
    header: "Submitter",
    accessorKey: "submitter",
  },
  {
    header: "URL",
    accessorKey: "url",
  },
  {
    header: "Assigned",
    accessorKey: "assigned",
  },
  {
    header: "Priority",
    accessorKey: "priority",
    cell: ({ getValue }) => {
      const value = getValue() as string;
      if (!value) return "";
      const colorMap: Record<string, string> = {
        High: "text-red-600",
        Medium: "text-yellow-600",
        Low: "text-blue-600",
      };
      return <span className={`text-sm font-semibold ${colorMap[value]}`}>{value}</span>;
    },
  },
  {
    header: "Due Date",
    accessorKey: "due",
  },
  {
    header: "Est. Value",
    accessorKey: "value",
  },
  {
    header: "----------",
    accessorKey: "empty",
    cell: ({ getValue }) => {
      const value = getValue() as string;
      if (!value) return "";

    }
  }
];

export default function SpreadsheetView() {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div >
      <div>
        <Buttons />
        <Financial />
      </div>

      <div className="border  overflow-auto shadow-md">
        <table className="min-w-full text-sm ">
          <thead className="bg-gray-50 text-left border-b">
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map(header => (
                  <th
                    key={header.id}
                    className={`
    px-3 py-2 border-l font-medium whitespace-nowrap
    border-white
    ${header.column.id === "empty" ? "text-white" : ""}
    ${["priority", "due"].includes(header.column.id) ? "bg-purple-100" : ""}
    ${["assigned"].includes(header.column.id) ? "bg-[#E8F0E9]" : ""}
    ${["value"].includes(header.column.id) ? "bg-[#FFE9E0]" : ""}
  `}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map(row => (
              <tr key={row.id} className="border-t font-thin text-xs  hover:bg-gray-50">
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id} className="px-5 py-2 text-black border-l whitespace-nowrap">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
