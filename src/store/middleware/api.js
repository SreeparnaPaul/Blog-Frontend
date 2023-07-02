import axios from "axios";
const api = async (url, method, data) => {
  // Add the 'DMS_Token' cookie to the request headers

  const headers = {
    "Content-Type": "application/json",
  };
  const token = JSON.parse(localStorage.getItem("token"));
  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }
  try {
    const response = await axios.request({
      baseURL: `${process.env.REACT_APP_API}`,
      url,
      method,
      headers,
      data,
      withCredentials: true,
    });
    return response;
  } catch (error) {
    if (error?.response?.data?.message === "Invalid Token") {
      localStorage.removeItem("token");
      localStorage.removeItem("loggedInUser");
      window.location.href = "/signIn";
    } else if (error?.message === "Request aborted") {
      localStorage.removeItem("token");
      localStorage.removeItem("loggedInUser");
      window.location.href = "/signIn";
    }

    return error;


  }
};

export default api;
