export const convertSVGtoPNG = async (svgUrl: string): Promise<Blob> => {
  try {
    const response = await fetch(svgUrl);
    const blob = await response.blob();
    const img = new Image();
    
    return new Promise((resolve, reject) => {
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        if (ctx) {
          const devicePixelRatio = window.devicePixelRatio || 1;
          canvas.width = img.width * devicePixelRatio;
          canvas.height = img.height * devicePixelRatio;
          ctx.scale(devicePixelRatio, devicePixelRatio);
          ctx.drawImage(img, 0, 0);
          canvas.toBlob(
            (blob) => {
              if (blob) {
                resolve(blob);
              } else {
                reject(new Error('Failed to convert canvas to blob'));
              }
            },
            'image/png',
            1 // Specify quality (1 for maximum)
          );
        } else {
          reject(new Error('Canvas context is not supported'));
        }
      };

      img.onerror = (error) => {
        reject(new Error('Failed to load SVG: ' + error));
      };

      img.src = URL.createObjectURL(blob);
    });
  } catch (error) {
    throw new Error('Error converting SVG to blob: ' + error);
  }
};