import { cn } from "@/lib/utils"

type PaginationProps = {
  currentPage: number
  totalPages: number
  perPage: number
  totalResults: number
  onPageChange: (page: number) => void
}

export default function Pagination({
  currentPage,
  totalPages,
  perPage,
  totalResults,
  onPageChange,
}: PaginationProps) {
  const start = (currentPage - 1) * perPage + 1
  const end = Math.min(currentPage * perPage, totalResults)

  const getPageNumbers = () => {
    // Show only a few page numbers, with ellipsis if needed
    const range = []
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(currentPage - i) <= 1) {
        range.push(i)
      } else if (
        (i === currentPage - 2 && i > 1) ||
        (i === currentPage + 2 && i < totalPages)
      ) {
        range.push("...")
      }
    }
    return [...new Set(range)]
  }

  return (
    <div className="flex items-center justify-between rounded my-6">
      <span className="text-sm text-gray-600 dark:text-gray-300">
        Showing {start} to {end} of {totalResults} results
      </span>
      <div className="flex space-x-2">
        <button
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded focus:outline-none",
            currentPage === 1
              ? "bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"
          )}
        >
          Previous
        </button>

        {getPageNumbers().map((page, index) =>
          page === "..." ? (
            <span
              key={`ellipsis-${index}`}
              className="px-4 py-2 text-sm text-gray-500 dark:text-gray-400"
            >
              ...
            </span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(Number(page))}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded focus:outline-none",
                page === currentPage
                  ? "bg-gray-400 dark:bg-gray-500 text-white"
                  : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"
              )}
            >
              {page}
            </button>
          )
        )}

        <button
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className={cn(
            "px-4 py-2 text-sm font-medium rounded focus:outline-none",
            currentPage === totalPages
              ? "bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-500"
          )}
        >
          Next
        </button>
      </div>
    </div>
  )
}
