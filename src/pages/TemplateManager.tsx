import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoadingSpinner } from '../components/ui/LoadingSpinner';
import { ErrorMessage } from '../components/ui/ErrorMessage';
import { TemplateList } from '../components/templates/TemplateList';
import { TemplateForm } from '../components/templates/TemplateForm';
import { TemplateExample } from '../components/templates/TemplateExample';
import { useTemplates } from '../hooks/useTemplates';

export default function TemplateManager() {
  const navigate = useNavigate();
  const { templates, loading, error, refetch } = useTemplates();

  if (loading) {
    return (
      <div className="max-w-4xl mx-auto">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto">
        <ErrorMessage message="Failed to load templates" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Certificate Templates</h1>
      </div>

      <TemplateList templates={templates} />
      <TemplateForm onSuccess={refetch} />
      <TemplateExample />
    </div>
  );
}