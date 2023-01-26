import axiosInstance from "@/api/index";

export const uploadImage = async (image) => {
  const formData = new FormData();
  formData.append("image", image);
  const res = await axiosInstance.post("/images/cafe", formData, {
    header: {
      "Content-Type": "multipart/form-data",
    },
  });
  return res.data.data.imageUrl;
};
export const postCafe = async (registerForm) => {
  const res = await axiosInstance.post("/cafes", registerForm);
  return res.data.message === "ok";
};
