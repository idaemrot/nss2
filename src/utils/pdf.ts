import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { supabase } from '../lib/supabase';
import { retryAsync } from './retry';

export async function generatePDF(data: any) {
  const element = document.querySelector('.certificate-preview');
  if (!element) {
    throw new Error('Certificate preview element not found');
  }

  try {
    // Wait for any animations to complete
    await new Promise(resolve => setTimeout(resolve, 500));

    const canvas = await retryAsync(
      () => html2canvas(element, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff',
        onclone: (doc) => {
          // Ensure all images are loaded
          const images = doc.getElementsByTagName('img');
          return Promise.all(
            Array.from(images).map(img => 
              new Promise((resolve, reject) => {
                if (!img.src) {
                  resolve(null);
                  return;
                }
                img.crossOrigin = 'anonymous';
                img.onload = resolve;
                img.onerror = () => reject(new Error(`Failed to load image: ${img.src}`));
                if (img.complete) {
                  img.src = img.src;
                }
              })
            )
          );
        }
      }),
      3,
      1000
    );

    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4'
    });

    const imgData = canvas.toDataURL('image/jpeg', 1.0);
    pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210);

    const pdfBlob = pdf.output('blob');
    const fileName = `certificate-${Date.now()}.pdf`;

    const { data: uploadData, error: uploadError } = await retryAsync(
      () => supabase.storage
        .from('certificates')
        .upload(fileName, pdfBlob, {
          contentType: 'application/pdf',
          cacheControl: '3600'
        }),
      3,
      1000
    );

    if (uploadError) {
      console.error('Upload error:', uploadError);
      throw new Error('Failed to upload PDF');
    }

    const { data: { publicUrl } } = supabase.storage
      .from('certificates')
      .getPublicUrl(fileName);

    return publicUrl;
  } catch (error) {
    console.error('PDF generation error:', error);
    throw new Error('Failed to generate PDF: ' + (error instanceof Error ? error.message : 'Unknown error'));
  }
}