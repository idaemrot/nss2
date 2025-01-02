import React from 'react';

export function LoadingSpinner() {
  return (
    <div className="text-center py-8">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-indigo-600 mx-auto" />
    </div>
  );
}