import React from 'react';
import type { CertificateTemplate } from '../../types/database';
import { replacePlaceholders } from '../../utils/certificate';

interface CertificatePreviewProps {
  template: CertificateTemplate | null;
  formData: {
    recipient_name: string;
    course_title: string;
    completion_date: string;
  } | null;
}

export function CertificatePreview({ template, formData }: CertificatePreviewProps) {
  if (!template || !formData) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100 h-full flex items-center justify-center">
        <p className="text-gray-500">
          Select a template and fill in the details to preview the certificate
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
      <div className="certificate-preview-container" style={{ aspectRatio: '1.414/1' }}>
        <div 
          className="certificate-preview w-full h-full bg-white"
          dangerouslySetInnerHTML={{ 
            __html: replacePlaceholders(template, formData)
          }} 
        />
      </div>
    </div>
  );
}