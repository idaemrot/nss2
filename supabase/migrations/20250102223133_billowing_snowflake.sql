-- Create storage bucket for certificates
INSERT INTO storage.buckets (id, name, public) 
VALUES ('certificates', 'certificates', true);

-- Allow authenticated users to upload files
CREATE POLICY "Allow authenticated users to upload certificates"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (
  bucket_id = 'certificates' AND
  auth.role() = 'authenticated'
);

-- Allow public access to read certificate files
CREATE POLICY "Allow public to read certificates"
ON storage.objects
FOR SELECT
TO public
USING (bucket_id = 'certificates');