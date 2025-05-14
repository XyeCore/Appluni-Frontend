import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal';
import { Copy } from 'react-feather';
import { useTranslation } from 'react-i18next';
import { fetchApplications, deleteApplication } from '../../api/api.js';
import { extractUserIdFromToken } from '../../utils/jwtUtils';

export const Page = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [applications, setApplications] = useState([]); // Initialize as an empty array
  const [isLoading, setIsLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state
  const [deletingApplicationId, setDeletingApplicationId] = useState(null); // Track the application being deleted
  const navigate = useNavigate();

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

  useEffect(() => {
    const loadApplications = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem('accessToken');
        const userId = token ? extractUserIdFromToken(token) : null; // Use utility function to extract user ID
        if (!userId) {
          throw new Error('User ID not found in token');
        }
        const data = await fetchApplications(userId, 0, 10, ['submittedAt,desc']);
        setApplications(data.content || []); // Ensure content is an array
      } catch (err) {
        console.error('Failed to load applications:', err);
        setError('Failed to load applications. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    loadApplications();
  }, []);

  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setModalContent(null);
    setIsModalOpen(false);
  };

  const navigateToNewApplicationPage = () => {
    navigate('/new-application');
  };

  const handleDeleteApplication = async () => {
    if (modalContent) {
      closeModal(); // Close the modal immediately

      // Delay the confirmation dialog slightly to ensure the modal is fully closed
      setTimeout(async () => {
        try {
          // Are you sure you want to delete this application?
          const confirmDelete = window.confirm(`Are you sure you want to delete the application with ID: ${modalContent.id}?`);
          if (!confirmDelete) {
            return; // User canceled the deletion
          }
          setDeletingApplicationId(modalContent.id); // Set the deleting application ID
          setTimeout(async () => {
            await deleteApplication(modalContent.id); // Await the delete function to ensure it completes
            setApplications((prevApps) => prevApps.filter((app) => app.id !== modalContent.id)); // Remove the application from the list
            setDeletingApplicationId(null); // Clear the deleting application ID
          }, 500); // Delay to allow animation to complete
        } catch (error) {
          console.error('Error marking application as deleted:', error);
          alert('An error occurred while marking the application as deleted. Please try again.');
          setDeletingApplicationId(null); // Clear the deleting application ID in case of error
        }
      }, 10); // Delay to ensure modal is fully closed before showing the confirmation dialog
    }
  };

  if (isLoading) {
    return <div>Loading applications...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

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
          
          <div className="divide-y divide-gray-200 ">
            {applications.map((application) => (
              <div
                key={application.id}
                className={`p-6 hover:bg-gray-50 transition-all duration-300 ease-in-out ${deletingApplicationId === application.id ? 'transform -translate-x-full opacity-0 pointer-events-none' : ''}`}
                
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">Application ID: {application.id}</h3>
                    <p className="text-sm text-gray-500">Status: {application.status}</p>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 text-sm font-medium rounded-full ${application.status === 'PENDING' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                      {application.status}
                    </span>
                    <button className="text-indigo-600 hover:text-indigo-800 transition" onClick={() => openModal({
                    id: application.id,
                    university: 'State University',
                    program: 'Business Administration - Bachelor\'s Program',
                    deadline: 'February 28, 2024',
                    status: 'Offer Received',
                    isDeleted: application.isDeleted
                  })}>
                    View Details
                  </button>
                  </div>
                </div>
                <div className="mt-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span>Submitted At: {new Date(application.submittedAt).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
             <div className="p-6 hover:bg-gray-50 transition">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-900">State University</h3>
                  <p className="text-sm text-gray-500">Business Administration - Bachelor{'\''}s Program</p>
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
              <button
                className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
                onClick={navigateToNewApplicationPage}
              >
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
        <Modal open={isModalOpen} onClose={closeModal}>
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
                  ID: {modalContent?.id} <Copy className='ml-2' />
                </button>
              </div>
            </h2>
            <p><strong>University:</strong> {modalContent?.university}</p>
            <p><strong>Program:</strong> {modalContent?.program}</p>
            <p><strong>Deadline:</strong> {modalContent?.deadline}</p>
            <p><strong>Status:</strong> {modalContent?.status}</p>
            <button
              className="w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-800 transition"
              onClick={handleDeleteApplication}
            >
              Delete Application
            </button>
          </div>
        </Modal>
      </main>
    </div>
  );
};
