import React, { useState } from 'react';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('Manage Users');

  const tabs = [
    { label: 'Manage Users', content: 'Test content for managing users.' },
    { label: 'Manage Applications', content: (
        <div>
          <h2 className="text-lg font-bold mb-4">Manage Applications</h2>
          <p>Here you can view and manage all applications submitted by users.</p>
          <ul className="list-disc pl-5 mt-4">
            <li>View application details</li>
            <li>Approve or reject applications</li>
            <li>Filter applications by status</li>
          </ul>
        </div>
      ) },
    { label: 'Manage Universities', content: (
        <div>
          <h2 className="text-lg font-bold mb-4">Manage Universities</h2>
          <p>Here you can create and manage universities and their programs.</p>
          <div className="mt-4">
            <h3 className="text-md font-semibold mb-2">Create a New University</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">University Name</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Enter university name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Country</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Enter Country" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">City</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Enter City" />
              </div>
              <button type="submit" className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700">Create University</button>
            </form>
          </div>
          <div className="mt-6">
            <h3 className="text-md font-semibold mb-2">Create a New Program</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Program Name</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Enter program name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">University</label>
                <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                  <option>Select a university</option>
                  <option>University A</option>
                  <option>University B</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Degree</label>
                <select className="mt-1 block w-full border-gray-300 rounded-md shadow-sm">
                  <option>Select degree level</option>
                  <option>Bachellor</option>
                  <option>Master</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Language</label>
                <input type="text" className="mt-1 block w-full border-gray-300 rounded-md shadow-sm" placeholder="Enter program name" />
              </div>
              <button type="submit" className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">Create Program</button>
            </form>
          </div>
        </div>
      ) },
    { label: 'Site Settings', content: 'Test content for site settings.' },
    { label: 'View Logs', content: 'Logs are not available right now.' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-4 sm:p-6">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Admin Panel</h1>
        <div className="flex flex-wrap gap-2 sm:gap-4 border-b border-gray-200 mb-4 sm:mb-6">
          {tabs.map((tab) => (
            <button
              key={tab.label}
              className={`px-2 sm:px-4 py-1 sm:py-2 text-sm sm:text-base text-gray-600 border-b-2 transition ${
                activeTab === tab.label
                  ? 'text-indigo-600 border-indigo-600'
                  : 'border-transparent hover:text-indigo-600 hover:border-indigo-600'
              }`}
              onClick={() => setActiveTab(tab.label)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="p-3 sm:p-4 bg-gray-50 rounded-lg text-gray-900 text-sm sm:text-base">
          {tabs.find((tab) => tab.label === activeTab)?.content}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;