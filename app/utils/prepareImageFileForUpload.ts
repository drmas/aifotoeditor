export default function prepareImageFileForUpload(file: File) {
  return new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const img = document.createElement("img");
      img.onload = function () {
        const MAX_WIDTH = 1024;
        const MAX_HEIGHT = 1024;

        let width = img.width;
        let height = img.height;
        const aspect = width / height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            width = MAX_WIDTH;
            height = MAX_WIDTH / aspect;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = MAX_HEIGHT * aspect;
            height = MAX_HEIGHT;
          }
        }

        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;

        const ctx = canvas.getContext("2d");
        if (!ctx) {
          return reject("Could not get canvas context");
        }

        (ctx as any).mozImageSmoothingEnabled = false;
        (ctx as any).webkitImageSmoothingEnabled = false;
        (ctx as any).msImageSmoothingEnabled = false;
        ctx.imageSmoothingEnabled = false;

        ctx.drawImage(img, 0, 0, width, height);

        const dataURL = canvas.toDataURL(file.type);

        resolve(dataURL);
      };

      img.src = e?.target?.result as string;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}
