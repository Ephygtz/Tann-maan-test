'use client';

import { useState } from 'react';
import Form from '@/components/Form';
import Notification from '@/components/Notification';
import { submitUserData } from '@/services/api';
import type { UserData } from '@/services/api';

export default function Home() {
  const [notification, setNotification] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const handleFormSubmit = async (formData: UserData) => {
    try {
      await submitUserData(formData);

      setNotification({
        type: 'success',
        message: 'Form submitted successfully!',
      });

      // Clear notification after 5 seconds
      setTimeout(() => {
        setNotification({ type: null, message: '' });
      }, 5000);
    } catch (error) {
      setNotification({
        type: 'error',
        message: error instanceof Error ? error.message : 'An error occurred',
      });

      // Clear notification after 5 seconds
      setTimeout(() => {
        setNotification({ type: null, message: '' });
      }, 5000);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 md:p-24 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Good Morning
          </h1>
          <p className="text-gray-600 text-lg">
            Start your day by filling out this form
          </p>
        </div>

        {notification.type && (
          <Notification
            type={notification.type}
            message={notification.message}
            onClose={() => setNotification({ type: null, message: '' })}
          />
        )}

        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
          <Form onSubmit={handleFormSubmit} />
        </div>
      </div>
    </main>
  );
}
