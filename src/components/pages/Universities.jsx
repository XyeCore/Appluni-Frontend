import React from 'react';
import UniversityCard from '../UniversityCard';
import Modal from '../Modal';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';


export const Universities = () => {
  const universities = [
    { name: 'University of Technology', location: 'City A', programs: ['Computer Science', 'Engineering'] },
    { name: 'State University', location: 'City B', programs: ['Business Administration', 'Law'] },
    { name: 'National University', location: 'City C', programs: ['Medicine', 'Arts'] },
  ];
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const { t } = useTranslation();

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
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            {t('universities')}
          </h1>
          <p className="text-gray-600">
            {t('explorePrograms')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {universities.map((university, index) => (
            <UniversityCard key={index} university={university} onClick={
                () => openModal(`Details about ${university.name}: ${university.programs.join(', ')}`)
                
            } />
          ))}
        </div>
      </main>

      <Modal open={isModalOpen} onClose={closeModal}>
        <div className="p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-4">University Details</h2>
          <p className="text-gray-600">{modalContent}</p>
          <button
            onClick={closeModal}
            className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition"
          >
            Close
          </button>
        </div>
      </Modal>
    </div>

  );
};



