import axiosInstance from "@/api/index";

export const uploadImage = async (image, type) => {
  const formData = new FormData();
  formData.append("image", image);
  try {
    const res = await axiosInstance.post(`/images/${type}`, formData, {
      header: {
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data.data.imageUrl;
  } catch (error) {
    console.error(error);
  }
};
export const postCafe = async (registerForm) => {
  const res = await axiosInstance.post("/admin/cafes", registerForm);
  return res.data.message === "ok";
};

export const getCafeNames = async () => {
  return await axiosInstance.get("/admin/cafes/names");
};

export const postTheme = async (registerForm) => {
  const res = await axiosInstance.post("/admin/themes", registerForm);
  return res.data.message === "ok";
};

export const getGenres = async () => {
  return await axiosInstance.get("/admin/genres");
};
