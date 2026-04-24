export const getOptimizedUrl = (url: string, width: number = 800) => {
  if (!url || !url.includes("cloudinary.com")) return url;
  // Cloudinary allows inserting transformation parameters after "/upload/"
  return url.replace("/upload/", `/upload/w_${width},c_limit,f_auto,q_auto/`);
};
