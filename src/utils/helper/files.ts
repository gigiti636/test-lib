export const convertToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = (e) => {
      if (e.target) {
        const result = e.target.result as string;
        resolve(result);
      }
    };

    reader.onerror = (e) => {
      reject(new Error(e?.target?.error?.message ?? 'Error reading file'));
    };

    reader.readAsDataURL(file);
  });
};
