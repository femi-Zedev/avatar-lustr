import React, { useState } from 'react';

interface SVGtoPNGConverterProps {
  svgUrl: string;
}

const SVGtoPNGConverter: React.FC<SVGtoPNGConverterProps> = ({ svgUrl }) => {
  const [pngDataUrl, setPngDataUrl] = useState<string | null>(null);

  const convertSVGtoPNG = async () => {
    try {
      const response = await fetch(svgUrl);
      const blob = await response.blob();
      const img = new Image();
      
      img.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.drawImage(img, 0, 0);
          const dataURL = canvas.toDataURL('image/png',1);
          setPngDataUrl(dataURL);
        }
      };

      img.src = URL.createObjectURL(blob);
    } catch (error) {
      console.error('Error converting SVG to PNG:', error);
    }
  };

  return (
    <div>
      <img src={svgUrl} alt="SVG" />
      <button onClick={convertSVGtoPNG}>Convert to PNG</button>
      {pngDataUrl && (
        <div>
          <h2>Converted PNG:</h2>
          <img src={pngDataUrl} alt="Converted PNG" />
        </div>
      )}
    </div>
  );
};


export default SVGtoPNGConverter;