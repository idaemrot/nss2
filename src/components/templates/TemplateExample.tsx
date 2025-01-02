import React from 'react';
import { baseTemplate } from '../../utils/certificateTemplates/baseTemplate';

export function TemplateExample() {
  return (
    <div className="bg-gray-50 p-4 rounded-lg">
      <h2 className="text-lg font-medium text-gray-900 mb-4">Template Example</h2>
      <div className="bg-white p-4 rounded border border-gray-200 overflow-x-auto">
        <pre className="text-sm text-gray-600 whitespace-pre-wrap font-mono">
          {baseTemplate.html_template}
        </pre>
      </div>
      <div className="mt-4 text-sm text-gray-500">
        <p>Available placeholders:</p>
        <ul className="list-disc list-inside mt-2">
          <li>{'{{recipient_name}}'} - Name of the certificate recipient</li>
          <li>{'{{course_title}}'} - Title of the course or achievement</li>
          <li>{'{{completion_date}}'} - Date of completion</li>
        </ul>
      </div>
    </div>
  );
}