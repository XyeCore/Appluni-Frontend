import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Page = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <div className="min-h-screen bg-gray-50">


      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Welcome back, John!</h1>
          <p className="text-gray-600">Track and manage your university applications in one place.</p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Applications</h3>
            <p className="text-3xl font-bold text-indigo-600">5</p>
            <p className="text-sm text-gray-500">Active applications</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Deadlines</h3>
            <p className="text-3xl font-bold text-indigo-600">3</p>
            <p className="text-sm text-gray-500">Upcoming deadlines</p>
          </div>
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">Offers</h3>
            <p className="text-3xl font-bold text-indigo-600">2</p>
            <p className="text-sm text-gray-500">Received offers</p>
          </div>
        </div>

        {/* Application List */}
        <div className="bg-white rounded-lg shadow-sm">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Your Applications</h2>
          </div>
          <div className="divide-y divide-gray-200">
            {/* Application Item */}
            <div className="p-6 hover:bg-gray-50 transition">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">University of Technology</h3>
                  <p className="text-sm text-gray-500">Computer Science - Master's Program</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 text-sm font-medium text-green-800 bg-green-100 rounded-full">
                    In Progress
                  </span>
                  <button className="text-indigo-600 hover:text-indigo-800 transition">
                    View Details
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Application ID: #12345</span>
                  <span>Deadline: March 15, 2024</span>
                  <span>Status: Documents Under Review</span>
                </div>
              </div>
            </div>

            {/* Another Application Item */}
            <div className="p-6 hover:bg-gray-50 transition">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">State University</h3>
                  <p className="text-sm text-gray-500">Business Administration - Bachelor's Program</p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="px-3 py-1 text-sm font-medium text-blue-800 bg-blue-100 rounded-full">
                    Accepted
                  </span>
                  <button className="text-indigo-600 hover:text-indigo-800 transition">
                    View Details
                  </button>
                </div>
              </div>
              <div className="mt-4">
                <div className="flex items-center space-x-4 text-sm text-gray-500">
                  <span>Application ID: #12346</span>
                  <span>Deadline: February 28, 2024</span>
                  <span>Status: Offer Received</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Actions</h3>
            <div className="space-y-4">
              <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition">
                Start New Application
              </button>
              <button className="w-full px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition">
                Upload Documents
              </button>
              <button className="w-full px-4 py-2 border border-indigo-600 text-indigo-600 rounded-md hover:bg-indigo-50 transition">
                Schedule Interview
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Upcoming Deadlines</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">University of Technology</p>
                  <p className="text-sm text-gray-500">Document Submission</p>
                </div>
                <span className="text-sm text-red-600">March 1, 2024</span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900">State University</p>
                  <p className="text-sm text-gray-500">Application Fee</p>
                </div>
                <span className="text-sm text-red-600">March 5, 2024</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
