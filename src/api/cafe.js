import axiosInstance from "@/api/index";

export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const response = await axiosInstance.post("/images/cafe", formData, {
    header: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response;
};
export const postCafe = async (registerForm) => {
  return await axiosInstance.post("/cafes", registerForm);
};
