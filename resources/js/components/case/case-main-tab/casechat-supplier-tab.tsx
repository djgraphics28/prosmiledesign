import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";

export const ChatBoxSupplier: React.FC = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add submit logic for supplier chat
  };

  return (
    <div className="flex flex-col h-full">
      {/* Scrollable message area */}
      <ScrollArea className="h-[70vh] w-full p-4 rounded-md border">
        {/* Message from supplier */}
        <div className="flex items-start mb-4">
          <img src="https://randomuser.me/api/portraits/women/5.jpg" className="w-8 h-8 rounded-full mr-3" />
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-sm dark:text-gray-200">Sophia Reyes</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">9:55 AM</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mt-1 max-w-md">
              <p className="text-sm dark:text-gray-300">
                Please review the shipment details for order #1053.
              </p>
            </div>
          </div>
        </div>

        {/* Message from current user */}
        <div className="flex items-start justify-end mb-4">
          <div className="flex flex-col items-end">
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500 dark:text-gray-400">9:58 AM</span>
              <span className="font-medium text-sm dark:text-gray-200">You</span>
            </div>
            <div className="bg-blue-500 text-white rounded-lg p-3 mt-1 max-w-md dark:bg-blue-600">
              <p className="text-sm">Confirmed. I’ll update the system now.</p>
            </div>
          </div>
          <img src="https://randomuser.me/api/portraits/men/3.jpg" className="w-8 h-8 rounded-full ml-3" />
        </div>

        {/* Message with attached invoice */}
        <div className="flex items-start">
          <img src="https://randomuser.me/api/portraits/women/5.jpg" className="w-8 h-8 rounded-full mr-3" />
          <div className="flex flex-col">
            <div className="flex items-center space-x-2">
              <span className="font-medium text-sm dark:text-gray-200">Sophia Reyes</span>
              <span className="text-xs text-gray-500 dark:text-gray-400">10:00 AM</span>
            </div>
            <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-3 mt-1 max-w-md">
              <p className="text-sm mb-2 dark:text-gray-300">Here's the invoice for the latest delivery.</p>
              <div className="flex items-center bg-white dark:bg-gray-700 p-2 rounded border dark:border-gray-600">
                <svg className="w-4 h-4 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span className="text-sm text-blue-500 dark:text-blue-400">invoice_1053.pdf</span>
              </div>
            </div>
          </div>
        </div>
      </ScrollArea>

      {/* Chat input */}
      <div className="mt-4 border-t dark:border-gray-700 pt-4">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-1 p-2 border dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-gray-200"
            />
            <button
              type="submit"
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-700"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <div className="flex items-center space-x-2">
            <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <input type="file" className="hidden" accept=".pdf,.doc,.docx" />
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400">Attach File</span>
            </label>

            <label className="flex items-center space-x-2 cursor-pointer p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded">
              <input type="file" className="hidden" accept="image/*" />
              <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm text-gray-500 dark:text-gray-400">Upload Image</span>
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};
