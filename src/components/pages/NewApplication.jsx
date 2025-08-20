import  { useState, useEffect } from 'react';
import { startNewApplication } from '../../api/api';
import { extractUserIdFromToken } from '../../utils/jwtUtils';

const NewApplication = () => {

    console.log(extractUserIdFromToken(localStorage.getItem('accessToken')))

  const [formData, setFormData] = useState({
    university: '',
    program: '',
    deadline: '',
  });

  useEffect(() => {
    const handleBeforeUnload = (event) => {
      event.preventDefault();
      event.returnValue = 'Changes you made may not be saved.';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('accessToken');
    const userId = token ? extractUserIdFromToken(token) : null;

    if (!userId) {
      console.error('User ID not found in token');
      alert('You must be logged in to create a new application.');
      return;
    }

    try {
      const response = await startNewApplication(  userId );
      if (response.success) {
        alert('Application created successfully!');
        setFormData({ university: '', program: '', deadline: '' }); // Reset form
      } else {
        alert('Failed to create application. Please try again.');
      }
    } catch (error) {
      console.error('Error creating application:', error);
      alert('An error occurred while creating the application.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Start New Application</h2>


        {/* Commented for backend testing */}
        {/* <div className="mb-4">
          <label htmlFor="university" className="block text-sm font-medium text-gray-700">
            University
          </label>
          <input
            type="text"
            id="university"
            name="university"
            value={formData.university}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="program" className="block text-sm font-medium text-gray-700">
            Program
          </label>
          <input
            type="text"
            id="program"
            name="program"
            value={formData.program}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">
            Deadline
          </label>
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            required
          />
        </div> */}
        
        <button
          type="submit"
          className="w-full px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default NewApplication;