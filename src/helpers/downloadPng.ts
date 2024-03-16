import { convertSVGtoPNG } from "./imageConverter";

export const downloadPNG = async (svgUrl: string, fileName: string) => {
  try {
    const pngBlob = await convertSVGtoPNG(svgUrl);
    const url = URL.createObjectURL(pngBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('Error downloading PNG:', error);
  }
};