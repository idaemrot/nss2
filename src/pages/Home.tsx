import React from 'react';
import { Link } from 'react-router-dom';
import { Award, CheckCircle, Shield } from 'lucide-react';
import { useAuth } from '../hooks/useAuth';

function FeatureCard({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
      <div className="inline-block p-3 bg-indigo-50 rounded-lg">
        <Icon className="h-6 w-6 text-indigo-600" />
      </div>
      <h3 className="mt-4 text-lg font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="space-y-16">
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl">
          Professional Certificate Generation Made Easy
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-gray-600">
          Create, manage, and send beautiful certificates in minutes with our secure platform.
        </p>
        {user ? (
          <Link
            to="/create-certificate"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Create Certificate
          </Link>
        ) : (
          <Link
            to="/login"
            className="inline-block px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            Get Started
          </Link>
        )}
      </section>

      <section className="grid md:grid-cols-3 gap-8">
        <FeatureCard
          icon={Shield}
          title="Secure & Professional"
          description="Industry-standard security with professional certificate templates."
        />
        <FeatureCard
          icon={CheckCircle}
          title="Easy to Use"
          description="Generate certificates in minutes with our intuitive interface."
        />
        <FeatureCard
          icon={Award}
          title="Automatic Delivery"
          description="Certificates are automatically sent to recipients via email."
        />
      </section>
    </div>
  );
}