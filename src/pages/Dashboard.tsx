import React from 'react';
import { Link } from 'react-router-dom';
import { PlusCircle, Palette } from 'lucide-react';
import { CertificateList } from '../components/certificates/CertificateList';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
        <div className="flex gap-4">
          <Link
            to="/template-manager"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Palette className="h-5 w-5 mr-2" />
            Manage Templates
          </Link>
          <Link
            to="/create-certificate"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
          >
            <PlusCircle className="h-5 w-5 mr-2" />
            New Certificate
          </Link>
        </div>
      </div>

      <CertificateList />
    </div>
  );
}