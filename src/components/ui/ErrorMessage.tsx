import React from 'react';

interface ErrorMessageProps {
  message?: string;
}

export function ErrorMessage({ message = 'An error occurred' }: ErrorMessageProps) {
  return (
    <div className="text-center py-8 text-red-600">
      {message}
    </div>
  );
}