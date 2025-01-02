import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertCircle } from 'lucide-react';
import { CertificateForm } from '../components/certificates/CertificateForm';
import { CertificatePreview } from '../components/certificates/CertificatePreview';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { useCertificateTemplates } from '../hooks/useCertificateTemplates';
import type { CertificateTemplate } from '../types/database';

interface PreviewData {
  recipient_name: string;
  course_title: string;
  completion_date: string;
}

export default function CreateCertificate() {
  const navigate = useNavigate();
  const { templates, loading, error } = useCertificateTemplates();
  const [selectedTemplate, setSelectedTemplate] = useState<CertificateTemplate | null>(null);
  const [previewData, setPreviewData] = useState<PreviewData | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  if (loading) return <LoadingSpinner />;
  
  if (error) {
    return (
      <div className="text-center py-8">
        <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
        <ErrorMessage message="Failed to load certificate templates. Please try again later." />
      </div>
    );
  }
  
  if (!templates.length) {
    return (
      <div className="text-center py-8">
        <AlertCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
        <ErrorMessage message="No certificate templates available. Please create a template first." />
      </div>
    );
  }

  const handleSuccess = () => {
    setIsGenerating(false);
    navigate('/dashboard');
  };

  return (
    <div className="space-y-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Create Certificate</h1>
        <p className="text-sm text-gray-500 mt-1 sm:mt-0">
          Fill in the details below to generate a certificate
        </p>
      </div>
      
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <CertificateForm 
              templates={templates}
              onTemplateSelect={setSelectedTemplate}
              onFormChange={setPreviewData}
              onGenerating={setIsGenerating}
              onSuccess={handleSuccess}
            />
          </div>
        </div>
        
        <div className="lg:sticky lg:top-6">
          <div className="bg-white rounded-lg shadow-sm border border-gray-100">
            {isGenerating ? (
              <div className="flex items-center justify-center h-full min-h-[400px]">
                <div className="text-center">
                  <LoadingSpinner />
                  <p className="mt-4 text-sm text-gray-500">Generating certificate...</p>
                </div>
              </div>
            ) : (
              <CertificatePreview 
                template={selectedTemplate}
                formData={previewData}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}