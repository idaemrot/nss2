/*
  # Certificate Management Schema

  1. New Tables
    - `certificates`
      - `id` (uuid, primary key)
      - `recipient_name` (text)
      - `recipient_email` (text)
      - `course_title` (text)
      - `completion_date` (date)
      - `template_id` (uuid, foreign key)
      - `created_by` (uuid, foreign key)
      - `created_at` (timestamp)
      - `pdf_url` (text)
      - `status` (text)

    - `certificate_templates`
      - `id` (uuid, primary key)
      - `name` (text)
      - `html_template` (text)
      - `created_by` (uuid, foreign key)
      - `created_at` (timestamp)
      - `is_active` (boolean)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
*/

-- Create certificate_templates table
CREATE TABLE certificate_templates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  html_template text NOT NULL,
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  is_active boolean DEFAULT true,
  CONSTRAINT valid_name CHECK (char_length(name) >= 3)
);

-- Create certificates table
CREATE TABLE certificates (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  recipient_name text NOT NULL,
  recipient_email text NOT NULL,
  course_title text NOT NULL,
  completion_date date NOT NULL,
  template_id uuid REFERENCES certificate_templates(id),
  created_by uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now(),
  pdf_url text,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'generated', 'sent', 'error')),
  CONSTRAINT valid_email CHECK (recipient_email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$')
);

-- Enable RLS
ALTER TABLE certificate_templates ENABLE ROW LEVEL SECURITY;
ALTER TABLE certificates ENABLE ROW LEVEL SECURITY;

-- Policies for certificate_templates
CREATE POLICY "Users can view active templates"
  ON certificate_templates
  FOR SELECT
  TO authenticated
  USING (is_active = true);

CREATE POLICY "Admins can manage templates"
  ON certificate_templates
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users
      WHERE auth.users.id = auth.uid()
      AND auth.users.email LIKE '%@admin.com'
    )
  );

-- Policies for certificates
CREATE POLICY "Users can view their created certificates"
  ON certificates
  FOR SELECT
  TO authenticated
  USING (created_by = auth.uid());

CREATE POLICY "Users can create certificates"
  ON certificates
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can update their certificates"
  ON certificates
  FOR UPDATE
  TO authenticated
  USING (created_by = auth.uid());