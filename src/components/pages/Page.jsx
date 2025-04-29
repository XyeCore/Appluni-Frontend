import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import { Copy } from 'react-feather';
import { useTranslation } from 'react-i18next';

export const Page = () => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    
    const token = localStorage.getItem('authToken');
    if (token) {
      const tokenParts = token.split('.');
      if (tokenParts.length === 3) {
        const payload = JSON.parse(atob(tokenParts[1]));
        setUserInfo({ username: payload.sub, fullName: payload.fullName }); // Extracted username and fullName from JWT
      }
    }
    
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };



  return (
    <div className="min-h-screen bg-gray-50">

    
      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Welcome Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {t('welcome')}, {userInfo?.fullName || t('user')}!
          </h1>
          <p className="text-gray-600">
            {t('trackApplications')}
          </p>
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
                  <button className="text-indigo-600 hover:text-indigo-800 transition" onClick={() => openModal({
                    id: "12345",
                    university: 'University of Technology',
                    program: 'Computer Science - Master\'s Program',
                    deadline: 'March 15, 2024',
                    status: 'Documents Under Review'
                  })}>
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
                  <button className="text-indigo-600 hover:text-indigo-800 transition" onClick={() => openModal({
                    id: "12345",
                    university: 'State University',
                    program: 'Business Administration - Bachelor\'s Program',
                    deadline: 'February 28, 2024',
                    status: 'Offer Received'
                  })}>
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
{/* Modal Window */}
        <Modal  open={isModalOpen} onClose={closeModal}>
          <div className="text-gray-900">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Application Details
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={() => {
                navigator.clipboard.writeText(modalContent?.id);
                alert("ID copied to clipboard");
              }}
              className="flex p-1 rounded-md text-gray-400 bg-white hover:bg-gray-50 hover:text-gray-600"
            >
              ID:  {modalContent?.id+"  "} <Copy />
            </button>
          </div>

          </h2>
          <p><strong>University:</strong> {modalContent?.university}</p>
          <p><strong>Program:</strong> {modalContent?.program}</p>
          <p><strong>Deadline:</strong> {modalContent?.deadline}</p>
          <p><strong>Status:</strong> {modalContent?.status}</p>
          </div>
        </Modal>
      </main>
    </div>
  );
};
