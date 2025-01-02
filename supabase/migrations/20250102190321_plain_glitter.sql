/*
  # Fix certificate template policies

  1. Changes
    - Add policy for authenticated users to create templates
    - Modify view policy to allow viewing all active templates
  
  2. Security
    - Maintains RLS
    - Allows template creation by authenticated users
    - Restricts template viewing to active templates only
*/

-- Drop existing policies
DROP POLICY IF EXISTS "Users can view active templates" ON certificate_templates;
DROP POLICY IF EXISTS "Admins can manage templates" ON certificate_templates;

-- Create new policies
CREATE POLICY "Users can view active templates"
  ON certificate_templates
  FOR SELECT
  TO authenticated
  USING (is_active = true);

CREATE POLICY "Users can create templates"
  ON certificate_templates
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Users can update own templates"
  ON certificate_templates
  FOR UPDATE
  TO authenticated
  USING (created_by = auth.uid());