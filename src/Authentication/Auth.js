import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { sweetAlert } from "../Utils/sweetAlert";

const Auth = () => {
  const [token, setToken] = useState(localStorage.getItem("token"));
//   const [userData, setUserData] = useState(
//     localStorage.getItem("loggedInUser")
//   );
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    // Save the token to local storage whenever it changes
    if (token) {
      localStorage.setItem("token", token);
    //   localStorage.setItem("loggedInUser", userData);
    } else {
    //   localStorage.removeItem("loggedInUser");
      localStorage.removeItem("token");
    }
  }, [token]);

  // Function to handle user login
  const login = async (username, password) => {
    setIsLoading(true);
    try {
      var headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");
      // Send a request to your authentication server
      console.log(username,password,"line12");
      await fetch(`${process.env.REACT_APP_API}/authentication/login`, {
        method: "POST",
        headers: headers,
        credentials: "include",
        body: JSON.stringify({
            channel:"web",
            password:password,
            username: username,     
        }),
      })
        .then((e) => e.json())
        .then((response) => {
            console.log(response,"line44");
          if (response.message === "SUCCESSFUL") {
            // const token = data;

            // Store the token in the state
            localStorage.setItem("token", JSON.stringify(response?.data?.token));

            // localStorage.setItem("loggedInUser", JSON.stringify(data?.Data));
            setToken(JSON.stringify(response?.data?.token));
            // setUserData(JSON.stringify(data?.Data));
           
              history.push({
                pathname: "/",
                // state: {
                //   userEmail: data?.Data?.email,
                //   admin: data?.Data?.isAdmin,
                // },
              });
         
            setError(null);
          } else {
            // Handle login error
            sweetAlert("Oops...", "Invalid username or password", "error");
            setError("Invalid username or password");
            setToken(null);
          }
        });

      // Check if the login was successful
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
      sweetAlert("Error", "Login error:" + error, "Error");
      setToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  const refreshToken = async () => {
    setIsLoading(true);
    try {
      const token = JSON.parse(localStorage.getItem("token"));

      var headers = new Headers();
      headers.append("Content-Type", "application/json");
      headers.append("Accept", "application/json");
      if (token) {
        headers.append("Authorization", `Bearer ${token}`);
      } else {
        window.location.href = "/login";
      }
      // Send a request to your authentication server
      await fetch(`${process.env.REACT_APP_API}/userAuth/refreshToken`, {
        method: "GET",
        headers: headers,
        credentials: "include",
      })
        .then((e) => e.json())
        .then((data) => {
          if (data.error === "No") {
            setToken(JSON.stringify(data?.token));
            // setUserData(JSON.stringify(data?.Data));
            setError(null);
          } else {
            // Handle login error
            window.location.href = "/login";
            setToken(null);
          }
        });

      // Check if the login was successful
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred during login");
      window.location.href = "/signIn";
      localStorage.removeItem("token");
    //   localStorage.removeItem("loggedInUser");
      localStorage.clear();
      // sweetAlert("Error", "Refesh token error:" + error, "Error");
      // setToken(null);
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle user logout
  const logout = async () => {
    localStorage.removeItem("token");
    // localStorage.removeItem("loggedInUser");
    localStorage.clear();
    window.location.reload();
    // Send a request to your authentication server
    var requestOptions = {
      method: "DELETE",
      redirect: "follow",
      credentials: "include",
    };

    await fetch(`${process.env.REACT_APP_API}/userAuth`, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
    setToken(null);
  };

  // Function to check if the user is logged in
  const isLoggedIn = () => {
    return token !== null;
  };

  return {
    token,
    error,
    // userData,
    isLoading,
    login,
    logout,
    isLoggedIn,
    refreshToken,
  };
};

export default Auth;